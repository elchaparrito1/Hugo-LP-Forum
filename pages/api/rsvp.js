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

// handler.post(async (req, res) => {
//   let data = req.body;
//   data = JSON.parse(data);
//   const doc = await req.db.collection('rsvp').insertOne({
//     rsvp: data.rsvp,
//     email: data.email,
//     firstName: data.firstName,
//     lastName: data.lastName,
//     company: data.company,
//   });

//   res.status(200).json({ message: 'reserved' });
// });
