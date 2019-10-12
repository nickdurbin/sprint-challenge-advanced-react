import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import PlayerCard from './components/PlayerCard';
import PlayerList from './components/PlayerList';
import NavBar from './components/NavBar';

afterEach(rtl.cleanup);

it('checking to see if elements are there', async () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.queryByTestId('mainContainer')
  expect(await element).toBeVisible();
})

test('checking to see if I can get a passed test', async () => {
  const wrapper = rtl.render(<NavBar />);
  expect(await wrapper.queryAllByText(/soccer/i));
});

test('checking the playerlist to be in the document', async () => {
  const wrapper = rtl.render(<PlayerCard key={player.id} playerData={player} />);
  const player = wrapper.getByText(/name/i);
  expect(await player).toBeInDocument();
})