/**
 * 获取随机字符串
 * @param template 只能传入入 **xyz-** 四种字符，默认*xx-z-yy-xyz-y-zz-x*
 * @returns {string}
 */
export function getRandomStr(template = 'xx-z-yy-xyz-y-zz-x') {
  return template.replace(/[xyz]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
