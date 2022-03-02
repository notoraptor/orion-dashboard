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
      return `Loading regret visualization for experiment: ${
        this.state.experiment
      } ...`;
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
      return `Loading parallel coordinates visualization for experiment: ${
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
      return `Loading LPI visualization for experiment: ${
        this.state.experiment
      }`;
    if (this.state.lpi === false) return 'Nothing to display';
    return (
      <LocalParameterImportancePlot
        data={this.state.lpi.data}
        layout={this.state.lpi.layout}
      />
    );
  }
  async componentDidMount() {
    const experiment = this.context.experiment;
    if (experiment !== null) {
      console.log(`mount ${this.context.experiment}`);
      await this.loadBackendData(experiment);
    }
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    const experiment = this.context.experiment;
    if (this.state.experiment !== experiment) {
      console.log(`update ${this.context.experiment}`);
      if (experiment === null) {
        this.setState({
          experiment,
          regret: false,
          parallel_coordinates: false,
          lpi: false,
        });
      } else {
        await this.loadBackendData(experiment);
      }
    }
  }
  async loadBackendData(experiment) {
    const backend = new Backend(this.context.address);
    let regret;
    let parallel_coordinates;
    let lpi;
    try {
      regret = await backend.query(`plots/regret/${experiment}`);
      console.log('regret done ' + experiment);
    } catch (error) {
      regret = false;
      console.log('regret fail ' + experiment);
    }
    try {
      parallel_coordinates = await backend.query(
        `plots/parallel_coordinates/${experiment}`
      );
      console.log('pc done ' + experiment);
    } catch (error) {
      parallel_coordinates = false;
      console.log('pc fail ' + experiment);
    }
    try {
      lpi = await backend.query(`plots/lpi/${experiment}`);
      console.log('LPI done ' + experiment);
    } catch (error) {
      lpi = false;
      console.log('LPI fail ' + experiment);
    }
    const keyCount = this.state.keyCount + 1;
    this.setState({ experiment, regret, parallel_coordinates, lpi, keyCount });
  }
}

const VisualizationsPage = PlotGrid;

export default VisualizationsPage;
