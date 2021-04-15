import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setBreakpoint } from '../../actions';
import { breakpoints } from '../variables';

// eslint-disable-next-line no-shadow
const GlobalStateCmp = ({ breakpoint, setBreakpoint }) => {
  const getBreakpoint = () => {
    const width = window.innerWidth;
    const { md, lg, xl } = breakpoints;

    if (width >= md && width < lg) {
      return 'md';
    }
    if (width >= lg && width < xl) {
      return 'lg';
    }
    if (width >= xl) {
      return 'xl';
    }
    return 'sm';
  };
  const handleResize = () => {
    const newBreakpoint = getBreakpoint();

    if (newBreakpoint !== breakpoint) {
      setBreakpoint(newBreakpoint);
    }
  };

  useEffect(() => {
    const newBreakpoint = getBreakpoint();
    setBreakpoint(newBreakpoint);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return false;
};

export const GlobalState = connect(
  (state) => ({
    breakpoint: state.app.breakpoint,
  }),
  {
    setBreakpoint,
  },
)(GlobalStateCmp);

GlobalStateCmp.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  setBreakpoint: PropTypes.func.isRequired,
};
