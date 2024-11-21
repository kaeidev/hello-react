import styled, { css } from "styled-components";

type Props = {
  src: string;
  url: string;
  alt: string;
  isReact?: boolean;
};

export const Logo = (props: Props) => {
  const { src, url, alt, isReact } = props;
  return (
    <a href={url} target="_blank">
      <StyledLogo src={src} alt={alt} react={isReact} />
    </a>
  );
};

const StyledLogo = styled.img<{ react?: boolean }>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  :hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${({ react }) =>
    react &&
    css`
      animation: logo-spin infinite 20s linear;
      :hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }
    `}
`;

// ${`background-color: red;`}

// ${() => {
//   return `background-color: red;`;
// }}

// ${({ react }) => {
//   return react && `background-color: red;`;
// }}

// ${({ react }) => {
//   return (
//     react &&
//     css`
//       div {
//         background-color: red;
//       }
//     `
//   );
// }}
