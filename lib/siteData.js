// lib/siteData.js
// Single source of truth for Business Sathi — content, services, projects, reviews, FAQs, blog.

export const brand = {
  name: "Business Sathi",
  shortName: "Business Sathi",
  tagline: "Websites & Digital Growth for Indore Businesses",
  descriptor:
    "We build websites and manage the digital side of your business so you can focus on running it.",
  city: "Indore",
  region: "Madhya Pradesh",
  phone: "+91 93020 88025",
  phoneRaw: "919302088025",
  whatsappNumber: "919302088025",
  email: "business.sathi.team@gmail.com",
  website: "https://business-sathi.vercel.app",
  founded: "2023",
  teamSize: 2,
  social: {
    instagram: "https://instagram.com/busines.sathi",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  businessHours: [
    { day: "Monday – Saturday", hours: "10:00 AM – 7:00 PM" },
    { day: "Sunday", hours: "By appointment only" },
  ],
};

export const stats = [
  { label: "Websites Delivered", value: "5", suffix: "" },
  { label: "Core Services", value: "6", suffix: "" },
  { label: "Founders Working On Your Project", value: "2", suffix: "" },
  { label: "Based In", value: "Indore", suffix: "", isText: true },
];

export const whyChooseUs = [
  {
    title: "Transparent Communication",
    description:
      "No jargon, no vanishing acts. You'll always know exactly what's happening with your project and why.",
    icon: "MessageCircle",
  },
  {
    title: "Fast Support",
    description:
      "You're talking directly to the people building your website — not a support ticket queue.",
    icon: "Zap",
  },
  {
    title: "Custom Solutions",
    description:
      "Every business is different. We design around how your business actually works, not a recycled template.",
    icon: "Layers",
  },
  {
    title: "Mobile First",
    description:
      "Most of your customers will find you on a phone. We design and test for mobile before anything else.",
    icon: "Smartphone",
  },
  {
    title: "SEO Friendly",
    description:
      "Every site we build is structured so Google can actually understand and rank your business.",
    icon: "Search",
  },
  {
    title: "Performance Focused",
    description:
      "Slow websites lose customers. We obsess over load times, image weight, and clean code.",
    icon: "Gauge",
  },
  {
    title: "No Templates",
    description:
      "We don't resell drag-and-drop themes. Every layout is designed and coded specifically for your brand.",
    icon: "PenTool",
  },
  {
    title: "Real Business Understanding",
    description:
      "We ask about your customers, your competition, and your goals before we open a design tool.",
    icon: "Target",
  },
];

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    icon: "Code2",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80",
    problem:
      "Your business looks great in person, but your Google search results tell a different story — an outdated site, no site at all, or one that doesn't work on phones.",
    solution:
      "We design and build a fast, modern website that reflects the quality of your actual business, built on the same technology used by companies like Vercel and Linear.",
    benefits: [
      "Loads in under 2 seconds on mobile networks",
      "Built to convert visitors into enquiries, not just look pretty",
      "Fully responsive from a 340px phone to a 27-inch monitor",
      "Structured for Google — proper headings, metadata, and schema",
    ],
    idealFor: [
      "Local businesses without a website",
      "Businesses with an outdated or broken website",
      "Startups launching their first digital presence",
      "Anyone whose website doesn't work properly on mobile",
    ],
    deliverables: [
      "Custom-designed, fully responsive website",
      "Up to 6 core pages (Home, About, Services, Portfolio, Blog, Contact)",
      "Contact form with WhatsApp integration",
      "Basic on-page SEO setup",
      "Google Analytics & Search Console setup",
      "1 round of revisions included",
    ],
    process: [
      { step: "Discovery Call", detail: "We understand your business, customers, and goals." },
      { step: "Content & Planning", detail: "We map out pages, structure, and messaging." },
      { step: "Design", detail: "A custom visual direction built for your brand." },
      { step: "Development", detail: "We build it clean, fast, and mobile-first." },
      { step: "Testing", detail: "Cross-device and cross-browser checks before launch." },
      { step: "Launch & Support", detail: "We go live and stay reachable after handover." },
    ],
    faqs: [
      {
        q: "How long does a website take to build?",
        a: "Most business websites take 2–4 weeks from the discovery call to launch, depending on how much content is ready on your end.",
      },
      {
        q: "Do I need to provide my own content and photos?",
        a: "Ideally yes — real photos of your business perform far better than stock images. If you don't have professional photos, we'll guide you on what to shoot, or work with what you have.",
      },
      {
        q: "Will I be able to update the website myself later?",
        a: "We'll walk you through the basics after launch. For anything beyond simple text/image swaps, we're just a WhatsApp message away.",
      },
    ],
    cta: "Get a Free Website Consultation",
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Optimization",
    shortTitle: "Google Business Profile",
    icon: "MapPin",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80",
    problem:
      "When someone searches for your business — or businesses like yours — near them, an unclaimed or half-filled Google Business Profile means you're invisible next to competitors who show up with photos, reviews, and hours.",
    solution:
      "We claim, verify, and fully optimize your Google Business Profile so you show up accurately in Google Search and Maps when local customers are looking.",
    benefits: [
      "Better visibility in 'near me' searches",
      "A complete, trustworthy profile with correct category, hours, and photos",
      "A clear system for collecting and responding to reviews",
      "More calls, direction requests, and website clicks from Maps",
    ],
    idealFor: [
      "Businesses that rely on local, walk-in, or nearby customers",
      "Businesses with an unclaimed or outdated Google listing",
      "Clinics, restaurants, salons, and retail stores",
      "Anyone who's never touched their Google Business Profile",
    ],
    deliverables: [
      "Profile claim and verification",
      "Category, description, and attribute optimization",
      "Photo and service/menu setup",
      "Posting schedule for updates and offers",
      "Review request system and response templates",
      "Monthly performance check-in",
    ],
    process: [
      { step: "Audit", detail: "We check your current listing (or lack of one)." },
      { step: "Claim & Verify", detail: "We get your profile officially verified." },
      { step: "Optimize", detail: "Category, photos, services, and description done properly." },
      { step: "Activate", detail: "Regular posts and review requests go live." },
      { step: "Monitor", detail: "We track how your listing performs and adjust." },
    ],
    faqs: [
      {
        q: "I already have a Google listing — can you still help?",
        a: "Yes, this is the most common starting point. Most listings we take over are missing photos, have the wrong category, or haven't been touched in years.",
      },
      {
        q: "Can you get me more reviews?",
        a: "We set up the request system and templates that make it easy for happy customers to leave a review — but we never post fake reviews. Growth is genuine and gradual.",
      },
    ],
    cta: "Optimize My Google Listing",
  },
  {
    slug: "meta-ads-management",
    title: "Meta Ads Management",
    shortTitle: "Meta Ads",
    icon: "Megaphone",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=80",
    problem:
      "Boosting a post on Instagram feels like throwing money at a wall. Without proper targeting, tracking, and creative strategy, ad spend disappears without real enquiries to show for it.",
    solution:
      "We plan, launch, and manage Facebook & Instagram ad campaigns built around one goal — getting your phone to ring or your DMs to fill up with real leads.",
    benefits: [
      "Campaigns built around leads, not just 'likes'",
      "Proper audience targeting instead of a broad 'boost'",
      "Clear reporting on what your ad spend is actually doing",
      "Creative that matches your brand instead of generic templates",
    ],
    idealFor: [
      "Businesses with a product or offer ready to promote",
      "Real estate, interior designers, and hospitality brands",
      "Ecommerce brands wanting consistent traffic",
      "Anyone who has tried 'boosting posts' with little result",
    ],
    deliverables: [
      "Campaign strategy and audience research",
      "Ad creative direction (using your assets or ours)",
      "Meta Ads Manager setup and pixel/tracking installation",
      "Ongoing campaign monitoring and optimization",
      "Monthly performance report in plain language",
    ],
    process: [
      { step: "Goal Setting", detail: "We define what a 'lead' actually means for your business." },
      { step: "Audience Research", detail: "We find who's actually likely to buy from you." },
      { step: "Creative & Copy", detail: "Ads that look native, not like ads." },
      { step: "Launch", detail: "Campaigns go live with proper tracking in place." },
      { step: "Optimize", detail: "We adjust spend toward what's actually converting." },
    ],
    faqs: [
      {
        q: "What's the minimum ad budget I should have?",
        a: "We typically recommend starting from ₹300–500/day so we have enough data to optimize properly. We'll advise honestly if your budget is too small to be effective.",
      },
      {
        q: "Do you guarantee results?",
        a: "No one honestly can. What we guarantee is proper setup, tracking, and continuous optimization based on real data — not guesswork.",
      },
    ],
    cta: "Talk About Running Ads",
  },
  {
    slug: "seo",
    title: "Basic SEO",
    shortTitle: "SEO",
    icon: "Search",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    problem:
      "Your website exists, but it's on page 4 of Google — which, in practice, means it doesn't exist to most people searching for what you offer.",
    solution:
      "We implement the on-page and technical SEO fundamentals that help Google understand your business and rank you for the searches that actually matter.",
    benefits: [
      "Proper title tags, meta descriptions, and heading structure",
      "Keyword research based on how your customers actually search",
      "Faster load times, which Google also rewards",
      "Local SEO signals for Indore-based searches",
    ],
    idealFor: [
      "Businesses whose website isn't showing up in search",
      "Anyone unsure if their site is even 'SEO friendly'",
      "Businesses about to launch a new website",
    ],
    deliverables: [
      "Keyword research report",
      "On-page SEO implementation across key pages",
      "Technical SEO audit (speed, mobile, structured data)",
      "Sitemap and Search Console setup",
      "Monthly ranking check-in",
    ],
    process: [
      { step: "Audit", detail: "We check what's helping and hurting your current rankings." },
      { step: "Keyword Research", detail: "We find real search terms your customers use." },
      { step: "On-Page Fixes", detail: "Titles, meta tags, headings, and content structure." },
      { step: "Technical Fixes", detail: "Speed, mobile usability, and indexing issues." },
      { step: "Track & Report", detail: "We monitor rankings and explain what's changing." },
    ],
    faqs: [
      {
        q: "How long until I see results?",
        a: "SEO is gradual — most businesses start seeing meaningful movement in 2–4 months. Anyone promising overnight rankings isn't being straight with you.",
      },
      {
        q: "Is this different from Google Business Profile optimization?",
        a: "Yes. SEO is about your website ranking in general search; Google Business Profile is about your local listing showing up in Maps and local results. Ideally, you do both.",
      },
    ],
    cta: "Check My SEO",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    shortTitle: "Video Editing",
    icon: "Film",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1400&q=80",
    problem:
      "You're shooting content on your phone, but raw footage doesn't perform. Unedited or poorly-cut videos get scrolled past in under two seconds.",
    solution:
      "We turn your raw footage into polished, platform-ready videos — Reels, YouTube content, or ad creative — with pacing and captions built to hold attention.",
    benefits: [
      "Edits built for how people actually watch — fast, captioned, mobile-first",
      "Consistent style across your video content",
      "Faster turnaround than hiring in-house",
      "Content ready for Instagram, YouTube, and ads simultaneously",
    ],
    idealFor: [
      "Restaurants, hotels, and businesses with visual products",
      "Businesses posting regularly to Instagram or YouTube",
      "Anyone with raw phone footage sitting unused",
    ],
    deliverables: [
      "Edited vertical and/or horizontal video formats",
      "Captions and on-screen text",
      "Color correction and pacing",
      "Music and sound design",
      "Export formats ready for each platform",
    ],
    process: [
      { step: "Brief", detail: "You share footage and the goal for the video." },
      { step: "Rough Cut", detail: "We build the structure and pacing first." },
      { step: "Polish", detail: "Color, captions, sound, and graphics added." },
      { step: "Review", detail: "You review and request adjustments." },
      { step: "Delivery", detail: "Final files delivered in the formats you need." },
    ],
    faqs: [
      {
        q: "Do I need professional camera equipment?",
        a: "No — modern phone cameras work fine for most social content. Good lighting matters more than the camera.",
      },
    ],
    cta: "Get My Videos Edited",
  },
  {
    slug: "ai-video-generation",
    title: "AI Video Generation",
    shortTitle: "AI Video",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80",
    problem:
      "You don't always have footage, actors, or budget to shoot something — but you still need video content that looks credible for ads, promos, or product showcases.",
    solution:
      "We use AI video generation tools to produce short promotional videos, product showcases, and ad creative when traditional filming isn't practical.",
    benefits: [
      "Video content without a camera crew or shoot day",
      "Faster and more affordable than traditional production",
      "Useful for testing multiple ad creative variations quickly",
      "Good for product visualization and concept videos",
    ],
    idealFor: [
      "Ecommerce brands needing product showcase videos",
      "Businesses testing ad creative without a full shoot",
      "Startups needing a promo video on a tight timeline",
    ],
    deliverables: [
      "AI-generated video draft based on your brief",
      "Revisions to refine tone and pacing",
      "Final edited and captioned output",
      "Multiple format exports (square, vertical, horizontal)",
    ],
    process: [
      { step: "Brief", detail: "You share the product, message, and reference style." },
      { step: "Generate", detail: "We produce initial AI video drafts." },
      { step: "Refine", detail: "We adjust based on your feedback." },
      { step: "Finalize", detail: "Captions, music, and export for your platforms." },
    ],
    faqs: [
      {
        q: "Will it look obviously 'AI generated'?",
        a: "We're upfront about what this tool is good at (product showcases, concept videos, short promos) and where traditional filming still wins. We'll tell you honestly which is the better fit for your goal.",
      },
    ],
    cta: "Explore AI Video",
  },
];

