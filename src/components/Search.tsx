import { useState, useEffect, useMemo } from "react";

type Props = {
  onChange: (value: string) => void;
};

export const Search = (props: Props) => {
  const { onChange } = props;
  const [value, setValue] = useState("");

  const func = useMemo(() => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  }, []);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <div>
      <input type="text" value={value} onChange={func} />
    </div>
  );
};
