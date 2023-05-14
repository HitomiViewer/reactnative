export interface Detail {
  galleryurl: string;
  id: string;
  language_localname: string;
  video: any;
  characters: any;
  language: string;
  language_url: string;
  scene_indexes: any[];
  tags: Tag[];
  artists: Artist[];
  type: string;
  japanese_title: string | null;
  videofilename: any;
  languages: Language[];
  parodys: Parody[];
  title: string;
  groups: Group[];
  related: number[];
  files: File[];
  date: string;
}

export interface Tag {
  female: string;
  url: string;
  male: string;
  tag: string;
}

export interface Artist {
  artist: string;
  url: string;
}

export interface Language {
  galleryid: string;
  language_localname: string;
  name: string;
  url: string;
}

export interface Parody {
  url: string;
  parody: string;
}

export interface Group {
  url: string;
  group: string;
}

export interface File {
  height: number;
  haswebp: number;
  width: number;
  name: string;
  hasavif: number;
  hash: string;
}
