// function FunctionalComponent () {

// }

const FunctionalComponent = ({children}) => {
  const person = {name: 'Gabriel', age:23}

 return (
  <>
    <h2>Sou um componente Funcional</h2>
    <h3>Meu nome é {person.name}</h3>
    {children}
  </>)
}

export default FunctionalComponent