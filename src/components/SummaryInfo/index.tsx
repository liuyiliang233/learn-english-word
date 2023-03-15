import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { getRandomStr } from '../../utils/random';
import './index.less';

/** 汇总统计信息 */
function SummaryInfo() {
  const { total, userName } = useSelector(({ app }: IRootState) => ({
    total: app.total,
    userName: app.userName,
  }));
  return (
    <div className="summary-info">
      <div className="user-name">玩家：{userName}</div>
      <div className="total">累计完成：{total}个</div>
    </div>
  );
}

export default SummaryInfo;
