const Agency = require("../Model/Agency");
const Client = require("../Model/Client");


//  to add client to the mentioned agency
exports.addClient = async (req, res) => {
  const { name, email, phone, bill } = req.body;
  const { agencyid } = req.query;
  try {
    const agency = await Agency.findByPk(agencyid);
    await agency.createClient({
      Name: name,
      Email: email,
      Phone: phone,
      TotalBill: bill,
    });
    res.status(201).json({
      status: "success"
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed at adding Client",
      error: err,
    });
  }
};

// to update client
exports.updateClient = async (req, res) => {
  const { name, email, phone, bill } = req.body;
  const {clientid} = req.query;
  try {
    const client = await Client.findByPk(clientid);
    client.email = email;
    client.Name = name;
    client.Phone = phone;
    client.TotalBill = bill;
    await client.save();
    res.status(201).json({
      status: "success"
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed at updating client details",
      error: err,
    });
  }
}
