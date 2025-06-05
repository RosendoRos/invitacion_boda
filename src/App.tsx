import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Countdown } from './components/Countdown';
import { OurStory } from './components/OurStory';
import { Location } from './components/Location';
import { RsvpForm } from './components/RsvpForm';
import { Footer } from './components/Footer';
import { Fireworks } from './components/Fireworks';

function App() {
  const [showFireworks, setShowFireworks] = React.useState(true);

  useEffect(() => {
    // Hide fireworks after 6 seconds
    const timeout = setTimeout(() => {
      setShowFireworks(false);
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="font-sans text-primary-dark bg-primary-light">
      {showFireworks && <Fireworks />}
      <Header />
      <Countdown />
      <OurStory />
      <Location />
      <RsvpForm />
      <Footer />
    </div>
  );
}

export default App;