import React from 'react';
import ExperimentNavBar from '../components/ExperimentNavBar';
import { render, fireEvent, screen } from '@testing-library/react';
import { settings } from 'carbon-components';
import { BackendContext } from '../BackendContext';

test('Check if experiments are loaded', async () => {
  // ExperimentNavBar will be rendered with default value associated to BackendContext.
  render(<ExperimentNavBar />);
  // `findByText` will wait for text to appear.
  // This let time for ExperimentNavBar to load experiments.
  expect(await screen.findByText(/2-dim-shape-exp/)).toBeInTheDocument();
  // Then, all other experiments should be already loaded.
  expect(screen.queryByText(/4-dim-cat-shape-exp/)).toBeInTheDocument();
  expect(screen.queryByText(/2-dim-exp/)).toBeInTheDocument();
  expect(screen.queryByText(/3-dim-cat-shape-exp/)).toBeInTheDocument();
  expect(screen.queryByText(/random-rosenbrock/)).toBeInTheDocument();
  expect(screen.queryByText(/tpe-rosenbrock/)).toBeInTheDocument();
  expect(screen.queryByText(/hyperband-cifar10/)).toBeInTheDocument();
});

test('Check experiments display when backend call fails', async () => {
  render(
    <BackendContext.Provider value={{ address: 'http://localhost:1' }}>
      <ExperimentNavBar />
    </BackendContext.Provider>
  );
  // `findByText` will wait for text to appear.
  // This let time for ExperimentNavBar to try backend call.
  expect(
    await screen.findByText(/No experiment available/)
  ).toBeInTheDocument();
  // Then, we must not find any of expected experiments.
  expect(screen.queryByText(/2-dim-shape-exp/)).toBeNull();
  expect(screen.queryByText(/4-dim-cat-shape-exp/)).toBeNull();
  expect(screen.queryByText(/2-dim-exp/)).toBeNull();
  expect(screen.queryByText(/3-dim-cat-shape-exp/)).toBeNull();
  expect(screen.queryByText(/random-rosenbrock/)).toBeNull();
  expect(screen.queryByText(/tpe-rosenbrock/)).toBeNull();
  expect(screen.queryByText(/hyperband-cifar10/)).toBeNull();
});
