import React, { useState } from 'react';
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';

interface OnboardingScreenProps {
  onComplete: () => void;
  onSkip: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  onComplete,
  onSkip,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleGetStarted = () => {
    // Get Started always redirects to main app
    onComplete();
  };

  const handleSkip = () => {
    // Skip navigates to next onboarding screen
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    } else {
      // If on last screen, skip also completes onboarding
      onComplete();
    }
  };

  // Render the appropriate screen based on currentPage
  switch (currentPage) {
    case 0:
      return (
        <OnboardingScreen1
          onGetStarted={handleGetStarted}
          onSkip={handleSkip}
        />
      );
    case 1:
      return (
        <OnboardingScreen2
          onGetStarted={handleGetStarted}
          onSkip={handleSkip}
        />
      );
    case 2:
      return (
        <OnboardingScreen3
          onGetStarted={handleGetStarted}
          onSkip={handleSkip}
        />
      );
    default:
      return (
        <OnboardingScreen1
          onGetStarted={handleGetStarted}
          onSkip={handleSkip}
        />
      );
  }
};

export default OnboardingScreen;
