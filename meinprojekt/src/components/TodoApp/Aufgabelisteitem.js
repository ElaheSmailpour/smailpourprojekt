
const  Aufgabelisteitem = (props) => {
  return(
      <li>{props.aufgabe}. Schon gemacht: {props.erledigt} </li>
  )
}

export default Aufgabelisteitem;
