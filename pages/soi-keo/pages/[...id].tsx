/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';


const OddPredictionPage = ({
  data,
  totalPages,
  page,
}: {
  data: any;
  totalPages: any;
  page: any;
}) => {


  console.log('Runfile id');
  return (
    <>
      <div className='layout'>
        <div>
          <div className='h-full rounded-md'>
            <div className='divide-list'>
              <div className='p-2.5'>
                <div className='flex flex-col rounded-md bg-light-match dark:bg-dark-match md:flex-row'>
                  <div className=' w-full rounded-none md:w-3/5 md:rounded-l-md'>
                    <a
                      href={`/soi-keo/detail/${data[0].slug}-${data[0].id}`}
                    >
                      <img
                        src={data[0].featured_image_url}
                        alt=''
                        className='w-full rounded-none object-cover md:rounded-l-md'
                      />
                    </a>
                  </div>
                  <div className=' flex w-full flex-col place-content-center gap-4 rounded-none p-4 md:w-2/5 md:rounded-r-md lg:gap-8'>
                    <a
                      href={`/soi-keo/detail/${data[0].slug}-${data[0].id}`}
                    >
                      <h4
                        className='text-2xl font-bold leading-8 tracking-normal hover:text-logo-blue'
                        dangerouslySetInnerHTML={{
                          __html: data.slice(0, 1)[0].title.rendered,
                        }}
                      ></h4>
                    </a>

                    <p
                      className='font-normal leading-5 tracking-normal'
                      dangerouslySetInnerHTML={{
                        __html: data.slice(0, 1)[0].excerpt.rendered,
                      }}
                    ></p>
                    <div className='text-base font-bold uppercase leading-5 tracking-normal text-logo-blue'>
                      <a
                        href={`/soi-keo/detail/${data[0].slug}-${data[0].id}`}
                      >
                        <h4>CHI TIẾT</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-full p-2.5'>
                <div className='grid grid-cols-3 gap-x-2'>
                  {data.slice(1).map((item: any, index: number) => (
                    <div key={index}>
                      <div className=''>
                        <a
                          href={`/soi-keo/detail/${item.slug}-${item.id}`}
                        >
                          <img
                            src={item.featured_image_url}
                            alt=''
                            className='w-full rounded-none object-cover md:rounded-l-md lg:h-52'
                          />
                        </a>
                      </div>
                      <div className='py-2.5'>
                        <a
                          href={`/soi-keo/detail/${item.slug}-${item.id}`}
                          className='flex flex-1 items-center text-csm font-semibold leading-6 tracking-normal hover:text-logo-blue'
                          dangerouslySetInnerHTML={{
                            __html: item.title.rendered,
                          }}
                        ></a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('RunstaticsProps id', params);
  try {
    let id: string;

    if (params && params.id) {
      id = String(params.id[params.id.length - 1]);
    } else {
      id = '1';
    }

    const response = await axios.get(
      `https://api.uni-tech.xyz/wp-json/wp/v2/posts?per_page=10&page=${id}&orderby=date&order=desc&categories=3`
    );
    const data = response.data;

    const xWpTotalPagesHeader = response.headers['x-wp-totalpages'];

    return {
      props: {
        data,
        totalPages: xWpTotalPagesHeader,
        revalidate: 10,
        page: parseInt(id, 10),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export const getStaticPaths: GetStaticPaths = async () => {
  console.log('Run path id');
  return {
    paths: [],
    fallback: 'blocking', // Use 'blocking' for new paths
  };
};


export default OddPredictionPage;
