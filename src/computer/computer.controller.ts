import { Controller } from '@nestjs/common';
import { CpuService } from '@src/cpu/cpu.service';
import { DiskService } from '@src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}
}
