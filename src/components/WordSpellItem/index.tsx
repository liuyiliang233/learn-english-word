import Checkbox from 'antd/es/checkbox/Checkbox';
import Item from 'antd/es/list/Item';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { IDispatch, store } from '../../store';
import { WORD } from '../../types';
import { showConfetti } from '../Confetti';
import SpellInput from '../SpellInput';
import './index.less';

const WordSpellItem: React.FC<{
  item: WORD;
}> = (props) => {
  const { item } = props;
  const [isValid, changeValid] = useState(false);
  const [showWord, changingWordStatus] = useState(false);
  const dispatch = useDispatch<IDispatch>();
  function isValidFc(isValid: boolean) {
    if (isValid) {
      changeValid(true);
      changingWordStatus(true);
      dispatch.app.increase(null);
    }
  }
  useEffect(() => {
    if (isValid) showConfetti();
  }, [isValid]);
  return (
    <div className={`word-spell-item ${isValid ? 'disable-item' : ''}`}>
      <span className={cx('word', { 'hide-word': !showWord })} onClick={() => changingWordStatus(!showWord)}>
        {item.word}
      </span>
      <span className="meaning single-overflow-text">
        {item.parts}
        {'  ' + item.meaning}
      </span>
      <span className="spell-inp">
        <SpellInput word={item.word} spellCB={isValidFc} />
      </span>
      <span className="judge">
        <Checkbox checked={isValid} />
      </span>
      {isValid && <div className="mask"></div>}
    </div>
  );
};

export default WordSpellItem;
