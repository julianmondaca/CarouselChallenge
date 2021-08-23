import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Carousel from "./components/Carousel.jsx";

export default function App() {
	return (
		<View style={styles.container}>
			<Carousel />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "%100",
		height: "%100",
	},
});
