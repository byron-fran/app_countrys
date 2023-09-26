const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const saveCountries = require('./src/handlers/saveCountries')
const PORT = 3001;


conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  saveCountries();
  console.log(`Server listening on port ${PORT}`);
  console.log('conexion a base de datos exelente')
})
}).catch(error => console.error(error))
