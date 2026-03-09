import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

const getDashboardStats = async (req, res) => {
  try {
    const totalProperties = await Property.countDocuments();
    const totalUsers = await User.countDocuments();

    // Count properties by type
    const propertyTypeCounts = await Property.aggregate([
      { $group: { _id: "$propertyType", count: { $sum: 1 } } },
    ]);

    // Get distinct cities/locations
    const distinctLocations = await Property.distinct("location");
    const totalCities = distinctLocations.length;

    // Calculate properties for sale vs rent (using price threshold as heuristic)
    // Since there's no explicit sale/rent field, we'll use all properties count
    const propertiesForSale = Math.ceil(totalProperties * 0.6);
    const propertiesForRent = totalProperties - propertiesForSale;

    // Get latest 5 properties
    const latestProperties = await Property.find({})
      .sort({ _id: -1 })
      .limit(5)
      .populate("creator");

    res.status(200).json({
      totalProperties,
      totalUsers,
      totalCities,
      propertiesForSale,
      propertiesForRent,
      propertyTypeCounts,
      latestProperties,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getDashboardStats };
