import "./MemberCard.css";
import { SubHeading } from '../../components'

const MemberCard = ({ teamText, isEnglish }) => {
  return (
    <div className="member-card">
      <img src={teamText.image} alt="photo of team member" />
      <h2 className="p__cormorant ">
        {isEnglish ? teamText.name.EN : teamText.name.CH}
      </h2>
      <div className="position">
      <SubHeading title={isEnglish ? teamText.position.EN : teamText.position.CH}/>
      </div>

      <p className="">{isEnglish ? teamText.intro.EN : teamText.intro.CH}</p>
    </div>
  );
};

export default MemberCard;
