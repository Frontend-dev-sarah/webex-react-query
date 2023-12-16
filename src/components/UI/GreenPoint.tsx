import { StyleSheet, View } from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';


const GreenPoint = () => {
    return (
        <View style={styles.container} />
    )
}

export default GreenPoint

const styles = StyleSheet.create({
    container: {
        width: 8,
        height: 8,
        backgroundColor: Colors.success,
        borderRadius: 50
    }
})