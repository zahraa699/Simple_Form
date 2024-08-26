import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsDataModule } from './students-data/students-data.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CountersService } from './counters/counters.service';
import { CountersModule } from './counters/counters.module';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb://localhost:27017/studentinfo'),
  StudentsDataModule,
  // CountersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 