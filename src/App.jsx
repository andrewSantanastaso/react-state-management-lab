import { useState } from "react";

import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://craftypixels.com/placeholder-image/150x150/29bd00/0011ff&text=survivor",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://craftypixels.com/placeholder-image/150x150/000000/0011ff&text=shadow",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://craftypixels.com/placeholder-image/150x150/ffe57d/0011ff&text=brawler",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);
  const handleAddFighter = (member) => {
    setTeam([...team, member]);
  };
  return (
    <div>
      <h2>Team</h2>
      <div>
        {team.map((member, index) => (
          <ul key={index}>
            <li>
              <img src={member.img} alt={member.name} />
            </li>
            <li>{member.name}</li>
          </ul>
        ))}
      </div>
      <h2>Fighters</h2>
      <div className="fighters-container">
        {zombieFighters.map((zombieFighter, index) => (
          <ul key={index}>
            <li>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
            </li>
            <li>{zombieFighter.name}</li>
            <li>
              <span>Price: </span>
              {zombieFighter.price}
            </li>
            <li>
              <span>Strength: </span>
              {zombieFighter.strength}
            </li>
            <li>
              <span>Agility: </span>
              {zombieFighter.agility}
            </li>

            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </ul>
        ))}
      </div>
      <div>
        <p>
          <span className="money">Current Money:</span> {money}
        </p>
      </div>
    </div>
  );
};

export default App;
