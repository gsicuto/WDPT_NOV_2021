const numberList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>]

const numbers = [1, 2, 3, 4, 5]

const projects = [
  { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
  { _id: '985afw', name: 'TravelLite', techStack: 'React, Express, Redux' },
  { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
  { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
];

// const numberList2 = number.map(element => <li>{element}</li>)


const SimpleList = () => {
  return (
    <>
      <div>
        <h3>Number List</h3>
        <ul>
          {numbers.map((number, index) => {
            return <li key = {index}>{number}</li>
          })}
        </ul>
      </div>
      <div>
        <h3>Project List</h3>
          {projects.map((project) => {
            return (
              <div key = {project._id}>
                <h2>{project.name}</h2>
                <p>{project.techStack}</p>
              </div>
            )
          })}
      </div>
    </>
    
  )
}

export default SimpleList