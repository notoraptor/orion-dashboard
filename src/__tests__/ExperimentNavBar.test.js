import React from 'react';
import ExperimentNavBar from '../components/ExperimentNavBar';
import { render, fireEvent, screen } from '@testing-library/react';
import { settings } from 'carbon-components';

const { prefix } = settings;

test('Check if experiments are loaded', async () => {
  render(<ExperimentNavBar />);
  // `findByText` will wait for text to appear.
  // This let time to ExperimentNavBar to load experiments.
  expect(await screen.findByText(/2-dim-shape-exp/)).toBeInTheDocument();
  // Then, all other experiments should be already loaded.
  expect(screen.queryByText(/4-dim-cat-shape-exp/)).toBeInTheDocument();
  expect(screen.queryByText(/2-dim-exp/)).toBeInTheDocument();
  expect(screen.queryByText(/3-dim-cat-shape-exp/)).toBeInTheDocument();
  expect(screen.queryByText(/random-rosenbrock/)).toBeInTheDocument();
  expect(screen.queryByText(/tpe-rosenbrock/)).toBeInTheDocument();
  expect(screen.queryByText(/hyperband-cifar10/)).toBeInTheDocument();
});
