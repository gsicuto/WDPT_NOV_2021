
// function ClassRoom() {
//   return (
//     <div>
//     </div>
//   )
// }

import { Capitalize } from "./Capitalize";


const ClassRoom = ({ students }) => {

  return(
    <div className='class-rooms'>
      <h2>Estes são os alunos da Sala</h2>
      <ul>
        {students.map(student => <li> <Capitalize name ={student}/> </li>)}
      </ul>
    </div>
  )
}

export default ClassRoom
