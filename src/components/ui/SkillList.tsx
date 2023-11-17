import React from "react";
import Chip from '@mui/joy/Chip';
import { v4 as uuidv4 } from 'uuid';

interface SkillListProps {
  list: string[];
}

const SkillList: React.FC<SkillListProps> = ({ list }) => {
  return (
    <div className="experience-skills">
      {list.map((skill) => (
        <Chip key={uuidv4()} color="primary" size="lg" variant="solid">
          {skill}
        </Chip>
      ))}
    </div>
  );
};

export default SkillList;
