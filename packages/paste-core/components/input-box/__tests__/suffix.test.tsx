import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render, screen} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Suffix} from '../src';

expect.extend(matchers);

describe('HTML attributes', () => {
  it('should set a element data attribute for Suffix', () => {
    render(<Suffix element="foo">suffix</Suffix>);
    expect(screen.getByText('suffix').getAttribute('data-paste-element')).toEqual('foo_SUFFIX');
  });
});

describe('Customization', () => {
  it('should add custom styles to Suffix', (): void => {
    render(
      <CustomizationProvider
        baseTheme="default"
        elements={{
          foo_SUFFIX: {backgroundColor: 'colorBackground'},
        }}
      >
        <Suffix element="foo">suffix</Suffix>
      </CustomizationProvider>
    );
    const renderedInputBox = screen.getByText('suffix');
    expect(renderedInputBox).toHaveStyleRule('background-color', 'rgb(244,244,246)');
  });
});
