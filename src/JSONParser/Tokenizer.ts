import Token, { TokenType } from "./Token";

/**
 * 把字符串解析成Token流
 */
export default class Tokenizer {
    private NumberRegExp = /[0-9]/
    private spaceRegExp = /\s|\n/
    private nameRegExp = /[a-z]/i
    read(input: string): Token[] {
        //当前下标
        let currentIndex: number = 0;
        //解析成的token流
        let tokens: Token[] = [];
        let char: string;
        while (char = input[currentIndex++]) {
            //去空格
            if(this.spaceRegExp.test(char)){
                continue;
            }
            //读取大括号
            if (char == "{" || char == "}") {
                tokens.push(Token.create(TokenType.Big_brackets, char));
                continue;
            }

            if (char === "[" || char === "]") {
                tokens.push(Token.create(TokenType.Mid_Brackets, char));
                continue;
            }

            // 读取冒号
            if (char === ":") {
                tokens.push(Token.create(TokenType.colon, char));
                continue;
            }

            //读取等号
            if (char === "=") {
                tokens.push(Token.create(TokenType.equal, char));
                continue;
            }

            if(char === ","){
                tokens.push(Token.create(TokenType.Comma, char));
                continue;
            }

            //读取字符串
            if (char == '"') {
                let key: string = ""
                while (char = input[currentIndex]) {
                    currentIndex++
                    if(char == '"') break;
                    key += char;
                }
                tokens.push(Token.create(TokenType.String, key));
                continue;
            }

            //读取数字
            if (this.NumberRegExp.test(char)) {
                let numberStr = char
                while (this.NumberRegExp.test((char = input[currentIndex]))) {
                    numberStr += char;
                    currentIndex++
                }
                tokens.push(Token.create(TokenType.Number, +numberStr));
                continue;
            }

            //读取属性名
            if(this.nameRegExp.test(char)){
                let name = char;
                while(this.nameRegExp.test((char = input[currentIndex]))){
                    name += char;
                    currentIndex++
                }
                tokens.push(Token.create(TokenType.Name, name));
                continue;
            }

            //未知字符，抛出错误
            throw new Error(`type error,char >>> ${char}<<< is unknow char,at ${currentIndex - 1}`)
        }
        return tokens;
    }
}