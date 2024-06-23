import mongoose from "mongoose";

const medicalRecordsSchema = new mongoose.Schema({})

export const medicalRecords = mongoose.model("medicalRecords", medicalRecordsSchema)