import React from "react"

interface BotaoIconeProps {
    icone: React.ReactNode
    children: React.ReactNode
}

const BotaoIcone = ( props: BotaoIconeProps) => {
    return (
        <>
            <button className="
            flex gap-2 border-2 rounded-xl items-center
            px-4 py-2 hover:border-gray-400
            ">
                <span>{props.icone}</span>
                <span>{props.children}</span>
            </button>
        </>
    )
}

export default BotaoIcone