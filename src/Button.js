export default function Button({ size, text }) {
    return (
        <>
            <button className={"b-" + size}>{text}</button>
            <div>
                <ul>
                    <li>{ text }</li>
                </ul>
            </div>
        </>
    )
}
