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
const express_1 = require("express");
const HttpStatusEnum_1 = require("../Shared/Enums/HttpStatusEnum");
const CheckInOut_service_1 = __importDefault(require("./CheckInOut.service"));
class CheckInOutController {
    constructor() {
        this.path = '/check';
        this.route = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.post('/checkout/:idEmployee', this.CreateCheckOut);
        this.route.post('/checkin/:idEmployee', this.CreateCheckIn);
    }
    hello(req, res) {
        console.log(' im here');
    }
    CreateCheckOut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkout = yield CheckInOut_service_1.default.checkOutEmp(req.params.idEmployee, req.body.comment);
            return res.send(HttpStatusEnum_1.HttpStatusEnum.SUCCESS).json(checkout);
        });
    }
    CreateCheckIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("id", req.params.idEmployee);
            const checkIn = yield CheckInOut_service_1.default.checkInEmp(req.params.idEmployee, req.body.comment);
            console.log({ checkIn });
            return res.send(HttpStatusEnum_1.HttpStatusEnum.SUCCESS).json(checkIn);
        });
    }
}
exports.default = CheckInOutController;
//# sourceMappingURL=CheckInOut.controller.js.map