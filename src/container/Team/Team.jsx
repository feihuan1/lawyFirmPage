import React from 'react'
import { useContext } from 'react'
import Context from '../../context/context'

import { SubHeading } from '../../components'
import { data } from '../../constants'

import './Team.css'


const Team = () => {
  const context = useContext(Context)
  const {aboutText} = data

  return (
    <div className="app__team flex__center section__padding app__bg" id="team">
      <div className="app__team-title">
        <SubHeading title={context.isEnglish? "All of us will help you" : '每个员工都为您服务'} />
        <h1 className="headtext__cormorant">{context.isEnglish ? 'Our Team' : '我们的团队'}</h1>
      </div>
    
      <div>
        
      </div>


    </div>
  );
}

export default Team
