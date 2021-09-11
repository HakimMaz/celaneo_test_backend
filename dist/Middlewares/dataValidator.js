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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const httpException_1 = __importDefault(require("../exceptions/httpException"));
const HttpStatusEnum_1 = require("../Shared/Enums/HttpStatusEnum");
function validationMiddleware(type) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const errors = yield (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(type, req.body));
        if (errors.length > 0) {
            const message = errors
                .map((error) => Object.values(error.constraints))
                .join(', ');
            next(new httpException_1.default(HttpStatusEnum_1.HttpStatusEnum.BAD_REQUEST, message));
        }
        else {
            next();
        }
    });
}
exports.default = validationMiddleware;
//# sourceMappingURL=dataValidator.js.map