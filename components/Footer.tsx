"use client"
import React, { useState, useEffect } from 'react';
import { faLinkedinIn, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const quotes = [
    'Turning dreams into reality, one project at a time.',
    'Innovation distinguishes between a leader and a follower.',
    'Your imagination is your only limit. Let’s push it together!',
    'Creativity is intelligence having fun.',
    'Design is not just what it looks like and feels like. Design is how it works.',
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Determine the quote index based on the scroll position
      const index = Math.floor((scrollPosition / (document.body.scrollHeight - window.innerHeight)) * quotes.length);

      // Update the current quote index
      setCurrentQuoteIndex(index);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [quotes.length]);
  const socialMediaLinks = [
    {
      href: 'https://www.linkedin.com/in/bitisha-maharjan-40862b241/',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: <FontAwesomeIcon icon={faLinkedinIn} className='text-gray-600 hover:text-blue-500' />,
    },
    {
      href: 'https://twitter.com/bitisha_',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: <FontAwesomeIcon icon={faTwitter} className='text-gray-600 hover:text-blue-400' />,
    },
    {
      href: 'mailto:racerfire321@gmail.com',
      icon: <FontAwesomeIcon icon={faEnvelope} className='text-gray-600 hover:text-green-500' />,
    },
    {
      href: 'https://github.com/racerfire321',
      icon: <FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-green-500' />,
    },
  ];

  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; 2023 Bitisha. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'><span className=' font-extrabold text-md'>Quote of the day </span> : {quotes[currentQuoteIndex]}</span>
      </p>
      <div className='mt-4 flex justify-center space-x-4'>
        {socialMediaLinks.map((link, index) => (
          <a key={index} href={link.href} target={link.target} rel={link.rel} className='transition-colors duration-300'>
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
