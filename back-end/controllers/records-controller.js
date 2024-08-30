const sql = require("../config/db");

const getAllRecords = (req, res) => {
  res.status(200).json({});
};

const createRecords = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  console.log(req.body);
  const data =
    await sql`INSERT INTO records (uid, cid, name, description, category_image )
    VALUES (
    ${uid},
    ${cid},
    ${name},
    ${amount},
    ${transaction_type}
    ${description},
    );`;
  console.log("DATA", data);
  res.status(200).json({ message: "Create records  success", user: data });
};

const updateRecords = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  const data = await sql`UPDATE records SET
      uid=${uid},
      cid=${cid},
      name=${name},
      amount=${amount},
      transaction_type=${transaction_type},
      description=${description}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Update records success", user: data });
};
const deleteRecords = async (req, res) => {
  const { id, uid, cid } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id},
    uid=${uid},
    cid=${cid}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Deleted success", user: data });
};

module.exports = {
  getAllRecords,
  createRecords,
  updateRecords,
  deleteRecords,
};
