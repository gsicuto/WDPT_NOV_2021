
export const Capitalize = ({ name, age }) => {

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
  }

  return (
    <p>
      {capitalize(name)} / {age} anos
    </p>
  )
}