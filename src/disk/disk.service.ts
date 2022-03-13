import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private readonly power: PowerService) {}

  getData() {
    console.log('Drawing 20 watts of power from the power service');
    this.power.supplyPower(20);
    return 'data';
  }
}
