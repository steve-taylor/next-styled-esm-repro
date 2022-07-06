import {useEffect, useState} from 'react';

export default function useCounter(): number {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => setValue(value => value + 1), 1000)

        return () => clearInterval(intervalId)
    }, [])

    return value
}
