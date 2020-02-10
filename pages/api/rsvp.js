import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

// handler.get(async (req, res) => {
//   console.log('Endpoint used');
//   const doc = await req.db.collection('rsvp').findOne();
//   res.json(doc);
// });

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  const doc = await req.db.collection('rsvp').insertOne({
    rsvp: data.rsvp,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    company: data.company,
  });

  res.status(200).json({ message: 'reserved' });
});

export default handler;
