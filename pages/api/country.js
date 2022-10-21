export default async function handler(req, res) {
  if (req.body) {
    const body = JSON.parse(req.body).name
    const nameArray = body.split(' ')
    const countryCodeUrl = 'https://api.nationalize.io?name=' + nameArray[1]
    const countryCodeRes = await fetch(countryCodeUrl)
    const countryCodeData = await countryCodeRes.json()
    
    const country = await countryCodeData.country[0]
    const countryId = await country.country_id
    const countryUrl = 'https://restcountries.com/v3.1/alpha/' + countryId
    const countryRes = await fetch(countryUrl)
    const countryData = await countryRes.json()

    res.status(200).json(countryData[0])
  }
  else {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    const country = await data[Math.floor(Math.random() * 250) + 1]

    res.status(200).json(country)
  }
}