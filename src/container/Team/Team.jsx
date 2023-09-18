import React from 'react'
import { useContext } from 'react'
import Context from '../../context/context'


import { SubHeading } from '../../components'
import { data } from '../../constants'
import MemberCard from './MemberCard'
import './Team.css'


const Team = () => {
  const context = useContext(Context)
  const {teamText} = data
  return (
    <div className="app__team section__padding app__bg" id="team">
      <div className="app__team-title">
        <SubHeading title={context.isEnglish? "All of us will help you" : '每个员工都为您服务'} />
        <h1 className="headtext__cormorant">{context.isEnglish ? 'Our Team' : '我们团队'}</h1>
      </div>
    
      <div className='team-card-container'>
        
        {teamText.map((team, index) => {
          return <MemberCard teamText={team} key={`${team.name.EN} ${index}`} isEnglish={context.isEnglish} />
        })}
      </div>
    </div>
  );
}

export default Team
