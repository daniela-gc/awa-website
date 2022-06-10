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
  position: number;
}

interface Artist {
  title: string;
  featuredImage: string;
  bio: string;
  externalLinks?: string;
  position: number;
}
interface Otm {
  artistOfTheMonth: {
    artistName: string;
    socialMediaLink: string;
    socialMediaHandler: string
    featuredImage: string;
  }
  pieceOfTheMonth: {
    artistName: string;
    petName: string;
    socialMediaLink: string;
    socialMediaHandler: string
    featuredImage: string;
  }
  staffHighlight: {
    artistName: string;
    petName: string;
    socialMediaLink: string;
    socialMediaHandler: string
    featuredImage: string;
  }
  mentorOfTheMonth: {
    artistName: string;
    socialMediaLink: string;
    socialMediaHandler: string
    featuredImage: string;
  }
}
