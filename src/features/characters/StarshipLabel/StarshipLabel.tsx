import React from "react";

import { useFetchStarshipFromUrlQuery } from "../charactersAPI";
import { Wrapper, StyledLink } from "./StarshipLabel.styled";
import { findNumericParamFromPath } from "../../../app/utils";

interface Props {
  url: string;
}

export default function StarshipLabel({ url }: Props) {
  const { data } = useFetchStarshipFromUrlQuery(url);
  const id = findNumericParamFromPath(url);

  return data ? (
    <Wrapper>
      <StyledLink to={`/starship/${id}`}>{data.name}</StyledLink>
    </Wrapper>
  ) : null;
}
