import React, { useState } from 'react';
import '../Main/Main.scss';
import '../../styles/common.scss';
import profile from '../../assets/main/KakaoTalk_20230213_204309040.jpg';
import posted from '../../assets/main/KakaoTalk_20230214_161243133.jpg';
import building from '../../assets/main/KakaoTalk_20230216_100337086.jpg';

let saveComment = [];
let numberComments = 0;

const Main = () => {
  const [show, setShow] = useState(false);
  const [heart, setHeart] = useState(false);
  let [comment, setComment] = useState('');

  const menuToggle = () => {
    setShow(show => !show);
  };

  const likeToggle = () => {
    setHeart(heart => !heart);
  };

  const changeComment = e => {
    setComment(e.target.value);
  };

  const commitCreate = e => {
    if (e.key === 'Enter') {
      if (comment.length > 0) {
        commentInformation();
        comment = '';
      }
    }
  };

  const commentInformation = () => {
    let input = {
      id: random(),
      value: comment,
      up: false,
    };
    saveComment.push(input);
    console.log(saveComment);
    commentsRender();
  };

  const commentsRender = () => {
    if (numberComments < 0) {
      numberComments = 0;
    }
    let result = ``;
    saveComment.forEach(item => {
      console.log(item);
      if (!item.up) {
        result += `
    <div className="contents" >
      <p><strong>${item.id}</strong> ${item.value}</p>
      <div>
        <button  onClick="itSoundsGood('${item.id}')"><i className="bi bi-hand-thumbs-up-fill"></i></button>
        <button onClick="deleteComment('${item.id}')"><i className="bi bi-trash3"></i></button>
      </div>
    </div>`;
      } else {
        result += `
      <div className="contents" >
        <p><strong>${item.id}</strong> ${item.value}</p>
        <div>
          <button className="upThumbs" onClick="itSoundsGood('${item.id}')"><i className="bi bi-hand-thumbs-up-fill"></i></button>
          <button onClick="deleteComment('${item.id}')"><i className="bi bi-trash3"></i></button>
        </div>
      </div>`;
      }
      // commentSection.innerHTML = `<img src="./image/KakaoTalk_20230213_204309040.jpg" alt="">
      // <p><strong>${item.id}</strong>님 외&nbsp<strong>${numberComments}명</strong>이 댓글을 다셨습니다.</p>`;
    });
    numberComments++;
    // commentContent.innerHTML = result;
  };

  const random = () => {
    return Math.random().toString(36).substr(2, 16);
  };

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
              onClick={menuToggle}
              src="./images/profile.png"
              alt="profile logo"
            />
          </div>
        </div>
        <div className={show ? 'menuBoxClicked ' : 'menuBox '}>
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

      <main className="mainContainer">
        <div className="feeds">
          <div className="article">
            <div className="information">
              <div className="profile">
                <img src={profile} alt="profile picture" />
                <p>hole546</p>
              </div>
              <i className="bi bi-three-dots"></i>
            </div>
            <img src={posted} alt="posted picture" />

            <div className="content">
              <div className="emotion">
                <i
                  onClick={likeToggle}
                  className={
                    heart
                      ? 'bi bi-suit-heart-fill clicked'
                      : 'bi bi-suit-heart-fill'
                  }
                ></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-upload"></i>
              </div>
              <i className="bi bi-bookmark"></i>
            </div>

            <span className="hearts">좋아요 0개</span>
            <div className="commentSection"></div>
            <div id="comment_content"></div>
            <div className="wrap">
              <input
                onKeyPress={commitCreate}
                id="comment"
                type="text"
                placeholder="댓글 달기"
                value={comment}
                onChange={changeComment}
              />
              <button id="postingBtn">게시</button>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="article">
            <div className="information">
              <div className="profile">
                <img src={building} alt="building photo" />
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
