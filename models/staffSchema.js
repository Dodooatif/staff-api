const mongoose = require("mongoose")

const staffSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    staffId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Staff = mongoose.model("Staff", staffSchema)
module.exports = Staff;
