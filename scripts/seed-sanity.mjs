/**
 * Seed Sanity with the fallback content from the NACED site pages.
 * Usage: SANITY_TOKEN="<your token>" node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'c6lf00mx',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// ─── Site Settings ────────────────────────────────────────────────────────────
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'NACED',
  tagline: 'Advancing Creative Economic Development',
  contactInfo: {
    email: 'info@naced.org',
    phone: '(312) 555-0192',
    address: '150 N. Michigan Ave, Suite 2800\nChicago, IL 60601',
  },
  socialLinks: {
    twitter: 'https://twitter.com/nacedorg',
    linkedin: 'https://linkedin.com/company/naced',
    instagram: 'https://instagram.com/nacedorg',
    facebook: 'https://facebook.com/nacedorg',
  },
};

// ─── Home Page ────────────────────────────────────────────────────────────────
const homePage = {
  _id: 'homePage',
  _type: 'homePage',
  hero: {
    heading: 'Fueling Creative Economies Across America',
    subheading: 'NACED brings together artists, entrepreneurs, policymakers, and community leaders to build thriving local economies powered by creativity and culture.',
    primaryCta: { label: 'Explore Our Programs', href: '/programs' },
    secondaryCta: { label: 'Our Impact Story', href: '/about' },
  },
  impactStats: [
    { _key: 'stat1', label: 'Communities Served', value: '48', icon: '🏙️' },
    { _key: 'stat2', label: 'Creative Entrepreneurs Supported', value: '1,200+', icon: '🎨' },
    { _key: 'stat3', label: 'Grants Awarded', value: '$4.2M', icon: '💰' },
    { _key: 'stat4', label: 'Years of Impact', value: '15', icon: '📅' },
  ],
};

// ─── About Page ───────────────────────────────────────────────────────────────
const aboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  mission: 'NACED advances creative economic development by equipping artists, makers, and cultural organizations with the resources, knowledge, and networks they need to build sustainable creative enterprises — and by helping communities recognize and invest in the creative assets that drive economic resilience.',
  vision: 'A nation where creativity is understood, valued, and invested in as a driver of economic vitality — where every community has access to the creative infrastructure it needs to thrive.',
  values: [
    { _key: 'val1', title: 'Equity', description: 'We center the voices and needs of artists from under-resourced communities, ensuring our programs reach those who need them most.', icon: '⚖️' },
    { _key: 'val2', title: 'Community', description: 'Creative economies are built on relationships. We invest in the networks, trust, and social capital that make local creativity possible.', icon: '🤝' },
    { _key: 'val3', title: 'Innovation', description: 'We embrace new models, partnerships, and ideas — learning from every community we work with to continuously improve our approach.', icon: '💡' },
    { _key: 'val4', title: 'Impact', description: 'We measure what matters. Every program we run is evaluated against real outcomes for artists, communities, and local economies.', icon: '📈' },
  ],
  team: [
    { _key: 'tm1', name: 'Dr. Amara Johnson', title: 'Executive Director', bio: 'Former urban planner and practicing sculptor, Amara has spent 20 years at the intersection of arts policy and economic development.' },
    { _key: 'tm2', name: 'Marcus Rivera', title: 'Director of Programs', bio: 'Marcus brings 12 years of nonprofit leadership and a background in community organizing to NACED\'s program design and delivery.' },
    { _key: 'tm3', name: 'Dr. Sarah Kim', title: 'Research Director', bio: 'An economist specializing in cultural industries, Sarah leads NACED\'s signature research on the economic returns of creative investment.' },
    { _key: 'tm4', name: 'James Okafor', title: 'Development Director', bio: 'James has raised over $15M for mission-driven organizations and believes deeply in the power of storytelling to move donors to action.' },
    { _key: 'tm5', name: 'Priya Nair', title: 'Communications Manager', bio: 'Priya shapes how NACED\'s story reaches the world, with a background in journalism and digital strategy for advocacy organizations.' },
    { _key: 'tm6', name: 'Luis Morales', title: 'Program Officer, Grants', bio: 'Luis manages our grantmaking portfolio, working directly with artist-entrepreneurs and cultural organizations across our 48 communities.' },
  ],
};

// ─── Programs ─────────────────────────────────────────────────────────────────
const programs = [
  {
    _id: 'program-accelerator',
    _type: 'program',
    title: 'Creative Entrepreneur Accelerator',
    slug: { _type: 'slug', current: 'creative-entrepreneur-accelerator' },
    tagline: '12-Week Business Intensive',
    icon: '🚀',
    featured: true,
    order: 1,
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'A 12-week intensive program equipping artists and makers with the business skills to turn their creative practice into a sustainable livelihood. Cohort-based, peer-driven, and deeply practical.' }] }],
    outcomes: ['Viable business plan', 'Access to small business loans', 'Peer network of fellow creative entrepreneurs', 'One-on-one mentorship'],
  },
  {
    _id: 'program-cultural-planning',
    _type: 'program',
    title: 'Community Cultural Planning',
    slug: { _type: 'slug', current: 'community-cultural-planning' },
    tagline: 'Policy & Place',
    icon: '🏘️',
    featured: false,
    order: 2,
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'We partner with cities and towns to develop cultural master plans that recognize and amplify local creative assets. From asset mapping to policy recommendations.' }] }],
    outcomes: ['Cultural asset map', 'Policy framework', 'Stakeholder engagement report', 'Implementation roadmap'],
  },
  {
    _id: 'program-placemaking-grants',
    _type: 'program',
    title: 'Creative Placemaking Grants',
    slug: { _type: 'slug', current: 'creative-placemaking-grants' },
    tagline: 'Seed Funding for Public Art',
    icon: '🎭',
    featured: true,
    order: 3,
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Seed funding for public art, cultural districts, and creative reuse projects that transform underutilized spaces into community anchors and economic hubs.' }] }],
    outcomes: ['Up to $25,000 in seed funding', 'Technical assistance', 'Project documentation', 'Network visibility'],
  },
  {
    _id: 'program-rural',
    _type: 'program',
    title: 'Rural Creative Economy Initiative',
    slug: { _type: 'slug', current: 'rural-creative-economy' },
    tagline: 'Creativity Beyond the City',
    icon: '🌾',
    featured: false,
    order: 4,
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Supporting artists and makers in rural and small-town America — where creative assets are abundant but resources are scarce. Tailored workshops, peer networks, and micro-grants.' }] }],
    outcomes: ['Micro-grants up to $5,000', 'Regional peer network', 'Online skill workshops', 'Market access support'],
  },
  {
    _id: 'program-research',
    _type: 'program',
    title: 'Creative Industries Research',
    slug: { _type: 'slug', current: 'creative-industries-research' },
    tagline: 'Evidence-Based Advocacy',
    icon: '📊',
    featured: false,
    order: 5,
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Our research team publishes the definitive annual report on creative economy health across 48 communities. We translate data into advocacy tools for city leaders and funders.' }] }],
    outcomes: ['Annual State of Creative Economies Report', 'City-level data dashboards', 'Policy briefs', 'Public dataset access'],
  },
  {
    _id: 'program-youth',
    _type: 'program',
    title: 'Youth Creative Leadership',
    slug: { _type: 'slug', current: 'youth-creative-leadership' },
    tagline: 'The Next Generation',
    icon: '🌟',
    featured: false,
    order: 6,
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'A summer leadership program for high school students interested in arts entrepreneurship, connecting them with mentors, skills, and a vision for their creative futures.' }] }],
    outcomes: ['6-week summer program', 'Mentor matching', 'Mini-grant for a creative project', 'Alumni network'],
  },
];

// ─── Events ───────────────────────────────────────────────────────────────────
const events = [
  {
    _id: 'event-summit-2026',
    _type: 'event',
    title: 'Creative Economy Summit 2026',
    slug: { _type: 'slug', current: 'creative-economy-summit-2026' },
    date: '2026-05-14T09:00:00Z',
    endDate: '2026-05-15T17:00:00Z',
    location: 'Chicago, IL',
    category: 'Conference',
    featured: true,
    registrationUrl: '#',
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Our flagship annual gathering bringing together creative economy practitioners, city leaders, funders, and artists from across the country for two days of learning, networking, and inspiration.' }] }],
  },
  {
    _id: 'event-grant-workshop',
    _type: 'event',
    title: 'Grant Writing Workshop for Artists',
    slug: { _type: 'slug', current: 'grant-writing-workshop' },
    date: '2026-04-08T18:00:00Z',
    endDate: '2026-04-08T20:00:00Z',
    location: 'Online / Zoom',
    category: 'Workshop',
    featured: false,
    registrationUrl: '#',
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'A practical two-hour workshop walking artists through the grant writing process — from finding the right opportunities to crafting a compelling narrative.' }] }],
  },
  {
    _id: 'event-cultural-webinar',
    _type: 'event',
    title: 'Cultural District Planning Webinar',
    slug: { _type: 'slug', current: 'cultural-district-webinar' },
    date: '2026-04-22T14:00:00Z',
    endDate: '2026-04-22T15:30:00Z',
    location: 'Online / Zoom',
    category: 'Webinar',
    featured: false,
    registrationUrl: '#',
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Learn how cities are using cultural district designations to protect artists and attract investment. Featuring case studies from three NACED partner cities.' }] }],
  },
  {
    _id: 'event-detroit-market',
    _type: 'event',
    title: 'Detroit Makers Market & Mixer',
    slug: { _type: 'slug', current: 'detroit-makers-market' },
    date: '2026-05-30T16:00:00Z',
    endDate: '2026-05-30T20:00:00Z',
    location: 'Detroit, MI',
    category: 'Community',
    featured: false,
    registrationUrl: '#',
    description: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'A community celebration of Detroit\'s maker economy — featuring local vendors, live music, and a mixer for creative entrepreneurs to connect with NACED program staff.' }] }],
  },
];

// ─── News Posts ───────────────────────────────────────────────────────────────
const posts = [
  {
    _id: 'post-creative-districts',
    _type: 'post',
    title: 'How Creative Districts Are Revitalizing Rust Belt Cities',
    slug: { _type: 'slug', current: 'creative-districts-rust-belt' },
    excerpt: 'Five years into our partnership with three Midwestern cities, the data is clear: investing in arts infrastructure pays dividends far beyond the cultural sector.',
    category: 'Report',
    publishedAt: '2026-03-10T00:00:00Z',
    author: 'Maria Chen',
    featured: true,
    body: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Five years into our partnership with Cleveland, Pittsburgh, and Detroit, we can now say with confidence: strategic investment in creative infrastructure generates measurable economic returns across every sector of the local economy.' }] }, { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Our longitudinal study tracked 240 indicators across arts, business formation, real estate, tourism, and civic engagement. Creative districts outperformed adjacent neighborhoods on every metric within three years of designation.' }] }],
  },
  {
    _id: 'post-meet-jamal',
    _type: 'post',
    title: 'Meet Jamal: From Food Truck to Brick-and-Mortar',
    slug: { _type: 'slug', current: 'meet-jamal-food-truck' },
    excerpt: 'Through NACED\'s Accelerator program, chef and entrepreneur Jamal Washington built the business acumen to open his first restaurant — and he\'s not stopping there.',
    category: 'Story',
    publishedAt: '2026-02-25T00:00:00Z',
    author: 'Lisa Park',
    featured: false,
    body: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'When Jamal Washington enrolled in NACED\'s Creative Entrepreneur Accelerator, he had a food truck, a following, and a dream. What he didn\'t have was a business plan, a banking relationship, or any idea how to negotiate a commercial lease.' }] }, { _type: 'block', _key: 'b2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: 'Twelve weeks later, he had all three — plus a mentor, a peer cohort of fellow food entrepreneurs, and a clear path to his first brick-and-mortar location in Detroit\'s Midtown neighborhood.' }] }],
  },
  {
    _id: 'post-state-of-creative-2025',
    _type: 'post',
    title: 'NACED Releases 2025 State of Creative Economies Report',
    slug: { _type: 'slug', current: 'state-of-creative-economies-2025' },
    excerpt: 'Our flagship annual report documents the health of creative economies across 48 communities, revealing both encouraging trends and persistent challenges.',
    category: 'Announcement',
    publishedAt: '2026-02-01T00:00:00Z',
    author: 'NACED Staff',
    featured: false,
    body: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Today we release the 2025 State of Creative Economies Report — our most comprehensive look yet at the health of creative industries across the 48 communities in the NACED network.' }] }],
  },
  {
    _id: 'post-nea-cuts',
    _type: 'post',
    title: 'What the 2025 NEA Budget Cuts Mean for Creative Entrepreneurs',
    slug: { _type: 'slug', current: 'nea-budget-cuts-2025' },
    excerpt: 'An honest analysis of recent federal arts funding reductions — and what artists and community organizations can do to adapt and advocate.',
    category: 'News',
    publishedAt: '2026-01-15T00:00:00Z',
    author: 'Dr. Sarah Kim',
    featured: false,
    body: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'The recent reductions to the National Endowment for the Arts budget are significant — and the impact will be felt unevenly across the creative economy. Here\'s what we know, what we don\'t, and what you can do.' }] }],
  },
  {
    _id: 'post-craft-fair',
    _type: 'post',
    title: 'The Hidden Economy of Craft Fairs: New Data',
    slug: { _type: 'slug', current: 'craft-fair-economy-data' },
    excerpt: 'A new NACED study reveals that craft and maker markets generate 3x the economic activity previously estimated — and most of it stays local.',
    category: 'Report',
    publishedAt: '2025-12-10T00:00:00Z',
    author: 'Maria Chen',
    featured: false,
    body: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Craft fairs and maker markets have long been dismissed as hobbyist gatherings with minimal economic impact. New data from NACED\'s two-year study of 62 markets in 19 cities tells a very different story.' }] }],
  },
  {
    _id: 'post-new-board',
    _type: 'post',
    title: 'NACED Welcomes Five New Board Members',
    slug: { _type: 'slug', current: 'new-board-members-2025' },
    excerpt: 'We\'re thrilled to announce the addition of five outstanding leaders to the NACED board, bringing expertise in law, finance, urban planning, and the arts.',
    category: 'Announcement',
    publishedAt: '2025-11-20T00:00:00Z',
    author: 'NACED Staff',
    featured: false,
    body: [{ _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'We are delighted to welcome five new members to the NACED Board of Directors, each bringing deep expertise that will strengthen our work and expand our reach.' }] }],
  },
];

// ─── Seed ─────────────────────────────────────────────────────────────────────
async function seed() {
  if (!process.env.SANITY_TOKEN) {
    console.error('Error: SANITY_TOKEN environment variable is required.');
    console.error('Usage: SANITY_TOKEN="<your token>" node scripts/seed-sanity.mjs');
    process.exit(1);
  }

  const docs = [siteSettings, homePage, aboutPage, ...programs, ...events, ...posts];
  console.log(`Seeding ${docs.length} documents to Sanity project c6lf00mx...`);

  for (const doc of docs) {
    try {
      await client.createOrReplace(doc);
      console.log(`✓ ${doc._type}: ${doc._id}`);
    } catch (err) {
      console.error(`✗ ${doc._type}: ${doc._id} — ${err.message}`);
    }
  }

  console.log('\nDone! Visit https://naced.sanity.studio to see your content.');
}

seed();
