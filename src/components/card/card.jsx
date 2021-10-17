import './card.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=200x200`} />
      <h2>{props.monster.name} {props.monster.id}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}
