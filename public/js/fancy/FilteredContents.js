import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import { preferenceRequest } from './actions';
import Contents from './Contents';

const mapStateToProps = (state, ownProps) => {
	return {
		preferencesData: getFormValues('preferences')(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: data => {
			dispatch(preferenceRequest(data));
		}
	}
}

const FilteredContents = connect(
	mapStateToProps,
	mapDispatchToProps
)(Contents);

export default FilteredContents;