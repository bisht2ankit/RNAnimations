import React from 'react';
import {View, Text, Image} from 'react-native';
import globalStyles from '../constants/globalStyles';
import PropTypes from 'prop-types';
import { styles } from './styles';
import bagIcon from '../assets/cart.png';

export const Header = (props) => {
    const {title} = props;
    return (
        <View style={globalStyles.spaceBetweenRow}>
            <Text style={styles.headerTxt}>{title}</Text>
            <Image source={bagIcon} style={styles.bag}/>
        </View>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}