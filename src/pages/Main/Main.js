import React from "react";
import "../Main/Main.css";

const Main = () => {
  return (
    <>
      <nav>
        <div className="container">
          <img
            className="instagram_img"
            src="./images/제목 없음.png"
            alt="instargram logo"
          />
          <div className="icon">
            <input className="search" type="text" placeholder="검색" />
            <i className="bi bi-search"></i>
          </div>
          <div className="imgs">
            <img src="./images/explore.png" alt="explore logo" />
            <img src="./images/heart.png" alt="heart logo" />
            <img
              id="new_menu"
              on
              src="./images/profile.png"
              alt="profile logo"
            />
          </div>
        </div>
        <div className="menu_box">
          <ul>
            <li>
              <i className="bi bi-person-circle"></i>프로필
            </li>
            <li>
              <i className="bi bi-bookmark"></i>저장됨
            </li>
            <li>
              <i className="bi bi-gear-wide"></i> 설정
            </li>
          </ul>
          <p>로그아웃</p>
        </div>
      </nav>

      <main>
        <div className="feeds">
          <div className="article">
            <div className="information">
              <div className="profile">
                <img
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                  src="./images/KakaoTalk_20230213_204309040.jpg"
                  alt=""
                />
                <p>hole546</p>
              </div>
              <i className="bi bi-three-dots"></i>
            </div>
            <img
              src="./images/KakaoTalk_20230214_161243133.jpg"
              alt="profile photo"
            />

            <div className="content">
              <div className="emotion">
                <i className="bi bi-suit-heart-fill"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-upload"></i>
              </div>
              <i className="bi bi-bookmark"></i>
            </div>
            <span className="hearts">좋아요 0개</span>
            <div className="commentSection"></div>
            <div id="comment_content"></div>
            <div className="wrap">
              <input id="comment" type="text" placeholder="댓글 달기" />
              <button id="postingBtn">게시</button>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="article">
            <div className="information">
              <div className="profile">
                <img
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                  src="./images/KakaoTalk_20230216_100337086.jpg"
                  alt="building photo"
                />
                <p>63_building</p>
              </div>
            </div>

            <div className="story">
              <div className="story_header">
                <p>스토리</p>
                <strong>모두 보기</strong>
              </div>
            </div>

            <div className="recommendation">
              <div className="story_header">
                <p>회원님을 위한 추천</p>
                <strong>모두 보기</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
