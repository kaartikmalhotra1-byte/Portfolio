export type MediaItem = {
  kind: "image" | "video";
  src?: string;
  alt?: string;
  caption?: string;
};

export type ContentSection = {
  heading?: string;
  body?: string;
  media?: MediaItem[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role?: string;
  year?: string;
  tags?: string[];
  cover?: MediaItem;
  sections: ContentSection[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date?: string;
  tags?: string[];
  cover?: MediaItem;
  sections: ContentSection[];
};
