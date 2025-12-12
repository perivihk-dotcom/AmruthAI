# AmruthAI SEO Setup Guide - Google Search Visibility

This guide will help you get www.amruthai.com appearing in Google Search results.

## ✅ Already Done (Code Changes)

I've already added the following to your website:

1. **Meta Tags** - Title, description, keywords in `index.html`
2. **Open Graph Tags** - For social media sharing (Facebook, LinkedIn)
3. **Twitter Cards** - For Twitter sharing
4. **Structured Data (JSON-LD)** - Organization, LocalBusiness, WebSite schemas
5. **robots.txt** - Tells search engines what to crawl
6. **sitemap.xml** - Lists all your pages for Google

---

## 🚀 Steps to Submit to Google Search

### Step 1: Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Start Now"** and sign in with your Google account
3. Click **"Add Property"**
4. Select **"URL prefix"** and enter: `https://www.amruthai.com`
5. Click **Continue**

### Step 2: Verify Domain Ownership

Choose ONE of these methods:

#### Option A: HTML Tag (Easiest for Vercel)
1. Google will give you a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
2. Add this to `frontend/public/index.html` inside the `<head>` section
3. Deploy to Vercel
4. Click **Verify** in Google Search Console

#### Option B: DNS Record (Alternative)
1. Google will give you a TXT record
2. Go to your domain registrar (where you bought amruthai.com)
3. Add the TXT record to DNS settings
4. Wait 5-10 minutes, then click **Verify**

### Step 3: Submit Sitemap

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Status should show "Success"

### Step 4: Request Indexing

1. Go to **URL Inspection** (left sidebar)
2. Enter your homepage URL: `https://www.amruthai.com`
3. Click **Request Indexing**
4. Repeat for other important pages:
   - `https://www.amruthai.com/services`
   - `https://www.amruthai.com/about`
   - `https://www.amruthai.com/contact`

---

## 📊 Google Business Profile (Highly Recommended)

This helps your company appear in Google Maps and local searches.

1. Go to [Google Business Profile](https://business.google.com)
2. Click **Manage Now**
3. Enter business name: **AmruthAI**
4. Select category: **Software Company** or **IT Services**
5. Add your address: Chennai, Tamil Nadu, India
6. Add phone: +91 9440203095
7. Add website: https://www.amruthai.com
8. Verify your business (Google will send a postcard or call)

---

## 🔍 Keywords Your Site Will Rank For

Based on your content, these are your target keywords:

**Primary Keywords:**
- AmruthAI
- AI solutions Chennai
- AI company India
- Web development Chennai
- App development India

**Secondary Keywords:**
- AI automation services
- Machine learning solutions
- Custom AI development
- AI consulting India
- Chatbot development
- Business automation AI

**Long-tail Keywords:**
- AI solutions for business in Chennai
- Best AI company in Tamil Nadu
- Web and app development company India
- AI ML solutions provider

---

## ⏱️ Timeline Expectations

| Action | Time to See Results |
|--------|---------------------|
| Google Search Console verification | Immediate |
| Sitemap submission | 1-2 days |
| First indexing | 3-7 days |
| Appearing in search results | 1-4 weeks |
| Ranking improvements | 1-3 months |
| Good rankings | 3-6 months |

---

## 📈 Additional SEO Tips

### 1. Create Quality Content
- Add a blog section with AI-related articles
- Write case studies of your projects
- Create service-specific landing pages

### 2. Get Backlinks
- List on Indian business directories
- Get featured on tech blogs
- Partner with other companies for mentions

### 3. Social Media Presence
- Post regularly on LinkedIn, Twitter
- Share your website link
- Engage with AI community

### 4. Monitor Performance
- Check Google Search Console weekly
- Track which keywords bring traffic
- Fix any crawl errors

---

## 🛠️ Vercel Deployment

After making changes, deploy to Vercel:

```bash
cd frontend
npm run build
# Vercel will auto-deploy if connected to Git
```

Or push to your Git repository and Vercel will auto-deploy.

---

## 📞 Need Help?

If you face any issues:
1. Check Google Search Console for errors
2. Use [Google Rich Results Test](https://search.google.com/test/rich-results) to verify structured data
3. Use [PageSpeed Insights](https://pagespeed.web.dev/) to check site speed

---

## ✅ Checklist

- [ ] Deploy updated code to Vercel
- [ ] Set up Google Search Console
- [ ] Verify domain ownership
- [ ] Submit sitemap
- [ ] Request indexing for all pages
- [ ] Set up Google Business Profile
- [ ] Share website on social media
- [ ] Wait 1-4 weeks for Google to index

Good luck! 🚀
