import * as icon from 'react-icons/md'
import { Form } from '../Form'

export function FeatureResource() {
  return (
    <>
      <section className="container max-w-5xl mx-auto px-4 py-10 flex flex-col-reverse lg:flex-row gap-10 flex-wrap">
        <article className="flex-1 min-w-[30%]">
          <p className="text-sm text-gray-400 font-medium uppercase">
            Resort em destaque
          </p>
          <h2 className="text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-sm text-gray-400 font-medium mt-2">
            Hotel qualidade 5 stars
          </p>
          <div className="text-sm text-gray-400 font-medium text-justify mt-4 space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique hic expedita natus rem suscipit doloremque eligendi
              minus mollitia sint maiores recusandae, perferendis soluta! Velit
              facere excepturi id molestias similique tenetur!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              beatae ullam minima molestias nihil laboriosam, consequatur culpa,
              eius eum, aperiam voluptate aliquam doloremque quaerat eligendi!
            </p>

            <a
              href="#"
              className="bg-yellow-400 max-w-[200px] w-full py-2 border border-gray-300 rounded text-yellow-800 flex items-center justify-center gap-4"
            >
              Solicitar reserva
              <icon.MdArrowForward width={24} height={24} />
            </a>
          </div>
        </article>

        <div className="flex-shrink-0 flex-grow lg:flex lg:min-w-[40%]">
          <div className=" w-full h-64 lg:ml-auto bg-gray-700"></div>
        </div>
      </section>
    </>
  )
}

export function ResortsGrid() {
  return (
    <>
      <section className="container max-w-5xl mx-auto px-4 py-4">
        <article>
          <h3 className="text-2xl text-gray-500 font-semibold text-center mb-8">
            Conheça mais resorts
          </h3>
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6">
            <div className="relative md:col-span-2 md:row-span-2  overflow-hidden rounded-lg">
              <div className="absolute bottom-0 pl-4 pb-4 text-white z-10">
                Park Resort
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62FJTlJkwJoIYKjEnNCJLw4YFAsi9DfohgZu3vztScEznylMWBuelZUa2e8T43Op1OFw&usqp=CAU"
                alt=""
                className="w-full h-full object-cover brightness-75"
              />
            </div>
            <div className="relative md:col-span-2 overflow-hidden rounded-lg md:max-h-[11em] ">
              <div className="absolute bottom-0 pl-4 pb-4 text-white z-10">
                Park Resort
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62FJTlJkwJoIYKjEnNCJLw4YFAsi9DfohgZu3vztScEznylMWBuelZUa2e8T43Op1OFw&usqp=CAU"
                alt=""
                className="w-full h-full object-cover brightness-75"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute bottom-0 pl-4 pb-4 text-white z-10">
                Park Resort
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62FJTlJkwJoIYKjEnNCJLw4YFAsi9DfohgZu3vztScEznylMWBuelZUa2e8T43Op1OFw&usqp=CAU"
                alt=""
                className="w-full h-full object-cover brightness-75"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute bottom-0 pl-4 pb-4 text-white z-10">
                Park Resort
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62FJTlJkwJoIYKjEnNCJLw4YFAsi9DfohgZu3vztScEznylMWBuelZUa2e8T43Op1OFw&usqp=CAU"
                alt=""
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          </div>
        </article>
        <div className="py-20">
          <Form />
        </div>
      </section>
    </>
  )
}
