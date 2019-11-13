export default class Token{
    type:TokenType
    value:any
    static create(type:TokenType,value:any):Token{
        let token = new Token()
        token.type = type;
        token.value = value;
        return token
    }
}

export enum TokenType{
    Big_brackets,// {}
    Mid_Brackets,//[]
    colon,//:
    Quotation,//""
    Number,
    String,
    equal,
    Name,
    Comma,
}