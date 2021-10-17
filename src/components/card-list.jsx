import './card-list.css';

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.children}
    </div>
  )
}
