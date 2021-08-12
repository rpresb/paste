import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Prefix} from '../src';

expect.extend(matchers);

describe('HTML attributes', () => {
  it('should set a element data attribute for Prefix', () => {
    render(<Prefix element="foo">prefix</Prefix>);
    expect(screen.getByText('prefix').getAttribute('data-paste-element')).toEqual('foo_PREFIX');
  });
});

describe('Customization', () => {
  it('should add custom styles to Prefix', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo_PREFIX: {backgroundColor: 'colorBackground'},
        }}
      >
        <Prefix element="foo">prefix</Prefix>
      </CustomizationProvider>
    );
    const renderedInputBox = screen.getByText('prefix');
    expect(renderedInputBox).toHaveStyleRule('background-color', 'rgb(244,244,246)');
  });
});
