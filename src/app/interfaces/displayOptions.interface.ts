export interface DisplayOptions {
  name: string;
  value: string;
  url: string;
  styleImage?: string;
  iconName?: string;
}

export interface displayOption {
  key: string;
  data: displayImage[];
}

export interface displayImage {
  name: string;
  styleImage: string;
}
