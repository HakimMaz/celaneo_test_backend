import Employee from "../Employee/Employee.model";
import HttpException from "../exceptions/httpException";
import { HttpStatusEnum } from "../Shared/Enums/HttpStatusEnum";
import CheckInOut from "./CheckInOut.model";
import moment from 'moment'

export default class CheckInOutService {

    //check in
    static async checkInEmp(id: String, comment: String) {
        try {
            const check = new CheckInOut();
            const EmpFound = await Employee.findOne({ id });
            check.commentin = comment;
            check.commentout=''
            check.checkIn = new Date();      
            check.employee = EmpFound;
            return check.save();
        } catch {
            return Promise.reject(
                new HttpException(
                    HttpStatusEnum.BAD_REQUEST,
                    'checkIn cant be duplicated'
                )
            );

        }



    }

    //check out
    static async checkOutEmp(id: String, comment: String) {
        try {
            const check:any= await CheckInOut.findOneAndUpdate({"employees":{id}});
             check.commentout = comment;
             check.checkOut= new Date();
             check.spentTime =this.subTwoDate(check.checkIn,check.checkOut);          
             return await check.save();
        } catch {
            return Promise.reject(
                new HttpException(
                    HttpStatusEnum.BAD_REQUEST,
                    'checkOut cant be duplicated'
                )
            );

        }
    }
   //sub dates
    static subTwoDate(d1: Date, d2: Date) :any {
        let date1 = moment(d1);
        let date2 = moment(d2);
        let differenceInMs = date2.diff(date1); 
        let duration = moment.duration(differenceInMs); // moment.duration accepts ms
        //supposant que la difference entre check in et chechout se clalcule en heure , quand il s'agit
        // d'un pointage journalier
        let differenceInHours = duration.asMilliseconds();
        console.log({differenceInHours})
        return differenceInHours;
    }




}