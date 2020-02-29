'use strict'

const app = require('./app');
const config = require('./config/config');

let server = app.listen(config.PORT, () => {
    console.log(`API REST Corriendo en ${config.URL}:${config.PORT}`);
});