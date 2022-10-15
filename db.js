const CART_INFO = "CART_INFO";
const WISH_LIST = "WISH_LIST";

const allCategories = {
  artsCraftAndSewing: "Arts Crafts & Sewing",
  baby: "Baby",
  beauty: "Beauty",
  electronics: "Electronics",
  grocery: "Grocery",
  health: "Health",
  homeAndKitchen: "Home & Kitchen",
  officeSupplies: "Office Supplies",
  patioLawnAndGarden: "Patio Lawn & Garden",
  petSupplies: "Pet Supplies",
  sportsAndOutdoor: "Sports & Outdoor",
  tools: "Tools",
  toysAndGames: "Toys And Games",
};

const tags = {
  diy: "DIY",
  oil: "Oil",
  pick: "Pick",
  seal: "Seal",
  tool: "Tool",
  tools: "Tools",
  glue: "Glue",
  gun: "Gun",
  kit: "Kit",
  puncture: "Puncture",
  tire: "Tire",
  cut: "Cut",
  gloves: "Gloves",
  electronics: "Electronics",
  lighter: "Lighter",
  safe: "Safe",
  safety: "Safety",
  blade: "Blade",
  snap: "Snap",
  hammer: "Hammer",
  multi: "Multi",
  nut: "Nut",
  opener: "Opener",
  magic: "Magic",
  kitchen: "Kitchen",
  scissors: "Scissors",
  broom: "Broom",
  magnet: "Magnet",
  recovery: "Recovery",
  conventer: "Conventer",
  socket: "Socket",
  bolt: "Bolt",
  butane: "Butane",
  fire: "Fire",
  torch: "Torch",
  buzzing: "Buzzing",
  fun: "Fun",
  joy: "Joy",
  toys: "Toys",
  cactus: "Cactus",
  dancing: "Dancing",
  dispicable: "Dispicable",
  kinetic: "Kinetic",
  mold: "Mold",
  sand: "Sand",
  bounce: "Bounce",
  spring: "Spring",
  balls: "Balls",
  squish: "Squish",
  monoply: "Monoply",
  orbeez: "Orbeez",
  water: "Water",
  draw: "Draw",
  projector: "Projector",
  car: "Car",
  racing: "Racing",
  plush: "Plush",
  reversable: "Reversable",
  cube: "Cube",
  educational: "Educational",
  rubik: "Rubik",
  smily: "Smily",
  squishable: "Squishable",
  stress: "Stress",
  climb: "Climb",
  man: "Man",
  spider: "Spider",
  anti: "Anti",
  bird: "Bird",
  feeder: "Feeder",
  spill: "Spill",
  angle: "Angle",
  bowl: "Bowl",
  cat: "Cat",
  dog: "Dog",
  cutter: "Cutter",
  bite: "Bite",
  collar: " Collar",
  bowknot: "Bowknot",
  rhinestone: "Rhinestone",
  bags: "Bags",
  poo: "Poo",
  nail: "Nail",
  christmas: "Christmas",
  hat: "Hat",
  holiday: "Holiday",
  kitten: "Kitten",
  puppy: "Puppy",
  wollen: "Wollen",
  trimmer: "Trimmer",
  bamboo: "Bamboo",
  liner: "Liner",
  litter: "Litter",
  fish: "Fish",
  nylon: "Nylon",
  drink: "Drink",
  hanging: "Hanging",
  parrot: "Parrot",
  hair: "Hair",
  automatic: "Automatic",
  baby: "Baby",
  caddy: "Caddy",
  diaper: "Diaper",
  organizer: "Organizer",
  product: "Product",
  brush: "Brush",
  clean: "Clean",
  easy: "Easy",
  silicon: "Silicon",
  teeth: "Teeth",
  tooth: "Tooth",
  backpack: "Backpack",
  breathable: "Breathable",
  kangroo: "Kangroo",
  mosquito: "Mosquito",
  repellant: "Repellant",
  mummy: "Mummy",
  nappy: "Nappy",
  nursing: "Nursing",
  cap: "Cap",
  ear: "Ear",
  eyes: "Eyes",
  protection: "Protection",
  shower: "Shower",
  cotton: "Cotton",
  headgear: "Headgear",
  helmet: "Helmet",
  brand: "Brand",
  nexton: "Nexton",
  soap: "Soap",
  lock: "Lock",
  clipper: "Clipper",
  perigon: "Perigon",
  sucking: "Sucking",
  teething: "Teething",
  different: "Different",
  ushape: "Ushape",
  bath: "Bath",
  beauty: "Beauty",
  cream: "Cream",
  health: "Health",
  marks: "Marks",
  removal: "Removal",
  strech: "Strech",
  callus: "Callus",
  foot: "Foot",
  remover: "Remover",
  nose: "Nose",
  stylish: "Stylish",
  care: "Care",
  personal: "Personal",
  treatment: "Treatment",
  best: "Best",
  jade: "Jade",
  massage: "Massage",
  quality: "Quality",
  roller: "Roller",
  cutting: "Cutting",
  profession: "Profession",
  salon: "Salon",
  makeup: "Makeup",
  professional: "Professional",
  set: "Set",
  almarai: "Almarai",
  fresh: "Fresh",
  sour: "Sour",
  american: "American",
  butter: "Butter",
  garden: "garden",
  peanut: "Peanut",
  apple: "Apple",
  bragg: "Bragg",
  cider: " Cider",
  vinager: "Vinager",
  aminos: "Aminos",
  liquid: "Liquid",
  cadbury: "Cadbury",
  chocolate: "Chocolate",
  crunchie: "Crunchie",
  spread: "Spread",
  coca: "Coca",
  cocacola: "Coca Cola",
  cola: " Cola",
  stevia: "Stevia",
  cooper: "Cooper",
  fine: " Fine",
  frank: "Frank",
  marmalade: "Marmalade",
  oxford: "Oxford ",
  berries: "Berries",
  melts: "Melts",
  real: "Real",
  yogurt: " Yogurt",
  belgian: "Belgian",
  dark: "Dark",
  flavor: "Flavor",
  jif: "Jif",
  smooth: "Smooth",
  biscoff: "Biscoff",
  lotus: "Lotus",
  hot: "Hot",
  members: " Members",
  pepper: "Pepper",
  red: "Red",
  spicy: "Spicy",
  cereal: "Cereal",
  comb: "Comb",
  corn: "Corn",
  honey: "Honey",
  oat: "Oat",
  onion: "Onion",
  pringles: "Pringles",
  bar: "Bar",
  fast: "Fast",
  keto: "Keto",
  slim: " Slim",
  measuring: "Measuring",
  spoon: "Spoon",
  basket: "Basket",
  chef: "Chef",
  heater: "Heater",
  resistant: "Resistant",
  egg: "Egg",
  home: "Home",
  separator: "Separator",
  yolk: "Yolk",
  garlic: "Garlic",
  ginger: "Ginger",
  grater: "Grater",
  slicer: "Slicer",
  chopper: "Chopper",
  manual: "Manual",
  crinkle: "Crinkle",
  fries: "Fries",
  knife: "Knife",
  slice: "Slice",
  bottle: "Bottle",
  adhesive: "Adhesive",
  foil: "Foil",
  heat: "Heat",
  ball: "Ball",
  herb: "Herb",
  tea: "Tea",
  cookie: "Cookie",
  masher: "Masher",
  potato: "Potato",
  four: "Four",
  mesh: "Mesh",
  metal: "Metal",
  rack: "Rack",
  brown: "Brown",
  envelop: "Envelop",
  mail: "Mail",
  paper: "Paper",
  post: "Post",
  chair: "Chair",
  comfort: "Comfort",
  style: "Style",
  color: "Color",
  colour: "Colour",
  office: "Office",
  printer: "Printer",
  supplies: "Supplies",
  handy: "Handy",
  saver: "Saver",
  space: "Space",
  holder: "Holder",
  document: "Document",
  shredder: "Shredder",
  card: "Card",
  desk: "Desk",
  pen: "Pen",
  pencil: "Pencil",
  blue: "Blue",
  ink: "Ink",
  pelikan: "Pelikan",
  thermal: "Thermal",
  wireles: "Wireles",
  sketch: "Sketch",
  blower: "Blower",
  dust: "Dust",
  date: "Date",
  paid: "Paid",
  receipt: "Receipt",
  signature: "Signature",
  stamp: "Stamp",
  iit: "Iit",
  notes: "Notes",
  it: "It",
  reminder: "Reminder",
  sticky: "Sticky",
  bandage: "Bandage",
  medical: "Medical",
  breath: "Breath",
  cleaner: "Cleaner",
  tongue: "Tongue",
  corrector: "Corrector",
  doctor: "Doctor",
  plus: "Plus",
  posture: "Posture",
  degrees: "360 Degrees",
  rotating: "Rotating",
  bunion: "Bunion",
  pain: "Pain",
  splint: "Splint",
};

