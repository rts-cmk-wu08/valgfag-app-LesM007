import { css, Global } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap");

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Roboto Mono",
            "Helvetica Neue", Helvetica, Arial, sans-serif, monospace;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #fff;
          overflow-x: hidden;
        }
        .container {
          background-color: rgba(135, 143, 150, 0.43);
          border-radius: 1em;
          padding: 2em;
          margin: 1em;
        }
      `}
    />
  );
};

export default GlobalStyles;
