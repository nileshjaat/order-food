import React from 'react';
import {
  Container,
  Title,
  Details,
  CuisineContainer,
  RatingContainer,
  DetailsContainer,
  Img,
} from './styledComponents';

function RestaurantItem({ rest }) {
  const { image, name, Cuisine, Dietary, Rating } = rest;

  return (
    <Container>
      <DetailsContainer>
        <Img src={image} />
        <Details>
          <Title>{name}</Title>
          <CuisineContainer>{Cuisine}</CuisineContainer>
          <CuisineContainer>{Dietary}</CuisineContainer>
        </Details>
      </DetailsContainer>
      <RatingContainer>
        <Title>Rating: </Title> {Rating} / 5
      </RatingContainer>
    </Container>
  );
}

export default RestaurantItem;
