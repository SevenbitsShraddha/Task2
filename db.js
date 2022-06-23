const mysql = require("mysql");

const con = mysql
.createConnection({
    host: "localhost", // HOST NAME
    user: "root", // USER NAME
    database: "test1", // DATABASE NAME
    password: "mini_sh3", // DATABASE PASSWORD
})
  .on("error", (err) => {
      console.log("Failed to connect to Database - ", err);
    });
    // console.log(db);
    // }
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

module.exports = con;