import { Label, MultiStepContainer, Step, Steps } from '@/components/MultiStep/styles';

export type MultiStepProps = {
  size: number;
  currentStep?: number;
};

export const MultiStep = ({ size, currentStep = 0 }: MultiStepProps) => (
  <MultiStepContainer>
    <Label>
      Passo {currentStep} de {size}
    </Label>

    <Steps css={{ '--steps-size': size }}>
      {Array.from({ length: size }, (_, i) => i + 1).map(step => (
        <Step key={step} active={currentStep >= step} />
      ))}
    </Steps>
  </MultiStepContainer>
);

MultiStep.displayName = 'MultiStep';
