import React from "react";
import { useNavigate } from "react-router-dom";

import { Character, useFetchCharactersQuery } from "../charactersAPI";
import { getNumericParamFromPath } from "../../../app/utils";
import ViewContainer from "../../../app/components/ViewContainer/ViewContainer";
import { Card, Title, Label } from "./List.styled";

export default function List() {
  const navigate = useNavigate();
  const { data, status } = useFetchCharactersQuery();

  const onClickCharacter = (url: string): void => {
    try {
      const id = getNumericParamFromPath(url);
      navigate(`character/${id}`);
    } catch {
      navigate("/404");
    }
  };

  return (
    <ViewContainer status={status}>
      {data?.map(({ name, birth_year, url }: Character, i: number) => (
        <Card key={`character-list-${i}`} onClick={() => onClickCharacter(url)}>
          <Title>{name}</Title>
          <Label>Born in {birth_year}</Label>
        </Card>
      ))}
    </ViewContainer>
  );
}
