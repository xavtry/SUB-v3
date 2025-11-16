export function transformURL(input) {
  if (!input.startsWith("http")) {
    return `/proxy?url=https://${input}`;
  }
  return `/proxy?url=${input}`;
}

