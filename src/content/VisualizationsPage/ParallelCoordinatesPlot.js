import React from 'react';
import Plot from 'react-plotly.js';


const trace1 = {
  line: {
    cmax: -0.7076296905518402, 
    cmin: -0.7948224025543116, 
    colorbar: {title: {text: 'val_auc'}}, 
    colorsrc: 'xavier.bouthillier:3:43c49a', 
    color: [-0.780031090590737, -0.7827307505684905, -0.7771075160479912, -0.7815729123569168, -0.7679637326625893, -0.7805936009199493, -0.7620106826954802, -0.742578302326385, -0.7914012256959546, -0.7843866175655569, -0.764955513446827, -0.7424912580874532, -0.7560686778629829, -0.7809078979164386, -0.7076296905518402, -0.7505278769830475, -0.7862486062635407, -0.7648159898755618, -0.7884456811151728, -0.7814938753380483, -0.7791100051882751, -0.7935749249506281, -0.7867779397764653, -0.7766782002932704, -0.7847248701104603, -0.7655899389818024, -0.7694130281091949, -0.7546086483449127, -0.7931129557413429, -0.7087067817689874, -0.788710933581663, -0.764219577027346, -0.7631522732546238, -0.7583347878090547, -0.7310944097214165, -0.7723993020429183, -0.7948224025543116, -0.7882336334645725, -0.7833329886366707], 
    showscale: true, 
    colorscale: [['0.0', 'rgb(255,255,204)'], ['0.125', 'rgb(255,237,160)'], ['0.25', 'rgb(254,217,118)'], ['0.375', 'rgb(254,178,76)'], ['0.5', 'rgb(253,141,60)'], ['0.625', 'rgb(252,78,42)'], ['0.75', 'rgb(227,26,28)'], ['0.875', 'rgb(189,0,38)'], ['1.0', 'rgb(128,0,38)']]
  }, 
  type: 'parcoords', 
  dimensions: [
    {
      label: '/dropout', 
      range: [0, 5], 
      values: [2, 3, 1, 2, 3, 4, 4, 0, 2, 1, 3, 4, 4, 1, 3, 0, 1, 0, 2, 3, 3, 2, 3, 3, 4, 4, 3, 3, 2, 3, 3, 0, 2, 3, 0, 3, 1, 0, 2]
    }, 
    {
      label: '/learning_rate[0]', 
      range: [1e-05, 0.001], 
      values: [0.0005747845526091205, 9.717910919311446e-05, 1.6570229481291695e-05, 3.055511532871133e-05, 0.0006310174120379774, 0.0002546606785410005, 9.851088184326168e-05, 2.5839973998924114e-05, 0.00012927136876192215, 8.455081703732675e-05, 0.0004258496241899244, 3.0373209590744556e-05, 5.2726454497507856e-05, 3.5468688314901095e-05, 1.7999524467305948e-05, 3.66140797391207e-05, 1.4733224669469006e-05, 0.0002035386656699011, 6.94995526881964e-05, 0.00017795140355708494, 0.0001674150935354242, 6.162228573932309e-05, 0.00024169992630823463, 0.00030625248177846556, 0.00014883022451967707, 8.073030448245357e-05, 0.00039190228101553936, 0.0006110131331685214, 0.0001832226868080067, 1.5137521313778242e-05, 0.00021206262131970825, 0.00011541207641569087, 1.580306429454298e-05, 3.5522776121717326e-05, 2.352741654302332e-05, 0.0006817340528688578, 0.00035510262109951637, 0.0003082643537380882, 0.0002806845319653858]
    }, 
    {
      label: '/learning_rate[1]', 
      range: [1e-05, 0.001], 
      values: [0.0007403062056513132, 0.0008794227014616495, 9.009161652070386e-05, 0.00019198106027355725, 0.0005047523465972278, 0.00017898644618389488, 1.6343301895298622e-05, 2.629486098693607e-05, 0.0007651062484988466, 0.0009369867377074616, 1.7452642229039106e-05, 4.789898251482055e-05, 5.469784883343372e-05, 0.0009741294850455306, 1.9351528007231025e-05, 0.00010410549034836072, 0.00022678915008766235, 5.7383408009935865e-05, 2.0953602428663968e-05, 1.5170170887300964e-05, 2.8477259454960604e-05, 5.9393999889614525e-05, 7.370197805953986e-05, 3.512434055709906e-05, 7.73168751791157e-05, 3.1561176126177294e-05, 7.526533412650216e-05, 1.696517943151868e-05, 0.0008372023946454619, 1.4951524856584976e-05, 2.288696745946192e-05, 0.0002718698558881767, 0.00046253217586407654, 0.0009283552495525243, 1.8615756508172953e-05, 0.0005263453271835594, 0.00012579660168350864, 0.0005689807581229017, 3.1471161387911096e-05]
    }, 
    {
      label: '/learning_rate[2]', 
      range: [1e-05, 0.001], 
      values: [7.029479558500134e-05, 0.0002974449216599116, 0.0001541849826165435, 0.0006214390692323961, 1.811829408823701e-05, 0.00024697024477918526, 1.4091376734556873e-05, 0.0002530397813068888, 2.130216637761497e-05, 4.6563156261754155e-05, 1.502128669566774e-05, 2.258643070257094e-05, 0.00013878319082790997, 1.5737422343453218e-05, 0.0006572760438162273, 0.0004570211179201021, 0.000883426632055141, 2.917916719330865e-05, 1.6840762984921162e-05, 0.0005277725119955368, 0.00048622276355058145, 1.9387949053570255e-05, 0.0001301973147657616, 1.6125035921339283e-05, 7.92492726920181e-05, 0.0004053354336359227, 0.0007495440809699879, 4.7416411204499516e-05, 0.0004907267584974197, 7.810069819952566e-05, 0.0006536321122271506, 0.00012283161301636497, 7.189341358999385e-05, 0.00046191483270093605, 7.233161739226541e-05, 6.382894335278974e-05, 0.0004554858153911407, 0.00011475654732920408, 0.00013224066434810178]
    }, 
    {
      label: '/mt-join', 
      values: [0, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 0, 0, 2, 0, 2, 1, 1, 0, 1, 1, 2, 2, 1, 2, 0, 1, 2, 0, 2, 0, 1, 1, 1, 2, 0, 2, 2], 
      ticktext: ['concat', 'max', 'mean'], 
      tickvals: [0, 1, 2]
    }, 
    {
      label: 'val_auc', 
      range: [-0.7948224025543116, -0.7076296905518402], 
      values: [-0.780031090590737, -0.7827307505684905, -0.7771075160479912, -0.7815729123569168, -0.7679637326625893, -0.7805936009199493, -0.7620106826954802, -0.742578302326385, -0.7914012256959546, -0.7843866175655569, -0.764955513446827, -0.7424912580874532, -0.7560686778629829, -0.7809078979164386, -0.7076296905518402, -0.7505278769830475, -0.7862486062635407, -0.7648159898755618, -0.7884456811151728, -0.7814938753380483, -0.7791100051882751, -0.7935749249506281, -0.7867779397764653, -0.7766782002932704, -0.7847248701104603, -0.7655899389818024, -0.7694130281091949, -0.7546086483449127, -0.7931129557413429, -0.7087067817689874, -0.788710933581663, -0.764219577027346, -0.7631522732546238, -0.7583347878090547, -0.7310944097214165, -0.7723993020429183, -0.7948224025543116, -0.7882336334645725, -0.7833329886366707]
    }
  ],
  hovertemplate: 'Hover!'
};
const data = [trace1];
const layout = {
  title: {text: 'Parallel Coordinates Plot for experiment lateral-view-multitask3'}, 
  template: {
    data: {
      bar: [
        {
          type: 'bar', 
          marker: {line: {
              color: '#E5ECF6', 
              width: 0.5
            }}, 
          error_x: {color: '#2a3f5f'}, 
          error_y: {color: '#2a3f5f'}
        }
      ], 
      pie: [
        {
          type: 'pie', 
          automargin: true
        }
      ], 
      table: [
        {
          type: 'table', 
          cells: {
            fill: {color: '#EBF0F8'}, 
            line: {color: 'white'}
          }, 
          header: {
            fill: {color: '#C8D4E3'}, 
            line: {color: 'white'}
          }
        }
      ], 
      carpet: [
        {
          type: 'carpet', 
          aaxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: 'white', 
            startlinecolor: '#2a3f5f'
          }, 
          baxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: 'white', 
            startlinecolor: '#2a3f5f'
          }
        }
      ], 
      mesh3d: [
        {
          type: 'mesh3d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      contour: [
        {
          type: 'contour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      heatmap: [
        {
          type: 'heatmap', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      scatter: [
        {
          type: 'scatter', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      surface: [
        {
          type: 'surface', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      barpolar: [
        {
          type: 'barpolar', 
          marker: {line: {
              color: '#E5ECF6', 
              width: 0.5
            }}
        }
      ], 
      heatmapgl: [
        {
          type: 'heatmapgl', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      histogram: [
        {
          type: 'histogram', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      parcoords: [
        {
          line: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}, 
          type: 'parcoords'
        }
      ], 
      scatter3d: [
        {
          line: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}, 
          type: 'scatter3d', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattergl: [
        {
          type: 'scattergl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      choropleth: [
        {
          type: 'choropleth', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattergeo: [
        {
          type: 'scattergeo', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2d: [
        {
          type: 'histogram2d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      scatterpolar: [
        {
          type: 'scatterpolar', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      contourcarpet: [
        {
          type: 'contourcarpet', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattercarpet: [
        {
          type: 'scattercarpet', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattermapbox: [
        {
          type: 'scattermapbox', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterpolargl: [
        {
          type: 'scatterpolargl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterternary: [
        {
          type: 'scatterternary', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2dcontour: [
        {
          type: 'histogram2dcontour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ]
    }, 
    layout: {
      geo: {
        bgcolor: 'white', 
        showland: true, 
        lakecolor: 'white', 
        landcolor: '#E5ECF6', 
        showlakes: true, 
        subunitcolor: 'white'
      }, 
      font: {color: '#2a3f5f'}, 
      polar: {
        bgcolor: '#E5ECF6', 
        radialaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        angularaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }
      }, 
      scene: {
        xaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }, 
        yaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }, 
        zaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }
      }, 
      title: {x: 0.05}, 
      xaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white', 
        zerolinewidth: 2
      }, 
      yaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white', 
        zerolinewidth: 2
      }, 
      mapbox: {style: 'light'}, 
      ternary: {
        aaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        baxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        caxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        bgcolor: '#E5ECF6'
      }, 
      colorway: ['#636efa', '#EF553B', '#00cc96', '#ab63fa', '#FFA15A', '#19d3f3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52'], 
      coloraxis: {colorbar: {
          ticks: '', 
          outlinewidth: 0
        }}, 
      tovermode: 'closest', 
      colorscale: {
        diverging: [['0', '#8e0152'], ['0.1', '#c51b7d'], ['0.2', '#de77ae'], ['0.3', '#f1b6da'], ['0.4', '#fde0ef'], ['0.5', '#f7f7f7'], ['0.6', '#e6f5d0'], ['0.7', '#b8e186'], ['0.8', '#7fbc41'], ['0.9', '#4d9221'], ['1', '#276419']], 
        sequential: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']], 
        sequentialminus: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
      }, 
      hoverlabel: {align: 'left'}, 
      plot_bgcolor: '#E5ECF6', 
      paper_bgcolor: 'white', 
      shapedefaults: {line: {color: '#2a3f5f'}}, 
      annotationdefaults: {
        arrowhead: 0, 
        arrowcolor: '#2a3f5f', 
        arrowwidth: 1
      }
    }
  }
};

const config = {
    responsive: true
};

const ParallelCoordinatesPlot = (props) => {
  return (
    <Plot
      ref={ props.ref }
      divID={ props.divId }
      data={ data }
      layout={ layout }
      config={ config }
      useResizeHandler={ true }
      style={{width:'100%'}}
      onHover={ props.onHover }
    />
  );
}

class ParallelCoordinatesPlotConst extends React.Component {
  constructor(props) {
    super(props);
    this.onHover = props.onHover;
    this.onUnhover = props.onUnhover;
    this.onRestyle = props.onRestyle;
    this.divId = props.divId;
    this.state = {data: [], layout: {}, frames: [], config: {}};
    this.myRef = React.createRef();
  }

  render() {
    return (
    <Plot
      id='parallel-coordinates-plot'
      ref={ this.myRef }
      divId={ this.divId }
      data={ data }
      layout={ layout }
      config={ config }
      useResizeHandler={ true }
      style={{width:'100%'}}
      onHover={ this.onHover }
      onUnhover={ this.onUnhover }
      onRestyle={ this.onRestyle }
    />
    );
  }
}


export { ParallelCoordinatesPlot, ParallelCoordinatesPlotConst };
