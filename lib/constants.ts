export const BRANDS = [
  { name: "Versace", logo: "/brands/versace.svg" },
  { name: "Zara", logo: "/brands/zara.svg" },
  { name: "Gucci", logo: "/brands/gucci.svg" },
  { name: "Prada", logo: "/brands/prada.svg" },
  { name: "Calvin Klein", logo: "/brands/calvin-klein.svg" },
];

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
    sizes: ["Small", "Medium", "Large", "X-Large"]
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
    sizes: ["28", "30", "32", "34"]
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
    sizes: ["Small", "Medium", "Large"]
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
    sizes: ["Small", "Medium", "Large", "X-Large"]
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
    sizes: ["Medium", "Large", "X-Large"]
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
    sizes: ["Small", "Medium", "Large"]
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
    sizes: ["30", "32", "34", "36"]
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
    sizes: ["28", "30", "32", "34"]
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
