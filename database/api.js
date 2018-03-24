const express = require('express');
const router = express.Router();
const mongojs=require('mongojs');
const regs=require('./model/registration');
//var db=mongojs('mongodb://user:user1234@ds133251.mlab.com:33251/videoplayer_sm',['quotes'])
router.get('/users',(req,res,next)=>{
    regs.find((err,data)=>{
        if(err){
            throw err;
        }
        res.json(data);
    })
    
})

router.get('/users/:id',(req,res,next)=>{
    regs.findOne({_id:req.params.id},(err,data)=>{
        if(err){
            throw err;
        }
        res.json(data);
    })
    
})
router.delete('/users/:id',(req,res,next)=>{
    regs.remove({_id:req.params.id},(err,data)=>{
        if(err){
            throw err;
        }
        res.json(data);
    })
    
})

router.post('/users',(req,res,next)=>{
    let newUser=new regs({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age,
        city:req.body.city,
        pin:req.body.pin
    });

    newUser.save((err,user)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json('Item saved successfully');
        }
    })
})

router.put('/users/:id',(req,res,next)=>{
     
    regs.findOneAndUpdate({_id:req.params.id},{
        $set:{
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        city: req.body.city,
        pin: req.body.pin
    }
},
function(err,result){
    if(err){
        res.json(err);
    }
    else{
        res.json("successfully Updated")
    }
}
        
)})


module.exports = router;