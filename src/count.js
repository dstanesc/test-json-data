import { count } from "./utils.js"

if (process.argv.length < 2) {
    console.log('node src/count.js data/large-file.json')
    process.exit(1)
}

let src = process.argv[2]

count(src)