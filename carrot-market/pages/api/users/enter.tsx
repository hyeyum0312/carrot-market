import type {NextApiRequest, NextApiResponse} from 'next'
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {phone, email} = req.body;
    let user;
    if (email) {
        user = await client.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            console.log('Did not find.Will create')
            await client.user.create({
                data: {
                    name : "Anonymous",
                    email
                }
            })
        }
    }
    console.log(req.body)
    return res.status(200).end();
}

export default withHandler('POST', handler);
