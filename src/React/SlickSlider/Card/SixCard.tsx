import React from "react";
import Modal from "../Modal/Modal";
import webZeroichi from "../Modal/CloseModal/webZeroichi-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const SixCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[5];
  const Link = Links[5];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={webZeroichi} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・FileZila</li>
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            自分が大学生の時に
            <br />
            WEBコーディングの仕事を
            <br />
            とっていくために
            <br />
            形式上作成したHPです。
            <br />
            参考にしたデザインはなく、
            <br />
            自由に作りました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={6} />
      </div>
    </div>
  );
};
export default SixCard;
