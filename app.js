import axios from "axios";
import chalk from "chalk";

const API_KEY = "2ba1a6045ce8be8a75cc7dad72102e1f";

function getData() {
    let city = process.argv[2];
    // console.log(city);

    if(!city){
        console.log(chalk.red("Por favor, proporcionar un nombre de lugar o ciudad"));
        console.log(chalk.red("Ejecuta la instrucción de la siguiente forma_ node app.js [nombre ciudad]"));
    }
}

getData();