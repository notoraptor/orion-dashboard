import React from 'react';
import { RegretConst } from './RegretPlot';
import { LocalParameterImportancePlot } from './LocalParameterImportancePlot';
import { ParallelCoordinatesPlotConst } from './ParallelCoordinatesPlot';
import Plotly from 'plotly.js-cartesian-dist-min';
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
    };
    this.id = 'plot-grid'; //props.id;
  }

  onRestyle({ restyle, plotIndex }) {
    console.log('restyle', plotIndex);
    console.log(restyle);
  }

  onHover({ hover, unhover, plotIndex }) {
    const oppositeNode = plotIndex === 2 ? this.graphNode1 : this.graphNode2;
    //var oppositeNode;
    //if( plotIndex === 1 ){
    //    oppositeNode = this.graphNode2;
    //}else{
    //    oppositeNode = this.graphNode1;
    //}

    // TODO: Maybe it does not trigger because oppositeNode.el is undefined?

    //console.log(oppositeNode.el);
    //Plotly.Fx.hover(oppositeNode.divId, hover.event);

    console.log('do smtg?');
    console.log(hover);
    if (hover && oppositeNode && oppositeNode.divId) {
      console.log('hover opposite');
      Plotly.Fx.hover(oppositeNode.divId, hover.event);
    } else if (unhover && oppositeNode && oppositeNode.divId) {
      console.log('unhover opposite');
      Plotly.Fx.unhover(oppositeNode.divId, unhover.event);
    }
    console.log('no?');
  }

  render() {
    return (
      <div className="bx--grid bx--grid--full-width">
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
        ref={node => {
          this.graphNode1 = node;
        }}
        divId={`plot-${this.id}-1`}
        onHover={hover => this.onHover({ hover, plotIndex: 1 })}
        onUnhover={unhover => this.onHover({ unhover, plotIndex: 1 })}
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
        onRestyle={restyle => this.onRestyle({ restyle, plotIndex: 2 })}
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
        this.setState({ experiment, regret: null, parallel_coordinates: null });
      } else {
        await this.loadBackendData(experiment);
      }
    }
  }
  async loadBackendData(experiment) {
    const backend = new Backend(this.context.address);
    let regret = false;
    let parallel_coordinates = false;
    let lpi = false;
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
    this.setState({ experiment, regret, parallel_coordinates, lpi });
  }
}

const VisualizationsPage = PlotGrid;

export default VisualizationsPage;
