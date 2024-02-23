interface Estate {
  name: string;
  price: number;
  area: number;
  location: string;
  offer: 'sale' | 'rent';
}

interface House extends Estate {
  disposition: string;
  floors: number;
  garden: boolean;
  garage: boolean;
  pool: boolean;
  rooms: number;
}

interface Flat extends Estate {
  disposition: string;
  floor: number;
  elevator: boolean;
  balcony: boolean;
}

interface Land extends Estate {
  purpose: 'commercial' | 'residential';
  water: boolean;
  electricity: boolean;
  gas: boolean;
}

interface Garage extends Estate {
  capacity: number;
  electricity: boolean;
  water: boolean;
  gas: boolean;
}
