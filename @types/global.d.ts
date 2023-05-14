import { Detail } from "./hitomi";

declare global {
  type RootStackParams = {
    Main: undefined;
    List?: { search: string | true };
    Detail?: { gallery: Detail };
  };
}

export {};
