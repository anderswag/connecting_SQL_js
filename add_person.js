const settings = require("./settings"); // settings.json
const pg = require("pg");

var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

var firstName = process.argv[2];
var lastName = process.argv[3];
var birthDate = process.argv[4];
/*console.log(firstName + lastName);*/
function addPeople(){
  knex('famous_people').insert([
    {first_name:`${firstName}`,last_name:`${lastName}`,birthdate:`${birthDate}`}
    ]).then((result)=>{
  });
}

addPeople();

knex.destroy();