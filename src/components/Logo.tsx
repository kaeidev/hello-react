type Props = {
  src: string;
  url: string;
  alt: string;
  className: string;
};

export const Logo = (props: Props) => {
  const { src, url, alt, className } = props;
  return (
    <a href={url} target="_blank">
      <img src={src} className={className} alt={alt} />
    </a>
  );
};
