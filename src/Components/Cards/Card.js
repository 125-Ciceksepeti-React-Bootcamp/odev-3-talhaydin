import React, { useState } from 'react';
import './card.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const Card = ({ post, deletePost, editPost }) => {
  const [modalOn, setmodalOn] = useState(false);
  const [postTitle, setPostTitle] = useState(post.title);
  const [postBody, setPostBody] = useState(post.body);

  const handleTitle = (e) => {
    setPostTitle(e.target.value);
  };
  const handleBody = (e) => {
    setPostBody(e.target.value);
  };

  const handleEditPost = () => {
    const postObj = {
      id: post.id,
      title: postTitle,
      body: postBody,
    };
    editPost(postObj);
  };

  return (
    <div className="card-container">
      <div key={post.id} className="card">
        <h3>#{post.id}</h3>
        <h4>{post.title}</h4>
        <p>{post.body}</p>

        <button onClick={() => deletePost(post.id)} className="deletebutton">
          X
        </button>
        <button onClick={() => setmodalOn(true)} className="editbutton">
          Edit..
        </button>

        <Modal
          isOpen={modalOn}
          onRequestClose={() => setmodalOn(false)}
          style={{
            overlay: {
              height: '50%',
              width: '50% ',
              margin: 'auto',
              padding: '8px',
              display: 'flex',
            },
            content: { alignItems: 'center', justifyContent: 'center' },
          }}
        >
          <div className="modal">
            <button
              onClick={() => setmodalOn(false)}
              className="modal_close_button"
            >
              X
            </button>
            <input
              type="text"
              value={postTitle}
              onChange={handleTitle}
              className="modalinput"
            ></input>

            <input
              type="text"
              value={postBody}
              onChange={handleBody}
              className="modalinput"
            ></input>
            <button onClick={() => handleEditPost()} className="modal_edit">
              Edit Post
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Card;
