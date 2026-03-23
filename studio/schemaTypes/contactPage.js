export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'pageHeader',
      title: 'Page Header',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'text', rows: 2 },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page' };
    },
  },
};
