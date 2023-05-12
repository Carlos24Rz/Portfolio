import React from 'react';
import { Box } from '@chakra-ui/react';

import './Section.css';

function Section({ children, styles }) {
  return (
    <Box as="section" className="section-container" {...styles}>
      {children}
    </Box>
  );
}

export { Section };
