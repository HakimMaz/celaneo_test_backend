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
const Employee_model_1 = __importDefault(require("../Employee/Employee.model"));
const httpException_1 = __importDefault(require("../exceptions/httpException"));
const HttpStatusEnum_1 = require("../Shared/Enums/HttpStatusEnum");
const CheckInOut_model_1 = __importDefault(require("./CheckInOut.model"));
const moment_1 = __importDefault(require("moment"));
class CheckInOutService {
    //check in
    static checkInEmp(id, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const check = new CheckInOut_model_1.default();
                const EmpFound = yield Employee_model_1.default.findOne({ id });
                check.commentin = comment;
                check.commentout = '';
                check.checkIn = new Date();
                check.employee = EmpFound;
                return check.save();
            }
            catch (_a) {
                return Promise.reject(new httpException_1.default(HttpStatusEnum_1.HttpStatusEnum.BAD_REQUEST, 'checkIn cant be duplicated'));
            }
        });
    }
    //check out
    static checkOutEmp(id, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const check = yield CheckInOut_model_1.default.findOneAndUpdate({ "employees": { id } });
                check.commentout = comment;
                check.checkOut = new Date();
                check.spentTime = this.subTwoDate(check.checkIn, check.checkOut);
                return yield check.save();
            }
            catch (_a) {
                return Promise.reject(new httpException_1.default(HttpStatusEnum_1.HttpStatusEnum.BAD_REQUEST, 'checkOut cant be duplicated'));
            }
        });
    }
    //sub dates
    static subTwoDate(d1, d2) {
        let date1 = (0, moment_1.default)(d1);
        let date2 = (0, moment_1.default)(d2);
        let differenceInMs = date2.diff(date1);
        let duration = moment_1.default.duration(differenceInMs); // moment.duration accepts ms
        //supposant que la difference entre check in et chechout se clalcule en heure , quand il s'agit
        // d'un pointage journalier
        let differenceInHours = duration.asMilliseconds();
        console.log({ differenceInHours });
        return differenceInHours;
    }
}
exports.default = CheckInOutService;
//# sourceMappingURL=CheckInOut.service.js.map