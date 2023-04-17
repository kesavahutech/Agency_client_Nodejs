const Agency = require("../Model/Agency");

// to create an agency
exports.createAgency = async (req, res) => {
  const { name, address1, address2, state, city, phone } = req.body;
  try {
    const agency = await Agency.create({
      Name: name,
      Address1: address1,
      Address2: address2 !== "" ? address2 : null,
      State: state,
      City: city,
      Phone: phone,
    });
    res.status(201).json({
      status: "success"
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed at creating agency",
      error: err,
    });
  }
};

// to update agency details

exports.updateAgency = async (req, res) => {
  const { name, address1, address2, state, city, phone } = req.body;
  const {id} = req.query;
  try {
    const agency = await Agency.findByPk(id);
    agency.Name = name
    agency.Address1 = address1;
    agency.Address2 = address2 !== "" ? address2 : null;
    agency.State = state;
    agency.City = city;
    agency.Phone = phone;
    await agency.save();
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed at updating agency",
      error: err,
    });
  }
};

// to get agency details along with its clients
exports.getAgency = async (req, res) => {
  const { id } = req.query;
  try{
    const agency = await Agency.findByPk(id);
    const clients = await agency.getClients({
      attributes: [['Name', 'ClientName'], 'TotalBill'], // include two columns with changed column name
      order: [['TotalBill', 'DESC']] // sort on totalBill in descending order
    });
    
    res.status(200).json({
      AgencyName : agency.Name,
      clients : clients
    });

  }catch(err){
    res.status(500).json({
      status: "Failed to get agency and their clients",
      error: err,
    });
  }
}
