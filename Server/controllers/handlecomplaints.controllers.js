import {contact_us} from "../models/contact.module.js"; // Assuming a default export

export const heandlecomplain = async (req, res) => {
  const { Bus_number } = req.body;

  try {
    const data = await contact_us.find({Bus_number})
      ;

    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ "Message": "Bus Number Not Found!" });
    }
  } catch (err) {
    console.error("Error while fetching data:", err);
    res.status(500).send({
      "Message": "Error while fetching the data!",
      "Error": err.message || "Unknown error occurred",
      "Details": err.stack || "No stack available"
    });
  }
};
