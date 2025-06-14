// utils/slugGenerator.ts
import slugify from 'slugify';

export const generateUniqueSlug = async (
  name: string,
  existingSlugs: string[]
): Promise<string> => {
  let baseSlug = slugify(name, {
    lower: true,
    strict: true,
    trim: true
  });

  let slug = baseSlug;
  let counter = 1;

  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
};