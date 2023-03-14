import { Input, InputRef } from 'antd';
import React, { ChangeEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react';

function SpellInput(props: { word: string; spellCB: (spellStatus: boolean) => void }) {
  const { word, spellCB } = props;
  const [val, changeVal] = useState('');
  const ipE = useRef<InputRef>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    changeVal(text);
  };

  useEffect(() => {
    spellCB && spellCB(val === word);
    if (val === word) ipE.current?.blur();
  }, [word, val]);

  return (
    <div>
      <Input
        size="large"
        placeholder="输入单词"
        value={val}
        ref={ipE}
        onChange={handleChange}
        maxLength={word.length}
      />
    </div>
  );
}

export default SpellInput;
