import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Container,
  Spinner,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { useState } from 'react';
import { v4 } from 'uuid';
import { SideBar } from './components/side-bar';
import { useEvents } from './hooks/use-events';
import { EVENTS_TYPES } from './models/events';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(EVENTS_TYPES[0]);

  const {
    data: events,
    isLoading,
    error
  } = useEvents({ type: selectedEvent.key });

  return (
    <>
      <SideBar getCurrentMenu={(event) => setSelectedEvent(event)} />
      <Container maxW="container.lg">
        {isLoading && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="3xl" textAlign="center">
              The events are loading
            </Text>
            <Spinner marginTop={8} justifyContent="center" size="xl" />
          </Box>
        )}
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>{error?.name}</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        )}

        {!isLoading && !error && (
          <>
            <Text fontSize="2xl" marginBottom={8} textAlign="center">
              See the latest {selectedEvent.name} events
            </Text>
            <Table variant="striped" colorScheme="teal" size="lg">
              <TableCaption>the latest events</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>State</Th>
                  <Th>Start Data</Th>
                </Tr>
              </Thead>
              <Tbody>
                {events?.map((event) => (
                  <Tr key={v4()}>
                    <Td>{event?.name}</Td>
                    <Td>{event?.state}</Td>
                    <Td>{event?.start_date}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
