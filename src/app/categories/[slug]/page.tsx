'use client';

import { useParams } from 'next/navigation';

interface Category {
   name: string;
   description: string;
   // ... otras propiedades de la categoría
 }

 async function getCategoryData(slug: string): Promise<Category> {
   const res = await fetch(`/api/categories/${slug}`);
   const data = await res.json();
   return data;
 }

 export default async function CategoryPage(): Promise<JSX.Element> {
   const params = useParams();
   const slug = params.slug as string; // Asegúrate de que slug sea un string

   const categoryData = await getCategoryData(slug);

   return (
     <div>
      <h1>Esta es la pagina de la categoria</h1>
       <h1>{categoryData.name}</h1>
       <p>{categoryData.description}</p>
       {/* ... mostrar otros datos de la categoría ... */}
     </div>
 );
 }

