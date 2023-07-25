const query = require("../database.js");

module.exports = {
  create: async (req, res) => {
    try {
      const result = await query(
        "INSERT INTO Users (userName, password, role, address, email) VALUES (? ,? ,?, ?, ?)",
        [req.body.userName, req.body.password, req.body.role, req.body.address, req.body.email]
      );
      return res.status(200).send({
        status: 200,
        message: "Success",
        data: `${req.body.userName} has been added to db`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({status: 500,message: "failure",reason: "something went wrong",error: err.message,
      });
    }
  },
  list: async (req, res) => {
    try {
      const id = req.body.id;
      if (id) {query1 = `SELECT * FROM Users WHERE id = ${id}`;} 
      else {query1 = "SELECT * FROM Users ";}
      const result = await query(query1, (err, rows) => {
        if (err) { throw err;}
        if (rows.length === 0) {
          return res.status(400).send({status: 400, message: "no record found",data: rows,});
        }
        else {
          return res.status(200).send({status: 200, message: "Success", data: rows,});
        }
      });
    } catch (err) {
      return res.status(500).send({status: 500, message: "failure", reason: "something went wrong",error: err.message,
      });
    }
  },
};
