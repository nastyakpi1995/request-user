import React from 'react';
import renderer from 'react-test-renderer';
import CreatePeople from '../Index';

it('renders correctly', () => {
  const component = renderer.create(<CreatePeople/>).toJSON();

  expect(component).toMatchSnapshote;
});
