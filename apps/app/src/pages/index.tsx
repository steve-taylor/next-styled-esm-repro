import Head from 'next/head'
import {Counter, Heading, Paragraph} from 'lib'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page"/>
            </Head>

            <main style={{background: '#eee', padding: 16}}>
                <Heading>
                    Heading
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Paragraph>

                <Counter/>
            </main>
        </div>
    )
}
