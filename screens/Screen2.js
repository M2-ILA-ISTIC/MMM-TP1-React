import React, {useEffect, useState} from "react"
import {FlatList, SafeAreaView, View} from "react-native"
import moviesJson from '../data/film.json'
import MovieComponent from '../components/MovieComponent';
import {SearchBar} from "react-native-elements";

const Screen2 = ({ navigation }) => {

    const [isLoading, setLoading] = useState(false)
    const [movies, setMovies] = useState(moviesJson)
    const [searchValue, setSearchValue] = useState("")

    let searchFilter = (searchText) => {
        const updatedData = moviesJson.filter((movie) => {
            const title = movie.Title.toUpperCase()
            const director = movie.Director.toUpperCase()
            const actor = movie.Actors.toUpperCase()
            const searchData = searchText.toUpperCase()
            return title.indexOf(searchData) > -1 || director.indexOf(searchData) > -1 || actor.indexOf(searchData) > -1
        })
        setMovies(updatedData)
        setSearchValue(searchText)
    }
    useEffect(() => {
        setLoading(true)
    })

    return (
        <SafeAreaView>
            <SearchBar placeholder="Type Here..."
                       lightTheme
                       round
                       onChangeText={(text) => searchFilter(text)}
                       value={searchValue}/>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieComponent movie={item} nav={navigation}/> }
            />
        </SafeAreaView>
    )
}

export default Screen2