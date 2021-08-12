import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface InputChevronWrapperProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
}

export const InputChevronWrapper = React.forwardRef<HTMLDivElement, InputChevronWrapperProps>(
  ({children, element}, ref) => (
    <Box
      alignItems="center"
      display="inline-flex"
      position="absolute"
      pointerEvents="none"
      right="space30"
      top="50%"
      transform="translateY(-50%)"
      zIndex="zIndex10"
      element={`${element}_CHEVRON_WRAPPER`}
      ref={ref}
    >
      {children}
    </Box>
  )
);

InputChevronWrapper.displayName = 'InputChevronWrapper';

InputChevronWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
