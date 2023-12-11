import React, { memo } from "react";

const Header = memo(({ username, onLogout, onMyTweets, onAllTweets }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img
          src='./img/im-google-talk.svg'
          alt='픽앤롤 Talk'
          className='logo-img'
        />
        <h1 className='logo-name'>픽앤롤 Talk</h1>
        {username && <span className='logo-user'>@{username}</span>}
      </div>
      {username && (
        <nav className='menu'>
          <button onClick={onAllTweets}>Talk전부</button>
          <button onClick={onMyTweets}>내Talk</button>
          <button className='menu-item' onClick={onLogout}>
            로그아웃
          </button>
        </nav>
      )}
    </header>
  );
});

export default Header;
