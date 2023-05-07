import {Schema, model} from "mongoose"

const contactSchema = new Schema({
    fname : String,
    phone : String,
    email : String
}, { timestamps: true },{Location:true})

const Contact = model("contact", contactSchema)

export default Contact