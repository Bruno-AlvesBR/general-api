interface IPodcastProps {
  id?: string;
  title?: string;
  members?: string[];
  thumbnail?: string;
  description?: string;
  file?: {
    url?: string;
    type?: string;
    duration?: number;
  };
  publishedAt?: string;
  createdAt?: string;
}

interface IPodcastBody {
  title?: string;
  members: string[];
  thumbnail?: string;
  description?: string;
  fileUrl?: string;
  fileType?: string;
  fileDuration?: string;
  publishedAt?: string;
  createAt?: string;
}

export { IPodcastProps, IPodcastBody };
