import { IsString, IsNotEmpty } from 'class-validator';

export default class EmployeeDto{

    @IsString()
    @IsNotEmpty()
    id:String;

    @IsString()
    @IsNotEmpty()
    name:String;
    @IsString()
    firstName:String;

    //@IsDate()
    @IsNotEmpty()
     dateCreated:Date;

    @IsString()
    @IsNotEmpty()
    department:String;
}