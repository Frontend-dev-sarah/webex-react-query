import { Image, Platform, StyleSheet, TextInput, View } from 'react-native';
import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { AppImages } from '../themes/AppImages';
import Colors from '../themes/Colors';
import { Fonts } from '../themes/Fonts';

type SearchBarType = {
    onSubmitEditing: () => void;
    blurOnSubmit: boolean;
}

const SearchBar = ({ onSubmitEditing, blurOnSubmit }: SearchBarType) => {
    const { searchQuery, onChangeSearch } = useContext(ProductContext);

    return (
        <View style={[styles.container, shadowStyle]}>
            <Image
                style={{ height: 15, width: 15, margin: 2.5 }}
                source={AppImages.search} />
            <TextInput
                style={styles.searchInput}
                placeholderTextColor={Colors.textSecondary}
                placeholder='Que cherchez-vous ?'
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={onSubmitEditing}
                returnKeyType="search"
                blurOnSubmit={blurOnSubmit}
            />
        </View>
    )
}

export default SearchBar

export const shadowStyle = {
    ...Platform.select({
        ios: {
            shadowOffset: { width: 0, height: -4 },
            shadowRadius: 20,
            shadowColor: 'rgba(0, 0, 0, 0.15)', // 15% opacity black
        },
        android: {
            elevation: 8, // Android uses elevation for shadows
        },
    }),
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomColor: Colors.borderGray,
        borderBottomWidth: 1,
        shadowColor: Colors.borderGray,
        height: 40,
        paddingHorizontal: 10,
    },
    searchInput: {
        fontFamily: Fonts.Inter,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
    }
})