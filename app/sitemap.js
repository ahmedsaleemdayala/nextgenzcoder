import { SITE } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap() {
  return [{ url: SITE.url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
