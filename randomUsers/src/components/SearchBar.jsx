function SearchBar({value, onChange, genderFilter, onGenderChange}) {

    return (
        <div>
            <div>
                <span>⌕</span>
                <input 
                type="text"
                placeholder="Search by name, email or location..."
                value={value}
                onChange={e => onChange(e.target.value)}
                aria-label="Search-users"
                />

                {value &&
                    <button onClick={() => onChange('')}
                    aria-label="Clear-search"
                    >x</button>
                }
            </div>

            <div>
                <select
                value={genderFilter}
                onChange={e => onGenderChange(e.target.value)}
                aria-label="Filter by gender"
                >
                    <option value="">All genders</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

        </div>
    )
}
export default SearchBar;