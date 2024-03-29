export interface doctorType {
  id: number;
  name: string;
  speciality: string;
  fullInfo: {
    title: string;
    text: string;
  }[];
  image: string;
}

export interface jobData {
  day: number;
  id: number;
  name: string;
  month: string;
  times: {
    time: string;
    busy: boolean;
  }[];
}[]

export interface activeObj {
  day: number;
  dayName: string;
  month: string;
  time: string;
}

export 