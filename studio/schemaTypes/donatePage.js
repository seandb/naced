export default {
  name: 'donatePage',
  title: 'Donate Page',
  type: 'document',
  fields: [
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text', rows: 3 },
      ],
    },
    {
      name: 'impactLevels',
      title: 'Donation Impact Levels',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'amount', title: 'Amount (e.g. $25 or Custom)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'amount', subtitle: 'label' },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Donate Page' };
    },
  },
};
