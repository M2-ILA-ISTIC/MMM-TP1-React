import {NavigationContainer} from '@react-navigation/native'
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen1"
                    component={Screen1}
                    options={{title: 'Screen1'}} />
                <Stack.Screen name="Screen2"
                              component={Screen2}
                              options={{title: 'Screen2'}}/>
                <Stack.Screen name="Screen3"
                              component={Screen3}
                              options={{title: 'Screen3'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
