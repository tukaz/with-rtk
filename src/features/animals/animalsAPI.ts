import { AnimalT } from "./animalsSlice";

const API_URL = "https://zoo-animal-api.herokuapp.com/animals/rand/";
export async function fetchAnimals(amount = 1): Promise<Array<AnimalT>> {
  const response = await fetch(`${API_URL}${amount}`);
  const result = await response.json();
  return result;
}
