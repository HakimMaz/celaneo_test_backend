import { Document } from "mongoose";

export interface IEmployee extends Document{
    id:String;
    name:String;
    firstName:String;
    dateCreated:Date;
    department:String;
}