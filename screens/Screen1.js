import React from "react";
import {Button, View} from "react-native";

const Screen1 = ({ navigation }) => {
    return (
        <View>
            <Button title="Screen2"
                    onPress={() => navigation.navigate('Screen2')}>
            </Button>
        </View>
    )
}

export default Screen1;