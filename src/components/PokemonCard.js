import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const {name, hp, sprites} = pokemon;
  const [showSprite, setShowSprite] = useState(true);

  function handleChangingSprite() {
    setShowSprite((showSprite) => !showSprite)
  }

  return (
    <Card>
      <div onClick={handleChangingSprite}>
        <div className="image">
          <img alt="oh no!" src={showSprite ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
