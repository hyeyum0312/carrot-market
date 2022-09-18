import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
          <span className="font-semibold text-3xl">Select Item</span>
          <div className="flex justify-between my-2">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
          </div>
          <div className="flex justify-between">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
          </div>
          <div className="mt-2 pt-2 border-t-2 flex justify-between">
              <span>total</span>
              <span className="font-semibold">$10</span>
          </div>
          <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500
          hover:text-black
          active:bg-yellow-500
          focus:bg-red-500">checkout</div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow">
          <div className="bg-blue-500 p-6 pb-14">
              <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 bg-white relative -top-5">
              <div className="flex items-end relative -top-16 justify-between">
                  <div className="flex flex-col items-center">
                      <span className="text-sm text-gray-500">Orders</span>
                      <span className="font-medium">340</span>
                  </div>
                  <div className="h-24 w-24 bg-red-400 rounded-full"></div>
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
                      <button className="w-5 h-4 rounded-full bg-yellow-500"></button>
                      <button className="w-5 h-4 rounded-full bg-indigo-500"></button>
                      <button className="w-5 h-4 rounded-full bg-teal-500"></button>
                      <input type="radio"/>
                      <input type="radio"/>
                      <input type="radio"/>
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
      <div className="bg-white p-6 rounded-3xl shadow"></div>
    </div>

  )
}

export default Home
