const express = require("express");

const router = express.Router()
const phonesJson = require("../data/phones.json");

router.get('/', (req,res,next)=>{
    res.status(200).send(phonesJson)
})

router.get('/:id', (req,res,next)=>{
    const selectedPhone = phonesJson.filter((eachPhone)=>{
        console.log(eachPhone.id)
        return parseInt(req.params.id) === eachPhone.id
    })
    res.status(200).send(selectedPhone)
})


module.exports = router;