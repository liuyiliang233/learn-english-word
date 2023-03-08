import { Input } from 'antd';
import React, { ChangeEventHandler, useEffect, useState } from 'react';

function SpellInput(props: { word: string; spellCB: (spellStatus: boolean) => void }) {
  const { word, spellCB } = props;
  const [val, changeVal] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    changeVal(text);
  };

  useEffect(() => {
    spellCB && spellCB(val === word);
  }, [word, val]);

  return (
    <div>
      <Input size="large" placeholder="输入单词" value={val} onChange={handleChange} />
    </div>
  );
}

export default SpellInput;
