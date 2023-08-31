/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineTrademarkCircle } from "react-icons/ai";

const Footer = () => {
  const style = css`
    background-color: rgba(61, 112, 156, 0.86);
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    padding: 0.2em;
  `;

  return (
    <footer css={style}>
      <h5>
        My weather app all rights reserved
        <AiOutlineTrademarkCircle /> - Data collected from Openweathermap.org
        <AiOutlineTrademarkCircle />
      </h5>
    </footer>
  );
};

export default Footer;
