import * as fs from 'fs'

const splice = (src, elem, out) => {
  console.log(`in file: ${src}`)
  console.log(`out file: ${out}`)
  console.log(`elements : ${elem}`)
  fs.readFile(src, function (err, data) {
    if (err) throw err
    let array = JSON.parse(data)
    fs.writeFileSync(out, JSON.stringify(array.splice(0, elem)))
    console.log(`${out} created`)
  })
}

const count = (src) => {
  console.log(`in file: ${src}`)
  fs.readFile(src, function (err, data) {
    if (err) throw err
    let array = JSON.parse(data)
    console.log(`Found ${array.length} elements`)
  })
}

export { splice, count }