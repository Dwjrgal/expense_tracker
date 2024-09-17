const sql = require("../config/db");

const getAllRecords = async (req, res) => {
  try {
    const records = await sql`SELECT * FROM records`;
    res.status(200).json({ records });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};

const getValue = async (req, res) => {
  try {
    const [expense, income] =
      await sql`SELECT  transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ expense, income });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};
const getChartData = async (req, res) => {
  try {
    const donutChartData = await sql`
    SELECT SUM(r.amount), c.name cat_name FROM records r 
    INNER JOIN categories c ON r.cid=c.id
    WHERE r.transaction_type='EXP'
    GROUP BY cat_name;
    `;
    const barChartData = await sql`
    SELECT TO_CHAR(DATE_TRUNC('month', r.created_at), 'Mon') as month, 
    SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) as total_exp,
    SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) as total_inc
    FROM records r
    GROUP BY DATE_TRUNC('month', r.created_at) 
    ORDER BY DATE_TRUNC('month', r.created_at);
    `;
    res
      .status(200)
      .json({ message: "success", donut: donutChartData, bar: barChartData });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};

const createRecords = async (req, res) => {
  try {
    const {
      uid,
      cid,
      name,
      amount,
      transaction_type,
      // description,
      created_at = new Date(),
    } = req.body;
    const data = await sql`
    INSERT INTO records(uid, cid, name, amount, transaction_type,  created_at)
    VALUES(${uid}, ${cid}, ${name}, ${amount}, ${transaction_type},${created_at});
    `;
    console.log("DATA", data);
    res.status(201).json({ message: "New record created successfully" });
  } catch (error) {
    res.status(400).json({ message: "New record created unsuccessfully" });
  }
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
  getChartData,
  createRecords,
  updateRecords,
  deleteRecords,
};
