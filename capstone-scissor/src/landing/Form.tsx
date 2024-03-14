import React from "react";
import magicWand from "../assets/magic-wand.svg";
import formLeft from "../assets/form-left.svg";
import formRight from "../assets/form-right.svg";

const Form: React.FC = () => {
  return (
    <section className="form" id="form">
      <div className="form-center">
        <form action="" className="form-box">
          <input
            type="text"
            placeholder="Paste URL here"
            className="form-control url-input"
          />

          <div className="form-control domain-input">
            <select
              name="choose domain"
              id="choose domain"
              className="domain-choice"
            >
              <option value="choose Domain">Choose Domain</option>
              <option value="basic">Basic</option>
              <option value="professional">Professional</option>
              <option value="teams">Teams</option>
            </select>

            <input
              type="text"
              placeholder="Type Alias here"
              className="form-control"
            />
          </div>

          <button className="btn-blue btn form-btn">
            Trim Url
            <img src={magicWand} alt="Magic Wand" className="magic-wand-img" />
          </button>
        </form>
        <p className="form-text">
          By clicking TrimURL, I agree to the{" "}
          <strong>Terms of Service, Privacy Policy</strong> and Use of Cookies.
        </p>
      </div>
      <div className="form-bg-left form-bg">
        <img src={formLeft} alt="Form Left" className="form-left-img" />
      </div>
      <div className="form-bg-right form-bg">
        <img src={formRight} alt="Form Right" className="form-right-img" />
      </div>
    </section>
  );
};

export default Form;
