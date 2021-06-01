import React from 'react';
import { Application32, Globe32, PersonFavorite32 } from '@carbon/icons-react';
import { PlotSection, PlotBox} from './PlotBox';
import { RegretPlot, RegretConst } from './RegretPlot';
import { LocalParameterImportancePlot } from './LocalParameterImportancePlot';
import { ParallelCoordinatesPlot, ParallelCoordinatesPlotConst } from './ParallelCoordinatesPlot';
import Plotly from "plotly.js-cartesian-dist-min";

const on_hover = (data) => {
    // Find PCP plot, and call hover.
    // Lets first force fetch it.
    console.log(data['points'][0]['customdata'][0]);
    console.log(pcp.myRef.current);
    console.log(pcp.myRef.current.plotlyService);
};

const test = new RegretConst({onHover: on_hover});
const pcp = new ParallelCoordinatesPlotConst({onHover: on_hover});


class PlotGrid extends React.Component {
  constructor(props) {
    super(props);
    this.id = 'plot-grid'; //props.id;
  }

  onRestyle({restyle, plotIndex}) {
      console.log('restyle', plotIndex)
      console.log(restyle)
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
  
    console.log('do smtg?')
    console.log(hover)
    if (hover && oppositeNode && oppositeNode.divId) {
      console.log('hover opposite');
      Plotly.Fx.hover(oppositeNode.divId, hover.event);
    } else if (unhover && oppositeNode && oppositeNode.divId) {
      console.log('unhover opposite');
      Plotly.Fx.unhover(oppositeNode.divId, unhover.event);
    }
    console.log('no?')
  }

  render() {
    return  (
      <div class="bx--grid bx--grid--full-width">
        <div class="bx--row">
          <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
            <div class='bx--tile plot-tile'>
              <RegretConst
                ref={node => { this.graphNode1 = node; }}
                divId={`plot-${this.id}-1`}
                onHover={hover => this.onHover({ hover, plotIndex: 1 })}
                onUnhover={unhover => this.onHover({ unhover, plotIndex: 1 })}
              />
            </div>
          </div>
          <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
            <div class='bx--tile plot-tile'>
              <ParallelCoordinatesPlotConst
                onRestyle={restyle => this.onRestyle({ restyle , plotIndex: 2 })}
              />
            </div>
          </div>
        </div>
        <div class="bx--row">
          <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
              <a class='bx--tile plot-tile'><LocalParameterImportancePlot/></a>
          </div>
        </div>
      </div>
    );
  }
}


const VisualizationsPage = PlotGrid; // ().render();

// const VisualizationsPage = () => {
//   return  (
// <div class="bx--grid bx--grid--full-width">
//   <div class="bx--row">
//     <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
//         <div class='bx--tile plot-tile'>{ test.render() }</div>
//     </div>
//     <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
//         <div class='bx--tile plot-tile'>{ pcp.render() }</div>
//     </div>
//   </div>
//   <div class="bx--row">
//     <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8">
//         <a class='bx--tile plot-tile'><LocalParameterImportancePlot/></a>
//     </div>
//   </div>
// </div>)};

//        <PlotSection heading="The Principles" className="visualizations-page__r1">
//          <PlotBox
//            heading="Regret"
//            body=<RegretPlot/>
//          />
//          <PlotBox
//            heading="Carbon is Open"
//            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
//            icon={<PersonFavorite32/>}
//          />
//          <PlotBox
//            heading="Carbon is Open"
//            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
//            icon={<PersonFavorite32/>}
//          />
//      </PlotSection>


export default VisualizationsPage;
