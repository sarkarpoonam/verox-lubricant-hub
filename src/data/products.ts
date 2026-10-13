export type Product = {
  slug: string;
  img: string;
  name: string;
  spec: string;
  tag: string;
  desc: string;
  accent: string;
  hero: string;
  benefits: string[];
  applications: string[];
  grades: string[];
};

export const products: Product[] = [
  {
    slug: "gasoline-engine-oil",
    img: "/images/vehicle-gasoline.jpg",
    name: "Gasoline Engine Oil",
    spec: "Passenger cars · Gasoline engines",
    tag: "01 / Gasoline",
    desc: "Engine lubrication for gasoline-powered passenger cars and everyday driving.",
    accent: "text-brandred",
    hero: "Clean, quiet and efficient protection for every gasoline engine — from daily commutes to long highway runs.",
    benefits: [
      "MaxPower Technology for up to 50% more wear protection",
      "Keeps engines clean by fighting sludge and deposits",
      "Excellent cold-start flow for instant protection",
      "Helps improve fuel economy and reduce emissions",
    ],
    applications: [
      "Passenger cars and SUVs",
      "Turbocharged and naturally aspirated gasoline engines",
      "Hybrid and start-stop city driving",
      "High-mileage daily drivers",
    ],
    grades: ["5W-30", "5W-40", "10W-40", "20W-50"],
  },
  {
    slug: "diesel-engine-oil",
    img: "/images/vehicle-diesel.jpg",
    name: "Diesel Engine Oil",
    spec: "Trucks · Fleets · Diesel engines",
    tag: "02 / Diesel",
    desc: "Engine lubrication for diesel vehicles, commercial fleets and heavy-duty applications.",
    accent: "text-brandblue",
    hero: "Heavy-duty protection built for torque, load and long hauls — keeping diesel fleets on the road longer.",
    benefits: [
      "Superior soot control for modern diesel engines",
      "Extended drain intervals to cut fleet downtime",
      "Protects turbochargers under sustained heavy load",
      "Strong performance in hot climates and tough conditions",
    ],
    applications: [
      "Long-haul trucks and trailers",
      "Buses and commercial fleets",
      "Light commercial diesel vans and pickups",
      "Construction and agricultural diesel engines",
    ],
    grades: ["15W-40", "20W-50", "10W-40", "5W-40"],
  },
  {
    slug: "gear-transmission-fluids",
    img: "/images/vehicle-transmission.jpg",
    name: "Gear & Automatic Transmission Fluids",
    spec: "Gearboxes · Axles · Transmissions",
    tag: "03 / Gear & ATF",
    desc: "Gear and automatic transmission fluids for smooth shifting and long gearbox life.",
    accent: "text-oil",
    hero: "Silky shifts and quiet gears — advanced fluids that protect every tooth, clutch and bearing in the driveline.",
    benefits: [
      "Smooth, consistent shifting in all temperatures",
      "Anti-wear and extreme-pressure protection for gear teeth",
      "Resists oxidation for longer fluid life",
      "Reduces noise, vibration and harshness",
    ],
    applications: [
      "Automatic transmissions (ATF)",
      "Manual gearboxes and transaxles",
      "Differentials and final drives",
      "Commercial vehicle drivelines",
    ],
    grades: ["ATF Dexron III", "ATF CVT", "75W-90 GL-4", "80W-90 GL-5", "85W-140 GL-5"],
  },
  {
    slug: "industrial-oil",
    img: "/images/vehicle-industrial.jpg",
    name: "Industrial Oil",
    spec: "Machinery · Hydraulics · Industry",
    tag: "04 / Industrial",
    desc: "Industrial lubrication for machinery, hydraulics and heavy equipment.",
    accent: "text-foreground",
    hero: "Reliability for the machines that never stop — hydraulic, gear and circulating oils for demanding industry.",
    benefits: [
      "Keeps hydraulic systems responsive and protected",
      "Excellent thermal and oxidation stability",
      "Protects against rust, foam and wear",
      "Long service life reduces maintenance costs",
    ],
    applications: [
      "Hydraulic presses and power units",
      "Excavators and construction machinery",
      "Industrial gearboxes and bearings",
      "Compressors and circulating systems",
    ],
    grades: ["Hydraulic HLP 32", "Hydraulic HLP 46", "Hydraulic HLP 68", "Industrial Gear Oil 220", "Industrial Gear Oil 320"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
