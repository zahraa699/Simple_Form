import { Body, Controller, Param, Post } from '@nestjs/common';
import { StudentsDataService } from './students-data.service';
import { Student } from 'src/database/collage.schema';
import { Console } from 'console';
import { get } from 'http';
import { promises } from 'dns';
@Controller('students-data')
export class StudentsDataController {

    constructor(private readonly studentsdataservices: StudentsDataService){}

    @Post()
    async createstudent(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('id') id: number,
    ){
        console.log('recievedname:', name);
        console.log('recievedemail:', email);

        const student = await this.studentsdataservices.createstudent(name, email, id);
        const numericId = parseInt(student._id.toString().slice(0, 8), 16);
        return {
            numericId: numericId,
            id: student._id,
            name: student.name,
            email: student.email,
            
        }





    }
}
