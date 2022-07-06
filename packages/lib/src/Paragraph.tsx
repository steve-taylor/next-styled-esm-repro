import {Component} from 'react'
import type {HTMLProps} from 'react'

export default class Paragraph extends Component<HTMLProps<HTMLParagraphElement>> {
    render() {
        const {style, ...rest} = this.props

        return (
            <h1 {...rest} style={{...style, fontFamily: 'Hevletica, Arial, sans-serif', color: '#123'}}/>
        )
    }
}
