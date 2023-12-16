import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppImages } from '../../themes/AppImages';
import Colors from '../../themes/Colors';
import { shadowStyle } from '../SearchBar';
import { Fonts } from '../../themes/Fonts';
import { useNavigation } from '@react-navigation/native';
import { ProductNavigationProps } from '../../navigation/StackNavigator';

type ListStackHeaderType = {
    headerTitle: string;
    onPress?: () => void;
}
const ListStackHeader = ({ headerTitle }: ListStackHeaderType) => {
    const navigation = useNavigation<ProductNavigationProps>();

    const navigateBack = () => {
        navigation.goBack();
    }

    return (
        <TouchableOpacity style={[styles.container, shadowStyle]} onPress={navigateBack}>
            <Image source={AppImages.back}
                style={styles.back} />
            <Text style={styles.headerTitle}>{headerTitle}</Text>
        </TouchableOpacity>
    );
};

export default ListStackHeader

const styles = StyleSheet.create({
    container: {
        gap: 10,
        borderBottomColor: Colors.borderGray,
        borderBottomWidth: 1,
        shadowColor: Colors.borderGray,
        height: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.textPrimary,
        fontFamily: Fonts.Inter,
        textAlign: 'center',
        flex: 1,
        lineHeight: 16.94,
    },
    back: {
        height: 16,
        width: 8,
        position: 'absolute',
        left: 20,
        tintColor: Colors.textPrimary
    }
})