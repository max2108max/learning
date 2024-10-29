var myObject = {
  // определим геттер для `a`
  get a() {
      return this._a_;
  },
  // определим сеттер для `a`
  set a(val) {
      this._a_ = val * 2;
  }
};
myObject.a = 3;
myObject.a; // 4
console.log(myObject.a);
