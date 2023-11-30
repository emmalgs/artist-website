import firebase from "firebase/compat/app";

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
  sections: Array<{
    type: string;
    text: string;
    name: string;
    placeholder: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }>;
  buttonText: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
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
