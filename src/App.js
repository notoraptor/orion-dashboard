import React, { Component } from 'react';
import { Experiments } from './experiments/Experiments';
import { Benchmarks } from './benchmarks/Benchmarks';

class App extends Component {
  constructor(props) {
    super(props);
    // Store selected experiment here
    this.state = { page: null };
    this.selectExperiments = this.selectExperiments.bind(this);
    this.selectBenchmarks = this.selectBenchmarks.bind(this);
  }
  render() {
    if (this.state.page === 'experiments') {
      return <Experiments />;
    } else if (this.state.page === 'benchmarks') {
      return <Benchmarks />;
    } else {
      return (
        <div>
          <button onClick={this.selectExperiments}>
            Experiments dashboard
          </button>
          <button onClick={this.selectBenchmarks}>Benchmarks dashboard</button>
        </div>
      );
    }
  }
  selectExperiments() {
    this.setState({ page: 'experiments' });
  }
  selectBenchmarks() {
    this.setState({ page: 'benchmarks' });
  }
}

export default App;
