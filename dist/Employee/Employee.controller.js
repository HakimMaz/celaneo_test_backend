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
const Employee_service_1 = __importDefault(require("./Employee.service"));
const Employee_dto_1 = __importDefault(require("./Employee.dto"));
const express_1 = require("express");
const HttpStatusEnum_1 = require("../Shared/Enums/HttpStatusEnum");
const dataValidator_1 = __importDefault(require("../Middlewares/dataValidator"));
class EmployeeController {
    constructor() {
        this.path = '/employee';
        this.route = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.get('/', this.fetchAllEmplyees);
        this.route.get('/:dateCreated', this.fetchAllEmplyeesWithDate);
        this.route.post('/', (0, dataValidator_1.default)(Employee_dto_1.default), this.CreateEmployee);
    }
    fetchAllEmplyees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield Employee_service_1.default.getAllemployees();
            if (employees.length == 0) {
                return res.send({
                    status: HttpStatusEnum_1.HttpStatusEnum.SUCCESS,
                    message: 'no employee is available '
                });
            }
            else {
                return res.send({
                    status: HttpStatusEnum_1.HttpStatusEnum.SUCCESS,
                    employees: employees,
                    message: 'Listed employee succesfully'
                });
            }
        });
    }
    fetchAllEmplyeesWithDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield Employee_service_1.default.getAllemployeesWithDate(req.params.dateCreated);
            if (employees.length == 0) {
                return res.send({
                    status: HttpStatusEnum_1.HttpStatusEnum.SUCCESS,
                    message: 'no employee is created at given date'
                });
            }
            else {
                return res.send({
                    status: HttpStatusEnum_1.HttpStatusEnum.SUCCESS,
                    employees: employees,
                    message: 'Listed employee succesfully'
                });
            }
        });
    }
    CreateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = req.body;
            const newEmployee = yield Employee_service_1.default.createEmpolyee(employee);
            res.status(HttpStatusEnum_1.HttpStatusEnum.CREATED).send(newEmployee.normalize());
        });
    }
}
exports.default = EmployeeController;
//# sourceMappingURL=Employee.controller.js.map