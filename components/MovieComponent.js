import React from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Card } from 'react-native-elements'

const MovieComponent = (props) => {
    return(
        <TouchableOpacity onPress={() => props.nav.navigate('Screen3', { movie: props.movie, })}>
            <Card >
                <Text style={styles.title}>Title: </Text>
                <Text style={styles.details}>{props.movie.Title}</Text>
                <Text style={styles.title}>Year: </Text>
                <Text style={styles.details}>{props.movie.Year}</Text>
                <Text style={styles.title}>Genre: </Text>
                <Text style={styles.details}>{props.movie.Genre}</Text>
                <Text style={styles.title}>Director: </Text>
                <Text style={styles.details}>{props.movie.Director}</Text>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    title: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 5
    },
    details: {
        fontSize: 15
    }
})

export default MovieComponent