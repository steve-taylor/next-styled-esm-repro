import {useCounter} from 'hooks'

export default function Counter() {
    const counter = useCounter()

    return (
        <p>
            Counter: {counter}
        </p>
    )
}
