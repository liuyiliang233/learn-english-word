import { useInfiniteScroll } from 'ahooks';
import React, { useMemo, useRef } from 'react';
import cet4 from '../../assets/cet4_word.json';
import { WORD } from '../../types';
import { getRandomStr } from '../../utils/random';
import WordSpellItem from '../WordSpellItem';
import './index.less';

interface Result {
  list: WORD[];
  nextId: string;
}
const wordList = cet4;

function getLoadMoreList(nextId: string | undefined, limit: number): Promise<Result> {
  let start = 0;
  if (nextId) {
    start = wordList.findIndex((i) => i === nextId);
  }
  const end = start + limit;
  const list = wordList.slice(start, end);
  const nId = wordList.length >= end ? wordList[end] : undefined;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list,
        nextId: nId,
      });
    }, Math.random() * 2000 + 1000);
  });
}

const InfinityScroll: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { data, loading, loadMore, loadingMore, noMore } = useInfiniteScroll((d) => getLoadMoreList(d?.nextId, 4), {
    target: ref,
    isNoMore: (d) => d?.nextId === undefined,
  });

  return (
    <div className="infinite-scroll-tab" ref={ref}>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="infinite-scroll-list-contain">
          {data?.list?.map((item) => {
            return <WordSpellItem item={item} key={item.word} />;
          })}
        </div>
      )}

      <div style={{ marginTop: 38 }}>
        {!noMore && (
          <button type="button" onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? '加载更多...' : '点我加载更多'}
          </button>
        )}

        {noMore && <span>--底线--</span>}
      </div>
    </div>
  );
};

export default InfinityScroll;
