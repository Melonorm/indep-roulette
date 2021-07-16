import { Module } from '@nestjs/common';
import { CasinoController } from './casino.controller';
import { CasinoService } from './casino.service';
import { ConfigModule } from "@nestjs/config";
import { StuffModule } from "../stuff/stuff.module";

@Module({
  imports: [ConfigModule, StuffModule],
  controllers: [CasinoController],
  providers: [CasinoService]
})
export class CasinoModule {}
