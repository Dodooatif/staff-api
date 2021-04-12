const Staff = require("../models/staffSchema")

const createStaff = async (req,res) => {
    const newStaff = new Staff({
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        staffId: req.body.staffId
    })
    await newStaff.save();
    res.status(201).json(newStaff)
}

const getAllStaff = async (req,res) => {
    const staff = await Staff.find();
    res.json(staff);
}

const getSingleStaff = async (req,res) => {
    const staff = await Staff.findById(req.params._id);
    res.json(staff);
}

const updateStaff = async (req, res) => {
    const foundStaff = await Staff.findById(req.params._id);
    if (foundStaff) {
      (foundStaff.name = req.body.name ? req.body.name : foundStaff.name),
        (foundStaff.gender = req.body.gender ? req.body.gender : foundStaff.gender),
        (foundStaff.email = req.body.email ? req.body.email : foundStaff.email),
        (foundStaff.staffId = req.body.staffId ? req.body.staffId : foundStaff.staffId)
  
      const updatedStaff = await foundStaff.save();
      res.json({ updatedStaff });
    }
  };

  const deleteStaff = async (req, res) => {
    const foundStaff = await Staff.findById(req.params._id);
    if (foundStaff) {
      foundStaff.remove();
      res.json({ msg: ` ${foundStaff.name} removed` });
    } else {
      res.status(404).json({ error: "Staff not found" });
    }
  };
module.exports = { createStaff, getAllStaff, getSingleStaff, updateStaff, deleteStaff }