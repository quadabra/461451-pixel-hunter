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
      score = score + it.correct * 100 + it.time * 50;
    });
    return score + lives * 50;
  } else {
    return -1;
  }
};

const answersFull = [
  {
    correct: true,
    time: 1
  },
  {
    correct: true,
    time: -1
  },
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
    time: 0
  },
];

const answersFew = [
  {
    correct: true,
    time: 0
  },
  {
    correct: true,
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
