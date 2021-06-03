export function align(position) {
  switch (position) {
    case "right":
      return "row-reverse";
    case "top":
      return "column";
    case "down":
      return "column-reverse";
    default:
      return "row";
  }
}
