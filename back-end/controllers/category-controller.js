const getAllCategory = (req, res) => {
  // postgre select
  res.status(200).json({});
};

const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  const data =
    await sql`INSERT INTO categories (name, description, category_image )
  VALUES (
  ${name},
  ${description},
  ${category_image}
  );`;
  console.log("DATA", data);
  res.status(200).json({ message: "Create category success", user: data });
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
  const { uid } = req.params;
  const data = await sql`DELETE FROM users WHERE uid=${uid}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Deleted success", user: data });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
