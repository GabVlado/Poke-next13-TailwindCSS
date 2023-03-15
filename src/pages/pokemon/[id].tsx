import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import confetti from 'canvas-confetti';

import pokeApi from "api/pokeApi";

import { Layout } from "@components/layouts"

import { Pokemon } from "interfaces";
import { getPokemonInfo, localFavorites } from "utils";




interface Props {
    pokemon: Pokemon;

}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    //console.log({pokemon})

    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavoritesLocal(pokemon.id))


    const onToggleFavorite = (  ) => {
        localFavorites.toggleFavorites(pokemon.id)
        setIsInFavorites(!isInFavorites)

        if( isInFavorites) return;
        confetti({
            particleCount: 100,
            zIndex: 999,
            angle: -100,
            spread: 160,
            origin: {
                x: 0.8,
                y:0.1
             }
          });

    }

   const buttonClass = isInFavorites ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl' : 'bg-slate-800'




    return (
        <Layout title={pokemon.name}>

            <div className=" flex flex-column flex-wrap md:max-2xl:flex-nowrap justify-center  items-center">
                <div className="
                    rounded-xl w-48 h-48 mt-7 md:max-2xl:ml-7
                    bg-gradient-to-br p-[1px] from-[#faf618] via-[#2241ee] to-[#d6285c] hover:bg-violet-700">
                    <div className="
                        flex
                        justify-center
                        h-full rounded-xl
                        bg-slate-800 drop-shadow-card hover:bg-gradient-radial
                    ">
                        <div className="w-[100px] h-[100px] relative  ">

                            <Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                fill
                                style={{objectFit: 'contain', top:'40%'}}


                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-xl  h-full mt-7 ml-7 mr-7 w-full
                    bg-gradient-to-br p-[1px] from-[#faf618] via-[#2241ee] to-[#d6285c] hover:bg-violet-700
                ">
                    <div className="
                        px-2
                        justify-start
                        rounded-xl
                        bg-slate-800 drop-shadow-card hover:bg-gradient-radial
                    ">
                        <div className="
                            flex flex-col gap-y-5
                            md:max-2xl: w-full items-center


                          ">
                            <div className="flex  flex-col gap-3 items-center
                                mt-2
                                md:max-2xl:flex-row
                                md:max-2xl:w-full
                                md:max-2xl: px-10
                                md:max-2xl: justify-between
                            ">
                                <h1 className="text-white capitalize font-bold text-2xl justify-self-center md:max-2xl:font-extrabold md:max-2xl:text-4xl ">{pokemon.name}</h1>
                                <button
                                    type="button"
                                    onClick={onToggleFavorite}
                                    className={`text-white h-12  justify-center
                                    md:max-2xl:col-start-3
                                    ${buttonClass}
                                    font-medium rounded-lg text-xs px-5 py-2 text-center w-40
                                    border-2 border-indigo-500/100
                                    `}
                                >
                                    { isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
                                </button>

                            </div>
                            <h2 className="text-white text-2xl">Sprites:</h2>
                            <div className="row-start-5 col-span-2 ">
                                <div className="flex  flex-col items-center
                                    md:max-2xl:flex-row
                                ">
                                   <Image
                                        src={pokemon.sprites.front_default}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <Image
                                        src={pokemon.sprites.back_default}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <Image
                                        src={pokemon.sprites.front_shiny}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                   <Image
                                        src={pokemon.sprites.back_shiny}
                                        alt={pokemon.name}
                                        width={100}
                                        height={100}
                                        priority
                                   />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {


    const pokemons151: string[] = [...Array(151)].map((value, index) => `${index + 1}`)
    // console.log({ pokemons151 });


    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } =  params as { id: string };

    const pokemon = await getPokemonInfo(id)

    if(!pokemon) {
        return {
            redirect:{
                destination: '/',
                permanent: false
            }
        }

    }


    return {
        props: {
            pokemon
        },

    }
}





export default PokemonPage;
