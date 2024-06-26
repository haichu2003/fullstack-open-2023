require("dotenv").config();
const process = require("process");
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);

mongoose.connect(url)
    .then(_result => {
        console.log("connected to MongoDB");
    })
    .catch(error => {
        console.log("error connecting to MongoDB:", error.message);
    });

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number: {
        type: String,
        minLength: 8,
        validate: {
            validator: function (v) {
                return /^\d{2,3}-\d{1,}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        },
        required: [true, "User phone number required"]
    }
});

ContactSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("Contact", ContactSchema);