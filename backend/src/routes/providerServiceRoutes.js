const express = require("express");

const {
  createProviderService,
  getMyProviderServices,
} = require("../controllers/providerServiceController");

const { protect } = require("../middlewares/authMiddleware");
const providerOnly = require("../middlewares/providerMiddleware");

const router = express.Router();

router.use(protect);
router.use(providerOnly);

router.post("/", createProviderService);

router.get("/my-services", getMyProviderServices);

module.exports = router;
