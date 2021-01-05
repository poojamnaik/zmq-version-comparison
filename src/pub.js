// const zmq = require("zeromq");

// import { Request } from "zeromq"
// // or as namespace
// import * as zmq from "zeromq"

// const reqSock = new Request()
// //...
// const repSock = new zmq.Reply()

import  * as zmq  from 'zeromq/v5-compat';

async function run() {
const publisherSocket = zmq.socket('pub');
publisherSocket.bind("tcp://127.0.0.1:3000", (err) =>  {
  if(err) {
      logger.error("Publisher bind error: " + err);
  }
});

// async function run() {
//   const sock = new zmq.Publisher

//   await sock.bind("tcp://127.0.0.1:3000")
//   console.log("Publisher bound to port 3000")

  while (true) {
    console.log("sending a multipart message envelope");
    publisherSocket.send('message', 0);
//     await sock.send(["kitty cats", "meow!"])
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}

run()