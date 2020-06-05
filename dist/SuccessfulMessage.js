"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessfulMessage = void 0;
var Message_1 = require("./Message");
var COLOR = '1879160';
var SuccessfulMessage = /** @class */ (function (_super) {
    __extends(SuccessfulMessage, _super);
    function SuccessfulMessage() {
        return _super.call(this) || this;
    }
    return SuccessfulMessage;
}(Message_1.Message));
exports.SuccessfulMessage = SuccessfulMessage;
