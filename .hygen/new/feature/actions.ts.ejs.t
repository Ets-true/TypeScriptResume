---
to: <%= path %>/<%= h.changeCase.param(pluralName) %>.actions.tsx
---
import { createAction } from '@reduxjs/toolkit';

export enum <%= h.changeCase.pascal(pluralName) %>ActionsEnum {
  fetch<%= h.changeCase.pascal(singularName) %> = '<%= h.changeCase.camel(pluralName) %>/fetch<%= h.changeCase.pascal(singularName) %>',
  fetch<%= h.changeCase.pascal(pluralName) %> = '<%= h.changeCase.camel(pluralName) %>/fetch<%= h.changeCase.pascal(pluralName) %>',
}

export const fetch<%= h.changeCase.pascal(pluralName) %>Action = createAction(
  <%= h.changeCase.pascal(pluralName) %>ActionsEnum.fetch<%= h.changeCase.pascal(pluralName) %>
);