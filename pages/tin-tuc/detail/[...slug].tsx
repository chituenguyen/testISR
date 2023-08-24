/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';




const ArticlePage = ({
  data,
}: {
  data: any;
  dataRelated: any;
}) => {
  console.log('run file slug');
  return (
    <div className=''>
      <div className='layout !mt-0 flex-col gap-y-4 lg:flex-row lg:leading-7'>
        <div className='cssFromWp space-y-2'>
          <div className='rounded-md'>
            <div className='flex flex-col p-4'>
              <div className=''>
                <h1
                  className='text-xl !font-bold leading-normal'
                  dangerouslySetInnerHTML={{
                    __html: data.title.rendered,
                  }}
                ></h1>
                <div className='mb-3 flex items-center gap-2 py-1.5'>
                  <div className='h-10 w-10 rounded-full'>
                    <img
                      src={data.author.avatar}
                      alt=''
                      className='h-10 w-10 rounded-full object-cover'
                    />
                  </div>
                  <div className='capitalize'>{data.author.name}</div>
                </div>
              </div>
              <div className=' flex-1'>
                <div
                  className='space-y-3 font-normal'
                  dangerouslySetInnerHTML={{
                    __html: data.content.rendered,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('run path slug');
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('runfileslug', params);
  try {
    let id;
    if (params && params.slug) {
      id = params.slug[0].split('-')[params.slug[0].split('-').length - 1];
      // Tiếp tục xử lý với biến id ở đây
    } else {
      id = null;
    }
    const response = await axios.get(
      `https://api.uni-tech.xyz/wp-json/wp/v2/posts/${id}`
    );

    const data = response.data;

    return {
      props: {
        key: id,
        data,
        revalidate: 10,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default ArticlePage;
