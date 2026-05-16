import { useNavigate } from "react-router-dom"

function UserCard({ user }) {
  const navigate = useNavigate();

  const name = `${user.name.first} ${user.name.last}`;

  const initials =
    `${user.name.first[0]}${user.name.last[0]}`.toUpperCase();

  return (
    <article
      onClick={() => navigate(`/user/${user.id}`)}
      className="
        bg-white
        border
        border-[#E2DED8]
        rounded-2xl
        p-5
        cursor-pointer
        transition-all
        duration-200
        hover:shadow-lg
        hover:-translate-y-1
      "
    >
      <div className="flex gap-4">

        <div className="relative shrink-0">

          <img
            src={user.picture.large}
            alt={name}
            className="
              w-20
              h-20
              rounded-full
              object-cover
            "
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />

          <div
            style={{ display: "none" }}
            className="
              w-20
              h-20
              rounded-full
              bg-[#EBF0FD]
              text-[#2D5BE3]
              font-bold
              text-xl
              items-center
              justify-center
            "
          >
            {initials}
          </div>
        </div>

        <div className="flex-1 min-w-0">

          <h3
            className="
              text-lg
              font-semibold
              text-[#1A1714]
              truncate
            "
          >
            {name}
          </h3>

          <p
            className="
              text-sm
              text-[#9C9690]
              mb-3
            "
          >
            @{user.login.username}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-2 mb-3">

            <span
              className="
                px-2
                py-1
                rounded-full
                text-xs
                text-[#2D5BE3]
                bg-[#EBF0FD]
                capitalize
              "
            >
              {user.gender}
            </span>

            <span
              className="
                px-2
                py-1
                rounded-full
                text-xs
                bg-gray-100
                text-gray-700
              "
            >
              {user.nat}
            </span>

            <span
              className="
                px-2
                py-1
                rounded-full
                text-xs
                bg-gray-100
                text-gray-700
              "
            >
              Age {user.dob.age}
            </span>
          </div>

          <p
            className="
              text-sm
              text-[#6B6560]
              truncate
              mb-1
            "
          >
            {user.email}
          </p>

          <p
            className="
              text-sm
              text-[#9C9690]
              truncate
            "
          >
            {user.location.city}, {user.location.country}
          </p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[#E2DED8]">

        <span
          className="
            text-sm
            font-medium
            text-[#2D5BE3]
          "
        >
          View profile →
        </span>
      </div>
    </article>
  );
}
export default UserCard;