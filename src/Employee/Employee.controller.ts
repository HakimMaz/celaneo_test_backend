import EmployeeService from './Employee.service';
import EmployeeDto from './Employee.dto';
import { Request, Response, Router } from 'express';
import Employee from './Employee.model'

import {  HttpStatusEnum } from '../Shared/Enums/HttpStatusEnum';
import Controller from '../Shared/interfaces/controller.interface'
import validationMiddleware from '../Middlewares/dataValidator';
import { IEmployee } from './Employee.interface';




class EmployeeController implements Controller {
  path = '/employee';

  route = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {

    this.route.get(
      '/',
      this.fetchAllEmplyees
    );
    this.route.get(
      '/:dateCreated',
      this.fetchAllEmplyeesWithDate
    );

    this.route.post(
        '/',
        validationMiddleware(EmployeeDto),
        this.CreateEmployee
      );
  }

  async fetchAllEmplyees(req: Request, res: Response): Promise<any> {
      const employees =await EmployeeService.getAllemployees();
      if (employees.length == 0) {
        return res.send({
            status: HttpStatusEnum.SUCCESS,
            message: 'no employee is available '
        })
    } else {
        return res.send({
            status: HttpStatusEnum.SUCCESS,
            employees: employees,
            message: 'Listed employee succesfully'
        })
    }
     
  }

  async fetchAllEmplyeesWithDate(req:Request , res:Response):Promise<any>{
    const employees =await EmployeeService.getAllemployeesWithDate(req.params.dateCreated)
    if (employees.length == 0) {
      return res.send({
          status: HttpStatusEnum.SUCCESS,
          message: 'no employee is created at given date'
      })
  } else {
      return  res.send({
          status: HttpStatusEnum.SUCCESS,
          employees: employees,
          message: 'Listed employee succesfully'
      })
  }
  }

  async CreateEmployee(req: Request, res: Response): Promise<void> {
    const employee:IEmployee= req.body;
    const newEmployee = await EmployeeService.createEmpolyee(employee);
    res.status(HttpStatusEnum.CREATED).send(newEmployee.normalize());  
  }

}

export default EmployeeController;