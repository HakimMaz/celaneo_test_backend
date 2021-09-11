import mongoose, { Document, Schema} from 'mongoose'
import { ICheckInOut } from './CheckInOut.interface';

export const CheckInOutSchema =new mongoose.Schema({
    commentin:{type:String},
    commentout:{type:String},
    checkIn:{type:Date},
    checkOut:{type:Date},
    spentTime:{type:Date},
    employee:{type:Schema.Types.ObjectId,ref:'employees'}
  
})
CheckInOutSchema.set('timestamps', true).toString();

const CheckInOut =mongoose.model<ICheckInOut & Document>('check_in_out',CheckInOutSchema);
CheckInOut.createIndexes();
export default CheckInOut;

