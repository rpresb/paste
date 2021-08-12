import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {BackgroundColor, BorderColor} from '@twilio-paste/style-props';
import type {Variants} from './types';

export interface PrefixProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  variant?: Variants;
}

const Prefix = React.forwardRef<HTMLDivElement, PrefixProps>(({children, disabled, element, variant}, ref) => {
  let backgroundColor = 'colorBackground' as BackgroundColor;
  let borderColor = 'colorBorderWeaker' as BorderColor;
  if (disabled && variant === 'inverse') {
    backgroundColor = 'none';
    borderColor = 'colorBorderInverseWeaker';
  } else if (variant === 'inverse') {
    backgroundColor = 'colorBackgroundInverseStrong';
    borderColor = 'colorBorderInverse';
  }

  if (children == null) return null;
  return (
    <Box
      alignItems="flex-start"
      backgroundColor={backgroundColor}
      borderBottomLeftRadius="borderRadius20"
      borderRightColor={borderColor}
      borderRightStyle="solid"
      borderRightWidth="borderWidth10"
      borderTopLeftRadius="borderRadius20"
      display="flex"
      element={`${element}_PREFIX`}
      lineHeight="lineHeight20"
      padding="space30"
      ref={ref}
    >
      {children}
    </Box>
  );
});

Prefix.displayName = 'Prefix';

Prefix.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};

export {Prefix};
