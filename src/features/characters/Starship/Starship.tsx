import React from "react";
import { useParams } from "react-router-dom";

import { useFetchStarshipFromUrlQuery } from "../charactersAPI";
import ViewContainer from "../../../app/components/ViewContainer/ViewContainer";
import { PageContainer, Label, Title } from "../../../app/UI/styles";

export default function Starship() {
  const { id } = useParams();
  const { data, status } = useFetchStarshipFromUrlQuery(`/starships/${id}`);

  return (
    <ViewContainer status={status}>
      {data ? (
        <PageContainer>
          <Title>{data.name}</Title>
          <Label>
            <strong>
              {data.model} | <em>{data.starship_class}</em>
            </strong>
          </Label>
          <Label>
            Cargo capacity is <strong>{data.cargo_capacity}</strong>
          </Label>
          <Label>
            Consumables <strong>{data.consumables}</strong>
          </Label>
          <Label>
            Cost <strong>{data.cost_in_credits}</strong>
          </Label>
          <Label>
            Manufacter <strong>{data.manufacturer}</strong>
          </Label>
        </PageContainer>
      ) : null}
    </ViewContainer>
  );
}
