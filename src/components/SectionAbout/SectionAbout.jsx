import React from 'react';
import { Heading, Text, Image, Flex } from '@chakra-ui/react';

import { Section } from '../Section/Section';

import profilePicture from './Me.jpeg';

function SectionAbout() {
  return (
    <Section>
      <Heading id="about" size="xl" marginBottom={{ base: '2rem', lg: '6rem' }}>
        Sobre mí
      </Heading>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'normal', md: 'center' }}
      >
        <Flex
          flexShrink="0"
          width="40%"
          justifyContent="center"
          alignItems="center"
          marginBottom={{ base: '2rem', lg: 0 }}
        >
          <Image
            borderRadius="full"
            src={profilePicture}
            alt="Carlos Ruiz"
            width="13rem"
          />
        </Flex>
        <Text>
          La tecnología ha revolucionado la forma en que vivimos. Quiero ser
          parte de la revolución. <br /> <br />
          Soy un estudiante de Ciencias de la Computación actual en el
          Tecnológico de Monterrey interesado en el Desarrollo de Software.
          Tengo experiencia con el desarrollo de Full Stack, usando HTML, CSS,
          JS y React para crear interfaces de usuario receptivas y fáciles de
          usar, al mismo tiempo que creo arquitecturas cliente-servidor sólidas
          con Node.js y PostgreSQL. También tengo experiencia en la construcción
          y manejo de RestAPI con Express y Python usando FastAPI. <br /> A lo
          largo de la universidad, he podido trabajar con múltiples lenguajes de
          programación, desde lenguajes orientados a objetos como C++ y Java,
          hasta lenguajes funcionales como Elixir, incluso he explorado el
          desarrollo móvil para Android. Siempre estoy abierto a aprender nuevos
          lenguajes y tecnologías en una industria que evoluciona día a día.
        </Text>
      </Flex>
    </Section>
  );
}

export { SectionAbout };
