import React from 'react'

function Dropdown({value,selected,label, onChange, option}) {
    return (
        <label className="block mt-2">
        <span className="text-gray-700">{label}</span>
        <select value={value} 
                selected={selected}
                onChange={onChange}
                className="p-2 mt-1 block w-full border border-gray-400 focus:ring-2 focus:ring-green-400 focus: border-transparent focus: outline-none rounded-xl"

        >
            
        {option.map((list)=>{
            return (
                <option key={list} value={list}>{list}</option>
            )
        }
        ) }
        </select>
    </label>
    )
}

export default Dropdown
