import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SocietyService } from "./society.service";
import { SocietyControllerBase } from "./base/society.controller.base";

@swagger.ApiTags("societies")
@common.Controller("societies")
export class SocietyController extends SocietyControllerBase {
  constructor(
    protected readonly service: SocietyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
