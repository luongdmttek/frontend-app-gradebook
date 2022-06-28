import React from 'react';
import { shallow } from 'enzyme';

import { getConfig } from 'frontend-platform-vi';

import Header from '.';

jest.mock('@edx/paragon', () => ({
  Hyperlink: () => 'Hyperlink',
}));
jest.mock('frontend-platform-vi', () => ({
  getConfig: jest.fn(),
}));

describe('Header', () => {
  test('snapshot - has edx link with logo url', () => {
    const url = 'www.ourLogo.url';
    getConfig.mockReturnValue({ LOGO_URL: url });
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
