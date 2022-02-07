import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CloseFilled16 } from '@carbon/icons-react';
import { Backend } from '../../utils/queryServer';
import { BackendContext } from '../../BackendContext';

import {
  SideNav,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell,
  Search,
} from 'carbon-components-react';

import { settings } from 'carbon-components';

const { prefix } = settings;

export class ExperimentNavBar extends React.Component {
  static contextType = BackendContext;
  constructor(props) {
    super(props);
    this.state = {
      experiments: null,
    };
  }
  render() {
    return (
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation">
        <StructuredListWrapper selection>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>{''}</StructuredListCell>
              <StructuredListCell head>Experiment</StructuredListCell>
              <StructuredListCell head>Status</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            {this.state.experiments === null
              ? 'Loading experiments ...'
              : this.state.experiments.length === 0
              ? 'No experiment available'
              : this.renderExperimentsList(this.state.experiments)}
          </StructuredListBody>
        </StructuredListWrapper>
        <Search labelText="Search experiment" />
      </SideNav>
    );
  }
  renderExperimentsList(experiments) {
    return experiments.map((experiment, i) => (
      <StructuredListRow label key={`row-${i}`}>
        <StructuredListInput
          id={`row-${i}`}
          value={`row-${i}`}
          title={`row-${i}`}
          name="row-0"
          defaultChecked={!i || null}
        />
        <StructuredListCell>
          <CloseFilled16
            className={`${prefix}--structured-list-svg`}
            aria-label="unselect experiment">
            <title>select an option</title>
          </CloseFilled16>
        </StructuredListCell>
        <StructuredListCell>
          [{i + 1}] {experiment}
        </StructuredListCell>
        <StructuredListCell>
          <ProgressBar>
            <ProgressBar variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar variant="danger" now={10} key={3} />
            <ProgressBar variant="info" now={15} key={4} />
          </ProgressBar>
        </StructuredListCell>
      </StructuredListRow>
    ));
  }
  componentDidMount() {
    const backend = new Backend(this.context.address);
    backend
      .query('experiments')
      .then(results => {
        const experiments = results.map(experiment => experiment.name);
        experiments.sort();
        this.setState({ experiments });
      })
      .catch(error => {
        this.setState({ experiments: [] });
      });
  }
}

export default ExperimentNavBar;
