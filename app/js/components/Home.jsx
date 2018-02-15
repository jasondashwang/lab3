import React from 'react';
import madlibs from '../../madlib.js';
import Query from './Query.jsx';
import Results from './Results.jsx';
import Inputs from './Inputs.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madlib: madlibs[Math.floor(Math.random() * madlibs.length)],
      inputs: [],
      outputs: []
    }

    this.state.madlib.content.replace(/\[([^\])]*)\]/g, (mat, p1, off, str) => {
      this.state.inputs.push(p1.trim());
      this.state.outputs.push(`[${p1.trim()}]`);
    });

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput (evt, i) {
    const copy = [...this.state.outputs];
    copy[i] = evt.target.value;

    this.setState({
      outputs: copy
    })
  }

  render () {
    return (
        <div className="container">
          <h1>Madlibs</h1>
          <hr />
          <Query madlib={this.state.madlib} />
          <h3>Inputs</h3>
          <Inputs changeInput={this.changeInput} inputs={this.state.inputs} />
          <h3>Result</h3>
          <Results madlib={this.state.madlib} outputs={this.state.outputs} />
        </div>
    );
  }
}
