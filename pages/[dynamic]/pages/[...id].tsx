/* eslint-disable @next/next/no-img-element */
// pages/[dynamic]/[pageType]/[...id].js
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

const DetailPage = ({ dynamic, pageType, id,data }:{dynamic:any, pageType:any, id:any,data:any}) => {
  console.log(data)
  const slug = useRouter().asPath.split('/')[1]
  console.log(useRouter().asPath.split('/'))
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
                      href={`/${slug}/detail/${data[0].slug}-${data[0].id}`}
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
                      href={`/${slug}/detail/${data[0].slug}-${data[0].id}`}
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
                        href={`/${slug}/detail/${data[0].slug}-${data[0].id}`}
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
                          href={`/${slug}/detail/${item.slug}-${item.id}`}
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
                          href={`/${slug}/detail/${item.slug}-${item.id}`}
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

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { params } = context;
    const { dynamic, pageType, id } = params as ParsedUrlQuery & { dynamic: string; pageType: string; id: string };
    const category = [
      { id: 1, slug: "soi-keo", name: "Trang soi keo" },
      { id: 2, slug: "nhan-dinh", name: "Trang nhan dinh" },
      { id: 3, slug: "tips", name: "Trang Tips" },
      { id: 4, slug: "tin-tuc", name: "Trang tin tuc" },
    ];
    const foundCategory = category.find(category => category.slug === dynamic);
    const response = await axios.get(
      `https://api.uni-tech.xyz/wp-json/wp/v2/posts?per_page=10&page=${id}&orderby=date&order=desc&categories=${foundCategory?.id}`
    );
    return {
      props: {
        dynamic: dynamic || null,
        pageType: pageType || null,
        id: id,
        data:response.data
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

export default DetailPage;
