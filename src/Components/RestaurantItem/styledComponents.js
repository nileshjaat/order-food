import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #000000;
  border-radius: 8px;
  background-color: #f1f1f1;
  box-shadow: -4px -4px 8px 0 rgba(255, 255, 255, 0.2),
    4px 4px 8px 0 rgba(170, 170, 170, 0.2);
  display: flex;
  justify-content: space-between;
  margin: 8px;
  padding: 8px;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 16px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  display: flex;
`;

export const CuisineContainer = styled.h1`
  background-color: #999999;
  color: #ffffff;
  font-family: 'Public Sans';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
  width: fit-content;
  padding: 4px 8px;
`;

export const Title = styled.h1`
  color: #000000;
  font-family: 'Public Sans';
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
  margin-right: 16px;
`;

export const RatingContainer = styled.h1`
  display: flex;
  align-items: center;
  color: #ffd700;
  font-family: 'Public Sans';
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
  align-self: flex-end;
  background-color: #999999;
  padding: 8px;
`;
