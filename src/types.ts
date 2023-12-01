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
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface FormSectionProps {
  type: string;
  text: string;
  name: string;
  placeholder: string;
  handleInputEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type Painting = {
  title: string;
  dimensions: string;
  medium: string;
  price?: string;
  imgSrc: string;
};

export interface Artwork {
  artwork: Painting;
}

export interface Artworks {
  artworks: { [key: string]: Painting }[];
}

export interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  accept?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}