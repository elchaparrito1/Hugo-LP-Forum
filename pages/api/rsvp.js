// import nextConnect from 'next-connect';
import middleware from '../../middleware/withMiddleware';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let data = req.body;
    data = JSON.parse(data);
    const { rsvp, email, firstName, lastName, company } = data;
    await req.db.collection('rsvp').insertOne({
      rsvp,
      email,
      firstName,
      lastName,
      company,
    });

    res.status(200).json({ message: 'reserved' });
  } else {
    res.status(405).end();
  }
};

export default middleware(handler);
