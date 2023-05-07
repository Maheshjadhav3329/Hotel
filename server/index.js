import express, { response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Reservationinfo from './models/Reservationinfo.js';
import User from './models/User.js';
import Payment from './models/Payment.js';
import Contact from './models/Contact.js';
import path from 'path';
import Userlogin from './models/Userlogin.js';
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://Maheshjadhav4898:Mahesh4898@cluster0.ffrp2ae.mongodb.net/HotelSystem", () => {
    console.log('Connected to MongoDB');
})



//api routes start here
//Api for User Room reservation
app.post('/reservationinfo', async (req, res) => {
    const { title, fname, lname, email, nationality, passcountry, phone, rtype, bedding, roomno, mealplan, cin, cout ,status} = req.body;
    const occupiedRooms = await Reservationinfo.countDocuments()
    if(occupiedRooms >= 20)
    {
       return res.json({
            success: false,
            message: "All rooms are booked! No rooms are available",
            
        })
    }
    const reservation = new Reservationinfo({
        title: title,
        fname: fname,
        lname: lname,
        email: email,
        nationality: nationality,
        passcountry: passcountry,
        phone: phone,
        rtype: rtype,
        bedding: bedding,
        roomno: roomno,
        mealplan: mealplan,
        cin: cin,
        cout: cout,
        status : status
    })

    const savedData = await reservation.save();

    res.json({
        success: true,
        message: "Success",
        data: savedData
    })


})
app.post('/payment', async (req, res) => {
    const { title, fname, lname, rtype, bedding, roomno, mealplan, cin, cout ,Amount} = req.body;

    const payment = new Payment({
        title : title,
        fname : fname,
        lname : lname,
        rtype : rtype,
        bedding : bedding,
        roomno : roomno,
        mealplan : mealplan,
        cin : cin,
        cout : cout,
        Amount : Amount
    })

    const savedData = await payment.save();

    res.json({
        success: true,
        message: "Success",
        data: savedData
    })


})
//api for new room booking

app.get('/newbookedroom',async (req,res)=>{
    const rooms = await Reservationinfo.find();

    res.json({
        success : true,
        message : "users fetch successfully",
        data : rooms
    })
})
//api for getting payment details
app.get('/viewPayment',async (req,res)=>{
    const data = await Payment.find();

    res.json({
        success : true,
        message : "Payments fetch successfully",
        data : data
    })
})
//api for Admin login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });

    if (existingUser) {
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.post('/loginuser', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await Userlogin.findOne({ email: email, password: password });

    if (existingUser) {
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

//send data contact api
app.post('/contact', async (req, res) => {
    const { fname, phone,email } = req.body;

    
    const contact = new Contact({
        fname : fname,
        phone : phone,
        email : email
    })

    const savedContact = await contact.save();

        res.json({
            success: true,
            message: "Message successfully",
            data: savedContact
        })
   


})
//api for getting contact data
app.get('/viewContact',async (req,res)=>{
    const data = await Contact.find();

    res.json({
        success : true,
        message : "contact fetch successfully",
        data : data
    })
})

//api for admin signup

app.post('/signup', async (req, res) => {
    const { name, phone, email, password, role } = req.body;
   
    // validation to check if all fields are filled starts here
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');
    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`
        })
    }
    // validation to check if all fields are filled ends here

   

    // validation to check if email already exists starts here
     const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }
    // validation to check if email already exists ends here

    // validation to check if phone already exists starts here
    
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }
    // validation to check if phone already exists ends here



    const user = new User({
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role,
    })

    const savedUser = await user.save();

        res.json({
            success: true,
            message: "User created successfully",
            data: savedUser
        })
   

})


app.post('/signupuser', async (req, res) => {
    const { name, phone, email, password, role } = req.body;
   
    // validation to check if all fields are filled starts here
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!role) emptyFields.push('role');
    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`
        })
    }
    // validation to check if all fields are filled ends here

   

    // validation to check if email already exists starts here
     const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }
    // validation to check if email already exists ends here

    // validation to check if phone already exists starts here
    
    const existingUserPhone = await User.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }
    // validation to check if phone already exists ends here



    const users = new Userlogin({
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role,
    })

    const savedUser = await users.save();

        res.json({
            success: true,
            message: "User created successfully",
            data: savedUser
        })
   

})


//api routes end here
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})