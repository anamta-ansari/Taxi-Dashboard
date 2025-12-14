export interface Vehicle {
  id: string
  name: string
  image: string
  mapIcon: string
  description: string
  service: string
  serviceCategories: string[]
  maxSeats: number
  status: boolean
  allZones: boolean
  zones: string[]
  createdAt: string
}

export interface CreateVehicleInput {
  name: string
  image: string
  mapIcon: string
  description: string
  service: string
  serviceCategories: string[]
  maxSeats: number
  status: boolean
  allZones: boolean
  zones: string[]
}