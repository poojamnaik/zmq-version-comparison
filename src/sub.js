// const zmq = require("zeromq/v5-compat");
import  * as zmq  from 'zeromq/v5-compat';
// import zmq from 'zeromq';
async function run() {
  console.log('connectessd');
  // const sock = new zmq.Subscriber

  // sock.connect("tcp://127.0.0.1:3000")
  // sock.subscribe("kitty cats")
  // console.log("Subscriber connected to port 3000")

  // for await (const [topic, msg] of sock) {
  //   console.log("received a message related to:", topic, "containing message:", msg)
  // }

  const sub = zmq.socket('sub').on('message', msg => {
      console.info('message Recieved...', msg);
    })
    .on('error', err => {
      if (err) {
        console.log('erroror');
      }
    });
  sub.connect("tcp://127.0.0.1:3000");

sub.subscribe('message');

}

run()
