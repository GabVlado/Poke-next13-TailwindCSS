import { NextPage } from "next"
import { GetStaticProps } from 'next'
import { Layout } from "@components/layouts";
import pokeApi from "api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "interfaces";
import { PokemonCard } from "@components/pokemon";


interface Props {
	pokemons: SmallPokemon[]
}



const HomePage: NextPage<Props> = ({ pokemons }) => {

	//console.log(pokemons);

	//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/id.svg

	return (
		<Layout title="Listado de Pokemones">

			<ul className="
				grid grid-cols-2
				md:grid-cols-3
				lg:grid-cols-6
				2xl:grid-cols-12
				place-items-center
				gap-y-10
				mt-8 mx-2  ">
				{
					pokemons.map(( pokemon) => (
						<PokemonCard pokemon={pokemon}  key={pokemon.id} />

					))
				}
			</ul>
		</Layout>
	)
}


export const getStaticProps: GetStaticProps = async (ctx) => {

	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

	const { results } = data
	//console.log(results);



	const pokemons: SmallPokemon[] = results.map((pokemon, i) => ({
		...pokemon,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
	}))


	return {
		props: {
			pokemons
		}
	}
}

export default HomePage;
