let expect = require("expect");
let flatten = require("./");

describe("Flatten object", () => {
  it("input flat object and returns a flat object", () => {
    const expected = { a: 1, b: 2 };
    expect(flatten(expected)).toEqual(expected);
  });

  it("should de-nest a 2 level nested object", () => {
    const obj = { a: { b: 1 } };
    const expected = { "a.b": 1 };

    expect(flatten(obj)).toEqual(expected);
  });

  it("should de-nest a 3 level nested object with multiple values", () => {
    const obj = { a: { b: { c: 1, d: 2 } }, e: 3 };
    const expected = { "a.b.c": 1, "a.b.d": 2, e: 3 };

    expect(flatten(obj)).toEqual(expected);
  });
});
