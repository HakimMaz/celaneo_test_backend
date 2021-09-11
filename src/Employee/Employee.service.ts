import Employee from './Employee.model';
import EmployeeDto from './Employee.dto';
import { HttpStatusEnum } from '../Shared/Enums/HttpStatusEnum';
import HttpException from '../exceptions/httpException';
export default class EmployeeService {


    // get employees  
    static async getAllemployees(): Promise<any> {
        const employees = await Employee.find();
        
    };

    //get employess filtred with dateCreation
    static async getAllemployeesWithDate(dateCreated: String): Promise<any> {
      //i choose aggregation to handle to date format to YYYY-MM-DD
      // i just add new field to give it the value of ${dateCreated} of my model to this format YYYY-MM-DD
      //than i match my aggreation with new field ${dateCreatedNewFormat}
        const employees =await Employee.aggregate([{
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
    }

    //create employee
    static async createEmpolyee(emp: EmployeeDto): Promise<any> {
        try {
            const employee = new Employee();
            employee.id = emp.id;
            employee.name = emp.name;
            employee.firstName = emp.firstName;
            employee.dateCreated = new Date(emp.dateCreated);
            employee.department = emp.department;
            return await employee.save();
          } catch {
            return Promise.reject(
              new HttpException(
                HttpStatusEnum.BAD_REQUEST,
                'Employee register already exist'
              )
            );
          }
    }

}