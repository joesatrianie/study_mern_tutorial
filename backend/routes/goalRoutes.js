const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getGoals,
  postGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

router.route("/").get(protect, getGoals).post(protect, postGoals);
router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoals);
module.exports = router;
