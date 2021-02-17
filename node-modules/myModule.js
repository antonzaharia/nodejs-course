let count = 0;

const inc = () => ++count;
const dec = () => --count;

const times = (times, action) => {
  for (let i = 0; i < times; i++) {
    action();
  }
};

const getCount = () => count;

module.exports = {
  inc,
  dec,
  times,
  getCount,
};
