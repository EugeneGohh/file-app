// Mock Database

const file_db = new Array(16).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `File ${i}`,
}));

module.exports = file_db;
