export function constructMetadata({
  title = "MS GLOBAL ",
  description = "MS GBLOBAL is an telecom company",
  image = "/agency.PNG",
  icons = "/MS_Logo New1.jpg",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: icons,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@KING_IN_JUNGLE",
    },
    icons,
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
