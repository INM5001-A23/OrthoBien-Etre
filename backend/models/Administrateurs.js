import mongoose from 'mongoose';


const adminSchema = new mongoose.Schema({

    codeAdmin:{
        type:String,
        required:true,
        unique:true
    },
    nomAdmin:{
        type:String,
        required : true
    },
    prenomAdmin:{
        type:String,
        required:true,
    },
    courrielAdmin:{
        type:String,
        required: true,
        unique: true
    },
    numeroAdmin:{
        type: Number,
        required: true,
        unique: true
    }
});

const Administrateurs = mongoose.model('Administrateurs',adminSchema);
module.exports = Administrateurs;

