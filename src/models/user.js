const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name:{
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String, 
        required: true
    }
},{
    timestamps: true
});

UserSchema.methods.encryptPass = password => {
    return bcrypt.hash(password, 10);
};

UserSchema.methods.matchPass = async function(password) {
     return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);

