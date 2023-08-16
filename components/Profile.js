import React from "react";
import imgTop from "../images/bg-pattern-top.svg";
import imgBottom from "../images/bg-pattern-bottom.svg";
import imgCard from "../images/bg-pattern-card.svg";
import victor from "../images/image-victor.jpg";

const Profile = () => {
  return (
    <div>
      <img src={imgTop} alt="Image Top" className="imgTop" />
      <div className="card">
        <div className="card-layout">
          <img src={imgCard} alt="Image Card" className="imgCard" />
          <div className="profile">
            <img src={victor} alt="victor" className="profile-image" />
          </div>
          <div className="details">
            <h1 className="name">Victor Crest</h1>
            <p className="age">26</p>
            <p className="country">London</p>
          </div>
          <hr className="line"></hr>
          <div className="acievement">
            <div className="acievement-details">
              <h2 className="number">80K</h2>
              <div className="label">Followers</div>
              <h2 className="number">803K</h2>
              <div className="label">Likes</div>
              <h2 className="number">1.4K</h2>
              <div className="label">Photos</div>
            </div>
          </div>
        </div>
      </div>
      <img src={imgBottom} alt="Image Bottom" className="imgBottom" />
    </div>
  );
};

export default Profile;
