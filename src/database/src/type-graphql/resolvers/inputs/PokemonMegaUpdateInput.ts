import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput";

@TypeGraphQL.InputType("PokemonMegaUpdateInput", {
  isAbstract: true
})
export class PokemonMegaUpdateInput {
  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokemonNumber?: number | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  type?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | undefined;
}
