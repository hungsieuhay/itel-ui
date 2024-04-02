export interface INavigationItem {
  id: number;
  label: string;
  icon?: string;
  desc?: string;
  href?: string;
}

export interface Navigations {
  id: number;
  label: string;
  icon?: string;
  desc?: string;
  href?: string;
  children?: INavigationItem[];
}
