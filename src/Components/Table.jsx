import React from 'react'
import Action from '../Redux/Action'
import { useState } from 'react'
function Table() {
    const [arr, setArr] = useState([])
    return (
    <>
    <Action arr={setArr} />
    </>
    )
}

export default Table