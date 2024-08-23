import React, { useState } from 'react';

 const Form = () => {
  const [data, setData] = useState({ userName: '', phoneNumber: '', email: '' });
  const { userName, phoneNumber, email } = data;

  const onChanges = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (userName.length < 6) {
      alert('userName must be more than six characters');
    }
    else{
      console.log(data);
      
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input  type='text'  placeholder='userName'  value={userName}  name='userName'  onChange={onChanges}
        />
        <input type='number'
          placeholder='phoneNumber'
          value={phoneNumber}
          name='phoneNumber'
          onChange={onChanges}
        /><br/>
        <input
          type='email'
          placeholder='email'
          value={email}
          name='email'
          onChange={onChanges}
        /><br></br>
        <input
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};
export default Form
