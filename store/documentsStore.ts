'use client'

import { create } from 'zustand'

export interface Document {
  id: string
  name: string
  author: string
  created: string
  aiResult: string
  aiProbability: number
  humanProbability: number
  mixedProbability: number
  plagiarism: string
  plagiarismLevel: string
  content: string
}

interface DocumentsStore {
  documents: Document[]
  addDocument: (document: Document) => void
}

export const useDocumentsStore = create<DocumentsStore>((set) => ({
  documents: [],
  addDocument: (document) => 
    set((state) => ({
      documents: [document, ...state.documents]
    })),
})) 