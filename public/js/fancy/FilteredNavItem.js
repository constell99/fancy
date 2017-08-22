import { connect } from 'react-redux';
import { changeNav } from './actions';
import NavItem from './navItem';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.id === state.nav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: id => {
      dispatch(changeNav(id));
    }
  }
}

const FilteredNavItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavItem);

export default FilteredNavItem;