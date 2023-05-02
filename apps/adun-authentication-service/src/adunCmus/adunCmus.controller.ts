import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdunCmusService } from "./adunCmus.service";
import { AdunCmusControllerBase } from "./base/adunCmus.controller.base";

@swagger.ApiTags("adunCmuses")
@common.Controller("adunCmuses")
export class AdunCmusController extends AdunCmusControllerBase {
  constructor(
    protected readonly service: AdunCmusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
