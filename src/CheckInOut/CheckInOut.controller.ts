
import { Request, Response, Router } from 'express';
import Controller from '../Shared/interfaces/controller.interface'
import {  HttpStatusEnum } from '../Shared/Enums/HttpStatusEnum';
import CheckInOutService from './CheckInOut.service';






class CheckInOutController implements Controller {
  path = '/check';

  route = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {

    this.route.post(
        '/checkout/:idEmployee',
        this.CreateCheckOut
      );
    

    this.route.post(
        '/checkin/:idEmployee', 
        this.CreateCheckIn
      );
  }
 hello (req: Request, res: Response){
   console.log(' im here')

 }
  async CreateCheckOut(req: Request, res: Response): Promise<any> {
      const checkout =await CheckInOutService.checkOutEmp(req.params.idEmployee,req.body.comment);
      
        return res.send(HttpStatusEnum.SUCCESS).json(checkout);
  
     
  }
  async CreateCheckIn ( req:Request,res :Response):Promise<any>{
    console.log("id",req.params.idEmployee)
    const checkIn= await CheckInOutService.checkInEmp(req.params.idEmployee,req.body.comment);
    console.log({checkIn});
    return res.send(HttpStatusEnum.SUCCESS).json(checkIn);
  }



}

export default CheckInOutController;