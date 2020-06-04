import React, { useState } from 'react';

function SelectUser({ setPlayer }) {
  const [username, setUser] = useState('');
  const [userChosed, setUserChosed] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => setUser(e.target.value);

  const handleSubmit = async () => {
    setUserChosed(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUserInfo(data);
    setPlayer(data);
  };

  const reset = () => {
    setUserChosed(false);
    setUser('');
    setPlayer({});
  };

  if (userChosed) {
    return (
      <div className='selectPlayer'>
        <img src={userInfo.avatar_url} alt='profile' className='profilePic' />@
        {username}
        <button className='smallbtn' onClick={reset}>
          Reset
        </button>
      </div>
    );
  }

  return (
    <div className='selectPlayer'>
      <div>Select Player</div>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={handleChange} type='text' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default SelectUser;
