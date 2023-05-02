import { Module } from "@nestjs/common";
import { SocietyModuleBase } from "./base/society.module.base";
import { SocietyService } from "./society.service";
import { SocietyController } from "./society.controller";
import { SocietyResolver } from "./society.resolver";

@Module({
  imports: [SocietyModuleBase],
  controllers: [SocietyController],
  providers: [SocietyService, SocietyResolver],
  exports: [SocietyService],
})
export class SocietyModule {}
