import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationWhereUniqueInput } from "../../../inputs/TypeRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationWhereUniqueInput, {
    nullable: false
  })
  where!: TypeRelationWhereUniqueInput;
}
