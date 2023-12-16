import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import { Fonts } from '../../themes/Fonts';

type CodeTextType = {
    code: string;
    style?: StyleProp<TextStyle>
}

const CodeText = ({ code, style }: CodeTextType) => {
    return (
        <Text numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.container, style]}>
            {code}
        </Text>
    )
}

export default CodeText

const styles = StyleSheet.create({
    container: {
        fontSize: 11,
        fontWeight: '400',
        fontFamily: Fonts.Inter,
        lineHeight: 13,
        maxWidth: 80
    }
})