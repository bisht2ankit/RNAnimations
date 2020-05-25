import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import backIcon from '../assets/back.png';
import { styles } from './styles';
import { appInlineData } from '../constants/appInlineData';

export const ItemDetail = (props) => {
    const {id, handleBack} = props;
    if(id < 0) return <View/>
    const name = appInlineData.playStations[id].name;
    return(
        <View>
            <TouchableOpacity onPress={handleBack}>
                <Image source={backIcon} style={styles.backIcn}/>
            </TouchableOpacity>
            <Text style={styles.title}>{name}</Text>
        </View>
    )
}