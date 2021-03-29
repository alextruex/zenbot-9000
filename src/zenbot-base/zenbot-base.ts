import DotEnv from 'dotenv';
import Chalk from 'chalk';
import MySQL from 'mysql';


class ZenbotBase{
    connection:MySQL.Connection;
    activeUsers:[];

    constructor(zenbot){
        let host = process.env.MYSQL_HOST;
        let user = process.env.MYSQL_USER;
        let password = process.env.MYSQL_PASSWORD;
        let database = process.env.MYSQL_DATABASE;
      
        this.connection = MySQL.createConnection({
          host:host,
          user:user,
          password:password,
          database:database
        });

      
        this.connection.connect(function(err){
          if (!err) console.log(Chalk.green('[OK!] ZenbotBase ready!'))
          else console.log(Chalk.red('[ERROR!] ' + err))
        });

        this.connection.query('INSERT INTO Users VALUES (5, "Tony", 50);',function(error, results, fields){
          if(error) console.log(Chalk.red('[ERROR!] ' + error));
          else console.log(Chalk.green('[OK!] ' + results));
        });
    }

    getUser(user:object){

    }

    addUser(){

    }

    deleteUser(){

    }

    mergeUsers(){
      
    }

    modifyUser(){

    }

    getLeaders(){

    }

    disconnect(){
      this.connection.end();
      console.log(Chalk.yellow(['[WARNING!] ZenbotBase disconnecting.']));
    }
}

export default ZenbotBase;