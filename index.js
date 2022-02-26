let setA = [1, 2, 3];
let setB = [3, 4, 5];
let setC = [5, 6, 7];

class Set {
  constructor(...args) {
    this.value = this.#union(args);
  }
  #result = undefined;
  result() {
    const temp = this.#result || this.value;
    this.#result = undefined;
    return temp;
  }

  set(args) {
    this.value = this.#union(args);
  }
  add(args) {
    this.value.push(args);
    this.value = this.#union([this.value]);
  }
  clear() {
    this.value = [];
    this.#result = undefined;
  }
  remove(args) {
    this.value = this.value.filter(function (arg) {
      return arg !== args;
    });
  }
  size() {
    return this.value.length;
  }
  empty() {
    return !Boolean(this.value.length);
  }
  #union(args) {
    let join = [];
    args.forEach(function (arg) {
      join = [...join, ...arg];
    });
    let temp = [];
    join.forEach(function (arg) {
      if (temp.indexOf(arg) === -1) temp.push(arg);
    });
    return temp;
  }
  union(args) {
    this.#result = this.#union([
      this.#result ? this.#result : this.value,
      args.value,
    ]);
    return this;
  }
  compliment(args) {
    const temp = [];
    const value = this.#result ? this.#result : this.value;
    value.forEach(function (z) {
      if (args.value.indexOf(z) === -1) {
        temp.push(z);
      }
    });
    this.#result = temp;
    return this;
  }
  disjoint(args) {
    let condition = true;
    const value = this.#result ? this.#result : this.value;
    value.forEach(function (z) {
      if (args.value.indexOf(z) !== -1) {
        condition = false;
      }
    });
    return condition;
  }
  intersect(args) {
    const intersect = [];
    const value = this.#result ? this.#result : this.value;
    value.forEach(function (z) {
      if (args.value.indexOf(z) !== -1) {
        intersect.push(z);
      }
    });
    this.#result = this.#union(intersect);
    return this;
  }
  equivalent(args) {
    let condition = false;
    const value = this.#result ? this.#result : this.value;
    if (value.length === args.value.length) {
      condition = true;
    }
    return condition;
  }
  equal(args) {
    let condition = false;
    const value = this.#result ? this.#result : this.value;
    if (value.length !== args.value.length) return condition;
    const check = [];
    args.value.forEach((arg) => {
      if (value.indexOf(arg) === -1) {
        check.push(arg);
      }
    });
    if (check.length === 0) {
      condition = true;
    }
    return condition;
  }
  power(args) {
    return 2 ** this.value.length;
  }
}
