// eslint-disable-next-line consistent-return
export default function counting(obj) {
  const a = obj.health;
  if (a > 50) { return 'healthy'; }
  if (a <= 50 && a >= 15) { return 'wounded'; }
  if (a < 15 && a > 0) { return 'critical'; }
  return 'you are already dead';
}
