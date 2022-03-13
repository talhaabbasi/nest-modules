import { Module } from '@nestjs/common';
import { PowerService } from '../power/power.service';
import { DiskService } from './disk.service';

@Module({
  imports: [PowerService],
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}
