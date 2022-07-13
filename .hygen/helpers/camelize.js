module.exports = (s = '') => s.replace(/-./g, (x) => x[1].toUpperCase());
