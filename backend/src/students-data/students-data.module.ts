import { Module } from '@nestjs/common';
import { StudentsDataService } from './students-data.service';
import { StudentsDataController } from './students-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, studentSchema } from 'src/database/collage.schema';
import { CountersModule } from 'src/counters/counters.module';
@Module({
  imports: [

    MongooseModule.forFeature([{name: Student.name, schema:studentSchema}]),
    // CountersModule,

  ],
  providers: [StudentsDataService],
  controllers: [StudentsDataController]
})
export class StudentsDataModule {}
