let app = require('./server.js');
let PORT = process.env.PORT || 3333;

app.listen( PORT, ()=>{ console.log(`listening on ${PORT}, visit: http://localhost:${PORT}`); });