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

const TutorialHeader = props => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Orion Dashboard">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName>
          <span
            className="span-link"
            onClick={() => props.onSelectPage('landing')}>
            Dashboard
          </span>
        </HeaderName>
        <HeaderNavigation aria-label="Oríon Dashboard">
          <HeaderMenuItem>
            <span
              className="span-link"
              onClick={() => props.onSelectPage('status')}>
              Status
            </span>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <span
              className="span-link"
              onClick={() => props.onSelectPage('visualizations')}>
              Visualizations
            </span>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <span
              className="span-link"
              onClick={() => props.onSelectPage('database')}>
              Database
            </span>
          </HeaderMenuItem>
          <HeaderMenuItem>
            <span
              className="span-link"
              onClick={() => props.onSelectPage('configuration')}>
              Configuration
            </span>
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/benchmarks" replace>
            <strong>Benchmarks</strong>
          </HeaderMenuItem>
        </HeaderNavigation>
      </Header>
    )}
  />
);

export default TutorialHeader;
