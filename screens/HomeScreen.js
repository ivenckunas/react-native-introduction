import { View, Text, Image, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Image
					style={styles.img}
					source={{
						uri: "https://seeklogo.com/images/N/nasa-logo-D8FA7F7DE9-seeklogo.com.png",
					}}
				/>
				<Text>Test app</Text>
				<Text>some text</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: "auto",
		marginRight: "auto",
	},
	img: {
		width: 50,
		height: 50,
		objectFit: "contain",
	},
});