export const projects = [
  {
    slug: "avantika-travels",
    name: "Avantika Travels",
    industry: "Travel & Tourism",
    location: "Ujjain",
    image: "/avantika.avif",
    thumbnail: "/avantika2.avif",
    tagline: "A booking-first travel website that turned browsers into paying customers.",
    problem:
      "Avantika Travels had a website, but it wasn't built to actually take bookings. Enquiries came in through scattered phone calls and forwarded messages, and the agency had no easy way to show off its tour packages or respond before a customer lost interest and called someone else.",
    solution:
      "We rebuilt the site around one goal — making it effortless to go from 'just browsing' to 'sending an enquiry.' Every package page shows clear pricing and details, and a one-tap WhatsApp button sits on every screen so a traveler can reach a real person the moment they're ready to book.",
    technologies: ["Next.js", "Node.js", "MongoDB", "WhatsApp API"],
    results: [
      "Booking enquiries rose noticeably within the first three months of launch",
      "Response time to new enquiries dropped by half thanks to direct WhatsApp routing",
      "300+ customer bookings generated through the new site",
      "A much smoother mobile booking flow, where most of their traffic comes from",
    ],
    highlights: [
      "Instant WhatsApp booking on every page",
      "Mobile-first booking forms",
      "Clear, browsable package listings with real pricing",
      "Simple enquiry management so nothing falls through the cracks",
    ],
    link: "https://avantikatravels.com",
    challenge:
      "The agency's old site listed packages but gave visitors no real way to act on interest — no clear next step, no fast way to reach someone. Every extra click was a chance to lose the customer.",
    researchNote:
      "We sat down with the Avantika Travels team to understand which packages actually convert in person, and used that to decide what to feature first on the homepage instead of guessing.",
    designApproach:
      "A clean, photo-led layout that lets destinations do the selling, with pricing and a WhatsApp button placed exactly where a traveler's thumb naturally lands on mobile.",
    developmentNote:
      "Built on Next.js with a lightweight Node.js and MongoDB backend to manage packages, so the team can update pricing and availability without touching code.",
    outcome:
      "Avantika Travels now has a website that works the way their customers actually browse — fast, mobile, and one tap away from a real conversation.",
    testimonial: {
      quote:
        "You built exactly the website I wanted, within my budget, with an interface that's genuinely easy to use — for us and for our customers. If I ever need technical support again, you're who I'm calling.",
      name: "Gautam Rathore",
      role: "Owner, Avantika Travels",
    },
  },
  {
    slug: "safar-sathi",
    name: "Safar Sathi",
    industry: "Transportation & Logistics",
    location: "Ujjain",
    image: "/safar.avif",
    thumbnail: "/safar.avif",
    tagline: "One platform for rides, hotels, and logistics — instead of three separate headaches.",
    problem:
      "Three young entrepreneurs in Ujjain were running ride bookings, hotel stays, and local logistics as three disconnected operations. Customers had to juggle different contacts for each service, which meant delays, confusion, and business slipping away to whoever answered first.",
    solution:
      "We built one platform that brings rides, hotel bookings, and logistics together with separate, purpose-built dashboards for customers, drivers, and hotel partners — so every side of the business can move fast without stepping on each other.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
    results: [
      "100+ bookings processed in the platform's first six months",
      "40+ drivers and 10+ hotels onboarded and actively using it",
      "Booking coordination time cut by roughly 60%",
      "85% of bookings now happen on mobile",
    ],
    highlights: [
      "One unified system instead of three separate services",
      "Live tracking and status updates for every booking",
      "Secure payments handled through Razorpay",
      "Dedicated dashboards for customers, drivers, and hotel partners",
    ],
    link: "https://safar--sathi.vercel.app",
    challenge:
      "Building one system that could serve three very different user types — riders, drivers, and hotel managers — without making any of them feel like an afterthought.",
    researchNote:
      "We mapped out each founder's existing manual process (how a ride actually got booked today, how a hotel room got confirmed) before designing a single flow that replaced all three.",
    designApproach:
      "A practical, no-nonsense interface built for speed on a moving vehicle or a busy front desk — big touch targets, minimal steps, clear status at every stage.",
    developmentNote:
      "Role-based dashboards built on Next.js and MongoDB, with Razorpay handling payments so money never has to change hands in person.",
    outcome:
      "Three separate side-hustles are now one real platform — and the founders can finally see their whole business in one place.",
    testimonial: {
      quote:
        "This platform changed how we operate day to day. We're handling far more bookings than before, and our customers actually enjoy how simple it is to use.",
      name: "Faruk Patel",
      role: "Co-Founder, Safar Sathi",
    },
  },
  {
  slug: "mymechanic24",
  name: "MyMechanic24",
  industry: "Automotive Services",
  location: "Indore",
  image: "/mymechanic.avif",
  thumbnail: "/mymechanic.avif",
  tagline:
    "A premium car service experience, backed by a website customers can trust before they even visit the garage.",

  problem:
    "MyMechanic24 was already getting customers locally through its car servicing, repair, and doorstep car wash services across Indore. The bigger challenge was trust beyond word-of-mouth. When potential premium customers searched for a reliable garage on Google, there was no dedicated website to clearly explain the services, establish credibility, and give them a reason to choose MyMechanic24 over other options.",

  solution:
    "We built a professional website for MyMechanic24 that puts their services, brand, and business information in one trusted place. Now, when customers discover the garage through Google or want to know more before booking, they can instantly explore the services, understand what MyMechanic24 offers, and reach out directly — turning online searches into genuine inquiries.",

  technologies: ["Next.js", "Tailwind CSS", "JavaScript"],

  results: [
    "Established a professional online presence for a growing Indore-based garage",
    "Created a trusted destination for customers researching the business on Google",
    "Made car servicing, repair, and doorstep car wash services easier to discover",
    "Built a direct path from Google searches to customer inquiries",
  ],

  highlights: [
    "Premium, professional website designed to build customer trust",
    "Clear presentation of car servicing, repair, and doorstep car wash services",
    "Mobile-friendly experience for customers searching on the go",
    "Easy access to business information and inquiry options",
  ],

  link: "https://mymechanic24.vercel.app/",

  challenge:
    "MyMechanic24 didn't have a problem getting local customers — they needed to look equally trustworthy online. The challenge was creating a digital presence that could give premium customers confidence before they ever contacted or visited the garage.",

  researchNote:
    "We focused on the questions a potential customer would ask before choosing a garage: What services do they offer? Can I trust them? Where are they based? Do they provide premium or doorstep services? The website structure was built around answering those questions quickly.",

  designApproach:
    "A clean, premium automotive-focused interface designed to feel reliable rather than overly complicated. Strong visuals, clear service sections, straightforward navigation, and prominent inquiry opportunities help customers understand the business without searching through unnecessary information.",

  developmentNote:
    "The website was developed with a responsive, performance-focused approach so customers can easily explore MyMechanic24's services from mobile or desktop and quickly move from discovering the business to making an inquiry.",

  outcome:
    "MyMechanic24 now has a professional digital identity that works alongside its local reputation. When customers search for the garage or want to verify the business before choosing it, they have one place to find the information they need — making the brand feel more established, trustworthy, and ready for premium customers.",

  testimonial: {
    quote:
      "We were already getting customers locally, but having a proper website gives people something they can check before choosing us. Now when someone searches for MyMechanic24, they can see our services and understand what we offer before contacting us.",
    name: "Salman Khan",
    role: "Founder, MyMechanic24",
  },
},
  {
    slug: "a2zdm",
    name: "A2ZDM",
    industry: "Digital Marketing",
    location: "Indore",
    image: "/a2zdm1.avif",
    thumbnail: "/a2zdm1.avif",
    tagline: "A marketing agency's own website, finally as sharp as the campaigns it sells.",
    problem:
      "A2ZDM sells digital marketing results for a living, but their own website wasn't doing them any favors — it didn't explain what they actually do, and it had nothing to show prospective clients that they knew how to deliver a measurable result.",
    solution:
      "We built a site that lets A2ZDM's work speak for itself — clear service breakdowns, real case studies with numbers behind them, and a blog that lets them publish the kind of insight that gets a marketing agency taken seriously.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    results: [
      "150+ client enquiries generated in the first six months",
      "A 98/100 technical SEO score at launch",
      "25+ pages indexed by Google within three months",
      "A noticeable rise in qualified leads coming from organic search",
    ],
    highlights: [
      "Service pages that explain outcomes, not just features",
      "Case studies built around real, measurable results",
      "An SEO-optimized blog for ongoing content marketing",
      "Multiple easy ways for a prospect to get in touch",
    ],
    link: "https://a2zdm.com/",
    challenge:
      "A marketing agency's own site has to prove its expertise on sight — there's no room for the generic template look when your job is convincing others you understand digital.",
    researchNote:
      "We reviewed A2ZDM's best-performing client campaigns to decide which results were worth building full case studies around.",
    designApproach:
      "A confident, editorial layout that treats each case study like a portfolio piece, with real metrics given room to stand out instead of being buried in paragraphs.",
    developmentNote:
      "Built with Next.js and Tailwind for speed, with Framer Motion used sparingly to keep the site feeling premium without slowing it down.",
    outcome:
      "A2ZDM's website now does what good marketing is supposed to do — turn visitors into conversations.",
    testimonial: {
      quote:
        "This website changed how people see our business. We're now treated as the go-to marketing team in our region, and our enquiries have grown well beyond what we expected.",
      name: "Zeeshan Ahmed",
      role: "Founder, A2ZDM",
    },
  },
 /*  {
    slug: "tuneflow-music",
    name: "TuneFlow Music",
    industry: "Music & Entertainment",
    location: "Remote",
    image: "avantika.avif",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    tagline: "A streaming platform that lets independent artists keep control of their music.",
    problem:
      "Independent musicians and small labels had no affordable way to stream their music, build a fanbase, and actually earn from it without handing creative and financial control over to a major streaming platform.",
    solution:
      "We built a streaming platform where artists own their distribution — uploading tracks, setting their own pricing, and engaging fans directly, backed by real playlisting, streaming, and analytics tools.",
    technologies: ["React.js", "Node.js", "MongoDB", "JWT Authentication"],
    results: [
      "500+ active users within the first three months",
      "10,000+ streaming requests handled daily without issues",
      "99.5% platform uptime maintained",
      "50+ independent artists onboarded",
    ],
    highlights: [
      "Artists keep full ownership of their content and pricing",
      "Smooth, real-time streaming with high-quality audio",
      "Secure account system with JWT-based authentication",
      "A mobile-first player built for on-the-go listening",
    ],
    link: "https://aaminspatel.github.io/new-spotify/",
    challenge:
      "Streaming is unforgiving on performance — any lag or buffering breaks the experience instantly, so this had to be fast from day one, not optimized later.",
    researchNote:
      "We studied how independent artists actually wanted to interact with fans, which shaped the social and playlist features over generic streaming-app defaults.",
    designApproach:
      "A dark, immersive player interface inspired by the platforms artists already know, but stripped of anything that wasn't earning its place on screen.",
    developmentNote:
      "Built with React and Node, with secure JWT authentication protecting both artist accounts and their uploaded content.",
    outcome:
      "TuneFlow gives independent artists a real alternative — one where the audience they build is actually theirs.",
    testimonial: {
      quote:
        "This gave us the independence we'd been looking for. We're reaching more listeners than ever, and we keep full control of our music and our revenue.",
      name: "Sarah Chen",
      role: "Independent Artist",
    },
  }, */
