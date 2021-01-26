"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.InfoMessage = exports.WarningMessage = exports.SuccessfulMessage = exports.NoColorMessage = void 0;
var Message_1 = require("./Message");
var SUCCESSFUL_COLOR = 51281; // #00C851
var WARNING_COLOR = 16746496; // #FF8800
var INFO_COLOR = 3388901; // #33b5e5
var ERROR_COLOR = 16729156; // #ff4444
var NO_COLOR = undefined; // #ff4444
var NoColorMessage = /** @class */ (function (_super) {
    __extends(NoColorMessage, _super);
    function NoColorMessage(microserviceName, webhook) {
        var _this = _super.call(this, microserviceName, webhook) || this;
        _this.setColor(NO_COLOR);
        return _this;
    }
    return NoColorMessage;
}(Message_1.Message));
exports.NoColorMessage = NoColorMessage;
var SuccessfulMessage = /** @class */ (function (_super) {
    __extends(SuccessfulMessage, _super);
    function SuccessfulMessage(microserviceName, webhook) {
        var _this = _super.call(this, microserviceName, webhook) || this;
        _this.setColor(SUCCESSFUL_COLOR);
        return _this;
    }
    return SuccessfulMessage;
}(Message_1.Message));
exports.SuccessfulMessage = SuccessfulMessage;
var WarningMessage = /** @class */ (function (_super) {
    __extends(WarningMessage, _super);
    function WarningMessage(microserviceName, webhook) {
        var _this = _super.call(this, microserviceName, webhook) || this;
        _this.setColor(WARNING_COLOR);
        return _this;
    }
    return WarningMessage;
}(Message_1.Message));
exports.WarningMessage = WarningMessage;
var InfoMessage = /** @class */ (function (_super) {
    __extends(InfoMessage, _super);
    function InfoMessage(microserviceName, webhook) {
        var _this = _super.call(this, microserviceName, webhook) || this;
        _this.setColor(INFO_COLOR);
        return _this;
    }
    return InfoMessage;
}(Message_1.Message));
exports.InfoMessage = InfoMessage;
var ErrorMessage = /** @class */ (function (_super) {
    __extends(ErrorMessage, _super);
    function ErrorMessage(microserviceName, webhook) {
        var _this = _super.call(this, microserviceName, webhook) || this;
        _this.setColor(ERROR_COLOR);
        return _this;
    }
    return ErrorMessage;
}(Message_1.Message));
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=MessageVariants.js.map