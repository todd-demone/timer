const args = process.argv.slice(2);
for (const arg of args) {
  parseFloat(arg);
  if (arg < 1 || isNaN(arg)) continue;
  setTimeout((arg) => {
    process.stdout.write('\x07');
  }, arg * 1000);
}
