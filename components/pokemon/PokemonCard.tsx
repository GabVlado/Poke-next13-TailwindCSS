import { FC, PropsWithChildren } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { SmallPokemon } from "interfaces";

interface Props extends PropsWithChildren {
    pokemon: SmallPokemon

}


export const PokemonCard: FC<Props> = ({ children, pokemon }) => {

    const router = useRouter();

    const onClick = (  ) => {
        router.push(`/name/${pokemon.name}`);

    }


    const {id, name, img} = pokemon;

    return (
        <div className="rounded-xl w-36 h-36 bg-gradient-to-br p-[1px] from-[#faf618] via-[#2241ee] to-[#d6285c] hover:bg-violet-700">

                <li className="   flex flex-col h-full rounded-xl  bg-slate-800 drop-shadow-card hover:bg-gradient-radial  cursor-pointer ">
                    <div
                        className="flex flex-col items-center h-full"
                        onClick={onClick}
                    >
                        <div className="h-[100px] w-[100px] relative"  >
                            <Image
                                src={img}
                                alt={name}
                                // layout='fill'
                                fill
                                style={{objectFit: 'fill'}}
                                // width={100}
                                // height={100}
                            />
                        </div>
                        <div className="flex flex-row justify-around items-center w-full  ">
                            <p className="text-white capitalize">{name}</p>
                            <p className="text-white">#{id}</p>
                        </div>
                    </div>
                </li>
        </div>



    )
}
