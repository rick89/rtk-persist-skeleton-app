import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
	name: string;
};

type ItemState = {
	text: Item[];
};

const initialState: ItemState = {
	text: [],
};

export const testSlice = createSlice({
	name: 'test-slice',
	initialState,
	reducers: {
		saveText(state, action: PayloadAction<Item>) {
			state.text.push({
				...action.payload,
			});
		},
	},
});

export default testSlice;
export const { saveText } = testSlice.actions;
