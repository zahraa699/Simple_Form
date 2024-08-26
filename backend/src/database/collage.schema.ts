import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
// import * as mongoose from 'mongoose';
// import * as autoIncrement from 'mongoose-sequence';
// export type StudentDocument = Student & Document;
@Schema()
export class Student extends Document {
    // @Prop({required: true})
    // _id: string;
    // static _id: any;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;




}
const studentSchema = SchemaFactory.createForClass(Student);
// studentSchema.plugin(autoIncrement(mongoose), {inc_field: 'id'});
export {studentSchema};
