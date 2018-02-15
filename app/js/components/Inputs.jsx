// Create a new React component here!
import React from 'react';

export default function Inputs(props) {
  const { changeInput, inputs } = props;
  return (
    <div className="inputs">
      <ul>
        {
          inputs.map((input, i) => {
            return (
              <li key={i} >
                <input onChange={(evt) => { changeInput(evt, i)}} placeholder={input} />
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}