/*   {
    slug: "dealify-retail",
    name: "Dealify Retail",
    industry: "E-Commerce & Retail",
    location: "Remote",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tagline: "A full online store built to actually convert browsers into buyers.",
    problem:
      "Dealify Retail's old website couldn't keep up with modern online shopping expectations — slow checkout, no real inventory system, and a shopping experience that pushed customers toward abandoned carts instead of completed orders.",
    solution:
      "We built a complete e-commerce platform from the ground up — proper cart and checkout flow, secure accounts, a searchable product catalog, and an admin dashboard that gives Dealify real-time control over inventory and orders.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    results: [
      "500+ orders processed in the first year",
      "A 3.8% conversion rate — well above typical e-commerce averages",
      "$65 average order value maintained",
      "75% increase in sales coming from mobile shoppers",
    ],
    highlights: [
      "A real-time admin dashboard for inventory and orders",
      "Secure checkout with multiple payment options",
      "Fast product search and filtering",
      "A mobile-optimized shopping experience end to end",
    ],
    link: "https://e-commerce-nu-nine.vercel.app",
    challenge:
      "Every extra step in checkout was costing Dealify a sale — the old flow simply asked for too much before letting a customer complete a purchase.",
    researchNote:
      "We benchmarked the checkout flow against how many taps it took a customer to actually pay, and rebuilt it to remove every step that wasn't essential.",
    designApproach:
      "A clean, product-first storefront where photography and pricing carry the design, with a checkout built to feel like it takes ten seconds — because it nearly does.",
    developmentNote:
      "Built on the MERN stack, with Express handling the storefront and admin APIs and MongoDB managing the product and order data behind Dealify's dashboard.",
    outcome:
      "Dealify now runs an online store that behaves like the ones its customers already trust — fast, simple, and easy to buy from.",
    testimonial: {
      quote:
        "Our online business completely changed after this. Orders move through the system smoothly now, and customers keep telling us how easy the site is to shop on.",
      name: "Priya Sharma",
      role: "CEO, Dealify Retail",
    },
  }, */
  /* {
    slug: "flower-elegance",
    name: "Flower Elegance",
    industry: "Wedding & Event Services",
    location: "Indore",
    image: "/flower.avif",
    thumbnail: "/flower.avif",
    tagline: "A portfolio site that finally does justice to premium wedding decor work.",
    problem:
      "Flower Elegance does genuinely beautiful wedding decoration work, but almost none of it was visible online in a way that matched its quality — couples planning a wedding had no real place to browse past work or understand what packages were available.",
    solution:
      "We built a portfolio-first website that puts Flower Elegance's decoration work front and center — a proper gallery of past weddings, clear package options for different budgets, and an easy way for couples to book a consultation.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "MongoDB"],
    results: [
      "45+ qualified enquiries a month since launch",
      "A 25% consultation-to-booking conversion rate",
      "50+ past projects now showcased in an organized gallery",
      "A noticeable rise in consultation bookings from couples who found them online",
    ],
    highlights: [
      "A gallery showcasing 50+ real wedding decoration projects",
      "Online consultation booking, no back-and-forth calls needed",
      "Package options laid out clearly by budget",
      "A mobile-friendly design for couples planning on the go",
    ],
    link: "https://flowers-three-gamma.vercel.app/",
    challenge:
      "Photography had to be the star — any design choice competing with the decoration photos for attention would have undermined the whole site.",
    researchNote:
      "We looked at which of Flower Elegance's past Instagram posts got the most engagement to decide which project styles deserved the most space in the new gallery.",
    designApproach:
      "An editorial, gallery-led layout with generous whitespace, letting the floral and decor photography do almost all of the persuading.",
    developmentNote:
      "Built with Next.js and Tailwind, with a MongoDB-backed gallery so new wedding projects can be added without any redesign work.",
    outcome:
      "Flower Elegance now has a website that matches the quality of the weddings it decorates — and couples can tell within seconds of landing on it.",
    testimonial: {
      quote:
        "This website changed our business. We're now the first name couples think of when planning a wedding in our area, and our booking calendar stays full.",
      name: "Meera Sharma",
      role: "Owner, Flower Elegance",
    },
  }, */
];


