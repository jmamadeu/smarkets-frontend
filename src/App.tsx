import { usePopularEventIds } from './hooks/use-popular-event-ids';

function App() {
  const { data } = usePopularEventIds();
  console.log(data, 'teste');
  return (
    <div>
      <h1>Project init</h1>
    </div>
  );
}

export default App;
