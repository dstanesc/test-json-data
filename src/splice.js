import { splice } from "./utils.js"

if (process.argv.length < 4) {
    console.log('node src/splice.js data/large-file.json 2000 data/medium-file.json')
    process.exit(1)
}

let src = process.argv[2]
let elem = process.argv[3]
let out = process.argv[4]

splice(src, elem, out)