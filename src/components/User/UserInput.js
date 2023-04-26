import { useState } from "react";
import Button from "../UI/Button"
import Card from "../UI/Card";
import UserInvalidModal from "./UserInvalidModal";

const UserInput = (props) => {
    const [valid, setValid] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const age = e.target[1].value;
        if (username.length === 0) {
            const message = 'Username must not be empty';
            setValid(<UserInvalidModal message={message} closeModal={handleModalClose} />)
            return;
        }
        if (age.length === 0) {
            const message = 'Age must not be empty';
            setValid(<UserInvalidModal message={message} closeModal={handleModalClose} />)
            return;
        }
        if (age < 0) {
            const message = 'Age must be a positive integer';
            setValid(<UserInvalidModal message={message} closeModal={handleModalClose} />)
            return;
        }

        props.handleUserSubmit({username: username, age: age});
    }
    const handleModalClose = () => {
        console.log('a')
        setValid(null);
    }
    return(
        <Card>
            {valid}
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text'></input>
                <label>Age (Years)</label>
                <input type='text'></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default UserInput;