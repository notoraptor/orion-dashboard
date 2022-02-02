import { queryServer } from '../utils/queryServer';

test('test queryServer', () => {
  // Return promise to make sure jest will test async function
  return queryServer('').then(response => {
    expect(response.hasOwnProperty('orion')).toBeTruthy();
    expect(response.server).toBe('gunicorn');
    expect(response.database).toBe('PickledDB');
  });
});

test('test query experiments', () => {
  return queryServer('experiments').then(response => {
    expect(response.length).toBe(7);
    const experiments = new Set(response.map(experiment => experiment.name));
    expect(experiments.has('2-dim-shape-exp')).toBeTruthy();
    expect(experiments.has('4-dim-cat-shape-exp')).toBeTruthy();
    expect(experiments.has('2-dim-exp')).toBeTruthy();
    expect(experiments.has('3-dim-cat-shape-exp')).toBeTruthy();
    expect(experiments.has('random-rosenbrock')).toBeTruthy();
    expect(experiments.has('tpe-rosenbrock')).toBeTruthy();
    expect(experiments.has('hyperband-cifar10')).toBeTruthy();
  });
});
