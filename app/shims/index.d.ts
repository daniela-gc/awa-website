declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
}

interface Post {
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  publishedAt: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}

interface Page {
  title: string;
  subtitle?: string;
  slug?: string;
  content: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}

interface PortfolioPiece {
  title: string;
  featuredImage: string;
  socialMediaLink?: string;
}

interface StaffMember {
  title: string;
  featuredImage: string;
  role: string;
  bio: string;
  externalLinks?: string;
}

interface Artist {
  title: string;
  featuredImage: string;
  bio: string;
  externalLinks?: string;
}
