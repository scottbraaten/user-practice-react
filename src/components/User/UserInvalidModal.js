import Button from "../UI/Button";

const UserInvalidModal = (props) => {
    const handleClick = () => {
        console.log('eh')
    }
    return (
        <div>
            <h1>{props.message}</h1>
            <Button handleClick={props.closeModal}>Ok</Button>
        </div>
    )
}

export default UserInvalidModal;