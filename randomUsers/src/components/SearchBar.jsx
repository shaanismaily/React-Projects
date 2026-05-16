function SearchBar({ value, onChange, genderFilter, onGenderChange }) {
  return (
    <div className="flex flex-wrap mb-6 gap-3">
      <div className="flex min-w-65 flex-1 relative items-center">

        <span className="absolute left-3.5 text-[20px] leading-none pointer-events-none text-[#9C9690]">
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search by name, email or location..."
          value={value}
          onChange={(e) => onChange(e.target.value)}

          aria-label="Search-users"

          className="w-full py-3 pr-10
          border pl-11 border-[#E2DED8] rounded-2 text-[0.95rem] bg-white text-[#1A1714] outline-none transition-[border-color,box-shadow] duration-150 focus:border-[#2D5BE3] focus:shadow-[0_0_0_3px_rgba(45,91,227,0.1)] placeholder:text-[#9C9690]"
        />

        {value && (
          <button onClick={() => onChange("")} aria-label="Clear-search"
          className="absolute right-3 text-[18px] p-0.5 leading-none cursor-pointer text-[#9C9690] hover:text-[#1A1714]"
          >
            x
          </button>
        )}
      </div>

      <div>
        
        <select
          value={genderFilter}
          onChange={(e) => onGenderChange(e.target.value)}
          aria-label="Filter by gender"
          className="py-3 px-4 border border-[#E2DED8] rounded-2 text-[0.9rem] bg-white text-[#1A1714] cursor-pointer outline-none focus:border-[#2D5BE3]"
        >
          <option value="">All genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        
      </div>
    </div>
  );
}
export default SearchBar;
