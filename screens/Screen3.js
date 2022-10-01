import React from "react"
import {Button, ScrollView, Text, View} from "react-native"
import {Card} from "react-native-elements";
import MovieDetailComponent from "../components/MovieDetailComponent";

const Screen3 = ({route, navigation}) => {
    const {movie} = route.params
    return (
        <ScrollView>
            <MovieDetailComponent movie={movie}></MovieDetailComponent>
        </ScrollView>
    )
}


export default Screen3;