import Image from 'next/image'
import { generalData } from '../data/general'
import { contentData } from '../data/content'
import type { Content } from '../data/content'

const Content: React.FC<Content> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map(
          (
            item: {
              date:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined
              subTitle:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined
              description:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined
            },
            index: React.Key | null | undefined,
          ) => {
            return (
              <div className="flex" key={index}>
                <div className="mr-8 w-full max-w-[100px] text-slate-400 dark:text-slate-400">
                  {item.date}
                </div>
                <div className="flex flex-1 flex-col">
                  <h4>{item.title}</h4>
                  <p className="text-slate-600 dark:text-gray-400">
                    {item.subTitle}
                  </p>
                  {item.description ? (
                    <p className="mt-2 text-slate-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </div>
            )
          },
        )}
      </div>
    </section>
  )
}

// Page component
export default function Page() {
  return (
    <>
      <main className="relative mx-auto min-h-screen max-w-xl px-6 py-20 font-light">
        <section className="flex items-center">
          <div className="relative h-24 w-24 overflow-hidden">
            <div className="mask h-full">
              <Image
                alt="Author"
                src={generalData.avatar}
                layout="fill"
                objectFit="cover"
                className="  rounded-full"
              />
            </div>
          </div>
          <div className="ml-4">
            <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
              {generalData.name}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {generalData.jobTitle}
            </p>
            {generalData.website ? (
              <span className="text-sm text-slate-400 dark:text-slate-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, '')
                    .replace('www.', '')}
                </a>
              </span>
            ) : null}
          </div>
        </section>
        <section className="my-9 text-sm">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100">About</h3>
          <div className="text-slate-600 dark:text-slate-300">
            <p>{generalData.about}</p>
          </div>
        </section>
        {contentData.map((content: any, index: any) => {
          return <Content {...content} key={index} />
        })}
      </main>
    </>
  )
}
