import React, { useState } from 'react';
import Nav from './Nav';
import SelectUser from './SelectUser';
import UserInfo from './UserInfo';
import ReposGrid from './ReposGrid';

function Search() {
  const [userInfo, setUserInfo] = useState({});
  const [reposInfo, setReposInfo] = useState([]);

  const handleUserInfo = async (userInf) => {
    setUserInfo(userInf);
    const res = await fetch(
      `https://api.github.com/users/${userInf.login}/repos?sort=created&direction=desc`
    );
    const data = await res.json();
    setReposInfo(data);
    console.log(data);
  };

  if (userInfo.login) {
    return (
      <>
        <Nav />
        <div className='centerItemsInDiv searchPage'>
          <UserInfo user={userInfo} />
        </div>
        <ReposGrid reposInfo={reposInfo} />
      </>
    );
  }

  return (
    <div className='searchPageBeforeFindingSomething'>
      <Nav />
      <SelectUser setPlayer={handleUserInfo} />
    </div>
  );
}

export default Search;
