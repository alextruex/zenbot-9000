import Express from 'express';
import ReactDOMServer from 'react-dom/server';
import Chalk from 'chalk';
import HTTP from 'http';

class ZenbotWeb{
  app:Express.Application;
  server:HTTP.Server;

  constructor(zenbot){
    this.app = Express();
    
    this.app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    this.server = this.app.listen(3000, () => {
      console.log(Chalk.green('[OK!] ZenbotWeb ready!'));
    })
  }

  disconnect(){
    console.log(Chalk.yellow(['[WARNING!] ZenbotWeb disconnecting.']))
    this.server.close();
  }
}



export default ZenbotWeb;