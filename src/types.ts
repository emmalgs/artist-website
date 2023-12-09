import firebase from "firebase/compat/app";
import { ChangeEvent } from "react";

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface AdminHeaderProps {
  user: firebase.User | null;
}

export interface FormProps {
  sections: Array<FormInputProps>;
  buttonText: string;
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  popup?: boolean;
  values?: { [key: string]: string };
}

export interface FormSectionProps {
  type: string;
  text: string;
  name: string;
  placeholder: string;
  handleInputEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export type Painting = {
  title: string;
  dimensions: string;
  medium: string;
  price?: string;
  image: string;
};

export interface Artwork {
  artwork: Painting;
}

export interface Artworks {
  artworks: { [key: string]: Item }[];
}

export interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  text: string;
  accept?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ContentCardProps {
  artwork: Painting;
  category: string;
}

export interface CardInfoProps {
  text: string;
}

export interface Item {
  [key: string]: string;
}

export interface EditItemFormProps {
  category: string;
  item: Item;
  handleUpdateSubmit: () => void;
}
