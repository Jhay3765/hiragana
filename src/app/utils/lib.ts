export function shuffleNumbers(seed: number): number[] {
  const numbers: number[] = [0, 1, 2, 3];

  // Use a deterministic random number generator based on seed
  const random = (max: number) => Math.floor(seed * max) % max;

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
}
