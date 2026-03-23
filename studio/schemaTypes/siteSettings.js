export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'NACED',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'National Association for Creative Economic Development',
    },
    {
      name: 'description',
      title: 'Site Description (SEO)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL / Path', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter / X URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
      ],
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text', rows: 3 },
        { name: 'hours', title: 'Office Hours', type: 'string' },
      ],
    },
    {
      name: 'ein',
      title: 'EIN Number',
      type: 'string',
      description: 'e.g. 12-3456789',
    },
    {
      name: 'annualReportsUrl',
      title: 'Annual Reports URL',
      type: 'url',
    },
    {
      name: 'zeffyDonationUrl',
      title: 'Zeffy Donation Page URL',
      type: 'url',
    },
  ],
  preview: {
    select: { title: 'siteName' },
  },
};
