import React from 'react'

const spinner = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif"

export const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt='loading spinner'/>
    </div>
  )
}
