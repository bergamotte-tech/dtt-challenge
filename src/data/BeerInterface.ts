//BEERS
export interface RawRecords {
  nhits: number
  parameters: Parameters
  records?: RecordsEntity[] | null
}
export interface Parameters {
  dataset?: string[] | null
  timezone: string
  rows: number
  format: string
  lang: string
}
export interface RecordsEntity {
  datasetid: string
  recordid: string
  fields: Fields
  geometry: Geometry
  record_timestamp: string
}
export interface Fields {
  brewery_id: string
  city: string
  name: string
  cat_name?: string | null
  country: string
  cat_id: string
  upc: number
  coordinates?: number[] | null
  srm: number
  last_mod: string
  state: string
  add_user: string
  abv: number
  address1: string
  name_breweries: string
  style_name?: string | null
  id: string
  ibu: number
  style_id: string
  website?: string | null
}
export interface Geometry {
  type: string
  coordinates?: number[] | null
}
export interface SimplifiedBeer {
  name: string
  cat_name?: string | null
  cat_id: string
  country: string
  style_name?: string | null
  id: string
  ibu: number
  website?: string | null
}

//CATEGORIES
export interface Weather {
  nhits: number
  parameters: Parameters
  records?: null[] | null
  facet_groups?: FacetGroupsEntity[] | null
}
export interface Parameters {
  dataset?: string[] | null
  timezone: string
  rows: number
  format: string
  facet?: string[] | null
}
export interface FacetGroupsEntity {
  facets?: FacetsEntity[] | null
  name: string
}
export interface FacetsEntity {
  count: number
  path: string
  state: string
  name: string
}

export interface Category {
  cat_name?: string | null
}
