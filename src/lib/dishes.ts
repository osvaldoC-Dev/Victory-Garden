import moussaka from "@/assets/dish-moussaka.jpg";
import octopus from "@/assets/dish-octopus.jpg";
import lamb from "@/assets/dish-lamb.jpg";
import salad from "@/assets/dish-salad.jpg";
import salmon from "@/assets/dish-salmon.jpg";
import souvlaki from "@/assets/dish-souvlaki.jpg";
import baklava from "@/assets/dessert-baklava.jpg";
import galaktoboureko from "@/assets/dessert-galaktoboureko.jpg";
import dessertCase from "@/assets/dessert-case.jpg";
import mezze from "@/assets/mezze.jpg";
import gardenDay from "@/assets/garden-day.jpg";
import gardenNight from "@/assets/garden-night-table.jpg";
import heroGarden from "@/assets/hero-garden.jpg";
import happyHour from "@/assets/happy-hour.jpg";
import eventsBanquet from "@/assets/events-banquet.jpg";

export const images = {
  moussaka,
  octopus,
  lamb,
  salad,
  salmon,
  souvlaki,
  baklava,
  galaktoboureko,
  dessertCase,
  mezze,
  gardenDay,
  gardenNight,
  heroGarden,
  happyHour,
  eventsBanquet,
};

export type Dish = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const signatureDishes: Dish[] = [
  {
    name: "Grilled Octopus",
    description: "Charred over open flame, dressed with olive oil, capers and red onion.",
    image: octopus,
    alt: "Char-grilled octopus with capers and red onion on a dark plate",
  },
  {
    name: "Moussaka",
    description: "Layers of eggplant, seasoned beef and béchamel, baked until golden.",
    image: moussaka,
    alt: "Baked Greek moussaka in a ceramic dish",
  },
  {
    name: "Baby Lamb Chops",
    description: "Grilled with lemon and oregano, served with roasted potatoes.",
    image: lamb,
    alt: "Grilled baby lamb chops with roasted potatoes and lemon",
  },
  {
    name: "Chicken Souvlaki",
    description: "Marinated skewers from the grill with warm pita and tzatziki.",
    image: souvlaki,
    alt: "Chicken souvlaki skewers with grilled pita and tzatziki",
  },
  {
    name: "Baked Salmon",
    description: "Filet baked with lemon and capers alongside sautéed greens.",
    image: salmon,
    alt: "Baked salmon fillet with lemon, capers and greens",
  },
  {
    name: "Greek Salad",
    description: "Tomato, cucumber, olives and a generous slab of feta with olive oil.",
    image: salad,
    alt: "Greek village salad topped with a slab of feta",
  },
];

export const desserts: Dish[] = [
  {
    name: "Baklava",
    description: "Layered phyllo, walnuts and pistachio, finished with honey syrup.",
    image: baklava,
    alt: "Golden baklava pieces topped with crushed pistachio",
  },
  {
    name: "Galaktoboureko",
    description: "Warm semolina custard wrapped in crisp phyllo, dusted with cinnamon.",
    image: galaktoboureko,
    alt: "Slice of galaktoboureko with a cup of coffee",
  },
  {
    name: "From the Pastry Case",
    description: "Kataifi, mousse cakes, tiramisu and cheesecake from our sweet shop.",
    image: dessertCase,
    alt: "Greek pastry display case filled with baklava, kataifi and mousse cakes",
  },
];

export const menuSections = [
  {
    title: "To Begin",
    note: "Mezze for the table",
    items: [
      { name: "Tzatziki", description: "Strained yogurt, cucumber, garlic, olive oil, warm pita." },
      { name: "Taramosalata", description: "Whipped roe spread with lemon and olive oil." },
      { name: "Dolmades", description: "Grape leaves stuffed with rice and herbs." },
      { name: "Saganaki", description: "Pan-seared Greek cheese flamed with lemon." },
      { name: "Spanakopita", description: "Spinach and feta folded into crisp phyllo." },
      { name: "Grilled Octopus", description: "Olive oil, capers, red onion, red wine vinegar." },
    ],
  },
  {
    title: "Salads",
    note: "Garden and village",
    items: [
      { name: "Greek Salad", description: "Tomato, cucumber, pepper, olives, feta, oregano." },
      { name: "Maroulosalata", description: "Romaine, scallion and dill in lemon vinaigrette." },
      { name: "Beet & Walnut", description: "Roasted beets, walnuts, garlic yogurt." },
    ],
  },
  {
    title: "From the Grill",
    note: "Charcoal and lemon",
    items: [
      { name: "Baby Lamb Chops", description: "Lemon, oregano, roasted potatoes." },
      { name: "Chicken Souvlaki", description: "Marinated skewers, pita, tzatziki." },
      { name: "Pork Souvlaki", description: "Char-grilled skewers with grilled vegetables." },
      { name: "Branzino", description: "Whole grilled Mediterranean sea bass, ladolemono." },
    ],
  },
  {
    title: "From the Kitchen",
    note: "Slow-baked classics",
    items: [
      { name: "Moussaka", description: "Eggplant, seasoned beef, béchamel." },
      { name: "Pastitsio", description: "Baked pasta, beef ragù, béchamel." },
      { name: "Baked Salmon", description: "Lemon, capers, sautéed greens." },
      { name: "Shrimp Saganaki", description: "Tomato, feta, herbs, baked in the oven." },
    ],
  },
  {
    title: "Sweets",
    note: "From Victory Sweet Shop",
    items: [
      { name: "Baklava", description: "Phyllo, walnuts, pistachio, honey syrup." },
      { name: "Kataifi", description: "Shredded phyllo, walnut, syrup." },
      { name: "Galaktoboureko", description: "Semolina custard in crisp phyllo." },
      { name: "Tiramisu", description: "Espresso-soaked layers, mascarpone cream." },
      { name: "Cheesecake", description: "Classic New York style." },
      { name: "Mousse Cakes", description: "Chocolate and seasonal fruit mousse." },
    ],
  },
] as const;

export const galleryImages = [
  { src: heroGarden, alt: "Candlelit garden terrace at night with string lights", span: "lg:col-span-2 lg:row-span-2" },
  { src: gardenDay, alt: "Glass-roofed garden dining room filled with greenery", span: "lg:col-span-2" },
  { src: octopus, alt: "Grilled octopus plated with capers", span: "" },
  { src: gardenNight, alt: "Candlelit table for two in the garden", span: "lg:row-span-2" },
  { src: dessertCase, alt: "Greek pastry case with baklava and mousse cakes", span: "lg:col-span-2" },
  { src: happyHour, alt: "Cocktails and mezze on a dark bar top", span: "" },
  { src: eventsBanquet, alt: "Long celebration table set under string lights", span: "lg:col-span-2" },
  { src: lamb, alt: "Grilled baby lamb chops with potatoes", span: "" },
  { src: mezze, alt: "Mezze spread with pita, dips and olives", span: "" },
  { src: baklava, alt: "Baklava with pistachio", span: "" },
  { src: salad, alt: "Greek salad with feta", span: "" },
  { src: souvlaki, alt: "Chicken souvlaki skewers by the grill", span: "" },
];
