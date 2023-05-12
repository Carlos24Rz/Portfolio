import React from 'react';
import {
  Heading,
  Grid,
  GridItem,
  Image,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

import { Section } from '../Section/Section';
import { Card } from '../Card/Card';

import traffic from './images/Traffic.png';
import alertaCan from './images/AlertaCan.png';
import amikooBot from './images/Chatbot.png';

const TRAFFIC_TAGS = ['ThreeJS', 'Flask', 'Express', 'Mesa', 'Docker'];
const ALERTA_TAGS = ['Java', 'Firebase', 'Places API'];
const AMIKOO_TAGS = ['JavaScript', 'MySQL', 'FastAPI'];

function SectionProjects() {
  return (
    <Section>
      <Heading id="projects" size="xl" marginBottom="4rem">
        Proyectos
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(auto-fill,24rem)' }}
        gap={6}
      >
        <GridItem w="100%" _hover={{ transform: 'scale(1.1)' }}>
          <LinkBox>
            <LinkOverlay
              href="https://github.com/JAngelGC/TrafficBackend"
              target="_blank"
            >
              <Card
                title="Traffic Simulator"
                date="Octubre 2022 - Diciembre 2022"
                description="Modelado de un sistema web multiagente en 3D para la optimización del tráfico creado con el framework de Python Mesa. El backend está construido con Express.js y una Flask API que envía los pasos del modelo por agente en lotes al
                        front-end, mejorando el rendimiento. El Front y el Back se montaron en contenedores de Docker separados para aislar los servicios y proporcionar
                        mayor escalabilidad"
                tags={TRAFFIC_TAGS}
              >
                <Image src={traffic} alt="Traffic Simulator" width="100%" />
              </Card>
            </LinkOverlay>
          </LinkBox>
        </GridItem>
        <GridItem w="100%" _hover={{ transform: 'scale(1.1)' }}>
          <LinkBox>
            <LinkOverlay
              href="https://github.com/Carlos24Rz/AlertaCan"
              target="_blank"
            >
              <Card
                title="AlertaCan"
                date="Enero 2022 - Junio 2022"
                description="Aplicación móvil para Android que ayuda a encontrar perros perdidos para Kairen A.C, una ONG con sede en Puebla. La aplicación funciona como una red social, donde los usuarios pueden publicar perros perdidos y recibir alertas al respecto, así como ver perros perdidos y
            Perros callejeros publicados por la comunidad. La App cuenta con un algoritmo de coincidencia de perros que encuentra perros similares en la base de datos usando un índice de similitud basado en
            sus atributos"
                tags={ALERTA_TAGS}
              >
                <Image src={alertaCan} alt="AlertaCan" width="100%" />
              </Card>
            </LinkOverlay>
          </LinkBox>
        </GridItem>
        <GridItem w="100%" _hover={{ transform: 'scale(1.1)' }}>
          <LinkBox>
            <LinkOverlay
              href="https://github.com/Carlos24Rz/Construccion_Software"
              target="_blank"
            >
              <Card
                title="AmikooBot"
                date="Febrero 2021 - Junio 2021"
                description="Un chatbot web basado en reglas para el sitio web de Naatik A.I. Solutions. Se desarrolló una API utilizando FastAPI y MySQL para almacenar y obtener respuestas a las preguntas más frecuentes. Además, se desarrolló una plataforma de administrador con HTML, CSS, JavaScript, PHP y MySQL para llevar a cabo operaciones CRUD 
            así como el  seguimiento de la interacción del usuario con la plataforma."
                tags={AMIKOO_TAGS}
              >
                <Image src={amikooBot} alt="AmikooBot" width="100%" />
              </Card>
            </LinkOverlay>
          </LinkBox>
        </GridItem>
      </Grid>
    </Section>
  );
}

export { SectionProjects };
