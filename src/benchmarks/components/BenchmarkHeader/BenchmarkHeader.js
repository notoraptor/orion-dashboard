import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react';
import { Link } from 'react-router-dom';

const BenchmarkHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Orion Dashboard">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="Oríon" replace>
          Dashboard
        </HeaderName>
        <HeaderNavigation aria-label="Oríon Dashboard">
          <HeaderMenuItem element={Link} to="/" replace>
            <strong>Experiments</strong>
          </HeaderMenuItem>
        </HeaderNavigation>
      </Header>
    )}
  />
);

export default BenchmarkHeader;
