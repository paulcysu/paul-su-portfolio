import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExperienceType } from "../../data/experiences";

interface ExperienceProps {
  experience: ExperienceType;
  expanded: boolean;
  onClick: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void | undefined;
}

const Experience: React.FC<ExperienceProps> = ({
  experience,
  expanded,
  onClick = () => {},
}) => {
  return (
    <Accordion expanded={expanded} onChange={onClick(experience.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Typography style={{ fontWeight: 700 }}>{experience.title}</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {experience.start + " - " + experience.end}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{
            padding: 10,
          }}>
          {experience.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Experience;
