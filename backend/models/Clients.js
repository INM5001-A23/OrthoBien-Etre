import mongoose from mongoose;


const clientsSchema = new mongoose.Schema({

    couriel: {
        type: String,
        unique: true,
        required :true
    },

    adresse:{

    rue: {
        type: String, required: true
    },
    numeroCivic:{
        type: Number, required: true
    },
    ville:{
        type: String,required: true
    },
    province:{
        type: String, required: true
    },
    cp:{
        type: String,required: true
    }
    },

    tel:{
        type:String
    },

    prenomClient:{
        type: String,
        required: true
    },

    nomClient:{
        type: String,
        required: true
    },

    numeroClient:{
        type: Number,
        required:true,
        unique: true
    },

});

const Clients = mongoose.mode('Clients',clientsSchema);
module.exports = Clients;