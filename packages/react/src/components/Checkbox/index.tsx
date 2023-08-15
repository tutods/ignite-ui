import type { ComponentProps } from 'react';

import { Check } from 'phosphor-react';

import { CheckboxContainer, CheckboxIndicator } from '@/components/Checkbox/styles';

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>;

export const Checkbox = (props: CheckboxProps) => (
  <CheckboxContainer {...props}>
    <CheckboxIndicator asChild>
      <Check weight="bold" />
    </CheckboxIndicator>
  </CheckboxContainer>
);

Checkbox.displayName = 'Checkbox';
