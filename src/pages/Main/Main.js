import React, { useState } from 'react';
import Comment from '../commponents/Comment';
import '../Main/Main.scss';
import profile from '../../assets/main/KakaoTalk_20230213_204309040.jpg';
import posted from '../../assets/main/KakaoTalk_20230214_161243133.jpg';
import building from '../../assets/main/KakaoTalk_20230216_100337086.jpg';

const Main = () => {
  const [show, setShow] = useState(false);
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState('');
  const [saveComment, setSaveComment] = useState([]);
  const [numberComments, setNumberComments] = useState(0);
  const [numberlike, setNumberLike] = useState(0);

  if (numberlike < 0) {
    setNumberLike(0);
  }

  const menuToggle = () => {
    setShow(show => !show);
  };

  const heartToggle = () => {
    setHeart(heart => !heart);
  };

  const changeComment = e => {
    setComment(e.target.value);
  };

  const commitCreate = e => {
    if (e.key === 'Enter') {
      if (comment.length > 0) {
        commentInformation();
        setComment('');
      }
    }
  };

  const postButton = () => {
    if (comment.length > 0) {
      commentInformation();
      setComment('');
    }
  };

  const commentInformation = () => {
    let input = {
      id: random(),
      value: comment,
      up: false,
    };
    setSaveComment([...saveComment, input]);
    setNumberComments(numberComments + 1);
  };

  const likeToggle = item => {
    saveComment.filter(items => {
      if (items.id === item.id && !item.up) {
        item.up = !item.up;
        setNumberLike(numberlike + 1);
      } else if (items.id === item.id && item.up) {
        item.up = !item.up;
        setNumberLike(numberlike - 1);
      }
    });
  };

  const deleteComment = item => {
    setSaveComment(
      saveComment.filter(items => {
        return items.id !== item.id;
      })
    );
    setNumberComments(numberComments - 1);
    setNumberLike(numberlike - 1);
  };

  const random = () => {
    return Math.random().toString(36).substr(2, 16);
  };

  return (
    <div className="main">
      <nav>
        <div className="container">
          <img
            className="instagram_img"
            src="./images/제목 없음.png"
            alt="instargram logo"
          />
          <div className="icon">
            <input className="search" type="text" placeholder="검색" />
            <i className="bi bi-search" />
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
              <i className="bi bi-person-circle" />
              프로필
            </li>
            <li>
              <i className="bi bi-bookmark" />
              저장됨
            </li>
            <li>
              <i className="bi bi-gear-wide" /> 설정
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
                <img src={profile} alt="profile" />
                <p>hole546</p>
              </div>
              <i className="bi bi-three-dots" />
            </div>
            <img src={posted} alt="posted" />

            <div className="content">
              <div className="emotion">
                <i
                  onClick={heartToggle}
                  className={
                    heart
                      ? 'bi bi-suit-heart-fill clicked'
                      : 'bi bi-suit-heart-fill'
                  }
                />
                <i className="bi bi-chat" />
                <i className="bi bi-upload" />
              </div>
              <i className="bi bi-bookmark" />
            </div>

            <span className="hearts">좋아요 {numberlike}개</span>
            <div className="commentSection">
              <p>
                <strong>{numberComments}명</strong>이 댓글을 다셨습니다.
              </p>
            </div>
            <div id="comment_content">
              {saveComment.map(item => (
                <Comment
                  item={item}
                  key={item.id}
                  saveComment={saveComment}
                  likeToggle={likeToggle}
                  deleteComment={deleteComment}
                />
              ))}
            </div>
            <div className="wrap">
              <input
                onKeyPress={commitCreate}
                id="comment"
                type="text"
                placeholder="댓글 달기"
                value={comment}
                onChange={changeComment}
              />
              <button id="postingBtn" onClick={postButton}>
                게시
              </button>
            </div>
          </div>
        </div>

        <div className="main-right">
          <div className="article">
            <div className="information">
              <div className="profile">
                <img src={building} alt="building" />
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
    </div>
  );
};

export default Main;
