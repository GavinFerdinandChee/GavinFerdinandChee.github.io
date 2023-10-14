import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const handler =  async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const databaseId = '457c2d79c33c42809e50cb05693c5666';

    const newItem = {
      'Name': {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      'Email': {
        email: email,
      },
      'Message': {
        rich_text: [
          {
            text: {
              content: message,
            },
          },
        ],
      },
    };

    try {
      const response = await notion.pages.create({
        parent: {
          database_id: databaseId,
        },
        properties: newItem,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler