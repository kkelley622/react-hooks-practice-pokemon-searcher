import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const initialState = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
}

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState(initialState)

  function handleFormData(event) {
    setFormData({...formData,[event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then((res) => res.json())
    .then(addPokemon)

    setFormData(initialState)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleFormData}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleFormData}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleFormData}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleFormData}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
