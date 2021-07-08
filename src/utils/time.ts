export async function delayAsync({ delay } = { delay: 0 }) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}
