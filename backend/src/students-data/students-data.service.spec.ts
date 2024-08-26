import { Test, TestingModule } from '@nestjs/testing';
import { StudentsDataService } from './students-data.service';

describe('StudentsDataService', () => {
  let service: StudentsDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsDataService],
    }).compile();

    service = module.get<StudentsDataService>(StudentsDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
