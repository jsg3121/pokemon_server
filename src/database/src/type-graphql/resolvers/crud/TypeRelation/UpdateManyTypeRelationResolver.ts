import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTypeRelationArgs } from "./args/UpdateManyTypeRelationArgs";
import { TypeRelation } from "../../../models/TypeRelation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeRelation)
export class UpdateManyTypeRelationResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTypeRelation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTypeRelationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeRelation.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
