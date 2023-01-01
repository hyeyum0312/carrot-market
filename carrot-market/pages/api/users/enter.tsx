import type {NextApiRequest, NextApiResponse} from 'next'
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {phone, email} = req.body;

    const user = await client.user.upsert({
        where: {
            ...(phone ? {phone: +phone}: ''),
            ...(email ? {email}: ''),
        },
        create: {
            name: "Anonymous",
            ...(phone ? {phone: +phone}: ''),
            ...(email ? {email}: ''),
        },
        update: {}
    })
    console.log(user)
    console.log(req.body)
    return res.status(200).end();
}

export default withHandler('POST', handler);
