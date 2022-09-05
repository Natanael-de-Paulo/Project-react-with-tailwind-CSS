import { Form } from '../Form'
const img =
  'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/15/64/1564425_v2.jpeg'

export function Banner() {
  return (
    <>
      <div className="relative" style={{ height: '28.12em' }}>
        <img
          src={img}
          className="w-full h-full contrast-100 brightness-50 absolute -z-10 top-0 left-0 object-cover"
          alt="imagem"
          loading="lazy"
        />
        <div className="container max-w-5xl h-full mx-auto flex items-center justify-center">
          <div>
            <div className="text-center space-y-1">
              <h1 className="text-gray-200 text-3xl"> Onde você quer ir? </h1>
              <p className="text-green-100">
                Escolha o estado e cidade para achar os melhores resorts
              </p>
            </div>

            <div className="mt-8">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
