import mongoose from 'mongoose';


const clientsSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required :true
    },

    rue: {
        type: String, required: true
    },
    ville:{
        type: String,required: true
    },
    province:{
        type: String, required: true
    },
    codePostal:{
        type: String,required: true
    },

    telephone:{
        type:String
    },

    prenom:{
        type: String,
        required: true
    },

    nom:{
        type: String,
        required: true
    },

    // numeroClient:{//
    //     type: Number,
    //     required:true,
    //     unique: true
    // },

});


export default mongoose.model('Clients',clientsSchema,'Clients');
