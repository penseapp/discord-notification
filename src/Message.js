"use strict";
exports.__esModule = true;
exports.Message = void 0;
var Embed_1 = require("./Embed");
var Message = /** @class */ (function () {
    function Message() {
        var _this = this;
        this.addContent = function (content) { return _this.content = content; };
        this.addUsername = function (username) { return _this.username; };
        this.addAvatar_url = function (avatar_url) { return _this.avatar_url; };
        this.addField = function (field) { return _this.embeds.fields.push(field); };
        this.sendMessage = function () { };
        this.embeds = new Embed_1.Embed();
    }
    return Message;
}());
exports.Message = Message;
