/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/JSONParser/JSONParser.ts":
/*!**************************************!*\
  !*** ./src/JSONParser/JSONParser.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TokenParser_1 = __webpack_require__(/*! ./TokenParser */ "./src/JSONParser/TokenParser.ts");
var Tokenizer_1 = __webpack_require__(/*! ./Tokenizer */ "./src/JSONParser/Tokenizer.ts");
var JSONParser = /** @class */ (function () {
    function JSONParser() {
        this.TokenParser = new TokenParser_1.default();
        this.Tokenizer = new Tokenizer_1.default();
    }
    Object.defineProperty(JSONParser, "ins", {
        get: function () {
            if (!this["_ins"])
                this["_ins"] = new JSONParser();
            return this["_ins"];
        },
        enumerable: true,
        configurable: true
    });
    JSONParser.parse = function (input) {
        return JSONParser.ins.TokenParser.parse(JSONParser.ins.Tokenizer.read(input));
    };
    return JSONParser;
}());
exports.default = JSONParser;


/***/ }),

/***/ "./src/JSONParser/Token.ts":
/*!*********************************!*\
  !*** ./src/JSONParser/Token.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.create = function (type, value) {
        var token = new Token();
        token.type = type;
        token.value = value;
        return token;
    };
    return Token;
}());
exports.default = Token;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Big_brackets"] = 0] = "Big_brackets";
    TokenType[TokenType["Mid_Brackets"] = 1] = "Mid_Brackets";
    TokenType[TokenType["colon"] = 2] = "colon";
    TokenType[TokenType["Quotation"] = 3] = "Quotation";
    TokenType[TokenType["Number"] = 4] = "Number";
    TokenType[TokenType["String"] = 5] = "String";
    TokenType[TokenType["equal"] = 6] = "equal";
    TokenType[TokenType["Name"] = 7] = "Name";
    TokenType[TokenType["Comma"] = 8] = "Comma";
})(TokenType = exports.TokenType || (exports.TokenType = {}));


/***/ }),

/***/ "./src/JSONParser/TokenParser.ts":
/*!***************************************!*\
  !*** ./src/JSONParser/TokenParser.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __webpack_require__(/*! ./Token */ "./src/JSONParser/Token.ts");
var TokenParser = /** @class */ (function () {
    function TokenParser() {
    }
    TokenParser.prototype.parse = function (tokens) {
        //当前token流执行到的位置
        var currentIndex = 0;
        //当前的token
        var token;
        //栈数据结构，会根据token流逐一创建对象，永远操作最后一位对象
        var stack = [];
        //模拟指针
        var point;
        //token类型
        var type;
        //token的value
        var value;
        var propName; //属性名
        //标志下一个token否是对象的值，包括对象的value值和数组的元素
        var isValue = false;
        while (token = tokens[currentIndex++]) {
            type = token.type;
            value = token.value;
            switch (type) {
                case Token_1.TokenType.Big_brackets:
                    //出现左大括号，创建对象
                    if (token.value == "{") {
                        point = {};
                        if (isValue) {
                            //获取该对象的父节点（如果有）
                            var par = stack[stack.length - 1];
                            if (par && par instanceof Array)
                                par.push(point);
                            else if (par && par instanceof Object) {
                                par[propName] = point;
                            }
                        }
                        // 该元素推入堆栈
                        stack.push(point);
                    }
                    else {
                        //出现闭合大括号表示当前对象创建完成，从队列中删除
                        stack.pop();
                        if (stack.length)
                            point = stack[stack.length - 1];
                        if (point instanceof Array)
                            isValue = true;
                    }
                    break;
                case Token_1.TokenType.Mid_Brackets:
                    //出现左中括号创建数组
                    if (token.value === "[") {
                        point = [];
                        if (isValue) {
                            var par = stack[stack.length - 1];
                            if (par && par instanceof Array)
                                par.push(point);
                            else if (par && par instanceof Object) {
                                par[propName] = point;
                            }
                        }
                        stack.push(point);
                    }
                    else {
                        //出现右中括号表示数组创建完成，从工作队列中移除
                        stack.pop();
                        if (stack.length)
                            point = stack[stack.length - 1];
                        if (point instanceof Array)
                            isValue = true;
                    }
                    break;
                case Token_1.TokenType.Comma:
                    break;
                case Token_1.TokenType.Name:
                    propName = value;
                    break;
                case Token_1.TokenType.Number:
                    if (isValue) {
                        point[propName] = value;
                        isValue = false;
                    }
                    break;
                case Token_1.TokenType.Quotation:
                    throw new Error("parsing type error!");
                case Token_1.TokenType.String:
                    if (isValue) {
                        point[propName] = value;
                        isValue = false;
                    }
                    else {
                        propName = value;
                    }
                    break;
                case Token_1.TokenType.colon:
                case Token_1.TokenType.equal:
                    isValue = true;
                    break;
            }
        }
        return point;
    };
    return TokenParser;
}());
exports.default = TokenParser;


