const constants = {
	formOption: {
		select: {
			language: [
				{ value: 'english', text: 'English' },
				{ value: 'swedish', text: 'Svenska' },
				{ value: 'thai', text: 'ภาษาไทย' },
				{ value: 'korean', text: '한국어' }
			],
			timezone: [
				{ value: 'UTC/GMT +0:00', text: 'UTC/GMT +0:00' },
				{ value: 'UTC/GMT +2:00', text: 'UTC/GMT +2:00' },
				{ value: 'UTC/GMT +7:00', text: 'UTC/GMT +7:00' },
				{ value: 'UTC/GMT +9:00', text: 'UTC/GMT +9:00' }
			],
			currency: [
				{ value: 'USD', text: 'United States dollar ($) (USD)' },
				{ value: 'SEK', text: 'Swedish krona (SEK)' },
				{ value: 'THB', text: 'Baht (฿) (THB)' },
				{ value: 'KRW', text: 'South Korean won (₩) (KRW)' }
			]
		},
		radio: {
			profileVisibility: [
				{ value: 'everyone', text: 'Everyone', ico: ''},
				{ value: 'private', text: 'Private', ico: ''}
			],
			message: [
				{ value: 'everyone', text: 'Everyone', ico: ''},
				{ value: 'follow', text: 'People you follow', ico: ''},
				{ value: 'no', text: 'No one', ico: ''}
			],
			categoryList: [
				{ value: 'true', text: 'enable', ico: ''},
				{ value: 'false', text: 'unable', ico: ''}
			]
		}
	}
};

export default constants;