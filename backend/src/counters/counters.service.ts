import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';
import { Model } from 'mongoose';
import { counter } from 'src/database/counter.schema';
@Injectable()
export class CountersService {
    constructor(
        @InjectModel('counter') private readonly counterModel: Model<counter>,
    ){}

    async getNextID(name: string): Promise<number> {
        const counter = await this.counterModel.findOneAndUpdate(
            {name},
            {$ID: {seq_id: 1}},
            {new: true, upsert:true},

        );

        if (!counter){
            throw new NotFoundException(`counter ${name} not found`);
        }

        // if (counter.id === 0){
        //     counter.id = 1;
        //     await counter.save();
        // }

        return counter.seq_id;

    }
}
