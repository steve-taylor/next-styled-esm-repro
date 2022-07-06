import Head from 'next/head'
import {Heading, Paragraph} from 'lib'
import styled from 'styled-components'

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

            <Main>
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
            </Main>
        </div>
    )
}
