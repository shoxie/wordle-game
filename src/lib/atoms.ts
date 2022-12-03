import { User } from "@/types";
import { atom } from "jotai";

export const headerHeightAtom = atom<number | null>(0)
export const userAtom = atom<User | null>(null)