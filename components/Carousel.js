import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	txt: {
		color: "#365faa",
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 15,
	},
	carousel: {
		flex: 1,
		marginTop: 150,
		marginBottom: 150,
		padding: "auto",
		width: "%100",
		height: "%100",
	},
	container: {
		width: "%100",
		height: "%100",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	img: {
		borderRadius: 15,
		paddingBottom: 100,
		paddingTop: 100,
		width: "%80",
		height: 300,
	},
	btnRigth: {
		borderRadius: 50,
		marginTop: 70,
		borderColor: "green",
		padding: 3,
		position: "absolute",
		right: 2,
		top: 50,
	},
	btnLeft: {
		borderRadius: 50,
		marginTop: 70,
		padding: 3,
		position: "absolute",
		left: 2,
		top: 50,
	},
});

export default styles;
