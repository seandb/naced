export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string', description: 'Small text above the heading, e.g. "Making an Impact Since 2010"' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text', rows: 2 },
        {
          name: 'image',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'object',
          fields: [
            { name: 'label', title: 'Button Label', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
        {
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'object',
          fields: [
            { name: 'label', title: 'Button Label', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'missionTeaser',
      title: 'Mission Teaser Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'body1', title: 'Body Paragraph 1', type: 'text', rows: 3 },
        { name: 'body2', title: 'Body Paragraph 2', type: 'text', rows: 3 },
        { name: 'ctaLabel', title: 'CTA Link Label', type: 'string' },
        { name: 'testimonialQuote', title: 'Testimonial Quote', type: 'text', rows: 3 },
        { name: 'testimonialName', title: 'Testimonial Author Name', type: 'string' },
        { name: 'testimonialTitle', title: 'Testimonial Author Title', type: 'string' },
      ],
    },
    {
      name: 'impactStats',
      title: 'Impact Stats',
      type: 'array',
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Stat Number / Value', type: 'string' },
            { name: 'label', title: 'Stat Label', type: 'string' },
          ],
          preview: {
            select: { title: 'number', subtitle: 'label' },
          },
        },
      ],
    },
    {
      name: 'featuredPrograms',
      title: 'Featured Programs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'program' }] }],
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'featuredPost',
      title: 'Featured News Post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Page Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 2 },
      ],
    },
  ],
  preview: {
    select: { title: 'hero.heading' },
    prepare({ title }) {
      return { title: title || 'Home Page' };
    },
  },
};
