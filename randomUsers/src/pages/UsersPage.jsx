import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import useDebounce from "../hooks/useDebounce";
import { SearchBar, UserCard, Pagination } from "../components";

function UsersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const { users, loading, error, totalPages } = useUsers(page, 9);
  const navigate = useNavigate();

  const debouncedSearch = useDebounce(search, 400);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      const query = debouncedSearch.toLowerCase();

      const matchesSearch =
        !query ||
        fullName.includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.location.city.toLowerCase().includes(query) ||
        user.location.country.toLowerCase().includes(query);

      const matchesGender = !genderFilter || user.gender === genderFilter;

      return matchesGender && matchesSearch;
    });
  }, [debouncedSearch, users, genderFilter]);

  const handleSearchChange = (val) => {
    setSearch(val);
    // setPage(1);
  };

  const handleGenderChange = (val) => {
    setGenderFilter(val);
    // setPage(1);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-[#E2DED8] py-12 pb-10">
        <div className="max-w-275 mx-auto px-8">
          <h1
            className="
          font-['Syne', sans-serif]
          text-[clamp(2.5rem,6vw,4rem)]
          font-bold
          tracking-[-0.03em]
          text-[#1A1714]
          leading-none
        "
          >
            People
          </h1>
          <p className="mt-2 text-[#6B6560] text-base font-light">
            Explore a directory of random humans from around the world
          </p>
        </div>
      </header>

      <main className="max-w-275 mx-auto p-8">
        <SearchBar
          value={debouncedSearch}
          onChange={handleSearchChange}
          genderFilter={genderFilter}
          onGenderChange={handleGenderChange}
        />

        {loading && (
          <div className="flex justify-center items-center py-10">
            <div
              className="grid
                grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
                gap-4
                w-full"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="border
                    border-[#E2DED8]
                    rounded-2xl
                    p-5
                    animate-pulse
                    bg-white"
                >
                  <div
                    className="w-20
                      h-20
                      rounded-full
                      bg-gray-200
                      mb-4"
                  />
                  <div className="h-4 bg-gray-200 rounded mb-3 w-[60%]" />
                  <div className="h-4 bg-gray-200 rounded mb-3 w-[40%]" />
                  <div className="h-4 bg-gray-200 rounded w-[80%]" />
                </div>
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="flex justify-center py-10">
            <div className="border border-red-300 bg-red-50 rounded-xl p-6 max-w-md w-full">
              <p className="font-semibold text-red-600 mb-2">
                Could not load users
              </p>
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <div className="flex justify-center py-10">
            <p
              className="
                text-[#9C9690]
                text-lg
              "
            >
              No users match <strong>{debouncedSearch}</strong>
            </p>
          </div>
        )}

        {!loading && !error && filteredUsers.length > 0 && (
          <>
            <p
              className="text-[0.85rem] text-[#9C9690] mb-4
              "
            >
              {filteredUsers.length} of {users.length} users
              {debouncedSearch && ` matching "${debouncedSearch}"`}
            </p>

            <div
              className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mb-8
              "
            >
              {filteredUsers.map((user) => (
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
  );
}
export default UsersPage;
