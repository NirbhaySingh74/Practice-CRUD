import { Person } from "../models/person.model.js";

export const post = async (req, res) => {
  try {
    const { name, work, age, mobile, email, address, salary } = req.body;

    if (!name || !work || !mobile || !email || !salary) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newDetail = new Person({
      name,
      work,
      age,
      mobile,
      email,
      address,
      salary,
    });

    await newDetail.save();
    return res.status(201).json(newDetail);
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: "Server error" });
  }
};

export const getAll = async (req, res) => {
  try {
    const details = await Person.find();
    console.log(details);
    res.status(200).json(details);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await Person.findById(id);
    if (!deleteData) {
      return res.status(401).json({ msg: "user not found" });
    }
    await Person.deleteOne({ _id: id });
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatePerson = async (req, res) => {
  try {
    const { name, work, age, mobile, email, address, salary } = req.body;

    if (!name && !work && !age && !mobile && !email && !address && !salary) {
      return res.status(400).json({ message: "No fields provided for update" });
    }

    const updatedDetail = await Person.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedDetail) {
      return res.status(404).json({ message: "Detail not found" });
    }

    return res.status(200).json(updatedDetail);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Person.findById({ _id: id });
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
