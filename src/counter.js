function countCharacters(input) {
  if (!input || !input.trim()) {
    return null;
  }

  const normalized = input.toLowerCase().replace(/\s/g, '');

  if (!normalized) return null;

  const map = new Map();

  for (const char of normalized) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}

function formatOutput(map) {
  if (!map || map.size === 0) return '';

  return Array.from(map.entries())
    .map(([char, count]) => `${char}:${count}`)
    .join(', ');
}

module.exports = { countCharacters, formatOutput };