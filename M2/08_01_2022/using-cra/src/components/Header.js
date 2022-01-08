import Title from "./Title"

const Header = () => {
  let name = 'gabriel'

  let condicional = false;

  const capitalize = (string) => {
    return `${string[0].toUpperCase() + string.slice(1)}`
    
  }

  // onchange --> onChange
  // onclick --> onClick
  // onsubmit --> onSubmit

  // class --> className
  // for ----> htmlFor


  return (
    <header className ="header">
      <Title/>
      {condicional ? capitalize(name) : name}
    </header>
  )
}

export default Header