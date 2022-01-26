"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Embed_1 = require("./Embed");
var Field_1 = require("./Field");
var Footer_1 = require("./Footer");
var axios_1 = __importDefault(require("axios"));
var Message = /** @class */ (function () {
    function Message(name, webhook) {
        var _this = this;
        this.addContent = function (content) {
            _this.content = content;
            return _this;
        };
        this.addUsername = function (username) {
            _this.username = username;
            return _this;
        };
        this.addAvatarURl = function (avatar_url) {
            _this.avatar_url = avatar_url;
            return _this;
        };
        this.setColor = function (color) {
            _this.embeds.color = (color && color.toString()) || undefined;
            return _this;
        };
        this.addFooter = function (footer) {
            _this.embeds.footer = new Footer_1.Footer(footer);
            return _this;
        };
        /**
         * TODO: implements author
         *
         * @param author
         * @returns
         */
        // addAuthor = (/* author: string */) => {
        //   // this.embeds.author = author;
        //   return this;
        // };
        this.addDescription = function (description) {
            _this.embeds.description = description;
            return _this;
        };
        this.addTitle = function (title) {
            _this.embeds.title = title;
            return _this;
        };
        this.addField = function (field) {
            var name = field.name, value = field.value, inline = field.inline;
            var fieldObj = new Field_1.Field(name, value, inline);
            _this.embeds.fields.push(fieldObj);
            return _this;
        };
        this.buildPayload = function () {
            var payload = {
                content: _this.content,
                username: _this.username,
                allowed_mentions: {
                    parse: ["everyone"],
                },
                avatar_url: _this.avatar_url,
                file: _this.file,
                embeds: [
                    {
                        author: {
                            name: _this.name,
                        },
                        footer: _this.embeds.footer,
                        description: _this.embeds.description,
                        title: _this.embeds.title,
                        color: _this.embeds.color,
                        fields: _this.embeds.fields.map(function (_a) {
                            var name = _a.name, value = _a.value, inline = _a.inline;
                            return { name: name, value: value, inline: inline };
                        }),
                    },
                ],
            };
            // remove all undefined values recursive from payload and return
            return JSON.parse(JSON.stringify(payload));
        };
        this.sendMessage = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                axios_1.default.post(this.webhook, this.buildPayload());
                return [2 /*return*/];
            });
        }); };
        this.embeds = new Embed_1.Embed();
        this.webhook = webhook;
        this.name = name;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map