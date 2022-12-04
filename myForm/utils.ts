export function* idGenerator(): Generator<number> {
  let iterator = 1;
  while (true) {
    yield iterator++;
  }
}
