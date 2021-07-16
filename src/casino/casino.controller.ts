import { Controller, Get } from "@nestjs/common";
import { CasinoService } from "./casino.service";

@Controller('casino')
export class CasinoController {
  constructor(private readonly casinoService: CasinoService) {
  }

  @Get('roll')
  async roll() {
    return this.casinoService.roll();
  }
}
