import type { NextPage } from "next";
import {useState} from "react";
import Layout from "@components/layout";
const LiveDetail: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className="py-10 px-4 space-y-4">
                <div className="w-full rounded-md shadow-md bg-slate-400 aspect-square"></div>
                <h3 className="text-gray-800 font-semibold text-center text-2xl mt-2">Let&apos;s try potatos</h3>
            </div>
        </Layout>
    );
};

export default LiveDetail;