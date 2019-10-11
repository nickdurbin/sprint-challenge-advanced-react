import React from 'react';

function PlayerCard({ playerData }) {
  return (
    <div className='playerCard'>
      <h2 data-testid='playerName'>{playerData.name}</h2>
				<h3 data-testid='playerCountry'>{playerData.country}</h3>
				<h4 data-testid='playerSearches'>
					Searches: {playerData.searches}
				</h4>
    </div>
  )
}

export default PlayerCard;