
const toggleFavorites = (id: number) => {
    console.log('togglefavorite llamado')

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id) // Regresa un nuevo arreglo sin el pokemon con id
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}


//Verificar si un poquemon existe

const existInFavoritesLocal = (id: number): boolean => {

    if (typeof window == 'undefined') return false; // Se esta generando del lado del servidor 'undefined' Regreso un false

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')


    return favorites.includes(id);

}

const pokemons = (  ):number[] => {

    return JSON.parse(localStorage.getItem('favorites')|| '[]')

}



export default {
    existInFavoritesLocal,
    toggleFavorites,
    pokemons
}
