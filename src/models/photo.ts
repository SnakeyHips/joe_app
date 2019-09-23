export interface ImgurResponse {
 data: Album;
 success: boolean;
 statue: number;
}

export interface Album {
  id: string;
  title: string | undefined;
  description: string | undefined;
  datetime: string;
  cover: string;
  cover_edited: string | undefined;
  cover_width: number;
  cover_height: number;
  account_url: string | undefined;
  account_id: string | undefined;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  favorite: boolean;
  nsfw: boolean;
  section: string | undefined;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  include_album_ads: boolean;
  is_album: boolean;
  images: Photo[];
  ad_config: AdConfig;
}

export interface Photo {
  id: string;
  title: string | undefined;
  description: string | undefined;
  datetime: string;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: string | undefined;
  favorite: boolean;
  nsfw: boolean;
  section: string | undefined;
  account_url: string | undefined;
  account_id: string | undefined;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: string[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  link: string;
}

interface AdConfig {
  safeFlags: string[];
  highRiskFlags: string[];
  unsafeFlags: string[];
  showsAds: boolean;
}