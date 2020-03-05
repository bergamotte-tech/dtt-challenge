/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios'
import {
  RawRecords,
  SimplifiedBeer,
  Category,
  Weather
} from '@/data/BeerInterface'

const apiClient = axios.create({
  baseURL: `https://data.opendatasoft.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// name: fields.name,
// cat_name: fields.cat_name,
// cat_id: fields.cat_id,
// country: fields.country,
// style_name: fields.style_name,
// id: fields.id,
// ibu: fields.ibu,
// website: fields.website

export default {
  async getBeers(rows: number) {
    const items = await apiClient.get<RawRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&sort=ibu&fields=name,cat_name,cat_id,country,style_name,id,ibu,website&rows=' +
        rows
    )
    return this.toSimplifiedBeers(items.data)
  },

  async getBeersByCategory(cat: string, rows: number) {
    const items = await apiClient.get<RawRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&sort=ibu&fields=name,cat_name,cat_id,country,style_name,id,ibu,website&rows=' +
        rows +
        '&refine.cat_name=' +
        cat
    )
    return this.toSimplifiedBeers(items.data)
  },

  async getCategories() {
    const items = await apiClient.get<Weather>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=0&facet=cat_name'
    )
    return this.toSimplifiedCategories(items.data)
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
          cat_id: fields.cat_id,
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
  },

  toSimplifiedCategories(rawData: Weather): Array<Category> {
    const result: Array<Category> = []
    const facetGroups = rawData.facet_groups
    if (facetGroups) {
      for (let index = 0; index < facetGroups.length; index++) {
        const facets = facetGroups[index].facets
        if (facets) {
          for (let index = 0; index < facets.length; index++) {
            const loneFacet = facets[index]
            const category: Category = {
              cat_name: loneFacet.name
            }
            result.push(category)
          }
        }
      }
    }
    return result
  }

  // transformCategoryName(rawName: string): string {
  //   return rawName.replace(/\s/g, '+')
  // }
}
