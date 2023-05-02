/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SocietyWhereInput } from "./SocietyWhereInput";
import { Type } from "class-transformer";
import { SocietyOrderByInput } from "./SocietyOrderByInput";

@ArgsType()
class SocietyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SocietyWhereInput,
  })
  @Field(() => SocietyWhereInput, { nullable: true })
  @Type(() => SocietyWhereInput)
  where?: SocietyWhereInput;

  @ApiProperty({
    required: false,
    type: [SocietyOrderByInput],
  })
  @Field(() => [SocietyOrderByInput], { nullable: true })
  @Type(() => SocietyOrderByInput)
  orderBy?: Array<SocietyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SocietyFindManyArgs as SocietyFindManyArgs };