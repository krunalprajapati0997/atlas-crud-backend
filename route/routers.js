const { Router } = require('express');
const express = require('express');
const route = express.Router();


const user = require("../model/user")
const {ObjectId} =require('mongodb')


// route.get('/',(req,res)=>{
//     console.log('hey..R.. Get')
//     res.send('this a aaaa page')
// })

// route.get('/user/:id',(req,res)=>{
//     const id = req.params.id;
//     user.findById(id).exec((err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result);
//         }
        
//     })
// })

route.get('/', (req, res) => {
    user.find({}).exec(function (err, ress) {n
        res.json({ 'data': ress })
    })
})

route.delete('/:id', (req, res) => {
    const id = req.params.id
    user.findByIdAndDelete({_id}).exec(function (err, ress) {
        res.json({ 'data': ress })
    })
})





// route.get('/', (req, res) => {
//         const id = req.params.id
//         user.findById(ObjectId("622308fd8175791718898e69"))

//         res.send(req.body)
//         console.log('hey get')
//     })


route.post('/',async(req,res)=>{
    console.log('hey..post');
    const data = await user(req.body);
    data.save()
    res.send(req.body)
})

route.put('/:id',async(req,res)=>{
    console.log('hey...put')
    const id = req.params.id
    const data = await user.findByIdAndUpdate(req.params.id,req.body)
    data.save()
    res.send(req.body)
})

// route.delete("/:id",async(req,res)=>{
//     const id = req.params.id
//      const user2 = await user.findByIdAndDelete(req.params.id);
     
//      res.send(user2)
//  })

module.exports = route