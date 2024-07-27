
// user = { name: "Natalie", role: "teacher" }
// buttonClass = "btn btn-primary"
// buttonText = "Submit"
export default function UserCard({ buttonText, buttonClass, user }) {
    return (
        <div>
            <h4>{ user.name }</h4>
            { user.role }
            <button>{ buttonText }</button>
            <button className={buttonClass}>{buttonText}</button>
        </div>
    )
}