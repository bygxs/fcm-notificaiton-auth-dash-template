// app/onboarding/page.tsx
import Link from 'next/link';

const Onboarding = () => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <p>Thank you for joining us. To get started, please set up your profile.</p>
      <Link href="/profile">
        <button>Go to Profile Setup</button>
      </Link>
    </div>
  );
};

export default Onboarding;


/* // app/onboarding/[step]/page.tsx
import { useRouter } from 'next/router';

const OnboardingStep = () => {
  const router = useRouter();
  const { step } = router.query; // Get the step from the query parameters

  if (typeof step !== 'string') {
    return <div>Loading...</div>; // Handle loading state or invalid step
  }

  switch (step) {
    case "welcome":
      return <div>Welcome to the App!</div>;
    case "profile-setup":
      return <div>Set up your profile.</div>;
    case "preferences":
      return <div>Select your preferences.</div>;
    case "confirmation":
      return <div>Onboarding complete!</div>;
    default:
      return <div>Invalid step.</div>;
  }
};

export default OnboardingStep;
 */