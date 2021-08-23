import React, {useState, useEffect} from "react";
import {Text, View, Image, Button} from "react-native";
import data from "../utils/data";
import styles from "./Carousel";

export const Carousel = () => {
	const [index, setIndex] = useState(0);
	const [imagesToShow, setImagesToShow] = useState([]);

	useEffect(() => {
		setImagesToShow(data);
	}, []);

	const handlePressPrev = () => {
		if (index > 0) {
			setIndex(index - 1);
		}
	};

	const handlePressNext = () => {
		if (index < imagesToShow.length - 1) {
			setIndex(index + 1);
		}
	};

	return (
		<View style={styles.carousel}>
			<Text style={styles.txt}>Carousel challenge</Text>
			<View style={styles.container}>
				<Image
					source={{
						uri: data[index].images[
							Math.floor(Math.random() * data[index].images.length)
						],
					}}
					style={styles.img}
				/>

				{index === 0 ? null : (
					<View style={styles.btnLeft}>
						<Button color="#365faa" title="<" onPress={handlePressPrev} />
					</View>
				)}
				{index === imagesToShow.length - 1 ? null : (
					<View style={styles.btnRigth}>
						<Button color="#365faa" title=">" onPress={handlePressNext} />
					</View>
				)}
			</View>
		</View>
	);
};

export default Carousel;
