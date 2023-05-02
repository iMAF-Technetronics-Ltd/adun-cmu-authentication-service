import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocietyServiceBase } from "./base/society.service.base";

@Injectable()
export class SocietyService extends SocietyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
