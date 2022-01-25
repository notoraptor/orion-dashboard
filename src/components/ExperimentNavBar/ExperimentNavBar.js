import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CloseFilled16 } from '@carbon/icons-react';

import {
  SideNav,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell,
  StructuredListSkeleton,
  Search,
} from 'carbon-components-react';

import { settings } from 'carbon-components';

const { prefix } = settings;

export const ExperimentNavBar = () => {
  const structuredListBodyRowGenerator = numRows => {
    return Array.apply(null, Array(numRows)).map((n, i) => (
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
        <StructuredListCell>Name {i}</StructuredListCell>
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
  };
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
          {structuredListBodyRowGenerator(4)}
        </StructuredListBody>
      </StructuredListWrapper>
      <Search />
    </SideNav>
  );
};

export default ExperimentNavBar;
