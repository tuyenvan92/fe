import React from 'react'

function Forms() {
  const [firstName, setFirstName] = React.useState('');
  const [gender, setGender] = React.useState('');

  function onChangeName(event) {
    const { value } = event.target;
    setFirstName(value)
  }

  function onChangeGender(event) {
    const { value } = event.target;
    setGender(value)
  }

  function handleSubmit() {
    console.log('submit: ', firstName, gender)
  }
  
  return (
    <div>
      FirstName: {firstName}
      <br />
      <input type="text" value={firstName} onChange={onChangeName} />
      <br />
      <select value={gender} onChange={onChangeGender}>
        <option disabled value="">Please choose</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Forms
