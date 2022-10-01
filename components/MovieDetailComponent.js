import React from 'react'
import {Card} from "react-native-elements";
import {StyleSheet, ScrollView, Text, SafeAreaView} from "react-native";

const MovieDetailComponent = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Text style={styles.title}>Title: </Text>
                <Text style={styles.details}>{props.movie.Title}</Text>
                <Text style={styles.title}>Year: </Text>
                <Text style={styles.details}>{props.movie.Year}</Text>
                <Text style={styles.title}>Genre: </Text>
                <Text style={styles.details}>{props.movie.Genre}</Text>
                <Text style={styles.title}>Director: </Text>
                <Text style={styles.details}>{props.movie.Director}</Text>
                <Text style={styles.title}>Poster: </Text>
                <Text style={styles.details}>Nous avons afficher le liens du poster au lieu de l'image car aucuns des liens ne fonctionne: {props.movie.Poster}</Text>
                <Text style={styles.title}>Principal actors: </Text>
                <Text style={styles.details}>{props.movie.Actors}</Text>
                <Text style={styles.title}>Metascore: </Text>
                <Text style={styles.details}>{props.movie.MetaScore}</Text>
                <Text style={styles.title}>imdbRating: </Text>
                <Text style={styles.details}>{props.movie.imdbRating}</Text>
                <Text style={styles.title}>imdbVotes: </Text>
                <Text style={styles.details}>{props.movie.imdbVotes}</Text>
                <Text></Text>
            </ScrollView>
        </SafeAreaView>
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

export default MovieDetailComponent