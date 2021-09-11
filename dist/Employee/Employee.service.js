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
const Employee_model_1 = __importDefault(require("./Employee.model"));
const HttpStatusEnum_1 = require("../Shared/Enums/HttpStatusEnum");
const httpException_1 = __importDefault(require("../exceptions/httpException"));
class EmployeeService {
    // get employees  
    static getAllemployees() {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield Employee_model_1.default.find();
        });
    }
    ;
    //get employess filtred with dateCreation
    static getAllemployeesWithDate(dateCreated) {
        return __awaiter(this, void 0, void 0, function* () {
            //i choose aggregation to handle to date format to YYYY-MM-DD
            // i just add new field to give it the value of ${dateCreated} of my model to this format YYYY-MM-DD
            //than i match my aggreation with new field ${dateCreatedNewFormat}
            const employees = yield Employee_model_1.default.aggregate([{
                    $addFields: {
                        dateCreatedNewFormat: {
                            $dateToString: {
                                format: '%Y-%m-%d',
                                date: '$dateCreated'
                            }
                        }
                    }
                },
                {
                    $match: {
                        dateCreatedNewFormat: {
                            $eq: dateCreated
                        }
                    }
                }
            ]);
            return employees;
        });
    }
    //create employee
    static createEmpolyee(emp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = new Employee_model_1.default();
                employee.id = emp.id;
                employee.name = emp.name;
                employee.firstName = emp.firstName;
                employee.dateCreated = new Date(emp.dateCreated);
                employee.department = emp.department;
                return yield employee.save();
            }
            catch (_a) {
                return Promise.reject(new httpException_1.default(HttpStatusEnum_1.HttpStatusEnum.BAD_REQUEST, 'Employee register already exist'));
            }
        });
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=Employee.service.js.map