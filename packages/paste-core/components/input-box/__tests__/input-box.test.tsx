import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {InputBox} from '../src';

expect.extend(matchers);

describe('HTML attributes', () => {
  it('should set a element data attribute for InputBox', () => {
    render(<InputBox element="foo">input-box</InputBox>);
    expect(screen.getByText('input-box').getAttribute('data-paste-element')).toEqual('foo');
  });
});

describe('Customization', () => {
  it('should add custom styles to InputBox', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo: {backgroundColor: 'colorBackground'},
        }}
      >
        <InputBox element="foo">input-box</InputBox>
      </CustomizationProvider>
    );
    const renderedInputBox = screen.getByText('input-box');
    expect(renderedInputBox).toHaveStyleRule('background-color', 'rgb(244,244,246)');
  });
});
