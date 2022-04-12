// ESERCIZIO NODE.JS - 11 Aprile 2022


const fs = require("fs").promises;

const arguments = process.argv.slice(2); // argomenti


async function readFile(file) {
    const data = await fs.readFile(file);
    const dataToString = data.toString();

    console.log(dataToString);
};


// Funzione scrivere file

async function WriteFile(content) {
    await fs.writeFile("spesa.txt", content, { flag: 'a+' })
}

const content = `${arguments[0]}, ${arguments[1]}`

async function WriteandRead() {
   
    await WriteFile(content + "\n");
    await readFile("spesa.txt");
}




WriteandRead() 

