const path = require("path");
const { json } = require("stream/consumers");
const fs = require("fs").promises;

const checkout = async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "No items provided" });
    }

    const filePath = path.join(__dirname, "..", "products.json");
    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    const products = JSON.parse(data);

    console.log("New Order Recieved: ");
    let total = 0;

    items.forEach((item) => {
      const product = products.find((p) => p.id === item.id);
      if (product) {
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        console.log(
          `- ${product.name} (ID: ${item.id}) x ${
            item.quantity
          } = $${itemTotal.toFixed(2)}`
        );
      } else {
        console.log(`Product with ID ${item.id} not found`);
      }

      console.log(`- Product ID: ${item.id}, Quantity: ${item.quantity}`);
    });
    console.log(`Total Order Price: $${total.toFixed(2)}`);
    res.status(200).json({
      message: "Order received successfully!",
      total: total.toFixed(2),
    });
  } catch (err) {
    console.log("Error processing checkout: ", err.message);
    res.status(500).json({ message: "Failed to process order" });
  }
};

module.exports = { checkout };
