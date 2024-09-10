const { Router } = require("express");
const {
  getAllRecords,
  getValue,
  getChartData,
  createRecords,
  deleteRecords,
  updateRecords,
} = require("../controllers/records-controller");

const router = Router();

router.route("/chart").get(getChartData);
router.route("/value").get(getValue);
router.route("/").get(getAllRecords).post(createRecords);
router.route("/:id").put(updateRecords).delete(deleteRecords);

module.exports = router;
