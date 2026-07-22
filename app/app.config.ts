export default defineAppConfig({
  title: 'Sink',
  documentation: 'https://docs.sink.cool',
  github: 'https://github.com/mlaplante/Sink',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: '',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
