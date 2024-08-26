import { Test, TestingModule } from '@nestjs/testing';
import { StudentsDataController } from './students-data.controller';

describe('StudentsDataController', () => {
  let controller: StudentsDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsDataController],
    }).compile();

    controller = module.get<StudentsDataController>(StudentsDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
