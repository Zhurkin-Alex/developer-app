import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATION } from './GET_DATA';

function PokemonsNumber() {
    const {data, loading} = useQuery(GET_LOCATION);

    if (loading) {
        return (
            <h3>Loading</h3>
        )
    }

    const length = data.pokemons.results.length;

    return (
        <h2> Number Pokemons {length}</h2>
    );
}

export default PokemonsNumber;