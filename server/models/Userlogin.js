import {Schema, model} from "mongoose"

const usersSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  role: String,
}, { timestamps: true },{Location:true})

const Userlogin = model("Userlogin", usersSchema)

export default Userlogin