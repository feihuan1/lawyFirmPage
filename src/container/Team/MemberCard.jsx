
import "./MemberCard.css";

const MemberCard = ({ teamText, isEnglish }) => {
  return (
    <div className="member-card">
      <img src={teamText.image} alt="photo of team member" />
      <h2 className="p__cormorant ">
        {isEnglish ? teamText.name.EN : teamText.name.CH}{"  "}
      </h2>

        <span>{isEnglish ? teamText.position.EN : teamText.position.CH}</span>{" "}
      <p className="p__opensans">{isEnglish ? teamText.intro.EN : teamText.intro.CH}</p>
    </div>
  );
};

export default MemberCard;
