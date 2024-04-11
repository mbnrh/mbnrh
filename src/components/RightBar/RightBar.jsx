import "./rightbar.scss";
import profileimage from '../../assets/pexels-david-bartus-610294.jpg';

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <span>Mbn Rh</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <span>Mbn Rh</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <p>
              <span>Mbn Rh</span> changed their profile
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <p>
              <span>Mbn Rh</span> changed their profile
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <p>
              <span>Mbn Rh</span> changed their profile
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <p>
              <span>Mbn Rh</span> changed their profile
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <div className="online" />
              <span>Mbn Rh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <div className="online" />
              <span>Mbn Rh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <div className="online" />
              <span>Mbn Rh</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profileimage} alt="" />
              <div className="online" />
              <span>Mbn Rh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar