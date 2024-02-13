const http = require("http");
//const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Pablo:PV0zV0cxpXo1MFG5@cluster0.wkwu7q2.mongodb.net/Reja"
mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err, client) => {
    if(err) console.log("ERROR on connection to MongoDb");
    else{
        console.log("MongoDB connection succeed")
        module.exports = client;
        //console.log(client);
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
         server.listen(PORT, function() {
           console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
}
);


// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function() {
//     console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
// });