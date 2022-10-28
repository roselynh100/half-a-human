import clientPromise from '../../src/data/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('half-a-human')

  switch (req.method) {
  case 'GET':
    console.log('you want to get the humans!')
    const recentHumans = await db.collection('humans').find().sort({'createdAt': -1}).limit(6).toArray()
    res.status(200).json(recentHumans)
    break
  case 'POST':
    console.log('you want to post a new human!')
    const body = JSON.parse(req.body)
    body.human.createdAt = new Date()
    const human = await db.collection('humans').insertOne(body.human)
    res.status(200).json(human)
    break
  case 'PURGE':
    console.log('you want to clear the database!')
    const purge = await db.collection('humans').deleteMany({})
    res.status(200).json(purge)
  }

}