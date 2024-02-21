const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Asigură-te că acesta este drumul corect către fișierul tău JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});