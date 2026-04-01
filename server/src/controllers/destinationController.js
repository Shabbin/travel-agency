const prisma = require("../lib/prisma");

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      count: destinations.length,
      data: destinations,
    });
  } catch (error) {
    console.error("Error fetching destinations:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  getAllDestinations,
};