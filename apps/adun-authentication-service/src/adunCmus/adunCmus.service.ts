import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdunCmusServiceBase } from "./base/adunCmus.service.base";

@Injectable()
export class AdunCmusService extends AdunCmusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
