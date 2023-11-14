import { timeStamp } from "console";
import mongoose from "mongoose";
const  ItemSchema = new mongoose.Schema({
 title : {
    type:String,
    required:true,
 },
 text : {
    type:String,
    required:true,
 },
  imgmain:String,
}, {
    timestamps: true
}
)
export default mongoose.model("Item", ItemSchema)