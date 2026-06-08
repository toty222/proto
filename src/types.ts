/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StudentProfile {
  name: string;
  pggCampus: string;
  pplSchool: string;
  origin: string;
  originUnique: string;
  inspiration: string;
  vision: string;
  quote: string;
  quoteAuthor: string;
}

export interface TeacherModel {
  misi: string[];
  kompetensi: {
    title: string;
    description: string;
    iconName: string;
  }[];
  karakter: {
    title: string;
    description: string;
    iconName: string;
  }[];
}

export interface ArtefactAspect {
  id: string;
  aspectTitle: string;
  description: string;
  details: string[];
  pedagogicalTheory?: string;
  iconName: string;
}

export interface InstrumentScore {
  component: string;
  indicator: string;
  siklus1: number;
  siklus2: number;
  siklus3: number;
  maxScore: number;
  notes?: string;
}

export interface Instrument {
  id: string; // "lampiran7" or "lampiran8"
  title: string;
  subtitle: string;
  description: string;
  records: InstrumentScore[];
}