const products = [
  {
    productName: "WBM Sticky Notes-100 Sheets",
    unitPrice: 12.0,
    spcifications:
      "sticky notes can be used for bookmarks in school and office. A set of 4 blocks of sticky bookmarks in various colors. It is also available in the best color combinations. Each block contains 25 sticky bookmarks. You can be used as a bookmark, classifying, and indexing. Available in a unique and beautiful design. It is easy and convenient to use. Widely used in file folders and removable notes. We can say that these are cute sticky notes with a unique design.",
    sku: "ST0000548541",
    coverImage: "./Images/Product Images/WBM Sticky Notes-100 Sheets.jpg",
    productImage1:
      "./Images/officeSuppliesImages/WBM Sticky Notes-100 Sheets-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/WBM Sticky Notes-100 Sheets-2.jpg",
    category: allCategories.artsCraftAndSewing,
    tags: [tags.iit, tags.notes, tags.post, tags.reminder, tags.sticky],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Self-adhesive paper</li>
              <li>File management notes</li>
              <li>Smooth writing, no adhesive surface</li>
              <li>Bookmarks for school cliff notes or office notes</li>
              <li>Easy to use</li>
            </ol>`,
  },
  {
    productName: "Professional Sketch and Drawing pencils set",
    unitPrice: 74.0,
    spcifications:
      "INCLUDES 12 GRAPHITE PENCILS:8B，7B,6B,5B,4B,3B,2B,B,HB,F,H,2H. HIGH QUALITY:Made of high quality wood and graphite,Make sure to use for a longer period of time is not easily damaged,Drawing the best works. FOR EVERYONE:For Beginners,Professional artists,Students and office workers,are the best choice,Suitable for all Paintings,Artistic creations,Drawings,Classroom,Work,Writing,You will love them. CUSTOMIZED IRON BOX:Hard iron box for protecting your painting tools,At the same time easy to carry and store. SATISFACTION GUARANTEE:If you are not satisfied with our products, you are welcome to simply return it to us for a full refund at any time. Metal box",
    sku: "ST00003484845",
    category: allCategories.artsCraftAndSewing,
    coverImage:
      "./Images/Product Images/Professional Sketch and Drawing pencils set.png",
    productImage1:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-4.jpg",
    tags: [tags.office, tags.pencil, tags.sketch],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>INCLUDES 12 GRAPHITE PENCILS:8B，7B,6B,5B,4B,3B,2B,B,HB,F,H,2H.</li>
              <li>HIGH QUALITY:Made of high quality wood and graphite,Make sure to use for a longer period of time is not easily damaged,Drawing the best works.</li>
              <li>FOR EVERYONE:For Beginners,Professional artists,Students and office workers,are the best choice,Suitable for all Paintings,Artistic creations,Drawings,Classroom,Work,Writing,You will love them.</li>
              <li>CUSTOMIZED IRON BOX:Hard iron box for protecting your painting tools,At the same time easy to carry and store.</li>
              <li>SATISFACTION GUARANTEE:If you are not satisfied with our products, you are welcome to simply return it to us for a full refund at any time.</li>
              <li>Metal box</li>
         
            </ol>`,
  },
  {
    productName: "Colour Paper A4 Size 100 Sheets",
    unitPrice: 30.0,
    spcifications:
      "Pack of 100 sheets Color Paper Premium quality 70-80 gram Multicolor A4 size printer paper 10 Different Colors Each colour having 10 sheets Best for school projects",
    sku: "ST0000854588589",
    coverImage: "./Images/Product Images/Colour Paper A4 Size 100 Sheets.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Colour Paper A4 Size 100 Sheets-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Colour Paper A4 Size 100 Sheets-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Colour Paper A4 Size 100 Sheets-3.jpg",

    tags: [tags.office, tags.pencil, tags.sketch],
    category: allCategories.artsCraftAndSewing,
    tags: [
      tags.color,
      tags.colour,
      tags.office,
      tags.office,
      tags.paper,
      tags.printer,
      tags.supplies,
    ],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Pack of 100 sheets Color Paper</li>
              <li>Premium quality</li>
              <li>70-80 gram</li>
              <li>Multicolor</li>
              <li>A4 size printer paper</li>
              <li>10 Different Colors</li>
              <li>Each colour having 10 sheets</li>
              <li>Best for school projects</li>
            </ol>`,
  },
  {
    productName: "Projector Painting Drawing Table Set for Kids",
    unitPrice: 60.0,
    spcifications:
      "【Kids Trace and Draw Projector Toy】 Project an image on the board and then your child can draw along the picture, and then copy images onto paper. Children are naturally fond of graffiti, which can enable them to develop creativity in all aspects of creation. ATTRACTIVE & INNOVATIVE:draw and paint while having fun. Attractive and durable intelligent toy, modern and elegant in fashion, light projector innovative technology. SAFE & DURABLE MATERIAL: Made of high-quality ABS material, smooth edge and surface will not hurt your baby’s hand. Non- toxic paintbrush, can be used with complete confidence",
    sku: "ST0000851567498",
    coverImage:
      "./Images/Product Images/Projector Painting Drawing Table Set for Kids.jpg",
    productImage1:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-1.jpg",
    productImage2:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-2.jpg",
    productImage3:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-3.jpg",
    productImage4:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-4.jpg",
    productImage5:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-5.jpg",
    category: allCategories.artsCraftAndSewing,
    tags: [tags.draw, tags.fun, tags.joy, tags.projector, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                            Features:
                            <ol>
                              <li>✅ Great Educational Toy</li>
                              <li>✅ Promoting Creativity And Imagination</li>
                              <li>✅ Band of Colors</li>
                              <li>✅ Color: Blue / Pink</li>
                              <li>✅ Dimensions: 35.5cm*21cm*25cm</li>
                              <li>✅ Battery: powered by 2 AA batteries (bring your own)</li>
                              <li>✅ Suitable Age:3</li>
                              <li>✅ Notice: Comes with 1 x Projector Table, 1 x Drawing Book, 12 x Water Pen, 1 x Eraser, 3 x Stencils., 24 Pattern</li>
                            </ol>`,
  },
  {
    productName: "Baby Diaper Caddy Organizer",
    unitPrice: 350.0,
    spcifications:
      "is great for organizing all baby stuffs in the car ,such as toys,diapers,wipes,bibs and more. The main compartment includes 3 removable compartments to provide greater storage space. Portable diaper box:handle,mother can transfer all the necessities from one diaper bag to another in seconds. Trolley storage:The diaper basket can be quickly hung in the stroller with two sides of the ring,suitable for different cart hooks. 9 external pockets:(6 smaller pockets 3 larger sizes) perfect for storing small items,so they can be placed on your fingers when you need them; it keeps your items in order. The best gift for your baby:This basket can be used not only as a baby diaper box,but also in a family baby room,stroller storage bag or tote bag; colour:Khaki Material:Felt leather Size:33*18*15cm Package Contents: 1* storage bag",
    sku: "ST000082111111",
    category: allCategories.baby,
    tags: [tags.baby, tags.caddy, tags.diaper, tags.organizer, tags.product],
    discount: 0,
    coverImage: "./Images/Product Images/Baby Diaper Caddy Organizer.jpg",
    productImage1: "./Images/babyImages/Baby Diaper Caddy Organizer-1.jpg",
    productImage2: "./Images/babyImages/Baby Diaper Caddy Organizer-2.jpg",
    productImage3: "./Images/babyImages/Baby Diaper Caddy Organizer-3.jpg",
    productImage4: "./Images/babyImages/Baby Diaper Caddy Organizer-4.jpg",
    descriptionAsHTML: `
          Features:
          <ol>
            <li>is great for organizing all baby stuffs in the car ,such as toys,diapers,wipes,bibs and more.</li>
            <li>The main compartment includes 3 removable compartments to provide greater storage space.</li>
            <li>Portable diaper box:handle,mother can transfer all the necessities from one diaper bag to another in seconds.</li>
           
          </ol>`,
  },
  {
    productName: "Baby Finger Toothbrush",
    unitPrice: 14.0,
    spcifications:
      "MAKE CLEANING TEETH FUN: A toothbrush kids actually want to use?! Make morning and evening rituals a breeze with our fun finger toothbrushes. Whether your baby has started to teethe or not, they’ll love the sensation of using our brushes (and won’t even realise you’re training them in healthy hygiene). RECOMMENDED BY DENTISTS: The earlier you introduce your kids to good oral hygiene habits, the better chance you have of protecting them from all the problems that can arise when they don’t look after their teeth. Teach them brushing now, and you’ll help reduce plaque and tartar build up, setting them up for gold stars at the dentist’s office. EASY TO USE AND CLEAN: Getting a toothbrush in (or out of) your baby’s mouth can be a nightmare, but our finger toothbrushes make oral hygiene easy. The ergonomic shape fits comfortably on your finger, and the soft, resilient bristles provide a gentle, massaging feel. The dual-sided design even enables cleaning of the tongue with massaging bumps. SAFE TO CHEW: Tired of fishing random objects out of your little one’s mouth? Our finger toothbrushes are made from 100% food-grade, toxic-free, BPA-free, premium silicone material, and are completely safe for your child to chew. They’re also very easy to clean, and with three toothbrushes included, in different colour hygienic cases for storage and travel, you have everything you need to ensure total mouth cleanliness. GREAT FOR PETS: Pets’ teeth often get neglected, but our finger toothbrushes are perfect for cats, dogs and other animals too. Much like little kids, pets love the sensation of using our toothbrushes, so you can get the whole family (including the furry members) on board with looking after their teeth.",
    sku: "ST00005646854",
    coverImage: "./Images/Product Images/Baby Finger Toothbrush.jpg",
    productImage1: "./Images/babyImages/Baby Finger Toothbrush-1.jpg",
    productImage2: "./Images/babyImages/Baby Finger Toothbrush-2.jpg",
    productImage3: "./Images/babyImages/Baby Finger Toothbrush-3.jpg",
    productImage4: "./Images/babyImages/Baby Finger Toothbrush-4.jpg",
    productImage5: "./Images/babyImages/Baby Finger Toothbrush-5.jpg",
    category: allCategories.baby,
    tags: [
      tags.brush,
      tags.clean,
      tags.easy,
      tags.silicon,
      tags.baby,
      tags.teeth,
      tags.tooth,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>We know the health of your child is so important. So we use only the softest silicone material in our infant toothbrush products to prevent damage to your child.</li>
            <li> High quality food-grade silicone, BPA free , so you can ensure no compromise in our product safety.</li>
            <li> Designed to fit all adult fingers, hence, both mum and dad can help baby to clean.</li>
            <li> No damage of the teeth and gums and easily gives baby a comfortable cleaning process.</li>
            <li> And our finger toothbrushes are also popularly used with cats, dogs, and other pets.</li>
            </ol>
            <br/>
            USING STEPS:
            <ol>
            <li> Clean before using the product.</li>
            <li> use steam or boil cook for 3-5 minutes disinfection.</li>
            <li> Let the baby lie in mother’s arms.</li>
            <li> Fixed baby’s head by hand.</li>
            <li> A finger of your other hand slide into the toothbrush.</li>
            <li> Wet a fingertip toothbrush with warm water.</li>
            <li> Clean your baby’s teeth and gums with toothbrush.</li>
            <li> It’s should be thoroughly cleaned at the end of use.</li>
            <li> Material: The brush applied high quality 100% FDA-Approved food grade material, latex-free, BPA-free food grade silicone, very soft, do not hurt or damage your child’s gums and teeth.</li>
            <li> Multifunction: Soft bristles, double-sided design, clean little teeth, tongue and massage gums, train your child healthy oral habits.</li>
            <li> Case Storage &Portable: With a case to storage and keep the toothbrush clean, very convenient for travel or outside home.</li>
            <li>  Suitable for ages of 6 months plus, In addition, our toothbrushes are also popularly used with cats, dogs, and other pets.</li>
            <li> Kids love finger toothbrushes and they are recommended by dentists. Perfect for your baby, whether they have started to teeth or not. The brush can help reduce plaque and tartar buildup. With full protection of the child’s health, Support a child’s hygiene habits from an early age.</li>
          </ol>
          `,
  },
  {
    productName: "Baby Kangaroo Backpack",
    unitPrice: 100.0,
    spcifications:
      "Suitable for carrying 3-18 months old baby waistbelt and shoulder belt is adjustable. Item specific : Color:as picture Material: Cotton Fitable Baby age:0-18months Max Weighted:Max 15KG Package: 1 X Baby Baby Kangaroo Backpack Ergonomic Baby Carrier Wrap Breathable Sling baby Tragetuch Adjustable Infant Hipseat.",
    sku: "ST000033259",
    category: allCategories.baby,
    coverImage: "./Images/Product Images/Baby Kangaroo Backpack.jpg",
    productImage1: "./Images/babyImages/Baby Kangaroo Backpack-1.jpg",
    productImage2: "./Images/babyImages/Baby Kangaroo Backpack-2.jpg",
    productImage3: "./Images/babyImages/Baby Kangaroo Backpack-3.jpg",
    tags: [tags.baby, tags.backpack, tags.breathable, tags.kangroo],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Suitable for carrying 3-18 months old babywaistbelt and shoulder belt is adjustableItem specific :Color:as pictureMaterial: CottonFitable Baby age:0-18monthsMax Weighted:Max 15KGPackage:1 X Baby Carrier</li>
            <li>MOTOHOOD Baby Kangaroo Backpack Ergonomic Baby Carrier Wrap Breathable Sling baby Tragetuch Adjustable Infant Hipseat</li>
            <li>Suitable for carrying 3-18 months old baby</li>
            <li>waistbelt and shoulder belt is adjustable</li>
          </ol>
          <br/>
          Item specific:
          <ol>
            <li>Color:as picture</li>
            <li>Material: Cotton</li>
            <li>Fitable Baby age:0-18months</li>
            <li>Max Weighted:Max 15KG</li>
            
          </ol>
          `,
  },
  {
    productName: "Baby Mosquito Repellent Spray 65ML",
    unitPrice: 30.0,
    spcifications:
      "Nexton baby mosquito repellent spray helps to keep mosquitos away and keeps your baby safe from hurting. Harmful sprays or lotions are not suitable for your baby’s delicate skin. All you need is the best baby spray to keep your baby safe from mosquito bites. This mosquito repellent spray is hypoallergenic and gives long-lasting coverage without a greasy effect.",
    sku: "ST00005454",
    coverImage:
      "./Images/Product Images/Baby Mosquito Repellent Spray 65ML.jpg",
    productImage1:
      "./Images/babyImages/Baby Mosquito Repellent Spray 65ML-1.jpg",
    category: allCategories.baby,
    tags: [tags.baby, tags.mosquito, tags.repellant],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Mild and Gentle</li>
            <li>8 Hours Protection</li>
            <li>Long Lasting</li>
            <li>Specially Designed for babies</li>
          </ol>`,
  },
  {
    productName: "Baby Mummy Maternity Nappy Diapers Bag",
    unitPrice: 200.0,
    spcifications:
      "This mulifunctional Diaper Nappy Maternity Nursing Bag/Backpack can easily store your baby’s milk bottle’s, water bottle, clothes, diapers, towel & much more because of its large capacity 25 Litres. Featuring multiple pockets to store your baby’s various necessities in different separate pockets, this Maternity bag lets you keep things organized & make them easily accessible when required. Made up of High quality Oxford material, this Nursing Bag is water resistant which makes it safe from water & milk spills. Also the bag is very easy to wipe clean.",
    sku: "ST0000821969",
    coverImage:
      "./Images/Product Images/Baby Mummy Maternity Nappy Diapers Bag.jpg",
    productImage1:
      "./Images/babyImages/Baby Mummy Maternity Nappy Diapers Bag-1.jpg",
    productImage2:
      "./Images/babyImages/Baby Mummy Maternity Nappy Diapers Bag-2.jpg",
    productImage3:
      "./Images/babyImages/Baby Mummy Maternity Nappy Diapers Bag-3.jpg",
    category: allCategories.baby,
    tags: [
      tags.backpack,
      tags.bags,
      tags.diaper,
      tags.mummy,
      tags.nappy,
      tags.nursing,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Material: Oxford Cloth</li>
            <li>Size in Inch: 17.32 X 14.96 X 6.3″</li>
            <li>Use: Mummy Backpack</li>
            <li>Net weight: 535g</li>
            <li>Shape: Vertical Square</li>
            <li>Material technology: Soft surface</li>
            <li>Style: Casual Large Capacity</li>
            <li>Strap: Adjustable</li>
          </ol>`,
  },
  {
    productName: "Baby Shower Cap",
    unitPrice: 50.0,
    spcifications:
      "Buy this awesome ” Exclusive Baby Shower Cap”. The product is originally manufactured by the company and it’s a top selling product with a very reasonable and low price in the market in Pakistan. We hope you will love and enjoy this product and it will be very useful for you. It will improve your daily life. Please see all the images of the product and must watch the video of the product (if available) on product page before placing your order and if you have any query regarding ” Exclusive Baby Shower Cap ” kindly ask from us we will try our best to respond your queries as soon as possible. The product ” Exclusive Baby Shower Cap ” has 7 days checking warranty as per site policy, if you get any wrong product or damaged product then you can claim return then the product will be picked up by the courier boy and you will be refunded.",
    sku: "ST000054147",
    coverImage: "./Images/Product Images/Baby Shower Cap.jpg",
    productImage1: "./Images/babyImages/Baby Shower Cap-1.jpg",
    productImage2: "./Images/babyImages/Baby Shower Cap-2.jpg",
    productImage3: "./Images/babyImages/Baby Shower Cap-3.jpg",
    category: allCategories.baby,
    tags: [
      tags.baby,
      tags.cap,
      tags.ear,
      tags.eyes,
      tags.product,
      tags.protection,
      tags.shower,
    ],
    discount: 30.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>100% Brand new and well packed in retail packing as purchased from manufacturer</li>
            <li>This product is highly recommended by many customers around the globe</li>
            <li>No any side effects have been registered ye This product has most of the positive reviews on international e-commerce sites like amazon or aliexpress</li>
            <li>Color could not be specified for this product because the specific colors are very short in the market</li>
            <li>Very cost effective, available in really cheap price as compare to the market in Pakistan</li>
            <li>7 days return and refund policy available as this site policy.</li>
            <li>Follow Our Shop to Get More Exclusive Discounts and Innovative Products.</li>
          </ol>`,
  },
  {
    productName: "Colorful Baby Toddler Hat Anti-collision Protective Cap",
    unitPrice: 70.0,
    spcifications:
      "Made of soft cotton and high elasticity harmless sponge, effectively protect the baby’s fragile head, and provide a comfortable use feeling.  Designed to prevent baby from harsh bumps on the forehead, side of the head and back of the head when learning to crawl and walk.  With the adjustable strap to fit baby’s head, flexible and can easily fit into handbags, baby carriage and pockets.  Material: Cotton Sponge  Color: 7 kinds  Size: Multi  Note:  There could be some slight differences in the color tone of the pictures and the actual item.  Please allow a little differs due to manual measurement, thanks.  Package Included:  1pc x Baby Toddler Anti-collision Protective Hat  No Retail Box. Packed Safely in Bubble Bag.",
    sku: "ST0000565620",
    coverImage:
      "./Images/Product Images/Colorful Baby Toddler Hat Anti-collision Protective Cap.jpg",
    productImage1:
      "./Images/babyImages/Colorful Baby Toddler Hat Anti-collision Protective Cap-1.jpg",
    productImage2:
      "./Images/babyImages/Colorful Baby Toddler Hat Anti-collision Protective Cap-2.jpg",
    productImage3:
      "./Images/babyImages/Colorful Baby Toddler Hat Anti-collision Protective Cap-3.jpg",
    productImage4:
      "./Images/babyImages/Colorful Baby Toddler Hat Anti-collision Protective Cap-4.jpg",
    productImage5:
      "./Images/babyImages/Colorful Baby Toddler Hat Anti-collision Protective Cap-5.jpg",
    category: allCategories.baby,
    tags: [
      tags.baby,
      tags.cap,
      tags.cotton,
      tags.headgear,
      tags.helmet,
      tags.protection,
    ],
    discount: 36.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Made of soft cotton and high elasticity harmless sponge, effectively protect the baby’s fragile head, and provide a comfortable use feeling.</li>
            <li> Designed to prevent baby from harsh bumps on the forehead, side of the head and back of the head when learning to crawl and walk.</li>
            <li> With the adjustable strap to fit baby’s head, flexible and can easily fit into handbags, baby carriage and pockets.</li>
            <li> Note: There could be some slight differences in the color tone of the pictures and the actual item.  Please allow a little differs due to manual measurement, thanks.</li>
          </ol>
          <br/>
          Specification:
          <ol>
            <li> Material: Cotton Sponge</li>
            <li> Color: 7 kinds</li>
            <li> Size: Multi</li>
            <li>  Package Included:  1pc x Baby Toddler Anti-collision Protective Hat  No Retail Box. Packed Safely in Bubble Bag.</li>
          </ol>
          `,
  },
  {
    productName: "Nexton Aloe Vera Baby Soap 100 gm",
    unitPrice: 30.0,
    spcifications:
      "Nexton Aloe Vera baby soap helps soften, moisturize and soothe the dry and sensitive skin of your dearest one It is specifically enriched with Aloe Vera extracts containinggentle yet effective cleansing agents, it is ideal for the daily care of your baby’s skin. It prevents irritation during or after bath and is extremely gentle to use on entire body even on baby’s face.",
    coverImage: "./Images/Product Images/Nexton Aloe Vera Baby Soap 100 gm.jpg",
    productImage1:
      "./Images/babyImages/Nexton Aloe Vera Baby Soap 100 gm-1.png",
    productImage2:
      "./Images/babyImages/Nexton Aloe Vera Baby Soap 100 gm-2.jpg",

    sku: "ST0000821695",
    category: allCategories.baby,
    tags: [tags.baby, tags.brand, tags.nexton, tags.soap],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Hypoallergenic</li>
            <li>Extra mild for baby’s skin and hair.</li>
            <li>Lightly Fragrant.</li>
          </ol>`,
  },
  {
    productName: "Pack Of 2 Child Baby Safety Locks",
    unitPrice: 30.0,
    spcifications:
      "You can prevent the baby free to open the door, grind your fingers, damage to the cabinet items or items falling hurt baby. Can be used for refrigerators, washing machines / dry cleaning machines, chest of drawers, dishwashers and other supplies equipment to prevent the baby opened, eating or messing up the items inside to avoid accidents. Material: PlasticColor:BlueSize: 9.5cmWeight:16g/pcs",
    sku: "ST000054854",
    coverImage: "./Images/Product Images/Pack Of 2 Child Baby Safety Locks.jpg",
    productImage1:
      "./Images/babyImages/Pack Of 2 Child Baby Safety Locks-1.jpg",
    productImage2:
      "./Images/babyImages/Pack Of 2 Child Baby Safety Locks-2.jpg",
    productImage3:
      "./Images/babyImages/Pack Of 2 Child Baby Safety Locks-3.jpg",
    productImage4:
      "./Images/babyImages/Pack Of 2 Child Baby Safety Locks-4.jpg",

    category: allCategories.baby,
    tags: [tags.baby, tags.lock, tags.safety],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>You can prevent the baby free to open the door, grind your fingers, damage to the cabinet items or items falling hurt baby</li>
            <li>Can be used for refrigerators, washing machines / dry cleaning machines, chest of drawers, dishwashers and other supplies equipment to prevent the baby opened, eating or messing up the items inside to avoid accidents</li>
            <li>Material: PlasticColor:BlueSize: 9.5cmWeight:16g/pcs</li>
          </ol>`,
  },
  {
    productName:
      "Pigeon Newborn Kids Baby Safety Manicure Nail Cutter Clippers Scissors",
    unitPrice: 45.0,
    spcifications:
      "Cut your baby’s nails safely and precisely, using these perfect Pigeon safety baby nail cutting scissors. These scissors are perfectly designed to cut newborn’s nails. Their handles are made of plastic and blades are made of steel. They have round tips for maximum safety. ",
    sku: "ST00003378821",
    coverImage:
      "./Images/Product Images/Pigeon Newborn Kids Baby Safety Manicure Nail Cutter Clippers Scissors.jpg",
    productImage1:
      "./Images/babyImages/Pigeon Newborn Kids Baby Safety Manicure Nail Cutter Clippers Scissors-1.jpg",
    productImage2:
      "./Images/babyImages/Pigeon Newborn Kids Baby Safety Manicure Nail Cutter Clippers Scissors-2.jpg",
    productImage3:
      "./Images/babyImages/Pigeon Newborn Kids Baby Safety Manicure Nail Cutter Clippers Scissors-3.jpg",
    productImage4:
      "./Images/babyImages/Pigeon Newborn Kids Baby Safety Manicure Nail Cutter Clippers Scissors-4.jpg",

    category: allCategories.baby,
    tags: [tags.baby, tags.clipper, tags.nail, tags.perigon],
    discount: 44.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Your Satisfaction-Our Commitment: If you are Not Satisfied With Our Products , You Can Get a Full Refund / Return.</li>
            <li>Original Pigeon Product</li>
            <li>Original Price is 10$ But As Its Original Packing is Not Available , So We Selling It At 0.8$</li>
            <li>Children’s manicure scissors are designed to care for the nails of newborns from the first days of life</li>
            <li>Babies’ nails are so soft that only really thin and sharp blades can cut them off</li>
            <li>Pigeon manicure scissors are made of stainless steel using the latest production technologies</li>
            <li>The rounded shape of the blades makes the scissors safe to use</li>
            <li>Thanks to the rubberized coating of the handles, the scissors are comfortable to hold in your hand, they do not slip or fall out.</li>
            <li>Trim nails when they grow 1 mm, otherwise the baby may scratch himself</li>
            <li>Quality Stainless Steel Material, No Smell</li>
            <li>Product Dimensions: 6.1 x 3.4 x 0.43 inches; 0.64 Ounces</li>
            <li>Manufacturer recommended age: 0 months-5 years</li>
            <li>Specially Designed For New Born Babies As Traditional Nail Cutter is very Difficult to Use when clipping Baby’s Nails</li>
            <li>Safe Use</li>
            <li>Blades are Specially Designed to Cut Nails, Will Not Harm Skin</li>
            <li>Round Edges Ensures Safety</li>
            <li>Sharp Blades For Easy Cutting Of Baby Nails Harmlessly</li>
            <li>Compact Shape</li>
            <li>Easy To Use.</li>
            <li>For more than 0 years old baby.</li>
            <li>Practical and durable.</li>
            <li>Color: As Pictures ( Turquoise And White )</li>
            <li>Material: Stainless Steel</li>
            <li>Package Include: 1 * Pigeon baby scissors.</li>
          </ol>
          `,
  },
  {
    productName: "Silicone Teether Baby Pacifier Glove Teething",
    unitPrice: 40.0,
    spcifications:
      "Buy this awesome “Silicone Teether Baby Pacifier Glove Teething “. The product is originally manufactured by the company and it’s a top selling product with a very reasonable and low price in the market in Pakistan. We hope you will love and enjoy this product and it will be very useful for you. It will improve your daily life. Please see all the images of the product and must watch the video of the product (if available) on product page before placing your order and if you have any query regarding ” Silicone Teether Baby Pacifier Glove Teething ” kindly ask from us we will try our best to respond your queries as soon as possible. The product ” Silicone Teether Baby Pacifier Glove Teething ” has 7 days checking warranty as per site policy, if you get any wrong product or damaged product then you can claim return then the product will be picked up by the courier boy and you will be refunded.",
    sku: "ST000054854463",
    category: allCategories.baby,
    coverImage:
      "./Images/Product Images/Silicone Teether Baby Pacifier Glove Teething.jpg",
    productImage1:
      "./Images/babyImages/Silicone Teether Baby Pacifier Glove Teething-1.jpg",
    tags: [tags.baby, tags.silicon, tags.sucking, tags.teething],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>100% Brand new and well packed in retail packing as purchased from manufacturer</li>
            <li>This product is highly recommended by many customers around the globe</li>
            <li>No any side effects have been registered ye This product has most of the positive reviews on international e-commerce sites like amazon or aliexpress</li>
            <li>Color could not be specified for this product because the specific colors are very short in the market</li>
            <li>Very cost effective, available in really cheap price as compare to the market in Pakistan</li>
            <li>7 days return and refund policy available as this site policy.</li>
            <li>Follow Our Shop to Get More Exclusive Discounts and Innovative</li>
          </ol>`,
  },
  {
    productName: "U shape Baby Toothbrush",
    unitPrice: 30.0,
    spcifications:
      "Innovative U-shaped Groove, close to the teeth, to help babies clean their teeth. With a U-shaped toothbrush, brushing your baby’s teeth is no longer a nightmare. Super soft silicone brush head, ultra-quiet massage, does not cause root bleeding and avoids cleansing. Cleaning teeth, healthy baby, comprehensive body, perfect independent ability. How to use: Shake the toothpaste before squeezing around the brush then put inside your kid’s mouth and just sway left to right. Rinse after using. This is so easy that you can also teach your kids to do it.",
    sku: "ST00004554489",
    category: allCategories.baby,
    tags: [tags.brush, tags.different, tags.fun, tags.ushape, tags.tooth],
    discount: 27.0,
    coverImage: "./Images/Product Images/U shape Baby Toothbrush.jpg",
    productImage1: "./Images/babyImages/U shape Baby Toothbrush-1.jpg",
    productImage2: "./Images/babyImages/U shape Baby Toothbrush-2.jpg",
    productImage3: "./Images/babyImages/U shape Baby Toothbrush-3.jpeg",
    productImage4: "./Images/babyImages/U shape Baby Toothbrush-4.jpg",

    descriptionAsHTML: `
          Features:
          <ol>
            <li>High Quality Baby Tooth Brush Soft Teeth Brush For Kids Silicone Baby Brush. 360° U Shape Tooth Brush, Teeth Cleaning Brush, Children Teeth Brush, Teether. Add2CartNow</li>
            <li>
            CREATIVE U-SHAPED DESIGN: The New U-shaped brush head is suitable for the shape and mechanics of children’s teeth structure. unique designed for children’s tender gums and sensitive teeth.
        </li>
            <li>
            PACIFIER GRADED SILICONE MATERIALS: Soft pacifier grade silicone rotates 360 degrees around the teeth , providing a comfortable feeling of brushing, the original cleaning path, effective deep cleaning. It will not harm the gums and protects children’s enamel.
        </li>
          </ol>`,
  },
  {
    productName: "Nexton Baby Bath (Mild & Gentle) 500 ml",
    unitPrice: 45.0,
    spcifications:
      "Nexton baby bath is mild and gentle enough for the most delicate skin. This baby bath with a delightful scent and moisturizing properties won’t dry out your little one’s smooth and soft skin. Essential oils are too powerful for baby’s skin so you need something that is formulated without harsh chemicals and leaves baby’s skin beautifully conditioned and dewy. Since the baby’s skin is most sensitive so a hypoallergenic and tear-free baby bath is a must. Nexton mild and gentle baby bath is perfect for baby’s skin and scalp by offering protection and making bath time fun every day for the baby.",
    sku: "ST0000775875",
    coverImage: "./Images/Product Images/NBB1.jpg",
    productImage1: "./Images/babyImages/NBB2.jpg",

    category: allCategories.baby,
    tags: [tags.baby, tags.bath, tags.nexton, tags.product],
    discount: 9.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Mild & gentle baby bath</li>
            <li>Creates a gentle lather</li>
            <li>Gently moisturizes baby’s delicate skin</li>
            <li>Gentle to eyes</li>
          </ol>`,
  },
  {
    productName: "DANJIA Stretch Marks Cream",
    unitPrice: 60.0,
    spcifications:
      "Improve Your Skin Made with natural ingredient help to alleviate and prevent greatly the appearance of scars/ stretch marks high-hydration moisturizing function Quick Efficiency To Improve Your Skin Use after Pregnancy Safe To Use Quality Guarantee Available in 230 ML",
    sku: "ST000085454",
    coverImage: "./Images/Product Images/DANJIA Stretch Marks Cream.jpg",
    productImage1: "./Images/beautyImages/DANJIA Stretch Marks Cream-1.jpg",
    productImage2: "./Images/beautyImages/DANJIA Stretch Marks Cream-2.jpg",
    productImage3: "./Images/beautyImages/DANJIA Stretch Marks Cream-3.jpg",

    category: allCategories.beauty,
    tags: [
      tags.beauty,
      tags.cream,
      tags.health,
      tags.marks,
      tags.removal,
      tags.strech,
    ],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Improve Your Skin</li>
              <li>Made with natural ingredient</li>
              <li>help to alleviate and prevent greatly the appearance of scars/ stretch marks</li>
              <li>high-hydration</li>
              <li>moisturizing function</li>
              <li>Quick Efficiency To Improve Your Skin</li>
              <li>Use after Pregnancy</li>
              <li>Safe To Use</li>
              <li>Quality Guarantee</li>
              <li>Available in 230 ML</li>
            </ol>`,
  },
  {
    productName: "Double Sided Foot Rasp Foot File and Callus Remover",
    unitPrice: 50.0,
    spcifications:
      "The Best Way To Remove Callus : If You Have Heavy Calluses, This Is For You, Just Do It ! Bad Heel And Tough Deep Skin On Wet And Dry Feet, Giving You Baby-Soft And Smooth Feet. Salon-Quality Foot File : Made With Stainless Steel Surface, This Coarse Foot File Is Salon-Quality. The Blade Is Designed With Big Sharp Holes, And Works In Both Up & Down Directions. It Acts Like a Grater-Tool, Removing Calluses Quickly–Just Like The Technicians At The Nail Salon. Unique Design : The Blade Is Embed In The Sturdy Handle, You Can Remove The Blade For Cleaning. Save Time And Money : Just Use It Before Taking a Bath, Only Need Minutes, Your Heavy Calluses Will Be Taken Off, Saving Much Time And Money For You! They Definitely Made Your Life Better. No-Risk Purchase: Unconditional Money-Back Guarantee. If You’re Unsatisfied With This Item For Any Reason,Feel Free To Contact Us Any Time.",
    sku: "ST00008954932",
    coverImage:
      "./Images/Product Images/Double Sided Foot Rasp Foot File and Callus Remover.jpg",
    productImage1:
      "./Images/beautyImages/Double Sided Foot Rasp Foot File and Callus Remover-1.jpg",
    productImage2:
      "./Images/beautyImages/Double Sided Foot Rasp Foot File and Callus Remover-2.jpg",
    productImage3:
      "./Images/beautyImages/Double Sided Foot Rasp Foot File and Callus Remover-3.jpg",
    productImage4:
      "./Images/beautyImages/Double Sided Foot Rasp Foot File and Callus Remover-4.jpg",
    productImage5:
      "./Images/beautyImages/Double Sided Foot Rasp Foot File and Callus Remover-5.jpg",
    category: allCategories.beauty,
    tags: [tags.callus, tags.clean, tags.foot, tags.health, tags.remover],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>The Best Way To Remove Callus : If You Have Heavy Calluses, This Is For You, Just Do It ! Bad Heel And Tough Deep Skin On Wet And Dry Feet, Giving You Baby-Soft And Smooth Feet</li>
              <li>Salon-Quality Foot File : Made With Stainless Steel Surface, This Coarse Foot File Is Salon-Quality. The Blade Is Designed With Big Sharp Holes, And Works In Both Up & Down Directions. It Acts Like a Grater-Tool, Removing Calluses Quickly–Just Like The Technicians At The Nail Salon!</li>
              <li>Unique Design : The Blade Is Embed In The Sturdy Handle, You Can Remove The Blade For Cleaning</li>
              <li>Save Time And Money : Just Use It Before Taking a Bath, Only Need Minutes, Your Heavy Calluses Will Be Taken Off, Saving Much Time And Money For You! They Definitely Made Your Life Better</li>
              <li>No-Risk Purchase: Unconditional Money-Back Guarantee. If You’re Unsatisfied With This Item For Any Reason,Feel Free To Contact Us Any Time</li>
            
            </ol>`,
  },
  {
    productName:
      "Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver",
    unitPrice: 150.0,
    coverImage:
      "./Images/Product Images/Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver.jpg",
    productImage1:
      "./Images/beautyImages/Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver-1.jpg",
    productImage2:
      "./Images/beautyImages/Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver-2.jpg",

    spcifications:
      "Premium and stylish 2 in 1 Multifunctional hair trimmer with Nose Hair remover. Multifunctional Rechargeable 2 in 1 Trimmer. best for personal care. Practical 2 in 1 hair trimmer, meeting your different requirements. charging time 8 hours. light weight, easy to us.",
    sku: "ST0000115544778",
    category: allCategories.beauty,
    tags: [tags.easy, tags.hair, tags.nose, tags.stylish, tags.trimmer],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Premium and stylish 2 in 1 Multifunctional hair trimmer with Nose Hair remover</li>
              <li>Multifunctional Rechargeable 2 in 1 Trimmer</li>
              <li>best for personal care</li>
              <li>Practical 2 in 1 hair trimmer, meeting your different requirements.</li>
              <li>charging time 8 hours</li>
              <li>light weight, easy to us</li>
             
            </ol>`,
  },
  {
    productName: "Indulekha Bringha Hair Oil",
    unitPrice: 40.0,
    coverImage: "./Images/Product Images/Indulekha Bringha Hair Oil.jpg",
    productImage1: "./Images/beautyImages/Indulekha Bringha Hair Oil-1.jpg",
    productImage2: "./Images/beautyImages/Indulekha Bringha Hair Oil-2.jpg",
    productImage3: "./Images/beautyImages/Indulekha Bringha Hair Oil-3.jpg",
    productImage4: "./Images/beautyImages/Indulekha Bringha Hair Oil-4.jpg",

    spcifications:
      "An oil mixture that has its origins in the holistic Ayurvedic medical ideology from ancient India. Indulekha Hair Oil contains oil from various sources including Bringharaj, Amla, Vatadha, Svetakutaja, Grape, Curry Leaves, Indrayava, Neem, Aloe Vera, Mulethi, Amrita, Brahmi, Camphor, Kshiram, along with a Coconut oil base. Damage Control This product is from the Unilever personal care range. How to use: One can use Indulekha Hair Oil with the included applicator or use their hands to rub the oil into their scalp. The massaging should be gentle so as to not stress the hair or scalp. People leave oil in their hair for varying times, some say 30 minutes is enough while others leave it for hours. There is no correct method as to the timing of leaving the oil in, one can figure out a timing that works for them personally.",
    sku: "ST000082454654",
    category: allCategories.beauty,
    tags: [tags.care, tags.hair, tags.oil, tags.personal, tags.treatment],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>An oil mixture that has its origins in the holistic Ayurvedic medical ideology from ancient India</li>
              <li>Indulekha Hair Oil contains oil from various sources including Bringharaj, Amla, Vatadha, Svetakutaja, Grape, Curry Leaves, Indrayava, Neem, Aloe Vera, Mulethi, Amrita, Brahmi, Camphor, Kshiram, along with a Coconut oil base. </li>
              <li>Damage Control This product is from the Unilever personal care range.</li>
             
            </ol>
            <br/>
            How to use:
            <ol>
              <li>One can use Indulekha Hair Oil with the included applicator or use their hands to rub the oil into their scalp.</li>
              <li>The massaging should be gentle so as to not stress the hair or scalp. People leave oil in their hair for varying times, some say 30 minutes is enough while others leave it for hours.</li>
              <li>There is no correct method as to the timing of leaving the oil in, one can figure out a timing that works for them personally.</li>
              
            </ol>
            `,
  },
  {
    productName: "Jade Roller and Gua Sha Set Facial Beauty Gua Sha Massager",
    unitPrice: 87.0,
    coverImage:
      "./Images/Product Images/Jade Roller and Gua Sha Set Facial Beauty Gua Sha Massager.jpg",
    productImage1:
      "./Images/beautyImages/Jade Roller and Gua Sha Set Facial Beauty Gua Sha Massager-1.jpg",
    productImage2:
      "./Images/beautyImages/Jade Roller and Gua Sha Set Facial Beauty Gua Sha Massager-2.jpg",
    productImage3:
      "./Images/beautyImages/Jade Roller and Gua Sha Set Facial Beauty Gua Sha Massager-3.jpg",
    productImage4:
      "./Images/beautyImages/Jade Roller and Gua Sha Set Facial Beauty Gua Sha Massager-4.jpg",
    productImage5:
      "./Images/beautyImages/Jade Roller and Gua Sha Set Facial Beauty Gua Sha Massager-5.jpg",
    spcifications:
      "BENEFITS: Faceroller — muscle tension relief, reduce facial puffiness and help your skin look fresh; firm your skin and make it look dewy and lifted. JadeFaceRoller: The skincare face massager tool is smooth, sturdy and no squeaky. It provides the cool feeling and energizes the skin. GuaSha: not only can lift your skin and improve fine lines with upwards pressure, but it also helps to shape your jaw line. Tips: You can keep the facial jade roller and Guasha in the fridge for about 10minutes to keep it cooler on the skin and this helps to reduce morning puffiness and get the skin refreshed. We suggest you wash the beauty skin care tools —- face roller and guasha after and before each use. You can wash it with water or use a wet wipe. WHY ROLLER FACE-Face roller to awaken softer-looking, more luxurious skin with the rejuvenating magic of a jade roller. It promotes blood circulation to the eyes, face and neck, which can reduce puffiness and wrinkling and can be used with face creams to help them absorb better. Use your jade face roller massager as part of your daily beauty ritual to soothe and smooth away stress and bad vibes. GUA SHA MASSAGE TOOL- The self-care secret of the ages, the Jade GuaSha will reduce fine lines, and Dredge lymphatic and tighten face contouring . Giving you a new way to apply your lotions, serums, salves, and makeup, this is the most obscure secret in the beauty world. Guasha promote local lymphatic detoxification function and blood circulation, smooth the appearance of the skin, make you look fresh and young, the whole person looks brand-new. EASY, DURABILE AND VERSATILE–According to the ergonomic design, the jade roller design is perfectly suitable for facial contours such as eye contours and mouth corners. The smaller roller is used for the eye area, and the larger roller is used for the neck, face and body. The operation is simple. Rolling about 15 minutes while watching TV or drinking coffee brings a personal massage experience. (Place it in the refrigerator for 10-15 minutes before use to relieve sinus pain and headache). A MEANINGFUL AND SPECIAL GIFT-Dive deep into the world of ancient beauty secrets . Our Guasha Jade roller set is made with 100% REAL jade stone and high-quality metal handles-this beauty products which can be a great holiday gift for Mom, Wife, Friends",
    sku: "ST0000844515121",
    category: allCategories.beauty,
    tags: [tags.best, tags.jade, tags.massage, tags.quality, tags.roller],
    discount: 8.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>BENEFITS: Faceroller — muscle tension relief, reduce facial puffiness and help your skin look fresh; firm your skin and make it look dewy and lifted</li>
              <li>JadeFaceRoller: The skincare face massager tool is smooth, sturdy and no squeaky. It provides the cool feeling and energizes the skin</li>
              <li>GuaSha: not only can lift your skin and improve fine lines with upwards pressure, but it also helps to shape your jaw line</li>
              <li>Tips: You can keep the facial jade roller and Guasha in the fridge for about 10minutes to keep it cooler on the skin and this helps to reduce morning puffiness and get the skin refreshed</li>
              <li>We suggest you wash the beauty skin care tools —- face roller and guasha after and before each use. You can wash it with water or use a wet wipe</li>
              <li>WHY ROLLER FACE-Face roller to awaken softer-looking, more luxurious skin with the rejuvenating magic of a jade roller. It promotes blood circulation to the eyes, face and neck, which can reduce puffiness and wrinkling and can be used with face creams to help them absorb better. Use your jade face roller massager as part of your daily beauty ritual to soothe and smooth away stress and bad vibes.</li>
              <li>GUA SHA MASSAGE TOOL- The self-care secret of the ages, the Jade GuaSha will reduce fine lines, and Dredge lymphatic and tighten face contouring . Giving you a new way to apply your lotions, serums, salves, and makeup, this is the most obscure secret in the beauty world. Guasha promote local lymphatic detoxification function and blood circulation, smooth the appearance of the skin, make you look fresh and young, the whole person looks brand-new.</li>
              <li>EASY, DURABILE AND VERSATILE–According to the ergonomic design, the jade roller design is perfectly suitable for facial contours such as eye contours and mouth corners. The smaller roller is used for the eye area, and the larger roller is used for the neck, face and body. The operation is simple. Rolling about 15 minutes while watching TV or drinking coffee brings a personal massage experience. (Place it in the refrigerator for 10-15 minutes before use to relieve sinus pain and headache)</li>
              <li>A MEANINGFUL AND SPECIAL GIFT-Dive deep into the world of ancient beauty secrets . Our Guasha Jade roller set is made with 100% REAL jade stone and high-quality metal handles-this beauty products which can be a great holiday gift for Mom, Wife, Friends</li>
            </ol>`,
  },
  {
    productName: "Professional Hair Cutting Scissors",
    unitPrice: 45.0,
    coverImage:
      "./Images/Product Images/Professional Hair Cutting Scissors.jpg",
    productImage1:
      "./Images/beautyImages/Professional Hair Cutting Scissors-1.jpg",
    productImage2:
      "./Images/beautyImages/Professional Hair Cutting Scissors-2.jpg",

    spcifications:
      " Professional Hair Cutting Scissors which delivers the best cutting experience ever! These scissors are made of finest stainless steel and have fixed finger rest that gives you a comfortable grip without getting loose. Professional Hairdressing Scissors are specially designed with ergonomic thumb ring and finger ring that gives you an accurate balance to give you finest cutting with convenience.",
    sku: "ST0000556454",
    category: allCategories.beauty,
    tags: [tags.cutting, tags.hair, tags.profession, tags.salon],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Sharp and durable, do not pull hair, comfortable feel</li>
              <li>Tightness can be adjusted</li>
              <li>Plastic handle coat, use with no sound</li>
              <li>Look no further, buy instantly! Great for home or salon usage.</li>
              <li>Material: stainless steel</li>
              <li>Color: black</li>
            </ol>`,
  },
  {
    productName: "Professional Makeup Brush Set",
    unitPrice: 300.0,
    coverImage: "./Images/Product Images/Professional Makeup Brush Set.jpg",
    productImage1: "./Images/beautyImages/Professional Makeup Brush Set-1.jpg",
    productImage2: "./Images/beautyImages/Professional Makeup Brush Set-2.jpg",
    productImage3: "./Images/beautyImages/Professional Makeup Brush Set-3.jpg",
    productImage4: "./Images/beautyImages/Professional Makeup Brush Set-4.jpg",
    productImage5: "./Images/beautyImages/Professional Makeup Brush Set-5.jpg",
    spcifications:
      "The makeup brush set is easy to carry and use2. with superior quality, the makeup brushes as a whole will not irritate your skin3. Durable original packaging can well protect your makeup brushes4. is an essential important beauty for you5. It is suitable for every wise customer6. This cosmetic brush is individually handcrafted. 100% Brand New Comes with a handy and portable leather wrap case, and each brush packed in a plastic bag. Brushes that are made of high quality synthetichair. Soft and comfortable to wear, perfectly for studio and personal use. Comes with a practical and portable wrap leather case. With proper care, your brushes can be enjoyed for years.",
    sku: "ST00002745412",
    category: allCategories.beauty,
    tags: [tags.brush, tags.makeup, tags.professional, tags.set],
    discount: 5.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>The makeup brush set is easy to carry and use</li>
              <li>with superior quality, the makeup brushes as a whole will not irritate your skin</li>
              <li> Durable original packaging can well protect your makeup brushes</li>
              <li> is an essential important beauty for you</li>
              <li> It is suitable for every wise customer</li>
              <li>This cosmetic brush is individually handcrafted. 100% Brand New Comes with a handy and portable leather wrap case, and each brush packed in a plastic bag. </li>
              <li>Brushes that are made of high quality synthetichair.</li>
              <li>Soft and comfortable to wear, perfectly for studio and personal use.</li>
              <li> Comes with a practical and portable wrap leather case.</li>
              <li>With proper care, your brushes can be enjoyed for years.</li>
            </ol>`,
  },
  {
    productName: "20W Glue Gun-High Temperature Glue Gun Kit with Glue Sticks",
    unitPrice: 45.0,
    coverImage: "./Images/Product Images/Glue-Gun.jpg",
    productImage1: "./Images/toolsImages/Glue-Gun-1.jpg",
    productImage2: "./Images/toolsImages/Glue-gun-2.jpg",
    productImage3: "./Images/toolsImages/Glue-gun-3.jpg",
    productImage4: "./Images/toolsImages/Glue-gun-4.jpg",
    productImage5: "./Images/toolsImages/Glue-gun-5.jpg",
    spcifications:
      " 20W Mini Glue Gun, Anti-Hot Cover & Safe Power Switch Comes with 1pc of 4-inch Glue Stick Works on Metal, Glass, Paper, Fabric, Plastic, Ceramics, etc Perfect for Home, Office, School, Ideal for DIY Craft Projects Precision Nozzle, Easy Squeeze Trigger, Built-In Stand Show Your DIY Talent: Cobiz believe “everyone is the DIY talent in life”. This heavty duty craft hot glue gun allows to show your DIY talent easily. Let your creativity flow, have your glue gun shipped today Ergonomic design and suitable size make it comfortable to handle and use . Made with high quality plastic engineered to sustain high pressure and temperature without deforming. Featured with german ceramic PTC thermal heating system to ensure 1-3 minutes quick preheating; Unique watt adjustment design make it not only work well for arts and crafts jobs! ",
    sku: "ST00002546585",
    category: allCategories.electronics,

    tags: [tags.diy, tags.glue, tags.gun, tags.tool, tags.tools],
    discount: 4.0,
    descriptionAsHTML: `
                Features:
                <ol>
                  <li>Product is 100% Same As Shown In Picture.</li>
                  <li>Super Fast Melting Technology.</li>
                  <li>Long Stainless Steel Nose For Perfect Work.</li>
                  <li>Large Power Indicator Light.</li>
                  <li>Power On/Off Button.</li>
                  <li>Strong Shock Proof Body.</li>
                  <li>Power: 110v ~ 240v.</li>
                  <li>Easy And Safe To Use.</li>
                  <li>High Quality Shock Proof Body.</li>
                  <li>Durable And Long Lasting.</li>
                  <li>Perfect For Arts And Crafts & Repairing.</li>
                </ol>
                `,
  },
  {
    productName:
      "Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver",
    unitPrice: 150.0,
    coverImage:
      "./Images/Product Images/Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver.jpg",
    productImage1:
      "./Images/beautyImages/Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver-1.jpg",
    productImage2:
      "./Images/beautyImages/Electric Nose Hair Trimmer Multifunctional Beard Trimmer Shaver-2.jpg",

    spcifications:
      "Premium and stylish 2 in 1 Multifunctional hair trimmer with Nose Hair remover. Multifunctional Rechargeable 2 in 1 Trimmer. best for personal care. Practical 2 in 1 hair trimmer, meeting your different requirements. charging time 8 hours. light weight, easy to us.",
    sku: "ST0000115544778",
    category: allCategories.electronics,
    tags: [tags.easy, tags.hair, tags.nose, tags.stylish, tags.trimmer],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Premium and stylish 2 in 1 Multifunctional hair trimmer with Nose Hair remover</li>
              <li>Multifunctional Rechargeable 2 in 1 Trimmer</li>
              <li>best for personal care</li>
              <li>Practical 2 in 1 hair trimmer, meeting your different requirements.</li>
              <li>charging time 8 hours</li>
              <li>light weight, easy to us</li>
             
            </ol>`,
  },
  {
    productName: "Portable 58mm Bluetooth Thermal Receipt Printer",
    unitPrice: 550.0,
    coverImage:
      "./Images/Product Images/Portable 58mm Bluetooth Thermal Receipt Printer.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-4.jpg",
    productImage5:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-5.jpg",
    spcifications:
      "Using thermal printing technology, printing speed is fast, printing fonts are clear, and efficiency is improved. No ink or ribbon required, reducing costs. Support Bluetooth or USB connection. Compatible with iOS, Android and Windows systems. Built-in 1500 mAh large capacity rechargeable lithium battery. The charging time is about 4 hours, and it can print about 30 meters of paper when fully charged. Mini, light weight, easy to carry. Widely used in bill printing, office receipt printing, restaurant ordering information printing, store cashier printing, etc.",
    sku: "ST00005549547",
    category: allCategories.electronics,
    tags: [
      tags.blue,
      tags.handy,
      tags.printer,
      tags.thermal,
      tags.tooth,
      tags.wireles,
    ],
    discount: 9.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>– Using thermal printing technology, printing speed is fast, printing fonts are clear, and efficiency is improved.</li>
            <li>– No ink or ribbon required, reducing costs.</li>
            <li>– Support Bluetooth or USB connection.</li>
            <li>– Compatible with iOS, Android and Windows systems.</li>
            <li>– Built-in 1500 mAh large capacity rechargeable lithium battery.</li>
            <li>– The charging time is about 4 hours, and it can print about 30 meters of paper when fully charged.</li>
            <li>– Mini, light weight, easy to carry.</li>
            <li>– Widely used in bill printing, office receipt printing, restaurant ordering information printing, store cashier printing, etc.</li>
          </ol>
          <br/>
          Specification:
          <ol>
            <li>– Color: Black</li>
            <li>– Material: Plastic</li>
            <li>– Print Method: Line Thermal Printer</li>
            <li>– Print Paper Width: 57 mm</li>
            <li>– Printing Width: 48 mm</li>
            <li>– Resolution: 8 dots / mm (203dpi)</li>
            <li>– Print Speed: 50-80mm/s</li>
            <li>– Roll Diameter: 40mm(max.)</li>
            <li>– Printing Characters: ANK: 8×16,9×17,9×24,12×24 / GBK: 24×24</li>
            <li>– Characters/Line: ANK: 48,42,32 / GBK:24,16</li>
            <li>– Life Cycle Time: 50km(printing density under 12.5%)</li>
            <li>– Barcode Type:
            UPC-A, UPC-E, EAN-13, EAN-8, Code39, Code93, Code128, Codabar, ITF25
            QR Code, PDF417</li>
            <li>– Paper Feeding: Easy Paper Loading</li>
            <li>– Paper Cut: By Hands</li>
            <li>– Built-in Lithium Battery: 1500mAh/7.4V</li>
            <li>– Charging Time: About 4 hours</li>
            <li>– Operating System: Compatible with Android, iOS, Windows</li>
            <li>– Working Temperature: -10 ℃~50℃</li>
            <li>– Working Humidity: 20%~85%</li>
            <li>– Size:7.8 * 10.5 * 4.7 cm / 3.1 * 4.1 * 1.9 in</li>
            <li>– Weight: 221 g / 7.8 oz</li>
          </ol>
          Bluetooth Pairing Instructions:
          <ol>
          <li>– Power on Printer</li>
          <li>– Primary device search for outer Bluetooth devices</li>
          <li>– If there are some outer Bluetooth devices, choose MPT-II</li>
          <li>– Enter password “0000”</li>
          <li>– Finish matching</li>
        </ol>
        Package Including:
          <ol>
          <li>– 1 * Thermal Printer</li>
          <li>– 1 * Thermal Paper Roll</li>
          <li>– 1 * USB Cable</li>
          <li>– 1 * User Manual</li>
        </ol>`,
  },
  {
    productName: "Rotatable 180 Socket Converter",
    unitPrice: 25.0,
    coverImage: "./Images/Product Images/Rotatable 180 Socket Converter.jpg",
    productImage1: "./Images/toolsImages/Rotatable 180 Socket Converter-1.jpeg",
    productImage2: "./Images/toolsImages/Rotatable 180 Socket Converter-2.jpg",

    spcifications:
      "Insert material: high quality phosphor bronze. Use: Travel / Home / Office. Features:Support 180 degree adjustment. AC125V 15A Rating Voltage and Current, US plug 1 to 3 ways power socket. Usage Scenarios. It is very convenient for family use and for UPS, vehicle power supply, power supply cabinets, lighting equipment, communications cabinets and other power devices.",
    sku: "ST00008211548",
    category: allCategories.electronics,
    tags: [tags.conventer, tags.diy, tags.socket, tags.tools, tags.tools],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Insert material: high quality phosphor bronze.</li>
              <li>Use: Travel / Home / Office.</li>
              <li>Features: Support 180 degree adjustment.</li>
              <li>AC125V 15A Rating Voltage and Current, US plug 1 to 3 ways power socket.</li>
              <li>Usage Scenarios.</li>
              <li>It is very convenient for family use and for UPS, vehicle power supply, power supply cabinets, lighting equipment, communications cabinets and other power devices.</li>
            </ol>`,
  },
  {
    productName: "Almarai Sour Cream",
    unitPrice: 19.0,
    coverImage: "./Images/Product Images/Almarai Sour Cream.jpg",
    productImage1: "./Images/groceryImages/Almarai Sour Cream-1.jpg",

    spcifications:
      "Great Tasting Sour Cream made with 100% Cow’s Milk Product of KSA",
    sku: "ST0000545156165",
    category: allCategories.grocery,
    tags: [tags.almarai, tags.fresh, tags.sour, tags.cream],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Rich & Creamy</li>
            <li>Best for all type dishes</li>
         
          </ol>`,
  },
  {
    productName: "American Garden Peanut Butter Chunky",
    unitPrice: 17.0,
    coverImage:
      "./Images/Product Images/American Garden Peanut Butter Chunky.jpg",
    productImage1:
      "./Images/groceryImages/American Garden Peanut Butter Chunky-1.jpg",
    productImage2:
      "./Images/groceryImages/American Garden Peanut Butter Chunky-2.jpg",

    spcifications:
      "At American garden, we know that every meal is different. We know that tomorrow’s family dinner calls for a different touch to last weekend’s picnic with friends. That’s why we make sure that our wide range of products is made using age-old recipes and the finest ingredients. To make it easier for you to choose from and to make sure you always have the perfect product on every occasion. Per serving of 2 tbsp 32g, calories: 180% daily value, fat: 15g 23%, sodium: 140mg 6%, carbohydrate: 8g 3%, protein: 7g, iron 4%, Daily Values are based on 2000 calorie diet",
    sku: "ST0000771875",
    category: allCategories.grocery,
    tags: [tags.american, tags.butter, tags.garden, tags.peanut],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Deliciously smooth and creamy, our peanut butter is well known for its authentic american taste and interesting varieties</li>
            <li>The particularly delicate taste of anfora olive oil leaves the flavour of foods intact, even the most delicate, either fried or cooked</li>
            <li>Sealed in a glass jar and PET shatter-resistant packaging</li>
            <li>American garden peanut butter is a great source of fiber and protein and is also available in a reduced fat option</li>
            
          </ol>`,
  },
  {
    productName: "Bragg Organic Raw Apple Cider Vinegar",
    unitPrice: 15.0,
    coverImage:
      "./Images/Product Images/Bragg Organic Raw Apple Cider Vinegar.png",
    productImage1:
      "./Images/groceryImages/Bragg Organic Raw Apple Cider Vinegar-1.jpg",

    spcifications:
      "Dr Bragg Apple Cider Vinegar is unfiltered, unheated, unpasteurized and with 5% acidity. Made from delicious, healthy, organically grown apples. Processed and bottled in accordance with USDA guidelines. Full of zesty Apple Cider Vinegar natural goodness. Non-GMO Certified. It is a wholesome way to add delicious flavor to salads, veggies, most foods, and even sprinkle over popcorn.",
    sku: "ST000082151545",
    category: allCategories.grocery,
    tags: [tags.apple, tags.bragg, tags.cider, tags.vinager],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Bragg</li>
            <li>Organic</li>
            <li>Raw</li>
            <li>Apple</li>
            <li>Vinegar</li>
            <li>Cider</li>
        
          </ol>`,
  },
  {
    productName: "Bragg Seasoning Liquid Aminos",
    unitPrice: 18.0,
    coverImage: "./Images/Product Images/Bragg Seasoning Liquid Aminos.jpg",
    productImage1: "./Images/groceryImages/Bragg Seasoning Liquid Aminos-1.jpg",

    spcifications:
      "Bragg Liquid Aminos is a Certified NON-GMO liquid protein concentrate, derived from soybeans, that contains the following Essential and Non-essential Amino Acids in naturally occurring amounts Alanine Arginine Aspartic Acid Glutamic Acid Glycine Histidine Isoleucine Leucine Methionine Phenylalanine Proline Serine Threonine Tyrosine Valine Lysine Great on Salads & Dressings, Soups, Veggies, Rice & Beans, Tofu, Wok & Stir-frys, Tempeh, Casseroles, Potatoes, Meats, Poultry, Fish, Jerky, Popcorn, Gravies & Sauces, Macrobiotics. Ingredients Our Bragg Liquid Aminos are made from health-giving, NON-GMO soybeans and purified water. They are an excellent, healthy, gourmet replacement for Tamari and Soy Sauce. Not fermented or heated and Gluten-Free. Bragg’s has a small amount of naturally occurring sodium. No table salt is added. If less sodium is desired use a 6 oz. Bragg’s spray bottle and dilute with 1/3 distilled water or to taste and then either add in or spray on food.",
    sku: "ST0000240405",
    category: allCategories.grocery,
    tags: [tags.aminos, tags.bragg, tags.liquid],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>A source of delicious, nutritious, life-renewing protein.</li>
            <li>Taste you’ll love-Nutrition you need.</li>
            <li>Great on salads, veggies, dressings, soups, rice, beans, Wok foods, tofu, gravies, jerky, poultry, fish, popcorn, meats, casseroles, potatoes and most foods.</li>
            <li>Contains important healthy amino acids</li>
         
          </ol>`,
  },
  {
    productName: "Cadbury Crunchie Spread 400g",
    unitPrice: 25.0,
    coverImage: "./Images/Product Images/Cadbury Crunchie Spread 400g.jpg",
    productImage1: "./Images/groceryImages/Cadbury Crunchie Spread 400g-1.jpg",

    spcifications:
      "Milk Chocolate Spread with Honeycomb Pieces Pack Size: 400g Suitable for vegetarians Information Ingredients: Sugar, Vegetable Oil (Rapeseed, Palm), Honeycomb Crisp (Sugar, Glucose Syrup, Invert Sugar, Sodium Bicarbonate) 10%, Milk Chocolate Crumb (Milk, Sugar, Cocoa Mass) 6%, Full Cream Milk Powder 6%, Fat Reduced Cocoa 5%, Whey Powder (Milk) (2%), Emulsifier (Sunflower Lecithin), Honeycomb Flavoring, Flavoring Allergy Information: May Contain: Nuts, Soya",
    sku: "ST0000775875215",
    category: allCategories.grocery,
    tags: [tags.cadbury, tags.chocolate, tags.crunchie, tags.spread],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Crunchie Spread</li>
            <li>Vegetarian</li>
            <li>400g</li>
           
          </ol>`,
  },
  {
    productName: "Coca Cola Slim Drink Stevia Can 320ml",
    coverImage:
      "./Images/Product Images/Coca Cola Slim Drink Stevia Can 320ml.jpg",
    productImage1:
      "./Images/groceryImages/Coca Cola Slim Drink Stevia Can 320ml-1.jpg",

    unitPrice: 5.0,
    spcifications:
      "Coca Cola Stevia is a reduced-calorie cola sweetened with cane sugar and stevia leaf extract without foregoing the classic Coca Cola taste. Coca-Cola Life has 35 percent fewer calories than other leading colas. Enjoy Coke and enjoy your life even more with Coke Stevia.",
    sku: "ST00008265454",
    category: allCategories.grocery,
    tags: [tags.coca, tags.cocacola, tags.cola, tags.stevia],
    discount: 40.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Slim Drink</li>
            <li>Stevia</li>
            <li>320ml</li>
          
          </ol>`,
  },
  {
    productName: "Frank Cooper’s Fine Cut Orange Marmalade",
    unitPrice: 48.0,
    coverImage:
      "./Images/Product Images/Frank Coopers Fine Cut Orange Marmalade.jpg",
    productImage1:
      "./Images/groceryImages/Frank Coopers Fine Cut Orange Marmalade-1.jpg",

    spcifications:
      "The full flavor of Seville oranges, made just a little sweeter. Our Fine Cut Oxford is a bright and zesty marmalade, appreciated by those who like a smoother spread.",
    sku: "ST000054654654",
    category: allCategories.grocery,
    tags: [
      tags.cooper,
      tags.cut,
      tags.fine,
      tags.frank,
      tags.marmalade,
      tags.oxford,
    ],
    discount: 33.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Frank Cooper’s Fine Cut</li>
            <li>Orange Marmalade</li>
            <li>454 Grams</li>
          
          </ol>`,
  },
  {
    productName: "Gerber Graduates Yogurt Melts Mixed Berries",
    unitPrice: 10.0,
    coverImage:
      "./Images/Product Images/Gerber Graduates Yogurt Melts Mixed Berries.jpg",
    productImage1:
      "./Images/groceryImages/Gerber Graduates Yogurt Melts Mixed Berries-1.jpg",

    spcifications:
      "As your baby grows into toddlerhood, about 25% of his calories will come from snacks. Graduates yogurt melts snacks are a great way to make every bite count.",
    sku: "ST0000339035945",
    category: allCategories.grocery,
    tags: [tags.berries, tags.melts, tags.real, tags.yogurt],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>99% real yogurt & fruit</li>
            <li>Provides vitamins A, C and E</li>
            <li>Live & active cultures</li>
            <li>Freeze-dried yogurt & fruit snack</li>
            <li>No preservatives</li>
           
          </ol>`,
  },
  {
    productName: "Guylian Chocolate Belgian Dark Chocolate No Added Sugar",
    unitPrice: 27.0,
    coverImage:
      "./Images/Product Images/Guylian Chocolate Belgian Dark Chocolate No Added Sugar.jpg",
    productImage1:
      "./Images/groceryImages/Guylian Chocolate Belgian Dark Chocolate No Added Sugar-1.jpg",

    spcifications:
      "Guylian bars guarantee you the same delicious taste as regular premium Belgian chocolate bars because they are made with Maltitol, a healthy alternative to sugar. Maltitol is a 100% natural product derived from natural cereals.",
    sku: "ST0000551123458",
    category: allCategories.grocery,
    tags: [tags.belgian, tags.chocolate, tags.dark],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Belgian Chocolates</li>
            <li>No added sugar</li>
            <li>May be suitable for diabetics or those on special diets</li>
           
          </ol>`,
  },
  {
    productName: "Jif Creamy Natural Peanut Butter Spread",
    unitPrice: 10.0,
    coverImage:
      "./Images/Product Images/Jif Creamy Natural Peanut Butter Spread.jpg",
    productImage1:
      "./Images/groceryImages/Jif Creamy Natural Peanut Butter Spread-1.jpg",

    spcifications:
      "It is natural low sodium creamy peanut butter. See nutrition information for fat and saturated fat content Low sodium! No need to stir.  Natural Fresh roasted peanut taste. Peanut butter spread contains 90% peanuts.",
    sku: "ST0000448253259",
    category: allCategories.grocery,
    tags: [tags.butter, tags.flavor, tags.jif, tags.peanut, tags.smooth],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Low Sodium</li>
            <li>No need to stir</li>
            <li>Fresh roasted peanut taste</li>
            <li>Peanut butter spread contains 90% peanuts</li>
            <li>Contains no preservatives</li>
            <li>Gluten-free</li>
            <li>Kosher</li>
          
          </ol>`,
  },
  {
    productName: "Lotus Biscoff Biscuit Spread 400 Grams",
    unitPrice: 38.0,
    coverImage:
      "./Images/Product Images/Lotus Biscoff Biscuit Spread 400 Grams.jpg",
    productImage1:
      "./Images/groceryImages/Lotus Biscoff Biscuit Spread 400 Grams-1.jpg",
    productImage2:
      "./Images/groceryImages/Lotus Biscoff Biscuit Spread 400 Grams-2.jpg",

    spcifications:
      "New Lotus Spread is a tasty alternative to peanut butter or chocolate spreads. Delicious on toast! . Lotus Spread is also suitable for those with lactose intolerance & is free from artificial colors and flavorings. Spread is a sweet creamy spread made with Biscoff cookies . Enjoy it just like a chocolate spread or peanut butter.",
    sku: "ST0000824544",
    category: allCategories.grocery,
    tags: [tags.biscoff, tags.lotus, tags.spread],
    discount: 8.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Lotus Biscoff</li>
            <li>Biscuit Spread</li>
            <li>400 Grams</li>
         
          </ol>`,
  },
  {
    productName: "Member’s Mark Crushed Red Pepper",
    unitPrice: 20.0,
    coverImage: "./Images/Product Images/Members Mark Crushed Red Pepper.jpg",
    productImage1:
      "./Images/groceryImages/Members Mark Crushed Red Pepper-1.jpg",

    spcifications:
      "Whether you’re seasoning a slice of pizza or preparing a traditional African dish, Member’s Mark Crushed Red Pepper by Tone’s will give you the fiery, invigorating taste you’re looking for.",
    sku: "ST000054878854",
    category: allCategories.grocery,
    tags: [
      tags.hot,
      tags.marks,
      tags.members,
      tags.pepper,
      tags.red,
      tags.spicy,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Crushed Red pepper</li>
            <li>All Natural</li>
            <li>Bursting With Flavor</li>
          
          </ol>`,
  },
  {
    productName: "Post Honeycomb Cereal 354g",
    unitPrice: 36.0,
    coverImage: "./Images/Product Images/Post Honeycomb Cereal 354g.jpg",
    productImage1: "./Images/groceryImages/Post Honeycomb Cereal 354g-1.jpg",
    productImage2: "./Images/groceryImages/Post Honeycomb Cereal 354g-2.jpg",

    spcifications:
      "Post honeycomb cereal is a sweetened corn and oat cereal in a unique big honeycomb shape. Its honey-sweet taste has had kids of all ages loving this cereal for almost 30 years. Post honeycomb is an excellent source of whole grain (19 grams per serving), low in fat, and cholesterol free. This is sold in pack of four 12.5-ounce boxes. The Post cereal tradition began when C.W. Post made his first batch of “Postum”, a cereal beverage, in a little white barn in Battle Creek, Michigan.",
    sku: "ST000033548752",
    category: allCategories.grocery,
    tags: [tags.cereal, tags.comb, tags.corn, tags.honey, tags.oat],
    discount: 11.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Contains whole-grain wheat and oat flour</li>
            <li>Rich in iron and Vitamin A</li>
            <li>Low in fat and 1% cholesterol free</li>
           
          </ol>`,
  },
  {
    productName: "Pringles Sour Cream & Onion Potato Crisps 158g",
    unitPrice: 15.0,
    coverImage:
      "./Images/Product Images/Pringles Sour Cream & Onion Potato Crisps 158g.jpg",
    productImage1:
      "./Images/groceryImages/Pringles Sour Cream & Onion Potato Crisps 158g-1.jpg",

    spcifications:
      "Your favorite flavor combo of yummy sour cream and zesty onion is now in your favorite potato crisp. Deliciously seasoned Sour Cream and Onion Flavored Pringles Potato Crisps are flavored from edge to edge for a craveable taste and perfect crunch. With their delicious taste and original, stackable shape, Pringles Potato Crisps always inspire good times with friends—and the convenient, portable can gives you the freedom to snack when and where you want. Grab a can for the office, pack a snack for school, bring them in the car, or share a stack with friends—however you eat them, you’ll love the fun shape and delicious taste of Sour Cream and Onion Flavored Pringles Potato Crisps.",
    sku: "ST00008254844",
    category: allCategories.grocery,
    tags: [tags.cream, tags.onion, tags.pringles, tags.sour],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Satisfy your snack craving with the irresistible taste of savory sour cream and onion flavored potato crisps; uniquely shaped and seasoned from edge to edge for a perfectly flavored bite every time</li>
            <li>Make snack time more fun with the original, stackable potato crisp; pop open a can and experience the bold flavor and satisfying crunch of Sour Cream and Onion Flavored Pringles Potato Crisps</li>
            <li>Always tasty, never greasy; a delicious and crispy way to put the wow in your snacking routine; a travel-ready food made to enjoy at home or on-the-go; no artificial flavors</li>
           
          </ol>`,
  },
  {
    productName: "SlimFast Keto Meal Replacement Bars",
    coverImage:
      "./Images/Product Images/SlimFast Keto Meal Replacement Bars.jpg",
    productImage1:
      "./Images/groceryImages/SlimFast Keto Meal Replacement Bars-1.jpg",
    productImage2:
      "./Images/groceryImages/SlimFast Keto Meal Replacement Bars-2.jpg",

    unitPrice: 40.0,
    spcifications:
      "Who knew ketogenic weight loss could be this indulgent? The SlimFast Keto Whipped Peanut Butter Chocolate Bars are part of the new SlimFast Keto Plan from the brand that’s helped millions of American’s lose weight for over 40 years. SlimFast Keto combines clinically proven SlimFast success with optimal ketogenic nutrition to help people just like you lose weight and keep it off*. It’s Keto made easy™. The SlimFast Keto Whipped Peanut Butter Chocolate Meal Replacement Bars offer optimal low-carb Ketogenic nutrition. Each bar has 14g of fat, 7g of whey protein, coconut oil MCTs, and just 3g total sugars for just 3g net carbs. Plus, it’s free from gluten, artificial sweeteners, and artificial flavors and colors. Fluffy, filling, and perfectly peanutty, SlimFast Keto Whipped Peanut Butter Chocolate Bars are a decadent way to satisfy your hunger as a Keto-compliant meal replacement. SlimFast Keto makes Keto easy. Simply enjoy one sensible Keto-friendly meal filled with healthy fats and protein, replace two meals a day with SlimFast Keto shakes or bars, and indulge in three low-carb snacks to satisfy hunger between meals. Plus, add Keto-compatible SlimFast Boosters supplements to perfectly complement your plan. Count on SlimFast Keto to help you become Keto Confident! Use delicious SlimFast Keto for the right balance of nutrients to help motivate your metabolism to burn fat instead of carbs. You’ll have the energy to tackle whatever your day throws at you. The SlimFast Keto Diet Plan offers flexibility and simplicity fit into your busy life. You’ll see results in just one week. This is Keto made easy™.",
    sku: "ST000082546548",
    category: allCategories.grocery,
    tags: [tags.bar, tags.fast, tags.keto, tags.slim],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>SlimFast</li>
            <li>Keto</li>
            <li>Meal Replacement</li>
            <li>Whipped Peanut Butter</li>
            <li>Chocolate Bars </li>
            <li>210 Grams</li>
          </ol>`,
  },
  {
    productName: "Medical and Nursing Lister Bandage Scissor",
    unitPrice: 50.0,
    coverImage:
      "./Images/Product Images/Medical and Nursing Lister Bandage Scissor.jpg",
    productImage1:
      "./Images/healthImages/Medical and Nursing Lister Bandage Scissor-1.jpg",
    productImage2:
      "./Images/healthImages/Medical and Nursing Lister Bandage Scissor-2.jpg",

    spcifications:
      "Medical and Nursing Lister Bandage Scissor-14cm Stainless Steel , Perfect for Surgeries , Medical Care and Home Nursing Color: Silver. Material: Stainless steel. High quality stainless steel with maximum endurance for durable and anti-rust use. Safe and easy to cut off with comfortable handling feeling. With a sleek stainless steel and mirror polished texture. Without mess and no strings get caught in between its blades. Great for first-aid, doctor, nurse and personal usage as well. 1 x Scissors 14cm Nursing Scissors",
    sku: "ST0000277366",
    category: allCategories.health,
    tags: [tags.bandage, tags.care, tags.medical, tags.personal, tags.scissors],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Color: Silver.</li>
            <li>Material: Stainless steel. High quality stainless steel with maximum endurance for durable and anti-rust use. Safe and easy to cut off with comfortable handling feeling.</li>
            <li>With a sleek stainless steel and mirror polished texture. Without mess and no strings get caught in between its blades.</li>
            <li>Great for first-aid, doctor, nurse and personal usage as well.1 x Scissors 14cm</li>
            
          </ol>`,
  },
  {
    productName: "Personal Tongue Coating or Scraper Cleaner",
    unitPrice: 36.0,
    coverImage:
      "./Images/Product Images/Personal Tongue Coating or Scraper Cleaner.jpg",

    productImage1:
      "./Images/healthImages/Personal Tongue Coating or Scraper Cleaner-1.jpg",
    productImage2:
      "./Images/healthImages/Personal Tongue Coating or Scraper Cleaner-2.jpg",
    productImage3:
      "./Images/healthImages/Personal Tongue Coating or Scraper Cleaner-3.png",
    productImage4:
      "./Images/healthImages/Personal Tongue Coating or Scraper Cleaner-4.jpg",
    spcifications:
      "Made from superior Grade stainless steel-Non-toxic and Sterilizable-Comfort Grip Thicker, heavy duty gauge to ensure it is smooth on the tongue-without risk of nicks Stainless steel Carved handles to ensure bacteria free surface-No synthetic coverings for Grips Flexible, non-gagging design with optimal length-enables cleaning of the entire tongue length Suitable tool for plaque removal, bad breath and to restore oral hygiene or taste sensation",
    sku: "ST00008216951789",
    category: allCategories.health,
    tags: [tags.breath, tags.cleaner, tags.fresh, tags.personal, tags.tongue],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Made from superior Grade stainless steel-Non-toxic and Sterilizable-Comfort Grip</li>
            <li>Thicker, heavy duty gauge to ensure it is smooth on the tongue-without risk of nicks</li>
            <li>Stainless steel Carved handles to ensure bacteria free surface-No synthetic coverings for Grips</li>
            <li>Flexible, non-gagging design with optimal length-enables cleaning of the entire tongue length</li>
            <li>Suitable tool for plaque removal, bad breath and to restore oral hygiene or taste sensation</li>
          
          </ol>`,
  },
  {
    productName: "Real Doctors Plus Posture Support BELT",
    unitPrice: 120.0,
    coverImage:
      "./Images/Product Images/Real Doctors Plus Posture Support BELT.jpg",
    productImage1:
      "./Images/healthImages/Real Doctors Plus Posture Support BELT-1.jpg",
    productImage2:
      "./Images/healthImages/Real Doctors Plus Posture Support BELT-2.jpg",
    productImage3:
      "./Images/healthImages/Real Doctors Plus Posture Support BELT-3.jpg",
    productImage4:
      "./Images/healthImages/Real Doctors Plus Posture Support BELT-4.jpg",
    productImage5:
      "./Images/healthImages/Real Doctors Plus Posture Support BELT-5.jpg",
    spcifications:
      "Relieves back, neck, and spine ache Improves body shape in short time Unisex design Support the back, shoulders, and the spine Improves the body shape Gets rid of muscular aches Ultra­­-thin, comfortable design Breathable material Durable stitching offers Extra long-lasting comfort and back-up 100% safe and medically approved support to get rid of muscular aches Completely undetectable under clothes",
    sku: "ST000033956448",
    category: allCategories.health,
    tags: [tags.corrector, tags.doctor, tags.plus, tags.posture, tags.real],
    discount: 8.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Relieves back, neck, and spine ache</li>
            <li>Improves body shape in short time</li>
            <li>Unisex design</li>
            <li>Support the back, shoulders, and the spine</li>
            <li>Improves the body shape</li>
            <li>Gets rid of muscular aches</li>
            <li>Ultra­­-thin, comfortable design</li>
            <li>Breathable material</li>
            <li>Durable stitching offers</li>
            <li>Extra long-lasting comfort and back-up</li>
            <li>100% safe and medically approved support to get rid of muscular aches</li>
            <li>Completely undetectable under clothes</li>
          </ol>
          <br/>
          Specification:
          <ol>
            <li>1. Support and warmth to relieve pain. Say goodbye to aching back pain and slouching shoulders.2. The Unisex Adjustable Magnetic Posture Correction Neoprene back support is the most recommended brace in the market by Doctors and Physiotherapists.3.Designed by back experts, this brace aims to provide both stability and flexibility to the users by improving…Max Length(adjustable): better posture! Remembering to sit and stand up straight isn’t easy-until now. This bad posture corrector helps you undo years of slouching and rounding your upper back, and retrains your natural posture with minimum restriction of movement. Super comfy padding and lightweight design make it easy to wear at home, work, in the car, at the gym… wherever you want! Retrains your posture-naturally Thick straps are super-padded for comfortable all-day wear-no chafing, rubbing or pinching Easy to use-slips on and off like a backpack Heavy-duty stitching won’t rip or tear under tension Fits discreetly under work uniforms, scrubs, medium-weight shirts Phthalate, latex, lead BPA free</li>
            <li>After a thorough search of the modern market, we have placed ourselves as the leading organization and offering the world-class collection of Kitchen Utilities , Home Utilities , Health & Personal Care Products, Fitness Products, Gifting Items, Outdoor , Back Packs , Kids Bag , School Bags , Travelling Bag, Cleaning Products, Massager and Folding Wardrobe. Established in the year 2011, Vivek Trading has carved a niche as a Wholesale Trader. Our entire gamut is acclaimed by our clients because of impeccable finish, latest designs and most reasonable prices. Since establishment, we have been carrying business under some specific principles such as maintaining total professionalism, timely delivery of consignments, and to look ahead to adopt newer ways to diversify the business.We are very grateful to our mentor “Mr. Vivek” who always guides us to perform our duties with full enthusiasm and commitment. Our complete workforce is indebted for his motivation and we sincerely wish to work with him for a very long time.</li>
            <li>We want our customers to be satisfied with every purchase. If you are in any way not satisfied with the product you ordered, we will replace it . Please contact us about your problem and we’ll take care of it</li>
            <li>Top quality materials for your ultimate comfort: our posture correction brace is made of top-quality breathable and light neoprene. No latex the soft materials provide comfort for prolonged everyday usage. And it provides solid compression to your back and waist allowing to feel comfortable and protected. The correction brace will hold your back straight, your back muscles will gradually feel more relaxed and less tired due to less muscle strain and stiffness</li>
          </ol>
          `,
  },
  {
    productName: "Stainless Steel Nail Clippers, 360 Degree Rotating Head",
    unitPrice: 37.99,
    coverImage:
      "./Images/Product Images/Stainless Steel Nail Clippers, 360 Degree Rotating Head.jpg",
    productImage1:
      "./Images/healthImages/Stainless Steel Nail Clippers, 360 Degree Rotating Head-1.jpg",
    productImage2:
      "./Images/healthImages/Stainless Steel Nail Clippers, 360 Degree Rotating Head-2.jpg",

    spcifications:
      "High-quality stainless steel materials, strong edges, durable. Bolting, 360 degree smooth rotation. Quick, easily shape your nails. Make your nails beautiful and clean.Perfect and handy nail cutter for your daily life.Suitable for all groups Type:Nail Clipper Material:Stainless steel Dimensions: A: 9.8×1.5cm,B: 7.8×1.1cm Actual color may be slightly different from the image due to different monitor and light effect Please allow 1-3cm deviation due to manual measurement 1x Nail Clipper",
    sku: "ST000035454886",
    category: allCategories.health,
    tags: [tags.degrees, tags.clipper, tags.nail, tags.rotating],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>High-quality stainless steel materials, strong edges, durable.</li>
            <li>Bolting, 360 degree smooth rotation.</li>
            <li>Quick, easily shape your nails. Make your nails beautiful and clean.Perfect and handy nail cutter for your daily life.</li>
            <li>Suitable for all groups</li>
            <li>Type:Nail Clipper</li>
            <li>Material:Stainless steel</li>
            <li>Dimensions: A: 9.8×1.5cm,B: 7.8×1.1cm</li>
            <li>Actual color may be slightly different from the image due to different monitor and light effect</li>
            <li>Please allow 1-3cm deviation due to manual measurement</li>
            <li>1x Nail Clipper</li>
          </ol>`,
  },
  {
    productName: "Toe Bunion Splint Straightener",
    unitPrice: 35.0,
    coverImage: "./Images/Product Images/Toe Bunion Splint Straightener.jpg",
    productImage1: "./Images/healthImages/Toe Bunion Splint Straightener-1.jpg",
    productImage2: "./Images/healthImages/Toe Bunion Splint Straightener-2.jpg",
    productImage3: "./Images/healthImages/Toe Bunion Splint Straightener-3.jpg",

    spcifications:
      "This is UPDATED version, more functional and flexible The splint is a resting splint, for both day and night time use It applies a 3-point pressure system to relieve the hallux valgus deformity flexible It helps to adjust the big toe to prevent valgus Comfortably bend in the bone and toe The double-layer tape foot central arch state stable Fill the hinge clips to protect the organization to protect pain, relieve stress Adjustable in bone pad to ease the pressure of the toe joint, and to maximize the scattered pressure It is extremely comfortable to wear and is adjustable to ensure maximum user comfort and support Arch support design to relief forefoot stress One fits left or right toeColor: White Size : 13.2*3CM",
    sku: "ST00007565465211",
    category: allCategories.health,
    tags: [tags.bunion, tags.foot, tags.pain, tags.splint],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>This is UPDATED version, more functional and flexible</li>
            <li>The splint is a resting splint, for both day and night time use</li>
            <li>It applies a 3-point pressure system to relieve the hallux valgus deformity flexible</li>
            <li>It helps to adjust the big toe to prevent valgus</li>
            <li>Comfortably bend in the bone and toe</li>
            <li>The double-layer tape foot central arch state stable</li>
            <li>Fill the hinge clips to protect the organization to protect pain, relieve stress</li>
            <li>Adjustable in bone pad to ease the pressure of the toe joint, and to maximize the scattered pressure</li>
            <li>It is extremely comfortable to wear and is adjustable to ensure maximum user comfort and support</li>
            <li>Arch support design to relief forefoot stress</li>
            <li>One fits left or right toeColor: White</li>
            <li>Size : 13.2*3CM</li>
          </ol>`,
  },
  {
    productName: "12 Pcs Measuring Spoons",
    unitPrice: 18.0,
    coverImage: "./Images/Product Images/12 Pcs Measuring Spoons.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/12 Pcs Measuring Spoons-1.png",
    productImage2:
      "./Images/homeAndKitchenImages/12 Pcs Measuring Spoons-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/12 Pcs Measuring Spoons-3.jpg",

    spcifications:
      "【Precise Scale & Volume】Measuring spoon handles are engraved with visible standard metric units to ensure that you are using the correct measurements. Comes with 12 different sizes of cups to satisfy your daily needs. 1 cup(236ml), 1/2 cup(118ml), 1/3 cup(78ml), 1/4 cup(59ml), 1 tbsp( 15ml), 1/2 tbsp(7.5ml), 1 tsp(5ml), 1/2 tsp(2.5ml) 【Food-Grade Material】The head of the measuring spoon is made of durable and BPA-free material, the handle is made of 2CR15 stainless steel, which is guarantee long life with no rusting or bending for wet and dry ingredients 【Easy to Carry & Store】Lightweight measuring cups and spoons set can be nested into each other and fixed together with easy to open and close stainless steel rings to ensure hassle-free organization and storage 【Easy to Clean】Measuring cups are resistant to odors and stains. It can be quickly cleaned in the dishwasher or rinsed with water. The measuring spoon is dishwasher safe",
    sku: "ST000052473618",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.kitchen,
      tags.measuring,
      tags.multi,
      tags.safe,
      tags.spoon,
      tags.tool,
    ],
    discount: 44.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>【Precise Scale & Volume】Measuring spoon handles are engraved with visible standard metric units to ensure that you are using the correct measurements. Comes with 12 different sizes of cups to satisfy your daily needs. 1 cup(236ml), 1/2 cup(118ml), 1/3 cup(78ml), 1/4 cup(59ml), 1 tbsp( 15ml), 1/2 tbsp(7.5ml), 1 tsp(5ml), 1/2 tsp(2.5ml)</li>
            <li>【Food-Grade Material】The head of the measuring spoon is made of durable and BPA-free material, the handle is made of 2CR15 stainless steel, which is guarantee long life with no rusting or bending for wet and dry ingredients</li>
            <li>【Easy to Carry & Store】Lightweight measuring cups and spoons set can be nested into each other and fixed together with easy to open and close stainless steel rings to ensure hassle-free organization and storage</li>
            <li>【Easy to Clean】Measuring cups are resistant to odors and stains. It can be quickly cleaned in the dishwasher or rinsed with water. The measuring spoon is dishwasher safe</li>
           
          </ol>`,
  },
  {
    productName: "Chef Basket 12 In 1",
    coverImage: "./Images/Product Images/Chef Basket 12 In 1.jpg",
    productImage1: "./Images/homeAndKitchenImages/Chef Basket 12 In 1-1.jpg",
    productImage2: "./Images/homeAndKitchenImages/Chef Basket 12 In 1-2.jpg",
    productImage3: "./Images/homeAndKitchenImages/Chef Basket 12 In 1-3.jpg",
    productImage4: "./Images/homeAndKitchenImages/Chef Basket 12 In 1-4.jpg",
    productImage5: "./Images/homeAndKitchenImages/Chef Basket 12 In 1-5.jpg",
    unitPrice: 50.0,
    spcifications:
      "100% Brand New and High qualityCondition: 100% Brand New12 in 1 purposeCollapsible collanderLift, flip, expand, collapseRinsing, washing, draining, strainingStoring, cooking, boiling, deep fryingMaterial: Stainless SteelMaximum Temperature: 100Color: SilverPackage Dimension: 240*240*30mm/9.4*9.4*1.18”Weight: about 260g",
    sku: "ST0000548787441",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.basket,
      tags.chef,
      tags.heat,
      tags.kitchen,
      tags.multi,
      tags.resistant,
      tags.safe,
      tags.tools,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>100% Brand New and High qualityCondition: 100% Brand New12 in 1 purposeCollapsible collanderLift, flip, expand, collapseRinsing, washing, draining, strainingStoring, cooking, boiling, deep frying</li>
            <li>Material: Stainless SteelMaximum </li>
            <li>Temperature: 100</li>
            <li>Color: Silver</li>
            <li>Package Dimension: 240*240*30mm/9.4*9.4*1.18”</li>
            <li>Weight: about 260g</li>
           
          </ol>`,
  },
  {
    productName: "Egg Separator",
    coverImage: "./Images/Product Images/Egg Separator.jpg",
    productImage1: "./Images/homeAndKitchenImages/Egg Separator-1.jpg",
    productImage2: "./Images/homeAndKitchenImages/Egg Separator-2.jpg",
    productImage3: "./Images/homeAndKitchenImages/Egg Separator-3.jpg",
    productImage4: "./Images/homeAndKitchenImages/Egg Separator-4.jpg",
    productImage5: "./Images/homeAndKitchenImages/Egg Separator-5.jpg",
    unitPrice: 18.0,
    spcifications:
      "Brand new and high quality. Use this egg tool to make your baking and cooking more accessible and quickly. Size: 13cm x 6cm-2.12inch x 2.36inch Material: PP, Eco friendly, and high quality (Pass Food Grade Test) Adopts and imports the resin of force of food, Help you to separate the egg white from your egg easily Easy to use, safe and clear, necessary tool and good assistant for kitchen. Quality plastic egg separator with a beautiful profile and easy to clean. Please keep washed after using.",
    sku: "ST00007758750354",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.egg,
      tags.home,
      tags.kitchen,
      tags.safe,
      tags.separator,
      tags.yolk,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Brand new and high quality.</li>
            <li>Use this egg tool to make your baking and cooking more accessible and quickly.</li>
            <li>Size: 13cm x 6cm-2.12inch x 2.36inch</li>
            <li>Material: PP, Eco friendly, and high quality (Pass Food Grade Test)</li>
            <li>Adopts and imports the resin of force of food, Help you to separate the egg white from your egg easily</li>
            <li>Easy to use, safe and clear, necessary tool and good assistant for kitchen.</li>
            <li>Quality plastic egg separator with a beautiful profile and easy to clean.</li>
            <li>Please keep washed after using.</li>
          </ol>`,
  },
  {
    productName: "Garlic Ginger Grinding Tool",
    unitPrice: 20.0,
    coverImage: "./Images/Product Images/Garlic Ginger Grinding Tool.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Garlic Ginger Grinding Tool-1.jpg",
    productImage2:
      "./Images/homeAndKitchenImages/Garlic Ginger Grinding Tool-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Garlic Ginger Grinding Tool-3.jpg",
    productImage4:
      "./Images/homeAndKitchenImages/Garlic Ginger Grinding Tool-4.jpg",
    productImage5:
      "./Images/homeAndKitchenImages/Garlic Ginger Grinding Tool-5.jpg",
    spcifications:
      "Multifunction Plastic Stainless Steel Garlic Chopper & Grinding Kitchen Hand Tool Kitchen gadgets This is a garlic grater with a removable hands-protecting cover. The cover can be installed to protect your hands Best for grinding or planning small things like garlic and removed to plane bigger things. Mini size Removable cover to protect your hands Multifunctional Garlic Ginger Grinding Tool Ginger Garlic Chopper/ Ginger Garlic Paste Chopper Mini Garlic Ginger Grinding Tool Manual Garlic Chopper Manual hand Onion and Garlic chopper Garlic Chopper Crusher Garlic and Ginger chopper Garlic Chopper / Garlic Mini Chopper Hand Press Grinding Crusher Chopper Kitchen Gadget",
    sku: "ST0000765464",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.garlic,
      tags.ginger,
      tags.grater,
      tags.kitchen,
      tags.multi,
      tags.safe,
      tags.tools,
      tags.slicer,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Multifunction Plastic Stainless Steel Garlic Chopper & Grinding Kitchen Hand Tool</li>
            <li>Kitchen gadgets</li>
            <li>This is a garlic grater with a removable hands-protecting cover.</li>
            <li>The cover can be installed to protect your hands</li>
            <li>Best for grinding or planning small things like garlic and removed to plane bigger things.</li>
            <li>Mini size</li>
            <li>Removable cover to protect your hands</li>
            <li>Multifunctional</li>
          </ol> `,
  },
  {
    productName: "Manual Chopper",
    unitPrice: 70.0,
    coverImage: "./Images/Product Images/Manual Chopper.jpg",
    productImage1: "./Images/homeAndKitchenImages/Manual Chopper-1.jpg",
    productImage2: "./Images/homeAndKitchenImages/Manual Chopper-2.jpg",

    spcifications:
      "Chopping vegetables during peak hours or especially in the morning time can be time-consuming and tedious. This fast vegetable shredder will help you shred vegetables, fruits and herbs. You can also use it for making dipping sauce and chutney. Not only can chopped vegetables and fruits, but also can be used as a mincer and meat grinder to cut boneless meat and cheese. Here you can quickly make chopped salads and chutneys. This fast and efficient vegetable cutter can cut anything within a few minutes. It facilitates quick chopping, shredding and whipping.",
    sku: "ST00007758656",
    category: allCategories.homeAndKitchen,
    tags: [tags.chopper, tags.home, tags.kitchen, tags.manual, tags.safe],
    discount: 7.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Mini Speedy Chopper/Shredder</li>
            <li>Vegetable and Fruit Cutter Mixer/Blender</li>
            <li>Ginger Garlic Cutter Kitchen Tool</li>
            <li>Material Body : ABS Plastic</li>
            <li>Blades : Stainless Steel</li>
            <li>Type : Manual Hand-pull</li>
            <li>No. of Blades : 3</li>
            <li>Ultra Sharp Blades</li>
            <li>High Speed</li>
            <li>Long Life</li>
            <li>Safe and Reliable</li>
            <li>Best for : Vegetables and Meat</li>
            <li>Nylon Pulling Cord</li>
            <li>Main Functions Chopping</li>
            <li>Slicing</li>
            <li>Mincing</li>
            <li>Mixing</li>
            <li>Grinding</li>
            <li>Blending</li>
            <li>Shredding</li>
            <li>Cutting</li>
            <li>Easy to Clean After Use</li>
            <li>Best for Home Use and Travelling</li>
          </ol>`,
  },
  {
    productName: "Multifunctional Crinkle Fries Knife",
    unitPrice: 14.0,
    coverImage:
      "./Images/Product Images/Multifunctional Crinkle Fries Knife.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Multifunctional Crinkle Fries Knife-1.png",
    productImage2:
      "./Images/homeAndKitchenImages/Multifunctional Crinkle Fries Knife-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Multifunctional Crinkle Fries Knife-3.jpg",
    productImage4:
      "./Images/homeAndKitchenImages/Multifunctional Crinkle Fries Knife-4.jpg",
    productImage5:
      "./Images/homeAndKitchenImages/Multifunctional Crinkle Fries Knife-5.jpg",
    spcifications:
      "High quality multifunctional fries cutter is convenient, safe and easy to use kitchen tool. It provides a fun wavy shape to vegetables and fruits. High-quality stainless steel blade and easy-to-grip plastic handle is excellent in durability and make it possible to cut hard food materials easily. With this knife add excitement to your salads, veggies, and French fries. It’s safe and comfortable to use and one can carry it anytime and anywhere. This crinkle fries cutter can also be used in DIY like cutting soap etc and it is great for giving salad a professional look and decorating food also.",
    sku: "ST0000775646545",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.crinkle,
      tags.fries,
      tags.knife,
      tags.safe,
      tags.slice,
      tags.tools,
      tags.tool,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Multifunctional crinkle fries cutter is sharp enough to cut potato, cucumber, and any other vegetables or fruits into a fun wavy shape.</li>
            <li>This crinkle fires cutter Saves time during the food preparation.</li>
            <li>High-quality stainless steel kitchen tool blade, easy-to-grip plastic handle is excellent in durability and make it possible to cut hard food materials easily.</li>
            <li>Very convenient for professional hand-made potato chips at home.</li>
            <li>The back of the knife is round to prevent hand injuries during use.</li>
            <li>It is easy to use and clean.</li>
            <li>It is easy to store, wavy crinkle cutting tool Light weight is convenient, can be used anywhere and anytime,</li>
            <li>The crinkle cutter can also be used for DIY crafts also</li>
          </ol>`,
  },
  {
    productName: "Nicer Dicer Vegetable chopper",
    unitPrice: 100.0,
    coverImage: "./Images/Product Images/Nicer Dicer Vegetable chopper.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Nicer Dicer Vegetable chopper-1.jpg",
    productImage2:
      "./Images/homeAndKitchenImages/Nicer Dicer Vegetable chopper-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Nicer Dicer Vegetable chopper-3.jpg",

    spcifications:
      "Dishwasher safe Easy to store and clean Safe operation Stainless Steel Blades Plastic construction Cutting insert with an integrated pin grid Cutting Base Transparent receptacle (1500ml capacity) Cling-lid containers for collecting Blade insert (6mm x 6mm or 12mm x 12mm) Blade insert (6mm x 36mm or 18mm x 18mm) Knife for quarters or eighths use Plug cutter for stamp eighths Partial coverage for all blade inserts Professional peeler Product holder with guide",
    sku: "ST0000825165151",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.cutter,
      tags.cutting,
      tags.home,
      tags.kitchen,
      tags.multi,
      tags.safe,
      tags.slicer,
      tags.tools,
      tags.tool,
    ],
    discount: 15.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Dishwasher safe</li>
            <li>Easy to store and clean</li>
            <li>Safe operation</li>
            <li>Stainless Steel Blades</li>
            <li>Plastic construction</li>
         
          </ol>
          <br/>
          Accessories:
          <ol>
            <li>Cutting insert with an integrated pin grid</li>
            <li>Cutting Base</li>
            <li>Transparent receptacle (1500ml capacity)</li>
            <li>Cling-lid containers for collecting</li>
            <li>Blade insert (6mm x 6mm or 12mm x 12mm)</li>
            <li>Blade insert (6mm x 36mm or 18mm x 18mm)</li>
            <li>Knife for quarters or eighths use</li>
            <li>Plug cutter for stamp eighths</li>
            <li>Partial coverage for all blade inserts</li>
            <li>Professional peeler</li>
            <li>Product holder with guide</li>
          </ol>
          `,
  },
  {
    productName: "Stainless Steel Pusher/Potato Masher",
    unitPrice: 20.0,
    coverImage:
      "./Images/Product Images/Stainless Steel Pusher Potato Masher.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Stainless Steel Pusher Potato Masher-1.jpg",
    productImage2:
      "./Images/homeAndKitchenImages/Stainless Steel Pusher Potato Masher-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Stainless Steel Pusher Potato Masher-3.jpg",
    productImage4:
      "./Images/homeAndKitchenImages/Stainless Steel Pusher Potato Masher-4.jpg",

    spcifications:
      "Made of healthy materials, safe to use, a good helper for the kitchen. Has good corrosion resistance, safe and non-toxic, high hardness. Comfortable handle, long design, good grip and even force. The bottom leakage holes are evenly distributed and the operation is smooth. Simple and beautiful, comfortable and generous, healthy and durable. Easy to operate, fast and convenient, saving time and effort. Material:Stainless Steel plastic Masher suitable for:Potato, garlic, fruit, vegetable Size:26×8.2cm",
    sku: "ST00008245448",
    category: allCategories.homeAndKitchen,
    tags: [tags.kitchen, tags.masher, tags.potato, tags.safe],
    discount: 10.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>100% brand new and high quality.</li>
            <li>High-quality stainless steel material, no deformation, durable.</li>
            <li>The best cooking tools for making different dishes and desserts, such as mesh potatoes, apple pie, pumpkin pie, etc.</li>
            <li>Stainless steel mesh, easy to use and clean.</li>
            <li>Easy to mash potatoes, fruits, vegetables and salads.</li>
          </ol>
          <br/>
          Specification:
          <ol>
            <li>Material:Stainless Steel plastic</li>
            <li>Masher suitable for:Potato, garlic, fruit, vegetable</li>
            <li>Size:26×8.2cm</li>
          </ol>
          `,
  },
  {
    productName: "Scoop Colander Strainer Spoon",
    unitPrice: 25.0,
    coverImage: "./Images/Product Images/Scoop Colander Strainer Spoon.jpeg",
    productImage1:
      "./Images/homeAndKitchenImages/Scoop Colander Strainer Spoon-1.jpg",
    productImage2:
      "./Images/homeAndKitchenImages/Scoop Colander Strainer Spoon-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Scoop Colander Strainer Spoon-3.jpg",
    productImage4:
      "./Images/homeAndKitchenImages/Scoop Colander Strainer Spoon-4.jpg",
    productImage5:
      "./Images/homeAndKitchenImages/Scoop Colander Strainer Spoon-5.jpg",
    spcifications:
      "Scoop colander strainer drain spoon is a very simple kitchen gadget that allows you to collect, drain and serve food straight from a hot skillet or baking sheet. It’s a wonderful strainer for taking cooked food directly from the stove onto your plate and use in your canning kitchen to save your hands from being burned while scooping out tomatoes from boiling water, also great for pasta, and you can dip it into the pot and take out the noodles one scoop at a time. These are large and are just cool to use and make quick work of whatever you whimsy far better than large cooking spoons. Works perfectly as a quick strainer too. Easy to clean up and non-stick. Multi Usage",
    sku: "ST0000372548",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.bottle,
      tags.home,
      tags.kitchen,
      tags.multi,
      tags.oil,
      tags.resistant,
      tags.safe,
      tags.tool,
      tags.tools,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Product: Colander Spoon-Strainer Scoop.</li>
            <li>Model: Strainer/Drain Spoon.</li>
            <li>Material: Toughened Nylon.</li>
            <li>Colour: Black, Red, Green and Yellow.</li>
            <li>Size: Standard.</li>
            <li>Usage: Perfect Drain Spoon for Rice, Noddle/Pasta, Vegetable, Beans, & Fruit. Great for Strain Food Straight from the Oven or Out of the Pan.</li>
            <li>Feature: 100% Brand New and High Quality, Practical and Convenient to Use. Good Kitchen Helper, Heat-Resistance Temperature: Up to 200°C/392°F, Easy Draining, Comfortable, and Durable.</li>
            <li>Item Weight: 50g</li>
            <li>Dimensions: Size: Approx. 34 cm x 7.5 cm (L*W).</li>
            <li>What’s in the Box: 1x Colander Spoon-Strainer Scoop.</li>
            <li>Note: Please allow 1-2cm Error due to Manual Measurement, and the Colours may be Different as Displayed in the Pictures.</li>
          </ol>`,
  },
  {
    productName: "Self Adhesive Aluminum Foil Sheet Sticker for Kitchen",
    unitPrice: 70.0,
    coverImage:
      "./Images/Product Images/Self Adhesive Aluminum Foil Sheet Sticker for Kitchen.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Self Adhesive Aluminum Foil Sheet Sticker for Kitchen-1.jpg",
    productImage2:
      "./Images/homeAndKitchenImages/Self Adhesive Aluminum Foil Sheet Sticker for Kitchen-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Self Adhesive Aluminum Foil Sheet Sticker for Kitchen-3.jpg",
    productImage4:
      "./Images/homeAndKitchenImages/Self Adhesive Aluminum Foil Sheet Sticker for Kitchen-4.jpg",

    spcifications:
      "Self Adhesive: These Aluminum Foil Sheets have a removable back sticker which has cut-to-fit grid lines for easy measurement and placement, easy for you to create new looks of your kitchen and home or repairing the appearance of any existing smooth surfaces. Easy to Apply: These Aluminum Foil Sheets have grid lines behind the wallpaper for you to scissor accurately. Removable, no glue residue. Durable and Beautiful: These Aluminum Foil Sticker are eco-friendly, anti-friction, waterproof, oil-proof, protect your furniture from corrosion and damp. The Aluminum Foil Sticker are easy to clean. Cover stains. The Aluminum Foil Sticker Rolls decorate and renovate old metallic furniture, make your house look more upscale. A Must Have in Your Kitchen: These Aluminum Foil Stickers are a Must-have For Cleaner, Healthier Kitchen, these foil stickers prevent oil and sauce splashes from causing persistent stains on your kitchen walls! Save your drawers & shelves from dust and protect your electrical appliances from moisture by applying these adhesive foil sheets! It is a Multipurpose Aluminum Backsplash Foil Stickers made to keep your kitchen equipment spotless! Top Notch Quality for Home and Kitchen: This Aluminum Foil Sheet is 40cm width x 1m length per sheet Self Adhesive Kitchen Aluminum Foil Sheet Wallpaper made from anti-dust, heat & moisture-resistant Aluminum Foil & plastic, way more resistant than standard PVC. Backsplashes. Sturdy and long-lasting, it will remain tightly put and removed in no time when you no longer need the Aluminum Foil Sheets.",
    sku: "ST00007245185",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.adhesive,
      tags.clean,
      tags.foil,
      tags.kitchen,
      tags.multi,
      tags.safe,
    ],
    discount: 9.0,
    descriptionAsHTML: `
      How to use:
          <ol>
            <li>Clean the surface where Adhesive Kitchen Foil Sheet will be pasted, make sure there is nothing on the surface and it is clean.</li>
            <li>Measure the size of the coverage. Cut the paper into right size, it’s better to leave about 2-5cm extra for the Adhesive Kitchen Foil Sheet.</li>
            <li>Peel off the backing paper evenly while moving the Adhesive Kitchen Foil Sheet to the surface.</li>
            <li>Paste the Adhesive Kitchen Foil Sheet gently and slide it form middle to edge</li>
            <li>Paste the Adhesive Kitchen Foil Sheet on edge and heat it with hair dryer</li>
            <li>Cut off excess Adhesive Kitchen Foil Sheet at last.</li>
            
          </ol> `,
  },
  {
    productName: "Silicone Heat Resistant Gloves Clips",
    unitPrice: 22.0,
    coverImage:
      "./Images/Product Images/Silicone Heat Resistant Gloves Clips.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Silicone Heat Resistant Gloves Clips-1.jpg",
    productImage2:
      "./Images/homeAndKitchenImages/Silicone Heat Resistant Gloves Clips-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Silicone Heat Resistant Gloves Clips-3.jpg",
    productImage4:
      "./Images/homeAndKitchenImages/Silicone Heat Resistant Gloves Clips-4.jpg",
    productImage5:
      "./Images/homeAndKitchenImages/Silicone Heat Resistant Gloves Clips-5.jpg",
    spcifications:
      "Made of stainless steel.Anti-rust, scratch, and smash, long-lasting durability for long time use. This Spice, Herb, Tea, and Seasoning Filter Ball ball is designed with egg shape, small and exquisite, saving space. Very convenient for seeping tea and coffee. It is also with a Sturdy Hook to attach to your Favorite Cup or mug. Simply throw it in the Dishwasher for a Quick & Easy Clean up. Food grade material.Stainless steel, very safe and healthy for daily use. Buy this awesome Product Online at the Best prices in Pakistan. The product is original and it’s a top-selling product with a very reasonable and low price in the market in Pakistan. We hope you will love and enjoy this product and it will be very useful for you. It will improve your daily life. Thank you to being our customer, we are very glad to see you here. Don’t forget to follow our shop. Happy Shopping!!!",
    sku: "ST00008268443",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.gloves,
      tags.heat,
      tags.kitchen,
      tags.multi,
      tags.protection,
      tags.resistant,
      tags.safe,
      tags.silicon,
      tags.tool,
    ],
    discount: 9.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>100% brand new and high quality.</li>
            <li>Made of food grade silicone, non-toxic, healthy and environmental protection.</li>
            <li>Good flexibility and soft touching feeling, comfortable to use.</li>
            <li>Anti-skid design, not easy to slid off when holding hot pot etc.</li>
            <li>With good heat resistant performance, protect your hands while handling hot pots, pans, dishes, casserole dishes and more.</li>
            <li>One-piece design, without gaps and dead ends, easy to clean, not easy to breed bacteria.</li>
            <li>With a hanging hole, can be hung on wall to save space when not use</li>
            
          </ol>`,
  },
  {
    productName: "Spice,Herb,Tea and Seasoning Filter Ball",
    coverImage:
      "./Images/Product Images/Spice,Herb,Tea and Seasoning Filter Ball.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Spice,Herb,Tea and Seasoning Filter Ball-1.jpg",
    productImage2:
      "./Images/homeAndKitchenImages/Spice,Herb,Tea and Seasoning Filter Ball-2.jpg",
    productImage3:
      "./Images/homeAndKitchenImages/Spice,Herb,Tea and Seasoning Filter Ball-3.jpg",
    productImage4:
      "./Images/homeAndKitchenImages/Spice,Herb,Tea and Seasoning Filter Ball-4.jpg",
    productImage5:
      "./Images/homeAndKitchenImages/Spice,Herb,Tea and Seasoning Filter Ball-5.jpg",
    unitPrice: 10.0,
    spcifications:
      "Made of stainless steel.Anti-rust, scratch, and smash, long-lasting durability for long time use. This Spice, Herb, Tea, and Seasoning Filter Ball ball is designed with egg shape, small and exquisite, saving space. Very convenient for seeping tea and coffee. It is also with a Sturdy Hook to attach to your Favorite Cup or mug. Simply throw it in the Dishwasher for a Quick & Easy Clean up. Food grade material.Stainless steel, very safe and healthy for daily use. Buy this awesome Product Online at the Best prices in Pakistan. The product is original and it’s a top-selling product with a very reasonable and low price in the market in Pakistan. We hope you will love and enjoy this product and it will be very useful for you. It will improve your daily life. Thank you to being our customer, we are very glad to see you here. Don’t forget to follow our shop. Happy Shopping!!!",
    sku: "ST000082169574",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.ball,
      tags.herb,
      tags.kitchen,
      tags.multi,
      tags.safe,
      tags.tea,
      tags.tool,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>❤Made of stainless steel</li>
            <li>❤Anti-rust, scratch, and smash, long-lasting durability for long time use.</li>
            <li>❤This Spice, Herb, Tea, and Seasoning Filter Ball ball is designed with egg shape, small and exquisite, saving space.</li>
            <li>❤Very convenient for seeping tea and coffee.</li>
            <li>❤It is also with a Sturdy Hook to attach to your Favorite Cup or mug.</li>
            <li>❤Simply throw it in the Dishwasher for Quick & Easy Clean up.</li>
            <li>❤Food grade material</li>
            <li>❤Stainless steel, very safe and healthy for daily use.</li>
            <li>❤Good Quality and Durable</li>
          </ol>`,
  },
  {
    productName: "Stainless Steel Cookie Cutter Set",
    unitPrice: 15.0,
    coverImage: "./Images/Product Images/Stainless Steel Cookie Cutter Set.jpg",
    productImage1:
      "./Images/homeAndKitchenImages/Stainless Steel Cookie Cutter Set-1.jpg",

    spcifications:
      "A perfect quality and look to satisfy even the pickiest jewelry fans.100% brand new and high quality stainless steel item, non-fading, non-deformable, allergy free. Last longer than any other jewelry. Present it as an ideal gift for birthday, graduation, party, wedding, anniversary, Christmas, Valentine’s or Hallowmas. Our Service: As a professional jewelry supplier, hour sweety pay high attention to selecting high quality Jewelry. Each of them has a unique meaning. Ship quickly, arrive safely, beautiful appearance, current styles. Positive feedback and your satisfaction is our goal. If you have any questions with our products or services, please feel free to contact us first. We would like to try our best to solve it for you all the time.",
    sku: "ST0000652185",
    category: allCategories.homeAndKitchen,
    tags: [
      tags.blade,
      tags.cookie,
      tags.cutter,
      tags.diy,
      tags.snap,
      tags.tool,
      tags.tools,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Main Material: Stainless Steel; Main color: silver color;</li>
            <li>Height: 1.5 cm (5/8 “)</li>
            <li>Contains: 5-flower, 5-five-pointed Star, 5-heart, 5-round</li>
            <li>To make bread / Mousses cake / Cookies / Biscuits / Chocolate / Jelly / Jello Dessert use DIY with your kids.</li>
          </ol>`,
  },
  {
    productName: "4 Tier Heavy Duty Metal Desktop Letter Tray",
    unitPrice: 435.0,
    coverImage:
      "./Images/Product Images/4 Tier Heavy Duty Metal Desktop Letter Tray.jpg",
    productImage1:
      "./Images/officeSuppliesImages/4 Tier Heavy Duty Metal Desktop Letter Tray-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/4 Tier Heavy Duty Metal Desktop Letter Tray-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/4 Tier Heavy Duty Metal Desktop Letter Tray-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/4 Tier Heavy Duty Metal Desktop Letter Tray-4.jpg",
    productImage5:
      "./Images/officeSuppliesImages/4 Tier Heavy Duty Metal Desktop Letter Tray-5.jpg",
    spcifications:
      "Office 4 Tier Heavy Duty Metal Desktop Letter Tray File Organizer Sorter Desk Document Organizer Shelf Tray Magazine Holder Paper File Newspaper Organizer Tray-Black",
    sku: "ST0000339",
    category: allCategories.officeSupplies,
    tags: [tags.four, tags.mesh, tags.metal, tags.rack],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Office 4 Tier Heavy Duty Metal Desktop Letter Tray File Organizer Sorter Desk Document Organizer Shelf Tray Magazine Holder Paper File Newspaper Organizer Tray-Black</li>
         
          </ol> `,
  },
  {
    productName: "9 x 4 / 9 x 4.5 Size Envelope",
    unitPrice: 10.0,
    coverImage: "./Images/Product Images/Envelope.jpg",
    productImage1: "./Images/officeSuppliesImages/Envelope-1.jpg",
    productImage2: "./Images/officeSuppliesImages/Envelope-2.jpg",
    productImage3: "./Images/officeSuppliesImages/Envelope-3.jpg",

    spcifications:
      "Brown / Khakee Colour Envelop Affordable Economical High Quality Good for for safe keeping Document Good for Mailing Purpose Good for Cheque / Postage 100 Pcs",
    sku: "ST000065484/8754",
    category: allCategories.officeSupplies,
    tags: [tags.brown, tags.envelop, tags.mail, tags.paper, tags.post],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Brown / Khakee Colour Envelop</li>
            <li>Affordable</li>
            <li>Economical</li>
            <li>High Quality</li>
            <li>Good for for safe keeping Document</li>
            <li>Good for Mailing Purpose</li>
            <li>Good for Cheque / Postage</li>
            <li>100 Pcs</li>
          </ol>`,
  },
  {
    productName: "Criterion Office Chair",
    coverImage: "./Images/Product Images/Criterion Office Chair.jpg",
    productImage1: "./Images/officeSuppliesImages/Criterion Office Chair-1.jpg",
    productImage2: "./Images/officeSuppliesImages/Criterion Office Chair-2.jpg",
    productImage3: "./Images/officeSuppliesImages/Criterion Office Chair-3.jpg",
    productImage4: "./Images/officeSuppliesImages/Criterion Office Chair-4.jpg",

    unitPrice: 400.0,
    spcifications:
      "Ergonomic Design:Adjustable lumbar support hugs your lower back and enhances the natural curve of your spine. Breathable Materials: The modern computer desk chair made with breathable high density strength mesh back and seat, which allows air to circulate, PP-fiber armrest, mesh headrest more comfortable Stable and long lasting:This High Back Executive Mesh Office Computer Chair with Headrest in Black has a strong metal base that offers maximum support and stability to the structure. Apapted also for tall people:The adjustable height and the High-Back supports provide an optimum level of comfort for all type of people with 330 Lbs max weight capacity. Ridiculously Easy Install:The instructions are very easy to follow, you just need to count a few screws and bolts, you can assemble it.Product Dimensions:(LxWxH) 18.9×19.7×35.7 to 38 inches.",
    sku: "ST00008215665",
    category: allCategories.officeSupplies,
    tags: [tags.breathable, tags.chair, tags.comfort, tags.mesh, tags.style],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Ergonomic Design:Adjustable lumbar support hugs your lower back and enhances the natural curve of your spine.</li>
            <li>Breathable Materials: The modern computer desk chair made with breathable high density strength mesh back and seat, which allows air to circulate, PP-fiber armrest, mesh headrest more comfortable</li>
            <li>Stable and long lasting:This High Back Executive Mesh Office Computer Chair with Headrest in Black has a strong metal base that offers maximum support and stability to the structure.</li>
            <li>Apapted also for tall people:The adjustable height and the High-Back supports provide an optimum level of comfort for all type of people with 330 Lbs max weight capacity.</li>
            <li>Ridiculously Easy Install:The instructions are very easy to follow, you just need to count a few screws and bolts, you can assemble it.Product Dimensions:(LxWxH) 18.9×19.7×35.7 to 38 inches.</li>
         
          </ol>`,
  },
  {
    productName: "Colour Paper A4 Size 100 Sheets",
    coverImage: "./Images/Product Images/Colour Paper A4 Size 100 Sheets.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Colour Paper A4 Size 100 Sheets-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Colour Paper A4 Size 100 Sheets-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Colour Paper A4 Size 100 Sheets-3.jpg",

    unitPrice: 30.0,
    spcifications:
      "Pack of 100 sheets Color Paper Premium quality 70-80 gram Multicolor A4 size printer paper 10 Different Colors Each colour having 10 sheets Best for school projects",
    sku: "ST0000854588589",
    category: allCategories.officeSupplies,
    tags: [
      tags.color,
      tags.colour,
      tags.office,
      tags.paper,
      tags.printer,
      tags.supplies,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Pack of 100 sheets Color Paper</li>
            <li>Premium quality</li>
            <li>70-80 gram</li>
            <li>Multicolor</li>
            <li>A4 size printer paper</li>
            <li>10 Different Colors</li>
            <li>Each colour having 10 sheets</li>
            <li>Best for school projects</li>
          </ol>`,
  },
  {
    productName: "Heavy Duty Metal 3 Tier story Desktop Document Letter Tray",
    coverImage:
      "./Images/Product Images/Heavy Duty Metal 3 Tier story Desktop Document Letter Tray.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Heavy Duty Metal 3 Tier story Desktop Document Letter Tray-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Heavy Duty Metal 3 Tier story Desktop Document Letter Tray-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Heavy Duty Metal 3 Tier story Desktop Document Letter Tray-3.jpg",

    unitPrice: 450.0,
    spcifications:
      "ASSEMBLES IN 5 MINUTES: Our black desk tray organizer is so easy to put together that even a child could do it! Our customers love simple assembly which saves them time. All it takes is three simple steps and you are ready to go. 3 tier desktop organization rack made of black metal. Excellent for sorting mail, magazines, files, and more to keep the desktop clean and free of clutter. 33% MORE SPACE THAN THE COMPETITION WITH 4 SLIDING TRAYS : Our modern metal mesh rack offers 33% more space than other school and office organizers. This gives you more storage space for your home, kitchen or Office to store accessories & supplies. Why buy more than one rack when you can have 3 drawers in the same price. AUTOMATIC TRAYS STOPS, KEEPS FILES IN PLACE: (Enough GAP BETWEEN TRAYS) Our mail holder stops automatically at the back and prevents trays to slide out which helps to keep the files in place. This makes your life easier and organized. The drawer tiers won’t fall off even when you lift the organizer to move from one room to another room. The holder is easier to load due to its sliding, which are spaced quite apart. There are even rubber feet on the bottom to protect your desktop. STRONG PLACE HEAVY ITEMS WITH NO PROBLEMS : Our paper sorting and storage rack has plenty of room for your documents and folders and is crafted out of metal, not plastic, to hold more weight. You can place heavy large reams of paper in the inbox and outbox trays without worry. SUITABLE FOR HOME & OFFICE USE : The desk paper organizer is designed to accommodate A4-size folders, papers, files, and other letter-size paper products. Rubber feet can avoid desktop being scratched. So this drawer organizer tray for papers will be a perfect match for any home or office environment.",
    sku: "ST0000339155557",
    category: allCategories.officeSupplies,
    tags: [
      tags.handy,
      tags.office,
      tags.rack,
      tags.saver,
      tags.space,
      tags.stylish,
    ],
    discount: 9.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Premium Quality</li>
            <li>Metal material file rack/tray</li>
            <li>Well design</li>
            <li>Modern style with classic black finish</li>
            <li>Solid structure</li>
            <li>Sturdy and long lasting</li>
            <li>Daurable</li>
            <li>Economical</li>
            <li>Reliable</li>
            <li>Good for daily Use</li>
          </ol> `,
  },
  {
    productName: "Magazine Rack",
    unitPrice: 70.0,
    coverImage: "./Images/Product Images/Magazine Rack.jpg",
    productImage1: "./Images/officeSuppliesImages/Magazine Rack-1.jpg",
    productImage2: "./Images/officeSuppliesImages/Magazine Rack-2.jpg",
    productImage3: "./Images/officeSuppliesImages/Magazine Rack-3.jpg",

    spcifications:
      "Magazine Rack, Heavy Duty Newspapers Holder Magazine Letters Storage Files Folder Stand 9 Slot Desktop Organiser Book Shelf Vintage Design Metal Home Office (Black)",
    sku: "ST0000272803",
    category: allCategories.officeSupplies,
    tags: [tags.holder, tags.metal, tags.office],
    discount: 3.0,
    descriptionAsHTML: `
      Specification:
          <ol>
            <li>length:10.23cm”</li>
            <li>width:7.08 cm”</li>
            <li>height: 7.08 cm”</li>
            <li>9 Slot Organizer</li>
            
          </ol>`,
  },
  {
    productName: "Manual Paper Shredder (Strip Cut) - Transparent",
    unitPrice: 275.0,
    coverImage:
      "./Images/Product Images/Manual Paper Shredder (Strip Cut) -Transparent.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Manual Paper Shredder (Strip Cut) - Transparent-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Manual Paper Shredder (Strip Cut) - Transparent-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Manual Paper Shredder (Strip Cut) - Transparent-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/Manual Paper Shredder (Strip Cut) - Transparent-4.jpg",

    spcifications:
      "Mini and compact size design. Width of paper inlet: 123mm. Dimension after shredded: 3mm(strip) Easy and convenient to use. Suitable for office, school or family use. Operates by hand and simple turn of the rotating handle. Shreds paper into thin strips of 3 mm width which collect in the shredder box. Washable and portable to use. Made of 100% durable ABS plastic. It is fit for long-term use.",
    sku: "ST00009216529",
    category: allCategories.officeSupplies,
    tags: [
      tags.document,
      tags.office,
      tags.paper,
      tags.protection,
      tags.shredder,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Mini and compact size design.</li>
            <li>Width of paper inlet: 123mm.</li>
            <li>Dimension after shredded: 3mm(strip)</li>
            <li>Easy and convenient to use.</li>
            <li>Suitable for office, school or family use.</li>
            <li>Operates by hand and simple turn of the rotating handle.</li>
            <li>Shreds paper into thin strips of 3 mm width which collect in the shredder box.</li>
            <li>Washable and portable to use.</li>
            <li>Made of 100% durable ABS plastic.</li>
            <li>It is fit for long-term use.</li>
          </ol>`,
  },
  {
    productName: "Metal Mesh Business Card Holder",
    coverImage: "./Images/Product Images/Metal Mesh Business Card Holder.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Metal Mesh Business Card Holder-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Metal Mesh Business Card Holder-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Metal Mesh Business Card Holder-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/Metal Mesh Business Card Holder-4.jpg",

    unitPrice: 50.0,
    spcifications:
      "With a elegant industrial look, it is a cool way to display business cards on your desktop. Made of durable and sturdy metal, it’s not easy to deform, wear-resistant and easy to clean. The raised design of the base prevents water from wetting the business card. Store a variety of business cards, make the office desktop clean and tidy to improve office efficiency. Perfect for your cards to put and classify, meeting all your organizing needs at work or at home.",
    sku: "ST000084554418",
    category: allCategories.officeSupplies,
    tags: [tags.card, tags.desk, tags.holder, tags.mesh, tags.metal],
    discount: 44.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Elegant industrial look</li>
            <li>Cool way to display business cards on your desktop.</li>
            <li>Made of durable and sturdy metal</li>
            <li>Cannot be easily deformed</li>
            <li>Wear-resistant</li>
            <li>Easy to clean</li>
            <li>Raised design prevents cards from getting wet</li>
            <li>Store a variety of business cards</li>
            <li>Make the office desktop clean and tidy</li>
            <li>Improve office efficiency</li>
            <li>Perfect for your cards for keeping and classifying them</li>
            <li>Meeting all your organizing needs at work or at home.</li>
          </ol> `,
  },
  {
    productName: "Metal Mesh Pen Container Round",
    coverImage: "./Images/Product Images/Metal Mesh Pen Container Round.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Metal Mesh Pen Container Round-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Metal Mesh Pen Container Round-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Metal Mesh Pen Container Round-3.jpg",

    unitPrice: 29.0,
    spcifications:
      "Premium Quality Metal material Well design Modern style with classic black finish Solid structure Sturdy and long lasting Daurable Economical Reliable Good for daily Use This Metal pen holder is great to keep your supplies organized on your desk or in a drawer. This metal organizer is tall enough to hold plenty of pens, pencils,high lighters, white board markers, stick glue, scissors or rulers. You can also keep your make brush, combc clip, etc. Keep your desktop clean & tidy. The pen holder is made of high quality metal material which is solid, anti-rust, lightweight and not easily deformable. Size: 3.2*3.2*3.7in/7.9*7.9*9.3cm (H*W*L) for each container Ideal for home, school, Shop and office use. Perfect for organizing any desk, counter, dresser, or tabletop anywhere.",
    sku: "ST00004848466",
    category: allCategories.officeSupplies,
    tags: [tags.holder, tags.mesh, tags.metal, tags.pencil, tags.pen],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Premium Quality</li>
            <li>Metal material</li>
            <li>Well design</li>
            <li>Modern style with classic black finish</li>
            <li>Solid structure</li>
            <li>Sturdy and long lasting</li>
            <li>Durable</li>
            <li>Economical</li>
            <li>Reliable</li>
            <li>Good for daily Use</li>
            <li>Size: 3.2*3.2*3.7in/7.9*7.9*9.3cm (H*W*L) for each container</li>
            <li>Keep your desktop clean & tidy.</li>
            <li>You can also keep your make brush, comb clip, etc.</li>
          </ol>`,
  },
  {
    productName: "Pelikan 4001 Fountain Pen Ink 62.5 Ml Royal Blue",
    coverImage:
      "./Images/Product Images/Pelikan 4001 Fountain Pen Ink 62.5 Ml Royal Blue.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Pelikan 4001 Fountain Pen Ink 62.5 Ml Royal Blue-1.jpg",

    unitPrice: 30.0,
    spcifications:
      "Ink formula developed over 125 years ago protects both fountain pen and nib Bold color ink produces clear line definition with an even flow For pelikan fountain pens and many other brands Made in Germany 62.5 ml of ink",
    sku: "ST0000244548",
    category: allCategories.officeSupplies,
    tags: [tags.blue, tags.ink, tags.pelikan],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Ink formula developed over 125 years ago protects both fountain pen and nib</li>
            <li>Bold color ink produces clear line definition with an even flow</li>
            <li>For pelikan fountain pens and many other brands</li>
            <li>62.5 ml of ink</li>
            <li>Made in Germany</li>
          </ol>`,
  },
  {
    productName: "Portable 58mm Bluetooth Thermal Receipt Printer",
    unitPrice: 550.0,
    coverImage:
      "./Images/Product Images/Portable 58mm Bluetooth Thermal Receipt Printer.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-4.jpg",
    productImage5:
      "./Images/officeSuppliesImages/Portable 58mm Bluetooth Thermal Receipt Printer-5.jpg",
    spcifications:
      "Using thermal printing technology, printing speed is fast, printing fonts are clear, and efficiency is improved. No ink or ribbon required, reducing costs. Support Bluetooth or USB connection. Compatible with iOS, Android and Windows systems. Built-in 1500 mAh large capacity rechargeable lithium battery. The charging time is about 4 hours, and it can print about 30 meters of paper when fully charged. Mini, light weight, easy to carry. Widely used in bill printing, office receipt printing, restaurant ordering information printing, store cashier printing, etc.",
    sku: "ST00005549547",
    category: allCategories.officeSupplies,

    tags: [
      tags.blue,
      tags.handy,
      tags.printer,
      tags.thermal,
      tags.tooth,
      tags.wireles,
    ],
    discount: 9.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>– Using thermal printing technology, printing speed is fast, printing fonts are clear, and efficiency is improved.</li>
            <li>– No ink or ribbon required, reducing costs.</li>
            <li>– Support Bluetooth or USB connection.</li>
            <li>– Compatible with iOS, Android and Windows systems.</li>
            <li>– Built-in 1500 mAh large capacity rechargeable lithium battery.</li>
            <li>– The charging time is about 4 hours, and it can print about 30 meters of paper when fully charged.</li>
            <li>– Mini, light weight, easy to carry.</li>
            <li>– Widely used in bill printing, office receipt printing, restaurant ordering information printing, store cashier printing, etc.</li>
          </ol>
          <br/>
          Specification:
          <ol>
            <li>– Color: Black</li>
            <li>– Material: Plastic</li>
            <li>– Print Method: Line Thermal Printer</li>
            <li>– Print Paper Width: 57 mm</li>
            <li>– Printing Width: 48 mm</li>
            <li>– Resolution: 8 dots / mm (203dpi)</li>
            <li>– Print Speed: 50-80mm/s</li>
            <li>– Roll Diameter: 40mm(max.)</li>
            <li>– Printing Characters: ANK: 8×16,9×17,9×24,12×24 / GBK: 24×24</li>
            <li>– Characters/Line: ANK: 48,42,32 / GBK:24,16</li>
            <li>– Life Cycle Time: 50km(printing density under 12.5%)</li>
            <li>– Barcode Type:
            UPC-A, UPC-E, EAN-13, EAN-8, Code39, Code93, Code128, Codabar, ITF25
            QR Code, PDF417</li>
            <li>– Paper Feeding: Easy Paper Loading</li>
            <li>– Paper Cut: By Hands</li>
            <li>– Built-in Lithium Battery: 1500mAh/7.4V</li>
            <li>– Charging Time: About 4 hours</li>
            <li>– Operating System: Compatible with Android, iOS, Windows</li>
            <li>– Working Temperature: -10 ℃~50℃</li>
            <li>– Working Humidity: 20%~85%</li>
            <li>– Size:7.8 * 10.5 * 4.7 cm / 3.1 * 4.1 * 1.9 in</li>
            <li>– Weight: 221 g / 7.8 oz</li>
          </ol>
          Bluetooth Pairing Instructions:
          <ol>
          <li>– Power on Printer</li>
          <li>– Primary device search for outer Bluetooth devices</li>
          <li>– If there are some outer Bluetooth devices, choose MPT-II</li>
          <li>– Enter password “0000”</li>
          <li>– Finish matching</li>
        </ol>
        Package Including:
          <ol>
          <li>– 1 * Thermal Printer</li>
          <li>– 1 * Thermal Paper Roll</li>
          <li>– 1 * USB Cable</li>
          <li>– 1 * User Manual</li>
        </ol>`,
  },
  {
    productName: "Professional Sketch and Drawing pencils set",
    unitPrice: 74.0,
    coverImage:
      "./Images/Product Images/Professional Sketch and Drawing pencils set.png",
    productImage1:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/Professional Sketch and Drawing pencils set-4.jpg",

    spcifications:
      "INCLUDES 12 GRAPHITE PENCILS:8B，7B,6B,5B,4B,3B,2B,B,HB,F,H,2H. HIGH QUALITY:Made of high quality wood and graphite,Make sure to use for a longer period of time is not easily damaged,Drawing the best works. FOR EVERYONE:For Beginners,Professional artists,Students and office workers,are the best choice,Suitable for all Paintings,Artistic creations,Drawings,Classroom,Work,Writing,You will love them. CUSTOMIZED IRON BOX:Hard iron box for protecting your painting tools,At the same time easy to carry and store. SATISFACTION GUARANTEE:If you are not satisfied with our products, you are welcome to simply return it to us for a full refund at any time. Metal box",
    sku: "ST00003484845",
    category: allCategories.officeSupplies,
    tags: [tags.office, tags.pencil, tags.sketch],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>INCLUDES 12 GRAPHITE PENCILS:8B，7B,6B,5B,4B,3B,2B,B,HB,F,H,2H.</li>
            <li>HIGH QUALITY:Made of high quality wood and graphite,Make sure to use for a longer period of time is not easily damaged,Drawing the best works.</li>
            <li>FOR EVERYONE:For Beginners,Professional artists,Students and office workers,are the best choice,Suitable for all Paintings,Artistic creations,Drawings,Classroom,Work,Writing,You will love them.</li>
            <li>CUSTOMIZED IRON BOX:Hard iron box for protecting your painting tools,At the same time easy to carry and store.</li>
            <li>SATISFACTION GUARANTEE:If you are not satisfied with our products, you are welcome to simply return it to us for a full refund at any time.</li>
            <li>Metal box</li>
       
          </ol>`,
  },
  {
    productName: "Rubber Air Blower Dust Cleaner Pump",
    unitPrice: 65.0,
    coverImage:
      "./Images/Product Images/Rubber Air Blower Dust Cleaner Pump.jpg",
    productImage1:
      "./Images/officeSuppliesImages/Rubber Air Blower Dust Cleaner Pump-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/Rubber Air Blower Dust Cleaner Pump-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/Rubber Air Blower Dust Cleaner Pump-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/Rubber Air Blower Dust Cleaner Pump-4.jpg",
    productImage5:
      "./Images/officeSuppliesImages/Rubber Air Blower Dust Cleaner Pump-5.jpg",
    spcifications:
      "1.Dust cleaner is easier to control, and more precise than canned air  2.It is perfect to remove dust from sensitive areas such as camera lens, mobile phone, watch or keyboard, etc  3.Good way to clean dust from sensitive areas without physical contact  4.Rubber material, environmentally friendly and non-toxic",
    sku: "ST00006574987",
    category: allCategories.officeSupplies,
    tags: [tags.blower, tags.dust, tags.handy, tags.manual, tags.tools],
    discount: 8.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Dust cleaner is easier to control, and more precise than canned air</li>
            <li>It is perfect to remove dust from sensitive areas such as camera lens, mobile phone, watch or keyboard, etc</li>
            <li>Good way to clean dust from sensitive areas without physical contact</li>
            <li>Rubber material, environmentally friendly and non-toxic</li>
          </ol>
          <br/>
          Specification:
          <ol>
            <li> Color: Black</li>
            <li> Material: Rubber</li>
            <li> Height: 9.5cm</li>
            <li> Width: 4.5cm</li>
            <li>Package included:  1 x Air Blower Dust Cleaner</li>
          </ol>
          `,
  },
  {
    productName:
      "SHINY S-68 Dater Rubber Stamp With Paid Message And Signature Place",
    coverImage:
      "./Images/Product Images/SHINY S-68 Dater Rubber Stamp With Paid Message And Signature Place.jpg",
    productImage1:
      "./Images/officeSuppliesImages/SHINY S-68 Dater Rubber Stamp With Paid Message And Signature Place-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/SHINY S-68 Dater Rubber Stamp With Paid Message And Signature Place-2.jpg",
    productImage3:
      "./Images/officeSuppliesImages/SHINY S-68 Dater Rubber Stamp With Paid Message And Signature Place-3.jpg",
    productImage4:
      "./Images/officeSuppliesImages/SHINY S-68 Dater Rubber Stamp With Paid Message And Signature Place-4.jpg",

    unitPrice: 120.0,
    spcifications:
      "SHINY S-68 Dater Rubber Stamp With “Paid” Message And Signature PlaceProduct information Technical DetailsManufacturer Shiny Brand Shiny Model Number S-68  Colour Black, Shape Rectangular Material Plastic Ink Colour Blue Manufacturer Part Number S-68 Manufacturer Shiny Country of Origin Taiwan",
    sku: "ST000023158651",
    category: allCategories.officeSupplies,
    tags: [
      tags.date,
      tags.office,
      tags.paid,
      tags.receipt,
      tags.signature,
      tags.stamp,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Manufacturer Shiny</li>
            <li>Brand Shiny</li>
            <li>Model Number S-68</li>
            <li>Colour Black</li>
            <li>Shape Rectangular</li>
            <li>Material Plastic</li>
            <li>Ink Colour Blue</li>
            <li>Manufacturer Part Number S-68</li>
            <li>Manufacturer Shiny</li>
            <li>Country of Origin Taiwan</li>
          </ol>`,
  },
  {
    productName: "WBM Sticky Notes-100 Sheets",
    coverImage: "./Images/Product Images/WBM Sticky Notes-100 Sheets.jpg",
    productImage1:
      "./Images/officeSuppliesImages/WBM Sticky Notes-100 Sheets-1.jpg",
    productImage2:
      "./Images/officeSuppliesImages/WBM Sticky Notes-100 Sheets-2.jpg",

    unitPrice: 12.0,
    spcifications:
      "sticky notes can be used for bookmarks in school and office. A set of 4 blocks of sticky bookmarks in various colors. It is also available in the best color combinations. Each block contains 25 sticky bookmarks. You can be used as a bookmark, classifying, and indexing. Available in a unique and beautiful design. It is easy and convenient to use. Widely used in file folders and removable notes. We can say that these are cute sticky notes with a unique design.",
    sku: "ST0000548541",
    category: allCategories.officeSupplies,
    tags: [tags.iit, tags.notes, tags.post, tags.reminder, tags.sticky],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Self-adhesive paper</li>
            <li>File management notes</li>
            <li>Smooth writing, no adhesive surface</li>
            <li>Bookmarks for school cliff notes or office notes</li>
            <li>Easy to use</li>
          </ol>`,
  },
  {
    productName: "Cut Resistant Gloves",
    unitPrice: 34.0,
    coverImage: "./Images/Product Images/Cut Resistant Gloves.jpg",
    productImage1: "./Images/toolsImages/Cut Resistant Gloves-1.jpg",
    productImage2: "./Images/toolsImages/Cut Resistant Glove2.jpg",
    productImage3: "./Images/toolsImages/Cut Resistant Glove-4.jpg",
    productImage4: "./Images/toolsImages/Cut Resistant Gloves-5.jpg",

    spcifications:
      "The cuts gloves is 4x stronger than leather,Lightweight and comfortable protection-awarded with the highest,certified highest EN388 level 5 cut resistance, they are food safe cut resistant gloves,Effective protection of outdoor workers’ hand cuts. Durability with high performance cut resistant gloves provide maximum protection for your hands from cutting and scratching-4 times stronger than leather Superior grip with a snug fit for small and large hands-prepare food or work on jobs requiring precision with complete dexterity. High-end knit materials(material made from ultra-high molecular weight polyethylene, fiberglass ) specially manufactured for stretch recovery, maximum flexibility and superior manual dexterity. Prevent cuts, nicks and slices with superior protection from mandoline slicers, peelers, graters, and kitchen, carpentry and other types of knives and blades,Use in the house, in the garden, in the garage and at work plus many other occassion. 100% food safe and machine washable-taking care of your cut gloves clean is easy.",
    sku: "ST000054856445",
    category: allCategories.patioLawnAndGarden,

    tags: [tags.cut, tags.diy, tags.gloves, tags.tool],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>EN388 level 5 cut resistance protect your hand from cuts and abrasions.</li>
              <li>Breathable, highly elastic, lightweight, excellent comfort and dexterity to wear and grip.</li>
              <li>Easy to sanitize and keep clean.</li>
              <li>Perfect for slicing.</li>
            </ol>`,
  },
  {
    productName: "Dancing Cactus",
    coverImage: "./Images/Product Images/Dancing Cactus.jpg",
    productImage1: "./Images/ToyImages/Dancing Cactus-1.jpg",
    productImage2: "./Images/ToyImages/Dancing Cactus-2.jpg",
    productImage3: "./Images/ToyImages/Dancing Cactus-3.jpg",
    productImage4: "./Images/ToyImages/Dancing Cactus-4.jpg",
    productImage5: "./Images/ToyImages/Dancing Cactus-5.jpg",
    unitPrice: 50.0,
    spcifications:
      "This cactus dancing toy has a durable material and a very cute appearance design, which is very suitable for desktop decoration.Specifications:Filling material: PP cottonPlush classification: short plushIs it multifunctional: yesSize: 32cmType:Type 1: Three English songs on the battery versionType 2: 120 Chinese songs on the battery versionType 3: 120 Chinese songs on the rechargeable versionType 4: 120 Chinese songs on the rechargeable version plus learners’ talk (optional)Package Included:1 pc* Cactus Dancing ToyNotes:1. Please allow 0-1 inch error due to manual measurement. Thanks for your understanding.2. Monitors are not calibrated same, item color displayed in photos may be showing slightly different from real object",
    sku: "ST000082165454",
    category: allCategories.patioLawnAndGarden,

    tags: [tags.cactus, tags.dancing, tags.fun, tags.toys],
    discount: 15.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>🌵Rechargeable And Cell Operated ( Both Variations available) , Select correct variation</li>
              <li>🌵 Update Dancing cactus plush toy: This toy comes with many different songs, mimicking, repeating and much more lovely and funny options.</li>
              <li>🌵 High-quality Material: This Dancing Cactus Toy uses non-toxic and harmless soft plush fabric, the fabric is comfortable and will not cause any harm, and children can play with confidence. The bottom of the rechargeable cactus toy is plastic, so it can stand firmly on the table.</li>
              <li>🌵 Artistic Design: cactus plant toy is designed with a cute cactus shape, and its unique creative design looks great. The Variant may play low number of song</li>
              <li>🌵Properties: Cactus Plush Toy is small in size and light in weight, very convenient to carry around.</li>
              <li>🌵Children perfect Partner: This rechargeable dancing cactus talking, will sway and sing cheerful songs, the best birthday/Christmas gift for children, friends and family.</li>
            </ol>`,
  },
  {
    productName: "Kinetic Sand",
    coverImage: "./Images/Product Images/Kinetic Sand.jpg",
    productImage1: "./Images/ToyImages/Kinetic Sand-1.jpg",
    productImage2: "./Images/ToyImages/Kinetic Sand-2.jpg",

    unitPrice: 30.0,
    spcifications:
      "Hours of Fun & Creative Play Kinetic Sand is the squishable, squeezable, stretchable play sand that mimics the feel of wet beach sand. Unleash your imagination to slice, shape, and sculpt anything from sandcastles to skyscrapers, abstract forms to animal figures… and everything in between! Build. Re-shape. Repeat. Press, pack, and pull Kinetic Sand all day, every day—it never dries out! Mix and mold it, construct and carve it then start all over again to make something new. Kids ages 3 to 103 will love this squishy, absurdly addictive magical play sand! Mess-free Fun Let the mesmerizing, molten-like sensory sand flow through your hands! The super-tactile Kinetic Sand sticks only to itself—not to you, your clothes, or other materials—making cleanup a breeze. Kinetic Sand is the ultimate in mess-free fun! Safe and Non-Toxic Formula Kinetic Sand is safe for everyone! Composed of 98% natural sand and 2% polymer wax, it’s 100% non-toxic and gluten free, and specially designed for kids ages 3 and up. Get Kinetic Sand today and start creating an endless array of shapes and figures!",
    sku: "ST0000554564",
    category: allCategories.patioLawnAndGarden,
    tags: [tags.fun, tags.joy, tags.kinetic, tags.mold, tags.sand, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                Features:
                <ol>
                  <li>KINETIC SAND IS MOLDABLE: Sticks only to itself and not to you or your clothes, and doesn’t dry out, when molding, slicing and shaping it, leaving it shapeable for years. Now offering refill packages for even more creative fun. It’s the “wet” squeezable sand where you can FEEL the fun!</li>
                  <li>STIMULATE KIDS CREATIVE SKILLS: Kinetic sand is an educational and sensory toy kit, where kids can make just what they wish! Pack it, pull it, shape it, cut it, mold it and love it! This mold-able play sand is so incredible you can’t put it down.</li>
                  <li>MULTIPLE COLOR FOR MULTIPLE FUN: This pack comes with multiple color to fit multiple themes and model. Never dries out for hours of creative play.</li>
                  <li>SOLO OR GROUP FUN: Make hours of fun with your little ones or keep them busy for hours playing with the soft, and colorful playsand together with their friends. This refill pack comes with multiple vibrant color to fit multiple themes and model. Never dries out for hours of creative play for them to build.</li>
                  <li>RELAXING AND CALMING: This sand is a way to relax and de-stress for all ages. No matter how you play with it, whether molding it, cutting it, of letting it flow through your fingers, it is a great way to relax and can be used as a fidget toy.</li>
                </ol>`,
  },
  {
    productName: "16 Inch Bird Cage Feeder Cup",
    unitPrice: 30.0,
    coverImage: "./Images/Product Images/16 Inch Bird Cage Feeder Cup.jpg",
    productImage1: "./Images/petSuppliesImg/16 Inch Bird Cage Feeder Cup-1.jpg",
    productImage2: "./Images/petSuppliesImg/16 Inch Bird Cage Feeder Cup-2.jpg",
    productImage3: "./Images/petSuppliesImg/16 Inch Bird Cage Feeder Cup-3.jpg",
    productImage4: "./Images/petSuppliesImg/16 Inch Bird Cage Feeder Cup-4.jpg",
    productImage5: "./Images/petSuppliesImg/16 Inch Bird Cage Feeder Cup-5.jpg",
    spcifications:
      "Sturdy Spill reducing design. With dividing grill to ensure each bird can eat side by side without being bothered too much by his or her neighbour. Prevents Chickens From Climbing On Top and Pooping in Their Food. Perfect for up to 6 hens or other poultry. Colour: Blue Material: plastic Stainless Steel Wire size: 40*10*8.8cm",
    sku: "ST0000547484",
    category: allCategories.petSupplies,
    tags: [tags.anti, tags.bird, tags.feeder, tags.spill],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Sturdy</li>
            <li>Spill reducing design.</li>
            <li>With dividing grill to ensure each bird can eat side by side without being bothered too much by his or her neighbour.</li>
            <li>Prevents Chickens From Climbing On Top and Pooping in Their Food.</li>
          </ol>`,
  },
  {
    productName:
      "Cat Bowl with Stand for Cat Dog Raised Non-Slip Neck Guard Pet Eating Food Bowl",
    coverImage:
      "./Images/Product Images/Cat Bowl with Stand for Cat Dog Raised Non-Slip Neck Guard Pet Eating Food Bowl.jpg",
    productImage1:
      "./Images/petSuppliesImg/Cat Bowl with Stand for Cat Dog Raised Non-Slip Neck Guard Pet Eating Food Bowl-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Cat Bowl with Stand for Cat Dog Raised Non-Slip Neck Guard Pet Eating Food Bowl-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Cat Bowl with Stand for Cat Dog Raised Non-Slip Neck Guard Pet Eating Food Bowl-3.jpg",

    unitPrice: 75.0,
    spcifications:
      "The 15-degree inclined elevated bowl can reduce the neck pressure of your cat/puppy when eating food. The material is environmentally friendly, the bowl is round and smooth, does not stick to the bowl, and has no dead ends. Just clean it with a rag or sponge, then rinse with water and air dry. PET plastic material, safe and harmless, high hardness, less fragile than ceramic cat bowls. Triangular stable design, anti-overturning. More convenient for multiple purposes: it can hold cat food, drinking water, canned cats, etc.colour: yellow  Material: plastic  Size: 14.5cm diameter Package Contents:  1 x pet bowl",
    sku: "ST0000821554",
    category: allCategories.petSupplies,
    tags: [tags.angle, tags.bowl, tags.cat, tags.dog, tags.feeder],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>The 15-degree inclined elevated bowl can reduce the neck pressure of your cat/puppy when eating food.</li>
            <li>The material is environmentally friendly, the bowl is round and smooth, does not stick to the bowl, and has no dead ends. Just clean it with a rag or sponge, then rinse with water and air dry.</li>
            <li>PET plastic material, safe and harmless, high hardness, less fragile than ceramic cat bowls.</li>
            <li>Triangular stable design, anti-overturning.</li>
          
          </ol>`,
  },
  {
    productName:
      "Collar Protective Neck Pet Wound Healing Collar Anti-Bite Ring Recovery Scratping Cover",
    coverImage:
      "./Images/Product Images/Collar Protective Neck Pet Wound Healing Collar Anti-Bite Ring Recovery Scratping Cover.jpg",
    productImage1:
      "./Images/petSuppliesImg/Collar Protective Neck Pet Wound Healing Collar Anti-Bite Ring Recovery Scratping Cover-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Collar Protective Neck Pet Wound Healing Collar Anti-Bite Ring Recovery Scratping Cover-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Collar Protective Neck Pet Wound Healing Collar Anti-Bite Ring Recovery Scratping Cover-3.jpg",

    unitPrice: 90.0,
    spcifications:
      "The pet cone can prevent your pets from biting and licking the wound after surgical operation or injury. It also provides a good protection in taking a bath, trimming the nails and other grooming occasions Suitable for cats, mini dogs and rabbits, etc. Color: white Material: PP",
    sku: "ST000055656",
    category: allCategories.petSupplies,
    tags: [tags.anti, tags.bite, tags.cat, tags.collar, tags.dog],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>The pet cone can prevent your pets from biting and licking the wound after surgical operation or injury.</li>
            <li>It also provides a good protection in taking a bath, trimming the nails and other grooming occasions</li>
            <li>Suitable for cats, mini dogs and rabbits, etc.</li>
        
          </ol>`,
  },
  {
    productName:
      "Cute Double Bowknot Rhinestones Dog Cat Puppy Collar Neck Ring",
    coverImage:
      "./Images/Product Images/Cute Double Bowknot Rhinestones Dog Cat Puppy Collar Neck Ring.jpg",
    productImage1:
      "./Images/petSuppliesImg/Cute Double Bowknot Rhinestones Dog Cat Puppy Collar Neck Ring-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Cute Double Bowknot Rhinestones Dog Cat Puppy Collar Neck Ring-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Cute Double Bowknot Rhinestones Dog Cat Puppy Collar Neck Ring-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Cute Double Bowknot Rhinestones Dog Cat Puppy Collar Neck Ring-4.jpg",

    unitPrice: 50.0,
    spcifications:
      "The microfiber material has excellent wear resistance, cold resistance and aging resistance performance. Selected high quality rhinestone, solid rubber bottom, not easy to drop off. For small to medium sized or large sized dogs and kittens, adjustable design, meet your different needs. Take off the collar when bathing your pet. This will affect the life of the rhinestone and the collar. Made of high quality suede material, more soft and comfortable, will not hurt pet’s neck.",
    sku: "ST060053456",
    category: allCategories.petSupplies,
    tags: [tags.bowknot, tags.cat, tags.collar, tags.dog, tags.rhinestone],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Selected high quality rhinestone, solid rubber bottom, not easy to drop off.</li>
            <li>Made of high quality suede material, more soft and comfortable, will not hurt pet’s neck.</li>
            <li>For small to medium sized or large sized dogs and kittens, adjustable design, meet your different needs.</li>
            <li>The microfiber material has excellent wear resistance, cold resistance and aging resistance performance.</li>
            <li>Take off the collar when bathing your pet. This will affect the life of the rhinestone and the collar.</li>
        
          </ol>`,
  },
  {
    productName:
      "Dog Bags 8 Rolls 120 Bags with Dispenser-Biodegradable,Eco Friendly Bags Dog",
    coverImage:
      "./Images/Product Images/Dog Bags 8 Rolls 120 Bags with Dispenser-Biodegradable,Eco Friendly Bags Dog.jpg",
    productImage1:
      "./Images/petSuppliesImg/Dog Bags 8 Rolls 120 Bags with Dispenser-Biodegradable,Eco Friendly Bags Dog-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Dog Bags 8 Rolls 120 Bags with Dispenser-Biodegradable,Eco Friendly Bags Dog-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Dog Bags 8 Rolls 120 Bags with Dispenser-Biodegradable,Eco Friendly Bags Dog-4.jpg",

    unitPrice: 55.0,
    spcifications:
      "Built Strong and extra thick, Eco Friendly for Environut, Leak proof. You can pick up cat, doggy/doggie, ppy as a pet supplies. Easy to Open and Detach from the Roll: Smoothly detaches from roll and features a clearly marked opening side. Plastic Dispenser for Easily Removing a Bag from the Roll: You can refill the Dog Waste Rolls with this Dispenser, and clip it on the dog leash. Our bags holder are made big enough for even the largest of dogs, and thick enough to ensure there are no messes. Also great for cat container.",
    sku: "ST0000112187",
    category: allCategories.petSupplies,
    tags: [tags.bags, tags.dog, tags.poo],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Built Strong and extra thick, Eco Friendly for Environut, Leak proof. You can pick up cat, doggy/doggie, ppy as a pet supplies.</li>
            <li>Easy to Open and Detach from the Roll: Smoothly detaches from roll and features a clearly marked opening side.</li>
            <li>Plastic Dispenser for Easily Removing a Bag from the Roll: You can refill the Dog Waste Rolls with this Dispenser, and clip it on the dog leash.</li>
            <li>Our bags holder are made big enough for even the largest of dogs, and thick enough to ensure there are no messes. Also great for cat container.</li>
            <li>color: green</li>
            <li>Material: HDPE EPI</li>
            <li>size: Garbage bag: 33 x 23cm</li>
            <li>Distributor: 9.5 x 4cm</li>
          </ol>
          <br/>
          Package Contents:
          <ol>
            <li>8 x rolls garbage bag(15 bags per roll)</li>
            <li>1 x distributor</li>
            <li>Only the above package content, other products are not included.</li>
            <li> Light and different displays may cause the color of the item in the picture a little different from the real thing. The measured allowed error is /- 1-3cm.</li>
  
          </ol>
          `,
  },
  {
    productName:
      "Dog Cat LED Light Magnifying Glass Nail Trimmer Scissors Sharpener",
    coverImage:
      "./Images/Product Images/Dog Cat LED Light Magnifying Glass Nail Trimmer Scissors Sharpener.jpg",
    productImage1:
      "./Images/petSuppliesImg/Dog Cat LED Light Magnifying Glass Nail Trimmer Scissors Sharpener-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Dog Cat LED Light Magnifying Glass Nail Trimmer Scissors Sharpener-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Dog Cat LED Light Magnifying Glass Nail Trimmer Scissors Sharpener-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Dog Cat LED Light Magnifying Glass Nail Trimmer Scissors Sharpener-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/Dog Cat LED Light Magnifying Glass Nail Trimmer Scissors Sharpener-5.jpg",
    unitPrice: 60.0,
    spcifications:
      "This nail trimmer is designed for dogs and cats, which can protect pets from fear, anxiety and disgust.It is safe and painless with the LED light and magnifying glass, being able to reduce the risk of excessive cutting and pet injury.With ergonomic design, it is easy to operate.You can use it to trim your pet’s nails at home to save money and time.Item Name: Pet Nail Trimmer Material: ABS Battery: Button Battery (Included) Features: LED, Portable, Easy to Use Size: 15cm x 9cm/5.91″ x 3.54″ (Approx.) Notes: Due to the light and screen setting difference, the item’s color may be slightly different from the pictures. Please allow slight dimension difference due to different manual measurement. Package Includes: 1 x Pet Nail Trimmer",
    sku: "ST00003216529",
    category: allCategories.petSupplies,
    tags: [tags.cat, tags.dog, tags.nail, tags.trimmer],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Item Name: Pet Nail Trimmer</li>
            <li>Material: ABS</li>
            <li>Battery: Button Battery (Included)</li>
            <li>Features: LED, Portable, Easy to Use</li>
            <li>Size: 15cm x 9cm/5.91″” x 3.54″” (Approx.)</li>
     
          </ol>`,
  },
  {
    productName:
      "Dog Cat Puppy Christmas Holiday Kitten Pierced Woolen Hat Decor",
    coverImage:
      "./Images/Product Images/Dog Cat Puppy Christmas Holiday Kitten Pierced Woolen Hat Decor.jpg",
    productImage1:
      "./Images/petSuppliesImg/Dog Cat Puppy Christmas Holiday Kitten Pierced Woolen Hat Decor-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Dog Cat Puppy Christmas Holiday Kitten Pierced Woolen Hat Decor-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Dog Cat Puppy Christmas Holiday Kitten Pierced Woolen Hat Decor-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Dog Cat Puppy Christmas Holiday Kitten Pierced Woolen Hat Decor-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/Dog Cat Puppy Christmas Holiday Kitten Pierced Woolen Hat Decor-5.jpg",
    unitPrice: 70.0,
    spcifications:
      "Pet cap is made of cotton and woolen yarn fabric, very comfortable in cold winters. The hat is suitable for dogs and cats. Its flexible and pierced design can keep your pet warm and stays cute. The cap is suitable for cold winter, Christmas, photos taking, gifts giving.",
    sku: "ST000054865",
    category: allCategories.petSupplies,
    tags: [
      tags.cat,
      tags.christmas,
      tags.dog,
      tags.hat,
      tags.holiday,
      tags.kitten,
      tags.puppy,
      tags.wollen,
    ],
    discount: 20.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Item Name: Pet Cap</li>
            <li> Material: Cotton, Woolen Yarn</li>
            <li> Features: Holiday, Kitten, Wooled, Pet Supplies</li>
            <li> Size: 8cm x 14cm x 2cm/3.15″ x 5.18″ x 0.79″ (Approx.)</li>
          
          </ol>`,
  },
  {
    productName: "Dog Feeders Bowls Bamboo Tableware Ceramic",
    coverImage:
      "./Images/Product Images/Dog Feeders Bowls Bamboo Tableware Ceramic.jpg",
    productImage1:
      "./Images/petSuppliesImg/Dog Feeders Bowls Bamboo Tableware Ceramic-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Dog Feeders Bowls Bamboo Tableware Ceramic-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Dog Feeders Bowls Bamboo Tableware Ceramic-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Dog Feeders Bowls Bamboo Tableware Ceramic-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/Dog Feeders Bowls Bamboo Tableware Ceramic-5.jpg",
    unitPrice: 75.0,
    spcifications:
      "Fashion which have high water resistance properties. it prevent your pet from sliding bowls around and provide protection for your floors. Keeps cleaner and easy to clean. Using this elevated pet feeders keeps the feeding area cleaner which is essential to a sanitary life. Furthermore, dog dishes elevated are easier to clean. Just ply wipe the surface of the feeder table clean. Swallowing easily. This elevated dog dish provide ease of access to food and water which can help facilitate movement of food when traveling from the mouth to the stomach. Consuming food from raised dog feeder places less strain on the dog’s neck, hips, shoulders and joints, which promotes better posture. ceramics bowl included. They are durable, sanitary, rust-free, non-leaching and dishwasher safe",
    sku: "ST000013298",
    category: allCategories.petSupplies,
    tags: [tags.bamboo, tags.dog, tags.feeder],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Type: Dogs</li>
            <li>Item Type: Travel Bowls</li>
            <li>Applicable Dog Breed: Universal</li>
            <li>Volume: 400ml</li>
            <li>Feather: Dog feeders</li>
            <li>Style: Fashion which have high water resistance properties. it prevent your pet from sliding bowls around and provide protection for your floors.</li>
            <li>Keeps cleaner and easy to clean. Using this elevated pet feeders keeps the feeding area cleaner which is essential to a sanitary life. Furthermore, dog dishes elevated are easier to clean. Just ply wipe the surface of the feeder table clean.</li>
            <li>Swallowing easily. This elevated dog dish provide ease of access to food and water which can help facilitate movement of food when traveling from the mouth to the stomach. Consuming food from raised dog feeder places less strain on the dog’s neck, hips, shoulders and joints, which promotes better posture.</li>
            <li>ceramics bowl included. They are durable, sanitary, rust-free, non-leaching and dishwasher safe.</li>
            <li>color: Bamboo white</li>
            <li>Material: Bamboo ceramic</li>
            <li>Note: Light and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is /- 1-3cm.</li>
          </ol>`,
  },
  {
    productName:
      "High Quality Harness Leash for Dogs & Cats or Dog Collars Holder",
    coverImage:
      "./Images/Product Images/High Quality Harness Leash for Dogs & Cats or Dog Collars Holder.jpg",
    productImage1:
      "./Images/petSuppliesImg/High Quality Harness Leash for Dogs & Cats or Dog Collars Holder-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/High Quality Harness Leash for Dogs & Cats or Dog Collars Holder-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/High Quality Harness Leash for Dogs & Cats or Dog Collars Holder-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/High Quality Harness Leash for Dogs & Cats or Dog Collars Holder-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/High Quality Harness Leash for Dogs & Cats or Dog Collars Holder-5.jpg",
    unitPrice: 130.0,
    spcifications:
      " 5M is suitable for puppy weight up to 14kg One-handed braking and locking systems tops the pet from advancing. The handle parts are made of TPE and PP environmentally friendly materials, which will not cause allergies to pets or human skin. One-touch control button to relax and tighten the rope, easy and convenient. Big handle for easy gripping, even with mittens or gloves. Soft grip. This leash is perfect for small and medium pets. Nickel-plated hook, environmentally friendly, firm Retractable style design, the leash can auto stretch out and drawback. Giving your dog a very good range and freedom of movement Material: ABS Nylon ",
    sku: "ST0000112143",
    category: allCategories.petSupplies,
    tags: [tags.pet, tags.supplies, tags.sale],
    discount: 20.0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Brand new and high quality Harness or Dogs Collars Leashes.</li>
            <li>This Dog Collar Leash is Durable and Long lasting product</li>
            <li>Ergonomic design provides maximum comfort while walking the pets.</li>
            <li>Unique design, the belt can automatically stretch and retreat.</li>
            <li>Material: ABS Shell Nylon Rope</li>
            <li>Length: 5M & 3M</li>
            <li>Quantity: 1pc</li>
            <li>Color: Multicolor of Harness or Dogs Collars Leashes available</li>
            <li>( A random color will be sent , if you have a choice kindly contact us via chat)</li>
            <li>1 x Dog Leash, Harness or Dogs Collars</li>
          </ol>`,
  },
  {
    productName: "Levonsity Cat Litter Box Liners",
    coverImage: "./Images/Product Images/Levonsity Cat Litter Box Liners.jpg",
    productImage1:
      "./Images/petSuppliesImg/Levonsity Cat Litter Box Liners-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Levonsity Cat Litter Box Liners-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Levonsity Cat Litter Box Liners-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Levonsity Cat Litter Box Liners-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/Levonsity Cat Litter Box Liners-5.jpg",
    unitPrice: 60.0,
    spcifications:
      "The item is creative drawstring cat litter bag. Adopts durable and soft material, it is comfortable for cat use. It is easy and convenient to carry. The bag is portable, special and perfect for outdoor use. Great for cat letter cleaning bag for home or pet shop. Size: 91.5 x 45.7cm Lightweight and easy carrying for outdoor travel and camping. Made of eco-friendly LDPE, waterproof and durable, disposable to use. color: White Material: LDPE Set in the basin of cat litter, when change the cat litter, you can take out bag, fast and convenient to clean up, not dirty hands. It is a great gift for your family or friends who love cats. It is convenient and quick to clean up and not dirty hands. Packing list 3 packs * cat litter bag set (each pack 7) Only the above package content, other products are not included. Note: Light and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is /- 1-3cm.",
    sku: "ST00008215454",
    category: allCategories.petSupplies,
    tags: [tags.cat, tags.liner, tags.litter],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>The item is creative drawstring cat litter bag. Adopts durable and soft material, it is comfortable for cat use. It is easy and convenient to carry. The bag is portable, special and perfect for outdoor use. Great for cat letter cleaning bag for home or pet shop.</li>
            <li>Size: 91.5 x 45.7cm</li>
            <li>Lightweight and easy carrying for outdoor travel and camping.</li>
            <li>Made of eco-friendly LDPE, waterproof and durable, disposable to use.</li>
            <li>color: White</li>
            <li>Material: LDPE</li>
            <li>Set in the basin of cat litter, when change the cat litter, you can take out bag, fast and convenient to clean up, not dirty hands.</li>
            <li>It is a great gift for your family or friends who love cats.</li>
            <li>It is convenient and quick to clean up and not dirty hands.</li>
            <li>Packing list</li>
            <li>Only the above package content, other products are not included.</li>
            <li>Note: Light and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is /- 1-3cm.</li>
          </ol>`,
  },
  {
    productName: "Nylon Braided Stripe Pattern Fish Model Kitten Toy",
    coverImage:
      "./Images/Product Images/Nylon Braided Stripe Pattern Fish Model Kitten Toy.jpg",
    productImage1:
      "./Images/petSuppliesImg/Nylon Braided Stripe Pattern Fish Model Kitten Toy-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Nylon Braided Stripe Pattern Fish Model Kitten Toy-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Nylon Braided Stripe Pattern Fish Model Kitten Toy-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Nylon Braided Stripe Pattern Fish Model Kitten Toy-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/Nylon Braided Stripe Pattern Fish Model Kitten Toy-5.jpg",
    unitPrice: 10.0,
    spcifications:
      " Made of nylon rope with good workmanship, it is bite resistant and wear resistant and does no harm to pet. Featuring braided fish shape, it looks lifelike, vivid and attractive, which easily arouses your pet’s interest. With this item, you can play it with your pet and can the relationship between you and your pet. It is a great toy for pets, which helps to relieve pet’s boredom and prevent depression.",
    sku: "ST000084562235",
    category: allCategories.petSupplies,
    tags: [tags.cat, tags.fish, tags.kitten, tags.nylon, tags.toys],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Item Name: Fish Toy</li>
            <li>Material: Nylon Rope</li>
            <li>Features: Good Workmanship, Braided Fish Shape, Vivid, Lifelike, Pet Supplies</li>
            <li>Size: 10.5cm x 3cm x 2cm/4.13″ x 1.18″ x 0.79″ (Approx.)</li>
            <li>Notes: Due to the light and screen setting difference, the item’s color may be slightly different from the pictures. </li>
            <li>Notes: Due to the light and screen setting difference, the item’s color may be slightly different from the pictures. Please allow slight dimension difference due to different manual measurement.</li>
          
          </ol>`,
  },
  {
    productName:
      "Pet Bowl Stainless Steel Hanging Fixed Dog Food Drinking Bowl",
    coverImage:
      "./Images/Product Images/Pet Bowl Stainless Steel Hanging Fixed Dog Food Drinking Bowl.jpg",
    productImage1:
      "./Images/petSuppliesImg/Pet Bowl Stainless Steel Hanging Fixed Dog Food Drinking Bowl-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Pet Bowl Stainless Steel Hanging Fixed Dog Food Drinking Bowl-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Pet Bowl Stainless Steel Hanging Fixed Dog Food Drinking Bowl-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Pet Bowl Stainless Steel Hanging Fixed Dog Food Drinking Bowl-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/Pet Bowl Stainless Steel Hanging Fixed Dog Food Drinking Bowl-5.jpg",
    unitPrice: 50.0,
    spcifications:
      "Hanging design, can be hung in many angles, easy to adjust. Specifications: Color: blue Material: stainless steel Size: (16×5.5cm) Package Included: 1 * Pet bowl Notes: Due to the difference between different monitors, the picture may not reflect the actual color of the item. We guarantee the style is the same as shown in the pictures. Please allow slight dimension difference due to different manual measurement.",
    sku: "ST000054871125",
    category: allCategories.petSupplies,
    tags: [
      tags.bowl,
      tags.cat,
      tags.dog,
      tags.drink,
      tags.hanging,
      tags.parrot,
      tags.pet,
      tags.water,
    ],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>1. The inner and outer bowls are separated to make cleaning easier.</li>
            <li>2. The stainless steel inner bowl is mirror polished and has a smooth surface.</li>
            <li>3. Rotary fixed design, more convenient installation and prevent movement.</li>
            <li>Color:  blue</li>
            <li>Material: stainless steel</li>
            
          </ol>`,
  },
  {
    productName: "Pet Grooming Glove-Blue",
    coverImage: "./Images/Product Images/Pet Grooming Glove - Blue.jpg",
    productImage1: "./Images/petSuppliesImg/Pet Grooming Glove - Blue-1.jpg",
    productImage2: "./Images/petSuppliesImg/Pet Grooming Glove - Blue-2.jpg",
    productImage3: "./Images/petSuppliesImg/Pet Grooming Glove - Blue-3.jpg",

    unitPrice: 45.0,
    spcifications:
      "Pet Grooming brush: Perfect for long, short, and curly-haired dogs, cats, horses, and other pet animals, grooming the hair quickly, gently, and effectively; The shedding hair sticks to the glove, making it easy to peel and throw hair away and it’s also machine washable Healthier Pet & Environment-Removing hair not only helps reduce flying hair in the air, but it also stimulates skin oils and improves coat softness and shine Bath Brush: Perfect pet kit for Cat & Dog, which will clean the pet hair easily and give your pets a gentle massage without hurting their skin; Five finger design allows you to groom hard-to-reach places like the tail or face. This is just like a pet grooming machine Skin-friendly: No such material is used in manufacturing that could cause skin damage; Soft rubber ensure gentle massage and grooming without painful removal of fur or scratching the skin Adjustable Comfort Fit-Flexible and breathable, our dog and cat pet brush fits most pet owners which are only possible due to this pet grooming kit (1 pet gloves).What pet accessories for dog & cat you will get in this pet grooming kit: 1 Blue color pet grooming gloves.",
    sku: "ST0000824544548",
    category: allCategories.petSupplies,
    tags: [tags.gloves, tags.hair, tags.pet],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Pet Supplies</li>
            <li>From The House of Royal Pets</li>
            <li>Premium Quality</li>
            <li>Adjustable Size –</li>
            <li>Gives a good grip to hand</li>
            
          </ol>`,
  },
  {
    productName: "Professional Pet Hair Deshedding Brush",
    coverImage:
      "./Images/Product Images/Professional Pet Hair Deshedding Brush.jpg",
    productImage1:
      "./Images/petSuppliesImg/Professional Pet Hair Deshedding Brush-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Professional Pet Hair Deshedding Brush-2.jpg",

    unitPrice: 40.0,
    spcifications:
      "100 reusable, professional pet hair removal tool, no need for tape or adhesive tape. Just move back and forth. The collected hair can be handled more easily using the included cleaning brush. Designed for ABS body with PP roller and nylon makeup brush. Ensure that the epilator is firm and stable. Size: 15 * 6 cm, Good ergonomics, Quality and service for pets. To untangle the hair and remove dead hair from your pet’s coat.",
    sku: "ST000082545",
    category: allCategories.petSupplies,
    tags: [tags.cat, tags.dog, tags.hair, tags.pet],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>100 reusable, professional pet hair removal tool, no need for tape or adhesive tape.</li>
            <li>Just move back and forth. The collected hair can be handled more easily using the included cleaning brush.</li>
            <li>Designed for ABS body with PP roller and nylon makeup brush. Ensure that the epilator is firm and stable.</li>
            <li>Size: 15 * 6 cm, Good ergonomics, Quality and service for pets</li>
            <li>To untangle the hair and remove dead hair from your pet’s coat</li>
            <li>Product name: sticky brush,</li>
            <li>Scope of use: suitable for sofa, clothing, etc.</li>
            <li>Varied colors, bid farewell to monotony,</li>
            <li>Dense bristles, environmental friendly material;</li>
            <li>Ergonomic design</li>
            <li>Material: ABS</li>
            <li>Size:15*6cm</li>
            <li>Package Contents:</li>
            <li>1*Brush</li>
            <li>Only the above package content, other products are not included.</li>
            <li>Note: Light and different displays may cause the color of the item in the picture a little different from the real thing. The measurement allowed error is /- 1-3cm.</li>
          </ol>
          `,
  },
  {
    productName:
      "Summerflowers Automatic Food Feeding Dispenser Large Capacity 3.8L",
    coverImage:
      "./Images/Product Images/Summerflowers Automatic Food Feeding Dispenser Large Capacity 3.8L.jpg",
    productImage1:
      "./Images/petSuppliesImg/Summerflowers Automatic Food Feeding Dispenser Large Capacity 3.8L-1.jpg",
    productImage2:
      "./Images/petSuppliesImg/Summerflowers Automatic Food Feeding Dispenser Large Capacity 3.8L-2.jpg",
    productImage3:
      "./Images/petSuppliesImg/Summerflowers Automatic Food Feeding Dispenser Large Capacity 3.8L-3.jpg",
    productImage4:
      "./Images/petSuppliesImg/Summerflowers Automatic Food Feeding Dispenser Large Capacity 3.8L-4.jpg",
    productImage5:
      "./Images/petSuppliesImg/Summerflowers Automatic Food Feeding Dispenser Large Capacity 3.8L-5.jpg",
    unitPrice: 50.0,
    spcifications:
      "High quality Summer flowers Automatic Food Feeding Dispenser Large Capacity 3.8L Pet Bowl Auto Drinking Fountain For Dog Bowl Dog Accessories Pet Supplies",
    sku: "ST000033858",
    category: allCategories.petSupplies,
    tags: [tags.automatic, tags.cat, tags.dog, tags.feeder],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Automatic food feeding dispencer and drinking fountain for pet.</li>
            <li> Made of food grade plastic, safe, non-toxic and eco-friendly.</li>
            <li> Save your energy and time to feed your pet.</li>
            <li> Provide your pet fresh and clean food immediately.</li>
            <li> An useful assistant to help you feed your pet while you leave for a short time.</li>
            <li> Anti slip base, convenient for pet use, pet won’t break off food and water.</li>
            <li> Easy to clean, the product can be detachable for cleaning.</li>
            <li> Please clean this product regularly for your pet’s health.</li>
          </ol>
          <br/>
          Specification:
          <ol>
            <li> Material: PP</li>
            <li> Color: Blue, Pin, Green, Gray</li>
            <li> Capacity: 3.8L</li>
            <li> Size: 31x17x22cm</li>
            <li>Note:  There could be some slight differences in the color tone of the pictures and the actual item.  Please allow 1-2mm differs due to manual measurement, thanks. </li>
            <li> Package Included:  1pc x Automatic Food Feeder </li>
            <li> NO Retail Box. Packed Safely in Bubble Bag.</li>
          </ol>
          `,
  },
  {
    productName: "Orbeez Soft Crystal Water Balls",
    unitPrice: 45.0,
    coverImage: "./Images/Product Images/Orbeez Soft Crystal Water Balls.jpg",
    productImage1: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-1.jpg",
    productImage2: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-2.jpg",
    productImage3: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-3.jpg",
    productImage4: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-4.jpg",
    productImage5: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-5.png",
    spcifications:
      "Product details Colored Orbeez Soft Crystal Water Balls Magic Also Use In Decoration Table Plants And Many MoreHydrogel BallsGrowing Water balls,Beads Crystal GelWater PearlsAqua Jelly Beads Grow,Water Growing balls,Many uses for decoration for weddings, showers,centerpiecesIdeal for candle,silk cut flower arrangements,centerpieces and more.Less expensive and more attractive than marbles or stonesIdeal for home decor,crafts,floral departments and more",
    sku: "ST00007758750001",
    category: allCategories.sportsAndOutdoor,
    tags: [tags.balls, tags.fun, tags.joy, tags.orbeez, tags.toys, tags.water],
    discount: 0,
    descriptionAsHTML: `
                        Features:
                        <ol>
                          <li>Hydrogel Balls</li>
                          <li>Growing Water balls</li>
                          <li>Beads Crystal Gel</li>
                          <li>Water Pearls</li>
                          <li>Aqua Jelly Beads Grow</li>
                          <li>Water Growing balls</li>
                          <li>Many uses for decoration for weddings, showers,centerpieces</li>
                          <li>Ideal for candle,silk cut flower arrangements,centerpieces and more</li>
                          <li>Less expensive and more attractive than marbles or stones</li>
                          <li>Ideal for home decor,crafts,floral departments and more</li>
                        </ol>`,
  },
  {
    productName: "Mesh Squish Ball",
    coverImage: "./Images/Product Images/Mesh Squish Ball.jpg",
    productImage1: "./Images/ToyImages/Mesh Squish Ball-1.jpg",
    productImage2: "./Images/ToyImages/Mesh Squish Ball-2.jpeg",
    productImage3: "./Images/ToyImages/Mesh Squish Ball-3.jpg",
    productImage4: "./Images/ToyImages/Mesh Squish Ball-4.jpeg",
    productImage5: "./Images/ToyImages/Mesh Squish Ball-5.jpg",
    unitPrice: 25.0,
    spcifications:
      "100% Brand New and Good Quality Stuff. Grape ball/ Stress Ball can be randomly squeeze to any shape. Helping you relax your hands and promote the blood circulation in your palm. Interesting grape ball style can stress relieving when you squeeze toy to any dimension. Whether your kid wants to just have a really fun toy or is in need of a way to handle his sensory issues, these mesh balls can really help for a kid with AUTISM, ADHD, ADD & ANXIETY. Made of environmentally soft rubber and liquid filler, don’t squeeze the same part for a long time or use a sharp thing to stab it. Color: Assorted (Random Color)",
    sku: "ST00002454835",
    category: allCategories.sportsAndOutdoor,
    tags: [tags.balls, tags.fun, tags.joy, tags.squish, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                    Features:
                    <ol>
                      <li>
  
                      EXCLUSIVE SEWN MESH BALL No more plastic clips holding the netting down thereby avoiding the mesh falling off after a few squeezes. Additionally since plastic tie is eliminated there is no more rough and dangerous ends poking out.
                  
                  </li>
                      <li>
                      100% SATISFACTION GUARANTEE If for any reason you are not fully satisfied please let us know so we can make it right!
                  </li>
                      <li>
                      ⭐⭐PLEASE NOTE. We do guarantee much better quality overall. HOWEVER please understand that in order for these balls to emerge through the mesh they need to be a certain material. After extended play THEY WILL eventually leak. If this is a problem for you than PLEASE DO NOT BUY:)⭐⭐
                      </li>
                      <li>Comes with 4 colors <br/>🔵Blue 🟢Green 🟠Orange 🟡Yellow </li>
                      <li>PREMIUM SUPERIOR QUALITY-When we write top notch quality we really mean it. Our product has been continuously tested until the best sewing technique has been discovered and utilized. The mesh netting will stay in place and last for many many squeezes!</li>
                      <li>
                      THE ULTIMATE AND PROVEN STRESS RELIEF– Mesh squeeze balls have been around for quite a while. There is a reason for that. Using our mesh balls in any stressful environment can greatly release harmful stress whether it is for a kid who needs a healthy outlet or an adult who is having a stressful day at work.
                  </li>
                      </ol>`,
  },
  {
    productName: "Monopoly Global Village Property",
    coverImage: "./Images/Product Images/Monopoly Global Village Property.jpg",
    productImage1: "./Images/ToyImages/Monopoly Global Village Property-1.jpg",
    productImage2: "./Images/ToyImages/Monopoly Global Village Property-2.jpg",
    productImage3: "./Images/ToyImages/Monopoly Global Village Property-3.jpg",

    unitPrice: 50.0,
    spcifications:
      "Fast Dealing Property Trading Game. Compact in size, easy to take along on holiday. Tour the city for the hottest properties, sites, airports and lots more up for grabs. It will most certainly entertain two and six players from ages 8 and upwards.It will most certainly entertain two and six players from ages 8 and upwards. Will keep players busy and intrigued for hours. Monopoly games have been entertaining families and people love the roller-coaster ride to success. Pass Go, take a Chance card, and you might just build the property of your dreams or you might end up in Jail! Whatever happens, it’s fun all the way to the top. Gameboard, 6 token, 28 Title Deed cards. 16 Change cards, 16 Community Chest cards. 1 pack monopoly. 32 house , 12 hotel. 2 dice 1 Dice Counter.",
    sku: "ST0147548749",
    category: allCategories.sportsAndOutdoor,
    tags: [tags.fun, tags.monoply, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                      Features:
                      <ol>
                        <li>Fast Dealing Property Trading Game. Compact in size, easy to take along on holiday.</li>
                        <li>Tour the city for the hottest properties, sites, airports and lots more up for grabs.</li>
                        <li>It will most certainly entertain two and six players from ages 8 and upwards.</li>
                        <li>Will keep players busy and intrigued for hours.</li>
                        <li>Monopoly games have been entertaining families and people love the roller-coaster ride to success.</li>
                        <li>Pass Go, take a Chance card, and you might just build the property of your dreams or you might end up in Jail! Whatever happens, it’s fun all the way to the top!</li>
                        <li>Gameboard, 6 token, 28 Title Deed cards,</li>
                        <li>16 Change cards, 16 Community Chest cards,</li>
                        <li>1 pack monopoly</li>
                        <li>32 house , 12 hotel</li>
                        <li>2 dice 1 Dice Counter.</li>
                      </ol>`,
  },
  {
    productName: "Pull Back Mini Auto Super Power Car Set",
    coverImage:
      "./Images/Product Images/Pull Back Mini Auto Super Power Car Set.jpg",
    productImage1:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-1.jpg",
    productImage2:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-2.jpg",
    productImage3:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-3.jpg",
    productImage4:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-4.jpg",
    productImage5:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-5.png",
    unitPrice: 40.0,
    spcifications:
      "Design: Bright colors and realistic details. Easy to use: Just pull them back and watch them go. Benefits: Car toys encourage imaginative play and reduce screen time. Collectibles: Compatible with playsets in the Turbocharge series. Size: Toy cars measure 3.0 (L) x 1.25 (W) x 1.0 (H) inches approximately. Batteries: None required. Age: Recommended for 3 year olds and up",
    sku: "ST0000548748",
    category: allCategories.sportsAndOutdoor,
    tags: [tags.car, tags.fun, tags.racing, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                            Features:
                            <ol>
                              <li>100% Brand New Original Package And High Quality</li>
                              <li>100% Same As Pics</li>
                              <li>Body: Metal</li>
                              <li>Multi Colors</li>
                              <li>Size : 5 X 4 Cm</li>
                              <li>Features Super-Realistic Design</li>
                              <li>Interesting And A Must Have Reasonable Toy</li>
                              <li>Safe For Children Above Three Years Of Age</li>
                              <li>Pull Back & Self-Rotating</li>
                              <li>Includes Colorful Box</li>
                              <li>Very Useful Item For Gift</li>
                            </ol>`,
  },
  {
    productName: "20W Glue Gun-High Temperature Glue Gun Kit with Glue Sticks",
    unitPrice: 45.0,
    coverImage: "./Images/Product Images/Glue-Gun.jpg",
    productImage1: "./Images/toolsImages/Glue-Gun-1.jpg",
    productImage2: "./Images/toolsImages/Glue-gun-2.jpg",
    productImage3: "./Images/toolsImages/Glue-Gun-3.jpg",
    productImage4: "./Images/toolsImages/Glue-gun-4.jpg",
    productImage5: "./Images/toolsImages/Glue-gun-5.jpg",
    spcifications:
      " 20W Mini Glue Gun, Anti-Hot Cover & Safe Power Switch Comes with 1pc of 4-inch Glue Stick Works on Metal, Glass, Paper, Fabric, Plastic, Ceramics, etc Perfect for Home, Office, School, Ideal for DIY Craft Projects Precision Nozzle, Easy Squeeze Trigger, Built-In Stand Show Your DIY Talent: Cobiz believe “everyone is the DIY talent in life”. This heavty duty craft hot glue gun allows to show your DIY talent easily. Let your creativity flow, have your glue gun shipped today Ergonomic design and suitable size make it comfortable to handle and use . Made with high quality plastic engineered to sustain high pressure and temperature without deforming. Featured with german ceramic PTC thermal heating system to ensure 1-3 minutes quick preheating; Unique watt adjustment design make it not only work well for arts and crafts jobs! ",
    sku: "ST00002546585",
    category: allCategories.tools,

    tags: [tags.diy, tags.glue, tags.gun, tags.tool, tags.tools],
    discount: 4.0,
    descriptionAsHTML: `
              Features:
              <ol>
                <li>Product is 100% Same As Shown In Picture.</li>
                <li>Super Fast Melting Technology.</li>
                <li>Long Stainless Steel Nose For Perfect Work.</li>
                <li>Large Power Indicator Light.</li>
                <li>Power On/Off Button.</li>
                <li>Strong Shock Proof Body.</li>
                <li>Power: 110v ~ 240v.</li>
                <li>Easy And Safe To Use.</li>
                <li>High Quality Shock Proof Body.</li>
                <li>Durable And Long Lasting.</li>
                <li>Perfect For Arts And Crafts & Repairing.</li>
              </ol>
              `,
  },
  {
    productName: "4 Pcs Set Precision Pick and Hook Set",
    coverImage: "./Images/Product Images/Precision Pick and Hook Set.jpg",
    productImage1: "./Images/toolsImages/Precision Pick and Hook Set-1.jpg",
    productImage2: "./Images/toolsImages/Precision Pick and Hook Set-3.jpg",
    productImage3: "./Images/toolsImages/Precision Pick and Hook Set-4.jpg",

    unitPrice: 50.0,
    spcifications:
      "High quality: 100% brand new and high quality.2. Wide range of applications: Designed for industrial, automotive, hobby, and craft use.3. Environmentally friendly material: Made of high quality metal material, high hardness and not easy to wear.4. Safe and Durable: It can be used in a variety of stretching and marking applications.5. Durable: It has a sturdy, reliable structure and long service life.6. Sturdy and Reliable: Sturdy surface and clear instructions, reliable industry standards. Specification:1. Type: Unloading tool set2. Material: steel and plastic3. Quantity: 4pcs4. Color: Red-black / Yellow-black / Blue5. Hook: 45 degrees, 90 degrees, 110 degrees and 180 degrees6. Length: 135mm/160mm7. Weight: 100g/120g Packing list:1. 4pc pull hook",
    sku: "ST00003645897",
    category: allCategories.tools,
    tags: [tags.diy, tags.oil, tags.pick, tags.seal, tags.tool, tags.tools],
    discount: 0,
    descriptionAsHTML: `
        Features:
        <ol>
          <li>High quality: 100% brand new and high quality.</li>
          <li>Wide range of applications: Designed for industrial, automotive, hobby, and craft use.</li>
          <li>Environmentally friendly material: Made of high quality metal material, high hardness and not easy to wear.</li>
          <li>Safe and Durable: It can be used in a variety of stretching and marking applications.</li>
          <li>Durable: It has a sturdy, reliable structure and long service life.</li>
          <li>Sturdy and Reliable: Sturdy surface and clear instructions, reliable industry standards.</li>
        </ol>
        <br/>
        Specification:
        <ol>
          <li>Type: Unloading tool set</li>
          <li>Material: steel and plastic</li>
          <li>Quantity: 4pcs</li>
          <li>Color: Red-black / Yellow-black / Blue</li>
          <li>Hook: 45 degrees, 90 degrees, 110 degrees and 180 degrees</li>
          <li>Length: 135mm/160mm</li>
          <li>Weight: 100g/120g</li>
        </ol>
        `,
  },
  {
    productName: "Car Tire Repair Kit",
    coverImage: "./Images/Product Images/Car Tire Repair Kit.jpg",
    productImage1: "./Images/toolsImages/Car Tire Repair Kit-1.jpg",
    productImage2: "./Images/toolsImages/Car Tire Repair Kit-2.jpg",
    productImage3: "./Images/toolsImages/Car Tire Repair Kit-3.jpeg",

    unitPrice: 20.0,
    spcifications:
      "High quality: 100% brand new and high quality.2. Wide range of applications: Designed for industrial, automotive, hobby, and craft use.3. Environmentally friendly material: Made of high quality metal material, high hardness and not easy to wear.4. Safe and Durable: It can be used in a variety of stretching and marking applications.5. Durable: It has a sturdy, reliable structure and long service life.6. Sturdy and Reliable: Sturdy surface and clear instructions, reliable industry standards. Specification:1. Type: Unloading tool set2. Material: steel and plastic3. Quantity: 4pcs4. Color: Red-black / Yellow-black / Blue5. Hook: 45 degrees, 90 degrees, 110 degrees and 180 degrees6. Length: 135mm/160mm7. Weight: 100g/120g Packing list:1. 4pc pull hook",
    sku: "ST000082154546",
    category: allCategories.tools,
    tags: [tags.diy, tags.kit, tags.puncture, tags.tire, tags.tools, tags.tool],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>This tool is Essential for Vehicles</li>
              <li>The Car Tire Repair kit will allow you to mend punctures quickly and effectively.</li>
              <li>Durable Plastic Handles providing great grip.</li>
              <li>Repair Tool allows hole widening and cleaning.</li>
              <li>Needle Tool allows Tyre Rubber Strip insertion.</li>
              <li>Includes 3 Repair Rubber Strips.</li>
              <li>Useful Tool to keep in the car with spare wheel.</li>
              <li>It is a puncture repair kit for tubeless tyre.</li>
              <li>Remove the object that caused tyre puncture.</li>
              <li>Insert the rasp into the hole, push and pull the rasp to roughen and clean the edges.</li>
              <liCoat the needle with the rubber cement and spread the cement on the hole.</li>
              <li>Insert the repair string into the hole to seal it.</li>
              <li>If you go out by cycle, scooter, motorbike or car, you can’t afford to leave home without it.</li>
              <li>This kit will let you repair the puncture quickly and effectively.</li>
            </ol>
            `,
  },
  {
    productName: "Cut Resistant Gloves",
    coverImage: "./Images/Product Images/Cut Resistant Gloves.jpg",
    productImage1: "./Images/toolsImages/Cut Resistant Gloves-1.jpg",
    productImage2: "./Images/toolsImages/Cut Resistant Glove2.jpg",
    productImage3: "./Images/toolsImages/Cut Resistant Glove-4.jpg",
    productImage4: "./Images/toolsImages/Cut Resistant Gloves-5.jpg",

    unitPrice: 34.0,
    spcifications:
      "The cuts gloves is 4x stronger than leather,Lightweight and comfortable protection-awarded with the highest,certified highest EN388 level 5 cut resistance, they are food safe cut resistant gloves,Effective protection of outdoor workers’ hand cuts. Durability with high performance cut resistant gloves provide maximum protection for your hands from cutting and scratching-4 times stronger than leather Superior grip with a snug fit for small and large hands-prepare food or work on jobs requiring precision with complete dexterity. High-end knit materials(material made from ultra-high molecular weight polyethylene, fiberglass ) specially manufactured for stretch recovery, maximum flexibility and superior manual dexterity. Prevent cuts, nicks and slices with superior protection from mandoline slicers, peelers, graters, and kitchen, carpentry and other types of knives and blades,Use in the house, in the garden, in the garage and at work plus many other occassion. 100% food safe and machine washable-taking care of your cut gloves clean is easy.",
    sku: "ST000054856445",
    category: allCategories.tools,

    tags: [tags.cut, tags.diy, tags.gloves, tags.tool],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>EN388 level 5 cut resistance protect your hand from cuts and abrasions.</li>
              <li>Breathable, highly elastic, lightweight, excellent comfort and dexterity to wear and grip.</li>
              <li>Easy to sanitize and keep clean.</li>
              <li>Perfect for slicing.</li>
            </ol>`,
  },
  {
    productName: "Electronic Kitchen Lighter",
    coverImage: "./Images/Product Images/Electronic Kitchen Lighter.jpg",
    productImage1: "./Images/toolsImages/Electronic Kitchen Lighter-1.jpeg",
    productImage2: "./Images/toolsImages/Electronic Kitchen Lighter-2.jpeg",
    productImage3: "./Images/toolsImages/Electronic Kitchen Lighter-3.jpg",
    productImage4: "./Images/toolsImages/Electronic Kitchen Lighter-4.jpg",
    productImage5: "./Images/toolsImages/Electronic Kitchen Lighter-5.jpg",
    unitPrice: 28.0,
    spcifications:
      "100% Stainless Steel No Battery Or Liquid Required Service Life of 30,000 times Long handle to protect your hands from nasty burns Electric Arc Igniter, a handy and safe kitchen lighter Flameless and totally windproof design to assure its efficiency Perfect for Home Kitchen, Outdoor BBQ, and Camping Tip Diameter: 0.9 CM Length: 37 CM Weight: 143 G Pressed from Back Produces A Spark Easy to Use Use far Away from Stove for Safety ",
    sku: "ST000055789955",
    category: allCategories.tools,

    tags: [tags.electronics, tags.lighter, tags.safe, tags.safety],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Convenient And An Essential Kitchen Accessory.</li>
              <li>You Can Have Packs Of Matchboxes Stored Away.</li>
              <li>Adjustable Flame Height.</li>
              <li>Safety Lock & Child-Resistance.</li>
              <li>Quickly Light Up The Gas Stove.</li>
              <li>No Refill Required.</li>
            </ol>`,
  },
  {
    productName: "Ingco 10 Pcs Blades Set",
    coverImage: "./Images/Product Images/Ingco 10 Pcs Blades Set.jpg",
    productImage1: "./Images/toolsImages/Ingco 10 Pcs Blades Set-1.jpg",
    productImage2: "./Images/toolsImages/Ingco 10 Pcs Blades Set-2.jpg",

    unitPrice: 8.0,
    spcifications:
      "Ingco 10 Pcs Blades Set HKNSB181With 10pcs blade Size: 18x100mm pack by plastic box",
    sku: "ST000084454595",
    category: allCategories.tools,
    tags: [tags.blade, tags.diy, tags.snap, tags.tools, tags.tool],
    discount: 2.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Ingco 10 Pcs Blades Set HKNSB181With 10pcs blade.</li>
              <li>Size: 18x100mm.</li>
              <li>pack by plastic box.</li>
            </ol>`,
  },
  {
    productName: "Ingco 12in1 Multi Function Hammer",
    coverImage: "./Images/Product Images/Ingco 12in1 Multi Function Hammer.jpg",
    productImage1:
      "./Images/toolsImages/Ingco 12in1 Multi Function Hammer-1.jpg",
    productImage2:
      "./Images/toolsImages/Ingco 12in1 Multi Function Hammer-2.jpg",
    productImage3:
      "./Images/toolsImages/Ingco 12in1 Multi Function Hammer-3.jpg",

    unitPrice: 50.0,
    spcifications:
      "Hammer Flat nose Pliers Regular pliers Wire Cutters Large knife Wood Saw Hook remover Phillips Screwdriver Metal File Wood File SL5 Slotted screwdriver Hex key Strong Aluminum Handle Packed by double blister",
    sku: "ST000082116584",
    category: allCategories.tools,
    tags: [
      tags.diy,
      tags.hammer,
      tags.multi,
      tags.nut,
      tags.opener,
      tags.snap,
      tags.tools,
    ],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Multi-function hammer With 12 Function</li>
              <br/>
              <li>Hammer</li>
              <li>Flat nose Pliers.</li>
              <li>Regular pliers.</li>
              <li> Wire Cutters.</li>
              <li>Large knife.</li>
              <li> Wood Saw.</li>
              <li>Hook remover.</li>
              <li>Phillips Screwdriver.</li>
              <li>Metal File.</li>
              <li>Wood File.</li>
              <li>SL5 Slotted screwdriver.</li>
              <li> Hex key.</li>
              <li>Strong Aluminum Handle.</li>
              <li> Packed by double blister.</li>
              </ol>`,
  },
  {
    productName: "Ingco 142 Pcs combination tools set",
    coverImage:
      "./Images/Product Images/Ingco 142 Pcs combination tools set.jpg",
    productImage1:
      "./Images/toolsImages/Ingco 142 Pcs combination tools set-1.jpg",

    unitPrice: 245.0,
    spcifications:
      "19Pcs 1/2″ Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-25-27-30-32MM. 5Pcs 1/2″ Star Socket:E10 12 14 16 20. 1Pcs 1/2″Dr.Flex handle 375MM. 1Pcs 1/2″ ratchet wrench,45T. 2Pcs 1/2″ Extension bar:75mm(3″) 250mm(10″). 1Pcs 1/2″ Dr. Universal joint. 1Pcs 1/2″(F)*3/8″(M) three way adaptor. 2Pcs Spark plug socket 1/2″Dr.16MM&21MM. 1Pcs 1/2″*10″ L handle. 17 Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24. 5Pcs Flare nut spanner:8*10-10*12-11*13-12*14-17*19. 10 Pcs Hex key:2.5-3-4-5-6-7-8-10-12-14MM. 1 Pcs 300g Machinist hammer. 1 Pcs 7″ Combination Pliers. 2Pcs S2 Slotted screwdriver: SL6.5*100 SL6.5*150. 1Pcs 10″Curved jaw lock wrench. 2Pcs S2 Phillips screwdriver:PH2*100 PH2*150. 2Pcs Stubby screwdriver:PH2*38 SL6.5*38. Packed by INGCO Style BMC.s",
    sku: "ST00008245442",
    category: allCategories.tools,
    tags: [tags.diy, tags.magic, tags.set, tags.tool, tags.toosl],
    discount: 5.0,
    descriptionAsHTML: `
            1/2″DR.Part:
            <ol>
              <li>19Pcs 1/2″ Hexagonal Socket: 8-10-12-13-14-15-16-17-18-19-20-21-22-23-24-25-27-30-32MM.</li>
              <li>5Pcs 1/2″ Star Socket:E10 12 14 16 20.</li>
              <li>1Pcs 1/2″Dr.Flex handle 375MM.</li>
              <li>1Pcs 1/2″ ratchet wrench,45T.</li>
              <li>2Pcs 1/2″ Extension bar:75mm(3″) 250mm(10″).</li>
              <li>1Pcs 1/2″ Dr. Universal joint.</li>
              <li>1Pcs 1/2″(F)*3/8″(M) three way adaptor.</li>
              <li>2Pcs Spark plug socket 1/2″Dr.16MM&21MM.</li>
              <li>1Pcs 1/2″*10″ L handle.</li>
            </ol>
            <br/>
            3/8″DR.Part:
            <ol>
              <li>15Pcs 3/8″ 12pt.socket:6-7-8-9-10-11-12-13-14-15-17-18-19-21-22.</li>
              <li>1Pcs 3/8″ ratchet wrench,45T.</li>
              <li>2Pcs 3/8″ Extension bar:75mm(3″) 150mm(6″).</li>
              <li>1Pcs 3/8″ Dr. Universal joint.</li>
            </ol>
            <br/>
            1/4″DR.Part:
            <ol>
              <li>26Pcs 1/4″*25MM Screwdriver bits:</li>
              <li>PH0-PH1-PH2-PH3-PZ0-PZ1-PZ2-PZ3-SL4-SL5.5-SL7.</li>
              <li>H2-H3-H4-H5-H6-H7-H8-H10.</li>
              <li>T10H-T15H-T20H-T25H-T27H-T30H-T40H.</li>
              <li>1Pcs Bit holder.</li>
              <li>9Pcs 1/4″ Hexagonal Socket:4-4.5-5-5.5-6-7-8-9-10.</li>
              <li>5Pcs 1/4″ Star Socket:E4 5 6 7 8.</li>
              <li>1Pcs 1/4″ ratchet wrench,45T.</li>
              <li>3Pcs 1/4″ Extension bar:50mm(2″) 100mm(4″) 150mm(6″).</li>
              <li>1Pcs 1/4″ Dr. Universal joint.</li>
              <li>1Pcs 3/8″(F)*1/4″(M)three way adaptor.</li>
              <li>1Pcs 1/4″*150mm Spinner handle.</li>
              <li>1Pcs 1/4″*150mm Flexible extension bar.</li>
            </ol>
            <br/>
            Other tools:
            <ol>
              <li>17 Pcs Combination spanner:6-7-8-9-10-11-12-13-14-15-16-17-18-19-21-22-24.</li>
              <li>5Pcs Flare nut spanner:8*10-10*12-11*13-12*14-17*19.</li>
              <li>10 Pcs Hex key:2.5-3-4-5-6-7-8-10-12-14MM.</li>
              <li>1 Pcs 300g Machinist hammer.</li>
              <li>1 Pcs 7″ Combination Pliers.</li>
              <li>2Pcs S2 Slotted screwdriver: SL6.5*100 SL6.5*150.</li>
              <li>1Pcs 10″Curved jaw lock wrench.</li>
              <li>2Pcs S2 Phillips screwdriver:PH2*100 PH2*150.</li>
              <li>2Pcs Stubby screwdriver:PH2*38 SL6.5*38.</li>
              <li>Packed by INGCO Style BMC.</li>
            </ol>
            <br/>
            `,
  },
  {
    productName: "Ingco 5 in 1 Kitchen scissors 9",
    coverImage: "./Images/Product Images/Ingco 5 in 1 Kitchen scissors 9.jpg",
    productImage1: "./Images/toolsImages/Ingco 5 in 1 Kitchen scissors 9-1.jpg",
    productImage2: "./Images/toolsImages/Ingco 5 in 1 Kitchen scissors 9-3.jpg",

    unitPrice: 55.0,
    spcifications:
      "These are very strong good quality scissors for use in the kitchen. They have the key attribute that you can detach the two halves for washing. The handle are rubberized and strong.",
    sku: "ST00005545446565",
    category: allCategories.tools,

    tags: [tags.kitchen, tags.multi, tags.safe, tags.scissors, tags.tool],
    discount: 15.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Size:225mm(9″) .</li>
              <li>Material: Stainless steel Blade.</li>
              <li>thickness:3.0mm.</li>
              <li>With Cutting, scraper,and cracking nuts.</li>
              <li>bottle opener and can opener function.</li>
              <li>Unique design handle.</li>
            </ol>`,
  },
  {
    productName: "Multifunction Magic Broom",
    coverImage: "./Images/Product Images/Multifunction Magic Broom.jpg",
    productImage1: "./Images/toolsImages/Multifunction Magic Broom-1.jpg",
    productImage2: "./Images/toolsImages/Multifunction Magic Broom-2.jpg",
    productImage3: "./Images/toolsImages/Multifunction Magic Broom-3.jpg",

    unitPrice: 92.0,
    spcifications:
      "Multifunctional 2-In-1 Broom: The magic broom not only sweep but also scrapes! Effectively dry the floor surface and easily remove dirt and hair. It can be used to clean pet fur, hair, liquid, glass. Adjustable Wiping Sweeper: The handle of the silicone broom Wiper can be adjusted as needed, So you do not need to bend down when cleaning, And you can safely reach stools, Ladders, High windows, Or other hard-to-reach areas. brooms can be adjusted from 58cm up to 120cm. Easy to Clean: The rubber broom is made of special pp material, Which can be washed with water, Is not afraid of soaking, Is soft but does not absorb moisture, And does not need to be wrung out. Hangable Handle-Save Space: Kitchen broom with The non-slip handle can be hung, which is convenient for storage and saves space. The package comes with 2 squeegee head and 3 sectional poles. Easy to assemble in a minute. The handle with a fixed clasp to make the floor squeeze more solid and no shaking when using. The sweeper broom is washable and can be used indoors & outdoors. It can be used not only for floor cleaning but also for cleaning windows, which will bring you surprising results. Efficient housework: Magic broom for floor cleaning, so you no longer have to worry whether remove stagnant water is not clean, the removal of fine dust is not effective, the hair tangled in the brooms! Multifunctional use, easy to complete the cleaning chores. Wide Use: The floor squeegee can be used to clean pet fur, hair, liquid, glass.Wiping,dust removal,hair sweeping,window scraping,oil cleaning, multi-functional use-easy to clean housework.",
    sku: "ST00007756462",
    category: allCategories.tools,
    tags: [tags.broom, tags.diy, tags.magic, tags.tool, tags.tools],
    discount: 8.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Multifunctional 2-In-1 Broom: The magic broom not only sweep but also scrapes! Effectively dry the floor surface and easily remove dirt and hair. It can be used to clean pet fur, hair, liquid, glass.</li>
              <li>Adjustable Wiping Sweeper: The handle of the silicone broom Wiper can be adjusted as needed, So you do not need to bend down when cleaning, And you can safely reach stools, Ladders, High windows, Or other hard-to-reach areas. brooms can be adjusted from 58cm up to 120cm.</li>
              <li>Easy to Clean: The rubber broom is made of special pp material, Which can be washed with water, Is not afraid of soaking, Is soft but does not absorb moisture, And does not need to be wrung out.</li>
              <li>Hangable Handle-Save Space: Kitchen broom with The non-slip handle can be hung, which is convenient for storage and saves space.</li>
              <li>The package comes with 2 squeegee head and 3 sectional poles. Easy to assemble in a minute. The handle with a fixed clasp to make the floor squeeze more solid and no shaking when using. The sweeper broom is washable and can be used indoors & outdoors. It can be used not only for floor cleaning but also for cleaning windows, which will bring you surprising results.</li>
              <li>Efficient housework: Magic broom for floor cleaning, so you no longer have to worry whether remove stagnant water is not clean, the removal of fine dust is not effective, the hair tangled in the brooms! Multifunctional use, easy to complete the cleaning chores.</li>
              <li>Wide Use: The floor squeegee can be used to clean pet fur, hair, liquid, glass.Wiping,dust removal,hair sweeping,window scraping,oil cleaning, multi-functional use-easy to clean housework.</li>
            </ol>`,
  },
  {
    productName: "Recovery Magnet",
    coverImage: "./Images/Product Images/Recovery Magnet.jpg",
    productImage1: "./Images/toolsImages/Recovery Magnet-1.jpg",
    productImage2: "./Images/toolsImages/Recovery Magnet-2.jpg",

    unitPrice: 85.0,
    spcifications:
      "Great for recovering keys down a drain or overboard a boat. Can be used for treasure hunting in the sea/river. These magnets are very strong for their size, they will literally jump out of your hand when attracted to other magnets or metal. The pull rating is the point at which the magnet will pull away from the metal object, not how much it will lift.",
    sku: "ST00006227",
    category: allCategories.tools,
    tags: [tags.diy, tags.magnet, tags.recovery, tags.tools],
    discount: 3.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Type: Recovery Magnet.</li>
              <li>Material: Magnet.</li>
              <li>Coercivity: 915 (KA/m).</li>
              <li>Intrinsic Coercivity: 860 (KA/m).</li>
              <li>Remanence: 1.17 (T).</li>
              <li>Maximum Energy Product: 12.1 (KJ/m3).</li>
              <li>Density: 7.43 (g/cm3).</li>
              <li>Working Temperature: 80℃.</li>
            </ol>`,
  },
  {
    productName: "Rotatable 180° Socket Converter",
    unitPrice: 25.0,
    coverImage: "./Images/Product Images/Rotatable 180 Socket Converter.jpg",
    productImage1: "./Images/toolsImages/Rotatable 180 Socket Converter-1.jpeg",
    productImage2: "./Images/toolsImages/Rotatable 180 Socket Converter-2.png",

    spcifications:
      "Insert material: high quality phosphor bronze. Use: Travel / Home / Office. Features:Support 180 degree adjustment. AC125V 15A Rating Voltage and Current, US plug 1 to 3 ways power socket. Usage Scenarios. It is very convenient for family use and for UPS, vehicle power supply, power supply cabinets, lighting equipment, communications cabinets and other power devices.",
    sku: "ST00008211548",
    category: allCategories.tools,

    tags: [tags.conventer, tags.diy, tags.socket, tags.tools, tags.tool],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Insert material: high quality phosphor bronze.</li>
              <li>Use: Travel / Home / Office.</li>
              <li>Features: Support 180 degree adjustment.</li>
              <li>AC125V 15A Rating Voltage and Current, US plug 1 to 3 ways power socket.</li>
              <li>Usage Scenarios.</li>
              <li>It is very convenient for family use and for UPS, vehicle power supply, power supply cabinets, lighting equipment, communications cabinets and other power devices.</li>
            </ol>`,
  },
  {
    productName: "SNAP N GRIP ADJUSTABLE WRENCH",
    coverImage: "./Images/Product Images/SNAP N GRIP ADJUSTABLE WRENCH.jpg",
    productImage1: "./Images/toolsImages/SNAP N GRIP ADJUSTABLE WRENCH-1.jpeg",

    unitPrice: 46.0,
    spcifications:
      "2 universal wrenches for all nuts and bolts. Lightweight and self-adjusting easily fits to all the bolts ranging from 9mm to 32mm. Automatically fits the size and shape of nuts and bolts. Snap n Grip is efficient and easy to use. No need for having multiple wrenches of different sizes as this handy set works great for all bolt shapes and sizes. Instant solution to your problems with taps, valves, pipes and piping, radiators boilers, wheels, etc.",
    sku: "ST000082454454",
    category: allCategories.tools,
    tags: [tags.bolt, tags.diy, tags.nut, tags.opener, tags.snap, tags.tools],
    discount: 4.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>2 universal wrenches for all nuts and bolts.</li>
              <li>Lightweight and self-adjusting easily fits to all the bolts ranging from 9mm to 32mm.</li>
              <li>Automatically fits the size and shape of nuts and bolts.</li>
              <li>Snap n Grip is efficient and easy to use.</li>
              <li>No need for having multiple wrenches of different sizes as this handy set works great for all bolt shapes and sizes.</li>
              <li>Instant solution to your problems with taps, valves, pipes and piping, radiators boilers, wheels, etc.</li>
            </ol> `,
  },
  {
    productName: "Windproof Blow Torch Lighter",
    productImage1: "./Images/toolsImages/Windproof Blow Torch Lighter-1.jpg",
    productImage2: "./Images/toolsImages/Windproof Blow Torch Lighter-2.jpg",
    productImage3: "./Images/toolsImages/Windproof Blow Torch Lighter-3.jpg",
    productImage4: "./Images/toolsImages/Windproof Blow Torch Lighter-4.jpeg",
    coverImage: "./Images/Product Images/Windproof Blow Torch Lighter.jpg",
    unitPrice: 10.0,
    spcifications:
      "Adjustableflow control valve. 100% Brand New and good quality. Material:Plastic. Color:Blue Green Brown Orange. BBQ Cooking Picnic Kitchen Tools. Design:Stylish. Personalized. Elegant",
    sku: "ST0000112154",
    category: allCategories.tools,

    tags: [
      tags.butane,
      tags.diy,
      tags.fire,
      tags.lighter,
      tags.tools,
      tags.torch,
    ],
    discount: 0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>Adjustableflow control valve.</li>
              <li>100% Brand New and good quality.</li>
              <li>Material:Plastic.</li>
              <li>Color:Blue Green Brown Orange.</li>
              <li>BBQ Cooking Picnic Kitchen Tools.</li>
              <li>Design: Stylish, Personalized & Elegant.</li>
            </ol>`,
  },
  {
    productName: "Buzz Magnets",
    coverImage: "./Images/Product Images/Buzz Magnets.jpg",
    productImage1: "./Images/ToyImages/Buzz Magnets-1.jpg",
    productImage2: "./Images/ToyImages/Buzz Magnets-2.jpg",
    productImage3: "./Images/ToyImages/Buzz Magnets-3.jpg",
    productImage4: "./Images/ToyImages/Buzz Magnets-4.jpg",
    productImage5: "./Images/ToyImages/Buzz Magnets-5.jpeg",
    unitPrice: 30.0,
    spcifications:
      "Great fun for all ages (not appropriate for children under 3), they are a relaxing fun stress reliever. Great for parties or kid play. Lightly toss in the air and they come together making a buzzing noise like an insect. They twirl, spin, dance and sing when tossed. They quickly scoot from different ends of the table as they come together buzzing and sizzling. Hours of enjoyment",
    sku: "ST00005724658",
    category: allCategories.toysAndGames,
    tags: [tags.buzzing, tags.fun, tags.joy, tags.magnet, tags.toys],
    discount: 0,
    descriptionAsHTML: `
          Features:
          <ol>
            <li>Buzz Magnets are polished, powerful magnets that are used as a stress reliever, relaxing and focusing tool.</li>
            <li>They make a great executive desktop gift and can be used as a paper weight.</li>
            <li>They can also be used for a science experiment or for magic tricks.</li>
          </ol>`,
  },
  {
    productName: "Dancing Cactus",
    coverImage: "./Images/Product Images/Dancing Cactus.jpg",
    productImage1: "./Images/ToyImages/Dancing Cactus-1.jpg",
    productImage2: "./Images/ToyImages/Dancing Cactus-2.jpg",
    productImage3: "./Images/ToyImages/Dancing Cactus-3.jpg",
    productImage4: "./Images/ToyImages/Dancing Cactus-4.jpg",
    productImage5: "./Images/ToyImages/Dancing Cactus-5.jpg",
    unitPrice: 50.0,
    spcifications:
      "This cactus dancing toy has a durable material and a very cute appearance design, which is very suitable for desktop decoration.Specifications:Filling material: PP cottonPlush classification: short plushIs it multifunctional: yesSize: 32cmType:Type 1: Three English songs on the battery versionType 2: 120 Chinese songs on the battery versionType 3: 120 Chinese songs on the rechargeable versionType 4: 120 Chinese songs on the rechargeable version plus learners’ talk (optional)Package Included:1 pc* Cactus Dancing ToyNotes:1. Please allow 0-1 inch error due to manual measurement. Thanks for your understanding.2. Monitors are not calibrated same, item color displayed in photos may be showing slightly different from real object",
    sku: "ST000082165454",
    category: allCategories.toysAndGames,

    tags: [tags.cactus, tags.dancing, tags.fun, tags.toys],
    discount: 15.0,
    descriptionAsHTML: `
            Features:
            <ol>
              <li>🌵Rechargeable And Cell Operated ( Both Variations available) , Select correct variation</li>
              <li>🌵 Update Dancing cactus plush toy: This toy comes with many different songs, mimicking, repeating and much more lovely and funny options.</li>
              <li>🌵 High-quality Material: This Dancing Cactus Toy uses non-toxic and harmless soft plush fabric, the fabric is comfortable and will not cause any harm, and children can play with confidence. The bottom of the rechargeable cactus toy is plastic, so it can stand firmly on the table.</li>
              <li>🌵 Artistic Design: cactus plant toy is designed with a cute cactus shape, and its unique creative design looks great. The Variant may play low number of song</li>
              <li>🌵Properties: Cactus Plush Toy is small in size and light in weight, very convenient to carry around.</li>
              <li>🌵Children perfect Partner: This rechargeable dancing cactus talking, will sway and sing cheerful songs, the best birthday/Christmas gift for children, friends and family.</li>
            </ol>`,
  },
  {
    productName:
      "Despicable Me - Minions Cartoon Soft Cuddly Plush/Stuffed Toy",
    coverImage:
      "./Images/Product Images/Despicable Me - Minions Cartoon Soft Cuddly PlushStuffed Toy.jpg",
    productImage1:
      "./Images/ToyImages/Despicable Me - Minions Cartoon Soft Cuddly PlushStuffed Toy-1.jpg",
    productImage2:
      "./Images/ToyImages/Despicable Me - Minions Cartoon Soft Cuddly PlushStuffed Toy-2.png",
    productImage3:
      "./Images/ToyImages/Despicable Me - Minions Cartoon Soft Cuddly PlushStuffed Toy-3.jpg",

    unitPrice: 25.0,
    spcifications:
      "Surface clean onlyKids will enjoy playing with this Toy. The plush toy has a cute expression on the face. The toy is constructed from Soft Boa material and is ideal for use in your little one’s nursery.Textured Super Sparkle accents100% Original Authentic ProductPremium QualityMade of high-grade soft plush.Your child can carry it anywhereEasily washableSuitable for ages 1 Premium Quality ImportedAttractive, Fun Toy To Play WithLovely Design And Vivid Colors Make It Easy To Catch Baby’s AttentionMaterial Soft, Skin-Friendly And Washable",
    sku: "ST000082568",
    category: allCategories.toysAndGames,
    tags: [tags.dispicable, tags.fun, tags.joy, tags.joy],
    discount: 0,
    descriptionAsHTML: `
              Features:
              <ol>
                <li>Surface clean only</li>
                <li>Kids will enjoy playing with this Toy. The plush toy has a cute expression on the face. The toy is constructed from Soft Boa material and is ideal for use in your little one’s nursery.</li>
                <li>Textured Super Sparkle accents</li>
                <li>100% Original Authentic Product</li>
                <li>Premium Quality</li>
                <li>Made of high-grade soft plush.</li>
                <li>Your child can carry it anywhere</li>
                <li>Easily washable</li>
                <li>Suitable for ages 1</li>
                <li>Premium Quality Imported</li>
                <li>Attractive, Fun Toy To Play With</li>
                <li>Lovely Design And Vivid Colors Make It Easy To Catch Baby’s Attention</li>
                <li>Material Soft, Skin-Friendly And Washable</li>
              </ol>`,
  },
  {
    productName: "Kinetic Sand",
    coverImage: "./Images/Product Images/Kinetic Sand.jpg",
    productImage1: "./Images/ToyImages/Kinetic Sand-1.jpg",
    productImage2: "./Images/ToyImages/Kinetic Sand-2.jpg",

    unitPrice: 30.0,
    spcifications:
      "Hours of Fun & Creative Play Kinetic Sand is the squishable, squeezable, stretchable play sand that mimics the feel of wet beach sand. Unleash your imagination to slice, shape, and sculpt anything from sandcastles to skyscrapers, abstract forms to animal figures… and everything in between! Build. Re-shape. Repeat. Press, pack, and pull Kinetic Sand all day, every day—it never dries out! Mix and mold it, construct and carve it then start all over again to make something new. Kids ages 3 to 103 will love this squishy, absurdly addictive magical play sand! Mess-free Fun Let the mesmerizing, molten-like sensory sand flow through your hands! The super-tactile Kinetic Sand sticks only to itself—not to you, your clothes, or other materials—making cleanup a breeze. Kinetic Sand is the ultimate in mess-free fun! Safe and Non-Toxic Formula Kinetic Sand is safe for everyone! Composed of 98% natural sand and 2% polymer wax, it’s 100% non-toxic and gluten free, and specially designed for kids ages 3 and up. Get Kinetic Sand today and start creating an endless array of shapes and figures!",
    sku: "ST0000554564",
    category: allCategories.toysAndGames,
    tags: [tags.fun, tags.joy, tags.kinetic, tags.mold, tags.sand, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                Features:
                <ol>
                  <li>KINETIC SAND IS MOLDABLE: Sticks only to itself and not to you or your clothes, and doesn’t dry out, when molding, slicing and shaping it, leaving it shapeable for years. Now offering refill packages for even more creative fun. It’s the “wet” squeezable sand where you can FEEL the fun!</li>
                  <li>STIMULATE KIDS CREATIVE SKILLS: Kinetic sand is an educational and sensory toy kit, where kids can make just what they wish! Pack it, pull it, shape it, cut it, mold it and love it! This mold-able play sand is so incredible you can’t put it down.</li>
                  <li>MULTIPLE COLOR FOR MULTIPLE FUN: This pack comes with multiple color to fit multiple themes and model. Never dries out for hours of creative play.</li>
                  <li>SOLO OR GROUP FUN: Make hours of fun with your little ones or keep them busy for hours playing with the soft, and colorful playsand together with their friends. This refill pack comes with multiple vibrant color to fit multiple themes and model. Never dries out for hours of creative play for them to build.</li>
                  <li>RELAXING AND CALMING: This sand is a way to relax and de-stress for all ages. No matter how you play with it, whether molding it, cutting it, of letting it flow through your fingers, it is a great way to relax and can be used as a fidget toy.</li>
                </ol>`,
  },
  {
    productName: "Magic Slinky Rainbow Spring",
    coverImage: "./Images/Product Images/Magic Slinky Rainbow Spring.jpg",
    productImage1: "./Images/ToyImages/Magic Slinky Rainbow Spring-1.jpeg",
    productImage2: "./Images/ToyImages/Magic Slinky Rainbow Spring-2.png",
    productImage3: "./Images/ToyImages/Magic Slinky Rainbow Spring-3.jpg",
    productImage4: "./Images/ToyImages/Magic Slinky Rainbow Spring-4.jpg",
    productImage5: "./Images/ToyImages/Magic Slinky Rainbow Spring-5.jpg",
    unitPrice: 22.0,
    spcifications:
      "Vividly Coloured Flexible Springs.Bring Lots Of Fun For Whole Family. Made Of Lightweight Rainbow Coloured Plastic. Suitable For Ages 3.",
    sku: "ST000033565456",
    category: allCategories.toysAndGames,
    tags: [tags.bounce, tags.fun, tags.joy, tags.spring, tags.toys],
    discount: 2.0,
    descriptionAsHTML: `
                  Features:
                  <ol>
                    <li>Vivid looking multi-color blend through each coiled plastic toy</li>
                    <li>Perfect for party bags for children when you are looking for fun things to fill those favor bags that are not too expensive. As well made as you would expect at this price point</li>
                    <li>Made with high-quality plastic and other materials to keep on walking without bending or snapping. It is lead and BPA free, a harmless miniature for your little ones. Great for kids 3 </li>
                    <li>Calming, Relaxing, Focus, Concentration toys, Classroom Box, Easter Basket, Planner Party Supplies, Treasure Chest Box, For Children Kids boys or Girls & Adults</li>
                    <li>This classic toy will impress your kids and their friends keeping them busy for endless hours of fun</li>
                    <li>Everyone will have a blast playing with this magic spring toy</li>
                    <li>Buy and watch them race down the stairs!</li>
                  </ol>`,
  },
  {
    productName: "Mesh Squish Ball",
    coverImage: "./Images/Product Images/Mesh Squish Ball.jpg",
    productImage1: "./Images/ToyImages/Mesh Squish Ball-1.jpg",
    productImage2: "./Images/ToyImages/Mesh Squish Ball-2.jpeg",
    productImage3: "./Images/ToyImages/Mesh Squish Ball-3.jpg",
    productImage4: "./Images/ToyImages/Mesh Squish Ball-4.jpeg",
    productImage5: "./Images/ToyImages/Mesh Squish Ball-5.jpg",
    unitPrice: 25.0,
    spcifications:
      "100% Brand New and Good Quality Stuff. Grape ball/ Stress Ball can be randomly squeeze to any shape. Helping you relax your hands and promote the blood circulation in your palm. Interesting grape ball style can stress relieving when you squeeze toy to any dimension. Whether your kid wants to just have a really fun toy or is in need of a way to handle his sensory issues, these mesh balls can really help for a kid with AUTISM, ADHD, ADD & ANXIETY. Made of environmentally soft rubber and liquid filler, don’t squeeze the same part for a long time or use a sharp thing to stab it. Color: Assorted (Random Color)",
    sku: "ST00002454835",
    category: allCategories.toysAndGames,
    tags: [tags.balls, tags.fun, tags.joy, tags.squish, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                    Features:
                    <ol>
                      <li>
  
                      EXCLUSIVE SEWN MESH BALL No more plastic clips holding the netting down thereby avoiding the mesh falling off after a few squeezes. Additionally since plastic tie is eliminated there is no more rough and dangerous ends poking out.
                  
                  </li>
                      <li>
                      100% SATISFACTION GUARANTEE If for any reason you are not fully satisfied please let us know so we can make it right!
                  </li>
                      <li>
                      ⭐⭐PLEASE NOTE. We do guarantee much better quality overall. HOWEVER please understand that in order for these balls to emerge through the mesh they need to be a certain material. After extended play THEY WILL eventually leak. If this is a problem for you than PLEASE DO NOT BUY:)⭐⭐
                      </li>
                      <li>Comes with 4 colors <br/>🔵Blue 🟢Green 🟠Orange 🟡Yellow </li>
                      <li>PREMIUM SUPERIOR QUALITY-When we write top notch quality we really mean it. Our product has been continuously tested until the best sewing technique has been discovered and utilized. The mesh netting will stay in place and last for many many squeezes!</li>
                      <li>
                      THE ULTIMATE AND PROVEN STRESS RELIEF– Mesh squeeze balls have been around for quite a while. There is a reason for that. Using our mesh balls in any stressful environment can greatly release harmful stress whether it is for a kid who needs a healthy outlet or an adult who is having a stressful day at work.
                  </li>
                      </ol>`,
  },
  {
    productName: "Monopoly Global Village Property",
    coverImage: "./Images/Product Images/Monopoly Global Village Property.jpg",
    productImage1: "./Images/ToyImages/Monopoly Global Village Property-1.jpg",
    productImage2: "./Images/ToyImages/Monopoly Global Village Property-2.jpg",
    productImage3: "./Images/ToyImages/Monopoly Global Village Property-3.jpg",

    unitPrice: 50.0,
    spcifications:
      "Fast Dealing Property Trading Game. Compact in size, easy to take along on holiday. Tour the city for the hottest properties, sites, airports and lots more up for grabs. It will most certainly entertain two and six players from ages 8 and upwards.It will most certainly entertain two and six players from ages 8 and upwards. Will keep players busy and intrigued for hours. Monopoly games have been entertaining families and people love the roller-coaster ride to success. Pass Go, take a Chance card, and you might just build the property of your dreams or you might end up in Jail! Whatever happens, it’s fun all the way to the top. Gameboard, 6 token, 28 Title Deed cards. 16 Change cards, 16 Community Chest cards. 1 pack monopoly. 32 house , 12 hotel. 2 dice 1 Dice Counter.",
    sku: "ST0147548733",
    category: allCategories.toysAndGames,
    tags: [tags.fun, tags.monoply, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                      Features:
                      <ol>
                        <li>Fast Dealing Property Trading Game. Compact in size, easy to take along on holiday.</li>
                        <li>Tour the city for the hottest properties, sites, airports and lots more up for grabs.</li>
                        <li>It will most certainly entertain two and six players from ages 8 and upwards.</li>
                        <li>Will keep players busy and intrigued for hours.</li>
                        <li>Monopoly games have been entertaining families and people love the roller-coaster ride to success.</li>
                        <li>Pass Go, take a Chance card, and you might just build the property of your dreams or you might end up in Jail! Whatever happens, it’s fun all the way to the top!</li>
                        <li>Gameboard, 6 token, 28 Title Deed cards,</li>
                        <li>16 Change cards, 16 Community Chest cards,</li>
                        <li>1 pack monopoly</li>
                        <li>32 house , 12 hotel</li>
                        <li>2 dice 1 Dice Counter.</li>
                      </ol>`,
  },
  {
    productName: "Orbeez Soft Crystal Water Balls",
    coverImage: "./Images/Product Images/Orbeez Soft Crystal Water Balls.jpg",
    productImage1: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-1.jpg",
    productImage2: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-2.jpg",
    productImage3: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-3.jpg",
    productImage4: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-4.jpg",
    productImage5: "./Images/ToyImages/Orbeez Soft Crystal Water Balls-5.png",
    unitPrice: 45.0,
    spcifications:
      "Product details Colored Orbeez Soft Crystal Water Balls Magic Also Use In Decoration Table Plants And Many MoreHydrogel BallsGrowing Water balls,Beads Crystal GelWater PearlsAqua Jelly Beads Grow,Water Growing balls,Many uses for decoration for weddings, showers,centerpiecesIdeal for candle,silk cut flower arrangements,centerpieces and more.Less expensive and more attractive than marbles or stonesIdeal for home decor,crafts,floral departments and more",
    sku: "ST00007758750001",
    category: allCategories.toysAndGames,
    tags: [tags.balls, tags.fun, tags.joy, tags.orbeez, tags.toys, tags.water],
    discount: 0,
    descriptionAsHTML: `
                        Features:
                        <ol>
                          <li>Hydrogel Balls</li>
                          <li>Growing Water balls</li>
                          <li>Beads Crystal Gel</li>
                          <li>Water Pearls</li>
                          <li>Aqua Jelly Beads Grow</li>
                          <li>Water Growing balls</li>
                          <li>Many uses for decoration for weddings, showers,centerpieces</li>
                          <li>Ideal for candle,silk cut flower arrangements,centerpieces and more</li>
                          <li>Less expensive and more attractive than marbles or stones</li>
                          <li>Ideal for home decor,crafts,floral departments and more</li>
                        </ol>`,
  },
  {
    productName: "Projector Painting Drawing Table Set for Kids",
    coverImage:
      "./Images/Product Images/Projector Painting Drawing Table Set for Kids.jpg",
    productImage1:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-1.jpg",
    productImage2:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-2.jpg",
    productImage3:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-3.jpg",
    productImage4:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-4.jpg",
    productImage5:
      "./Images/ToyImages/Projector Painting Drawing Table Set for Kids-5.jpg",
    unitPrice: 60.0,
    spcifications:
      "【Kids Trace and Draw Projector Toy】 Project an image on the board and then your child can draw along the picture, and then copy images onto paper. Children are naturally fond of graffiti, which can enable them to develop creativity in all aspects of creation. ATTRACTIVE & INNOVATIVE:draw and paint while having fun. Attractive and durable intelligent toy, modern and elegant in fashion, light projector innovative technology. SAFE & DURABLE MATERIAL: Made of high-quality ABS material, smooth edge and surface will not hurt your baby’s hand. Non- toxic paintbrush, can be used with complete confidence",
    sku: "ST0000851567498",
    category: allCategories.toysAndGames,
    tags: [tags.draw, tags.fun, tags.joy, tags.projector, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                          Features:
                          <ol>
                            <li>✅ Great Educational Toy</li>
                            <li>✅ Promoting Creativity And Imagination</li>
                            <li>✅ Band of Colors</li>
                            <li>✅ Color: Blue / Pink</li>
                            <li>✅ Dimensions: 35.5cm*21cm*25cm</li>
                            <li>✅ Battery: powered by 2 AA batteries (bring your own)</li>
                            <li>✅ Suitable Age:3</li>
                            <li>✅ Notice: Comes with 1 x Projector Table, 1 x Drawing Book, 12 x Water Pen, 1 x Eraser, 3 x Stencils., 24 Pattern</li>
                          </ol>`,
  },
  {
    productName: "Pull Back Mini Auto Super Power Car Set",
    coverImage:
      "./Images/Product Images/Pull Back Mini Auto Super Power Car Set.jpg",
    productImage1:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-1.jpg",
    productImage2:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-2.jpg",
    productImage3:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-3.jpg",
    productImage4:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-4.jpg",
    productImage5:
      "./Images/ToyImages/Pull Back Mini Auto Super Power Car Set-5.png",
    unitPrice: 40.0,
    spcifications:
      "Design: Bright colors and realistic details. Easy to use: Just pull them back and watch them go. Benefits: Car toys encourage imaginative play and reduce screen time. Collectibles: Compatible with playsets in the Turbocharge series. Size: Toy cars measure 3.0 (L) x 1.25 (W) x 1.0 (H) inches approximately. Batteries: None required. Age: Recommended for 3 year olds and up",
    sku: "ST0000548748",
    category: allCategories.toysAndGames,
    tags: [tags.car, tags.fun, tags.racing, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                            Features:
                            <ol>
                              <li>100% Brand New Original Package And High Quality</li>
                              <li>100% Same As Pics</li>
                              <li>Body: Metal</li>
                              <li>Multi Colors</li>
                              <li>Size : 5 X 4 Cm</li>
                              <li>Features Super-Realistic Design</li>
                              <li>Interesting And A Must Have Reasonable Toy</li>
                              <li>Safe For Children Above Three Years Of Age</li>
                              <li>Pull Back & Self-Rotating</li>
                              <li>Includes Colorful Box</li>
                              <li>Very Useful Item For Gift</li>
                            </ol>`,
  },
  {
    productName: "Reversible Octopus Plush",
    coverImage: "./Images/Product Images/Reversible Octopus Plush.jpg",
    productImage1: "./Images/ToyImages/Reversible Octopus Plush-1.jpg",
    productImage2: "./Images/ToyImages/Reversible Octopus Plush-2.jpg",
    productImage3: "./Images/ToyImages/Reversible Octopus Plush-3.jpg",
    productImage4: "./Images/ToyImages/Reversible Octopus Plush-4.jpg",
    productImage5: "./Images/ToyImages/Reversible Octopus Plush-5.jpg",
    unitPrice: 12.0,
    spcifications:
      "Cute and soft plush doll with realistic expression, clear outline and lifelike.The unique flip design provides you with different visual and sensory experiences. This is a great children’s toy, birthday gift, Valentine’s day gift, Christmas gift. Size:10×20 cm. Color:12 color to choose. Age:Fit for 3-14 years kids. Package list:1 x Octopus doll.",
    sku: "ST000011533859",
    category: allCategories.toysAndGames,
    tags: [tags.fun, tags.joy, tags.plush, tags.reversable, tags.toys],
    discount: 1.5,
    descriptionAsHTML: `
                              Features:
                              <ol>
                                <li>Size: 20 cms * 10 cms</li>
                                <li>Design: Octopus</li>
                                <li>Colour: Mixed Color Multi Color</li>
                                <li>The product is safe and non-toxic, it is not easy to remove hair, the color is full, and the feel is comfortable</li>
                                <li>Cute and soft plush doll with realistic expression, clear outline and lifelike</li>
                                <li>The unique flip design provides you with different visual and sensory experiences. : easy to , use a small amount of soap and water to remove stains, and dry naturally.</li>
                                <li>This is a great children’s toy, birthday gift, Valentine’s day gift, Christmas gift.</li>
                              </ol>`,
  },
  {
    productName: "Rubiks Cube 3×3",
    coverImage: "./Images/Product Images/Rubiks Cube 3x3.jpg",
    productImage1: "./Images/ToyImages/Rubiks Cube 3x3-1.jpg",
    productImage2: "./Images/ToyImages/Rubiks Cube 3x3-2.jpg",

    unitPrice: 20.0,
    spcifications:
      "The product is totally environment friendly and non-toxic at all. Rubiks Cube is considered as most effective game for the kids as well as for adults. The complexity level of the cube is great. The product is more eye catching for the population due to increased complexity level in the cube as it is 3×3. It is more complex and most helpful for the kids to increase their level of mentality and intellectuality. No one falls out of love with the speed cube. They are always awesome for both kids and adults, you can take them anywhere. Need something for your kids to do in the car or on the airplane. This 3×3 cube can foster your kid’s sense of space and enhance a child’s memory. It is a classic color-matching puzzle in which the color shift making it look like a mess, but once you solve it, it magically becomes perfect cube again.",
    sku: "ST000082154543",
    category: allCategories.toysAndGames,
    tags: [tags.cube, tags.educational, tags.fun, tags.rubik, tags.toys],
    discount: 0,
    descriptionAsHTML: `
                                Features:
                                <ol>
                                  <li>Rubiks cube 3×3 high quality</li>
                                  <li>Made of eco-friendly material</li>
                                  <li>Tatally sticker less 3×3 rubiks cube</li>
                                  <li>Smooth and speedy</li>
                                  <li>Standard large size of 5.5 cm x 5.5 cm</li>
                                  <li>Attractive multicolor</li>
                                  <li>Creative and developmental</li>
                                  <li>Mental growing</li>
                                  <li>Best for kids, teens and adults</li>
                                </ol>`,
  },
  {
    productName: "Smile Face Stress Balls",
    coverImage: "./Images/Product Images/Smile Face Stress Balls.png",
    productImage1: "./Images/ToyImages/Smile Face Stress Balls-1.jpg",
    productImage2: "./Images/ToyImages/Smile Face Stress Balls-2.jpg",
    productImage3: "./Images/ToyImages/Smile Face Stress Balls-3.jpg",
    productImage4: "./Images/ToyImages/Smile Face Stress Balls-4.jpg",

    unitPrice: 20.0,
    spcifications:
      "A stress ball is a malleable toy, usually not more than 7cmin diameter, which is squeezed in the hand and manipulated by the fingers, ostensibly to relieve stress and muscle tension or to exercise the muscles of the hand. Despite the name, many stress balls are not spherical. Some are molded in amusing shapes, and pad- or transfer-printed with corporate logos. They are presented to employees and clients of companies as promotional gifts. Stress balls are the third most popular promotional gift in the United Kingdom. Because of the many non-spherical shapes now available, stress balls are generically known as stress relievers.",
    sku: "ST000082169556",
    category: allCategories.toysAndGames,
    tags: [
      tags.fun,
      tags.joy,
      tags.smily,
      tags.squishable,
      tags.stress,
      tags.toys,
    ],
    discount: 0,
    descriptionAsHTML: `
                                  Features:
                                  <ol>
                                    <li>Ideal for exercise of hands</li>
                                    <li>Flexible and elegant</li>
                                    <li>Fit to release your stress</li>
                                    <li>Toy for emoji lover kids</li>
                                  </ol>`,
  },
  {
    productName: "Sticky Spider Man Climbing Wall Toy",
    coverImage:
      "./Images/Product Images/Sticky Spider Man Climbing Wall Toy.jpg",
    productImage1:
      "./Images/ToyImages/Sticky Spider Man Climbing Wall Toy-1.jpg",
    productImage2:
      "./Images/ToyImages/Sticky Spider Man Climbing Wall Toy-2.jpg",
    productImage3:
      "./Images/ToyImages/Sticky Spider Man Climbing Wall Toy-3.png",
    productImage4:
      "./Images/ToyImages/Sticky Spider Man Climbing Wall Toy-4.jpg",

    unitPrice: 10.0,
    spcifications:
      "Stickiness: If you are on a cabinet, door, wall or glass, you will automatically do a difficult scrolling down like Spider-Man,Without falling. Beautiful: Cute vivid color design will make tfinished products effect mfashion and eye-catching. Educational ability: Training kids imagination, eye-hand coordination and color shape recognition. Color: random. Material: plastic",
    sku: "ST000034739",
    category: allCategories.toysAndGames,
    tags: [tags.climb, tags.fun, tags.joy, tags.man, tags.spider, tags.toys],
    discount: 0,
    descriptionAsHTML: `
      Features:
      <ol>
        <li>Automatically Wall climbing</li>
        <li>Great fun Kids</li>
        <li>Reusable</li>
      </ol>`,
  },
];

const reviewsSlides = [
  `<div class="swiper-slide testimonials-col homepage">
<div class="person">
  <i class="bi bi-person-circle"></i>
  <h4>Darin Bass</h4>
</div>

<p>
  Fastest Delivery and Quick Response!
</p>
<div class="review-stars">
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star"></i>
</div>
</div>`,
  `   <div class="swiper-slide testimonials-col homepage">
  <div class="person">
    <i class="bi bi-person-circle"></i>
    <h4>Jenifer Smith</h4>
  </div>

  <p>
    Love The Baby Product, Will Buy Again!
  </p>
  <div class="review-stars">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
  </div>
</div>`,
  `  <div class="swiper-slide testimonials-col homepage">
  <div class="person">
    <i class="bi bi-person-circle"></i>
    <h4>Milissa Pittman</h4>
  </div>
  <p>
    Unmatched Prices :)
  </p>
  <div class="review-stars">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
  </div>
</div>`,
  `<div class="swiper-slide testimonials-col homepage">
  <div class="person">
    <i class="bi bi-person-circle"></i>
    <h4>Deanna Lawson</h4>
  </div>
  <p>
    Easy Return and Realiable
  </p>
  <div class="review-stars">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-half"></i>
    <i class="bi bi-star"></i>
  </div>
</div>`,
  `   <div class="swiper-slide testimonials-col homepage">
  <div class="person">
    <i class="bi bi-person-circle"></i>
    <h4>Jamie Hawkins</h4>
  </div>
  <p>
    Love the Office Products
  </p>
  <div class="review-stars">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-half"></i>
  </div>
</div>
`,
  `  <div class="swiper-slide testimonials-col homepage">
  <div class="person">
    <i class="bi bi-person-circle"></i>
    <h4>Gilbert Dan</h4>
  </div>
  <p>
    The Quality of the Products is Awesome.
  </p>
  <div class="review-stars">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
  </div>
</div>
`,
  `    <div class="swiper-slide testimonials-col homepage">
  <div class="person">
    <i class="bi bi-person-circle"></i>
    <h4>James Robert</h4>
  </div>
  <p>
    Thanks so much, Will…look forward to buying more product from you!
  </p>
  <div class="review-stars">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-half"></i>
  </div>
</div>`,
  `  <div class="swiper-slide testimonials-col homepage">
  <div class="person">
    <i class="bi bi-person-circle"></i>
    <h4>Ricardo Alexis</h4>
  </div>
  <p>
    Outstanding and super quick service, Would absolutely recommend!
  </p>
  <div class="review-stars">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
  </div>
</div>`,
  `
  <div class="swiper-slide testimonials-col homepage">
    <div class="person">
      <i class="bi bi-person-circle"></i>
      <h4>Christopher Ron</h4>
    </div>
    <p>
      Go For Mart is the Real Mart.
    </p>
    <div class="review-stars">
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill "></i>
      <i class="bi bi-star-fill"></i>
    </div>
  </div>`,
];
