import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// image
import HyundaiTransysLogo from '../images/HyundaiTransysLogo.png';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
};

export default function Logo({ disabledLink = false }) {

  const logo  = <img src = {HyundaiTransysLogo} alt="HyundaiTransysLogo" width="190" height="50" />

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
