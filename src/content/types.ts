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
  homeTitle?: string;
  tagline: string;
  summary: string;
  tag: string;
  company: string;
  publishedAt: string;
  cover?: MediaItem;
  mediaStyle: "overflow-phone" | "none";
  coverWidth?: string;
  coverFramed?: boolean;
  background?: string;
  sections: ContentSection[];
};

export type WritingPost = {
  slug: string;
  title: string;
  topic: string;
  publishedAt: string;
  cover?: MediaItem;
  sections: ContentSection[];
};
