import React from 'react';
import Plot from 'react-plotly.js';

const trace1 = {
  meta: {
    columnNames: {
      y: 'data.0.y',
      customdata: 'data.0.customdata',
    },
  },
  mode: 'markers',
  name: 'trials',
  type: 'scatter',
  ysrc: 'xavier.bouthillier:2:03538a',
  y: [
    -0.780031090590737,
    -0.7827307505684905,
    -0.7771075160479912,
    -0.7815729123569168,
    -0.7679637326625893,
    -0.7805936009199493,
    -0.7620106826954802,
    -0.742578302326385,
    -0.7914012256959546,
    -0.7843866175655569,
    -0.764955513446827,
    -0.7424912580874532,
    -0.7560686778629829,
    -0.7809078979164386,
    -0.7076296905518402,
    -0.7505278769830475,
    -0.7862486062635407,
    -0.7648159898755618,
    -0.7884456811151728,
    -0.7814938753380483,
    -0.7791100051882751,
    -0.7935749249506281,
    -0.7867779397764653,
    -0.7766782002932704,
    -0.7847248701104603,
    -0.7655899389818024,
    -0.7694130281091949,
    -0.7546086483449127,
    -0.7931129557413429,
    -0.7087067817689874,
    -0.788710933581663,
    -0.764219577027346,
    -0.7631522732546238,
    -0.7583347878090547,
    -0.7310944097214165,
    -0.7723993020429183,
    -0.7948224025543116,
    -0.7882336334645725,
    -0.7833329886366707,
  ],
  customdatasrc: 'xavier.bouthillier:2:69f06b',
  customdata: [
    [
      'd13abb45703991f3fb68fe277b776787',
      '2020-01-29T17:12:58.487568',
      '<br>  dropout: 2<br>  learning_rate: [0.00057478,0.00074031,7.0295E-05]<br>  mt-join: concat',
    ],
    [
      '2734135dead360ca4cda0fb19e320980',
      '2020-01-29T17:13:34.928855',
      '<br>  dropout: 3<br>  learning_rate: [9.7179E-05,0.00087942,0.00029744]<br>  mt-join: max',
    ],
    [
      '5fbf188c969ec28f91940f33058a495b',
      '2020-01-29T17:13:39.165157',
      '<br>  dropout: 1<br>  learning_rate: [1.657E-05,9.0092E-05,0.00015418]<br>  mt-join: mean',
    ],
    [
      '96983b05f35b64778fed33f0e9e0f4bb',
      '2020-01-29T17:18:54.740440',
      '<br>  dropout: 2<br>  learning_rate: [3.0555E-05,0.00019198,0.00062144]<br>  mt-join: max',
    ],
    [
      'c482fabae3ca510f878ae48857966998',
      '2020-01-29T22:00:34.964600',
      '<br>  dropout: 3<br>  learning_rate: [0.00063102,0.00050475,1.8118E-05]<br>  mt-join: max',
    ],
    [
      '6d3243740db96ce7f21bac6c7f17d3fd',
      '2020-01-31T02:01:31.453739',
      '<br>  dropout: 4<br>  learning_rate: [0.00025466,0.00017899,0.00024697]<br>  mt-join: mean',
    ],
    [
      '304080333f2ff3faadc6530ff4d862fc',
      '2020-01-31T02:01:43.755901',
      '<br>  dropout: 4<br>  learning_rate: [9.8511E-05,1.6343E-05,1.4091E-05]<br>  mt-join: mean',
    ],
    [
      'c9cc4896f3af446503825d40f9c2cd1c',
      '2020-01-31T02:01:47.282181',
      '<br>  dropout: 0<br>  learning_rate: [2.584E-05,2.6295E-05,0.00025304]<br>  mt-join: max',
    ],
    [
      'd3dafc85f9f481bed4003a9fb459fb5a',
      '2020-01-31T02:02:00.738736',
      '<br>  dropout: 2<br>  learning_rate: [0.00012927,0.00076511,2.1302E-05]<br>  mt-join: max',
    ],
    [
      'bfa487fa7221845219244ef99a828752',
      '2020-01-31T06:18:32.570590',
      '<br>  dropout: 1<br>  learning_rate: [8.4551E-05,0.00093699,4.6563E-05]<br>  mt-join: max',
    ],
    [
      'ebf95e4ee4f10a63010173b91665dac8',
      '2020-01-31T08:04:39.797053',
      '<br>  dropout: 3<br>  learning_rate: [0.00042585,1.7453E-05,1.5021E-05]<br>  mt-join: max',
    ],
    [
      'f24ad5033dc7e60e946780863b79590c',
      '2020-01-31T10:28:59.495821',
      '<br>  dropout: 4<br>  learning_rate: [3.0373E-05,4.7899E-05,2.2586E-05]<br>  mt-join: mean',
    ],
    [
      '44e52d66d63530758cb442664693eaa5',
      '2020-01-31T10:29:21.633409',
      '<br>  dropout: 4<br>  learning_rate: [5.2726E-05,5.4698E-05,0.00013878]<br>  mt-join: concat',
    ],
    [
      '6e8701466a00333cfb811e65e2027be2',
      '2020-01-31T10:29:22.848966',
      '<br>  dropout: 1<br>  learning_rate: [3.5469E-05,0.00097413,1.5737E-05]<br>  mt-join: concat',
    ],
    [
      '5c94350b0105d02ba2f0cb5a74b96d78',
      '2020-01-31T11:35:45.249962',
      '<br>  dropout: 3<br>  learning_rate: [1.8E-05,1.9352E-05,0.00065728]<br>  mt-join: mean',
    ],
    [
      'bec9d251e8accae55e245bcaa706df92',
      '2020-01-31T14:26:11.259036',
      '<br>  dropout: 0<br>  learning_rate: [3.6614E-05,0.00010411,0.00045702]<br>  mt-join: concat',
    ],
    [
      'f53f856813591ea2a7e4086b9d0bd847',
      '2020-01-31T17:07:22.877397',
      '<br>  dropout: 1<br>  learning_rate: [1.4733E-05,0.00022679,0.00088343]<br>  mt-join: mean',
    ],
    [
      '4d74c338c0ca2a5c218437230597b838',
      '2020-01-31T17:07:23.980599',
      '<br>  dropout: 0<br>  learning_rate: [0.00020354,5.7383E-05,2.9179E-05]<br>  mt-join: max',
    ],
    [
      'bc89760c53c3340110118618efd78e88',
      '2020-01-31T17:07:53.165474',
      '<br>  dropout: 2<br>  learning_rate: [6.95E-05,2.0954E-05,1.6841E-05]<br>  mt-join: max',
    ],
    [
      'a9208d9dbd0d53855394a86e0de023f5',
      '2020-01-31T21:55:15.273518',
      '<br>  dropout: 3<br>  learning_rate: [0.00017795,1.517E-05,0.00052777]<br>  mt-join: concat',
    ],
    [
      '945fe9a5df46053c715949aa8f4ce8e1',
      '2020-01-31T21:55:15.864063',
      '<br>  dropout: 3<br>  learning_rate: [0.00016742,2.8477E-05,0.00048622]<br>  mt-join: max',
    ],
    [
      '2aa3ee69585c53a1e98ba046e05b8082',
      '2020-02-01T00:37:44.701391',
      '<br>  dropout: 2<br>  learning_rate: [6.1622E-05,5.9394E-05,1.9388E-05]<br>  mt-join: max',
    ],
    [
      'a7a666ed17c11f8c71c54260d53f69d8',
      '2020-02-01T00:37:46.384389',
      '<br>  dropout: 3<br>  learning_rate: [0.0002417,7.3702E-05,0.0001302]<br>  mt-join: mean',
    ],
    [
      'd4ec495939d103cca63fb1243898e04e',
      '2020-02-01T00:37:47.404513',
      '<br>  dropout: 3<br>  learning_rate: [0.00030625,3.5124E-05,1.6125E-05]<br>  mt-join: mean',
    ],
    [
      'd541c24a536cbd76ceafd1aef3e8d489',
      '2020-02-01T04:06:13.719312',
      '<br>  dropout: 4<br>  learning_rate: [0.00014883,7.7317E-05,7.9249E-05]<br>  mt-join: max',
    ],
    [
      '59cb6086d773377a368cb14025c17f0f',
      '2020-02-01T04:13:37.009524',
      '<br>  dropout: 4<br>  learning_rate: [8.073E-05,3.1561E-05,0.00040534]<br>  mt-join: mean',
    ],
    [
      '540862c5d2be782e00cf9a1eacc5e8ed',
      '2020-02-01T07:49:26.736296',
      '<br>  dropout: 3<br>  learning_rate: [0.0003919,7.5265E-05,0.00074954]<br>  mt-join: concat',
    ],
    [
      'dff9dca776d55ebc793a29a6d5815c84',
      '2020-02-01T08:07:35.708208',
      '<br>  dropout: 3<br>  learning_rate: [0.00061101,1.6965E-05,4.7416E-05]<br>  mt-join: max',
    ],
    [
      '99fc2ba3570fb3454899733912c84ca1',
      '2020-02-01T08:07:37.971654',
      '<br>  dropout: 2<br>  learning_rate: [0.00018322,0.0008372,0.00049073]<br>  mt-join: mean',
    ],
    [
      '4d4bffe600e9da8849d1096144cf6393',
      '2020-02-01T10:37:09.167986',
      '<br>  dropout: 3<br>  learning_rate: [1.5138E-05,1.4952E-05,7.8101E-05]<br>  mt-join: concat',
    ],
    [
      'bb410608223cc6d67e40f5427b8a3635',
      '2020-02-01T10:37:09.917511',
      '<br>  dropout: 3<br>  learning_rate: [0.00021206,2.2887E-05,0.00065363]<br>  mt-join: mean',
    ],
    [
      '731869dece2ba4f8cc36a91032d42145',
      '2020-02-01T14:07:31.180537',
      '<br>  dropout: 0<br>  learning_rate: [0.00011541,0.00027187,0.00012283]<br>  mt-join: concat',
    ],
    [
      '71d09c09eb4cc19ae2d385e280ad0f71',
      '2020-02-01T14:25:08.738978',
      '<br>  dropout: 2<br>  learning_rate: [1.5803E-05,0.00046253,7.1893E-05]<br>  mt-join: max',
    ],
    [
      'd8baae87f5a03bc5b9212f46f3442176',
      '2020-02-01T14:36:20.854007',
      '<br>  dropout: 3<br>  learning_rate: [3.5523E-05,0.00092836,0.00046191]<br>  mt-join: max',
    ],
    [
      '23f87c3972c82fed808f044707668580',
      '2020-02-01T17:08:12.622846',
      '<br>  dropout: 0<br>  learning_rate: [2.3527E-05,1.8616E-05,7.2332E-05]<br>  mt-join: max',
    ],
    [
      'ef9814906047720043511228d2ed9c39',
      '2020-02-01T17:08:12.992325',
      '<br>  dropout: 3<br>  learning_rate: [0.00068173,0.00052635,6.3829E-05]<br>  mt-join: mean',
    ],
    [
      '1792aa3305b91025a593d514344f0d3b',
      '2020-02-01T20:07:00.500351',
      '<br>  dropout: 1<br>  learning_rate: [0.0003551,0.0001258,0.00045549]<br>  mt-join: concat',
    ],
    [
      '07043f545df29a4393a445c47d03b3b6',
      '2020-02-01T20:44:42.327031',
      '<br>  dropout: 0<br>  learning_rate: [0.00030826,0.00056898,0.00011476]<br>  mt-join: mean',
    ],
    [
      'b56205e32c00fbc39953f4261f159be8',
      '2020-02-01T20:46:30.700854',
      '<br>  dropout: 2<br>  learning_rate: [0.00028068,3.1471E-05,0.00013224]<br>  mt-join: mean',
    ],
  ],
  hovertemplate:
    '<b>ID: %{customdata[0]}</b><br>value: %{y}<br>time: %{customdata[1]|%Y-%m-%d %H:%M:%S}<br>parameters: %{customdata[2]}<extra></extra>',
};
const trace2 = {
  meta: {
    columnNames: {
      y: 'data.1.y',
      customdata: 'data.1.customdata',
    },
  },
  mode: 'lines',
  name: 'best-to-date',
  type: 'scatter',
  ysrc: 'xavier.bouthillier:2:984fd7',
  y: [
    -0.780031090590737,
    -0.7827307505684905,
    -0.7827307505684905,
    -0.7827307505684905,
    -0.7827307505684905,
    -0.7827307505684905,
    -0.7827307505684905,
    -0.7827307505684905,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7914012256959546,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7935749249506281,
    -0.7948224025543116,
    -0.7948224025543116,
    -0.7948224025543116,
  ],
  customdatasrc: 'xavier.bouthillier:2:f72583',
  customdata: [
    ['d13abb45703991f3fb68fe277b776787', '-0.780031090590737'],
    ['2734135dead360ca4cda0fb19e320980', '-0.7827307505684905'],
    ['2734135dead360ca4cda0fb19e320980', '-0.7827307505684905'],
    ['2734135dead360ca4cda0fb19e320980', '-0.7827307505684905'],
    ['2734135dead360ca4cda0fb19e320980', '-0.7827307505684905'],
    ['2734135dead360ca4cda0fb19e320980', '-0.7827307505684905'],
    ['2734135dead360ca4cda0fb19e320980', '-0.7827307505684905'],
    ['2734135dead360ca4cda0fb19e320980', '-0.7827307505684905'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['d3dafc85f9f481bed4003a9fb459fb5a', '-0.7914012256959546'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['2aa3ee69585c53a1e98ba046e05b8082', '-0.7935749249506281'],
    ['1792aa3305b91025a593d514344f0d3b', '-0.7948224025543116'],
    ['1792aa3305b91025a593d514344f0d3b', '-0.7948224025543116'],
    ['1792aa3305b91025a593d514344f0d3b', '-0.7948224025543116'],
  ],
  hovertemplate:
    '<b>Best ID: %{customdata[0]}</b><br>value: %{customdata[1]}<extra></extra>',
};
const data = [trace1, trace2];
const layout = {
  title: { text: 'Regret for experiment lateral-view-multitask3' },
  xaxis: {
    range: [-2.7401668653158517, 40.74016686531585],
    title: { text: 'Trials ordered by suggested time' },
    autorange: true,
  },
  yaxis: {
    type: 'linear',
    range: [-0.8032813970023125, -0.6991706961038393],
    title: { text: 'Objective' },
    autorange: true,
  },
  autosize: true,
  template: {
    data: {
      bar: [
        {
          type: 'bar',
          marker: {
            line: {
              color: '#E5ECF6',
              width: 0.5,
            },
          },
          error_x: { color: '#2a3f5f' },
          error_y: { color: '#2a3f5f' },
        },
      ],
      pie: [
        {
          type: 'pie',
          automargin: true,
        },
      ],
      table: [
        {
          type: 'table',
          cells: {
            fill: { color: '#EBF0F8' },
            line: { color: 'white' },
          },
          header: {
            fill: { color: '#C8D4E3' },
            line: { color: 'white' },
          },
        },
      ],
      carpet: [
        {
          type: 'carpet',
          aaxis: {
            gridcolor: 'white',
            linecolor: 'white',
            endlinecolor: '#2a3f5f',
            minorgridcolor: 'white',
            startlinecolor: '#2a3f5f',
          },
          baxis: {
            gridcolor: 'white',
            linecolor: 'white',
            endlinecolor: '#2a3f5f',
            minorgridcolor: 'white',
            startlinecolor: '#2a3f5f',
          },
        },
      ],
      mesh3d: [
        {
          type: 'mesh3d',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
        },
      ],
      contour: [
        {
          type: 'contour',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
          colorscale: [
            ['0', '#0d0887'],
            ['0.1111111111111111', '#46039f'],
            ['0.2222222222222222', '#7201a8'],
            ['0.3333333333333333', '#9c179e'],
            ['0.4444444444444444', '#bd3786'],
            ['0.5555555555555556', '#d8576b'],
            ['0.6666666666666666', '#ed7953'],
            ['0.7777777777777778', '#fb9f3a'],
            ['0.8888888888888888', '#fdca26'],
            ['1', '#f0f921'],
          ],
        },
      ],
      heatmap: [
        {
          type: 'heatmap',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
          colorscale: [
            ['0', '#0d0887'],
            ['0.1111111111111111', '#46039f'],
            ['0.2222222222222222', '#7201a8'],
            ['0.3333333333333333', '#9c179e'],
            ['0.4444444444444444', '#bd3786'],
            ['0.5555555555555556', '#d8576b'],
            ['0.6666666666666666', '#ed7953'],
            ['0.7777777777777778', '#fb9f3a'],
            ['0.8888888888888888', '#fdca26'],
            ['1', '#f0f921'],
          ],
        },
      ],
      scatter: [
        {
          type: 'scatter',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      surface: [
        {
          type: 'surface',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
          colorscale: [
            ['0', '#0d0887'],
            ['0.1111111111111111', '#46039f'],
            ['0.2222222222222222', '#7201a8'],
            ['0.3333333333333333', '#9c179e'],
            ['0.4444444444444444', '#bd3786'],
            ['0.5555555555555556', '#d8576b'],
            ['0.6666666666666666', '#ed7953'],
            ['0.7777777777777778', '#fb9f3a'],
            ['0.8888888888888888', '#fdca26'],
            ['1', '#f0f921'],
          ],
        },
      ],
      barpolar: [
        {
          type: 'barpolar',
          marker: {
            line: {
              color: '#E5ECF6',
              width: 0.5,
            },
          },
        },
      ],
      heatmapgl: [
        {
          type: 'heatmapgl',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
          colorscale: [
            ['0', '#0d0887'],
            ['0.1111111111111111', '#46039f'],
            ['0.2222222222222222', '#7201a8'],
            ['0.3333333333333333', '#9c179e'],
            ['0.4444444444444444', '#bd3786'],
            ['0.5555555555555556', '#d8576b'],
            ['0.6666666666666666', '#ed7953'],
            ['0.7777777777777778', '#fb9f3a'],
            ['0.8888888888888888', '#fdca26'],
            ['1', '#f0f921'],
          ],
        },
      ],
      histogram: [
        {
          type: 'histogram',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      parcoords: [
        {
          line: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
          type: 'parcoords',
        },
      ],
      scatter3d: [
        {
          line: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
          type: 'scatter3d',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      scattergl: [
        {
          type: 'scattergl',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      choropleth: [
        {
          type: 'choropleth',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
        },
      ],
      scattergeo: [
        {
          type: 'scattergeo',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      histogram2d: [
        {
          type: 'histogram2d',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
          colorscale: [
            ['0', '#0d0887'],
            ['0.1111111111111111', '#46039f'],
            ['0.2222222222222222', '#7201a8'],
            ['0.3333333333333333', '#9c179e'],
            ['0.4444444444444444', '#bd3786'],
            ['0.5555555555555556', '#d8576b'],
            ['0.6666666666666666', '#ed7953'],
            ['0.7777777777777778', '#fb9f3a'],
            ['0.8888888888888888', '#fdca26'],
            ['1', '#f0f921'],
          ],
        },
      ],
      scatterpolar: [
        {
          type: 'scatterpolar',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      contourcarpet: [
        {
          type: 'contourcarpet',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
        },
      ],
      scattercarpet: [
        {
          type: 'scattercarpet',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      scattermapbox: [
        {
          type: 'scattermapbox',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      scatterpolargl: [
        {
          type: 'scatterpolargl',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      scatterternary: [
        {
          type: 'scatterternary',
          marker: {
            colorbar: {
              ticks: '',
              outlinewidth: 0,
            },
          },
        },
      ],
      histogram2dcontour: [
        {
          type: 'histogram2dcontour',
          colorbar: {
            ticks: '',
            outlinewidth: 0,
          },
          colorscale: [
            ['0', '#0d0887'],
            ['0.1111111111111111', '#46039f'],
            ['0.2222222222222222', '#7201a8'],
            ['0.3333333333333333', '#9c179e'],
            ['0.4444444444444444', '#bd3786'],
            ['0.5555555555555556', '#d8576b'],
            ['0.6666666666666666', '#ed7953'],
            ['0.7777777777777778', '#fb9f3a'],
            ['0.8888888888888888', '#fdca26'],
            ['1', '#f0f921'],
          ],
        },
      ],
    },
    layout: {
      geo: {
        bgcolor: 'white',
        showland: true,
        lakecolor: 'white',
        landcolor: '#E5ECF6',
        showlakes: true,
        subunitcolor: 'white',
      },
      font: { color: '#2a3f5f' },
      polar: {
        bgcolor: '#E5ECF6',
        radialaxis: {
          ticks: '',
          gridcolor: 'white',
          linecolor: 'white',
        },
        angularaxis: {
          ticks: '',
          gridcolor: 'white',
          linecolor: 'white',
        },
      },
      scene: {
        xaxis: {
          ticks: '',
          gridcolor: 'white',
          gridwidth: 2,
          linecolor: 'white',
          zerolinecolor: 'white',
          showbackground: true,
          backgroundcolor: '#E5ECF6',
        },
        yaxis: {
          ticks: '',
          gridcolor: 'white',
          gridwidth: 2,
          linecolor: 'white',
          zerolinecolor: 'white',
          showbackground: true,
          backgroundcolor: '#E5ECF6',
        },
        zaxis: {
          ticks: '',
          gridcolor: 'white',
          gridwidth: 2,
          linecolor: 'white',
          zerolinecolor: 'white',
          showbackground: true,
          backgroundcolor: '#E5ECF6',
        },
      },
      title: { x: 0.05 },
      xaxis: {
        ticks: '',
        title: { standoff: 15 },
        gridcolor: 'white',
        linecolor: 'white',
        automargin: true,
        zerolinecolor: 'white',
        zerolinewidth: 2,
      },
      yaxis: {
        ticks: '',
        title: { standoff: 15 },
        gridcolor: 'white',
        linecolor: 'white',
        automargin: true,
        zerolinecolor: 'white',
        zerolinewidth: 2,
      },
      mapbox: { style: 'light' },
      ternary: {
        aaxis: {
          ticks: '',
          gridcolor: 'white',
          linecolor: 'white',
        },
        baxis: {
          ticks: '',
          gridcolor: 'white',
          linecolor: 'white',
        },
        caxis: {
          ticks: '',
          gridcolor: 'white',
          linecolor: 'white',
        },
        bgcolor: '#E5ECF6',
      },
      colorway: [
        '#636efa',
        '#EF553B',
        '#00cc96',
        '#ab63fa',
        '#FFA15A',
        '#19d3f3',
        '#FF6692',
        '#B6E880',
        '#FF97FF',
        '#FECB52',
      ],
      coloraxis: {
        colorbar: {
          ticks: '',
          outlinewidth: 0,
        },
      },
      hovermode: 'closest',
      colorscale: {
        diverging: [
          ['0', '#8e0152'],
          ['0.1', '#c51b7d'],
          ['0.2', '#de77ae'],
          ['0.3', '#f1b6da'],
          ['0.4', '#fde0ef'],
          ['0.5', '#f7f7f7'],
          ['0.6', '#e6f5d0'],
          ['0.7', '#b8e186'],
          ['0.8', '#7fbc41'],
          ['0.9', '#4d9221'],
          ['1', '#276419'],
        ],
        sequential: [
          ['0', '#0d0887'],
          ['0.1111111111111111', '#46039f'],
          ['0.2222222222222222', '#7201a8'],
          ['0.3333333333333333', '#9c179e'],
          ['0.4444444444444444', '#bd3786'],
          ['0.5555555555555556', '#d8576b'],
          ['0.6666666666666666', '#ed7953'],
          ['0.7777777777777778', '#fb9f3a'],
          ['0.8888888888888888', '#fdca26'],
          ['1', '#f0f921'],
        ],
        sequentialminus: [
          ['0', '#0d0887'],
          ['0.1111111111111111', '#46039f'],
          ['0.2222222222222222', '#7201a8'],
          ['0.3333333333333333', '#9c179e'],
          ['0.4444444444444444', '#bd3786'],
          ['0.5555555555555556', '#d8576b'],
          ['0.6666666666666666', '#ed7953'],
          ['0.7777777777777778', '#fb9f3a'],
          ['0.8888888888888888', '#fdca26'],
          ['1', '#f0f921'],
        ],
      },
      hoverlabel: { align: 'left' },
      plot_bgcolor: '#E5ECF6',
      paper_bgcolor: 'white',
      shapedefaults: { line: { color: '#2a3f5f' } },
      annotationdefaults: {
        arrowhead: 0,
        arrowcolor: '#2a3f5f',
        arrowwidth: 1,
      },
    },
  },
};

const config = {
  responsive: true,
};

const RegretPlot = props => {
  return (
    <Plot
      id="regret"
      ref={props.ref}
      data={data}
      layout={layout}
      config={config}
      useResizeHandler={true}
      style={{ width: '100%' }}
      onHover={props.onHover}
    />
  );
};

class RegretConst extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <Plot
        ref={this.myRef}
        divId={this.props.divId}
        data={this.props.data}
        layout={this.props.layout}
        config={config}
        useResizeHandler={true}
        style={{ width: '100%' }}
        onHover={this.props.onHover}
        onUnhover={this.props.onUnhover}
      />
    );
  }
}

export { RegretPlot, RegretConst };
