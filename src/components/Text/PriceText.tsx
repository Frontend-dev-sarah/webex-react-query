import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import { Fonts } from '../../themes/Fonts';

type PriceTextType = {
    price: string;
    style?: StyleProp<TextStyle>
}

const PriceText = ({ price, style }: PriceTextType) => {
    return (
        <Text
            style={[styles.container, style]}>
            {price}
        </Text>
    )
}

export default PriceText

const styles = StyleSheet.create({
    container: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: Fonts.Inter,
        color: Colors.textPrimary,
        lineHeight: 20
    }
})