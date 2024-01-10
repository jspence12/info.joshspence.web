export default interface Job {
  company: string;
  title: string;
  startYear: number;
  endYear?: number;
  url?: string;
  responsibilites: string[];
}
