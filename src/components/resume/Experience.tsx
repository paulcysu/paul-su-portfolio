import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import { ExpandMore, LocationOn, OpenInNew } from "@mui/icons-material";
import { ExperienceType } from "../../data/experiences";
import SkillList from "../ui/SkillList";
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
        expandIcon={<ExpandMore />}
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
          <Typography style={{ fontWeight: 700 }}>
            {experience.title}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {experience.start + " - " + experience.end}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="location-website">
          <div className="flex">
            <LocationOn style={{ color: "green" }} />
            <Typography style={{ paddingRight: 20 }}>
              {experience.location}
            </Typography>
          </div>
          {experience.website && (
            <div className="flex website">
              <OpenInNew style={{ color: "blue" }} />
              <Link
                rel="noopener noreferrer"
                href={experience.website}
                target="_blank"
              >
                {experience.website}
              </Link>
            </div>
          )}
        </div>
        <div className="experience-content">
          <Typography>
            {experience.description}
          </Typography>
          <img src={experience.logo} alt={`${experience.title} Logo`} />
        </div>
        <SkillList list={experience.skills} />
      </AccordionDetails>
    </Accordion>
  );
};

export default Experience;
