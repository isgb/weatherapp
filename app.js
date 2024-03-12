import axios from "axios";
import chalk from "chalk";

const API_KEY = "2ba1a6045ce8be8a75cc7dad72102e1f";

async function getWeather(city){
    try {
        
    } catch (error) {
        console.log(error)
        throw new Error(
            `No es posible obtener la información de la ciudad: ${city}`
        )
    }
}

function getData() {
    let city = process.argv[2];
    // console.log(city);

    if(!city){
        console.log(chalk.red("Por favor, proporcionar un nombre de lugar o ciudad"));
        console.log(chalk.red("Ejecuta el comando de la siguiente forma: node app.js [nombre ciudad]"));
    }

    getWeather(city).then().catch();
}

getData();