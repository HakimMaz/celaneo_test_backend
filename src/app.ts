import express from "express";
import mongoose from 'mongoose'
import EmployeeController from './Employee/Employee.controller'
import cors from 'cors'
import CheckInOutController from "./CheckInOut/CheckInOut.controller";
const app = express();
const CheckController=new CheckInOutController();
const EmpController=new EmployeeController();


app.set('port',4000);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());


// connection to mongodb
const uri:string='mongodb+srv://hakimmazouz:respectthis12@cluster0.nyvjl.mongodb.net/pointage';
mongoose.connect(uri,(err:any)=>{
    if(err){
        console.log('connection to database failed');
    }else{
        console.log('connection succesfully to database')
    }
})

//default request
app.get('/',(req:any ,res:any)=>{
    res.send('hello typescript')
});

app.use(EmpController.path, EmpController.route );
app.use(CheckController.path, CheckController.route);

//starting server 
app.listen(app.get('port'),()=>{
   console.log('hello again typescript')
})

