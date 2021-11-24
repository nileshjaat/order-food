import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import RestaurantItem from '../../Components/RestaurantItem/RestaurantItem';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { setRestaurantsInfo, setFiltersInfo } from './Dispatch';
import { restaurantsData } from './dummyData';
import { Wrapper, RestaurantList, EmptyText } from './styledComponents';

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.home.restaurantsItems?.length > 0) {
      this.props.setRestaurantsInfo(this.props.home.restaurantsItems);
    } else {
      this.props.setRestaurantsInfo(restaurantsData);
    }
  }

  handleSetFilters = (filters) => {
    this.props.setFiltersInfo(filters);
  };

  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <Sidebar
            handleSetFilters={this.handleSetFilters}
            filterItems={this.props.home.filterItems}
            setRestaurantsInfo={this.props.setRestaurantsInfo}
          />
          <RestaurantList>
            {this.props.home.restaurantsItems?.length > 0 ? (
              <>
                {this.props.home.restaurantsItems?.map((rest) => (
                  <RestaurantItem rest={rest} />
                ))}
              </>
            ) : (
              <EmptyText>
                No matching restaurants found! Please change the filters
              </EmptyText>
            )}
          </RestaurantList>
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps, {
  setRestaurantsInfo,
  setFiltersInfo,
})(Home);
