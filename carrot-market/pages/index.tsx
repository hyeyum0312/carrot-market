import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
          <span className="font-semibold text-3xl">Select Item</span>
          <ul>
              {[1,2,3,4,5].map((i)=>(
                <div key={i} className="flex justify-between my-2 odd:bg-yellow-50 even:bg-red-50">
                    <span className="text-gray-500">Grey Chair</span>
                    <span className="font-semibold">$19</span>
                </div>
              ))}
          </ul>
          <ul>
              {['a','b','c',''].map((c,i)=>(
                  <li className="bg-red-500 py-2 empty:hidden" key={i}>{c}</li>
              ))}
          </ul>
          <div className="mt-2 pt-2 border-t-2 flex justify-between">
              <span>total</span>
              <span className="font-semibold">$10</span>
          </div>
          <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500
          hover:text-black
          active:bg-yellow-500
          focus:bg-red-500">checkout</div>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow group">
          <div className="bg-blue-500 p-6 pb-14">
              <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 bg-white relative -top-5">
              <div className="flex items-end relative -top-16 justify-between">
                  <div className="flex flex-col items-center">
                      <span className="text-sm text-gray-500">Orders</span>
                      <span className="font-medium">340</span>
                  </div>
                  <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-200 transition-colors"></div>
                  <div className="flex flex-col items-center">
                      <span className="text-sm text-gray-500">Spents</span>
                      <span className="font-medium">340</span>
                  </div>
              </div>
              <div className="relative mt-5 flex flex-col items-center -mt-10 -mb-5">
                  <span className="text-lg font-medium">Tony Molloy</span>
                  <span className="text-sm text-gray-500">미국</span>
              </div>
          </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow">
          <div className="flex mn-5 justify-between items-center">
              <span>⬅️</span>
              <div className="space-x-3 flex items-center">
                  <div>⭐️4.9</div>
                  <div className="shadow-xl p-2 rounded-md-5">💖</div>
              </div>
          </div>
          <div className="bg-zinc-400 h-72 mb-5"></div>
          <div className="flex flex-col">
              <span className="font-medium mb-1.5  text-xl">Swoon Lounge</span>
              <span className="text-xs text-gray-500">Chair</span>
              <div className="mt-3 mb-5 flex justify-between items-center">
                  <div className="space-x-2">
                      <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
                      <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 bg-indigo-500 transition"></button>
                      <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 bg-teal-500 transition"></button>
                  </div>
                  <div className="flex items-center space-x-5">
                      <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-gray-500">-</button>
                      <span>1</span>
                      <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-gray-500">+</button>
                  </div>
              </div>
          </div>
          <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">$450</span>
              <button className="bg-blue-500 text-center text-white text-xl py-2 px-5">Add to cart</button>
          </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow">
          <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within::bg-blue-100">
              <input type="text" required placeholder="Username" className="required:border-2 border-yellow-500 placeholder-shown:bg-teal-500 placeholder:text-red-500 valid:bg-teal-500"/>
              <input type="password" required placeholder="password" className="invalid:bg-red-500"/>
              <input type="submit" value="Login" disabled className="disabled:bg-red-200"/>
          </form>
      </div>
        <div className="bg-white p-6 rounded-3xl shadow">
            <form className="flex flex-col space-y-2">
                <input
                    type="text"
                    required
                    placeholder="테스트중"
                    className="border p-1 border-gray-400 rounded peer"
                />
                <span className="hidden peer-invalid:block peer-invalid: text-teal-500">This input is invalid</span>
                <span className="hidden peer-valid:block peer-invalid:text-red-500">Awesome username</span>
                <span className="hidden peer-valid:block peer-invalid:text-red-500 peer-hover:text-red-500">Hello</span>
                <input type="submit" value="Login" className=""/>
            </form>
        </div>

        <div className="bg-white flex flex-col space-y-2 p-5">
            <details>
                <summary className="select-none cursor-pointer">what is my fav. food</summary>
                <span>김치</span>
                <ul className="list-decimal marker:text-teal-500">
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                </ul>
            </details>
        </div>

        <div className="bg-white flex flex-col space-y-2 p-5">
            <input type="file" className="file:cursor-wait file:hover:text-purple-400 file:hover:border file:hover:bg-white file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"/>
        </div>

        <div className="bg-white flex flex-col space-y-2 p-5">
            <p className="first-letter:text-7xl first-letter:hover:text-purple-400">안녕하세요 저는 리액트를 배우고있어요.</p>
        </div>

    </div>

  )
}

export default Home
