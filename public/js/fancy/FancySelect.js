import React from 'react';
import { Field } from 'redux-form';

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