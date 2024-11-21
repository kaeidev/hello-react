type Props = {
  onButtonClick: () => void;
  count: number;
};

export const Body = (props: Props) => {
  const { onButtonClick, count } = props;
  // <Fragment />
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onButtonClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
