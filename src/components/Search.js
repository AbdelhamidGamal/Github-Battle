import React, { useState } from "react";
import Nav from "./Nav";
import SelectUser from "./SelectUser";
import UserInfo from "./UserInfo";

function Search() {
  const [userInfo, setUserInfo] = useState({});

  if (userInfo.login) {
    return (
      <>
        <Nav />
        <div className="centerItemsInDiv searchPage">
          <UserInfo user={userInfo} />
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <SelectUser setPlayer={setUserInfo} />
    </>
  );
}

export default Search;
