---
to: <%= path %>/<%= h.changeCase.param(pluralName) %>.api.tsx
---
import api from 'core/services/api.service';
import {
  <%= h.changeCase.pascal(singularName) %>,
  <%= h.changeCase.pascal(pluralName) %>Response,
} from './<%= h.changeCase.param(pluralName) %>.types';

export enum <%= h.changeCase.pascal(pluralName) %>ApiRoutesEnum {
  <%= h.changeCase.camel(singularName) %> = '/api/<%= h.changeCase.param(pluralName) %>/:id',
  <%= h.changeCase.camel(pluralName) %> = '/api/<%= h.changeCase.param(pluralName) %>',
}

// Fetch feature collection
export async function fetch<%= h.changeCase.pascal(pluralName) %>(): Promise<<%= h.changeCase.pascal(pluralName)%>Response> {
  return await api.get<<%= h.changeCase.pascal(pluralName)%>Response>(<%= h.changeCase.pascal(pluralName) %>ApiRoutesEnum.<%= h.changeCase.camel(pluralName) %>);
}

// Fetch signle feature model
export async function fetch<%= h.changeCase.pascal(singularName) %>(id: <%= h.changeCase.pascal(singularName) %>['id']): Promise<Image> {
  const route = <%= h.changeCase.pascal(pluralName) %>ApiRoutesEnum.<%= h.changeCase.camel(singularName) %>.replace(/:id/g, id);
  return await api.get<<%= h.changeCase.pascal(singularName)%>>(route);
}