import React from 'react';
import {
  Heading,
  Card as ChakraCard,
  CardBody,
  Stack,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react';

function Card(props) {
  return (
    <ChakraCard maxW="sm">
      <CardBody>
        {props.children}
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.title}</Heading>
          <Text size="sm" color="gray.200">
            {props.date}
          </Text>
          <Text>{props.description}</Text>
          <Divider />
          <Wrap>
            {props.tags.map(tag => (
              <WrapItem key={`Tag-${tag}`}>
                <Tag>{tag}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </CardBody>
    </ChakraCard>
  );
}

export { Card };
