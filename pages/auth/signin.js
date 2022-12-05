import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

export default function signin({ providers }) {
  return (
    <div>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48 "
          src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png"
          alt="instagram-image"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
                alt=""
              />
              <p className="text-sm italic my-10 ">
                This app is created for learning purpose
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // next-auth의 getProviders 함수는 로그인 할 수 있는 프로바이더-ex)GoogleProvider 의 리스트를 리턴한다
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
