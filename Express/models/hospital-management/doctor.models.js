import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    Qualification:{
        type: String,
        required: true

    },
    experienceInYear: {
        type: Number,
        default:0
    },
    workInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
})

export const Doctor =  mongoose.model("Doctor", doctorSchema)