const query = require("./database");

module.exports = (app) => {

    try{
        const result = query(`CREATE TABLE IF NOT EXISTS test_table1 (
            id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            userName varchar(30) NOT NULL,
            uuid varchar(250) NOT NULL,
            role tinyint(20) NOT NULL,
            insertUTC TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updateUTC TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            email varchar(50) NOT NULL
          ) ENGINE=InnoDB DEFAULT CHARSET=latin1`);
    }catch{

    }

}