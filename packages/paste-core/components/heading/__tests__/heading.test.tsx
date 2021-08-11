import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {matchers} from 'jest-emotion';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Heading} from '../src';

expect.extend(matchers);

describe('Heading', () => {
  describe('Render', () => {
    it('should render an H1 at fontSize90', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h1" variant="heading10">
            This is an H1
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render an H2 at fontSize70', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h2" variant="heading20">
            This is an H2
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render an H3 at fontSize60', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h3" variant="heading30">
            This is an H3
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render an H4 at fontSize40', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h4" variant="heading40">
            This is an H4
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render an H5 at fontSize30', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h5" variant="heading50">
            This is an H5
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render an H6 at fontSize20', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h6" variant="heading60">
            This is an H6
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render an italic H2 at fontSize50', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h2" variant="heading20">
            <i>This is an italic H2</i>
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render with no margin', (): void => {
      const {asFragment} = render(
        <Theme.Provider theme="default">
          <Heading as="h2" marginBottom="space0" variant="heading10">
            no margin heading
          </Heading>
          <Heading as="h2" marginBottom="space0" variant="heading20">
            no margin heading
          </Heading>
          <Heading as="h2" marginBottom="space0" variant="heading30">
            no margin heading
          </Heading>
          <Heading as="h2" marginBottom="space0" variant="heading40">
            no margin heading
          </Heading>
          <Heading as="h2" marginBottom="space0" variant="heading50">
            no margin heading
          </Heading>
          <Heading as="h2" marginBottom="space0" variant="heading60">
            no margin heading
          </Heading>
        </Theme.Provider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('HTML attributes', () => {
    it('should set a element data attribute for Heading', () => {
      render(
        <Heading as="h1" variant="heading10">
          heading
        </Heading>
      );
      expect(screen.getByRole('heading').getAttribute('data-paste-element')).toEqual('HEADING');
    });
    it('should set a custom element data attribute for Heading', () => {
      render(
        <Heading as="h1" variant="heading10" element="foo">
          heading
        </Heading>
      );
      expect(screen.getByRole('heading').getAttribute('data-paste-element')).toEqual('foo');
    });
  });

  describe('Customization', () => {
    it('should add custom styles to Heading', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{HEADING: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
        >
          <Heading as="h1" variant="heading10">
            Custom heading
          </Heading>
        </CustomizationProvider>
      );
      const renderedHeading = screen.getByRole('heading');
      expect(renderedHeading).toHaveStyleRule('background-color', 'rgb(244,244,246)');
      expect(renderedHeading).toHaveStyleRule('color', 'rgb(96,107,133)');
    });

    it('should add custom styles to Heading with a custom element data attribute', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{foo: {color: 'colorTextWeak', backgroundColor: 'colorBackground'}}}
        >
          <Heading as="h1" variant="heading10" element="foo">
            Custom heading
          </Heading>
        </CustomizationProvider>
      );
      const renderedHeading = screen.getByRole('heading');
      expect(renderedHeading).toHaveStyleRule('background-color', 'rgb(244,244,246)');
      expect(renderedHeading).toHaveStyleRule('color', 'rgb(96,107,133)');
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const {container} = render(
        <Theme.Provider theme="default">
          <Heading as="h1" variant="heading10">
            This is an H1
          </Heading>
          <Heading as="h2" variant="heading20">
            This is an H2
          </Heading>
          <Heading as="h3" variant="heading30">
            This is an H3
          </Heading>
          <Heading as="h4" variant="heading40">
            This is an H4
          </Heading>
          <Heading as="h5" variant="heading50">
            This is an H5
          </Heading>
          <Heading as="h6" variant="heading60">
            This is an H6
          </Heading>
        </Theme.Provider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
