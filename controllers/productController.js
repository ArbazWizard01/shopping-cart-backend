const path = require("path");
const fs = require("fs").promises; // ✅ use promises API

const getProducts = async (req, res) => {
  try {
    const filepath = path.join(__dirname, "..", "products.json"); // no need for await
    const data = await fs.readFile(filepath, { encoding: "utf-8" }); // ✅ correct usage

    const products = JSON.parse(data);
    res.status(200).json(products);
  } catch (err) {
    console.error("Error reading products:", err.message);
    res.status(500).json({ message: "Failed to load products" });
  }
};

module.exports = { getProducts };
