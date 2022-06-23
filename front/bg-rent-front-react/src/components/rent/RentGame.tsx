import { useParams } from 'react-router-dom';

const RentGame: React.FC = () => {
  let { gameId } = useParams();
  return <h2>Rent Game Page {gameId}</h2>;
};

export default RentGame;
