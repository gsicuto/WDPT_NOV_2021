// Students List

let studentsList = [
  'Fernando',
  'Luciana',
  'Carlos',
  'Alberto',
];

console.log(studentsList[2]);

let studentsList2 = [
  { name: 'Fernando', age: 30 },
  { name: 'Luciana', age: 32 },
  { name: 'Carlos', age: 50 },
  { name: 'Alberto', age: 16 },
];

console.log(studentsList2[2].name);

// Add new student to list

studentsList2.push({ name: 'Matilde' });

studentsList2[4].age = 22;

console.log(studentsList2)

let person = {
  name: 'Gustavo',
  age: 65,
}

studentsList2.push(person);


console.log(studentsList2);

const twoD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(twoD[1][1]);

// School

const school = {
  name: "Fake School 1",
  classRooms: [
    {
      teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
      students: [
        { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
        { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
        { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
        { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
        { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
      ]
      },
    {
      teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
      students: [
        { firstName: 'Manley', lastName: 'Doyle', age: 18 },
        { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
        { firstName: 'Sid', lastName: 'Rohan', age: 30 },
        { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
        { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
      ]
    }
  ]
}

console.log(school.classRooms[1].teacher.firstName);