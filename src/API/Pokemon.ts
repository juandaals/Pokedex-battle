import {API_HOST} from '../utils/consntants';

export async function getPokemonApi(endpointUrl: any) {
  console.log(endpointUrl);
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl ? endpointUrl : url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonByUrlApi(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailApi(id: number) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
