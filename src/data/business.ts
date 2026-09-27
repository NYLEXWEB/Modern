export interface CatalogItem {
    id: string;
    name: string;
    category: 'curtains' | 'blinds' | 'specialty';
    description: string;
    image: string;
    badge?: string;
    features: string[];
}

export interface BusinessInfo {
    name: string;
    tagline: string;
    eyebrow: string;
    location: {
        address: string;
        area: string;
        city: string;
        state: string;
        country: string;
        fullAddress: string;
        mapsUrl: string;
        embedUrl: string;
    };
    contact: {
        phone: string;
        whatsapp: string;
        whatsappFormatted: string;
        instagram: string;
        instagramUrl: string;
    };
    hero: {
        title: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
}

export const BUSINESS_DATA: BusinessInfo = {
    name: "Modern Blinds & Curtains",
    tagline: "Luxury in Every Fold.",
    eyebrow: "MODERN WINDOW INTERIORS",
    location: {
        address: "Kathrikadavu",
        area: "Kathrikadavu",
        city: "Kochi",
        state: "Kerala",
        country: "India",
        fullAddress: "Kathrikadavu, Kochi, Kerala, India",
        mapsUrl: "https://maps.google.com/?q=Kathrikadavu,+Kochi,+Kerala",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.38240409951!2d76.297424!3d9.988019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d32f50587a3%3A0xb2c7104b2b000000!2sKathrikadavu%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
    },
    contact: {
        phone: "+91 79073 36565",
        whatsapp: "917907336565",
        whatsappFormatted: "+91 79073 36565",
        instagram: "modern_blinds_curtains",
        instagramUrl: "https://www.instagram.com/modern_blinds_curtains/"
    },
    hero: {
        title: "Luxury in Every Fold.",
        subtitle: "Premium curtains, blinds, and bespoke window solutions engineered for refined architectural spaces in Kochi.",
        ctaPrimary: "Explore Collection",
        ctaSecondary: "WhatsApp Us"
    }
};

export const CATALOG_ITEMS: CatalogItem[] = [
    {
        id: "pleated-curtains",
        name: "Pleated Curtains",
        category: "curtains",
        description: "Tailored architectural drapes with precision folds, creating structured, timeless luxury for living and bed chambers.",
        image: "/gallery/Screenshot_2026-09-27-20-34-10-241_com.whatsapp.w4b.jpg",
        badge: "Bestseller",
        features: ["Double & Triple Pinch Pleat", "Custom Drop Heights", "Thermal Lining Available"]
    },
    {
        id: "ripple-curtains",
        name: "Ripple Curtains",
        category: "curtains",
        description: "Flowing S-fold curtains suspended from ultra-slim ceilings tracks for a fluid modern aesthetic.",
        image: "/gallery/Screenshot_2026-09-27-20-35-50-528_com.whatsapp.w4b.jpg",
        badge: "Architectural Favorite",
        features: ["Seamless S-Wave Movement", "Ceiling-Mounted Track", "Sheer & Blackout Options"]
    },
    {
        id: "roller-blinds",
        name: "Roller Blinds",
        category: "blinds",
        description: "Sleek, minimalist window coverings engineered for solar control, glare reduction, and clean interior lines.",
        image: "/gallery/Screenshot_2026-09-27-20-35-56-060_com.whatsapp.w4b.jpg",
        features: ["Sunscreen 1%-5% Openness", "Total Blackout Series", "Moisture Resistant"]
    },
    {
        id: "zeebra-blinds",
        name: "Zebra Blinds",
        category: "blinds",
        description: "Dual-layered light control fabrics offering effortless transitions between transparent view and absolute privacy.",
        image: "/gallery/Screenshot_2026-09-27-20-34-42-708_com.whatsapp.w4b.jpg",
        badge: "Popular Choice",
        features: ["Dual Layer Precision", "Light Dimming Control", "Dust Resistant Weave"]
    },
    {
        id: "roman-blinds",
        name: "Roman Blinds",
        category: "blinds",
        description: "Soft fabric shades that stack neatly into uniform horizontal pleats, bringing classic warmth to modern frames.",
        image: "/gallery/Screenshot_2026-09-27-20-34-15-616_com.whatsapp.w4b.jpg",
        features: ["Cascading Fabric Folds", "Manual or Motorised", "Extensive Fabric Palette"]
    },
    {
        id: "honeycomb-blinds",
        name: "Honeycomb Blinds",
        category: "blinds",
        description: "Cellular structure engineered for superior acoustic absorption and energy-efficient thermal insulation.",
        image: "/images/showcase/showcase-blinds.webp",
        badge: "Energy Saver",
        features: ["Cellular Insulation", "Sound Dampening", "Top-Down Bottom-Up"]
    },
    {
        id: "vertical-blinds",
        name: "Vertical Blinds",
        category: "blinds",
        description: "Linear vertical louvres ideal for large glass facade openings and floor-to-ceiling balcony glazing.",
        image: "/gallery/Screenshot_2026-09-27-20-34-12-302_com.whatsapp.w4b.jpg",
        features: ["180 Degree Rotation", "Ideal for Wide Windows", "Easy Maintenance"]
    },
    {
        id: "balcony-blinds",
        name: "Balcony Blinds (PVC & Bamboo)",
        category: "specialty",
        description: "Weatherproof exterior shielding crafted from treated bamboo and reinforced PVC for tropical balcony outdoor living.",
        image: "/gallery/Screenshot_2026-09-27-20-34-21-411_com.whatsapp.w4b.jpg",
        badge: "Weatherproof",
        features: ["Rain & UV Resistance", "Natural Bamboo / PVC", "Heavy Duty Crank Mechanism"]
    },
    {
        id: "sliding-mosquito-net",
        name: "Sliding Mosquito Net",
        category: "specialty",
        description: "High-grade aluminium track mosquito net systems featuring pleated mesh for insect defense without sacrificing airflow.",
        image: "/gallery/Screenshot_2026-09-27-20-34-33-809_com.whatsapp.w4b.jpg",
        badge: "Essential Comfort",
        features: ["Pleated Mesh Technology", "Slim Aluminium Profile", "Smooth Lateral Glide"]
    },
    {
        id: "floor-mats-carpets",
        name: "Floor Mats & Carpets",
        category: "specialty",
        description: "Curated collection of high-density accent floor runners and custom area carpets to anchor your interior spaces.",
        image: "/gallery/Screenshot_2026-09-27-20-34-37-547_com.whatsapp.w4b.jpg",
        features: ["Custom Dimensions", "Anti-Skid Backing", "Stain Guard Treatment"]
    },
    {
        id: "motorised-solutions",
        name: "Motorised Curtains & Blinds",
        category: "specialty",
        description: "Smart automation motors with silent actuation, smartphone control, and remote integration for effortless comfort.",
        image: "/images/showcase/showcase-motorised.webp",
        badge: "Smart Automation",
        features: ["Silent Motor Drive", "Remote & App Control", "Home Automation Compatible"]
    },
    {
        id: "wallpapers",
        name: "Designer Wallpapers",
        category: "specialty",
        description: "Luxury textured wall coverings and contemporary architectural patterns engineered for dramatic feature walls.",
        image: "/images/showcase/showcase-interior.webp",
        features: ["Washable Vinyl & Non-Woven", "Seamless Texture", "Professional Installation"]
    }
];

export const GALLERY_IMAGES = [
    {
        src: "/gallery/746878391_18029749898838658_6846225000017253791_n.jpg",
        alt: "Modern luxury living room curtains installation in Kochi",
        title: "Double Pleat Sheer Drapes",
        category: "Curtains"
    },
    {
        src: "/gallery/747273828_18029749928838658_8338845857041659776_n.jpg",
        alt: "Custom blackout curtains with pelmet box in villa bedroom",
        title: "Bespoke Master Bedroom Drapes",
        category: "Curtains"
    },
    {
        src: "/gallery/747827117_18029749889838658_6737695804541028372_n.jpg",
        alt: "Architectural floor-to-ceiling sheer curtains",
        title: "S-Fold Sheer Glazing",
        category: "Curtains"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-34-10-241_com.whatsapp.w4b.jpg",
        alt: "Emerald green pleated curtains for living interior",
        title: "Tailored Pleated Curtains",
        category: "Curtains"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-34-12-302_com.whatsapp.w4b.jpg",
        alt: "Teal vertical blinds installation",
        title: "Vertical Light Control Blinds",
        category: "Blinds"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-34-15-616_com.whatsapp.w4b.jpg",
        alt: "Grey fabric roman blinds for window frame",
        title: "Precision Roman Shade",
        category: "Blinds"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-34-21-411_com.whatsapp.w4b.jpg",
        alt: "Exterior balcony blinds installation",
        title: "Exterior Balcony Weather Shield",
        category: "Specialty"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-34-33-809_com.whatsapp.w4b.jpg",
        alt: "Sliding pleated mosquito net sample board",
        title: "Sliding Mosquito Protection System",
        category: "Specialty"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-34-37-547_com.whatsapp.w4b.jpg",
        alt: "Geometric designer floor mat runner",
        title: "Designer Geometric Floor Runner",
        category: "Specialty"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-34-42-708_com.whatsapp.w4b.jpg",
        alt: "Warm wooden tone zebra blinds",
        title: "Zebra Light Filtering Shade",
        category: "Blinds"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-35-50-528_com.whatsapp.w4b.jpg",
        alt: "Ripple fold curtains with ceiling recess track",
        title: "Ceiling Recessed Ripple Curtains",
        category: "Curtains"
    },
    {
        src: "/gallery/Screenshot_2026-09-27-20-35-56-060_com.whatsapp.w4b.jpg",
        alt: "Dark brown blackout roller blind for home theater",
        title: "Blackout Roller Shade System",
        category: "Blinds"
    },
    {
        src: "/About section.jpg",
        alt: "Modern Blinds & Curtains Showroom Display",
        title: "Showroom Craftsman Quality",
        category: "Showroom"
    }
];

export const VALUES_DATA = [
    {
        number: "01",
        title: "Premium Materials",
        description: "Hand-picked fabrics, light-filtering sheers, high-grade blackout textiles, and engineered motorized hardware."
    },
    {
        number: "02",
        title: "Custom Window Solutions",
        description: "Every window measured with laser precision and custom-crafted for exact architectural fit."
    },
    {
        number: "03",
        title: "Modern Minimalist Designs",
        description: "Clean aesthetic lines, hidden tracks, and contemporary Kerala interior styling designed for longevity."
    },
    {
        number: "04",
        title: "Professional Installation",
        description: "Executed by experienced craftsmen ensuring clean, seamless mounting with zero hassle."
    }
];
