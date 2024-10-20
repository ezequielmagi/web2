import { getHomeInfo } from '@/lib/get-home-info';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';



export const Hero = async () => {

    const { title , description , image } = await getHomeInfo();

 
   

  return (
    <div className='h-2/3 min-h-80 flex flex-col justify-center p-4' style={{ 
      backgroundImage: `url(${image})`, 
      backgroundSize: 'cover', // Ajusta según tus necesidades
      backgroundPosition: 'center', // Ajusta según tus necesidades
    }}>
      <div>
        <h1 className="text-2xl text-white">{title}</h1>
        <div className='text-slate-50'>
          <BlocksRenderer content={description} />
        </div>
      </div>
        
    </div>
  )
}
