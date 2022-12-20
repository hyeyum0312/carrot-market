import type { NextApiRequest, NextApiResponse } from 'next'
import client from "../../../libs/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    console.log('req',req.body)
    res.status(200).end()
}
// 어떤 요청이 오든 status는 200을 보낼것임 -> 그 다음 연결을 end 끊는다.


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
