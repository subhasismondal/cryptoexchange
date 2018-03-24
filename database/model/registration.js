const mongoose=require('mongoose');
const registration=mongoose.Schema({
    name:{
        type:String
    },
      username:{
        type:String
    },
      password:{
        type:String
    },
      email:{
        type:String
    },

})

const regs=module.exports=mongoose.model('regs',registration);