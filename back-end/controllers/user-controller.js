const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};
const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  console.log("Body", req.body);
  const data = await sql`INSERT INTO users(email, name, password)
VALUES (
${email},
${name},
${password}
${profile_img}
);`;
  console.log("DATA", data);
  res.status(200).json({ message: "Create user success", user: data });
};

const updateUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  const data = await sql`UPDATE users SET profile_img=${profile_img},
    email=${email},
    name=${name},
    password=${password},;`;
  console.log("DATA", data);
  res.status(200).json({ message: "User updated success", user: data });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM users WHERE eid=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "delete success", user: data });
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
