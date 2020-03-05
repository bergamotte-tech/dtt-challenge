/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios'
import { RawRecords, SimplifiedBeer } from '@/data/BeerInterface'

const apiClient = axios.create({
  baseURL: `https://data.opendatasoft.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getBeers(rows: number) {
    const items = await apiClient.get<RawRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&sort=ibu&rows=' +
        rows
    )
    // .then(response => {
    //   this.topBeers = BeerService.toSimplifiedBeers(response.data)
    // })

    return this.toSimplifiedBeers(items.data)
  },

  getBeersByCategory(cat: string, rows: number) {
    return apiClient.get<RawRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&lang=fr&rows=' +
        rows +
        '&refine.cat_name=' +
        cat
    )
  },

  //Methods to simplify the results
  //Meant to be imported in a vue and called after the promise was transformed
  toSimplifiedBeers(rawRecords: RawRecords): Array<SimplifiedBeer> {
    const result: Array<SimplifiedBeer> = []

    const records = rawRecords.records
    if (records) {
      for (let index = 0; index < records.length; index++) {
        const fields = records[index].fields
        const simplifiedBeer: SimplifiedBeer = {
          name: fields.name,
          cat_name: fields.cat_name,
          country: fields.country,
          style_name: fields.style_name,
          id: fields.id,
          ibu: fields.ibu,
          website: fields.website
        }
        result.push(simplifiedBeer)
      }
    }

    return result
  }
}
