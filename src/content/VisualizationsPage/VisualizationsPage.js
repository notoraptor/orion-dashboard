import React from 'react';
import { RegretConst } from './RegretPlot';
import { LocalParameterImportancePlot } from './LocalParameterImportancePlot';
import { ParallelCoordinatesPlotConst } from './ParallelCoordinatesPlot';
import { BackendContext } from '../../BackendContext';
import { Backend } from '../../utils/queryServer';

class PlotGrid extends React.Component {
  static contextType = BackendContext;
  constructor(props) {
    super(props);
    this.state = {
      experiment: null,
      regret: false,
      parallel_coordinates: false,
      lpi: false,
      keyCount: 0, // key to force re-rendering
    };
  }
  render() {
    return (
      <div className="bx--grid bx--grid--full-width" key={this.state.keyCount}>
        <div className="bx--row">
          <div className="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
            <div className="bx--tile plot-tile">{this.renderRegret()}</div>
          </div>
          <div className="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
            <div className="bx--tile plot-tile">
              {this.renderParallelCoordinates()}
            </div>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
            <div className="bx--tile plot-tile">{this.renderLPI()}</div>
          </div>
        </div>
      </div>
    );
  }
  renderRegret() {
    if (this.state.regret === null)
      return `Loading regret plot for: ${this.state.experiment} ...`;
    if (this.state.regret === false) return `Nothing to display`;
    return (
      <RegretConst
        data={this.state.regret.data}
        layout={this.state.regret.layout}
      />
    );
  }
  renderParallelCoordinates() {
    if (this.state.parallel_coordinates === null)
      return `Loading parallel coordinates plot for: ${
        this.state.experiment
      } ...`;
    if (this.state.parallel_coordinates === false) return 'Nothing to display';
    return (
      <ParallelCoordinatesPlotConst
        data={this.state.parallel_coordinates.data}
        layout={this.state.parallel_coordinates.layout}
      />
    );
  }
  renderLPI() {
    if (this.state.lpi === null)
      return `Loading LPI plot for: ${this.state.experiment}`;
    if (this.state.lpi === false) return 'Nothing to display';
    return (
      <LocalParameterImportancePlot
        data={this.state.lpi.data}
        layout={this.state.lpi.layout}
      />
    );
  }
  componentDidMount() {
    const experiment = this.context.experiment;
    if (experiment !== null) {
      console.log(`Mounting experiment: ${this.context.experiment}`);
      this.loadBackendData(experiment);
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const experiment = this.context.experiment;
    if (this.state.experiment !== experiment) {
      console.log(`Updating experiment: ${this.context.experiment}`);
      if (experiment === null) {
        this.setState({
          experiment,
          regret: false,
          parallel_coordinates: false,
          lpi: false,
        });
      } else {
        this.loadBackendData(experiment);
      }
    }
  }
  loadBackendData(experiment) {
    this.setState(
      { experiment, regret: null, parallel_coordinates: null, lpi: null },
      () => {
        const backend = new Backend(this.context.address);
        const promiseRegret = backend.query(`plots/regret/${experiment}`);
        const promisePC = backend.query(
          `plots/parallel_coordinates/${experiment}`
        );
        const promiseLPI = backend.query(`plots/lpi/${experiment}`);
        Promise.allSettled([promiseRegret, promisePC, promiseLPI]).then(
          results => {
            const [resRegret, resPC, resLPI] = results;
            const regret =
              resRegret.status === 'fulfilled' ? resRegret.value : false;
            const parallel_coordinates =
              resPC.status === 'fulfilled' ? resPC.value : false;
            const lpi = resLPI.status === 'fulfilled' ? resLPI.value : false;
            const keyCount = this.state.keyCount + 1;
            this.setState({
              experiment,
              regret,
              parallel_coordinates,
              lpi,
              keyCount,
            });
          }
        );
      }
    );
  }
}

const VisualizationsPage = PlotGrid;

export default VisualizationsPage;
