import { describe, expect, test } from 'vitest';
import { mockEmojis } from '~/__mocks__/emojis';
import { MockMessageMapper } from '~/__mocks__/message-mapper';
import { EmojiInterpolator } from '~/helpers/emoji';

describe('emoji interpolation', () => {
  const ei = new EmojiInterpolator(mockEmojis, new MockMessageMapper());

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
    describe('simple emoji', () => {
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
          {
            input: 'before :smile:',
            output: [{ t: 'before ' }, { e: 'smile' }],
          },
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
            input: '::smile::',
            output: [{ t: ':' }, { e: 'smile' }, { t: ':' }],
          },
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

    describe('skin variant', () => {
      describe('only emoji', () => {
        test.each([
          {
            input: ':man:',
            output: [{ e: 'man' }],
          },
          {
            input: ':woman-heart-man:',
            output: [{ e: 'woman-heart-man' }],
          },
          {
            input: ':man#skin-tone-2:',
            output: [{ e: 'man#skin-tone-2' }],
          },
          {
            input: ':man#skin-tone-7:',
            output: [{ t: ':man#skin-tone-7:' }],
          },
          {
            input: ':man#skin#tone-2:',
            output: [{ t: ':man#skin#tone-2:' }],
          },
          {
            input: ':woman-heart-man#skin-tone-2-5:',
            output: [{ e: 'woman-heart-man#skin-tone-2-5' }],
          },
          {
            input: ':woman-heart-man#skin-tone-2#5:',
            output: [{ t: ':woman-heart-man#skin-tone-2#5:' }],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });

      describe('in text', () => {
        test.each([
          {
            input: 'before :man#skin-tone-2:',
            output: [{ t: 'before ' }, { e: 'man#skin-tone-2' }],
          },
          {
            input: ':man#skin-tone-2: after',
            output: [{ e: 'man#skin-tone-2' }, { t: ' after' }],
          },
          {
            input: 'in :man#skin-tone-2: between',
            output: [{ t: 'in ' }, { e: 'man#skin-tone-2' }, { t: ' between' }],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });

      describe('with other colons', () => {
        test.each([
          {
            input: '::man#skin-tone-2:',
            output: [{ t: ':' }, { e: 'man#skin-tone-2' }],
          },
          {
            input: ':man#skin-tone-2::',
            output: [{ e: 'man#skin-tone-2' }, { t: ':' }],
          },
          {
            input: '::man#skin-tone-2::',
            output: [{ t: ':' }, { e: 'man#skin-tone-2' }, { t: ':' }],
          },
          {
            input: ':man#skin-tone-2: test: message',
            output: [{ e: 'man#skin-tone-2' }, { t: ' test: message' }],
          },
          {
            input: ':man#:skin-tone-2:',
            output: [{ t: ':man#:skin-tone-2:' }],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });

      describe('side by side', () => {
        test.each([
          {
            input: ':man#skin-tone-2:man#skin-tone-2:',
            output: [{ e: 'man#skin-tone-2' }, { t: 'man#skin-tone-2:' }],
          },
          {
            input: ':man#skin-tone-2:not:',
            output: [{ e: 'man#skin-tone-2' }, { t: 'not:' }],
          },
          {
            input: ':not:man#skin-tone-2:',
            output: [{ t: ':not' }, { e: 'man#skin-tone-2' }],
          },
          {
            input: ':not:man#skin-tone-2:not:',
            output: [{ t: ':not' }, { e: 'man#skin-tone-2' }, { t: 'not:' }],
          },
          {
            input: ':not:not:man#skin-tone-2:',
            output: [{ t: ':not:not' }, { e: 'man#skin-tone-2' }],
          },
          { input: ':not:not:not:', output: [{ t: ':not:not:not:' }] },
          {
            input: ':man#skin-tone-2:not:not:',
            output: [{ e: 'man#skin-tone-2' }, { t: 'not:not:' }],
          },
          {
            input: ':man#skin-tone-2:man#skin-tone-2:not:',
            output: [{ e: 'man#skin-tone-2' }, { t: 'man#skin-tone-2:not:' }],
          },
          {
            input: ':man#skin-tone-2:not:man#skin-tone-2:',
            output: [
              { e: 'man#skin-tone-2' },
              { t: 'not' },
              { e: 'man#skin-tone-2' },
            ],
          },
          {
            input: ':man#skin-tone-2:man#skin-tone-2:man#skin-tone-2:',
            output: [
              { e: 'man#skin-tone-2' },
              { t: 'man#skin-tone-2' },
              { e: 'man#skin-tone-2' },
            ],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });
    });
  });

  describe('multiple emoji', () => {
    describe('simple emoji', () => {
      describe('only emoji', () => {
        test.each([
          { input: ':smile::smile:', output: [{ e: 'smile' }, { e: 'smile' }] },
          { input: ':smile::sushi:', output: [{ e: 'smile' }, { e: 'sushi' }] },
          {
            input: ':smile::smile::smile:',
            output: [{ e: 'smile' }, { e: 'smile' }, { e: 'smile' }],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });

      describe('in text', () => {
        test.each([
          {
            input: 'before :smile::smile:',
            output: [{ t: 'before ' }, { e: 'smile' }, { e: 'smile' }],
          },
          {
            input: ':smile::smile: after',
            output: [{ e: 'smile' }, { e: 'smile' }, { t: ' after' }],
          },
          {
            input: 'in :smile: between :smile: all',
            output: [
              { t: 'in ' },
              { e: 'smile' },
              { t: ' between ' },
              { e: 'smile' },
              { t: ' all' },
            ],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });

      describe('with other colons', () => {
        test.each([
          {
            input: '::smile::sushi:',
            output: [{ t: ':' }, { e: 'smile' }, { e: 'sushi' }],
          },
          {
            input: ':smile::smile::',
            output: [{ e: 'smile' }, { e: 'smile' }, { t: ':' }],
          },
          {
            input: ':smile:::smile:',
            output: [{ e: 'smile' }, { t: ':' }, { e: 'smile' }],
          },
          {
            input: '::smile:::smile::',
            output: [
              { t: ':' },
              { e: 'smile' },
              { t: ':' },
              { e: 'smile' },
              { t: ':' },
            ],
          },
          {
            input: ':smile: test: message',
            output: [{ e: 'smile' }, { t: ' test: message' }],
          },
          {
            input: ':smile:smi:le:sushi:',
            output: [{ e: 'smile' }, { t: 'smi:le' }, { e: 'sushi' }],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });
    });

    describe('skin variant', () => {
      describe('only emoji', () => {
        test.each([
          {
            input: ':man#skin-tone-2::man#skin-tone-2:',
            output: [{ e: 'man#skin-tone-2' }, { e: 'man#skin-tone-2' }],
          },
          {
            input: ':man#skin-tone-2::woman-heart-man#skin-tone-2-5:',
            output: [
              { e: 'man#skin-tone-2' },
              { e: 'woman-heart-man#skin-tone-2-5' },
            ],
          },
          {
            input: ':man#skin-tone-2::man#skin-tone-2::man#skin-tone-2:',
            output: [
              { e: 'man#skin-tone-2' },
              { e: 'man#skin-tone-2' },
              { e: 'man#skin-tone-2' },
            ],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });

      describe('in text', () => {
        test.each([
          {
            input: 'before :man#skin-tone-2::man#skin-tone-2:',
            output: [
              { t: 'before ' },
              { e: 'man#skin-tone-2' },
              { e: 'man#skin-tone-2' },
            ],
          },
          {
            input: ':man#skin-tone-2::man#skin-tone-2: after',
            output: [
              { e: 'man#skin-tone-2' },
              { e: 'man#skin-tone-2' },
              { t: ' after' },
            ],
          },
          {
            input: 'in :man#skin-tone-2: between :man#skin-tone-2: all',
            output: [
              { t: 'in ' },
              { e: 'man#skin-tone-2' },
              { t: ' between ' },
              { e: 'man#skin-tone-2' },
              { t: ' all' },
            ],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });

      describe('with other colons', () => {
        test.each([
          {
            input: '::man#skin-tone-2::sushi:',
            output: [{ t: ':' }, { e: 'man#skin-tone-2' }, { e: 'sushi' }],
          },
          {
            input: ':man#skin-tone-2::smile::',
            output: [{ e: 'man#skin-tone-2' }, { e: 'smile' }, { t: ':' }],
          },
          {
            input: ':man#skin-tone-2:::smile:',
            output: [{ e: 'man#skin-tone-2' }, { t: ':' }, { e: 'smile' }],
          },
          {
            input: '::smile:::man#skin-tone-2::',
            output: [
              { t: ':' },
              { e: 'smile' },
              { t: ':' },
              { e: 'man#skin-tone-2' },
              { t: ':' },
            ],
          },
          {
            input: ':man#skin-tone-2: test: message',
            output: [{ e: 'man#skin-tone-2' }, { t: ' test: message' }],
          },
          {
            input: ':smile:smi:le:man#skin-tone-2:',
            output: [{ e: 'smile' }, { t: 'smi:le' }, { e: 'man#skin-tone-2' }],
          },
        ])('$input', ({ input, output }) => {
          expect(ei.parse(input)).toEqual(output);
        });
      });
    });
  });
});
