import { Image, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { ProductItem as ProductItemProps } from '../types/product';
import { usePrice, useStock } from '../hooks/useProduct';
import { useTotalStock } from '../hooks/useTotalStock';
import TitleText from './Text/TitleText';
import BrandText from './Text/BrandText';
import CodeText from './Text/CodeText';
import Colors from '../themes/Colors';
import StockText from './Text/StockText';
import PriceText from './Text/PriceText';
import GreenPoint from './UI/GreenPoint';
import { AppImages } from '../themes/AppImages';

export type ProductProps = {
    item: ProductItemProps;
}

const ProductItem = memo(({ item }: ProductProps) => {

    const { data: productPrice } = usePrice(item?.id)
    const { data: productStock } = useStock(item?.id)

    const calStock = useTotalStock(productStock?.stock)

    return (
        <View style={styles.container} key={item?.id.toString()}>
            <View style={styles.imageContainer}>
                {/* sometimes the image_url exists, but the image is just a white background, for example: `https://egold.ca2e.pro/Customize/Images/Product/KAUA181947_0.jpg`
                so no placeholder replace it */}
                <Image
                    style={item?.image_url ? styles.urlImage : styles.image}
                    source={{ uri: item?.image_url } || AppImages.placeholder}
                />
            </View>
            <View style={styles.rightContainer}>
                <TitleText title={item?.name || 'No Name'} />
                <BrandText brand={item?.brand?.name || 'NO BRAND'} />
                <View style={styles.codeContainer}>
                    <CodeText style={[{ color: Colors.textPrimary }]} code='Code article : ' />
                    <CodeText style={{ color: Colors.textSecondary }} code={item?.code_product || 'NO CODE'} />
                </View>
                <View style={styles.stockContainer}>
                    <GreenPoint />
                    <StockText stock={`${calStock || 0} en stock`} />
                </View>
                <PriceText price={`${productPrice?.price_ht} € HT / Unité`} />
            </View>
        </View>
    )
})

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingvertical: 12,
        backgroundColor: Colors.surfaceGray,
        flexDirection: 'row',
        alignItems: 'center',
        height: 136,
        borderRadius: 8,
        gap: 24
    },
    imageContainer: {
        height: 112,
        width: 135,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    urlImage: {
        height: 112,
        width: 135,
        resizeMode: 'contain',
    },
    rightContainer: {
        gap: 4
    },
    stockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    codeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    }
})