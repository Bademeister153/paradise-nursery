export enum PlantCategory {
  INDOOR = "indoor",
  TROPICAL = "tropical",
  SUCCULENTS = "succulents",
}

export interface Plant {
  id: string
  name: string
  price: number
  image: string
  category: PlantCategory
}

export const plants: Plant[] = [
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    price: 39.99,
    image: "https://via.placeholder.com/400x400?text=Monstera",
    category: PlantCategory.TROPICAL,
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    price: 49.99,
    image: "https://via.placeholder.com/400x400?text=Fiddle+Leaf",
    category: PlantCategory.INDOOR,
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    price: 29.99,
    image: "https://via.placeholder.com/400x400?text=Snake+Plant",
    category: PlantCategory.INDOOR,
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    price: 34.99,
    image: "https://via.placeholder.com/400x400?text=ZZ+Plant",
    category: PlantCategory.INDOOR,
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    price: 24.99,
    image: "https://via.placeholder.com/400x400?text=Pothos",
    category: PlantCategory.INDOOR,
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    price: 19.99,
    image: "https://via.placeholder.com/400x400?text=Aloe+Vera",
    category: PlantCategory.SUCCULENTS,
  },
  {
    id: "echeveria",
    name: "Echeveria",
    price: 14.99,
    image: "https://via.placeholder.com/400x400?text=Echeveria",
    category: PlantCategory.SUCCULENTS,
  },
  {
    id: "calathea",
    name: "Calathea Medallion",
    price: 44.99,
    image: "https://via.placeholder.com/400x400?text=Calathea",
    category: PlantCategory.TROPICAL,
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    price: 59.99,
    image: "https://via.placeholder.com/400x400?text=Bird+of+Paradise",
    category: PlantCategory.TROPICAL,
  },
]

