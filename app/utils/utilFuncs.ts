export const defaultStroke = (className: string) =>
  new RegExp("stroke-*", "g").test(className) ? "" : "stroke-2"
