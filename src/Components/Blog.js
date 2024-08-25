import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import {Skills,Education} from './Skills.js';
import Work from './Work.js';
import Contact from './Contact.js';
import Languages from './Languages.js';
import './fonts.css';
import React, { useState, useEffect, useRef } from 'react';

var navActive = function(section) {
  var el = document.querySelector('#navbar > ul');
  
  // Remove 'active' class from all 'li' elements
  el.querySelectorAll('li').forEach(li => {
    li.classList.remove('active');
  });

  // Add 'active' class to the matching 'li'
  if (section) {
    var activeLink = el.querySelector(`a[data-nav-section="${section}"]`);
    if (activeLink) {
      activeLink.closest('li').classList.add('active');
    }
  }
};

function Blog({ activeSection, setActiveSection }) {

  useEffect(() => {
    const sections = document.querySelectorAll('div[data-section]');

    const observerOptions = {
      root: null,
      rootMargin: '50% 0px 50% 0px',
      threshold: 0.5,
      // root: null,
      // rootMargin: '-50% 0px 0px 0px', // Top margin to center the section
      // threshold: 0.5, // Trigger the observer when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      let activeEntry = null;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!activeEntry || entry.intersectionRatio > activeEntry.intersectionRatio) {
            activeEntry = entry;
          }
        }
      });

      if (activeEntry) {
        const entrySection = activeEntry.target.getAttribute('data-section');
        setActiveSection(entrySection);
      }

    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [setActiveSection, activeSection]);

  // useEffect(() => {
  //   const sections = document.querySelectorAll('div[data-section]');

  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
      
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         let entrySection = entry.target.getAttribute('data-section');
  //         // activeSection = entry.target.getAttribute('data-section');
  //         setActiveSection(entrySection);
  //       }
  //     });

  //     // Remove 'active' class from all elements and add it to the one in view
  //     if (activeSection) {
  //       setActiveSection(activeSection);
  //       navActive(activeSection);
  //     }
  //   }, observerOptions);

  //   sections.forEach(section => observer.observe(section));

  //   return () => {
  //     sections.forEach(section => observer.unobserve(section));
  //   };
  // }, [setActiveSection]);


    return (
      <div className="Page" style={{ overflowY: 'auto', height: '100vh', overflowX: 'hidden' }}>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Education/>
        <Work/>
        <Languages/>
        <Contact/>
      </div>
    );
  }
  
  export default Blog;