const sql = require("../config/db");
const getAllCategory = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM categories`;
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: "Failed ", error });
  }
};

const createCategory = async (req, res) => {
  try {
    console.log("first");
    const { name } = req.body;
    const data = await sql`INSERT INTO categories (name)
    VALUES (
    ${name}
    );`;
    console.log("DATA", data);
    res.status(200).json({ message: "Create category success", user: data });
  } catch (error) {
    console.log("eeror", error);
    res.status(500).json({ message: "create category failed" });
  }
};

const updateCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  const data = await sql`UPDATE categories SET 
    name=${name},
    description=${description},
    category_image=${category_image},;`;
  console.log("DATA", data);
  res.status(200).json({ message: "Update category success", user: data });
};
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM categories WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Deleted success", user: data });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
