import { IsDate, IsObject, IsString } from "class-validator";
import { IEmployee } from "../Employee/Employee.interface";

export class CheckInOutDto {
    @IsString()
    commentIn:String;
    @IsString()
    commentout:String;
    @IsDate()
    checkIn:Date;
    @IsDate()
    checkOut:Date;
    @IsObject()
    Employee:IEmployee;
    @IsDate()
    spentTime:Date;

}