export interface EventsEntity {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  organizer: string
  category: string
  attendees?: AttendeesEntity[]
}
export interface AttendeesEntity {
  id: string
  name: string
}
