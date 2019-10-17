export function expos(state = [], action) {
	const { expo } = action;

	switch (action.type) {
		case ('ADD_EXPO'): {
			return { ...state, expo };
		}
		case ('RESET_EXPOS'): {
			state = [];
		}
	}

	return state;
}

export function results(state = [], action) {
	if (action.type === 'SET_RESULTS') {
		return { results: action.results };
	}

	return state;
}
