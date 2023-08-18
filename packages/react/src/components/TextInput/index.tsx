import type { ComponentProps, ElementRef } from 'react';
import { forwardRef } from 'react';

import { Input, Prefix, TextInputContainer } from '@/components/TextInput/styles';

export type TextInputProps = ComponentProps<typeof Input> & {
  /**
   * Static text to show before the input value
   */
  prefix?: string;
};

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }, ref) => (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input ref={ref} {...props} />
    </TextInputContainer>
  ),
);

TextInput.displayName = 'TextInput';
