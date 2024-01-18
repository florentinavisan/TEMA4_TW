import React, { useState } from 'react';

const RobotForm = ({ onAdd }) => {
  const [robot, setRobot] = useState({ name: '', type: '', mass: '' });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRobot((prevRobot) => ({ ...prevRobot, [id]: value }));
  };

  const handleAddRobot = () => {
    const updatedRobot = { ...robot, mass: robot.mass < 500 ? '' : robot.mass };
    onAdd(updatedRobot);
    setRobot({ name: '', type: '', mass: '' });
  };

  return (
    <div>
      <label>
        Name:
        <input id="name" type="text" placeholder="name" value={robot.name} onChange={handleInputChange} />
      </label>
      <label>
        Type:
        <input id="type" type="text" placeholder="type" value={robot.type} onChange={handleInputChange} />
      </label>
      <label>
        Mass:
        <input id="mass" type="text" placeholder="mass" value={robot.mass} onChange={handleInputChange} />
      </label>
      <button onClick={handleAddRobot}>add</button>
    </div>
  );
};

export default RobotForm;
