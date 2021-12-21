// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin, { remoteConfig } from 'firebase-admin';
import serviceAccount from '../../keys/config-adminsdk.json';

interface ResData {
    parameters: { [p: string]: remoteConfig.RemoteConfigParameter };
}

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as unknown as string),
    });
} catch (err) {}

export default async (req: NextApiRequest, res: NextApiResponse<ResData>) => {
    const config = admin.remoteConfig();
    const { parameters } = await config.getTemplate();

    res.status(200).json({ parameters });
};
