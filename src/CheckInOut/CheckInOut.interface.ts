import EmployeeDto  from "../Employee/Employee.dto";

export interface ICheckInOut{
    commentin:String;
    commentout:String,
    checkIn:Date;
    checkOut:String;
    spentTime:Date,
    employee:EmployeeDto;
}