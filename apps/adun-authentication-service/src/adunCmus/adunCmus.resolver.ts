import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdunCmusResolverBase } from "./base/adunCmus.resolver.base";
import { AdunCmus } from "./base/AdunCmus";
import { AdunCmusService } from "./adunCmus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdunCmus)
export class AdunCmusResolver extends AdunCmusResolverBase {
  constructor(
    protected readonly service: AdunCmusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
