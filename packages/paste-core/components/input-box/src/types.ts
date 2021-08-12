import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';

export type InputBoxTypes = 'text' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'date' | 'time';
export type Variants = 'default' | 'inverse';

export interface FauxInputProps extends Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
  type?: InputBoxTypes;
  variant?: Variants;
}

export const FauxInputPropTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  element: PropTypes.string,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel', 'date', 'time']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};
