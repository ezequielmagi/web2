// import { query } from './strapi';

// const { STRAPI_HOST } = process.env

// export function getCategories() {
//   return query("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url")
//     .then( res => {
//         return res.data.map( category => {
//             const { name, slug, description, image: rawImage } = category
//             const image = `${STRAPI_HOST}/${rawImage.url}`
//             return { name, slug, description, image }
//         })
//     })
// }

import { query } from './strapi';
import * as cheerio from 'cheerio'; // Importa cheerio

const { STRAPI_HOST } = process.env

export function getCategories() {
  return query("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url")
    .then( res => {
      return res.data.map( category => {
        const { name, slug, description, image: rawImage } = category
        const image = `${STRAPI_HOST}/${rawImage.url}`
        return { name, slug, description, image }
      })
    })
}

export async function getCategoryBySlug(slug: string) {
  const res = await query(`product-categories/${slug}?populate[image][fields][0]=url`);
  const category = res.data;

  // Construye la URL completa de la imagen
  const image = `${STRAPI_HOST}/${category.image.url}`;

  return {
    name: category.name,
    slug: category.slug,
    description: category.description,
    image: image
  };
}