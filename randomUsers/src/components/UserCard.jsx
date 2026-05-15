import { useNavigate } from "react-router-dom"

function UserCard({user}) {
    const navigate = useNavigate()

    const name = `${user.name.first} ${user.name.last}`
    const initials = `${user.name.first[0]}${user.name.last[0]}`.toUpperCase()

    return (
        <article
        onClick={() => navigate(`user/${user.id}`)}
        >
            <div>
                <div>
                    <img 
                    src={user.picture.large} 
                    alt={name} 
                    onError={(e) => {
                        e.target.style.display = "none"
                        e.target.nextSibling.style.display = "flex"
                    }}
                    />
                    <div style={{display: "none"}}>
                        {initials}
                    </div>
                </div>

            <div>
                <h3>{name}</h3>
                <p>@{user.login.username}</p>

                <div>
                    <span>
                        <span>{user.gender}</span>
                    </span>
                    <span>{user.nat}</span>
                    <span>Age {user.dob.age}</span>
                </div>
                <p>{user.email}</p>
                <p>{user.location.city}, {user.location.country}</p>
            </div>
            </div>

            <div>
                <span>View profile →</span>
            </div>
        </article>
    )
}
export default UserCard;