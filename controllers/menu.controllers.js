import { MenuItem } from "../models/menu.model.js";

export const createMenu = async (req, res) => {
  try {
    const { name, price, taste, is_drink, ingredients, num_sales } = req.body;

    // if (!name || !price || !taste || !is_drink || !ingredients || !num_sales) {
    //   return res.status(400).json({ message: "Missing required fields" });
    // }

    const newMenuItems = new MenuItem({
      name,
      price,
      taste,
      is_drink,
      ingredients,
      num_sales,
    });

    await newMenuItems.save();
    return res.status(201).json(newMenuItems);
  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: "Server error" });
  }
};

export const getMenu = async (req, res) => {
  try {
    const menuITems = await MenuItem.find();
    return res.status(200).json(menuITems);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
