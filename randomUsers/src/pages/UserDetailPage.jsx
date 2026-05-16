import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../api/users";
import { useEffect, useState } from "react";

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setError(null);
      setLoading(true);

      try {
        const { data } = await getUserById(id);
        setUser(data.data);
      } catch (error) {
        setError(error.message || "Could not load user");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <main className="max-w-275 mx-auto p-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-sm font-medium text-[#2D5BE3] hover:underline"
          >
            ← Back to directory
          </button>

          <div
            className="
              bg-white
              border
              border-[#E2DED8]
              rounded-3xl
              p-8
              animate-pulse
            "
          >
            <div className="flex gap-6 items-center">
              <div
                className="
                  w-25
                  h-25
                  rounded-full
                  bg-gray-200
                  shrink-0
                "
              />

              <div className="flex-1 flex flex-col gap-3">
                <div
                  className="
                    h-7
                    w-[40%]
                    rounded
                    bg-gray-200
                  "
                />

                <div
                  className="
                    h-4
                    w-[25%]
                    rounded
                    bg-gray-200
                  "
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen">
        <main className="max-w-275 mx-auto p-8">
          <div className="flex justify-center py-10">
            <div
              className="
                border
                border-red-300
                bg-red-50
                rounded-2xl
                p-6
                max-w-md
                w-full
              "
            >
              <p className="font-semibold text-red-600 mb-2">
                Could not load user #{id}
              </p>

              <p className="text-red-500 text-sm mb-4">{error}</p>

              <button
                onClick={() => navigate("/")}
                className="
                  text-sm
                  font-medium
                  text-[#2D5BE3]
                  hover:underline
                "
              >
                ← Go back
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const name = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div className="min-h-screen">
      <main className="max-w-275 mx-auto p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm font-medium text-[#2D5BE3] hover:underline"
        >
          ← Back to directory
        </button>

        <div className="bg-white border border-[#E2DED8] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 items-center p-8 border-b border-[#E2DED8]">
            <img
              src={user.picture.large}
              alt={name}
              className="w-30 h-30 rounded-full object-cover border-4 border-white shadow-md"
            />

            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-[#1A1714]">{name}</h1>
              <p className="text-[#9C9690] mb-4">@{user.login.username}</p>

              <div className="flex flex-wrap gap-2">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-[#EBF0FD]
                    text-[#2D5BE3]
                    capitalize
                  "
                >
                  {user.gender}
                </span>
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-gray-100
                    text-gray-700
                  "
                >
                  🌍 {user.nat}
                </span>
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-gray-100
                    text-gray-700
                  "
                >
                  Age {user.dob.age}
                </span>
              </div>
            </div>
          </div>
          <div
            className="
              grid
              gap-8
              p-8
              md:grid-cols-3
            "
          >
            {/* Contact */}
            <section>
              <h2
                className="
                  text-lg
                  font-semibold
                  mb-5
                  text-[#1A1714]
                "
              >
                Contact
              </h2>

              <div className="space-y-4">
                <DetailRow
                  label="Email"
                  value={
                    <a
                      href={`mailto:${user.email}`}
                      className="
                        text-[#2D5BE3]
                        hover:underline
                        break-all
                      "
                    >
                      {user.email}
                    </a>
                  }
                />

                <DetailRow label="Phone" value={user.phone} />

                <DetailRow label="Cell" value={user.cell} />
              </div>
            </section>

            {/* Location */}
            <section>
              <h2
                className="
                  text-lg
                  font-semibold
                  mb-5
                  text-[#1A1714]
                "
              >
                Location
              </h2>

              <div className="space-y-4">
                <DetailRow
                  label="Address"
                  value={`${user.location.street.number} ${user.location.street.name}`}
                />

                <DetailRow label="City" value={user.location.city} />

                <DetailRow label="State" value={user.location.state} />

                <DetailRow label="Country" value={user.location.country} />

                <DetailRow label="Postcode" value={user.location.postcode} />
              </div>
            </section>

            {/* Account */}
            <section>
              <h2
                className="
                  text-lg
                  font-semibold
                  mb-5
                  text-[#1A1714]
                "
              >
                Account
              </h2>

              <div className="space-y-4">
                <DetailRow label="Username" value={user.login.username} />

                <DetailRow
                  label="UUID"
                  value={<span className="break-all">{user.login.uuid}</span>}
                />

                <DetailRow
                  label="Registered"
                  value={new Date(user.registered.date).toLocaleDateString(
                    "en-IN",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                />

                <DetailRow
                  label="Date of birth"
                  value={new Date(user.dob.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="
          text-xs
          uppercase
          tracking-wide
          text-[#9C9690]
        "
      >
        {label}
      </span>

      <div
        className="
          text-sm
          text-[#1A1714]
        "
      >
        {value}
      </div>
    </div>
  );
}
