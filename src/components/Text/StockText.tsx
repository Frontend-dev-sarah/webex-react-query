import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import { Fonts } from '../../themes/Fonts';

type StockTextType = {
    stock: string;
    style?: StyleProp<TextStyle>
}
const StockText = ({ stock, style }: StockTextType) => {
    return (
        <Text
            style={[styles.container, style]}>
            {stock}
        </Text>
    )
}

export default StockText

const styles = StyleSheet.create({
    container: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: Fonts.Inter,
        color: Colors.textSecondary,
        lineHeight: 18
    }
})