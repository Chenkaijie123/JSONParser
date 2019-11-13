import TokenParser from "./TokenParser";
import Tokenizer from "./Tokenizer";

/**
 * 小型对象解析器
 * 可以把JSON格式的字符串解析成对象
 * JSONParser.parse(string) => Object
 */
export default class JSONParser{
    private TokenParser:TokenParser
    private Tokenizer:Tokenizer

    static get ins():JSONParser{
        if(!this["_ins"]) this["_ins"] = new JSONParser();
        return this["_ins"];
    }
    constructor(){
        this.TokenParser = new TokenParser()
        this.Tokenizer = new Tokenizer()
    } 

    static parse(input:string):Object{
        return JSONParser.ins.TokenParser.parse(JSONParser.ins.Tokenizer.read(input))

    }
}