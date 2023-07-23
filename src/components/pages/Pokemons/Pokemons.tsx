import { useQuery } from '@apollo/client';
import { GET_LOCATION } from './GET_DATA';
import PokemonsNumber from './PokemonsNumber';
import React, { useEffect } from 'react';


function Pokemons() {
    // const [pokemons, setPokemons] = useState(String)

    const {data, loading} = useQuery(GET_LOCATION);
    // const {pokemons: {results}} = data;

    // const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    //     pokemons(limit: $limit, offset: $offset) {
    //       count
    //       next
    //       previous
    //       status
    //       message
    //       results {
    //         url
    //         name
    //         image
    //       }
    //     }
    // }`;
      
    // const gqlVariables = {
    //     limit: 2,
    //     offset: 1,
    // };

    // useEffect(() => {
    //     fetch('https://graphql-pokeapi.graphcdn.app/', {
    //         credentials: 'omit',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //           query: gqlQuery,
    //           variables: gqlVariables,
    //         }),
    //         method: 'POST',
    //       })
    //         .then((res) => res.json())
    //         .then((res) => {setPokemons(res.data.pokemons.results[0].image)});
    // })

    useEffect(()=> {
        console.log('render');
    },[])


    // const url = pokemons.previous
    interface Pokemon {
        name: string,
        image: string
    }

    if (loading) {
        return (
            <h3>Loading</h3>
        )
    }

      
    return (
        <div style={{maxWidth: '800px', margin:'0 auto', textAlign:'center'}}>
            <h2>{data.pokemons.count}</h2>
            <div style= {{display:'flex', flexWrap:'wrap'}}>
                {data.pokemons.results.map((el: Pokemon) => 
                    <div key={el.image}>
                        <img src={el.image} alt={el.name} />
                        <h3>{el.name}</h3>
                    </div>

                )
                }
            </div>
            <PokemonsNumber />
        </div>
    );
}

export default Pokemons;