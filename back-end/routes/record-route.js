const { Router } = require("express");
const {
  getAllRecords,
  createRecords,
  deleteRecords,
  updateRecords,
} = require("../controllers/records-controller");

const router = Router();

router.route("/").get(getAllRecords).post(createRecords);
router.route("/:id").put(updateRecords).delete(deleteRecords);

module.exports = router;
