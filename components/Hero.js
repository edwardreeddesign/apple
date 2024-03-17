'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? '/videos/smallHero.mp4' : '/videos/hero.mp4'
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc('/videos/smallHero.mp4');
    } else {
      setVideoSrc('/videos/Hero.mp4');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 1.5,
      ease: 'power4.in',
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">Iphone 15 Pro</p>
        <div className="w-9/12 sm:w-10/12">
          <video
            src={videoSrc}
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
