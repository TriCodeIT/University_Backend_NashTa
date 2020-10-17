const router = require("express").Router();
const { Mahasiswa, MataKuliah, Nilai } = require("../models");
const XLSX = require("xlsx");
const sequelize = require("sequelize");
const multer = require("multer");
const DIR = 'uploads/';
const { fromString } = require('uuidv4');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fromString('the native web') + '-' + new Date().getTime() + fileName);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        cb(null, true);
    }
});


// Method GET, Mengambil Data Mahasiswa dengan Nama Mata Kuliahnya beserta Nilainya 
router.get("/", (req, res) => {
    Nilai.findAll({
        include: [{ model: Mahasiswa, as: "Mahasiswa" }, { model: MataKuliah, as: "MataKuliah" }]
    })
        .then(result => {
            let data = [];
            result.map(el=> {
                data.push({
                    ID_Mahasiswa: el.ID_Mahasiswa,
                    Nama: el.Mahasiswa.Nama,
                    NamaMataKuliah: el.MataKuliah.NamaMataKuliah,
                    Nilai: el.Nilai
                })
            })
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


// Method GET, Mengambil Jumlah Nilai Rata-Rata dari Seluruh Mahasiswa
router.get("/average", (req, res) => {
    Nilai.findAll({
        attributes: [[sequelize.fn('avg', sequelize.col('Nilai.Nilai')), 'rata_rata_nilai']],
        raw: true,
        order: sequelize.literal('rata_rata_nilai DESC')
    })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
        })
})


//Method POST, Mengupload Nilai dengan Data ID_Mahasiswa dan ID_MataKuliah
router.post("/", (req, res) => {
    console.log(req.body);
    Nilai.create({
        ID_Mahasiswa: req.body.ID_Mahasiswa,
        ID_MataKuliah: req.body.ID_MataKuliah,
        Nilai: req.body.Nilai,
    })
        .then(newValue => {
            res.status(201).json(newValue)
        })
        .catch(err => {
            res.status(401).json(err)
        })

})


// Method PUT, Mengedit Data Mahasiswa dari file xls 
router.put("/", upload.single("data"), (req, res) => {
    console.log(req.file.filename);
    const workbook = XLSX.readFile(`uploads/${req.file.filename}`);
    const sheet_name_list = workbook.SheetNames;
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    
    data.map(el => {
        Mahasiswa.update({
            ID: el.ID,
            Nama: el.Nama,
            Alamat: el.Alamat
        }, {
            where: {
                ID: el.ID,
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })
})


// Method DELETE, Menghapus Data Nilai dengan Data ID_Mahasiswa dan ID_MataKuliah melalui id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let deletedNilai;
    Nilai.findOne({
        where: {
            id
        }
    })
        .then(resultNilai => {
            console.log(resultNilai);
            if (resultNilai) {
                deletedNilai = resultNilai;
                Nilai.destroy({
                    where: {
                        id: Number(id)
                    }
                })
                .then(_ => {
                    res.status(200).json({
                        msg: "success delete data",
                        data: deletedNilai
                    });
                })
                .catch(err => {
                    res.status(400).json(err)
                })
            } else {
                res.status(404).json({
                    msg: "Value Not Found"
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;