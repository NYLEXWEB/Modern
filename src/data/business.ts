export interface CatalogItem {
    id: string;
    name: string;
    category: 'blinds' | 'curtains' | 'mosquito_nets' | 'wall_interior' | 'flooring' | string;
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
        reviewsUrl: string;
        embedUrl: string;
    };
    contact: {
        phone: string;
        whatsapp: string;
        whatsappFormatted: string;
        instagram: string;
        instagramUrl: string;
        facebook: string;
        facebookUrl: string;
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
        mapsUrl: "https://share.google/WSB1b9xWdHuzb9AZu",
        reviewsUrl: "https://www.google.com/search?sca_esv=95587ab41e5a5533&rlz=1C1YTUH_enIN1171IN1171&sxsrf=APpeQnvtQCHPmWU5ChTtHaJIF_C0KTGTpg:1791197158504&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3z6iWxLf9RKPLOZDdtCreB6B5rV_ZhTh5NZQl3uErAgnf7StISgyWRc2DASkdIVsAWa9PrtVlVr_4K0J8cOwjcR4gG1ehQlmn0ICEwKpxRQh3KL_w%3D%3D&q=Modern+Blinds+%26+Curtains+Kochi+Reviews&sa=X&ved=2ahUKEwius-uy2aKXAxXNi-EIHWcUPdIQ0bkNegQIIhAF&biw=1536&bih=730&dpr=1.25",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.38240409951!2d76.297424!3d9.988019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d32f50587a3%3A0xb2c7104b2b000000!2sKathrikadavu%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
    },
    contact: {
        phone: "+91 79073 36565",
        whatsapp: "917907336565",
        whatsappFormatted: "+91 79073 36565",
        instagram: "modern_blinds_curtains",
        instagramUrl: "https://www.instagram.com/modern_blinds_curtains/",
        facebook: "modernblindscurtains",
        facebookUrl: "https://www.facebook.com/modernblindscurtains"
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
        id: "ripple-fold-curtains",
        name: "Ripple Fold Curtains",
        category: "curtains",
        description: "Flowing S-fold drapes suspended from ultra-slim ceiling tracks for a fluid modern architectural aesthetic.",
        image: "/service/8.png",
        badge: "Architectural Favorite",
        features: ["Seamless S-Wave Movement", "Ceiling-Mounted Track", "Sheer & Blackout Options"]
    },
    {
        id: "zebra-blinds",
        name: "Zebra Blinds",
        category: "blinds",
        description: "Dual-layered light control fabrics offering effortless transitions between transparent view and privacy.",
        image: "/service/1.png",
        badge: "Popular Choice",
        features: ["Dual Layer Precision", "Light Dimming Control", "Dust Resistant Weave"]
    },
    {
        id: "motorized-curtains",
        name: "Motorized Curtains",
        category: "curtains",
        description: "Smart automation motors with silent actuation, smartphone control, and home automation integration.",
        image: "/service/11.png",
        badge: "Smart Automation",
        features: ["Silent Motor Drive", "Remote & App Control", "Home Automation Compatible"]
    },
    {
        id: "floor-mats-carpets",
        name: "Floor Mats & Carpets",
        category: "flooring",
        description: "Curated collection of high-density accent floor runners and custom area carpets to anchor your interior spaces.",
        image: "/service/16.png",
        features: ["Custom Dimensions", "Anti-Skid Backing", "Stain Guard Treatment"]
    },
    {
        id: "roller-blinds",
        name: "Roller Blinds",
        category: "blinds",
        description: "Sleek, minimalist window coverings engineered for solar control, glare reduction, and clean interior lines.",
        image: "/service/2.png",
        features: ["Sunscreen 1%-5% Openness", "Total Blackout Series", "Moisture Resistant"]
    },
    {
        id: "pleated-curtains",
        name: "Pleated Curtains",
        category: "curtains",
        description: "Tailored architectural drapes with precision folds, creating structured, timeless luxury for living and bed chambers.",
        image: "/service/9.png",
        badge: "Bestseller",
        features: ["Double & Triple Pinch Pleat", "Custom Drop Heights", "Thermal Lining Available"]
    },
    {
        id: "balcony-blinds",
        name: "Balcony Blinds",
        category: "blinds",
        description: "Weatherproof exterior shielding crafted from treated bamboo and reinforced PVC for tropical balcony outdoor living.",
        image: "/service/7.png",
        badge: "Weatherproof",
        features: ["Rain & UV Resistance", "Heavy Duty Crank Mechanism", "Wind Resistant Track"]
    },
    {
        id: "roman-blinds",
        name: "Roman Blinds",
        category: "blinds",
        description: "Soft fabric shades that stack neatly into uniform horizontal pleats, bringing classic warmth to modern frames.",
        image: "/service/3.png",
        features: ["Cascading Fabric Folds", "Manual or Motorised", "Extensive Fabric Palette"]
    },
    {
        id: "wooden-blinds",
        name: "Wooden Blinds",
        category: "blinds",
        description: "Rich natural timber slats offering organic warmth, luxury texture, and sturdy architectural light management.",
        image: "/service/5.png",
        badge: "Premium Timber",
        features: ["100% Real Hardwood Slats", "UV Protective Coating", "Custom Stain Finishes"]
    },
    {
        id: "venetian-blinds",
        name: "Venetian Blinds",
        category: "blinds",
        description: "Classic horizontal louvred blinds providing precise direction control of light and airflow.",
        image: "/service/4.png",
        features: ["Adjustable Louvre Tilt", "Aluminium & Timber Slat Options", "Easy Wipe Clean"]
    },
    {
        id: "honeycomb-blinds",
        name: "Honeycomb Blinds",
        category: "blinds",
        description: "Cellular structure engineered for superior acoustic absorption and energy-efficient thermal insulation.",
        image: "/service/6.png",
        badge: "Energy Saver",
        features: ["Cellular Insulation", "Sound Dampening", "Top-Down Bottom-Up"]
    },
    {
        id: "double-height-curtains",
        name: "Double-Height Curtains",
        category: "curtains",
        description: "Dramatic floor-to-ceiling drapery designed for grand double-height living rooms and atrium glazing.",
        image: "/service/10.png",
        features: ["Heavy Duty Motorised Track", "Grand Vertical Proportion", "Acoustic Noise Reduction"]
    },
    {
        id: "double-layer-curtains",
        name: "Double-Layer Curtains",
        category: "curtains",
        description: "Combined translucent sheer and heavy blackout layers on dual tracks for versatile day and night light control.",
        image: "/service/12.png",
        features: ["Dual Track System", "Daylight Sheer & Night Blackout", "Luxury Layered Look"]
    },
    {
        id: "pleated-mosquito-nets",
        name: "Pleated Mosquito Nets",
        category: "mosquito_nets",
        description: "High-grade aluminium track mosquito net systems featuring pleated mesh for insect defense without sacrificing airflow.",
        image: "/service/13.png",
        badge: "Essential Protection",
        features: ["Pleated Mesh Technology", "Slim Aluminium Profile", "Smooth Lateral Glide"]
    },
    {
        id: "wallpapers",
        name: "Wallpapers",
        category: "wall_interior",
        description: "Luxury textured wall coverings and contemporary architectural patterns engineered for dramatic feature walls.",
        image: "/service/14.png",
        features: ["Washable Vinyl & Non-Woven", "Seamless Texture", "Professional Installation"]
    },
    {
        id: "decor-items",
        name: "Decor Items",
        category: "wall_interior",
        description: "Curated interior accent accessories, custom cushion covers, and decorative trimmings for completed interior aesthetics.",
        image: "/service/15.png",
        features: ["Bespoke Fabric Accents", "Architectural Decor", "Handcrafted Quality"]
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
