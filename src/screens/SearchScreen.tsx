import { StyleSheet, View } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { ProductNavigationProps } from '../navigation/StackNavigator';
import { useSearch } from '../hooks/useSearch';
import Colors from '../themes/Colors';

const SearchScreen = () => {
    const navigation = useNavigation<ProductNavigationProps>();

    const { refetch: refetchSearchProducts } = useSearch();

    const submitSearch = () => {
        refetchSearchProducts();
        navigation.navigate('ProductList')
    }

    return (
        <View style={styles.container}>
            <SearchBar onSubmitEditing={submitSearch} blurOnSubmit={true} />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 24,
        gap: 10
    }
})