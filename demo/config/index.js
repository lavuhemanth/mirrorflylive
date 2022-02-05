'use strict';

require("dotenv").config();


const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  ws_port: process.env.WSS_PORT
};

module.exports = config;