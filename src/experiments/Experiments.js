import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import ExperimentNavBar from './components/ExperimentNavBar';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import StatusPage from './content/StatusPage';
import VisualizationsPage from './content/VisualizationsPage';
import DatabasePage from './content/DatabasePage';
import ConfigurationPage from './content/ConfigurationPage';
import { BackendContext } from './BackendContext';
import { DEFAULT_BACKEND } from '../utils/queryServer';

export class Experiments extends Component {
  constructor(props) {
    super(props);
    // Store selected experiment here
    this.state = { experiment: null, page: 'landing' };
    this.onSelectExperiment = this.onSelectExperiment.bind(this);
    this.onSelectPage = this.onSelectPage.bind(this);
  }
  render() {
    return (
      <>
        <BackendContext.Provider
          value={{
            address: DEFAULT_BACKEND,
            // Pass selected experiment as React context
            // so that it is available in route components
            experiment: this.state.experiment,
          }}>
          <TutorialHeader onSelectPage={this.onSelectPage} />
          <ExperimentNavBar onSelectExperiment={this.onSelectExperiment} />
          <Content>{this.renderPage()}</Content>
        </BackendContext.Provider>
      </>
    );
  }
  renderPage() {
    switch (this.state.page) {
      case 'landing':
        return <LandingPage />;
      case 'status':
        return <StatusPage />;
      case 'visualizations':
        return <VisualizationsPage />;
      case 'database':
        return <DatabasePage />;
      case 'configuration':
        return <ConfigurationPage />;
      default:
        break;
    }
  }
  onSelectExperiment(experiment) {
    this.setState({ experiment });
  }
  onSelectPage(page) {
    this.setState({ page });
  }
}
