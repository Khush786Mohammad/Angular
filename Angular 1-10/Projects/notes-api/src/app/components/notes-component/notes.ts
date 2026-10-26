export interface Notes {
  id: number;
  title: string;
  content: string;
  crtDt?: string | null;
  lstUpdtDt?: string | null;
}

export interface NotesPageResponse {
  content: Notes[];
}
