import type { EmojiMap } from '~/types/emoji';

export const mockEmojis: EmojiMap = {
  smile: {
    _type: 'simple',
    name: 'smile',
    unicode: '1f604',
  },
  sushi: {
    _type: 'simple',
    name: 'sushi',
    unicode: '1f363',
  },
  man: {
    _type: 'withSkin',
    name: 'man',
    unicode: '1f468',
    skinVariations: {
      '2': {
        _type: 'simple',
        name: 'man#skin-tone-2',
        unicode: '1f468-1f3fb',
      },
      '3': {
        _type: 'simple',
        name: 'man#skin-tone-3',
        unicode: '1f468-1f3fc',
      },
    },
  },
  'woman-heart-man': {
    _type: 'multiSkin',
    name: 'woman-heart-man',
    unicode: '1f469-200d-2764-fe0f-200d-1f468',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        _type: 'simple',
        name: 'woman-heart-man#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '2-5': {
        _type: 'simple',
        name: 'woman-heart-man#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe',
      },
    },
  },
};
