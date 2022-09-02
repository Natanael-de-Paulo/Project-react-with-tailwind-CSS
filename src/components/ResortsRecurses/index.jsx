import * as icon from 'react-icons/md'

export function FeatureResource() {
  return (
    <>
      <section className="container  mx-auto px-4 py-10 flex gap-4 flex-wrap">
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

        <div className=" flex-shrink-0 grow max-w-md w-full h-64 bg-gray-700"></div>
      </section>
    </>
  )
}
