import {NextApiRequest, NextApiResponse} from "next";
import client from "../../libs/server/client";
import {apiResolver} from "next/dist/server/api-utils/node";

export default async function withHandler(
    method : "GET" | "POST" | "DELETE",
    fn : (req: NextApiRequest, res: NextApiResponse) => void
) {
    return async function (req: NextApiRequest, res: NextApiResponse){

    };
}