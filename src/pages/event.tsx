import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Text
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEvent } from '../hooks/use-event';

export function Event() {
  const navigate = useNavigate();
  const { id: eventId = '' } = useParams();
  const { data: event } = useEvent(eventId);

  const handleClickNavigate = () => navigate('/');

  return (
    <Container
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <Box ml="3">
          <Text fontWeight="bold">{event?.type}</Text>
          <Text marginTop={4} fontWeight="bold" fontSize="2xl">
            {event?.name}
            <Badge ml="1" colorScheme="purple">
              {event?.state}
            </Badge>
          </Text>
          <Text fontSize="sm">{event?.start_date}</Text>
          <Divider marginTop={4} />

          <Button onClick={handleClickNavigate} marginTop={8}>
            Go Back
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
