// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import serviceAccount from '../../keys/config-adminsdk.json';

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as unknown as string),
    });
} catch (err) {}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const config = admin.remoteConfig();
    const template = await config.getTemplate();

    const { key, value } = req.body;

    template.parameters[key] = {
        defaultValue: {
            value,
        },
    };

    await config.publishTemplate(template);

    res.status(200).json({});
};
