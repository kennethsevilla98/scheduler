import React from 'react'
import DatePicker from 'react-datepicker'

function DateField({label,onChange,selected}) {
    return (
        <div>
                  <label className="block mt-2">
                    <span className="text-gray-700">{label }</span>
                    <DatePicker selected={selected} 
                                onChange={onChange}  
                                className="p-2 mt-1 block w-full border border-gray-400 focus:ring-2 focus:ring-green-400 focus: border-transparent focus: outline-none rounded-xl"  
                                dateFormat="MMMM d, yyyy"
                    />
                </label>
        </div>
    )
}

export default DateField
