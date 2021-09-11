"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Employee_controller_1 = __importDefault(require("./Employee/Employee.controller"));
const cors_1 = __importDefault(require("cors"));
const CheckInOut_controller_1 = __importDefault(require("./CheckInOut/CheckInOut.controller"));
const app = (0, express_1.default)();
const CheckController = new CheckInOut_controller_1.default();
const EmpController = new Employee_controller_1.default();
app.set('port', 4000);
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
app.use((0, cors_1.default)());
// connection to mongodb
const uri = 'mongodb+srv://hakimmazouz:respectthis12@cluster0.nyvjl.mongodb.net/pointage';
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.log('connection to database failed');
    }
    else {
        console.log('connection succesfully to database');
    }
});
//default request
app.get('/', (req, res) => {
    res.send('hello typescript');
});
app.use(EmpController.path, EmpController.route);
app.use(CheckController.path, CheckController.route);
//starting server 
app.listen(app.get('port'), () => {
    console.log('hello again typescript');
});
//# sourceMappingURL=app.js.map