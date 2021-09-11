import mongoose, { Document, Schema} from 'mongoose'
import {IEmployee} from './Employee.interface';

export const EmployeeSchema =new mongoose.Schema({
    id:{type: String,required:true, unique: true,index: true},
    name:{type:String,required:true},
    firstName:{type:String},
    dateCreated:{type:Date},
    department:{type:String,require:true},
  
})
EmployeeSchema.set('timestamps', true).toString();

const Employee =mongoose.model<IEmployee & Document>('employees',EmployeeSchema);
//Employee.createIndexes();
export default Employee;

