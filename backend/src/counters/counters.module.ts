import { Module } from '@nestjs/common';
import { CountersController } from './counters.controller';
import { CountersService } from './counters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { counter, counterSchema } from 'src/database/counter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'counter', schema: counterSchema}]),
  ],
  // controllers: [CountersController],
  providers: [CountersService],
  exports: [CountersService],
})
export class CountersModule {}
