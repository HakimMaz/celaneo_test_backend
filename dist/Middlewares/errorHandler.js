"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatusEnum_1 = require("../Shared/Enums/HttpStatusEnum");
exports.default = (err, req, res, next) => {
    res
        .status(err.status || HttpStatusEnum_1.HttpStatusEnum.SERVER_ERROR)
        .send(err.message ? err.message : err);
};
//# sourceMappingURL=errorHandler.js.map