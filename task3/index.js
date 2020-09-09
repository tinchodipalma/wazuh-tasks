'use strict';

const Hapi = require('@hapi/hapi');
const { helloWorld } = require('./service/hello-world');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: '0.0.0.0',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: helloWorld,
  });

  await server.start();
  console.log(`Task3 Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
