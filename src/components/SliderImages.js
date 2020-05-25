import React, { useRef, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Animated, useWindowDimensions, Text } from "react-native";
import { appInlineData } from '../constants/appInlineData';
import { styles } from './styles';
import { ItemDetail } from './ItemDetail';
import { constants } from '../constants/strings';
import { CartFooter } from './CartFooter';

export const SliderImages = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    const [itemDetailVisible, setItemDetailVisible] = useState(false);
    const [itemId, setItemId] = useState(-1);
    const animatedCardWidth = useRef(new Animated.Value(180)).current;
    const animatedCardHeight = useRef(new Animated.Value(270)).current;
    const animatedCardRightMargin = useRef(new Animated.Value(16)).current;
    const animatedCardTopMargin = useRef(new Animated.Value(50)).current;
    const animatedCardBottomBorderRadius = useRef(new Animated.Value(10)).current;
    const animatedCardBorderRadius = useRef(new Animated.Value(10)).current;
    const animatedImageTopMargin = useRef(new Animated.Value(0)).current;
    const itemDetailTranslateX = useRef(new Animated.Value(-windowWidth)).current;
    const itemTranslateX = useRef(new Animated.Value(0)).current;
    const cartTranslateY = useRef(new Animated.Value(80)).current;

    const calculateTextOpacity = (imageIndex) => {
        return scrollX.interpolate({
            inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
            ],
            outputRange: [0, 1, 0],
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

    const showItemDetail = (id) => {
        setItemId(id)
        setItemDetailVisible(true);
        animateItem();
        animateItemDetail();
    }

    const animateItemDetail = () => {
        Animated.timing(itemDetailTranslateX, {
            toValue: 10,
            duration: 500
        }).start()

        Animated.timing(itemTranslateX, {
            toValue: -200,
            duration: 500
        }).start()

        Animated.timing(cartTranslateY, {
            toValue: 0,
            duration: 500
        }).start()
    }

    const animateItem = () => {

        Animated.timing(animatedCardHeight, {
            toValue: windowHeight / 2.2,
            duration: 500
        }).start()

        Animated.timing(animatedCardWidth, {
            toValue: windowWidth / 1.8,
            duration: 500
        }).start()

        Animated.timing(animatedCardRightMargin, {
            toValue: 0,
            duration: 500
        }).start()

        Animated.timing(animatedCardTopMargin, {
            toValue: 0,
            duration: 500
        }).start()

        Animated.timing(animatedCardBottomBorderRadius, {
            toValue: 20,
            duration: 500
        }).start()

        Animated.timing(animatedCardBorderRadius, {
            toValue: 0,
            duration: 500
        }).start()
        
        Animated.timing(animatedImageTopMargin, {
            toValue: windowHeight / 5,
            duration: 500
        }).start()
    }

    const renderDetailPage = () => {
        return (
            <Animated.View style={[styles.detailView, {
                transform: [
                    { translateX: itemDetailTranslateX }
                ]
            }]}>
                <ItemDetail id={itemId} handleBack={handleBack} />
            </Animated.View>
        )
    }

    const renderDetailInfo = () => {
        return (
            <Animated.View style={{
                position: 'absolute',
                top: windowHeight/2.2 + 10,
                transform: [
                    { translateX: itemDetailTranslateX }
                ]
            }}>
                <Text style={styles.description}>{constants.landingDescriptions.itemDescription}</Text>
            </Animated.View>
        )
    }

    const renderCartFooter = () => {
        return (
            <Animated.View style={{
                position: 'absolute',
                top: windowHeight - 80,
                marginHorizontal: 16,
                transform: [
                    { translateY: cartTranslateY }
                ]
            }}>
                <CartFooter/>
            </Animated.View>
        )
    }

    const handleBack = () => {
        setItemDetailVisible(false);

        Animated.timing(itemTranslateX, {
            toValue: 0,
            duration: 500
        }).start()

        Animated.timing(cartTranslateY, {
            toValue: 80,
            duration: 500
        }).start()

        Animated.timing(itemDetailTranslateX, {
            toValue: -(windowWidth * (itemId+1)),
            duration: (500 * (itemId+1))
        }).start()

        Animated.timing(animatedCardHeight, {
            toValue: 270,
            duration: 500

        }).start()

        Animated.timing(animatedCardWidth, {
            toValue: 180,
            duration: 500

        }).start()

        Animated.timing(animatedCardRightMargin, {
            toValue: 16,
            duration: 500

        }).start()

        Animated.timing(animatedCardTopMargin, {
            toValue: 50,
            duration: 500

        }).start()

        Animated.timing(animatedCardBottomBorderRadius, {
            toValue: 10,
            duration: 500

        }).start()

        Animated.timing(animatedCardBorderRadius, {
            toValue: 10,
            duration: 500

        }).start()
        
        Animated.timing(animatedImageTopMargin, {
            toValue: 0,
            duration: 500

        }).start()

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
                        outputRange: [12, 24, 12],
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

    const animatedStyle = {
        width: animatedCardWidth,
        height: animatedCardHeight
    }

    return (
        <View>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={!itemDetailVisible}
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
                <View style={styles.row}>
                    {appInlineData.playStations.map((item, imageIndex) => {
                        const { name, image } = item;
                        const textOpacity = calculateTextOpacity(imageIndex);
                        const imageLeftMargin = calculateImageLeftMargin(imageIndex);
                        const imageDimensions = calculateImageDimensions(imageIndex);
                        const displayItem = itemDetailVisible && itemId !== imageIndex ? 'none' : 'flex';
                        return (
                            <View key={imageIndex}>
                                <Animated.View
                                    style={[styles.listContainer, {
                                        opacity: textOpacity
                                    }]}
                                >
                                    <View style={styles.listColumnStyle}>
                                        <Animated.Text style={[styles.title, {
                                            opacity: textOpacity,
                                            marginTop: 70,
                                            display: displayItem,
                                            transform: [
                                                { translateX: itemTranslateX }
                                            ]
                                        }]}>{name}</Animated.Text>
                                    </View>
                                    <Animated.View style={{ marginTop: animatedCardTopMargin }}>
                                        <TouchableOpacity onPress={() => showItemDetail(imageIndex)}>
                                            <Animated.View style={[styles.card, animatedStyle, {
                                                marginRight: animatedCardRightMargin,
                                                borderBottomLeftRadius: animatedCardBottomBorderRadius,
                                                borderRadius: animatedCardBorderRadius
                                            }]}>
                                                <Animated.Image resizeMode="contain" source={image} style={[styles.image, {
                                                    marginLeft: imageLeftMargin,
                                                    width: imageDimensions,
                                                    height: imageDimensions,
                                                    marginTop: animatedImageTopMargin
                                                }]} />
                                            </Animated.View>
                                        </TouchableOpacity>
                                    </Animated.View>
                                </Animated.View>
                                {(itemId === imageIndex) && renderDetailPage()}
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
            {renderDetailInfo()}
            {renderCartFooter()}
            {!itemDetailVisible && renderSlideIndicator()}
        </View>

    )
}