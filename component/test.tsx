import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useTextSelector, useTextDispatch } from '../store/hooks';

import { saveText } from '../store/slices/test-slice';

export default function test() {
	const textState = useTextSelector((state) => state.text);
	const [text, setText] = useState('');
	const dispatch = useTextDispatch();

	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 120,
			}}
		>
			<View>
				<TextInput
					style={{ borderWidth: 1 }}
					onChangeText={(text) => setText(text)}
				/>
				<Button
					title='Save'
					onPress={() => dispatch(saveText({ name: text }))}
				/>
			</View>
			<View
				style={{
					height: 500,
					width: 300,
					flexWrap: 'wrap',
					backgroundColor: 'pink',
				}}
			>
				{textState.map((text, index) => (
					<Text key={index}>{text.name}</Text>
				))}
			</View>
		</View>
	);
}
