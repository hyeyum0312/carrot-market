import type { NextApiRequest, NextApiResponse } from 'next'
import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    //리퀘스트 요청이 post가 아니면 bad request에도 응덥할것이다. get인 경우엔 
    if (req.method !== "POST") {
        res.status(401).end();
    }
    console.log(req.body);
    res.json({OK:true});
}

export default withHandler('POST', handler)



// 이건 client 연습할때 쓴거
// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     await client.user.create({
//         data : {
//             email : 'hi',
//             name : '혜연'
//         }
//     });
//     res.json({
//         ok: true
//     })
// }
