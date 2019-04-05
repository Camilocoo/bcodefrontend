const getState = ({ getStore, setStore }) => {
	return {
		store: {
			lessons: [],
			isLoaded: false
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
