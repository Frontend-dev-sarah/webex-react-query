import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from "@react-navigation/stack";

import SearchScreen from '../screens/SearchScreen';
import { StackNavigatorParamList } from './types';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import Colors from '../themes/Colors';
import ProductListScreen from '../screens/ProductListScreen';
import ListStackHeader from '../components/UI/ListStackHeader';
import { Fonts } from '../themes/Fonts';

export type ProductNavigationProps = StackNavigationProp<StackNavigatorParamList>

const Stack = createNativeStackNavigator<StackNavigatorParamList>();




const StacktNavigator = () => {
    const { searchQuery } = useContext(ProductContext);
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name='Search' component={SearchScreen} />
            <Stack.Screen
                options={{
                    header: () => <ListStackHeader headerTitle={searchQuery} />,
                    headerTitle: searchQuery,
                    headerTintColor: Colors.black,
                    headerTitleStyle: {
                        fontFamily: Fonts.Inter,
                        fontWeight: '600',
                    }
                }}
                name='ProductList' component={ProductListScreen} />
        </Stack.Navigator>
    )
}

export default StacktNavigator;
