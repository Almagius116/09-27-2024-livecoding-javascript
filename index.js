// const test = "Hello fsw2";

// console.log(test);

// const http = require("http");

const fs = require("fs").promises;
const fsSync = require("fs")

// 1. membaca file surat cinta fsw 2
let loveLetter = fsSync.readFileSync("./index.txt", "utf-8")

// 2. proses print isi dari surat cinta
console.log(`ini baris 7: ${loveLetter}`)

// 3. membuat file baru untuk balas surat cintanya
const loveFeedBack = "Aku juga sayang fsw 2!"
fsSync.writeFileSync("./balasan.txt", loveFeedBack)

// fs.mkdir("COBA_BIKIN_FOLDER_2", () => {})

// menimpa isi content dari index.txt
fsSync.writeFileSync("./index.txt", "Ketimpa gak cinta kita part 4?")

// console.log(writeResult)

// INI ASYNC nya
// asynchronous file/write
async function bacaSuratCinta() {
    try{
        const bacaSuratCinta = await fs.readFile('./index.txt', "utf-8")
        console.log(`ini surat cinta ${bacaSuratCinta}`)
    } catch(error) {
        console.log(error)
    }
}

bacaSuratCinta()

//promises
fs.readFile("./index.txt","utf-8")
    .then((isiSuratCinta)=>{
        loveLetter = isiSuratCinta
        console.log(loveLetter)
    })
    .catch((error)=>{
        console.error("Error occured", error)
    })

console.log(`ini baris 21 ${loveLetter}`)