import { NextApiRequest, NextApiResponse } from "next";
import {google} from "googleapis";

type sheetForm = {
    name: string
    email: string
    messages: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).send({ error: 'Method not allowed' })
    }

    const body = req.body as sheetForm

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range:'A1:C1',
            valueInputOption:'USER_ENTERED',
            requestBody:{
                values:[
                    [body.name, body.email, body.messages]
                ]
            }
        })

        return res.status(200).json({
            data: response.data
        })
        
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: 'Something went wrong'
        })
    }
}