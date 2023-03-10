import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {



    return (
        <div className="flex  w-full flex-row items-center  justify-between  py-0 px-5 dark: bg-neutral-700">

            <div className="flex flex-row items-center">

                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="Icono de la App"
                    width={60}
                    height={60}
                />

                    <Link
                        href={'/'}
                        className="flex flex-row cursor-pointer"

                    >

                        <h2 className="text-white text-lg font-semibold">P</h2>
                        <h3 className="text-white text-lg font-semibold">okémon</h3>
                    </Link>

            </div>
            <div>
                <Link
                    href={'/favorites'}
                >
                    <p
                        className="text-white text-lg font-normal"

                    >
                            Favoritos
                    </p>
                </Link>
            </div>
        </div>
    )
}
