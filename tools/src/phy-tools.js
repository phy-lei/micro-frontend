// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction(name) {
  console.log(
    '%c [ xxx ]',
    'font-size:13px; background:pink; color:#bf2c9f;',
    222 + `${name}`
  );
  return 'public module return';
}
