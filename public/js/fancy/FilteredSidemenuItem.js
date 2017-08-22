import { connect } from 'react-redux';
import { changeSidemenu } from './actions';
import SidemenuItem from './SidemenuItem';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.sidemenuId === state.sidemenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: id => {
      dispatch(changeSidemenu(id))
    }
  }
}

const FilteredSidemenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidemenuItem);

export default FilteredSidemenuItem