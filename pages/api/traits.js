import traits from '../../src/data/traits.json'

export default async function handler(req, res) {
  const num = JSON.parse(req.body).number
  let traitsArray = []
  let traitNum
  for (let i = 0; i < num; i++) {
    traitNum = Math.floor(Math.random() * 406)
    traitsArray.push(traits[traitNum])
  }
  res.status(200).json(traitsArray)
}