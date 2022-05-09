const mongoose =require('mongoose');
const studentSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,    
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
})
var studentdata=mongoose.model('studentdata',studentSchema);

// Here we have used “module.exports” command, but it later ES6 versions “export” keyword works.
module.exports= studentdata;
