import { describe, expect, test } from 'vitest';
import { EmojiInterpolator } from '~/helpers/emoji';
import type { EmojiMap } from '~/types/emoji';

describe('emoji interpolation', () => {
  const mockEmojis: EmojiMap = {
    smile: {
      _type: 'simple',
      name: 'smile',
      unicode: 'smile',
    },
  };

  const ei = new EmojiInterpolator(mockEmojis);

  describe('no emoji', () => {
    describe('empty string', () => {
      test.each([{ input: '', output: [{ t: '' }] }])(
        '$input',
        ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        }
      );
    });

    describe('no colon', () => {
      test.each([{ input: 'test message', output: [{ t: 'test message' }] }])(
        '$input',
        ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        }
      );
    });

    describe('one colon', () => {
      test.each([
        { input: 'test: message', output: [{ t: 'test: message' }] },
        { input: 'test : message', output: [{ t: 'test : message' }] },
        { input: ':test message', output: [{ t: ':test message' }] },
        { input: 'test message:', output: [{ t: 'test message:' }] },
      ])('$input', ({ input, output }) => {
        expect(ei.parse(input)).toEqual(output);
      });
    });

    describe('two colon, but no emoji', () => {
      test.each([
        { input: 'test :message: alt', output: [{ t: 'test :message: alt' }] },
        {
          input: 'test : message: alt',
          output: [{ t: 'test : message: alt' }],
        },
        {
          input: 'test :message : alt',
          output: [{ t: 'test :message : alt' }],
        },
        {
          input: 'test :mess age: alt',
          output: [{ t: 'test :mess age: alt' }],
        },
        { input: ':test message alt:', output: [{ t: ':test message alt:' }] },
        { input: ':message:', output: [{ t: ':message:' }] },
      ])('$input', ({ input, output }) => {
        expect(ei.parse(input)).toEqual(output);
      });
    });
  });

  describe('one emoji', () => {
    describe('only emoji', () => {
      test.each([{ input: ':smile:', output: [{ e: 'smile' }] }])(
        '$input',
        ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        }
      );
    });

    describe('in text', () => {
      test.each([
        { input: 'before :smile:', output: [{ t: 'before ' }, { e: 'smile' }] },
        { input: ':smile: after', output: [{ e: 'smile' }, { t: ' after' }] },
        {
          input: 'in :smile: between',
          output: [{ t: 'in ' }, { e: 'smile' }, { t: ' between' }],
        },
      ])('$input', ({ input, output }) => {
        expect(ei.parse(input)).toEqual(output);
      });
    });

    describe('with other colons', () => {
      test.each([
        { input: '::smile:', output: [{ t: ':' }, { e: 'smile' }] },
        { input: ':smile::', output: [{ e: 'smile' }, { t: ':' }] },
        {
          input: ':smile: test: message',
          output: [{ e: 'smile' }, { t: ' test: message' }],
        },
        { input: ':smi:le:', output: [{ t: ':smi:le:' }] },
      ])('$input', ({ input, output }) => {
        expect(ei.parse(input)).toEqual(output);
      });
    });

    describe('side by side', () => {
      test.each([
        { input: ':smile:smile:', output: [{ e: 'smile' }, { t: 'smile:' }] },
        { input: ':smile:not:', output: [{ e: 'smile' }, { t: 'not:' }] },
        { input: ':not:smile:', output: [{ t: ':not' }, { e: 'smile' }] },
        {
          input: ':not:smile:not:',
          output: [{ t: ':not' }, { e: 'smile' }, { t: 'not:' }],
        },
        {
          input: ':not:not:smile:',
          output: [{ t: ':not:not' }, { e: 'smile' }],
        },
        { input: ':not:not:not:', output: [{ t: ':not:not:not:' }] },
        {
          input: ':smile:not:not:',
          output: [{ e: 'smile' }, { t: 'not:not:' }],
        },
        {
          input: ':smile:smile:not:',
          output: [{ e: 'smile' }, { t: 'smile:not:' }],
        },
        {
          input: ':smile:not:smile:',
          output: [{ e: 'smile' }, { t: 'not' }, { e: 'smile' }],
        },
        {
          input: ':smile:smile:smile:',
          output: [{ e: 'smile' }, { t: 'smile' }, { e: 'smile' }],
        },
      ])('$input', ({ input, output }) => {
        expect(ei.parse(input)).toEqual(output);
      });
    });
  });
});
