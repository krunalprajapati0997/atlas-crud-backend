const express = require('express');
const route = express.Router();
const user = require("../model/user")


route.get('/',(req,res)=>{
    console.log('hey..R.. Get')
    res.send('this a aaaa page')
})

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

route.delete("/:id",async(req,res)=>{
    const id = req.params.id
     const user2 = await user.findByIdAndDelete(req.params.id);
     
     res.send(user2)
 })

module.exports = route