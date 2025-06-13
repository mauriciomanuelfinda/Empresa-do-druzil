// lib/analytics.js
import ReactGA from 'react-ga4';

export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId, {
    gaOptions: {
      debug_mode: process.env.NODE_ENV !== 'production'
    }
  });
};

export const logPageView = (path: string) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path 
  });
};

export const logEvent = (category = '', action = '', label = '') => {
  ReactGA.event({
    category,
    action,
    label
  });
};