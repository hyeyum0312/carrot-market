import type { NextPage } from "next";
import {useState} from "react";
import Layout from "@components/layout";

const Index: NextPage = () => {
    return (
        <Layout title="라이브" hasTabBar>
            <div className="py-10 px-4 space-y-4 divide-y-2">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                    <div className="pt-4" key={i}>
                        <div className="w-full rounded-md bg-slate-400 aspect-square"></div>
                        <h3 className="text-gray-700 text-lg mt-2">Let&apos;s try potatos</h3>
                    </div>
                ))}
                <button className="fixed hover:bg-orange-500 cursor-pointer transition-colors bottom-24 right-5 bg-orange-400 rounded-full text-white p-4 shadow-xl border-transparent">

                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                        />
                    </svg>
                </button>
            </div>
        </Layout>
    );
};

export default Index;