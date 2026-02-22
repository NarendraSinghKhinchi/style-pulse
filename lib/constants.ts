export const BRANDS = [
  { name: "Versace", logo: "/brands/versace.svg" },
  { name: "Zara", logo: "/brands/zara.svg" },
  { name: "Gucci", logo: "/brands/gucci.svg" },
  { name: "Prada", logo: "/brands/prada.svg" },
  { name: "Calvin Klein", logo: "/brands/calvin-klein.svg" },
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  verified: boolean;
  text: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  images?: string[];
  description: string;
  category: string;
  discount?: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  reviews?: Review[];
  faqs?: FAQ[];
  specifications?: Specification[];
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "One Life Graphic T-shirt",
    price: 260,
    originalPrice: 300,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1549063523-8758397a2334?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549063523-8758397a2334?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    category: "New Arrivals",
    discount: "-40%",
    colors: [
      { name: "Olive", hex: "#4F5339" },
      { name: "Cyan", hex: "#314F4F" },
      { name: "Navy", hex: "#31344F" }
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: "1",
        name: "Samantha D.",
        rating: 5,
        verified: true,
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: "August 14, 2023"
      },
      {
        id: "2",
        name: "Alex M.",
        rating: 5,
        verified: true,
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being an AI designer myself, I'm quite picky about aesthetics, and this shirt definitely gets a thumbs up from me.",
        date: "August 15, 2023"
      },
      {
        id: "3",
        name: "Ethan R.",
        rating: 4,
        verified: true,
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        date: "August 16, 2023"
      },
      {
        id: "4",
        name: "Olivia P.",
        rating: 5,
        verified: true,
        text: "As a UI/UX designer, I value simplicity and functionality. This t-shirt not only represents those principles but also looks great when I'm working.",
        date: "August 17, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "What material is this t-shirt made from?",
        answer: "This t-shirt is made from 100% premium cotton, which is soft, breathable, and durable. It's perfect for everyday wear and maintains its quality wash after wash."
      },
      {
        id: "2",
        question: "How should I care for this t-shirt?",
        answer: "Wash in cold water with similar colors. Tumble dry on low heat or hang dry to preserve the graphic print. Avoid bleach and iron on reverse side only if needed."
      },
      {
        id: "3",
        question: "What's the fit like?",
        answer: "This t-shirt has a classic, regular fit. It's not too tight or too loose, making it comfortable for most body types. See our size guide for detailed measurements."
      },
      {
        id: "4",
        question: "Is this product eco-friendly?",
        answer: "Yes! We use sustainable cotton sourced from certified farms, and our printing process uses water-based, non-toxic inks that are environmentally friendly."
      }
    ],
    specifications: [
      { label: "Material", value: "100% Premium Cotton" },
      { label: "Weight", value: "150 - 180 gsm" },
      { label: "Fit", value: "Classic Regular Fit" },
      { label: "Care", value: "Machine wash cold, hang dry" },
      { label: "Shrinkage", value: "Pre-shrunk, minimal shrinkage" },
      { label: "Certification", value: "OEKO-TEX Standard 100 Certified" }
    ]
  },
  {
    id: "2",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    description: "Classic skinny fit jeans that provide both style and comfort. Perfect for everyday wear.",
    category: "New Arrivals",
    discount: "-20%",
    colors: [{ name: "Blue", hex: "#1e3a8a" }],
    sizes: ["28", "30", "32", "34"],
    reviews: [
      {
        id: "1",
        name: "Marcus L.",
        rating: 4,
        verified: true,
        text: "Great fit and comfortable throughout the day. The denim feels quality and the color is true to the photos. Highly recommend!",
        date: "August 20, 2023"
      },
      {
        id: "2",
        name: "Jessica H.",
        rating: 3,
        verified: true,
        text: "Good jeans but took a while to break in. After a few wears, they became much more comfortable. Perfect for casual outings.",
        date: "August 21, 2023"
      },
      {
        id: "3",
        name: "David C.",
        rating: 4,
        verified: true,
        text: "Love the color and the fit is exactly as described. Great value for the price.",
        date: "August 22, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "Do these jeans shrink after washing?",
        answer: "Minimal shrinkage expected. We recommend sizing according to our size guide. For best results, wash in cold water and hang dry."
      },
      {
        id: "2",
        question: "Are these 100% cotton?",
        answer: "These jeans are made from 98% cotton and 2% elastane for stretch and comfort. The elastane helps them maintain their shape and recover from stretching."
      },
      {
        id: "3",
        question: "How long do these jeans typically last?",
        answer: "With proper care, these jeans can last 2-3 years or longer. The quality denim and reinforced stitching ensure durability with regular wear and washing."
      }
    ],
    specifications: [
      { label: "Material", value: "98% Cotton, 2% Elastane" },
      { label: "Weight", value: "12 oz Denim" },
      { label: "Fit", value: "Skinny Fit" },
      { label: "Rise", value: "Mid-Rise" },
      { label: "Care", value: "Machine wash cold inside out, air dry" },
      { label: "Inseam Options", value: "Multiple length options available" }
    ]
  },
  {
    id: "3",
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1000&auto=format&fit=crop",
    description: "A stylish checkered shirt that's perfect for casual and semi-formal occasions.",
    category: "New Arrivals",
    colors: [{ name: "Red/White", hex: "#ef4444" }],
    sizes: ["Small", "Medium", "Large"],
    reviews: [
      {
        id: "1",
        name: "Ryan T.",
        rating: 5,
        verified: true,
        text: "Perfect shirt for work and casual wear. The checkered pattern looks sharp and the quality is excellent. Very satisfied with this purchase.",
        date: "August 23, 2023"
      },
      {
        id: "2",
        name: "Sophie B.",
        rating: 4,
        verified: true,
        text: "Love the colors and the fit. It's versatile and can be dressed up or down. My only note is the sleeves could be a bit shorter.",
        date: "August 24, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "Is this shirt suitable for work?",
        answer: "Absolutely! This checkered shirt is perfect for business casual environments. Pair it with neutral trousers for a professional look."
      },
      {
        id: "2",
        question: "What's the collar type?",
        answer: "This shirt features a classic pointed collar that works well for a variety of occasions and style preferences."
      },
      {
        id: "3",
        question: "Can it be ironed?",
        answer: "Yes, this shirt can be ironed. Use medium heat and iron on the reverse side for best results. It also has minimal wrinkles straight from the wash."
      }
    ],
    specifications: [
      { label: "Material", value: "100% Cotton" },
      { label: "Weave", value: "Checkered Pattern" },
      { label: "Collar Type", value: "Classic Pointed Collar" },
      { label: "Sleeves", value: "Long Sleeves" },
      { label: "Care", value: "Machine wash warm, dry clean safe" },
      { label: "Fit", value: "Slim to Regular Fit" }
    ]
  },
  {
    id: "4",
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop",
    description: "A trendy t-shirt with sleeve stripes for a sporty and modern look.",
    category: "New Arrivals",
    discount: "-30%",
    colors: [{ name: "Black", hex: "#000000" }],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: "1",
        name: "Chris M.",
        rating: 5,
        verified: true,
        text: "Great t-shirt with a sporty vibe. The sleeve stripes add a nice touch. Fabric quality is really good for the price.",
        date: "August 25, 2023"
      },
      {
        id: "2",
        name: "Nina R.",
        rating: 4,
        verified: true,
        text: "Love how versatile this shirt is. Comfortable fit and the design is modern without being too trendy.",
        date: "August 26, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "What occasion is this shirt good for?",
        answer: "This shirt is perfect for casual, sporty, and athletic settings. It's great for gym, casual outings, or layering under jackets."
      },
      {
        id: "2",
        question: "Is the stripe pattern durable?",
        answer: "Yes, the stripe pattern is screen-printed with high-quality inks that are resistant to fading, even with regular washing."
      }
    ],
    specifications: [
      { label: "Material", value: "100% Premium Cotton" },
      { label: "Weight", value: "160 gsm" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Sleeve Style", value: "Short Sleeves with Striping" },
      { label: "Care", value: "Machine wash cold, tumble dry low" },
      { label: "Print Type", value: "Screen-printed graphics" }
    ]
  },
  {
    id: "5",
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    description: "Elegant vertical striped shirt that elongates your silhouette and adds a touch of sophistication.",
    category: "Top Selling",
    discount: "-20%",
    colors: [{ name: "Green/White", hex: "#166534" }],
    sizes: ["Medium", "Large", "X-Large"],
    reviews: [
      {
        id: "1",
        name: "Victoria L.",
        rating: 5,
        verified: true,
        text: "This shirt is absolutely stunning! The vertical stripes create such a flattering silhouette. Perfect for both casual and semi-formal occasions.",
        date: "August 27, 2023"
      },
      {
        id: "2",
        name: "Thomas K.",
        rating: 5,
        verified: true,
        text: "Excellent quality and the color combination is beautiful. The fabric drapes nicely and feels premium. Worth every penny!",
        date: "August 28, 2023"
      },
      {
        id: "3",
        name: "Amanda W.",
        rating: 5,
        verified: true,
        text: "Love how sophisticated this looks. The green and white combination is timeless and elegant.",
        date: "August 29, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "Do vertical stripes really elongate the silhouette?",
        answer: "Yes! Vertical stripes create an optical illusion that makes the wearer appear taller and slimmer. It's a classic styling trick."
      },
      {
        id: "2",
        question: "What's the fabric composition?",
        answer: "This shirt is made from a cotton-linen blend (70% cotton, 30% linen), which provides breathability and a sophisticated drape."
      },
      {
        id: "3",
        question: "Can it be worn in summer?",
        answer: "Absolutely! The linen blend makes it lightweight and breathable, making it perfect for warm weather while maintaining an elegant look."
      }
    ],
    specifications: [
      { label: "Material", value: "70% Cotton, 30% Linen" },
      { label: "Weight", value: "140 gsm" },
      { label: "Fit", value: "Elegant Slim Fit" },
      { label: "Pattern", value: "Vertical Stripes" },
      { label: "Care", value: "Machine wash warm, hang dry" },
      { label: "Breathability", value: "Highly breathable, ideal for warm weather" }
    ]
  },
  {
    id: "6",
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
    description: "Show your brave side with our Courage Graphic T-shirt. Soft cotton and a bold print.",
    category: "Top Selling",
    colors: [{ name: "Orange", hex: "#f97316" }],
    sizes: ["Small", "Medium", "Large"],
    reviews: [
      {
        id: "1",
        name: "Jordan P.",
        rating: 4,
        verified: true,
        text: "Bold and vibrant design! The orange color is striking and the shirt quality is great. Perfect for making a statement.",
        date: "August 30, 2023"
      },
      {
        id: "2",
        name: "Bella S.",
        rating: 4,
        verified: true,
        text: "Love the confidence this shirt gives! The graphic is well-printed and the fabric is comfortable.",
        date: "August 31, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "What does the graphic represent?",
        answer: "The 'Courage' graphic is an inspiring design meant to motivate and empower the wearer. It's a statement piece for the bold and brave."
      },
      {
        id: "2",
        question: "Is the color lightfast?",
        answer: "Yes, the orange dye is high-quality and lightfast. With proper care, the color will remain vibrant for years to come."
      }
    ],
    specifications: [
      { label: "Material", value: "100% Premium Cotton" },
      { label: "Weight", value: "180 gsm" },
      { label: "Fit", value: "Regular Fit" },
      { label: "Print", value: "Bold Courage Graphic" },
      { label: "Care", value: "Wash inside out, cold water, air dry" },
      { label: "Color", value: "Vibrant Orange" }
    ]
  },
  {
    id: "7",
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=1000&auto=format&fit=crop",
    description: "Comfortable and breezy bermuda shorts for those hot summer days.",
    category: "Top Selling",
    colors: [{ name: "Khaki", hex: "#f0e68c" }],
    sizes: ["30", "32", "34", "36"],
    reviews: [
      {
        id: "1",
        name: "Michael G.",
        rating: 3,
        verified: true,
        text: "Good shorts for summer, comfortable fit. The color is accurate and they're true to size. Good value.",
        date: "September 1, 2023"
      },
      {
        id: "2",
        name: "Lauren J.",
        rating: 3,
        verified: true,
        text: "Perfect for beach trips and casual summer wear. They tend to wrinkle a bit, but nothing that can't be fixed with a quick iron.",
        date: "September 2, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "What length are these shorts?",
        answer: "These are classic Bermuda length, hitting just above the knee. They're perfect for a smart-casual look."
      },
      {
        id: "2",
        question: "Are they suitable for all body types?",
        answer: "Yes! The loose fit is designed to be comfortable for various body types. The knee-length style is flattering and versatile."
      }
    ],
    specifications: [
      { label: "Material", value: "100% Cotton" },
      { label: "Length", value: "Bermuda (Above Knee)" },
      { label: "Fit", value: "Loose Relaxed Fit" },
      { label: "Pocket Style", value: "Side pockets and back pockets" },
      { label: "Care", value: "Machine wash warm, tumble dry" },
      { label: "Weight", value: "6-7 oz" }
    ]
  },
  {
    id: "8",
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
    description: "Faded skinny jeans that give you that perfect lived-in look and feel.",
    category: "Top Selling",
    colors: [{ name: "Light Blue", hex: "#add8e6" }],
    sizes: ["28", "30", "32", "34"],
    reviews: [
      {
        id: "1",
        name: "Kevin N.",
        rating: 5,
        verified: true,
        text: "Love the faded look - it's exactly what I wanted. Great fit and the quality is excellent. These jeans are my new favorite pair.",
        date: "September 3, 2023"
      },
      {
        id: "2",
        name: "Rachel E.",
        rating: 4,
        verified: true,
        text: "Perfect vintage vibe! The fading is authentic-looking and the jeans are super comfortable. Highly recommend.",
        date: "September 4, 2023"
      },
      {
        id: "3",
        name: "Derek M.",
        rating: 4,
        verified: true,
        text: "Great quality skinny jeans. The faded wash gives them character without looking worn out.",
        date: "September 5, 2023"
      }
    ],
    faqs: [
      {
        id: "1",
        question: "Is the faded look authentic?",
        answer: "Yes! We use special techniques to create an authentic, lived-in faded look. Each pair has unique fading patterns."
      },
      {
        id: "2",
        question: "Will the fading continue after washing?",
        answer: "The fading will be minimal with proper care. Washing in cold water and turning inside out helps preserve the faded finish."
      },
      {
        id: "3",
        question: "How fitted are these jeans?",
        answer: "These are skinny fit, meaning they're snug through the hip, thigh, and leg. They taper at the ankle for a sleek look."
      }
    ],
    specifications: [
      { label: "Material", value: "98% Cotton, 2% Elastane" },
      { label: "Weight", value: "11 oz Denim" },
      { label: "Fit", value: "Skinny Fit" },
      { label: "Rise", value: "Low to Mid-Rise" },
      { label: "Finish", value: "Authentic Faded Wash" },
      { label: "Care", value: "Wash cold inside out, line dry" }
    ]
  },
];

