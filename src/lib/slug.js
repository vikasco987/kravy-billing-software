export function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function deslugify(slug) {
  return slug.replace(/-/g, " ").replace(/\s+/g, " ").trim();
}
