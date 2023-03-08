import Checkbox from 'antd/es/checkbox/Checkbox';
import cx from 'classnames';
import React, { useState } from 'react';
import { WORD } from '../../types';
import SpellInput from '../SpellInput';
import './index.less';

function WordSpellItem(props: { item: WORD }) {
  const { item } = props;
  const [isValid, changeValid] = useState(false);
  const [showWord, changingWordStatus] = useState(false);
  function isValidFc(isValid: boolean) {
    changeValid(isValid);
  }

  return (
    <div className="word-spell-item" {...props}>
      <span className={cx('word', { 'hide-word': !showWord })} onClick={() => changingWordStatus(!showWord)}>
        {item.word}
      </span>
      <span className="meaning hide-text">
        {item.parts}
        {'  ' + item.meaning}
      </span>
      <span className="spell-inp">
        <SpellInput word={item.word} spellCB={isValidFc} />
      </span>
      <span className="judge">
        <Checkbox style={{ pointerEvents: 'none' }} checked={isValid} />
      </span>
    </div>
  );
}

export default WordSpellItem;
