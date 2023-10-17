import React from 'react'
import { Tab } from '../../../types'

const TabButton = ({active, selectTab, children}: Tab) => {
    const ButtonClass = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'

    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${ButtonClass}`}>
            {children}
        </p>
    </button>
    )
}

export default TabButton