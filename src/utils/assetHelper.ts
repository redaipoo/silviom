export const getProjectImage = (filename: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}projects/${filename}`;
};
