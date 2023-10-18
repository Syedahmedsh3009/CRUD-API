const {Schema, model }= require('mongoose');

const UserSchema = new Schema({
  name: {required: true, type: String},
  email:  {required: true, type: String},
  number:  {required: true, type: Number},
  password:  {required: true, type: String},
});
const User = model('user', UserSchema);
module.exports=User;