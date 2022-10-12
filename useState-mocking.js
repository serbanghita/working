import React, { useState as useStateMock } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('testing useState mocked', () => {
  const setState = jest.fn();
  const useStateMock = (initState: any) => [initState, setState];

  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  // your tests goes here
});
