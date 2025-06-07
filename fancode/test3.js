/*
Implement a function that returns a new object after squashing the input object into a single level of depth where nested keys are "squashed" together with a period delimiter `.`

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

a=> 

const object = {
  a: { b: null, c: undefined },
};
squashObject(object); // { 'a.b': null, 'a.c': undefined }

const object = { a: { b: [1, 2, 3], c: ['foo'], d:[] } };
squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo', a.d:[] }

const object = {
  foo: {
    '': { '': 1, bar: 2 },
  },
};
squashObject(object); // { foo: 1, 'foo.bar': 2 }

*/
let result = {};

function squashObject(obj, parent = "") {
  if (typeof obj !== "object" || obj === null) {
    console.log("parent", parent);
    console.log("obj", obj);
    result.parent = obj;
    return;
  }

  for (key in obj) {
    let str = parent + key;
    console.log(str);
    squashObject(obj[key], str);
  }
}

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};
squashObject(object);
console.log(result); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
