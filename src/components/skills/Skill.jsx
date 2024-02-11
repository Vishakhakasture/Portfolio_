import "./skills.scss";
import data from "./skill.json";

const Skill = function Each() {
  const ddata = data.map((item) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <div className="skill">
        <img className="skill-img" src={item.image} alt="i" />
        <h5>{item.name}</h5>
      </div>
    );
  });
  return ddata;
};
export default Skill;
