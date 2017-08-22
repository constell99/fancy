import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

export default class FancySelect extends React.PureComponent {
	render() {
		const { 
			name,
			title,
			options,
			comment
		} = this.props;

		return (
			<div className="preference-item__input__subject">
				<h5>{ title }</h5>
				<Field name={ name } component="select">
					{ options.map((v) => {
						return ( 
							<option 
								key= {v.value} 
								value={ v.value }>
								{ v.text }
							</option>
						) 	
					})}
				</Field>
			</div>
		)
	}
}

FancySelect.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	comment: PropTypes.string,
	options: PropTypes.array
};