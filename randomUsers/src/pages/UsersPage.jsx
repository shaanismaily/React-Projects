import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import useDebounce from "../hooks/useDebounce"
import { SearchBar, UserCard, Pagination } from "../components";


function UsersPage() {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [genderFilter, setGenderFilter] = useState("");

    const { users, loading, error, totalPages } = useUsers(page, 9);
    const navigate = useNavigate();
    
    const debouncedSearch = useDebounce(search, 400)

    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            const fullName = `${user.name.first} ${user.name.last}`
            const query = debouncedSearch.toLowerCase();

            const matchesSearch = 
                !query ||
                fullName.includes(query) ||
                user.email.toLowerCase().includes(query) ||
                user.location.city.toLowerCase().includes(query) ||
                user.location.country.toLowerCase().includes(query)

            const matchesGender = !genderFilter || user.gender === genderFilter

            return matchesGender && matchesSearch
        })
    }, [debouncedSearch, users, genderFilter])

    const handleSearchChange = (val) => {
        setSearch(val);
        setPage(1);
    }

    const handleGenderChange = (val) => {
        setGenderFilter(val);
        setPage(1);
    }

    return (
        <div>
            <header>
                <div>
                    <h1>People</h1>
                    <p>Explore a directory of random humans from around the world</p>
                </div>
            </header>

            <main>
                <SearchBar 
                value={debouncedSearch}
                onChange={handleSearchChange}
                genderFilter={genderFilter}
                onGenderChange={handleGenderChange}
                />

                {loading && (
                    <div className="state-wrap">
                        <div className="skeleton-grid">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="skeleton-card">
                            <div className="skeleton skeleton-avatar" />
                            <div className="skeleton skeleton-line" style={{ width: '60%' }} />
                            <div className="skeleton skeleton-line" style={{ width: '40%' }} />
                            <div className="skeleton skeleton-line" style={{ width: '80%' }} />
                            </div>
                        ))}
                        </div>
                    </div>
                )}

                {error && !loading && (
                    <div className="state-wrap">
                        <div className="error-box">
                        <p className="error-title">Could not load users</p>
                        <p className="error-msg">{error}</p>
                        </div>
                    </div>
                )}

                 {!loading && !error && filteredUsers.length === 0 && (
                    <div className="state-wrap">
                        <p className="empty-msg">
                        No users match "<strong>{debouncedSearch}</strong>"
                        </p>
                    </div>
                )}

                {!loading && !error && filteredUsers.length > 0 && (
                    <>
                        <p>
                            {filteredUsers.length} of {users.length} users
                            {debouncedSearch && ` matching "${debouncedSearch}"`}
                        </p>

                        <div>
                            {filteredUsers.map(user => (
                                <UserCard key={user.login.uuid} user={user} />
                            ))}
                        </div>
                    </>
                )}

                {!loading && !error && !debouncedSearch && !genderFilter && (
                    <Pagination 
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                    />
                )}
            </main>
        </div>
    )
}
export default UsersPage;