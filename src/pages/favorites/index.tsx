import React, { useEffect, useState } from 'react'

import { Layout } from '@components/layouts';
import { NoFavorites } from '@components/ui';

import { localFavorites } from 'utils';
import Image from 'next/image';
import { useRouter } from 'next/router';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])


    const router = useRouter()


    const onFavoriteClick = ( id:number ) => {
        router.push(`/pokemon/${id}`)
    }

    return (
        <Layout title='Pagina de Pokemones Favoritos'>
            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (
                        <div
                            className="
                            grid grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-6
                            2xl:grid-cols-12
                            place-items-center
                            gap-y-10
                            mt-8 mx-2"
                        >
                            {
                                favoritePokemons.map(id => (
                                    <div
                                    key={id}
                                    className="rounded-xl w-36 h-36 bg-gradient-to-br p-[1px] from-[#faf618] via-[#2241ee] to-[#d6285c] hover:bg-violet-700">

                                        <li className="   flex flex-col h-full rounded-xl  bg-slate-800 drop-shadow-card hover:bg-gradient-radial  cursor-pointer ">
                                            <div
                                                className="flex flex-col items-center h-full"
                                                onClick={() =>onFavoriteClick(id)}
                                            >
                                                <div className="h-[100px] w-[100px] relative top-3"  >
                                                    <Image
                                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                                        alt='pokemon favorito'
                                                        // layout='fill'
                                                        fill
                                                        style={{ objectFit: 'fill' }}
                                                    // width={100}
                                                    // height={100}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                ))
                            }
                        </div>
                    )
            }

        </Layout>
    )
}

export default FavoritesPage;
