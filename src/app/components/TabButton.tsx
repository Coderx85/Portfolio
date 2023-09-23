import React from 'react'
interface Tab {
    active: boolean,
    selectTab: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

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