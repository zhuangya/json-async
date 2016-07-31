'use strict';

function parse(s) {
  return new Promise((resolve, reject) => {
    try {
      return resolve(JSON.parse(s));
    } catch (err) {
      return reject(err);
    }
  });
}

function stringify(j) {
  return new Promise((resolve, reject) => {
    try {
      return resolve(JSON.stringify(j));
    } catch (err) {
      return reject(err);
    }
  });
}

module.exports = {
  parse,
  stringify,
  p: parse,
  s: stringify
};
