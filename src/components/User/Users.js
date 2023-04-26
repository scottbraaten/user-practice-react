const Users = (props) => {
    return(
        <div>
            {props.users.map((user) => {
                return <p key={Math.random()}>{user.username} ({user.age} years old)</p>
            })}
        </div>
    )
}

export default Users;