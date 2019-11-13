import Token, { TokenType } from "./Token";

/**
 * Token流解析器
 * 可以把Tokenizer生成的token流解析成Object
 */
export default class TokenParser {
    parse(tokens: Token[]): object {
        //当前token流执行到的位置
        let currentIndex = 0;
        //当前的token
        let token: Token
        //栈数据结构，会根据token流逐一创建对象，永远操作最后一位对象
        let stack = [];
        //模拟指针
        let point: object;
        //token类型
        let type: TokenType
        //token的value
        let value: any
        let propName: string//属性名
        //标志下一个token否是对象的值，包括对象的value值和数组的元素
        let isValue = false
        while (token = tokens[currentIndex++]) {
            type = token.type
            value = token.value
            switch (type) {
                case TokenType.Big_brackets:
                    //出现左大括号，创建对象
                    if (token.value == "{") {
                        point = {}
                        if (isValue) {
                            //获取该对象的父节点（如果有）
                            let par = stack[stack.length - 1]
                            if (par && par instanceof Array) par.push(point)
                            else if (par && par instanceof Object) {
                                par[propName] = point;
                            }

                        }
                        // 该元素推入堆栈
                        stack.push(point)
                    } else {
                        //出现闭合大括号表示当前对象创建完成，从队列中删除
                        stack.pop();
                        if (stack.length)
                            point = stack[stack.length - 1]
                            if(point instanceof Array) isValue = true
                    }
                    break
                case TokenType.Mid_Brackets:
                    //出现左中括号创建数组
                    if (token.value === "[") {
                        point = []
                        if (isValue) {
                            let par = stack[stack.length - 1]
                            if (par && par instanceof Array) par.push(point)
                            else if (par && par instanceof Object) {
                                par[propName] = point;
                            }
                        }
                        stack.push(point)
                    } else {
                        //出现右中括号表示数组创建完成，从工作队列中移除
                        stack.pop();
                        if (stack.length)
                            point = stack[stack.length - 1]
                            if(point instanceof Array) isValue = true
                    }
                    break;
                case TokenType.Comma:
                    break;
                case TokenType.Name:
                    propName = value;
                    break;
                case TokenType.Number:
                    if (isValue) {
                        point[propName] = value;
                        isValue = false
                    }
                    break
                case TokenType.Quotation:
                    throw new Error("parsing type error!")
                case TokenType.String:
                    if (isValue) {
                        point[propName] = value;
                        isValue = false
                    } else {
                        propName = value;
                    }
                    break;
                case TokenType.colon:
                case TokenType.equal:
                    isValue = true;
                    break
            }
        }
        return point;
    }

}