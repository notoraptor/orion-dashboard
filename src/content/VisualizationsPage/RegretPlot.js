import React from 'react';
import Plot from 'react-plotly.js';

const config = {
  responsive: true,
};

export class RegretConst extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Plot
        divId={this.props.divId}
        data={this.props.data}
        layout={this.props.layout}
        config={config}
        useResizeHandler={true}
        style={{ width: '100%' }}
        onHover={this.props.onHover}
      />
    );
  }
}
