export function fromByteToMB(sizeInBytes: number): number {
  const sizeInMB = sizeInBytes / (1024 * 1024);
  return parseFloat(sizeInMB.toFixed(2));
}
