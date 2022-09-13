import React from 'react'

function Text_blocks(props) {
  var width= window.innerWidth;
  const left = (width/3)-200;
  const right = ((2*width)/3)-120 ;
  const center = width/2;
  const text=[
    'After 12th equivalent exams, I decided to work upon my coding skills and competitve programing, I already knew basics of Python from class 12th CS exam and hence I started doing CP in Python.',
    'During my time before college I also started to learn Web Development and learned the basics of HTML,CSS,Js from a free online learning platform ',
    'In my first semester in college, GDSC, a club in my college did a two day workshop where they introduced flutter to me. We had to make two simple UI page.',
    'At this point I realised python is not really a good choice for competitve coding hence I switched to C++ as C was already being taught in my class as a subject.',
    'Taking inspiration from the movie "The Social Network", I took on a big project of making a social media app specificaly for my college. AKGEC Connect which made me learn Firebase.',
    'In Second semester, A society CSI in our college conducted a workshop on React where we builded a Web App , Expense Tracker',
    'GDSC conducted a workshop on AI ML, where I learned a lot about AI ML, this combined with the subject in my second semester Artificial Intelligence gave me basic knowledge and then after the workshop GDSC conducted a competition where we had to make a mask detector model.',
    'In my Semester break I decided to put use to my React knowledge and create a fully animated portfolio which introduced me React-Spring and Tailwind.'
  ]
  
  return (
    <div className='relative'>
        <div className='absolute h-2 top-1/2 bg-black' style={{left:(props.index%2==0)?`${left+320}px`:`${right-(right-center)}px`,width:(props.index%2==0)?`${center-left-315}px`:`${right-center+320}px`}}>
        </div>
        <p className="border-4 border-black m-4 p-2 rounded-xl w-80 text-lg bg-slate-100  relative" style={{left:((props.index%2==0)?`${left}px`:`${right}px`)}} >
          {text[props.index]}
        </p>
    </div>
  )
}

Text_blocks.propTypes = {}

export default Text_blocks
