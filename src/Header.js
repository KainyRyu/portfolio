import React from "react";
import logo from './images/kainylogo.svg';

export default function Header() {
  return (
    <div className="timesHeader flexColumn">
      <div>
        <div className="timesHeader-box">
            <p>“Full-Stack JavaScript Developer”</p>
        </div>
        <img className="logo" src={logo} alt="Kainy Ryu" />
        <div className="timesHeader-box">
            <p>
                <a
                href="https://github.com/KainyRyu"
                rel="noopener noreferrer"
                target="_blank"
                >
                GitHub
                </a>{" "}
                <br />
                <a
                href="https://www.linkedin.com/in/kainyryu/"
                rel="noopener noreferrer"
                target="_blank"
                >
                LinkedIn
                </a>{" "}
                <br />
                <button className='email' onClick={copyToClipboard}>
                    Contact
                </button>
            </p>
        </div>
    </div>
    <div className="highlight">
        <label>
          HTML CSS Bootstrap JavaScript React NodeJS MongoDB Express{" "}
        </label>
    </div>
    </div>
  );
}



function copyToClipboard() {
    return
}


{/* <button onClick={copyToClipboard(`kainy2109@gmail.com`)}></button>


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  } */}
  