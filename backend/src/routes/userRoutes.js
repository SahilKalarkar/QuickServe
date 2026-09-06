const express = require("express");

const { protect, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/me", protect, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

router.get("/customer-only", protect, authorize("customer"), (req, res) => {
  res.json({
    success: true,
    message: "Customer protected route working",
  });
});

router.get("/provider-only", protect, authorize("provider"), (req, res) => {
  res.json({
    success: true,
    message: "Provider protected route working",
  });
});

router.get("/admin-only", protect, authorize("admin"), (req, res) => {
  res.json({
    success: true,
    message: "Admin protected route working",
  });
});

module.exports = router;
