import { NavigationContainer } from "@react-navigation/native";
import StacktNavigator from "./StackNavigator";

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <StacktNavigator />
        </NavigationContainer>
    )
}

export default RootNavigator;