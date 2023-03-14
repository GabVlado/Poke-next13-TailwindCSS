import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar } from "@components/ui";
import { useRouter } from "next/router";


interface Props extends PropsWithChildren {
    title: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin


export const Layout: FC<Props> = ({ children, title }) => {

    console.log( origin);


    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Gabriel Vlad" />
                <meta name="description" content={`Información sobre el pokemon  ${title}`} />
                <meta name="keywords" content={` ${title}, pokemon, pokedex `} />

                <meta property="og:title" content={`Informacion sobre  ${title}`}/>
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/pokemon.png`} />
                <meta property="og:image:alt" content="Pokemon List 151" />
                <meta property="og:url" content={`${origin}`} />
                <meta property="og:type" content="website" />
            </Head>
            <Navbar />

            <main className="">
                {children}
            </main>

        </>
    )
}
