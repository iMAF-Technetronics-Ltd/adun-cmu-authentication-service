import { Module } from "@nestjs/common";
import { AdunCmusModuleBase } from "./base/adunCmus.module.base";
import { AdunCmusService } from "./adunCmus.service";
import { AdunCmusController } from "./adunCmus.controller";
import { AdunCmusResolver } from "./adunCmus.resolver";

@Module({
  imports: [AdunCmusModuleBase],
  controllers: [AdunCmusController],
  providers: [AdunCmusService, AdunCmusResolver],
  exports: [AdunCmusService],
})
export class AdunCmusModule {}
