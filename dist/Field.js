"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var Field = /** @class */ (function () {
    function Field(name, value, inline) {
        var isInlineUndefined = inline === undefined || inline === null;
        this.name = name;
        this.value = value;
        this.inline = isInlineUndefined ? true : inline;
    }
    return Field;
}());
exports.Field = Field;
//# sourceMappingURL=Field.js.map