import React from 'react'
import type {HTMLProps} from 'react'

export default class Paragraph extends React.Component<HTMLProps<HTMLParagraphElement>> {
    render() {
        const {style, ...rest} = this.props

        return (
            <h1 {...rest} style={{...style, fontFamily: 'Hevletica, Arial, sans-serif', color: '#123'}}/>
        )
    }
}
