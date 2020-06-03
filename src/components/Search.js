import React, { useState } from 'react';
import Nav from './Nav';
import SelectUser from './SelectUser';
import UserInfo from './UserInfo';

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
        <div className='reposGrid'>
          {reposInfo &&
            reposInfo.map((repo) => (
              <div className='repo' key={repo.id}>
                <h3>{repo.name}</h3>
                <div>{repo.description}</div>
                <div>
                  Stars : {repo.stargazers_count}
                  Forks : {repo.forks_count}
                </div>
                <div>Language : {repo.language}</div>
                <button className='btn'>
                  {' '}
                  <a href={repo.html_url}>Repo</a>{' '}
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <SelectUser setPlayer={handleUserInfo} />
    </>
  );
}

export default Search;
