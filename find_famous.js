const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

var person = process.argv[2];


function getFamousPerson(){
  client.query("SELECT * FROM famous_people WHERE last_name = $1", [person], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    result.rows.forEach((item)=>{
      console.log(`${item.id} : ${item.first_name} ${item.last_name}, born '${item.birthdate}'`);
    })
    client.end();
  });
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  getFamousPerson();
});

