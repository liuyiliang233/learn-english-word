import { Input, InputRef } from 'antd';
import React, { ChangeEventHandler, MutableRefObject, useEffect, useRef, useState } from 'react';
import { sleep } from '../../utils';

function SpellInput(props: { word: string; spellCB: (spellStatus: boolean) => void }) {
  const { word, spellCB } = props;
  const [val, changeVal] = useState('');
  const ipE = useRef<InputRef>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    changeVal(text);
  };

  useEffect(() => {
    const isValid = val === word;
    if (isValid) {
      ipE.current?.blur();
      spellCB && spellCB(isValid);
    }
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
