const ProviderService = require("../models/ProviderService");
const Category = require("../models/Category");

// Create provider service
const createProviderService = async (req, res) => {
  try {
    const {
      category,
      serviceName,
      description,
      price,
      priceType,
      experience,
      serviceArea,
      certificates,
      images,
    } = req.body;

    // Validate category
    const categoryExists = await Category.findOne({
      _id: category,
      isActive: true,
    });

    if (!categoryExists) {
      return res.status(400).json({
        success: false,
        message: "Selected category is not available",
      });
    }

    // Basic validation
    if (!serviceName || !description || price === undefined || !serviceArea) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required service details",
      });
    }

    if (Number(price) < 0) {
      return res.status(400).json({
        success: false,
        message: "Price cannot be negative",
      });
    }

    const providerService = await ProviderService.create({
      provider: req.user._id,
      category,
      serviceName,
      description,
      price,
      priceType,
      experience,
      serviceArea,
      certificates: certificates || [],
      images: images || [],
      status: "pending",
    });

    const populatedService = await ProviderService.findById(providerService._id)
      .populate("provider", "name email phone")
      .populate("category", "name slug");

    res.status(201).json({
      success: true,
      message:
        "Service submitted successfully and is waiting for admin approval",
      data: populatedService,
    });
  } catch (error) {
    console.error("Create provider service error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create service",
    });
  }
};

// Get logged-in provider's services
const getMyProviderServices = async (req, res) => {
  try {
    const services = await ProviderService.find({
      provider: req.user._id,
    })
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    console.error("Get provider services error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch your services",
    });
  }
};

module.exports = {
  createProviderService,
  getMyProviderServices,
};
