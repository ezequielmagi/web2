

import { getCategories } from '@/lib/get-categories'
import Link from 'next/link'

export default async function Categories () {
  const categories = await getCategories()

  if (categories.length === 0) {
    return <h1>No products found</h1>
  }

  return (
    <section id='categories' className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-4 text-center"> 
          <p className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Todas las categorias</p>
        </div>

        <div className="mb-4 mt-6 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:justify-center lg:mb-0">
          {
            categories.map((category, index) => (
              <Link href={`/categories/${category.slug}`} key={index}>
                <div className="w-80 p-4 rounded-md bg-slate-500 mx-auto sm:mx-0"> 
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="cursor-pointer hover:opacity-80 transition duration-300 w-full h-48 object-cover" 
                  />
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mt-4">{category.name}</p>
                </div>
              </Link> 
            ))
          }
        </div>
      </div>  
    </section>  
  )
}