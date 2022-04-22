import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
// Import your own reducer

import { makeStore } from "../../app/store";

function render(
  ui,
  // @ts-ignore:next-line
  { preloadedState, store = makeStore(), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

export const data = [
  {
    name: "Black Rat Snake",
    latin_name: "Pantherophis alleghaniensis",
    animal_type: "Reptile",
    active_time: "Diurnal",
    length_min: "4",
    length_max: "8",
    weight_min: "1.5",
    weight_max: "2.5",
    lifespan: "15",
    habitat: "Varied habitats from rocky hillsides to farmlands",
    diet: "Rodents",
    geo_range: "Eastern United States",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Eastern_Ratsnake_%28Pantherophis_alleghaniensis%29%2C_residential%2C_Montgomery_County_Maryland.jpg",
    id: 32,
  },
  {
    name: "Dyeing Poison Dart Frog",
    latin_name: "Dendrobatus tinctorius",
    animal_type: "Amphibian",
    active_time: "Diurnal",
    length_min: "0.13",
    length_max: "0.2",
    weight_min: "0.01",
    weight_max: "0.01",
    lifespan: "10",
    habitat: "Tropical rainforest",
    diet: "Insects, spiders, and other small invertebrates",
    geo_range: "South America",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Dendrobates_tinctorius_-_Karlsruhe_Zoo_05.jpg",
    id: 63,
  },
  {
    name: "Ornate Horned Frog",
    latin_name: "Ceratophrys ornata",
    animal_type: "Reptile",
    active_time: "Diurnal",
    length_min: "0.25",
    length_max: "5",
    weight_min: "0.85",
    weight_max: "1",
    lifespan: "6",
    habitat: "Rainforest",
    diet: "Lizards, mice, frogs, insects, and other small animals",
    geo_range: "Argentina, Uruguay, and southern Brazil",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Mr_Wiggles_7-20-07_%28870844637%29.jpg",
    id: 128,
  },
  {
    name: "Verreaux's Eagle Owl",
    latin_name: "Bubo lacteus",
    animal_type: "Bird",
    active_time: "Nocturnal",
    length_min: "1.75",
    length_max: "2.17",
    weight_min: "3.56",
    weight_max: "4.41",
    lifespan: "30",
    habitat: "Dry and tropical areas, acacia trees, woodlands and savannas ",
    diet: "Medium-sized mammals and some larger birds",
    geo_range: "Central to southern Africa ",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/2012-giant-eagle-owl.jpg",
    id: 181,
  },
  {
    name: "Bali Myna",
    latin_name: "Leucopsar rothschildi",
    animal_type: "Bird",
    active_time: "Diurnal",
    length_min: "0.7",
    length_max: "0.8",
    weight_min: "0.15",
    weight_max: "0.21",
    lifespan: "25",
    habitat: "Mountain forests, grasslands, and scrub dessert",
    diet: "Fruit, seeds, and invertebrates",
    geo_range: "Bali, Indonesia",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Bali_Mynah.jpg",
    id: 24,
  },
  {
    name: "Sumatran Orangutan",
    latin_name: "Pongo pygmaeus abelii",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "2.5",
    length_max: "2.7",
    weight_min: "88",
    weight_max: "200",
    lifespan: "28",
    habitat: "Tropical rainforest",
    diet: "Fruit, shoots, bark, insects, vines, bird eggs, and small vertebrates",
    geo_range: "Northern Sumatra",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Sumatra-Orang-Utan_im_Pongoland.jpg",
    id: 170,
  },
  {
    name: "Buff-crested bustard",
    latin_name: "Eudpodotis ruficrista",
    animal_type: "Bird",
    active_time: "Diurnal",
    length_min: "1.4",
    length_max: "1.6",
    weight_min: "1.5",
    weight_max: "2",
    lifespan: "7",
    habitat: "Semi-desert, bush, savanna and woodland",
    diet: "Arthropods, seeds, fruit and grains",
    geo_range: "Central southern Africa",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Crested_Bustard_-_Eupodotis_ruficrista_gindiana.jpg",
    id: 47,
  },
  {
    name: "Two-toed Amphiuma",
    latin_name: "Amphiuma means",
    animal_type: "Amphibian",
    active_time: "Nocturnal",
    length_min: "3",
    length_max: "4",
    weight_min: "0.09",
    weight_max: "2.3",
    lifespan: "20",
    habitat: "Swamps, ponds and other still waters",
    diet: "Fish, frogs, crayfish, and small snakes",
    geo_range: "Southeastern United States",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Amphiuma_%28two-toed%29.jpg",
    id: 178,
  },
  {
    name: "African Lion",
    latin_name: "Panthera leo",
    animal_type: "Mammal",
    active_time: "Diurnal",
    length_min: "8.5",
    length_max: "10",
    weight_min: "330",
    weight_max: "530",
    lifespan: "16",
    habitat: "Savannah, woodland, and desert",
    diet: "Hoofed mammals, hares, small birds and reptiles",
    geo_range: "Africa",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    id: 3,
  },
  {
    name: "Mexican Wolf",
    latin_name: "Canis lupus baileyei",
    animal_type: "Mammal",
    active_time: "Nocturnal",
    length_min: "4.75",
    length_max: "5",
    weight_min: "60",
    weight_max: "80",
    lifespan: "11",
    habitat: "Mountain and forest",
    diet: "Elk, deer, peccaries, rabbits, rodents, and carrion",
    geo_range: "Arizona and New Mexico",
    image_link:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Mexican_Wolf_2_yfb-edit_1.jpg",
    id: 118,
  },
];
