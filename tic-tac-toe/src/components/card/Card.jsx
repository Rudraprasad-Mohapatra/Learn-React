import Icon from "../icon/icon"
import "./Card.css"
export default function Card({ player }) {

    let icon = <Icon />
    if (player == 'X') {
        icon = <Icon name="cross" />
    } else if (player == "O") {
        icon = <Icon name="circle" />
    }
    return (
        <div className="card">
            {icon}
        </div>
    )
}