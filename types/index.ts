import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  avatar?: string | StaticImport;
};