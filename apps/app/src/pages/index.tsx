import Head from 'next/head'
import {Heading, NextReadMe} from 'lib'
import styled from 'styled-components';

const Main = styled.main`
    background: #eee;
    padding: 16px;
`

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page"/>
            </Head>

            <Main style={{background: '#eee', padding: 16}}>
                <Heading>
                    Next.js README.md
                </Heading>
                <hr/>
                <NextReadMe />
            </Main>
        </div>
    )
}
