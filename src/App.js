import React, { Component } from 'react';
import { Experiments } from './experiments/Experiments';
import { Benchmarks } from './benchmarks/Benchmarks';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    // Store selected experiment here
    this.state = { page: null };
    this.selectExperiments = this.selectExperiments.bind(this);
    this.selectBenchmarks = this.selectBenchmarks.bind(this);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Experiments} />
        <Route path="/benchmarks" component={Benchmarks} />
      </Switch>
    );
  }
  selectExperiments() {
    this.setState({ page: 'experiments' });
  }
  selectBenchmarks() {
    this.setState({ page: 'benchmarks' });
  }
}

export default App;