export const CATEGORIES = [
  {
    name: "Casual",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop",
    href: "/category/casual",
  },
  {
    name: "Formal",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    href: "/category/formal",
  },
  {
    name: "Party",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
    href: "/category/party",
  },
  {
    name: "Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    href: "/category/gym",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    verified: true,
    text: "I'm blown away by the quality and style of the clothes I received from STYLE_PULSE. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 14, 2023"
  },
  {
    id: "2",
    name: "Alex K.",
    rating: 5,
    verified: true,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered STYLE_PULSE. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    date: "August 15, 2023"
  },
  {
    id: "3",
    name: "James L.",
    rating: 5,
    verified: true,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon STYLE_PULSE. The selection of clothes is not only diverse but also on-point with the latest trends.",
    date: "August 16, 2023"
  },
  {
    id: "4",
    name: "Emily R.",
    rating: 5,
    verified: true,
    text: "I've been a fashion enthusiast for years, but never found a platform that seamlessly connects me with designers from around the world. STYLE_PULSE is a game-changer.",
    date: "August 17, 2023"
  },
  {
    id: "5",
    name: "Michael S.",
    rating: 5,
    verified: true,
    text: "The attention to detail and the quality of the clothes are outstanding. Each piece is a work of art, and I'm confident that I'll be wearing them for years to come.",
    date: "August 18, 2023"
  },
  {
    id: "6",
    name: "Olivia T.",
    rating: 5,
    verified: true,
    text: "The range of styles and designs is impressive. From classic to trendy, there's something for everyone. STYLE_PULSE is a true gem in the world of fashion.",
    date: "August 19, 2023"
  },
];

export const REVIEWS = [
  {
    id: "1",
    name: "Samantha D.",
    rating: 5,
    verified: true,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023"
  },
  {
    id: "2",
    name: "Alex M.",
    rating: 5,
    verified: true,
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being an AI designer myself, I'm quite picky about aesthetics, and this shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023"
  },
  {
    id: "3",
    name: "Ethan R.",
    rating: 5,
    verified: true,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "August 16, 2023"
  },
  {
    id: "4",
    name: "Olivia P.",
    rating: 5,
    verified: true,
    text: "As a UI/UX designer, I value simplicity and functionality. This t-shirt not only represents those principles but also looks great when I'm working. It's the designer's proud their creativity into making this t-shirt stand out!",
    date: "August 17, 2023"
  },
  {
    id: "5",
    name: "Liam K.",
    rating: 5,
    verified: true,
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft and the design truly reflects about the designers skill. It's like wearing the piece of art that reflects my passion for both design and fashion!",
    date: "August 18, 2023"
  },
  {
    id: "6",
    name: "Ava H.",
    rating: 5,
    verified: true,
    text: "I'm not just wearing a t-shirt, I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter!",
    date: "August 19, 2023"
  }
];
