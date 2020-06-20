import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { IoMdShare } from 'react-icons/io';
import { GrLike } from 'react-icons/gr';
import { GoComment } from 'react-icons/go';
import { BsDot } from 'react-icons/bs';
import postData from './postData.json';
function App() {
  console.log(postData.postDetail)
  return (
    <div className="p-1 d-flex align-content-start flex-wrap bg-primary">
      {
        postData.postDetail.map((el) => (
          <div className="w-25 h-25 m-5 rounded-lg shadow-lg rounded bg-white">
            <div className="pl-1 d-flex flex-row rounded-lg shadow-lg bg-white rounded">
              <img src={el.PicturePost} alt="Avatar" class="md-avatar rounded-circle m-2" style={{ width: "50px", height: "50px" }} />
              <div class="d-flex flex-column">
                <span className="text-primary font-weight-bold mt-2">{el.Name}</span>
                <small className="text-muted">{el.DatePost}<BsDot />{el.TimePost}</small>
              </div>
            </div>
            <div className=" p-2 rounded-lg shadow-lg bg-white rounded m-1">
              {el.content}
            </div>
            <div className="w-100 pl-3 pr-3 d-flex justify-content-between rounded-lg shadow-lg bg-white rounded">
              <button class="p-2 bd-highlight btn btn-link">
                <GrLike /> {el.LikeCount} Like
          </button>
              <button class="p-2 bd-highlight btn btn-link">
                <GoComment /> {el.CommentCount} Comment
          </button>
              <button class="p-2 bd-highlight btn btn-link">
                <IoMdShare /> {el.ShareCount} Share
          </button>
            </div>
            <div className="w-100 p-2 overflow-auto">
              {
                el.CommentList != null ?
                  el.CommentList.map((cmnt) => (
                    <div className="w-100 p-1 d-flex shadow-lg flex-row rounded-lg bg-white">
                      <img src={cmnt.Picture} alt="Avatar" class="md-avatar shadow-lg rounded-circle ml-1 mr-1" style={{ width: "40px", height: "40px" }} />
                      <div class="d-flex flex-column pl-2 w-100 rounded-lg shadow-lg bg-white rounded">
                        <p class="m-0"><span class="text-primary font-weight-bold mr-2">{cmnt.name}</span>{cmnt.commentDetail}</p>
                        <small class="text-muted">{cmnt.commentTime}</small>
                      </div>
                    </div>
                  ))
                  :
                  <div></div>
              }
              <div className="w-100 p-1 d-flex flex-row">
                <img src={el.PicturePost} alt="Avatar" class="md-avatar rounded-circle ml-1 mr-1" style={{ width: "40px", height: "40px" }} />
                <input type="text" class="border border-primary rounded-pill pl-2 w-100" placeholder="Write Comment" />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;

