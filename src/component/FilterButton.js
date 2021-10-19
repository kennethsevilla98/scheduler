import { Popover } from 'react-tiny-popover'
import { useState } from 'react'

function FilterButton({list,handleToggle,checked}) {

    const [isPopoverOpen,setIsPopoverOpen] = useState(false)
    return (
        <Popover
        isOpen={isPopoverOpen}
        positions={[ 'left']}// preferred positions by priority
        content={
        <div className='bg-white p-2 rounded-md shadow'>              
            {
              list.map((value)=>{
                return (
                <div key={value}>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" checked={checked.indexOf(value) !== -1} onChange={handleToggle(value)}/>
                    <span className="ml-2">{value}</span>
                  </label>
                </div>
              )})
            }
        </div>
        }
      >
        <div className='p-3' onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </div>
      </Popover>
    )
}

export default FilterButton
