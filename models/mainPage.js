import { timeStamp } from "console";
import mongoose from "mongoose";
const  mainPageSchema = new mongoose.Schema({
    mainCitate : {
    type:String,
    required:true,
},
 h1 : {
    type:String,
    required:true,
 },
 text1 : {
    type:String,
    required:true,
 },
 text2 : {
    type:String,
    required:true,
 },
 text3 : {
    type:String,
    required:true,
 },
 descr1 : {
    type:String,
    required:true,
 },
 descr2 : {
    type:String,
    required:true,
 },
 descr3 : {
    type:String,
    required:true,
 },
 descr4 : {
    type:String,
    required:true,
 },
 descr5 : {
    type:String,
    required:true,
 }
  
},
{
timestamps:true,
}
)
export default mongoose.model("mainPage", mainPageSchema)