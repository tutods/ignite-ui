import type { ComponentProps } from 'react';

import { Input, Prefix, TextInputContainer } from '@/components/TextInput/styles';

export type TextInputProps = ComponentProps<typeof Input> & {
  /**
   * Static text to show before the input value
   */
  prefix?: string;
};

export const TextInput = ({ prefix, ...props }: TextInputProps) => (
  <TextInputContainer>
    {!!prefix && <Prefix>{prefix}</Prefix>}

    <Input {...props} />
  </TextInputContainer>
);
