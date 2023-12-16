import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';
import { Fonts } from '../../themes/Fonts';

type TitleTextType = {
    title: string;
    style?: StyleProp<TextStyle>
}

const TitleText = ({ title, style }: TitleTextType) => {
    return (
        <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.container, style]}>
            {title}
        </Text>
    )
}

export default TitleText

const styles = StyleSheet.create({
    container: {
        fontSize: 12,
        fontWeight: '600',
        fontFamily: Fonts.Inter,
        color: Colors.textDarkGray,
        lineHeight: 12,
        maxWidth: 159
    }
})