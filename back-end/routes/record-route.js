const { Router } = require("express");
const {
  getAllRecords,
  getValue,
  createRecords,
  deleteRecords,
  updateRecords,
} = require("../controllers/records-controller");

const router = Router();

router.route("/value").get(getValue)
router.route("/").get(getAllRecords).post(createRecords);
router.route("/:id").put(updateRecords).delete(deleteRecords);

module.exports = router;