/***/ }),

/***/ "./src/JSONParser/Tokenizer.ts":
/*!*************************************!*\
  !*** ./src/JSONParser/Tokenizer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __webpack_require__(/*! ./Token */ "./src/JSONParser/Token.ts");
// {
//     name:"bob";
//     age:12
// }
var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
        this.NumberRegExp = /[0-9]/;
        this.spaceRegExp = /\s|\n/;
        this.nameRegExp = /[a-z]/i;
    }
    Tokenizer.prototype.read = function (input) {
        //当前下标
        var currentIndex = 0;
        //解析成的token流
        var tokens = [];
        var char;
        while (char = input[currentIndex++]) {
            //去空格
            if (this.spaceRegExp.test(char)) {
                continue;
            }
            //读取大括号
            if (char == "{" || char == "}") {
                tokens.push(Token_1.default.create(Token_1.TokenType.Big_brackets, char));
                continue;
            }
            if (char === "[" || char === "]") {
                tokens.push(Token_1.default.create(Token_1.TokenType.Mid_Brackets, char));
                continue;
            }
            // 读取冒号
            if (char === ":") {
                tokens.push(Token_1.default.create(Token_1.TokenType.colon, char));
                continue;
            }
            //读取等号
            if (char === "=") {
                tokens.push(Token_1.default.create(Token_1.TokenType.equal, char));
                continue;
            }
            if (char === ",") {
                tokens.push(Token_1.default.create(Token_1.TokenType.Comma, char));
                continue;
            }
            //读取字符串
            if (char == '"') {
                var key = "";
                while (char = input[currentIndex]) {
                    currentIndex++;
                    if (char == '"')
                        break;
                    key += char;
                }
                tokens.push(Token_1.default.create(Token_1.TokenType.String, key));
                continue;
            }
            //读取数字
            if (this.NumberRegExp.test(char)) {
                var numberStr = char;
                while (this.NumberRegExp.test((char = input[currentIndex]))) {
                    numberStr += char;
                    currentIndex++;
                }
                tokens.push(Token_1.default.create(Token_1.TokenType.Number, +numberStr));
                continue;
            }
            //读取属性名
            if (this.nameRegExp.test(char)) {
                var name_1 = char;
                while (this.nameRegExp.test((char = input[currentIndex]))) {
                    name_1 += char;
                    currentIndex++;
                }
                tokens.push(Token_1.default.create(Token_1.TokenType.Name, name_1));
                continue;
            }
            throw new Error("type error,can not find " + char);
        }
        return tokens;
    };
    return Tokenizer;
}());
exports.default = Tokenizer;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JSONParser_1 = __webpack_require__(/*! ./JSONParser/JSONParser */ "./src/JSONParser/JSONParser.ts");
var a = "{\n    name:\"bob\",\n    age = \"12\",\n    args:[{test:1},{test:2},{id:2,arg:{name:\"arguments\"}}]\n}";
var obj = JSONParser_1.default.parse(a);
console.log(obj);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map