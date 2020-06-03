import React from "react";

function UserInfo({ user }) {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h3>@{user.login}</h3>
      <ul>
        <li> Name: {user.name}</li>
        <li> Location: {user.location}</li>
        <li> Followers :{user.followers}</li>
        <li> Following : {user.following}</li>
        <li> Public_repos : {user.public_repos}</li>
      </ul>
    </div>
  );
}

export default UserInfo;
