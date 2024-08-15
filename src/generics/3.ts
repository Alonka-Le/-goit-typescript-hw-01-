function merge<T, K>(objA: T, objB: K): T & K {
  return Object.assign({}, objA, objB);
}
