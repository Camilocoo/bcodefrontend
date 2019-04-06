const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lessons: [],
			events: [],
			markdown: {}
		},
		actions: {
			lessonUrl: slug => {
				let fullLink =
					"https://docs.content.breatheco.de/lesson/" + slug;
				return fullLink;
			}
		}
	};
};

export default getState;
