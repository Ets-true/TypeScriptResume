---
to: <%= path %>/<%= h.changeCase.param(pluralName) %>.types.tsx
---
export interface <%= h.changeCase.pascal(singularName) %> {
  id: string;
}

export type <%= h.changeCase.pascal(pluralName) %>Response = Array<<%= h.changeCase.pascal(singularName) %>>;