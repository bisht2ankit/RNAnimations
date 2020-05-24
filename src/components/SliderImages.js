import React, { useRef } from 'react';
import { ScrollView, View, Image, Text, Animated, useWindowDimensions } from "react-native";
import { appInlineData } from '../constants/appInlineData';
import globalStyles from '../constants/globalStyles';
import { styles } from './styles';

export const SliderImages = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const price = useRef(50).current

    const calculateTextOpacity = (imageIndex) => {
        return scrollX.interpolate({
            inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
        });
    }

    const calculateImageLeftMargin = (imageIndex) => {
        return scrollX.interpolate({
            inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
            ],
            outputRange: [-70, -50, 70],
            extrapolate: "clamp"
        });
    }

    const calculateImageDimensions = (imageIndex) => {
        return scrollX.interpolate({
            inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
            ],
            outputRange: [100, 220, 100],
            extrapolate: "clamp"
        });
    }

    const calculatePrice = (imageIndex, price) => {
        return scrollX.interpolate({
            inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
            ],
            outputRange: [100, price + 1, 100],
            extrapolate: "clamp"
        });
    }

    const renderSlideIndicator = () => {
        return (
            <View style={styles.indicatorContainer}>
                {appInlineData.playStations.map((image, imageIndex) => {
                    const width = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (imageIndex - 1),
                            windowWidth * imageIndex,
                            windowWidth * (imageIndex + 1)
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: "clamp"
                    });
                    return (
                        <Animated.View
                            key={imageIndex}
                            style={[styles.normalDot, { width }]}
                        />
                    );
                })}
            </View>
        )
    }

    return (
        <View style={styles.sliderContainer}>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={
                    Animated.event([{
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }])
                }
                scrollEventThrottle={1}
            >
                {appInlineData.playStations.map((item, imageIndex) => {
                    const { name, image, price } = item;
                    const textOpacity = calculateTextOpacity(imageIndex);
                    const imageLeftMargin = calculateImageLeftMargin(imageIndex);
                    const imageDimensions = calculateImageDimensions(imageIndex);
                    const itemPrice = calculatePrice(imageIndex, price);

                    return (
                        <Animated.View
                            style={[styles.listContainer, {
                                opacity: textOpacity,
                            }]}
                            key={imageIndex}
                        >
                            <View style={styles.listColumnStyle}>
                                <Animated.Text style={[styles.title, {
                                    opacity: textOpacity
                                }]}>{name}</Animated.Text>
                            </View>
                            <View style={styles.card}>
                                <Animated.Image resizeMode="contain" source={image} style={[styles.image, {
                                    marginLeft: imageLeftMargin,
                                    width: imageDimensions,
                                    height: imageDimensions
                                }]} />
                            </View>
                        </Animated.View>
                    );
                })}
            </ScrollView>
            {/* <View>
                    <Text style={styles.subtitle}>Price</Text>
                    <Animated.Text style={[styles.title, {
                        marginTop: 0,

                    }]}>$ {50}</Animated.Text>
                </View> */}
            {renderSlideIndicator()}

        </View>

    )
}