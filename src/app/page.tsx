import React from 'react'
import { HeroParallel } from './components/HeroParallel'
import { Team } from './components/Team'
import { AuroraBackgrounds } from './components/AuroraBackground'

function page() {
  return (
    <div>
      <HeroParallel/>
      <AuroraBackgrounds/>
      
      <Team/>
    </div>
  )
}

export default page
