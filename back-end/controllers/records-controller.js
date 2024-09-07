

const sql = require("../config/db");

const getAllRecords = async (req, res) => {
  try {
    const records = await sql`SELECT * FROM records`;
    res.status(200).json({ records });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};

const getValue = async ( req, res ) => {
  try {

    const [income, expense] = await sql `SELECT  transaction_type, SUM(amount) FROM records GROUP BY transaction_type`
    res.status(200).json({ income, expense });   
  } catch (error) {
    res.status(400).json({ message: "failed", error })
    
  }
}

const createRecords = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  console.log(req.body);
  const data =
    await sql`INSERT INTO records (uid, cid, name, amount, transaction_type, description)
    VALUES (
    ${uid},
    ${cid},
    ${name},
    ${amount},
    ${transaction_type},
    ${description}
    )`;
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
  getValue,
  createRecords,
  updateRecords,
  deleteRecords,
};
