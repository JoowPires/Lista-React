import * as s from './styles.jsx';


export function Card(props){
    return (
        <s.div>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </s.div>
    )
}