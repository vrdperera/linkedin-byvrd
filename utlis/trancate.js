export default function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + '...see more' : string;
}
