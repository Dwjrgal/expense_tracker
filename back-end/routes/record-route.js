const { Router } = require("express");
const {
  getAllRecords,
  getValue,
  chartRec,
  createRecords,
  deleteRecords,
  updateRecords,
} = require("../controllers/records-controller");

const router = Router();

router.route("/chart").get(chartRec);
router.route("/value").get(getValue);
router.route("/").get(getAllRecords).post(createRecords);
router.route("/:id").put(updateRecords).delete(deleteRecords);

module.exports = router;
