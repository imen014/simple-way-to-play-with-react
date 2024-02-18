import React from "react";

function ListePlantes({ liste_place, liste_restaurant , liste_recette }){
    let plantes = ["plante1", "plante2", "plante3", "plante4", "plante5", "plante6", "plante7", "plante8"];
    let liste2 = ["plante1", "plante2", "plante3", "plante4", "plante5", "plante6", "plante7", "plante8"];
    let coffes = ['nescafe','express','créme','turkey','3arbi']
    let games = ['mario','pac men', 'rally', 'ludo', 'pokemon']
    let pains = ['tabouna','mlewi','mbases','baguette']
    let movies = [
        {
            "titre":"spider men",
            "createur":"abd el aziz",
            "data_creation":"17/02/2024"
        },
        {
            "titre":"bat man",
            "createur":"ahmed sakka",
            "data_creation":"17/02/2023"
        },
        {
            "titre":"omar wa salma",
            "createur":"mohamed nabil",
            "data_creation":"22/05/2011"
        },
    ]
    return (
        <div>
             <ul>
        {plantes.map((plante, index) => (
                <li  key={index}>{plante}</li>
        
            ))}

        </ul>
        <ul>
            {liste2.map((elem,index) => (
                <li key={index}> {elem} </li>
            ))}
        </ul>
        <ul>
            {plantes.map((plante,index2) => (
                <li key={index2}> {plante} </li>
            ))}
        </ul>
        <ul>
            {coffes.map((coffee,index_coffee) => (
                <li key={index_coffee}>  {coffee} </li>
            ))}
        </ul>
        <ul>
            {games.map((game,index_game) => (

                <li key={index_game}> 
                 <i>game {index_game} : {game} </i>
                
                 </li>
            ))}
        </ul>
        <ul>
            {pains.map((pain, index_pain) => (
                <li key={index_pain}> {pain}  </li>
            ))}
        </ul>
        <ul>
            {movies.map((movie,index_movie) => (
                <li key={index_movie}> <strong>Titre:</strong> {movie.titre} -
                <strong>Créateur:</strong>{movie.createur} - 
                <strong>Date Création:</strong>{movie.data_creation}
                
                 </li>
            ))}
        </ul>
        <ul>
            {liste_place.map((place,place_index) => (
                <li key={place_index}> {place}  </li>
            ))}
        </ul>
        <ul>
            {liste_restaurant.map((restaurant, index_restaurant) => (
                <li key={index_restaurant}> {restaurant}  </li>
            ))}
        </ul>
        <ul>
            {liste_recette.map((rec, index_rec) => (
                <li key={index_rec}> {rec}  </li>
            ))}

        </ul>
        </div>


    )


}


export default ListePlantes;