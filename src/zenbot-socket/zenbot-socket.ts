import Express from 'express';
import ReactDOMServer from 'react-dom/server';
import Chalk from 'chalk';
import HTTP from 'http';
import SocketIO from 'socket.io';

class ZenbotSocket {
  app: Express.Application;
  server: HTTP.Server;
  io: SocketIO.Server;

  constructor(zenbot) {
    this.app = Express();

    this.app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    this.server = this.app.listen(3001, () => {
      this.io = SocketIO(this.server);
      console.log(Chalk.green('[OK!] ZenbotSocket ready!'));
      this.io.on('connection', (socket) => {
        console.log(Chalk.green('[OK!] A user connected.'));
      });
    })


  }

  disconnect() {
    console.log(Chalk.yellow(['[WARNING!] ZenbotSocket disconnecting.']));
    this.server.close();
  }
}

export default ZenbotSocket;