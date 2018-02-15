// Create a new React component here!
import React from 'react';

export default function Query(props) {
  const { madlib } = props;
  return (
    <div className="madlib">
      <h4>{madlib.title} - {madlib.author}</h4>
      <p>
        { madlib.content }
      </p>
    </div>
  )
}
