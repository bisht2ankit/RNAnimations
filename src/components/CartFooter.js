import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Animated, Image } from 'react-native';
import globalStyles from '../constants/globalStyles';
import { styles } from './styles';
import { constants } from '../constants/strings';
import { AlertModal } from './AlertModal';
import addIcon from '../assets/add.png';
import minusIcon from '../assets/minus.png';

export const CartFooter = () => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(70);
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const animateQuantityYPos = useRef(new Animated.Value(0)).current;
    const quantityOpacity = useRef(new Animated.Value(1)).current;

    const increaseQuantity = () => {
        Animated.timing(animateQuantityYPos, {
            toValue: -15,
            duration: 200,
            useNativeDriver: true
        }).start()

        Animated.timing(quantityOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start()

        setTimeout(() => {
            Animated.timing(animateQuantityYPos, {
                toValue: 30,
                duration: 200,
                useNativeDriver: true
            }).start()
        }, 100);

        setTimeout(() => {
            setQuantity(quantity + 1);
            setPrice(price + 70);

            Animated.timing(animateQuantityYPos, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start()

            Animated.timing(quantityOpacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start()

        }, 200);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            Animated.timing(animateQuantityYPos, {
                toValue: 15,
                duration: 200,
                useNativeDriver: true
            }).start()

            Animated.timing(quantityOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start()

            setTimeout(() => {
                Animated.timing(animateQuantityYPos, {
                    toValue: -30,
                    duration: 200,
                    useNativeDriver: true
                }).start()
            }, 100);

            setTimeout(() => {
                setQuantity(quantity - 1)
                setPrice(price - 70);
                Animated.timing(animateQuantityYPos, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                }).start()

                Animated.timing(quantityOpacity, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true
                }).start()

            }, 200);
        }
    }

    return (
        <View style={[globalStyles.row, { width: '100%' }]}>
            <View style={[styles.addContainer, globalStyles.shadow]}>
                <TouchableOpacity onPress={decreaseQuantity} style={styles.addBtn}>
                    <Image source={minusIcon} style={styles.addIcon}/>
                </TouchableOpacity>
                <View>
                    <Animated.Text style={[styles.subtitle, {
                        transform: [
                            { translateY: animateQuantityYPos },
                        ],
                        fontWeight: 'bold',
                        opacity: quantityOpacity
                    }]}>{quantity}</Animated.Text>
                </View>
                <TouchableOpacity onPress={increaseQuantity} style={styles.addBtn}>
                    <Image source={addIcon} style={styles.addIcon}/>
                </TouchableOpacity>
            </View>
            <View style={[styles.priceContainer, globalStyles.shadow]}>
                <Animated.Text style={[styles.subtitle, {
                    transform: [
                        { translateY: animateQuantityYPos },
                    ],
                    fontWeight: 'bold',
                    opacity: quantityOpacity,
                    width: 50
                }]}>$ {price}</Animated.Text>
                <View style={styles.verticalLine}/>
                <TouchableOpacity onPress={() => setIsCartModalVisible(true)}>
                    <Text style={[styles.subtitle,{fontWeight: 'bold'}]}>{constants.buttonTitle.addToCart}</Text>
                </TouchableOpacity>
            </View>

            <AlertModal visible={isCartModalVisible} closeModal={() => setIsCartModalVisible(false)} quantity={quantity}/>
        </View>
    )
}