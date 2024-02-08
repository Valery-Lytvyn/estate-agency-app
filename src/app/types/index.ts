export interface SlideType {
  id: string;
  bgImg: string;
  subtitle: string;
  code: string;
  number: string;
  lineOne: string;
  lineTwo: string;
  type: string;
  price: number;
}

export interface AgentDetailsType {
  id: string;
  profileImg: string;
  name: string;
  phone: string;
  mobile: string;
  email: string;
  skype: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  description: string;
}

export interface PropertyDetailsType {
  id: string;
  agentId: string;
  bgImg: string;
  slideImg: string;
  location: string;
  postcode: string;
  number: string;
  addressOne: string;
  addressTwo: string;
  status: string;
  type: string;
  price: number;
  area: number;
  beds: number;
  baths: number;
  garages: number;
  description: string;
  amenities: string[];
}
