import React from "react";
import { useParams } from "react-router-dom";

import { useFetchCharacterQuery } from "../charactersAPI";
import ViewContainer from "../../../app/components/ViewContainer/ViewContainer";
import StarshipLabel from "../StarshipLabel/StarshipLabel";
import { PageContainer, Label, Title, SubTitle } from "../../../app/UI/styles";

export default function Bio() {
  const { id } = useParams();
  const { data, status } = useFetchCharacterQuery(Number(id));

  return (
    <ViewContainer status={status}>
      {data ? (
        <PageContainer>
          <Title>{data.name}</Title>
          <Label>
            Eye color is <strong>{data.eye_color}</strong>
          </Label>
          <Label>
            Gender <strong>{data.gender}</strong>
          </Label>
          <Label>
            Hair color is <strong>{data.hair_color}</strong>
          </Label>
          <Label>
            Height <strong>{data.height}</strong>
          </Label>
          <Label>
            Mass <strong>{data.mass}</strong>
          </Label>
          <SubTitle>Starships</SubTitle>
          {data.starships.length ? (
            data.starships.map((url: string, i: number) => (
              <StarshipLabel key={`starship-${i}`} url={url} />
            ))
          ) : (
            <Label>
              <em>No starships</em>
            </Label>
          )}
        </PageContainer>
      ) : null}
    </ViewContainer>
  );
}
