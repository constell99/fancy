import React from 'react';
import { reduxForm } from 'redux-form';

import FancySelect from './FancySelect';
import FancyRadio from './FancyRadio';
import constants from './constants';

class Contents extends React.PureComponent {
	handleSubmit(e) {
		const { onSubmit, preferencesData } = this.props;
		onSubmit(preferencesData);
		e.preventDefault();
	}

	render() {
		// TODO 이것 하나로 합치기
		const { formOption } = constants;
		const { radio, select } = formOption;
		
		return (
			<section className="contents">
				<form onSubmit={ e => { this.handleSubmit.bind(this, e)() }} >
					<h3>Edit Preferences</h3>
					<div className="preference-item">
						<h4>Localization</h4>
						<div className="preference-item__input-list">
							<div className="preference-item__input first-item">
								<FancySelect 
									name="language"
									title="Language"
									options={ select.language } />
								<div className="preference-item__input__comment language-comment"> 
									<p>Interested in helping translate Fancy?</p>
									<a href="#"> Let us know</a>.
								</div>
							</div>
							<div className="preference-item__input">
								<FancySelect 
									name="timezone" 
									title="Time zone"
									options={ select.timezone } />
							</div>
							<div className="preference-item__input">
								<FancySelect 
									name="currency"
									title="Currency" 
									options={ select.currency } />
							</div>
						</div>
					</div>
					<div className="preference-item">
						<h4>Privacy</h4>
						<div className="preference-item__input-list">
							<div className="preference-item__input first-item">
								<FancyRadio
									name="profile_visibility" 
									title="Profile visibility" 
									desc="Manage who can see your activity, things you fancy, your followers, people you follow or in anyone`s search results." 
									options={ radio.profileVisibility } />
							</div>
							<div className="preference-item__input">
								<FancyRadio 
									name="messages"
									title="Messages"
									desc="Control who can send you messages." 
									options={ radio.message } />
							</div>
							<div className="preference-item__input">
								<div className="preference-item__input__subject">
									<h5>Recently viewed</h5>
									<div className="preference-item__input__comment"> 
										<p>Manage your Fancy browsing histroy.</p><br />
										<a href="#">Delete all items</a>.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="preference-item">
						<h4>Content</h4>
						<div className="preference-item__input-list">
							<div className="preference-item__input first-item">
								<FancyRadio 
									name="category_list"
									title="Category lists"
									desc="Automatically add Fancy`d items to the Category list" 
									options={ radio.categoryList } />
							</div>
						</div>
					</div>
					<div className="preference-footer">
						<button type="submit" className="save-preference-btn">Save Preferences</button>
					</div>
				</form>
			</section>
		)
	}
}

Contents = reduxForm({
	form: 'preferences'
})(Contents);

export default Contents;