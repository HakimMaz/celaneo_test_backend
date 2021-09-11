"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusEnum = void 0;
var HttpStatusEnum;
(function (HttpStatusEnum) {
    HttpStatusEnum[HttpStatusEnum["SUCCESS"] = 200] = "SUCCESS";
    HttpStatusEnum[HttpStatusEnum["CREATED"] = 201] = "CREATED";
    HttpStatusEnum[HttpStatusEnum["SUCCESS_NO_CONTENT"] = 204] = "SUCCESS_NO_CONTENT";
    HttpStatusEnum[HttpStatusEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusEnum[HttpStatusEnum["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusEnum[HttpStatusEnum["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusEnum[HttpStatusEnum["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusEnum[HttpStatusEnum["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(HttpStatusEnum = exports.HttpStatusEnum || (exports.HttpStatusEnum = {}));
//# sourceMappingURL=HttpStatusEnum.js.map