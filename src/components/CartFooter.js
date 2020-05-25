import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import globalStyles from '../constants/globalStyles';
import { styles } from './styles';

export const CartFooter = () => {

    const [quantity, setQuantity] = useState(1);
    const animateQuantityYPos = useRef(new Animated.Value(0)).current;
    const quantityOpacity = useRef(new Animated.Value(1)).current;

    const increaseQuantity = () => {
        Animated.timing(animateQuantityYPos, {
            toValue: -15,
            duration: 200
        }).start()

        Animated.timing(quantityOpacity, {
            toValue: 0,
            duration: 200
        }).start()

        setTimeout(() => {
            Animated.timing(animateQuantityYPos, {
                toValue: 30,
                duration: 200
            }).start()
        }, 100);

        setTimeout(() => {
            setQuantity(quantity + 1)
            Animated.timing(animateQuantityYPos, {
                toValue: 0,
                duration: 200
            }).start()

            Animated.timing(quantityOpacity, {
                toValue: 1,
                duration: 200
            }).start()

        }, 200);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            Animated.timing(animateQuantityYPos, {
                toValue: 15,
                duration: 200
            }).start()

            Animated.timing(quantityOpacity, {
                toValue: 0,
                duration: 200
            }).start()

            setTimeout(() => {
                Animated.timing(animateQuantityYPos, {
                    toValue: -30,
                    duration: 200
                }).start()
            }, 100);

            setTimeout(() => {
                setQuantity(quantity - 1)

                Animated.timing(animateQuantityYPos, {
                    toValue: 0,
                    duration: 200
                }).start()

                Animated.timing(quantityOpacity, {
                    toValue: 1,
                    duration: 200
                }).start()

            }, 200);
        }
    }

    return (
        <View style={[globalStyles.row, { width: '100%' }]}>
            <View style={styles.addContainer}>
                <TouchableOpacity onPress={decreaseQuantity}>
                    <Text style={styles.subtitle}>-</Text>
                </TouchableOpacity>
                <View>
                    <Animated.Text style={[styles.subtitle, {
                        transform: [
                            { translateY: animateQuantityYPos },
                        ],
                        opacity: quantityOpacity
                    }]}>{quantity}</Animated.Text>
                </View>
                <TouchableOpacity onPress={increaseQuantity}>
                    <Text style={styles.subtitle}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.priceContainer}>

            </View>
        </View>
    )
}