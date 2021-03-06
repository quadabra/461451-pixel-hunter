import {assert} from 'chai';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

const results = (answers, lives) => {
  let score = 0;
  if (answers.length >= 10) {
    answers.forEach(function (it) {
      score = score + it.CORRECT * 100 + it.time * 50;
    });
    return score + lives * 50;
  } else {
    return -1;
  }
};

const answersFull = [
  {
    CORRECT: true,
    time: 1
  },
  {
    CORRECT: true,
    time: -1
  },
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  },
];

const answersFew = [
  {
    CORRECT: true,
    time: 0
  },
  {
    CORRECT: true,
    time: 0
  }
];
const lives = 2;

describe(`results`, () => {
  it(`should sum correct answers and lives`, () => {
    assert.equal(1100, results(answersFull, lives));
  });
  it(`should return -1 if answers < 10`, () => {
    assert.equal(-1, results(answersFew, lives));
  });
});

const timer = (time) => {
  return {
    counts: time,
    tic() {
      this.counts--;
      if (this.counts <= 0) {
        return `end`;
      } else {
        return this.counts;
      }
    }
  };
};

describe(`timer`, () => {
  it(`should return correct time`, () => {
    assert.equal(5, timer(6).tic());
  });
  it(`should return end of timer`, () => {
    assert.equal(`end`, timer(1).tic());
  });
  it(`should return end of timer`, () => {
    assert.equal(`end`, timer(0).tic());
  });
});
