import React from 'react';
import { Text, Heading, Flex, Icon } from '@chakra-ui/react';

import { Section } from '../Section/Section';

import { ReactComponent as NodeIcon } from './Node.svg';
import { ReactComponent as ReactIcon } from './React.svg';
import { ReactComponent as PostgresIcon } from './Postgres.svg';
import { ReactComponent as TypescriptIcon } from './Typescript.svg';

function SectionWelcome() {
  return (
    <Section>
      <Text textAlign="center" fontSize={{ base: '2xl', lg: '6xl' }}>
        Hola Mundo!
      </Text>
      <Heading textAlign="center" fontSize={{ base: '5xl', lg: '8xl' }}>
        Soy Carlos Ruiz
      </Heading>
      <Text
        textAlign="center"
        fontSize={{ base: 'x-large', lg: '5xl' }}
        marginBottom="5rem"
      >
        Full Stack developer
      </Text>
      <Flex justifyContent="center" textAlign="center" columnGap="2rem">
        <Icon as={TypescriptIcon} boxSize={{ base: '6', lg: '10' }} />
        <Icon as={ReactIcon} boxSize={{ base: '6', lg: '10' }} />
        <Icon as={PostgresIcon} boxSize={{ base: '6', lg: '10' }} />
        <Icon as={NodeIcon} boxSize={{ base: '6', lg: '10' }} />
      </Flex>
    </Section>
  );
}

export { SectionWelcome };
