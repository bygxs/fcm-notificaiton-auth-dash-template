// app/onboarding/page.tsx
import { FC } from 'react';
import { useRouter } from 'next/router';

interface OnboardingStepProps {
  params: {
    step: string;
  };
}

const OnboardingStep: FC<OnboardingStepProps> = ({ params }) => {
  const { step } = params;

  if (step === "welcome") {
    return <div>Welcome to the App!</div>;
  } else if (step === "profile-setup") {
    return <div>Set up your profile.</div>;
  } else if (step === "preferences") {
    return <div>Select your preferences.</div>;
  } else if (step === "confirmation") {
    return <div>Onboarding complete!</div>;
  }

  return <div>Invalid step.</div>;
};

export default OnboardingStep;
