"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckInOutDto = void 0;
const class_validator_1 = require("class-validator");
class CheckInOutDto {
}
__decorate([
    (0, class_validator_1.IsString)()
], CheckInOutDto.prototype, "commentIn", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], CheckInOutDto.prototype, "commentout", void 0);
__decorate([
    (0, class_validator_1.IsDate)()
], CheckInOutDto.prototype, "checkIn", void 0);
__decorate([
    (0, class_validator_1.IsDate)()
], CheckInOutDto.prototype, "checkOut", void 0);
__decorate([
    (0, class_validator_1.IsObject)()
], CheckInOutDto.prototype, "Employee", void 0);
__decorate([
    (0, class_validator_1.IsDate)()
], CheckInOutDto.prototype, "spentTime", void 0);
exports.CheckInOutDto = CheckInOutDto;
//# sourceMappingURL=CheckInOut.dto.js.map