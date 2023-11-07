const SkillSection = () => {
  return (
    <div id="skill">
      <h2>Skills</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img src="path/to/react-logo.png" alt="React Logo" style={{ height: '50px', width: '50px' }} />
          <h3>Frontend Development</h3>
          <p>Description of Frontend Development skill</p>
        </div>
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img src="path/to/php-logo.png" alt="PHP Logo" style={{ height: '50px', width: '50px' }} />
          <h3>Fullstack Development</h3>
          <p>Description of Fullstack Development skill</p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
