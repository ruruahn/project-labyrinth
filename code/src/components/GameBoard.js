import React from 'react';
import { MainGame } from './MainGame';
import { StartPage } from './StartPage';
import { useSelector } from 'react-redux';
import { game } from 'reducers/game';
import EndPage from './EndPage';

const GameBoard = () => {
  const game = useSelector((state) => state.game);
  return <div>{game.username !== '' ? <MainGame /> : <StartPage />}</div>;
};

export default GameBoard;