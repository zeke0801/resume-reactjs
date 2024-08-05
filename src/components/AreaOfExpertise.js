import React from 'react';
import TriangleGrid from './TriangleGrid';
import './CSS/aoe.css';

const skills = [
  { img: '/img/html.svg', label: 'HTML' },
  { img: '/img/css.svg', label: 'CSS' },
  { img: '/img/javascript.svg', label: 'JavaScript' },
  { img: '/img/react.svg', label: 'React' },
  { img: '/img/python.svg', label: 'Python' },
  { img: '/img/github.svg', label: 'Github' },
  { img: '/img/figma.svg', label: 'Figma' },
  { img: '/img/hubspot.svg', label: 'Hubspot' },
  { img: '/img/wordpress.svg', label: 'WordPress' },
  { img: '/img/wix.svg', label: 'Wix' },
  { img: '/img/teams.svg', label: 'Teams' },
  { img: '/img/clickup.svg', label: 'ClickUp' },
  { img: '/img/slack.svg', label: 'Slack' },
];

const AreaOfExpertise = () => (
  <div id="add-skills" className="aoe">
    <h1>My Skills</h1>
    <TriangleGrid skills={skills} />
  </div>
);

export default AreaOfExpertise;
