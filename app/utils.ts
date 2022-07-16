export default async function getContent({
  context,
  prefix,
}: {
  context: any;
  prefix: string;
}): Promise<{ slug: string; title: string }[]> {
  const slugs: string[] = [];
  const content: {
    slug: string;
    title: string;
    featuredImage: string;
    socialMediaLink: string;
    externalLinks: string;
    role: string;
    bio: string;
    position: number;
    artistOfTheMonth: {
      artistName: string;
      socialMediaLink: string;
      socialMediaHandler: string;
      pieces: string;
    };
    pieceOfTheMonth: {
      artistName: string;
      petName: string;
      socialMediaLink: string;
      socialMediaHandler: string;
      featuredImage: string;
    };
    staffHighlight: {
      artistName: string;
      petName: string;
      socialMediaLink: string;
      socialMediaHandler: string;
      featuredImage: string;
    };
    mentorOfTheMonth: {
      artistName: string;
      socialMediaLink: string;
      socialMediaHandler: string;
      featuredImage: string;
    };
    privacyPolicyText: string;
    termsOfServiceText: string;
    houseRulesText: string;
  }[] = [];

  // Get slugs
  for (let index = 0; index < context.keys().length; index += 1) {
    const slug = context.keys()[index].replace(/^.\/|.json$/g, '');
    slugs.push(slug);
  }

  // Get content
  for (let index = 0; index < slugs.length; index += 1) {
    const slug = slugs[index];

    const entry = require(`@/content/${prefix}/${slug}.json`);

    // Add the slug to the post object
    Object.assign(entry, { slug });

    content.push({
      slug,
      title: entry.title,
      featuredImage: entry.featuredImage,
      socialMediaLink: entry.socialMediaLink,
      externalLinks: entry.externalLinks,
      role: entry.role,
      bio: entry.bio,
      position: entry.position,
      artistOfTheMonth: entry.artistOfTheMonth,
      pieceOfTheMonth: entry.pieceOfTheMonth,
      staffHighlight: entry.staffHighlight,
      mentorOfTheMonth: entry.mentorOfTheMonth,
      privacyPolicyText: entry.privacyPolicyText,
      termsOfServiceText: entry.termsOfServiceText,
      houseRulesText: entry.houseRulesText,
    });
  }

  return content;
}