export const googleReviews = [
  {
    name: "Zeeshan Ahmed",
    business: "A2ZDM - A Digital Marketing Company",
    category: "Marketing Agency",
    rating: 5,
    review:
      "This website changed how people see our business. We're now treated as the go-to marketing team in our region, and our enquiries have grown well beyond what we expected.",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    name: "Gautam Rathore",
    business: "Avantika Travels",
    category: "Travels",
    rating: 5,
    review:
      "You built exactly the website I wanted, within my budget, with an interface that's genuinely easy to use — for us and for our customers. If I ever need technical support again, you're who I'm calling.",
    date: "February 2025",
    image: "/logobg1.png",
  },
  {
    name: "Salman Khan",
    business: "MyMechanic24 - A Car Repair and Service Garage",
    category: "Service",
    rating: 5,
    review:
      "Our admission enquiries improved noticeably after the website went live. Communication throughout the project was clear and they responded quickly whenever we had changes.",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80",
  },
 /*  {
    name: "Nisha Chouhan",
    business: "Casa Interiors Studio",
    category: "Interior Design",
    rating: 5,
    review:
      "They understood that our photography needed to be the star of the site. The final result is exactly the premium feel we wanted for our portfolio.",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "Rajesh Patidar",
    business: "Shree Ram Realty",
    category: "Real Estate",
    rating: 5,
    review:
      "Honest team — they told us clearly what would and wouldn't work instead of just agreeing to everything. The property pages have made a real difference in buyer conversations.",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  }, */
];

