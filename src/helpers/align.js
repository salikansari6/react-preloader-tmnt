export function align(position) {
  switch (position) {
    case "right":
      return "row-reverse";
    case "top":
      return "column";
    case "bottom":
      return "column-reverse";
    default:
      return "row";
  }
}
