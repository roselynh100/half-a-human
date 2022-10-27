import traits from '../../src/data/traits.json'

export default async function handler(req, res) {
  const num = JSON.parse(req.body).number
  let traitsArray = []
  let traitNum
  for (let i = 0; i < num; i++) {
    traitNum = Math.floor(Math.random() * 394)
    traitsArray.push({
      trait: traits[traitNum],
      value: Math.floor(Math.random() * 9) + 1
    })
  }
  res.status(200).json(traitsArray)
}