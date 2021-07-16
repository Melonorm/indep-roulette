import { Injectable } from '@nestjs/common';
import { StuffService } from "../stuff/stuff.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CasinoService {
  constructor(
    private readonly stuffService: StuffService,
    private readonly configService: ConfigService
  ) {
  }

  async roll() {
    const stuffs = await this.stuffService.findAllAmounted();
    console.log(stuffs);
    const winPercent: number = this.configService.get('WIN_PERCENT');
    console.log(winPercent);

    /*
      1. Определение выигрыша / проигрыша (по winPercent);
      2. Если проиграл - возврат FailRollResult;
      3. Eсли выиграл:
         3а. Заполняем массив призов по их dropRate;
         3б. Выбираем рандомный приз;
         3в. Возврат WinRollResult
     */
  }

  private static selfRandom(min : number,  max : number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
