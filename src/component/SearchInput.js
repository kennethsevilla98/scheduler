function SearchInput({onChange}) {
    return (
        <div className="flex w-full bg-white  shadow rounded-xl">
        <div className="flex -mr-px justify-center w-15 p-4">
          <span
              className="flex items-center leading-normal bg-white px-1 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          </span>
        </div>
        <input
          type="text"
          className="flex-shrink flex-grow  leading-normal w-px border-0  border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
          placeholder="Search"
          onChange={onChange}
        />
    </div>   
    )
}

export default SearchInput
