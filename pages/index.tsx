import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "../slices/counterSlice";

const Home: NextPage = () => {
  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Redux Counter demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-xl mb-10">The current counter value is {count}</h1>
        <div className="flex flex-row gap-10">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => dispatch(increment())}
          >
            + Increment
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => dispatch(decrement())}
          >
            - Decrement
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
