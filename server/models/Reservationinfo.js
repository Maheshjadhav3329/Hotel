import {Schema, model} from "mongoose"

const reservationSchema = new Schema({
  title : String,
  fname : String,
  lname : String,
  email : String,
  nationality : String,
  passcountry : String,
  phone : String,
  rtype : String,
  bedding : String,
  roomno : String,
  mealplan : String,
  cin : String,
  cout : String,
  status : String
}, { timestamps: true },{Location:true})

const Reservationinfo = model("Reservationinfo", reservationSchema)

export default Reservationinfo