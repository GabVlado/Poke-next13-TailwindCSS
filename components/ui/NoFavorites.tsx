import React from 'react'
import Image from 'next/image'

export const NoFavorites = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen"
        >
            <h1 className='text-2xl text-white'>
                No hay Favoritos
            </h1>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
                alt="Grimer"
                width={250}
                height={250}
                style={{
                    opacity: 0.2
                }}
            />
        </div>
    )
}
