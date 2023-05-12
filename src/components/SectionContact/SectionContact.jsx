import React from 'react';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Divider,
  Box,
  Textarea,
  Button,
  Link,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

import { Section } from '../Section/Section';

import { ReactComponent as GithubIcon } from './Github.svg';
import { ReactComponent as LinkedInIcon } from './LinkedIn.svg';

function SectionContact() {
  const handleSubmit = event => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    }).then(() => {
      event.target.reset();
      alert('Mensaje Recibido. Gracias!');
    });
  };

  return (
    <Section>
      <Heading size="xl" id="contact" marginBottom="4rem">
        Contacto
      </Heading>
      <Flex
        height="500px"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'normal', lg: 'center' }}
      >
        <Box
          as="form"
          maxWidth="500px"
          width="100%"
          paddingRight={{ base: 0, lg: '4rem' }}
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <Heading as="h3" size="md" marginBottom="2rem">
            Deja tu mensaje
          </Heading>
          <FormControl isRequired marginBottom="2rem">
            <FormLabel>Nombre</FormLabel>
            <Input placeholder="Nombre" name="name" />
          </FormControl>
          <FormControl isRequired marginBottom="2rem">
            <FormLabel>Apellidos</FormLabel>
            <Input placeholder="Apellidos" name="lastName" />
          </FormControl>
          <FormControl isRequired marginBottom="2rem">
            <FormLabel>Correo electrónico</FormLabel>
            <Input placeholder="Corre electrónico" type="email" name="email" />
          </FormControl>
          <FormControl isRequired marginBottom="1rem">
            <FormLabel>Deja aquí tu mensaje</FormLabel>
            <Textarea placeholder="Mensaje" name="message" />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit" marginBottom="4rem">
            Submit
          </Button>
        </Box>
        <Divider
          orientation="vertical"
          paddingLeft="2rem"
          paddingRight="2rem"
        />
        <Box order={{ base: -1, lg: 0 }} marginBottom={{ base: '6rem', lg: 0 }}>
          <Heading as="h3" size="md" marginBottom="2rem">
            Mi información de contacto
          </Heading>
          <Flex flexDirection="column" rowGap="2rem" color="gray.300">
            <Link href="mailto:carlos_ruiz1002@hotmail.com">
              <EmailIcon marginRight="1rem" />
              carlos_ruiz1002@hotmail.com
            </Link>
            <Link href="tel:+52221-233-9929">
              <PhoneIcon marginRight="1rem" />
              +52 221-233-99-29
            </Link>
            <Link
              href="https://github.com/Carlos24Rz"
              target="_blank"
              display="flex"
              alignItems="center"
            >
              <Icon
                as={GithubIcon}
                marginRight="1rem"
                boxSize="6"
                fill="gray.300"
              />
              Carlos24Rz
            </Link>
            <Link
              href="https://www.linkedin.com/in/carlos-eduardo-ruiz-lira/"
              target="_blank"
              display="flex"
              alignItems="center"
            >
              <Icon
                as={LinkedInIcon}
                marginRight="1rem"
                boxSize="6"
                fill="gray.300"
              />
              Carlos Eduardo Ruiz Lira
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Section>
  );
}

export { SectionContact };
