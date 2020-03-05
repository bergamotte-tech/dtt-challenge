/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios'
import {
  RawRecords,
  Category,
  CategoryRecords,
  SimplifiedBeerClass,
  CategoryClass
} from '@/data/BeerInterface'

const apiClient = axios.create({
  baseURL: `https://data.opendatasoft.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const apiKey =
  '&apikey=e8369ec8cbed1f636718daf081d728443c4cd5fbef07668cc816cec9'

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
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&sort=ibu&rows=' +
        rows +
        apiKey
    )
    return this.toSimplifiedBeers(items.data)
  },

  async getSingleBeer(id: string) {
    const items = await apiClient.get<RawRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&q=id%3D' +
        id +
        apiKey
    )
    return this.toSimplifiedSingleBeer(items.data)
  },

  async getSimilarBeers(styleId: string, rows: number) {
    const items = await apiClient.get<RawRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&sort=ibu&rows=' +
        rows +
        '&q=style_id%3D' +
        styleId +
        apiKey
    )
    return this.toSimplifiedBeers(items.data)
  },

  async getBeersByCategory(cat: string, rows: number) {
    const items = await apiClient.get<RawRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&sort=ibu&rows=' +
        rows +
        '&refine.cat_name=' +
        cat +
        '&dataChart=apiKey'
    )
    return this.toSimplifiedBeers(items.data)
  },

  async getCategories() {
    const items = await apiClient.get<CategoryRecords>(
      '/api/records/1.0/search/?dataset=open-beer-database%40public-us&rows=0&facet=cat_name' +
        '&dataChart=apiKey'
    )
    return this.toSimplifiedCategories(items.data)
  },

  //Methods to simplify the results
  //Meant to be imported in a vue and called after the promise was transformed
  toSimplifiedBeers(rawRecords: RawRecords): Array<SimplifiedBeerClass> {
    const result = Array<SimplifiedBeerClass>()
    const records = rawRecords.records
    if (records) {
      for (let index = 0; index < records.length; index++) {
        const fields = records[index].fields
        const simplifiedBeer: SimplifiedBeerClass = {
          name: fields.name,
          cat_name: fields.cat_name,
          cat_id: fields.cat_id,
          city: fields.city,
          country: fields.country,
          style_name: fields.style_name,
          brewery_id: fields.brewery_id,
          id: fields.id,
          ibu: fields.ibu,
          website: fields.website
        }
        result.push(simplifiedBeer)
      }
    }
    return result
  },

  toSimplifiedSingleBeer(rawRecords: RawRecords): SimplifiedBeerClass {
    let result = new SimplifiedBeerClass()
    const records = rawRecords.records
    if (records) {
      for (let index = 0; index < records.length; index++) {
        const fields = records[index].fields
        const mySimplifiedBeer: SimplifiedBeerClass = {
          name: fields.name,
          cat_name: fields.cat_name,
          cat_id: fields.cat_id,
          city: fields.city,
          country: fields.country,
          style_name: fields.style_name,
          brewery_id: fields.brewery_id,
          id: fields.id,
          ibu: fields.ibu,
          website: fields.website
        }
        result = mySimplifiedBeer
      }
    }
    return result
  },

  toSimplifiedCategories(rawData: CategoryRecords): Array<CategoryClass> {
    const result = Array<CategoryClass>()
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
}
