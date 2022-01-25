import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Application32, Globe32, PersonFavorite32 } from '@carbon/icons-react';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <>
      <h4>Landing Page</h4>
    </>
  );
};

export default LandingPage;
