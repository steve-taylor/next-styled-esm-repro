import React from 'react'
import type {HTMLProps} from 'react'

export default class Heading extends React.Component<HTMLProps<HTMLHeadingElement>> {
    render() {
        const {style, ...rest} = this.props

        return (
            <h1 {...rest} style={{...style, fontFamily: 'Georgia, Times, serif', color: '#333'}}/>
        )
    }
}
