/**
 *  sleep 等待一段时间
 *  @param {number} t 毫秒
 */
export function sleep(t: number) {
  return new Promise((res) => setTimeout(() => res, t ?? 0));
}
