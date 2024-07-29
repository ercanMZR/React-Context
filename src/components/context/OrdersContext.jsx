import { createContext,useState } from "react"

export const FavoritesContext = createContext(null)

export const FavoritesProvider=({children})=>{

    const [favorites,Setfavorites]=useState([])

    const favOperation =(orders)=>{
        let favControl =favorites.find(f=>f.id === orders.id)

        if(favControl){
            let filteredFavorites = favorites.filter(f=>f.id !== orders.id)
            Setfavorites(filteredFavorites)
        }

        else(
            Setfavorites(...favorites,orders)
        )
    }

    const clearFavorites =()=>{
        Setfavorites([])
    }

    return <FavoritesContext.Provider value={{favOperation,clearFavorites,favorites}}></FavoritesContext.Provider>
}
