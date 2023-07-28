import * as Checkbox from '@radix-ui/react-checkbox';

import { styled } from '@/styles';

export const CheckboxContainer = styled(Checkbox.Root, {
  backgroundColor: '',
  height: '$6',
  width: '$6',
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {});
