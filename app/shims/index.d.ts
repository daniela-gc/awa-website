declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
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
    artistName: string,
    socialMediaLink: string,
    socialMediaHandler: string,
    pieces: string,
  }
  pieceOfTheMonth: {
    artistName: string,
    petName: string,
    socialMediaLink: string,
    socialMediaHandler: string,
    featuredImage: string,
  }
  staffHighlight: {
    artistName: string,
    petName: string,
    socialMediaLink: string,
    socialMediaHandler: string,
    featuredImage: string,
  }
  mentorOfTheMonth: {
    artistName: string,
    socialMediaLink: string,
    socialMediaHandler: string,
    featuredImage: string,
  }
}
