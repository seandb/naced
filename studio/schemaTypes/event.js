export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Conference', value: 'Conference' },
          { title: 'Webinar', value: 'Webinar' },
          { title: 'Community', value: 'Community' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'date',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date & Time',
      type: 'datetime',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Chicago, IL" or "Online / Zoom"',
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Event Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Date (Upcoming First)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      const date = subtitle ? new Date(subtitle).toLocaleDateString() : '';
      return { title, subtitle: date, media };
    },
  },
};
