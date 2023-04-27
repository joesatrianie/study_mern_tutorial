const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "set goal" });
});

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = { getGoals, postGoals, updateGoals, deleteGoals };
