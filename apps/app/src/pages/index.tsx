import Head from 'next/head'
import {Heading, NextReadMe} from 'lib'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page"/>
            </Head>

            <main style={{background: '#eee', padding: 16}}>
                <Heading>
                    Next.js README.md
                </Heading>
                <hr/>
                <NextReadMe />
            </main>
        </div>
    )
}
