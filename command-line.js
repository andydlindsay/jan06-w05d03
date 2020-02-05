const { Client } = require('pg');
// const Client = pg.Client;

const config = {
  user: 'yzjuquij',
  host: 'rajje.db.elephantsql.com',
  database: 'yzjuquij',
  password: 'fSxYexXjX83O217nbekIpOiHAT0-bsoY',
};

const client = new Client(config);
client.connect();

const arguments = process.argv.slice(2);

// const query = arguments[0];
const [ query ] = arguments;
let id;

switch (query) {
  case 'browse':
    client
      .query('SELECT * FROM villains;')
      .then(data => {
        console.log(data.rows)
        client.end();
      });
    break;

  case 'read':
    id = arguments[1];
    client
      .query('SELECT * FROM villains WHERE id = $1;', [id])
      .then(data => {
        console.log(data.rows[0])
        client.end();
      });
    break;

  case 'edit':
    id = arguments[1];
    const villain = arguments[2];
    client
      .query('UPDATE villains SET villain = $1 WHERE id = $2;', [villain, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const [ newVillain, newMovie ] = arguments.slice(1);
    client
      .query('INSERT INTO villains(villain, movie) VALUES($1, $2);', [newVillain, newMovie])
      .then(() => {
        console.log('villain inserted succesfully');
        client.end();
      });
    break;

  case 'delete':
    id = arguments[1];
    client
      .query('DELETE FROM villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain defeated/destroyed succesfully');
        client.end();
      });
    break;

  default:
    console.log('please enter a proper verb');
    client.end();
}
