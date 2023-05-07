import {Schema, model} from "mongoose"

const paymentSchema = new Schema({
    title : String,
    fname : String,
    lname : String,
    rtype : String,
    bedding : String,
    roomno : String,
    mealplan : String,
    cin : String,
    cout : String,
    Amount : String
}, { timestamps: true },{Location:true})

const Payment = model("Payment", paymentSchema)

export default Payment