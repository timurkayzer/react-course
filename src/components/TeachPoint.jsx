export default function TeachPoint({name,text}) {
    return (
        <li>
            <p>
                <strong>{name}</strong>&nbsp;{text}
            </p>
        </li>
    )
}