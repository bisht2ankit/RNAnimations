import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { constants } from '../constants/strings';
import { styles } from './styles';

export const AlertModal = (props) => {
    const { visible, closeModal, quantity } = props;
    return (
        <Modal animationType="fade"
            visible={visible}
            transparent={true}
        >
            <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPress={closeModal}>
                <View style={styles.childContainer}>
                    <Text style={styles.centerText}>{quantity} {constants.cart.addedSuccessfully}</Text>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}