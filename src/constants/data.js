import images from "./images";

const wines = [
  {
    title: "Bin 28 Shiraz",
    price: "$31",
    tags: "AU | Bottle"
  },
  {
    title: "The Struie",
    price: "$49",
    tags: "AU | Bottle"
  },
  {
    title: "Saint-Josesph",
    price: "$83",
    tags: "FR | 750 ml"
  },
  {
    title: "Rosewood Riesling",
    price: "$21",
    tags: "CA | Bottle"
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml"
  }
];

const cocktails = [
  {
    title: "Aperol Spritz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml"
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime"
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar"
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters"
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange Garnish"
  }
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Enim ut sem viverra aliquet, eget."
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lectus magna fringilla urna porttitor, rhoncus."
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Praesent elementum facilisis leo vel, fringilla."
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Commodo odio aenean sed adipiscing, diam."
  }
];

const data = { wines, cocktails, awards };

export default data;
// export default { wines, cocktails, awards };