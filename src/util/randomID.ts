const PREFIXs = 'abcdefghijklmnopqrstuvwxyz';

export function randomID() {
  const p = PREFIXs[Math.floor(Math.random() * PREFIXs.length)]; // 随机前缀，用字母，避免数字开头

  const a = Math.random().toString(32).slice(-6);
  const b = new Date().valueOf().toString(32).slice(-2);

  return [p, a, b].join('');
}
