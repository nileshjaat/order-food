import React, { useState } from 'react';
import {
  Wrapper,
  FilterTitle,
  Container,
  InputContainer,
  Label,
} from './styledComponents';
import { restaurantsData } from '../../View/Home/dummyData';

function Sidebar({ handleSetFilters, filterItems, setRestaurantsInfo }) {
  const [menuFilters, setMenuFilters] = useState({
    Cuisine: [...filterItems.Cuisine],
    Dietary: [...filterItems.Dietary],
    Rating: [...filterItems.Rating],
  });

  const filters = [
    {
      id: 1,
      title: 'Cuisine',
      items: [
        'Asian',
        'Indian',
        'American',
        'Spanish',
        'Italian',
        'Mexican',
        'Chinese',
        'Caribbean',
        'German',
        'Korean',
        'Vietnamese',
        'Arab',
      ],
    },

    {
      id: 2,
      title: 'Dietary',
      items: ['Veg', 'Non-Veg', 'Vegan'],
    },

    {
      id: 3,
      title: 'Rating',
      items: ['3', '4', '4.5'],
    },
  ];

  const handleMenu = (myFilters) => {
    let myData = [...restaurantsData];

    if (myFilters['Cuisine'].length > 0) {
      myData = myData.filter((item) =>
        myFilters['Cuisine'].includes(item.Cuisine)
      );
    }

    if (myFilters['Dietary'].length > 0) {
      myData = myData.filter((item) =>
        myFilters['Dietary'].includes(item.Dietary)
      );
    }

    if (myFilters['Rating'].length > 0) {
      myFilters['Rating'].map((item) => {
        myData = myData.filter((itemData) => itemData.Rating >= item);
      });
    }

    setRestaurantsInfo(myData);
  };

  const handleClick = (key, term) => {
    let localFilters = { ...menuFilters };

    if (localFilters[key].indexOf(term) > -1) {
      const index = localFilters[key].indexOf(term);

      localFilters[key].splice(index, 1);
    } else {
      localFilters[key].push(term);
    }

    handleMenu(localFilters);
    setMenuFilters(localFilters);
    handleSetFilters(localFilters);
  };

  return (
    <Wrapper>
      {filters.map((filter) => (
        <Container key={filter.id}>
          <FilterTitle>{filter.title}</FilterTitle>

          {filter.items.map((item) => (
            <InputContainer>
              <input
                type="checkbox"
                id={item}
                name={item}
                onClick={() => handleClick(filter.title, item)}
                checked={
                  menuFilters[filter.title].length > 0 &&
                  menuFilters[filter.title].includes(item)
                }
              />
              <Label htmlFor={item}>{item}</Label>
            </InputContainer>
          ))}
        </Container>
      ))}
    </Wrapper>
  );
}

export default Sidebar;
