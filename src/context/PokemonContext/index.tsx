import React, {useState, createContext, useEffect} from 'react';
import { getPokemonApi, getPokemonByUrlApi, getPokemonDetailApi } from '../../API/Pokemon';
export type PokemonContextType = {
  state?: {
    pokedex: any;
    favorites: any;
    pokemonDetails: Record<string, any>;
    nextUrl: any;
  };
  actions?: {
    loadPokedex: () => void;
    searchPokemon: (id: number) => void;
  };
};
export const PokemonContext = React.createContext<PokemonContextType>({});

export const PokemonProvider = (props:any) => {
  const {children} = props;
   const [pokedex, setPokedex] = useState<any[]>([]);
   const [pokemonDetails, setPokemonDetails] = useState<Record<string, any >>({});
   const [nextUrl, setNextUrl] = useState<any>(null);
   // esto es para usar cuando cree los pokemones favoritos
   const [favorites, setFavorites] = useState<any>([]);

   /*   console.log('pokemons--->  ', pokemons); */

   useEffect(() => {
     loadPokedex();
   }, []);

   const loadPokedex = async () => {
     try {
       const response = await getPokemonApi(nextUrl);
       setNextUrl(response.next);

       const pokemonsArray = [];
       for await (const pokemon of response.results) {
         const pokemonDetails = await getPokemonByUrlApi(pokemon.url);
         pokemonsArray.push({
           id: pokemonDetails.id,
           name: pokemonDetails.name,
           type: pokemonDetails.types[0].type.name,
           order: pokemonDetails.order,
           image:
             pokemonDetails.sprites.other['official-artwork'].front_default,
         });
       }

       setPokedex([...pokedex, ...pokemonsArray]);
     } catch (error) {
       /*   console.log(error); */
     }
   };
   
   const searchPokemon = async (id: number) => {
      try {
        if(pokemonDetails?.[id]){
          return pokemonDetails[id];
        }
        const response = await getPokemonDetailApi(id);
        setPokemonDetails({...pokemonDetails, [id]: response});
        return response;
      } catch (error) {
        throw error;
      }
    }

  const valueContext = {
    state: {
      pokedex,
      nextUrl,
      favorites,
      pokemonDetails,
    },
    actions: {
      loadPokedex,
      searchPokemon,
    },
  };

  return (
    <PokemonContext.Provider value={valueContext}>{children}</PokemonContext.Provider>
  );
};