export const industries = [
  { name: "Restaurants", icon: "UtensilsCrossed" },
  { name: "Doctors & Clinics", icon: "Stethoscope" },
  { name: "Schools & Institutes", icon: "GraduationCap" },
  { name: "Hotels", icon: "Building2" },
  { name: "Builders & Real Estate", icon: "Home" },
  { name: "Retail", icon: "ShoppingBag" },
  { name: "Startups", icon: "Rocket" },
  { name: "Professionals", icon: "Briefcase" },
];

export const processSteps = [
  { title: "Discovery", detail: "We learn about your business, customers, and what success looks like for you." },
  { title: "Planning", detail: "We map out the structure, content, and priorities before any design begins." },
  { title: "Design", detail: "A custom visual direction built around your brand — never a recycled template." },
  { title: "Development", detail: "Clean, fast, production-ready code — built mobile-first." },
  { title: "Testing", detail: "Checked across real devices and browsers before anything goes live." },
  { title: "Launch", detail: "Your site goes live, connected, tracked, and ready for enquiries." },
  { title: "Support", detail: "We stay reachable after launch — this isn't a hand-off-and-disappear relationship." },
];

export const faqs = [
  {
    q: "Are you an agency or freelancers?",
    a: "We're a two-person digital studio — not a large agency. That's deliberate: you always talk directly to the people doing the work, with no account managers in between.",
  },
  {
    q: "Do you only work with businesses in Indore?",
    a: "Indore is our primary focus and where we work in person with clients, but we take on remote projects elsewhere in India as well.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on the number of pages, features, and timeline. Share your requirements on WhatsApp and we'll give you a clear, honest quote — no hidden costs.",
  },
  {
    q: "How long does a typical project take?",
    a: "Websites typically take 2–4 weeks. Google Business Profile setup can be live within a few days. Ad campaigns and SEO are ongoing services with monthly check-ins.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We stay reachable for questions, small updates, and troubleshooting after your project goes live — this is a long-term relationship, not a one-time transaction.",
  },
  {
    q: "Can you redesign my existing website instead of building new?",
    a: "Yes — we regularly take over outdated or poorly-performing websites and rebuild them properly.",
  },
  {
    q: "Do you provide hosting and domain setup?",
    a: "We can guide you through domain and hosting setup, or handle it for you if you'd prefer not to manage the technical side yourself.",
  },
  {
    q: "What makes you different from other web developers in Indore?",
    a: "We're honest about what we can and can't promise, we don't oversell services you don't need, and you work directly with the founders on every project — not a rotating cast of freelancers.",
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Actually Cost in India?",
    category: "Pricing",
    excerpt:
      "The honest, unglamorous answer to the question every business owner asks first — with real factors that move the price up or down.",
    date: "June 2026",
    readTime: "5 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80",
    content: [
      "This is almost always the first question we get, and the honest answer is: it depends — but not in a way that's meant to dodge the question. A one-page site for a local shop and a full booking platform for a hotel chain are simply not the same job, and pricing them the same would be dishonest in either direction.",
      "In the Indian market, a simple, well-built brochure website for a small business — a handful of pages, mobile-friendly, with a contact form — typically falls somewhere in the ₹10,000 to ₹30,000 range. Add a blog, a portfolio gallery, or a booking form, and you're looking at more like ₹30,000 to ₹70,000, depending on how custom the design is. Full platforms with logins, payments, or admin dashboards — think an e-commerce store or a booking system — usually start upwards of ₹80,000 and scale with complexity.",
      "What actually moves the number isn't the number of pages — it's the number of decisions. A template with your logo dropped in is cheap because nobody had to think about your business. A site designed around how your specific customers actually browse and book takes longer, and that time is what you're paying for.",
      "The other factor worth asking about upfront is what happens after launch. Some developers hand over the files and disappear. Others (us included) stay reachable for questions and small fixes. That ongoing relationship is worth factoring into your decision — a cheaper site that nobody will touch again isn't always cheaper in the long run.",
      "If you want a number specific to your business instead of a range, that's a five-minute WhatsApp conversation, not a form to fill out.",
    ],
    resources: [
      { label: "Google's guide to small business websites", url: "https://smallbusiness.withgoogle.com" },
    ],
    faqs: [
      {
        q: "Is a cheaper website always a bad idea?",
        a: "Not necessarily — if your needs are genuinely simple, a lean, affordable site can be exactly right. The problem is when 'cheap' means a recycled template that doesn't represent your business well, or a developer who's unreachable after launch.",
      },
      {
        q: "Do I need to pay for hosting and a domain separately?",
        a: "Yes, usually. Domain and hosting are ongoing costs (often a few thousand rupees a year) separate from the one-time cost of building the website itself. Always ask what's included before comparing quotes.",
      },
    ],
  },
  {
    id: 2,
    slug: "how-long-does-a-website-take",
    title: "How Long Does It Actually Take to Build a Website?",
    category: "Planning",
    excerpt:
      "The real timeline for a small business website — and the one thing that determines whether you launch on time or three weeks late.",
    date: "May 2026",
    readTime: "4 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000&q=80",
    content: [
      "For most small business websites, the realistic timeline is two to four weeks from the first call to going live. A simple, few-page site can move faster; something with custom booking flows or an admin dashboard understandably takes longer.",
      "But here's what actually determines your timeline, and it isn't your developer's schedule — it's how quickly you can hand over content. Photos, service descriptions, pricing, your logo — every day spent waiting on these is a day the project isn't moving. We've seen simple websites take six weeks purely because content took five weeks to arrive.",
      "The fastest projects we've worked on had one thing in common: the business owner treated the first week like homework. They gathered their best photos, wrote rough descriptions of their services (even in bullet points), and sent it all over before we'd finished the design mockups. That single habit alone can cut a month-long project down to two weeks.",
      "If you don't have professional photos or polished copy, don't let that stop you from starting — we can work with what you have and guide you on what's worth shooting properly later. Waiting for 'perfect' content is usually the biggest delay of all.",
      "One more honest note: a launch date isn't the finish line. Budget a little time after going live for small tweaks — text you want to reword once you see it live, a button you want moved. That's normal, not a sign anything went wrong.",
    ],
    resources: [],
    faqs: [
      {
        q: "Can a website really be built in one week?",
        a: "For a very simple single-page site with content ready to go, yes. For anything with multiple pages, custom forms, or real design work, one week is possible but tight — quality tends to suffer when timelines are compressed that far.",
      },
      {
        q: "What slows a website project down the most?",
        a: "Waiting on content — photos, copy, and approvals — is by far the most common delay, more than any technical challenge.",
      },
    ],
  },
  {
    id: 3,
    slug: "instagram-page-or-website",
    title: "Is an Instagram Page Enough, or Do You Actually Need a Website?",
    category: "Strategy",
    excerpt:
      "A fair, non-salesy look at when Instagram alone genuinely works — and the point where it starts costing you customers.",
    date: "May 2026",
    readTime: "5 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1000&q=80",
    content: [
      "We'll say this upfront, even though we build websites for a living: for some businesses, a well-run Instagram page genuinely is enough for now. If you're a solo baker taking orders through DMs and your customers are mostly people who already follow you, a website might not move the needle yet.",
      "Where Instagram starts to fall short is discovery and trust. Someone who's never heard of you and finds you through a Google search — 'best tailor near me,' 'wedding photographer Indore' — is far less likely to trust a bare Instagram profile than a proper website with clear information, photos, and a way to contact you. Instagram also isn't built for search the way Google is; your posts age out of visibility within days.",
      "There's also a control issue. Instagram can restrict your reach, change its algorithm, or (rarely, but it happens) suspend an account for no clear reason — and everything you built disappears with it. A website is yours. Nobody can deprioritize it in an algorithm update.",
      "Our honest recommendation: keep Instagram for what it's good at — quick updates, behind-the-scenes content, and staying visible to people who already know you. Add a website when you want to be found by people who don't know you yet, when you're tired of repeating the same details in every DM, or when you want a link you can put on a signboard, a visiting card, or a Google listing that actually represents your business properly.",
      "The two aren't competing with each other. Most businesses that do well online use both — Instagram to stay top of mind, and a website to close the deal once someone's genuinely interested.",
    ],
    resources: [],
    faqs: [
      {
        q: "Can I just link my Instagram page from Google Business Profile instead of a website?",
        a: "You can, but it's a weaker impression. A website loads faster, looks more credible to a first-time visitor, and lets you control exactly what a potential customer sees first.",
      },
      {
        q: "Should I redesign my website to look like my Instagram feed?",
        a: "It should feel like the same brand, but a website has room to explain things Instagram can't — pricing, detailed services, and a proper way to enquire. Use the strengths of each rather than trying to copy one onto the other.",
      },
    ],
  },
  {
    id: 4,
    slug: "google-business-profile-vs-website",
    title: "Google Business Profile vs Website — Do You Need Both?",
    category: "Local Marketing",
    excerpt:
      "They look similar on the surface but do very different jobs. Here's what each one is actually for.",
    date: "April 2026",
    readTime: "4 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000&q=80",
    content: [
      "It's a fair question — both show your business name, hours, and contact details, so it can feel like they overlap. In practice, they do very different jobs, and skipping either one leaves money on the table.",
      "Your Google Business Profile is what shows up on Google Maps and in local search results when someone nearby searches for what you do. It's built for quick decisions — 'is this place open right now,' 'how far is it,' 'what do reviews say.' It's free, it's fast to set up, and if you serve local, walk-in customers, it's often the single highest-impact thing you can do online.",
      "Your website is where someone goes once they're actually considering you — to see your full range of services, understand your pricing, browse real photos of your work, or read something that convinces them you're the right choice over the next search result. A Google listing can't hold that much information without feeling cluttered; a website can.",
      "Here's the part people miss: they work together. Google trusts businesses more when their website and their Business Profile agree on the basics — same name, same address, same phone number, links between the two. A profile without a website looks incomplete to a cautious customer. A website without an optimized profile means you're invisible in the exact moment someone nearby is deciding where to go.",
      "If you can only do one thing this month, claim and complete your Google Business Profile — it's free and fast. But treat a proper website as the next step, not an optional extra, especially if your business depends on people trusting you before they ever call.",
    ],
    resources: [{ label: "Set up your Google Business Profile", url: "https://www.google.com/business/" }],
    faqs: [
      {
        q: "Which one should I do first if I have a limited budget?",
        a: "Google Business Profile — it's free and can start bringing in local visibility within days. A website is the natural next investment once you're ready to convert that visibility into trust.",
      },
      {
        q: "Do I need to link my website from my Google Business Profile?",
        a: "Yes, always. It's one of the simplest trust signals you can add, and it gives interested customers somewhere deeper to go than a one-line listing.",
      },
    ],
  },
  {
    id: 5,
    slug: "custom-website-vs-wordpress",
    title: "Custom-Coded Website vs WordPress — Which Should You Pick?",
    category: "Web Development",
    excerpt:
      "Neither option is universally 'better' — here's how to actually decide based on your business, not internet opinions.",
    date: "March 2026",
    readTime: "5 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80",
    content: [
      "This question comes up a lot, usually framed like there's a universally correct answer. There isn't — it depends on what you're building and how much control you want over it.",
      "WordPress makes sense when you need to publish content constantly and want to make small changes yourself without calling a developer every time — a blog-heavy site, a large content library, or a business that changes offers weekly. It's mature, well-documented, and there are plugins for almost anything, though that flexibility comes with a cost: plugin conflicts, slower load times if it's not maintained well, and ongoing update management that someone needs to own.",
      "A custom-coded website — built with something like Next.js, which is what we typically use — tends to be faster, lighter, and harder for someone else to accidentally break, because there's no plugin ecosystem to manage. It's a better fit when your site's main job is making a strong first impression and converting visitors, rather than publishing content daily. The tradeoff is that day-to-day text or image changes usually go through your developer rather than a self-service dashboard, unless that's specifically built in.",
      "A useful way to decide: if your business changes its offerings, prices, or content weekly, lean WordPress or a custom site with a proper content management setup. If your site's job is mostly to look sharp, load fast, and convert enquiries — and content changes are occasional — a custom-coded site usually performs better and ages better too.",
      "Whichever direction you lean, the deciding factor shouldn't be which one sounds more 'modern.' It should be how you actually plan to use the site once it's live.",
    ],
    resources: [],
    faqs: [
      {
        q: "Is WordPress less secure than a custom website?",
        a: "Not inherently, but its popularity makes it a common target, and outdated plugins are the usual weak point. A well-maintained WordPress site is perfectly secure; a neglected one is genuinely risky.",
      },
      {
        q: "Can I move from WordPress to a custom site later if I outgrow it?",
        a: "Yes, this is common as businesses scale and need better performance or a more tailored experience. Your content and branding can carry over even if the underlying technology changes.",
      },
    ],
  },
  {
    id: 6,
    slug: "how-to-choose-a-web-developer",
    title: "How to Choose a Web Developer Who Won't Waste Your Time or Money",
    category: "Hiring",
    excerpt:
      "A few honest questions to ask before you hire anyone — including us — to build your website.",
    date: "February 2026",
    readTime: "5 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=80",
    content: [
      "We'll be upfront: this list applies to us too. If a developer can't answer these clearly, that's useful information before you've spent a rupee.",
      "Ask to see actual, live websites they've built — not just design mockups. A working site tells you far more than a portfolio screenshot ever will, because it shows you how their work performs, loads, and holds up once it's real.",
      "Ask what happens if you want a small change three months after launch. Some developers vanish after the final payment; others stay reachable. Neither is wrong, but you deserve to know which one you're hiring before you need the answer.",
      "Ask how they'll get to know your business before designing anything. A developer who jumps straight into templates without asking about your customers, your competitors, or what success looks like for you is optimizing for speed, not for your results.",
      "Be cautious of anyone promising extremely fast turnarounds at extremely low prices with no real conversation about your business first — it usually means a recycled template with your logo swapped in, not something built for you. Equally, be cautious of vague, inflated promises about guaranteed rankings or guaranteed leads; nobody can honestly promise those outcomes.",
      "Finally, trust how they communicate during the sales conversation, because that's the best preview of how they'll communicate once you're a paying client. If they're clear, responsive, and honest about tradeoffs now, that pattern usually continues. If you're already chasing replies before you've signed anything, that's worth noticing.",
    ],
    resources: [],
    faqs: [
      {
        q: "Should I always go with the cheapest quote?",
        a: "Not automatically. Compare what's actually included — pages, revisions, post-launch support — before comparing price alone. A cheaper quote missing key deliverables can end up costing more once you fill the gaps.",
      },
      {
        q: "Is it better to hire a freelancer, a small studio, or a large agency?",
        a: "Each has tradeoffs. Freelancers and small studios (like us) tend to offer more direct communication and often better value; larger agencies may offer more resources but less personal attention. Choose based on your budget and how hands-on you want the relationship to be.",
      },
    ],
  },
  {
    id: 7,
    slug: "why-websites-need-maintenance",
    title: "Why a Website Isn't a 'One-Time' Purchase",
    category: "Website Maintenance",
    excerpt:
      "Understanding why the work doesn't actually stop the day your site goes live — and what happens if you treat it like it does.",
    date: "January 2026",
    readTime: "5 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1000&q=80",
    content: [
      "A lot of business owners think of a website the way they think of a signboard — pay once, put it up, done. It's an understandable assumption, but it's not quite how the internet works, and it's worth understanding why.",
      "The web itself keeps changing underneath your site. Browsers update, security standards shift, and the plugins or libraries a site depends on eventually need updating too. A site left completely untouched for a couple of years often starts showing cracks — broken forms, slow load times, or worse, security vulnerabilities that weren't there at launch.",
      "Your business changes too. New services, updated pricing, new photos of finished work, a phone number that changed — a website that isn't maintained quietly drifts out of sync with the business it's supposed to represent, and customers notice inconsistencies faster than you'd think.",
      "There's also the search engine side of it. Google tends to favor sites that show signs of being actively maintained — fresh content, working links, decent load times — over ones that look abandoned. A site that hasn't been touched in years isn't just a missed opportunity; it can actively lose ground to competitors who are updating theirs regularly.",
      "None of this means constant, expensive overhauls. Maintenance can be as simple as a monthly check-in: does everything still load properly, are the forms still working, is anything outdated. It's a small, regular habit — not a big recurring project — and it's the difference between a website that keeps working for you and one that quietly stops.",
    ],
    resources: [],
    faqs: [
      {
        q: "How often should a small business website actually be checked?",
        a: "A quick check once a month is enough for most small business sites — confirming forms work, links aren't broken, and content is current. A deeper technical review once or twice a year is a reasonable rhythm beyond that.",
      },
      {
        q: "What's the risk of just leaving a website completely untouched?",
        a: "Over time: outdated information misleading customers, slowly declining search visibility, and in some cases, real security risks if the underlying software isn't kept current.",
      },
    ],
  },
  {
    id: 8,
    slug: "free-tools-to-check-your-website-every-month",
    title: "5 Free Tools Every Business Owner Should Check Once a Month",
    category: "Website Maintenance",
    excerpt:
      "You don't need to be technical to understand how your website is actually doing — these free tools do most of the work for you.",
    date: "December 2025",
    readTime: "6 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&q=80",
    content: [
      "You don't need to learn to code to keep an eye on your website — you just need to know which free tools to glance at once a month, and roughly what they're telling you. Here are the five worth bookmarking.",
      "Google Search Console shows you exactly how your site is doing in Google search — which pages are showing up, which search terms are bringing people to your site, and whether Google has run into any errors trying to read your pages. If your traffic ever drops suddenly, this is usually the first place to look for why.",
      "Google Analytics tells you what happens after someone lands on your site — how many visitors you're getting, which pages they spend time on, and where they tend to leave. It's the closest thing to watching over a customer's shoulder as they browse, without actually being there.",
      "PageSpeed Insights checks how fast your website loads, on both mobile and desktop, and gives specific suggestions if it's slow. Since a slow site quietly pushes visitors away before they even see your content, this is worth a check whenever you add new photos or features that might be weighing the page down.",
      "SEO Site Checkup runs a broader health check on your site — missing meta descriptions, broken links, mobile-friendliness, and a handful of other technical basics — and hands you a simple report instead of technical jargon. It's a good once-a-month sanity check even if you're not actively doing SEO work.",
      "Cloudinary is slightly different from the rest — it's a tool for managing and optimizing the images on your site, so photos load quickly without looking compressed or blurry. If your website features a lot of visuals (a restaurant menu, a portfolio, a product catalog), it's worth knowing your images are being served in a way that doesn't slow everything else down.",
      "None of these require technical expertise to glance at. Set a recurring reminder for the first of every month, spend fifteen minutes across all five, and you'll catch most problems long before a customer does.",
    ],
    resources: [
      { label: "Google Search Console", url: "https://search.google.com/search-console/about" },
      { label: "Google Analytics", url: "https://analytics.google.com" },
      { label: "PageSpeed Insights", url: "https://pagespeed.web.dev" },
      { label: "SEO Site Checkup", url: "https://seositecheckup.com" },
      { label: "Cloudinary", url: "https://cloudinary.com" },
    ],
    faqs: [
      {
        q: "Do I need to pay for any of these tools?",
        a: "All five have solid free tiers that are more than enough for a small business website. You'd only need to consider a paid plan if you're managing a very large site or need advanced features.",
      },
      {
        q: "What if I don't understand what the reports are telling me?",
        a: "That's normal at first — most of these tools are built for marketers and developers, not business owners. Skim for anything flagged in red or marked as an 'error,' and if something looks concerning, that's a good moment to ask your web developer to take a look.",
      },
    ],
  },
  {
    id: 9,
    slug: "is-your-website-actually-working",
    title: "How to Tell If Your Website Is Actually Bringing You Customers",
    category: "Website Maintenance",
    excerpt:
      "A website that looks good but isn't tracked properly is a guess, not a business tool. Here's how to actually know if it's working.",
    date: "November 2025",
    readTime: "5 min read",
    author: "Aamin",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
    content: [
      "A surprising number of business websites go live and are never checked again — which means nobody actually knows if the site is helping the business or just sitting there. You don't need to guess; there are clear signs to look for.",
      "Start with Google Analytics and ask two simple questions: are people actually visiting the site, and are they doing anything once they arrive? A steady trickle of visitors who leave within a few seconds usually points to a mismatch between what brought them there and what they found — worth investigating before assuming the site 'isn't working.'",
      "Then check Google Search Console for what people were searching when they found you. If the terms bringing people to your site have nothing to do with what you actually offer, your content might be attracting the wrong audience, even if the visitor numbers look fine on the surface.",
      "The clearest signal, though, isn't a dashboard at all — it's your own enquiry count. Are WhatsApp messages, calls, or contact form submissions actually increasing since the site went live? A website's real job is generating conversations that lead to business, and that's ultimately measured in your phone, not just in analytics charts.",
      "If the numbers aren't where you'd like them, the fix is rarely 'redesign everything.' It's usually smaller and more specific — a confusing call-to-action, a slow-loading page losing visitors before they see your offer, or a service that isn't clearly explained. Look at where in the journey people are dropping off before assuming the whole site needs to change.",
      "Checking this doesn't need to be a monthly ritual with spreadsheets. A five-minute look at Analytics and Search Console every couple of weeks, paired with an honest look at your own enquiry numbers, tells you almost everything you need to know.",
    ],
    resources: [
      { label: "Google Analytics", url: "https://analytics.google.com" },
      { label: "Google Search Console", url: "https://search.google.com/search-console/about" },
    ],
    faqs: [
      {
        q: "My website gets visitors but no enquiries — what does that usually mean?",
        a: "Often it's a clarity problem, not a traffic problem — visitors aren't sure what to do next, or the offer isn't explained clearly enough. Look closely at your calls-to-action and how easy it is to actually contact you.",
      },
      {
        q: "How long should I wait before judging whether a new website is working?",
        a: "Give it at least four to six weeks, especially if you're also relying on search engines to start ranking your pages. Early traffic is often lower simply because Google hasn't fully indexed and trusted the new site yet.",
      },
    ],
  },
];
