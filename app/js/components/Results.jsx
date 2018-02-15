// Create a new React component here!
import React from 'react';

export default function Results(props) {
  const { madlib, outputs } = props;
  var counter = 0;
  var replaced_madlibs = madlib.content.replace(/\[([^\])]*)\]/g,function (mat,p1,off,str) {
    return outputs[counter++];
  });

  return (
    <div className="madlib">
      <p>
        { replaced_madlibs }
      </p>
    </div>
  )
}
