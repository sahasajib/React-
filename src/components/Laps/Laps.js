import React  from 'react';
const laps = (props) => {
    return (
        <ul className="list-group list-group-flush">
           { props.laps.map((lap, index ) => {
               return(
                   <li key={ index } className="list-group-item">
                       <h4>
                        <span className="text-dark px-2">Minute:</span>
                        <span className="text-danger px-2">{lap.min}</span>
                        <span className="text-dark px-2">Second:</span>
                        <span className="text-danger px-2">{lap.sec}</span>
                        <span className="text-dark px-2">mili:</span>
                        <span className="text-danger px-2">{lap.mili}</span>
                       </h4>
                   </li>
               )
           }) }
        </ul>
    )
}
export default laps