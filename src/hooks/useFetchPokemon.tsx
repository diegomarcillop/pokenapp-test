/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import api from '../common/api/api';
import {getTotalStats} from '../common/utils/get-total-starts';
import {getColorType} from '../common/utils/get-type-color';

interface Character {
  id: number;
  image: string;
  name: string;
  types: any;
  typePrimary: any;
  background?: string;
  details: any;
  url?: string;
  species: any;
  totalStats: number;
  generation: any;
}

const useFetchPokemon = (url: any) => {
  const [data, setData] = useState<Character>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getPokemonForId();
  }, []);

  const getPokemonForId = async () => {
    setLoading(true);
    const response: any = await api.get('', undefined, url);
    const values = response.payload;
    const types: any = Object.values(values.types);
    const species = await getSpeciesForId(values.id);
    const generation = await getGeneration(species.generation.url);

    setData({
      id: values.id,
      name: values.name,
      types,
      image: values?.sprites?.other?.dream_world?.front_default,
      typePrimary: types[0].type.name,
      details: values,
      background: getColorType(types[0].type.name),
      totalStats: getTotalStats(values?.stats),
      species,
      url,
      generation,
    });
    setLoading(false);
  };

  const getSpeciesForId = async (id: number) => {
    const response: any = await api.get(`/pokemon-species/${id}`);
    return response.payload;
  };

  const getGeneration = async (newUrl: string) => {
    const response: any = await await api.get('', undefined, newUrl);
    return response.payload;
  };

  return {data, loading};
};

export default useFetchPokemon;
