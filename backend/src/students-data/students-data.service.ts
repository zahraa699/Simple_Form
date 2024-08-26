import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { error } from 'console';
import { promises } from 'dns';
import { Model } from 'mongoose';
import { CountersService } from 'src/counters/counters.service';
import { Student } from 'src/database/collage.schema';
@Injectable()
export class StudentsDataService {
    constructor(
        @InjectModel(Student.name) private readonly StudentModel: Model<Student>,
        // private readonly countersService: CountersService,

    ){}

    // private async getnextID(name: string){
    //     const counter = await this.StudentModel.findOneAndUpdate(
    //         {collectionName: name},
    //         { $inc: {sequenceValue: 1}},
    //         {new: true, upsert: true},
    //     );
    //     console.log(`get ID for ${name}:`,counter.sequenceValue);
    //     return counter.sequenceValue;
    // };

    async createstudent (name: string, email: string, id: number): Promise<Student>{
        // console.log('ID:',);
        console.log('Name:', name);
        console.log('email:',email);
        // const newstudent = new this.StudentModel({id ,name, email});
        // const id = await this.countersService.getNextID('studentId');
        const newstudent = new this.StudentModel({name, email, id});
        const savedstudent = await newstudent.save();

        if (savedstudent && savedstudent._id){
            const numericID = parseInt(savedstudent._id.toString().slice(0, 8), 16);
            console.log(`numericid: ${numericID}`);
            savedstudent['numericid'] = numericID;
        }
        else {
            console.error('failed to accces id from saved student');

        }


        // console.log('Saved Student:', savedstudent); 
        return savedstudent;
    }

}
