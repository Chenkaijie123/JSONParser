
import JSONParser from "./JSONParser/JSONParser";
let a = `{
    name:"bob",
    age = "12",
    args:[{test:1},{test:2},{id:2,arg:{name:"arguments"}}]
}`

let obj = JSONParser.parse(a)
console.log(obj)

