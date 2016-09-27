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

function getPeople(){
  knex.select('*').from('famous_people').where({last_name:`Lincoln`}).then((result)=>{
    result.forEach((item)=>{
      console.log(`${item.id} : ${item.first_name} ${item.last_name}, born '${item.birthdate}'`);
    })
  });
}

console.log(getPeople());