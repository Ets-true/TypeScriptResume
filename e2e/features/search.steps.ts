import { getDocument, queries } from 'pptr-testing-library';
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./search.feature', { loadRelativePath: true });

defineFeature(feature, (test) => {
  test('It should be correct google search', ({ given, when, then }) => {
    given(/^I've got opened page "(.*)"$/, async (url) => {
      await page.goto(url);
    });

    when(/^I text "(.*)" to search input$/, async (text) => {
      const $document = await getDocument(page);
      const $search = await queries.getByLabelText($document, 'Найти');
      const $submit = await queries.getAllByLabelText(
        $document,
        'Поиск в Google'
      );

      await $search.type(text);

      await Promise.all([
        $submit[0].click(),
        page.waitForNavigation({ waitUntil: ['load', 'networkidle2'] }),
      ]);
    });

    then(/^I should be redirected to "(.*)"$/, async (url) => {
      expect(await page.url()).toMatch(new RegExp(`^${url}`));
    });
  });
});
