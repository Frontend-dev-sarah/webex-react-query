import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import ProductItem, { ProductProps } from '../components/ProductItem';
import Colors from '../themes/Colors';
import { useSearch } from '../hooks/useSearch';

const ProductListScreen = () => {

    const { data: searchedProducts, isError, isFetching, hasNextPage, fetchNextPage, isLoading } = useSearch();

    const productsData = searchedProducts?.pages?.map((page: any) => page.results).flat()?.filter((product: any) => product !== null)

    const keyExtractor = useCallback((item: any) => item?.id.toString(), [])

    const ITEM_HEIGHT = 136;

    const getItemLayout = useCallback((_data: any, index: number) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index
    }), [])

    const renderItem = useCallback(({ item }: ProductProps) => (
        <ProductItem item={item} key={item?.id.toString() + Math.random() * 10} />
    ), []);

    const renderMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    const renderFooter = useCallback(() => {
        return (
            <View style={{ paddingVertical: 20 }}>
                {isFetching && <Text style={styles.footer}>Fetching more items...</Text>}
                {!isFetching && !hasNextPage && <Text style={styles.footer}>No more items</Text>}
            </View>
        )
    }, [isFetching, hasNextPage]);

    if (isError) {
        return (
            <Text style={styles.noData}>
                Error fetching data!
            </Text>
        );
    }

    if (isLoading) {
        return (
            <Text style={styles.noData}>
                Loading...
            </Text>
        );
    }

    if (productsData?.length === 0) {
        return (
            <Text style={styles.noData}>
                No data found!
            </Text>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={productsData}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                getItemLayout={getItemLayout}
                onEndReached={renderMore}
                onEndReachedThreshold={0.9}
                ListFooterComponent={renderFooter}
            />
        </View>
    )
}

export default ProductListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    noData: {
        fontSize: 16,
        marginTop: 100,
        textAlign: 'center'
    },
    footer: { textAlign: 'center', marginTop: 10 }

})