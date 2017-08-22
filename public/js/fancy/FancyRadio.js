import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

export default class FancyRadio extends React.PureComponent {
	render() {
		const {
			name,
			title,
			desc,
			options
		} = this.props;

		return(
			<div className="preference-item__input__subject">
				<h5>{ title }</h5>
				<p className="preference-item__input__comment">{ desc }</p>
				{ !options || options.length < 1 ? null: 
					options.map((v, i) => {
						const klassName = i === 0 ? 'first-item': '';
						return (
							<span className={ "preference-item__input__subject__radio " + klassName }
								key={ name + v.value }>
								<Field component="input"
									type="radio"
									name={ name }
									value={ v.value } 
									id={ name + v.value } />
								<label htmlFor={ name + v.value }>{ v.text }</label>
							</span>
						)
					})
				}
			</div>
		)
	}
}

FancyRadio.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
	options: PropTypes.array
}
