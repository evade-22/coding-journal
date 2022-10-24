import React from 'react'
import PersonnelTable from '../components/PersonnelTable'
import { BulletinBoard } from '../components/BulletinBoard';
import BoardData from '../components/BoardData';

const Activity = () => {
  let boardComponents = BoardData.map(board => {
        return (
        <BulletinBoard 
          id={board.id}
          category={board.category} 
          post={board.post}/>
        )
      }); 
  return (
    <div>
        <h1>This is the Activity Page</h1>
        <PersonnelTable/>
        {boardComponents}
    </div>
  )
}

export default Activity