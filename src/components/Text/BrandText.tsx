import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import { Fonts } from '../../themes/Fonts';

type BrandTextType = {
    brand: string;
    style?: StyleProp<TextStyle>
}
const BrandText = ({ brand, style }: BrandTextType) => {
    return (
        <Text style={[styles.container, style]}>
            {brand}
        </Text>
    )
}

export default BrandText

const styles = StyleSheet.create({
    container: {
        fontSize: 11,
        fontWeight: '400',
        fontFamily: Fonts.Inter,
        color: Colors.textPrimary,
        textTransform: 'uppercase',
        lineHeight: 13
    }
})