"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.EmployeeSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    firstName: { type: String },
    dateCreated: { type: Date },
    department: { type: String, require: true },
});
exports.EmployeeSchema.set('timestamps', true).toString();
const Employee = mongoose_1.default.model('employees', exports.EmployeeSchema);
//Employee.createIndexes();
exports.default = Employee;
//# sourceMappingURL=Employee.model.js.map