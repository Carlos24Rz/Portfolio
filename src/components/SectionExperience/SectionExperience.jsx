import React from 'react';
import { Heading, Flex, Image } from '@chakra-ui/react';

import { Section } from '../Section/Section';
import { Card } from '../Card/Card';

import ellucian from './Ellucian.svg';

const TAGS = ['React', 'MUI', 'Jest', 'Selenium'];

function SectionExperience() {
  return (
    <Section>
      <Heading id="experience" size="xl" marginBottom="4rem">
        Experiencia
      </Heading>
      <Flex justifyContent="center" alignItems="center">
        <Card
          title="Ellucian | R&D Intern"
          date="Enero 2023 - Agosto 2023"
          description="Ellucian es el proveedor líder de soluciones tecnológicas para
                la educación superior. En esta pasantía tuve la oportunidad de
                colaborar de forma remota con un equipo basado en E.U. para
                desarrollar las nuevas funcionalidades del Ellucian Experience
                Toolkit"
          tags={TAGS}
        >
          <Image
            src={ellucian}
            alt="Ellucian"
            fill="white"
            width="5rem"
            borderRadius="full"
            backgroundColor="whiteAlpha.700"
          />
        </Card>
      </Flex>
    </Section>
  );
}

export { SectionExperience };
