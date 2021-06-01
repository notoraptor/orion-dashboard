import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Orion Dashboard">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="Oríon">
          Dashboard
        </HeaderName>
        <HeaderNavigation aria-label="Oríon Dashboard">
          <HeaderMenuItem element={Link} to="/status">
            Status
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/visualizations">
            Visualizations
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/database">
            Database
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/configuration">
            Configuration
          </HeaderMenuItem>
        </HeaderNavigation>
      </Header>
    )}
  />
);

export default TutorialHeader;
