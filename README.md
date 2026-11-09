# Ahmed Saleem: personal portfolio

Next.js (App Router, JavaScript) + Tailwind CSS 3 + Framer Motion. No TypeScript, no Bootstrap.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Contact form (Web3Forms, same service as the old portfolio)

The form posts from the browser straight to Web3Forms, exactly like the old portfolio did.
(Web3Forms' free plan rejects server-side requests, which is why a server route failed on localhost.)

Messages are delivered to the email the access key was created with.
To receive them at **ahmedsaleemdayala@gmail.com**: go to https://web3forms.com, enter that email, copy the key
that arrives, and put it in `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
```

Restart `npm run dev` after changing it. On Vercel/Netlify add the same variable in Environment Variables.

## SEO / showing up for "Ahmed Saleem"

1. Deploy to a real URL and set `NEXT_PUBLIC_SITE_URL` to it.
2. Add the site in Google Search Console, verify it (paste the token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`),
   submit `https://YOUR-URL/sitemap.xml`, and use "Request indexing" on the home page.
3. Link to the site from your GitHub, LinkedIn and Instagram profiles. Google uses those links to connect the name to the site.

## Where to edit content

Everything is in `src/data/site.js`: experience, education, courses, projects, skills, stats, social links,
and `TESTIMONIALS` (empty = placeholder layout; add `{ quote, name, role }` and it renders automatically).
The CV is `public/Ahmed_Saleem_CV.pdf`. Replace the file, keep the name.
Favicon files are in `app/` (`icon.png`, `apple-icon.png`, `favicon.ico`). OG image: `public/og-image.png`.
