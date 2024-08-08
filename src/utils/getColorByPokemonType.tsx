import {POKEMON_TYPE_COLORS} from './consntants';

const getColorByPokemonType = (type: string) =>
  POKEMON_TYPE_COLORS[type as keyof typeof POKEMON_TYPE_COLORS];

export default getColorByPokemonType;
