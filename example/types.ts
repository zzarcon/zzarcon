export interface Movie {
  name: string;
  coverUrl: string;
  youtubeTrailerId: string;
}

export interface Goal {
  name: string;
  startDate: Date;
  image: string;
  deadline?: Date;
}
