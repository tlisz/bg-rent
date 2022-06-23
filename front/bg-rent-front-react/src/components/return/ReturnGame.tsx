import { useParams } from 'react-router-dom';

const ReturnGame: React.FC = () => {
  let { gameId } = useParams();
  return <h2>Return Game Page {gameId}</h2>;
};

export default ReturnGame;