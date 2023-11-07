import { useState } from 'react';

type ExperienceItem = {
  location: string;
  website: string;
  description: string;
  logo: string;
  skills: string[];
};

const experienceItems: ExperienceItem[] = [
  {
    location: 'San Francisco, CA',
    website: 'https://example.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vitae magna.',
    logo: 'https://example.com/logo.png',
    skills: ['React', 'TypeScript', 'Node.js'],
  },
  {
    location: 'New York, NY',
    website: 'https://example.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vitae magna.',
    logo: 'https://example.com/logo.png',
    skills: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    location: 'Seattle, WA',
    website: 'https://example.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eu bibendum bibendum, elit sapien bibendum elit, vel bibendum elit sapien vitae magna.',
    logo: 'https://example.com/logo.png',
    skills: ['Python', 'Django', 'PostgreSQL'],
  },
];

const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="experience">
      {experienceItems.map((item, index) => (
        <div key={index}>
          <div onClick={() => handleItemClick(index)}>
            <h3>{item.location}</h3>
            <a href={item.website}>{item.website}</a>
          </div>
          {activeIndex === index && (
            <div>
              <p>{item.description}</p>
              <img src={item.logo} alt="Logo" />
              <div>
                {item.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection