interface SimpleEmoji {
  name: string;
  unicode: string;
}

interface EmojiWithSkinVariations extends SimpleEmoji {
  skinVariations: Record<string, SimpleEmoji>;
}

interface MultiSkintoneEmoji extends EmojiWithSkinVariations {
  multiSkinTone?: boolean;
}

type Emoji = SimpleEmoji | EmojiWithSkinVariations | EmojiWithSkinVariations;

export const emojis: Record<string, Emoji> = {
  '100': {
    name: '100',
    unicode: '1f4af',
  },
  '1234': {
    name: '1234',
    unicode: '1f522',
  },
  hash: {
    name: 'hash',
    unicode: '0023-fe0f-20e3',
  },
  keycap_star: {
    name: 'keycap_star',
    unicode: '002a-fe0f-20e3',
  },
  zero: {
    name: 'zero',
    unicode: '0030-fe0f-20e3',
  },
  one: {
    name: 'one',
    unicode: '0031-fe0f-20e3',
  },
  two: {
    name: 'two',
    unicode: '0032-fe0f-20e3',
  },
  three: {
    name: 'three',
    unicode: '0033-fe0f-20e3',
  },
  four: {
    name: 'four',
    unicode: '0034-fe0f-20e3',
  },
  five: {
    name: 'five',
    unicode: '0035-fe0f-20e3',
  },
  six: {
    name: 'six',
    unicode: '0036-fe0f-20e3',
  },
  seven: {
    name: 'seven',
    unicode: '0037-fe0f-20e3',
  },
  eight: {
    name: 'eight',
    unicode: '0038-fe0f-20e3',
  },
  nine: {
    name: 'nine',
    unicode: '0039-fe0f-20e3',
  },
  copyright: {
    name: 'copyright',
    unicode: '00a9-fe0f',
  },
  registered: {
    name: 'registered',
    unicode: '00ae-fe0f',
  },
  mahjong: {
    name: 'mahjong',
    unicode: '1f004',
  },
  black_joker: {
    name: 'black_joker',
    unicode: '1f0cf',
  },
  a: {
    name: 'a',
    unicode: '1f170-fe0f',
  },
  b: {
    name: 'b',
    unicode: '1f171-fe0f',
  },
  o2: {
    name: 'o2',
    unicode: '1f17e-fe0f',
  },
  parking: {
    name: 'parking',
    unicode: '1f17f-fe0f',
  },
  ab: {
    name: 'ab',
    unicode: '1f18e',
  },
  cl: {
    name: 'cl',
    unicode: '1f191',
  },
  cool: {
    name: 'cool',
    unicode: '1f192',
  },
  free: {
    name: 'free',
    unicode: '1f193',
  },
  id: {
    name: 'id',
    unicode: '1f194',
  },
  new: {
    name: 'new',
    unicode: '1f195',
  },
  ng: {
    name: 'ng',
    unicode: '1f196',
  },
  ok: {
    name: 'ok',
    unicode: '1f197',
  },
  sos: {
    name: 'sos',
    unicode: '1f198',
  },
  up: {
    name: 'up',
    unicode: '1f199',
  },
  vs: {
    name: 'vs',
    unicode: '1f19a',
  },
  'flag-ac': {
    name: 'flag-ac',
    unicode: '1f1e6-1f1e8',
  },
  'flag-ad': {
    name: 'flag-ad',
    unicode: '1f1e6-1f1e9',
  },
  'flag-ae': {
    name: 'flag-ae',
    unicode: '1f1e6-1f1ea',
  },
  'flag-af': {
    name: 'flag-af',
    unicode: '1f1e6-1f1eb',
  },
  'flag-ag': {
    name: 'flag-ag',
    unicode: '1f1e6-1f1ec',
  },
  'flag-ai': {
    name: 'flag-ai',
    unicode: '1f1e6-1f1ee',
  },
  'flag-al': {
    name: 'flag-al',
    unicode: '1f1e6-1f1f1',
  },
  'flag-am': {
    name: 'flag-am',
    unicode: '1f1e6-1f1f2',
  },
  'flag-ao': {
    name: 'flag-ao',
    unicode: '1f1e6-1f1f4',
  },
  'flag-aq': {
    name: 'flag-aq',
    unicode: '1f1e6-1f1f6',
  },
  'flag-ar': {
    name: 'flag-ar',
    unicode: '1f1e6-1f1f7',
  },
  'flag-as': {
    name: 'flag-as',
    unicode: '1f1e6-1f1f8',
  },
  'flag-at': {
    name: 'flag-at',
    unicode: '1f1e6-1f1f9',
  },
  'flag-au': {
    name: 'flag-au',
    unicode: '1f1e6-1f1fa',
  },
  'flag-aw': {
    name: 'flag-aw',
    unicode: '1f1e6-1f1fc',
  },
  'flag-ax': {
    name: 'flag-ax',
    unicode: '1f1e6-1f1fd',
  },
  'flag-az': {
    name: 'flag-az',
    unicode: '1f1e6-1f1ff',
  },
  'flag-ba': {
    name: 'flag-ba',
    unicode: '1f1e7-1f1e6',
  },
  'flag-bb': {
    name: 'flag-bb',
    unicode: '1f1e7-1f1e7',
  },
  'flag-bd': {
    name: 'flag-bd',
    unicode: '1f1e7-1f1e9',
  },
  'flag-be': {
    name: 'flag-be',
    unicode: '1f1e7-1f1ea',
  },
  'flag-bf': {
    name: 'flag-bf',
    unicode: '1f1e7-1f1eb',
  },
  'flag-bg': {
    name: 'flag-bg',
    unicode: '1f1e7-1f1ec',
  },
  'flag-bh': {
    name: 'flag-bh',
    unicode: '1f1e7-1f1ed',
  },
  'flag-bi': {
    name: 'flag-bi',
    unicode: '1f1e7-1f1ee',
  },
  'flag-bj': {
    name: 'flag-bj',
    unicode: '1f1e7-1f1ef',
  },
  'flag-bl': {
    name: 'flag-bl',
    unicode: '1f1e7-1f1f1',
  },
  'flag-bm': {
    name: 'flag-bm',
    unicode: '1f1e7-1f1f2',
  },
  'flag-bn': {
    name: 'flag-bn',
    unicode: '1f1e7-1f1f3',
  },
  'flag-bo': {
    name: 'flag-bo',
    unicode: '1f1e7-1f1f4',
  },
  'flag-bq': {
    name: 'flag-bq',
    unicode: '1f1e7-1f1f6',
  },
  'flag-br': {
    name: 'flag-br',
    unicode: '1f1e7-1f1f7',
  },
  'flag-bs': {
    name: 'flag-bs',
    unicode: '1f1e7-1f1f8',
  },
  'flag-bt': {
    name: 'flag-bt',
    unicode: '1f1e7-1f1f9',
  },
  'flag-bv': {
    name: 'flag-bv',
    unicode: '1f1e7-1f1fb',
  },
  'flag-bw': {
    name: 'flag-bw',
    unicode: '1f1e7-1f1fc',
  },
  'flag-by': {
    name: 'flag-by',
    unicode: '1f1e7-1f1fe',
  },
  'flag-bz': {
    name: 'flag-bz',
    unicode: '1f1e7-1f1ff',
  },
  'flag-ca': {
    name: 'flag-ca',
    unicode: '1f1e8-1f1e6',
  },
  'flag-cc': {
    name: 'flag-cc',
    unicode: '1f1e8-1f1e8',
  },
  'flag-cd': {
    name: 'flag-cd',
    unicode: '1f1e8-1f1e9',
  },
  'flag-cf': {
    name: 'flag-cf',
    unicode: '1f1e8-1f1eb',
  },
  'flag-cg': {
    name: 'flag-cg',
    unicode: '1f1e8-1f1ec',
  },
  'flag-ch': {
    name: 'flag-ch',
    unicode: '1f1e8-1f1ed',
  },
  'flag-ci': {
    name: 'flag-ci',
    unicode: '1f1e8-1f1ee',
  },
  'flag-ck': {
    name: 'flag-ck',
    unicode: '1f1e8-1f1f0',
  },
  'flag-cl': {
    name: 'flag-cl',
    unicode: '1f1e8-1f1f1',
  },
  'flag-cm': {
    name: 'flag-cm',
    unicode: '1f1e8-1f1f2',
  },
  cn: {
    name: 'cn',
    unicode: '1f1e8-1f1f3',
  },
  'flag-cn': {
    name: 'flag-cn',
    unicode: '1f1e8-1f1f3',
    aliasOf: 'cn',
  },
  'flag-co': {
    name: 'flag-co',
    unicode: '1f1e8-1f1f4',
  },
  'flag-cp': {
    name: 'flag-cp',
    unicode: '1f1e8-1f1f5',
  },
  'flag-cr': {
    name: 'flag-cr',
    unicode: '1f1e8-1f1f7',
  },
  'flag-cu': {
    name: 'flag-cu',
    unicode: '1f1e8-1f1fa',
  },
  'flag-cv': {
    name: 'flag-cv',
    unicode: '1f1e8-1f1fb',
  },
  'flag-cw': {
    name: 'flag-cw',
    unicode: '1f1e8-1f1fc',
  },
  'flag-cx': {
    name: 'flag-cx',
    unicode: '1f1e8-1f1fd',
  },
  'flag-cy': {
    name: 'flag-cy',
    unicode: '1f1e8-1f1fe',
  },
  'flag-cz': {
    name: 'flag-cz',
    unicode: '1f1e8-1f1ff',
  },
  de: {
    name: 'de',
    unicode: '1f1e9-1f1ea',
  },
  'flag-de': {
    name: 'flag-de',
    unicode: '1f1e9-1f1ea',
    aliasOf: 'de',
  },
  'flag-dg': {
    name: 'flag-dg',
    unicode: '1f1e9-1f1ec',
  },
  'flag-dj': {
    name: 'flag-dj',
    unicode: '1f1e9-1f1ef',
  },
  'flag-dk': {
    name: 'flag-dk',
    unicode: '1f1e9-1f1f0',
  },
  'flag-dm': {
    name: 'flag-dm',
    unicode: '1f1e9-1f1f2',
  },
  'flag-do': {
    name: 'flag-do',
    unicode: '1f1e9-1f1f4',
  },
  'flag-dz': {
    name: 'flag-dz',
    unicode: '1f1e9-1f1ff',
  },
  'flag-ea': {
    name: 'flag-ea',
    unicode: '1f1ea-1f1e6',
  },
  'flag-ec': {
    name: 'flag-ec',
    unicode: '1f1ea-1f1e8',
  },
  'flag-ee': {
    name: 'flag-ee',
    unicode: '1f1ea-1f1ea',
  },
  'flag-eg': {
    name: 'flag-eg',
    unicode: '1f1ea-1f1ec',
  },
  'flag-eh': {
    name: 'flag-eh',
    unicode: '1f1ea-1f1ed',
  },
  'flag-er': {
    name: 'flag-er',
    unicode: '1f1ea-1f1f7',
  },
  es: {
    name: 'es',
    unicode: '1f1ea-1f1f8',
  },
  'flag-es': {
    name: 'flag-es',
    unicode: '1f1ea-1f1f8',
    aliasOf: 'es',
  },
  'flag-et': {
    name: 'flag-et',
    unicode: '1f1ea-1f1f9',
  },
  'flag-eu': {
    name: 'flag-eu',
    unicode: '1f1ea-1f1fa',
  },
  'flag-fi': {
    name: 'flag-fi',
    unicode: '1f1eb-1f1ee',
  },
  'flag-fj': {
    name: 'flag-fj',
    unicode: '1f1eb-1f1ef',
  },
  'flag-fk': {
    name: 'flag-fk',
    unicode: '1f1eb-1f1f0',
  },
  'flag-fm': {
    name: 'flag-fm',
    unicode: '1f1eb-1f1f2',
  },
  'flag-fo': {
    name: 'flag-fo',
    unicode: '1f1eb-1f1f4',
  },
  fr: {
    name: 'fr',
    unicode: '1f1eb-1f1f7',
  },
  'flag-fr': {
    name: 'flag-fr',
    unicode: '1f1eb-1f1f7',
    aliasOf: 'fr',
  },
  'flag-ga': {
    name: 'flag-ga',
    unicode: '1f1ec-1f1e6',
  },
  gb: {
    name: 'gb',
    unicode: '1f1ec-1f1e7',
  },
  uk: {
    name: 'uk',
    unicode: '1f1ec-1f1e7',
    aliasOf: 'gb',
  },
  'flag-gb': {
    name: 'flag-gb',
    unicode: '1f1ec-1f1e7',
    aliasOf: 'gb',
  },
  'flag-gd': {
    name: 'flag-gd',
    unicode: '1f1ec-1f1e9',
  },
  'flag-ge': {
    name: 'flag-ge',
    unicode: '1f1ec-1f1ea',
  },
  'flag-gf': {
    name: 'flag-gf',
    unicode: '1f1ec-1f1eb',
  },
  'flag-gg': {
    name: 'flag-gg',
    unicode: '1f1ec-1f1ec',
  },
  'flag-gh': {
    name: 'flag-gh',
    unicode: '1f1ec-1f1ed',
  },
  'flag-gi': {
    name: 'flag-gi',
    unicode: '1f1ec-1f1ee',
  },
  'flag-gl': {
    name: 'flag-gl',
    unicode: '1f1ec-1f1f1',
  },
  'flag-gm': {
    name: 'flag-gm',
    unicode: '1f1ec-1f1f2',
  },
  'flag-gn': {
    name: 'flag-gn',
    unicode: '1f1ec-1f1f3',
  },
  'flag-gp': {
    name: 'flag-gp',
    unicode: '1f1ec-1f1f5',
  },
  'flag-gq': {
    name: 'flag-gq',
    unicode: '1f1ec-1f1f6',
  },
  'flag-gr': {
    name: 'flag-gr',
    unicode: '1f1ec-1f1f7',
  },
  'flag-gs': {
    name: 'flag-gs',
    unicode: '1f1ec-1f1f8',
  },
  'flag-gt': {
    name: 'flag-gt',
    unicode: '1f1ec-1f1f9',
  },
  'flag-gu': {
    name: 'flag-gu',
    unicode: '1f1ec-1f1fa',
  },
  'flag-gw': {
    name: 'flag-gw',
    unicode: '1f1ec-1f1fc',
  },
  'flag-gy': {
    name: 'flag-gy',
    unicode: '1f1ec-1f1fe',
  },
  'flag-hk': {
    name: 'flag-hk',
    unicode: '1f1ed-1f1f0',
  },
  'flag-hm': {
    name: 'flag-hm',
    unicode: '1f1ed-1f1f2',
  },
  'flag-hn': {
    name: 'flag-hn',
    unicode: '1f1ed-1f1f3',
  },
  'flag-hr': {
    name: 'flag-hr',
    unicode: '1f1ed-1f1f7',
  },
  'flag-ht': {
    name: 'flag-ht',
    unicode: '1f1ed-1f1f9',
  },
  'flag-hu': {
    name: 'flag-hu',
    unicode: '1f1ed-1f1fa',
  },
  'flag-ic': {
    name: 'flag-ic',
    unicode: '1f1ee-1f1e8',
  },
  'flag-id': {
    name: 'flag-id',
    unicode: '1f1ee-1f1e9',
  },
  'flag-ie': {
    name: 'flag-ie',
    unicode: '1f1ee-1f1ea',
  },
  'flag-il': {
    name: 'flag-il',
    unicode: '1f1ee-1f1f1',
  },
  'flag-im': {
    name: 'flag-im',
    unicode: '1f1ee-1f1f2',
  },
  'flag-in': {
    name: 'flag-in',
    unicode: '1f1ee-1f1f3',
  },
  'flag-io': {
    name: 'flag-io',
    unicode: '1f1ee-1f1f4',
  },
  'flag-iq': {
    name: 'flag-iq',
    unicode: '1f1ee-1f1f6',
  },
  'flag-ir': {
    name: 'flag-ir',
    unicode: '1f1ee-1f1f7',
  },
  'flag-is': {
    name: 'flag-is',
    unicode: '1f1ee-1f1f8',
  },
  it: {
    name: 'it',
    unicode: '1f1ee-1f1f9',
  },
  'flag-it': {
    name: 'flag-it',
    unicode: '1f1ee-1f1f9',
    aliasOf: 'it',
  },
  'flag-je': {
    name: 'flag-je',
    unicode: '1f1ef-1f1ea',
  },
  'flag-jm': {
    name: 'flag-jm',
    unicode: '1f1ef-1f1f2',
  },
  'flag-jo': {
    name: 'flag-jo',
    unicode: '1f1ef-1f1f4',
  },
  jp: {
    name: 'jp',
    unicode: '1f1ef-1f1f5',
  },
  'flag-jp': {
    name: 'flag-jp',
    unicode: '1f1ef-1f1f5',
    aliasOf: 'jp',
  },
  'flag-ke': {
    name: 'flag-ke',
    unicode: '1f1f0-1f1ea',
  },
  'flag-kg': {
    name: 'flag-kg',
    unicode: '1f1f0-1f1ec',
  },
  'flag-kh': {
    name: 'flag-kh',
    unicode: '1f1f0-1f1ed',
  },
  'flag-ki': {
    name: 'flag-ki',
    unicode: '1f1f0-1f1ee',
  },
  'flag-km': {
    name: 'flag-km',
    unicode: '1f1f0-1f1f2',
  },
  'flag-kn': {
    name: 'flag-kn',
    unicode: '1f1f0-1f1f3',
  },
  'flag-kp': {
    name: 'flag-kp',
    unicode: '1f1f0-1f1f5',
  },
  kr: {
    name: 'kr',
    unicode: '1f1f0-1f1f7',
  },
  'flag-kr': {
    name: 'flag-kr',
    unicode: '1f1f0-1f1f7',
    aliasOf: 'kr',
  },
  'flag-kw': {
    name: 'flag-kw',
    unicode: '1f1f0-1f1fc',
  },
  'flag-ky': {
    name: 'flag-ky',
    unicode: '1f1f0-1f1fe',
  },
  'flag-kz': {
    name: 'flag-kz',
    unicode: '1f1f0-1f1ff',
  },
  'flag-la': {
    name: 'flag-la',
    unicode: '1f1f1-1f1e6',
  },
  'flag-lb': {
    name: 'flag-lb',
    unicode: '1f1f1-1f1e7',
  },
  'flag-lc': {
    name: 'flag-lc',
    unicode: '1f1f1-1f1e8',
  },
  'flag-li': {
    name: 'flag-li',
    unicode: '1f1f1-1f1ee',
  },
  'flag-lk': {
    name: 'flag-lk',
    unicode: '1f1f1-1f1f0',
  },
  'flag-lr': {
    name: 'flag-lr',
    unicode: '1f1f1-1f1f7',
  },
  'flag-ls': {
    name: 'flag-ls',
    unicode: '1f1f1-1f1f8',
  },
  'flag-lt': {
    name: 'flag-lt',
    unicode: '1f1f1-1f1f9',
  },
  'flag-lu': {
    name: 'flag-lu',
    unicode: '1f1f1-1f1fa',
  },
  'flag-lv': {
    name: 'flag-lv',
    unicode: '1f1f1-1f1fb',
  },
  'flag-ly': {
    name: 'flag-ly',
    unicode: '1f1f1-1f1fe',
  },
  'flag-ma': {
    name: 'flag-ma',
    unicode: '1f1f2-1f1e6',
  },
  'flag-mc': {
    name: 'flag-mc',
    unicode: '1f1f2-1f1e8',
  },
  'flag-md': {
    name: 'flag-md',
    unicode: '1f1f2-1f1e9',
  },
  'flag-me': {
    name: 'flag-me',
    unicode: '1f1f2-1f1ea',
  },
  'flag-mf': {
    name: 'flag-mf',
    unicode: '1f1f2-1f1eb',
  },
  'flag-mg': {
    name: 'flag-mg',
    unicode: '1f1f2-1f1ec',
  },
  'flag-mh': {
    name: 'flag-mh',
    unicode: '1f1f2-1f1ed',
  },
  'flag-mk': {
    name: 'flag-mk',
    unicode: '1f1f2-1f1f0',
  },
  'flag-ml': {
    name: 'flag-ml',
    unicode: '1f1f2-1f1f1',
  },
  'flag-mm': {
    name: 'flag-mm',
    unicode: '1f1f2-1f1f2',
  },
  'flag-mn': {
    name: 'flag-mn',
    unicode: '1f1f2-1f1f3',
  },
  'flag-mo': {
    name: 'flag-mo',
    unicode: '1f1f2-1f1f4',
  },
  'flag-mp': {
    name: 'flag-mp',
    unicode: '1f1f2-1f1f5',
  },
  'flag-mq': {
    name: 'flag-mq',
    unicode: '1f1f2-1f1f6',
  },
  'flag-mr': {
    name: 'flag-mr',
    unicode: '1f1f2-1f1f7',
  },
  'flag-ms': {
    name: 'flag-ms',
    unicode: '1f1f2-1f1f8',
  },
  'flag-mt': {
    name: 'flag-mt',
    unicode: '1f1f2-1f1f9',
  },
  'flag-mu': {
    name: 'flag-mu',
    unicode: '1f1f2-1f1fa',
  },
  'flag-mv': {
    name: 'flag-mv',
    unicode: '1f1f2-1f1fb',
  },
  'flag-mw': {
    name: 'flag-mw',
    unicode: '1f1f2-1f1fc',
  },
  'flag-mx': {
    name: 'flag-mx',
    unicode: '1f1f2-1f1fd',
  },
  'flag-my': {
    name: 'flag-my',
    unicode: '1f1f2-1f1fe',
  },
  'flag-mz': {
    name: 'flag-mz',
    unicode: '1f1f2-1f1ff',
  },
  'flag-na': {
    name: 'flag-na',
    unicode: '1f1f3-1f1e6',
  },
  'flag-nc': {
    name: 'flag-nc',
    unicode: '1f1f3-1f1e8',
  },
  'flag-ne': {
    name: 'flag-ne',
    unicode: '1f1f3-1f1ea',
  },
  'flag-nf': {
    name: 'flag-nf',
    unicode: '1f1f3-1f1eb',
  },
  'flag-ng': {
    name: 'flag-ng',
    unicode: '1f1f3-1f1ec',
  },
  'flag-ni': {
    name: 'flag-ni',
    unicode: '1f1f3-1f1ee',
  },
  'flag-nl': {
    name: 'flag-nl',
    unicode: '1f1f3-1f1f1',
  },
  'flag-no': {
    name: 'flag-no',
    unicode: '1f1f3-1f1f4',
  },
  'flag-np': {
    name: 'flag-np',
    unicode: '1f1f3-1f1f5',
  },
  'flag-nr': {
    name: 'flag-nr',
    unicode: '1f1f3-1f1f7',
  },
  'flag-nu': {
    name: 'flag-nu',
    unicode: '1f1f3-1f1fa',
  },
  'flag-nz': {
    name: 'flag-nz',
    unicode: '1f1f3-1f1ff',
  },
  'flag-om': {
    name: 'flag-om',
    unicode: '1f1f4-1f1f2',
  },
  'flag-pa': {
    name: 'flag-pa',
    unicode: '1f1f5-1f1e6',
  },
  'flag-pe': {
    name: 'flag-pe',
    unicode: '1f1f5-1f1ea',
  },
  'flag-pf': {
    name: 'flag-pf',
    unicode: '1f1f5-1f1eb',
  },
  'flag-pg': {
    name: 'flag-pg',
    unicode: '1f1f5-1f1ec',
  },
  'flag-ph': {
    name: 'flag-ph',
    unicode: '1f1f5-1f1ed',
  },
  'flag-pk': {
    name: 'flag-pk',
    unicode: '1f1f5-1f1f0',
  },
  'flag-pl': {
    name: 'flag-pl',
    unicode: '1f1f5-1f1f1',
  },
  'flag-pm': {
    name: 'flag-pm',
    unicode: '1f1f5-1f1f2',
  },
  'flag-pn': {
    name: 'flag-pn',
    unicode: '1f1f5-1f1f3',
  },
  'flag-pr': {
    name: 'flag-pr',
    unicode: '1f1f5-1f1f7',
  },
  'flag-ps': {
    name: 'flag-ps',
    unicode: '1f1f5-1f1f8',
  },
  'flag-pt': {
    name: 'flag-pt',
    unicode: '1f1f5-1f1f9',
  },
  'flag-pw': {
    name: 'flag-pw',
    unicode: '1f1f5-1f1fc',
  },
  'flag-py': {
    name: 'flag-py',
    unicode: '1f1f5-1f1fe',
  },
  'flag-qa': {
    name: 'flag-qa',
    unicode: '1f1f6-1f1e6',
  },
  'flag-re': {
    name: 'flag-re',
    unicode: '1f1f7-1f1ea',
  },
  'flag-ro': {
    name: 'flag-ro',
    unicode: '1f1f7-1f1f4',
  },
  'flag-rs': {
    name: 'flag-rs',
    unicode: '1f1f7-1f1f8',
  },
  ru: {
    name: 'ru',
    unicode: '1f1f7-1f1fa',
  },
  'flag-ru': {
    name: 'flag-ru',
    unicode: '1f1f7-1f1fa',
    aliasOf: 'ru',
  },
  'flag-rw': {
    name: 'flag-rw',
    unicode: '1f1f7-1f1fc',
  },
  'flag-sa': {
    name: 'flag-sa',
    unicode: '1f1f8-1f1e6',
  },
  'flag-sb': {
    name: 'flag-sb',
    unicode: '1f1f8-1f1e7',
  },
  'flag-sc': {
    name: 'flag-sc',
    unicode: '1f1f8-1f1e8',
  },
  'flag-sd': {
    name: 'flag-sd',
    unicode: '1f1f8-1f1e9',
  },
  'flag-se': {
    name: 'flag-se',
    unicode: '1f1f8-1f1ea',
  },
  'flag-sg': {
    name: 'flag-sg',
    unicode: '1f1f8-1f1ec',
  },
  'flag-sh': {
    name: 'flag-sh',
    unicode: '1f1f8-1f1ed',
  },
  'flag-si': {
    name: 'flag-si',
    unicode: '1f1f8-1f1ee',
  },
  'flag-sj': {
    name: 'flag-sj',
    unicode: '1f1f8-1f1ef',
  },
  'flag-sk': {
    name: 'flag-sk',
    unicode: '1f1f8-1f1f0',
  },
  'flag-sl': {
    name: 'flag-sl',
    unicode: '1f1f8-1f1f1',
  },
  'flag-sm': {
    name: 'flag-sm',
    unicode: '1f1f8-1f1f2',
  },
  'flag-sn': {
    name: 'flag-sn',
    unicode: '1f1f8-1f1f3',
  },
  'flag-so': {
    name: 'flag-so',
    unicode: '1f1f8-1f1f4',
  },
  'flag-sr': {
    name: 'flag-sr',
    unicode: '1f1f8-1f1f7',
  },
  'flag-ss': {
    name: 'flag-ss',
    unicode: '1f1f8-1f1f8',
  },
  'flag-st': {
    name: 'flag-st',
    unicode: '1f1f8-1f1f9',
  },
  'flag-sv': {
    name: 'flag-sv',
    unicode: '1f1f8-1f1fb',
  },
  'flag-sx': {
    name: 'flag-sx',
    unicode: '1f1f8-1f1fd',
  },
  'flag-sy': {
    name: 'flag-sy',
    unicode: '1f1f8-1f1fe',
  },
  'flag-sz': {
    name: 'flag-sz',
    unicode: '1f1f8-1f1ff',
  },
  'flag-ta': {
    name: 'flag-ta',
    unicode: '1f1f9-1f1e6',
  },
  'flag-tc': {
    name: 'flag-tc',
    unicode: '1f1f9-1f1e8',
  },
  'flag-td': {
    name: 'flag-td',
    unicode: '1f1f9-1f1e9',
  },
  'flag-tf': {
    name: 'flag-tf',
    unicode: '1f1f9-1f1eb',
  },
  'flag-tg': {
    name: 'flag-tg',
    unicode: '1f1f9-1f1ec',
  },
  'flag-th': {
    name: 'flag-th',
    unicode: '1f1f9-1f1ed',
  },
  'flag-tj': {
    name: 'flag-tj',
    unicode: '1f1f9-1f1ef',
  },
  'flag-tk': {
    name: 'flag-tk',
    unicode: '1f1f9-1f1f0',
  },
  'flag-tl': {
    name: 'flag-tl',
    unicode: '1f1f9-1f1f1',
  },
  'flag-tm': {
    name: 'flag-tm',
    unicode: '1f1f9-1f1f2',
  },
  'flag-tn': {
    name: 'flag-tn',
    unicode: '1f1f9-1f1f3',
  },
  'flag-to': {
    name: 'flag-to',
    unicode: '1f1f9-1f1f4',
  },
  'flag-tr': {
    name: 'flag-tr',
    unicode: '1f1f9-1f1f7',
  },
  'flag-tt': {
    name: 'flag-tt',
    unicode: '1f1f9-1f1f9',
  },
  'flag-tv': {
    name: 'flag-tv',
    unicode: '1f1f9-1f1fb',
  },
  'flag-tw': {
    name: 'flag-tw',
    unicode: '1f1f9-1f1fc',
  },
  'flag-tz': {
    name: 'flag-tz',
    unicode: '1f1f9-1f1ff',
  },
  'flag-ua': {
    name: 'flag-ua',
    unicode: '1f1fa-1f1e6',
  },
  'flag-ug': {
    name: 'flag-ug',
    unicode: '1f1fa-1f1ec',
  },
  'flag-um': {
    name: 'flag-um',
    unicode: '1f1fa-1f1f2',
  },
  'flag-un': {
    name: 'flag-un',
    unicode: '1f1fa-1f1f3',
  },
  us: {
    name: 'us',
    unicode: '1f1fa-1f1f8',
  },
  'flag-us': {
    name: 'flag-us',
    unicode: '1f1fa-1f1f8',
    aliasOf: 'us',
  },
  'flag-uy': {
    name: 'flag-uy',
    unicode: '1f1fa-1f1fe',
  },
  'flag-uz': {
    name: 'flag-uz',
    unicode: '1f1fa-1f1ff',
  },
  'flag-va': {
    name: 'flag-va',
    unicode: '1f1fb-1f1e6',
  },
  'flag-vc': {
    name: 'flag-vc',
    unicode: '1f1fb-1f1e8',
  },
  'flag-ve': {
    name: 'flag-ve',
    unicode: '1f1fb-1f1ea',
  },
  'flag-vg': {
    name: 'flag-vg',
    unicode: '1f1fb-1f1ec',
  },
  'flag-vi': {
    name: 'flag-vi',
    unicode: '1f1fb-1f1ee',
  },
  'flag-vn': {
    name: 'flag-vn',
    unicode: '1f1fb-1f1f3',
  },
  'flag-vu': {
    name: 'flag-vu',
    unicode: '1f1fb-1f1fa',
  },
  'flag-wf': {
    name: 'flag-wf',
    unicode: '1f1fc-1f1eb',
  },
  'flag-ws': {
    name: 'flag-ws',
    unicode: '1f1fc-1f1f8',
  },
  'flag-xk': {
    name: 'flag-xk',
    unicode: '1f1fd-1f1f0',
  },
  'flag-ye': {
    name: 'flag-ye',
    unicode: '1f1fe-1f1ea',
  },
  'flag-yt': {
    name: 'flag-yt',
    unicode: '1f1fe-1f1f9',
  },
  'flag-za': {
    name: 'flag-za',
    unicode: '1f1ff-1f1e6',
  },
  'flag-zm': {
    name: 'flag-zm',
    unicode: '1f1ff-1f1f2',
  },
  'flag-zw': {
    name: 'flag-zw',
    unicode: '1f1ff-1f1fc',
  },
  koko: {
    name: 'koko',
    unicode: '1f201',
  },
  sa: {
    name: 'sa',
    unicode: '1f202-fe0f',
  },
  u7121: {
    name: 'u7121',
    unicode: '1f21a',
  },
  u6307: {
    name: 'u6307',
    unicode: '1f22f',
  },
  u7981: {
    name: 'u7981',
    unicode: '1f232',
  },
  u7a7a: {
    name: 'u7a7a',
    unicode: '1f233',
  },
  u5408: {
    name: 'u5408',
    unicode: '1f234',
  },
  u6e80: {
    name: 'u6e80',
    unicode: '1f235',
  },
  u6709: {
    name: 'u6709',
    unicode: '1f236',
  },
  u6708: {
    name: 'u6708',
    unicode: '1f237-fe0f',
  },
  u7533: {
    name: 'u7533',
    unicode: '1f238',
  },
  u5272: {
    name: 'u5272',
    unicode: '1f239',
  },
  u55b6: {
    name: 'u55b6',
    unicode: '1f23a',
  },
  ideograph_advantage: {
    name: 'ideograph_advantage',
    unicode: '1f250',
  },
  accept: {
    name: 'accept',
    unicode: '1f251',
  },
  cyclone: {
    name: 'cyclone',
    unicode: '1f300',
  },
  foggy: {
    name: 'foggy',
    unicode: '1f301',
  },
  closed_umbrella: {
    name: 'closed_umbrella',
    unicode: '1f302',
  },
  night_with_stars: {
    name: 'night_with_stars',
    unicode: '1f303',
  },
  sunrise_over_mountains: {
    name: 'sunrise_over_mountains',
    unicode: '1f304',
  },
  sunrise: {
    name: 'sunrise',
    unicode: '1f305',
  },
  city_sunset: {
    name: 'city_sunset',
    unicode: '1f306',
  },
  city_sunrise: {
    name: 'city_sunrise',
    unicode: '1f307',
  },
  rainbow: {
    name: 'rainbow',
    unicode: '1f308',
  },
  bridge_at_night: {
    name: 'bridge_at_night',
    unicode: '1f309',
  },
  ocean: {
    name: 'ocean',
    unicode: '1f30a',
  },
  volcano: {
    name: 'volcano',
    unicode: '1f30b',
  },
  milky_way: {
    name: 'milky_way',
    unicode: '1f30c',
  },
  earth_africa: {
    name: 'earth_africa',
    unicode: '1f30d',
  },
  earth_americas: {
    name: 'earth_americas',
    unicode: '1f30e',
  },
  earth_asia: {
    name: 'earth_asia',
    unicode: '1f30f',
  },
  globe_with_meridians: {
    name: 'globe_with_meridians',
    unicode: '1f310',
  },
  new_moon: {
    name: 'new_moon',
    unicode: '1f311',
  },
  waxing_crescent_moon: {
    name: 'waxing_crescent_moon',
    unicode: '1f312',
  },
  first_quarter_moon: {
    name: 'first_quarter_moon',
    unicode: '1f313',
  },
  moon: {
    name: 'moon',
    unicode: '1f314',
  },
  waxing_gibbous_moon: {
    name: 'waxing_gibbous_moon',
    unicode: '1f314',
    aliasOf: 'moon',
  },
  full_moon: {
    name: 'full_moon',
    unicode: '1f315',
  },
  waning_gibbous_moon: {
    name: 'waning_gibbous_moon',
    unicode: '1f316',
  },
  last_quarter_moon: {
    name: 'last_quarter_moon',
    unicode: '1f317',
  },
  waning_crescent_moon: {
    name: 'waning_crescent_moon',
    unicode: '1f318',
  },
  crescent_moon: {
    name: 'crescent_moon',
    unicode: '1f319',
  },
  new_moon_with_face: {
    name: 'new_moon_with_face',
    unicode: '1f31a',
  },
  first_quarter_moon_with_face: {
    name: 'first_quarter_moon_with_face',
    unicode: '1f31b',
  },
  last_quarter_moon_with_face: {
    name: 'last_quarter_moon_with_face',
    unicode: '1f31c',
  },
  full_moon_with_face: {
    name: 'full_moon_with_face',
    unicode: '1f31d',
  },
  sun_with_face: {
    name: 'sun_with_face',
    unicode: '1f31e',
  },
  star2: {
    name: 'star2',
    unicode: '1f31f',
  },
  stars: {
    name: 'stars',
    unicode: '1f320',
  },
  thermometer: {
    name: 'thermometer',
    unicode: '1f321-fe0f',
  },
  mostly_sunny: {
    name: 'mostly_sunny',
    unicode: '1f324-fe0f',
  },
  sun_small_cloud: {
    name: 'sun_small_cloud',
    unicode: '1f324-fe0f',
    aliasOf: 'mostly_sunny',
  },
  barely_sunny: {
    name: 'barely_sunny',
    unicode: '1f325-fe0f',
  },
  sun_behind_cloud: {
    name: 'sun_behind_cloud',
    unicode: '1f325-fe0f',
    aliasOf: 'barely_sunny',
  },
  partly_sunny_rain: {
    name: 'partly_sunny_rain',
    unicode: '1f326-fe0f',
  },
  sun_behind_rain_cloud: {
    name: 'sun_behind_rain_cloud',
    unicode: '1f326-fe0f',
    aliasOf: 'partly_sunny_rain',
  },
  rain_cloud: {
    name: 'rain_cloud',
    unicode: '1f327-fe0f',
  },
  snow_cloud: {
    name: 'snow_cloud',
    unicode: '1f328-fe0f',
  },
  lightning: {
    name: 'lightning',
    unicode: '1f329-fe0f',
  },
  lightning_cloud: {
    name: 'lightning_cloud',
    unicode: '1f329-fe0f',
    aliasOf: 'lightning',
  },
  tornado: {
    name: 'tornado',
    unicode: '1f32a-fe0f',
  },
  tornado_cloud: {
    name: 'tornado_cloud',
    unicode: '1f32a-fe0f',
    aliasOf: 'tornado',
  },
  fog: {
    name: 'fog',
    unicode: '1f32b-fe0f',
  },
  wind_blowing_face: {
    name: 'wind_blowing_face',
    unicode: '1f32c-fe0f',
  },
  hotdog: {
    name: 'hotdog',
    unicode: '1f32d',
  },
  taco: {
    name: 'taco',
    unicode: '1f32e',
  },
  burrito: {
    name: 'burrito',
    unicode: '1f32f',
  },
  chestnut: {
    name: 'chestnut',
    unicode: '1f330',
  },
  seedling: {
    name: 'seedling',
    unicode: '1f331',
  },
  evergreen_tree: {
    name: 'evergreen_tree',
    unicode: '1f332',
  },
  deciduous_tree: {
    name: 'deciduous_tree',
    unicode: '1f333',
  },
  palm_tree: {
    name: 'palm_tree',
    unicode: '1f334',
  },
  cactus: {
    name: 'cactus',
    unicode: '1f335',
  },
  hot_pepper: {
    name: 'hot_pepper',
    unicode: '1f336-fe0f',
  },
  tulip: {
    name: 'tulip',
    unicode: '1f337',
  },
  cherry_blossom: {
    name: 'cherry_blossom',
    unicode: '1f338',
  },
  rose: {
    name: 'rose',
    unicode: '1f339',
  },
  hibiscus: {
    name: 'hibiscus',
    unicode: '1f33a',
  },
  sunflower: {
    name: 'sunflower',
    unicode: '1f33b',
  },
  blossom: {
    name: 'blossom',
    unicode: '1f33c',
  },
  corn: {
    name: 'corn',
    unicode: '1f33d',
  },
  ear_of_rice: {
    name: 'ear_of_rice',
    unicode: '1f33e',
  },
  herb: {
    name: 'herb',
    unicode: '1f33f',
  },
  four_leaf_clover: {
    name: 'four_leaf_clover',
    unicode: '1f340',
  },
  maple_leaf: {
    name: 'maple_leaf',
    unicode: '1f341',
  },
  fallen_leaf: {
    name: 'fallen_leaf',
    unicode: '1f342',
  },
  leaves: {
    name: 'leaves',
    unicode: '1f343',
  },
  mushroom: {
    name: 'mushroom',
    unicode: '1f344',
  },
  tomato: {
    name: 'tomato',
    unicode: '1f345',
  },
  eggplant: {
    name: 'eggplant',
    unicode: '1f346',
  },
  grapes: {
    name: 'grapes',
    unicode: '1f347',
  },
  melon: {
    name: 'melon',
    unicode: '1f348',
  },
  watermelon: {
    name: 'watermelon',
    unicode: '1f349',
  },
  tangerine: {
    name: 'tangerine',
    unicode: '1f34a',
  },
  lemon: {
    name: 'lemon',
    unicode: '1f34b',
  },
  banana: {
    name: 'banana',
    unicode: '1f34c',
  },
  pineapple: {
    name: 'pineapple',
    unicode: '1f34d',
  },
  apple: {
    name: 'apple',
    unicode: '1f34e',
  },
  green_apple: {
    name: 'green_apple',
    unicode: '1f34f',
  },
  pear: {
    name: 'pear',
    unicode: '1f350',
  },
  peach: {
    name: 'peach',
    unicode: '1f351',
  },
  cherries: {
    name: 'cherries',
    unicode: '1f352',
  },
  strawberry: {
    name: 'strawberry',
    unicode: '1f353',
  },
  hamburger: {
    name: 'hamburger',
    unicode: '1f354',
  },
  pizza: {
    name: 'pizza',
    unicode: '1f355',
  },
  meat_on_bone: {
    name: 'meat_on_bone',
    unicode: '1f356',
  },
  poultry_leg: {
    name: 'poultry_leg',
    unicode: '1f357',
  },
  rice_cracker: {
    name: 'rice_cracker',
    unicode: '1f358',
  },
  rice_ball: {
    name: 'rice_ball',
    unicode: '1f359',
  },
  rice: {
    name: 'rice',
    unicode: '1f35a',
  },
  curry: {
    name: 'curry',
    unicode: '1f35b',
  },
  ramen: {
    name: 'ramen',
    unicode: '1f35c',
  },
  spaghetti: {
    name: 'spaghetti',
    unicode: '1f35d',
  },
  bread: {
    name: 'bread',
    unicode: '1f35e',
  },
  fries: {
    name: 'fries',
    unicode: '1f35f',
  },
  sweet_potato: {
    name: 'sweet_potato',
    unicode: '1f360',
  },
  dango: {
    name: 'dango',
    unicode: '1f361',
  },
  oden: {
    name: 'oden',
    unicode: '1f362',
  },
  sushi: {
    name: 'sushi',
    unicode: '1f363',
  },
  fried_shrimp: {
    name: 'fried_shrimp',
    unicode: '1f364',
  },
  fish_cake: {
    name: 'fish_cake',
    unicode: '1f365',
  },
  icecream: {
    name: 'icecream',
    unicode: '1f366',
  },
  shaved_ice: {
    name: 'shaved_ice',
    unicode: '1f367',
  },
  ice_cream: {
    name: 'ice_cream',
    unicode: '1f368',
  },
  doughnut: {
    name: 'doughnut',
    unicode: '1f369',
  },
  cookie: {
    name: 'cookie',
    unicode: '1f36a',
  },
  chocolate_bar: {
    name: 'chocolate_bar',
    unicode: '1f36b',
  },
  candy: {
    name: 'candy',
    unicode: '1f36c',
  },
  lollipop: {
    name: 'lollipop',
    unicode: '1f36d',
  },
  custard: {
    name: 'custard',
    unicode: '1f36e',
  },
  honey_pot: {
    name: 'honey_pot',
    unicode: '1f36f',
  },
  cake: {
    name: 'cake',
    unicode: '1f370',
  },
  bento: {
    name: 'bento',
    unicode: '1f371',
  },
  stew: {
    name: 'stew',
    unicode: '1f372',
  },
  fried_egg: {
    name: 'fried_egg',
    unicode: '1f373',
  },
  cooking: {
    name: 'cooking',
    unicode: '1f373',
    aliasOf: 'fried_egg',
  },
  fork_and_knife: {
    name: 'fork_and_knife',
    unicode: '1f374',
  },
  tea: {
    name: 'tea',
    unicode: '1f375',
  },
  sake: {
    name: 'sake',
    unicode: '1f376',
  },
  wine_glass: {
    name: 'wine_glass',
    unicode: '1f377',
  },
  cocktail: {
    name: 'cocktail',
    unicode: '1f378',
  },
  tropical_drink: {
    name: 'tropical_drink',
    unicode: '1f379',
  },
  beer: {
    name: 'beer',
    unicode: '1f37a',
  },
  beers: {
    name: 'beers',
    unicode: '1f37b',
  },
  baby_bottle: {
    name: 'baby_bottle',
    unicode: '1f37c',
  },
  knife_fork_plate: {
    name: 'knife_fork_plate',
    unicode: '1f37d-fe0f',
  },
  champagne: {
    name: 'champagne',
    unicode: '1f37e',
  },
  popcorn: {
    name: 'popcorn',
    unicode: '1f37f',
  },
  ribbon: {
    name: 'ribbon',
    unicode: '1f380',
  },
  gift: {
    name: 'gift',
    unicode: '1f381',
  },
  birthday: {
    name: 'birthday',
    unicode: '1f382',
  },
  jack_o_lantern: {
    name: 'jack_o_lantern',
    unicode: '1f383',
  },
  christmas_tree: {
    name: 'christmas_tree',
    unicode: '1f384',
  },
  santa: {
    name: 'santa',
    unicode: '1f385',
    skinVariations: {
      '2': {
        name: 'santa#skin-tone-2',
        unicode: '1f385-1f3fb',
      },
      '3': {
        name: 'santa#skin-tone-3',
        unicode: '1f385-1f3fc',
      },
      '4': {
        name: 'santa#skin-tone-4',
        unicode: '1f385-1f3fd',
      },
      '5': {
        name: 'santa#skin-tone-5',
        unicode: '1f385-1f3fe',
      },
      '6': {
        name: 'santa#skin-tone-6',
        unicode: '1f385-1f3ff',
      },
    },
  },
  fireworks: {
    name: 'fireworks',
    unicode: '1f386',
  },
  sparkler: {
    name: 'sparkler',
    unicode: '1f387',
  },
  balloon: {
    name: 'balloon',
    unicode: '1f388',
  },
  tada: {
    name: 'tada',
    unicode: '1f389',
  },
  confetti_ball: {
    name: 'confetti_ball',
    unicode: '1f38a',
  },
  tanabata_tree: {
    name: 'tanabata_tree',
    unicode: '1f38b',
  },
  crossed_flags: {
    name: 'crossed_flags',
    unicode: '1f38c',
  },
  bamboo: {
    name: 'bamboo',
    unicode: '1f38d',
  },
  dolls: {
    name: 'dolls',
    unicode: '1f38e',
  },
  flags: {
    name: 'flags',
    unicode: '1f38f',
  },
  wind_chime: {
    name: 'wind_chime',
    unicode: '1f390',
  },
  rice_scene: {
    name: 'rice_scene',
    unicode: '1f391',
  },
  school_satchel: {
    name: 'school_satchel',
    unicode: '1f392',
  },
  mortar_board: {
    name: 'mortar_board',
    unicode: '1f393',
  },
  medal: {
    name: 'medal',
    unicode: '1f396-fe0f',
  },
  reminder_ribbon: {
    name: 'reminder_ribbon',
    unicode: '1f397-fe0f',
  },
  studio_microphone: {
    name: 'studio_microphone',
    unicode: '1f399-fe0f',
  },
  level_slider: {
    name: 'level_slider',
    unicode: '1f39a-fe0f',
  },
  control_knobs: {
    name: 'control_knobs',
    unicode: '1f39b-fe0f',
  },
  film_frames: {
    name: 'film_frames',
    unicode: '1f39e-fe0f',
  },
  admission_tickets: {
    name: 'admission_tickets',
    unicode: '1f39f-fe0f',
  },
  carousel_horse: {
    name: 'carousel_horse',
    unicode: '1f3a0',
  },
  ferris_wheel: {
    name: 'ferris_wheel',
    unicode: '1f3a1',
  },
  roller_coaster: {
    name: 'roller_coaster',
    unicode: '1f3a2',
  },
  fishing_pole_and_fish: {
    name: 'fishing_pole_and_fish',
    unicode: '1f3a3',
  },
  microphone: {
    name: 'microphone',
    unicode: '1f3a4',
  },
  movie_camera: {
    name: 'movie_camera',
    unicode: '1f3a5',
  },
  cinema: {
    name: 'cinema',
    unicode: '1f3a6',
  },
  headphones: {
    name: 'headphones',
    unicode: '1f3a7',
  },
  art: {
    name: 'art',
    unicode: '1f3a8',
  },
  tophat: {
    name: 'tophat',
    unicode: '1f3a9',
  },
  circus_tent: {
    name: 'circus_tent',
    unicode: '1f3aa',
  },
  ticket: {
    name: 'ticket',
    unicode: '1f3ab',
  },
  clapper: {
    name: 'clapper',
    unicode: '1f3ac',
  },
  performing_arts: {
    name: 'performing_arts',
    unicode: '1f3ad',
  },
  video_game: {
    name: 'video_game',
    unicode: '1f3ae',
  },
  dart: {
    name: 'dart',
    unicode: '1f3af',
  },
  slot_machine: {
    name: 'slot_machine',
    unicode: '1f3b0',
  },
  '8ball': {
    name: '8ball',
    unicode: '1f3b1',
  },
  game_die: {
    name: 'game_die',
    unicode: '1f3b2',
  },
  bowling: {
    name: 'bowling',
    unicode: '1f3b3',
  },
  flower_playing_cards: {
    name: 'flower_playing_cards',
    unicode: '1f3b4',
  },
  musical_note: {
    name: 'musical_note',
    unicode: '1f3b5',
  },
  notes: {
    name: 'notes',
    unicode: '1f3b6',
  },
  saxophone: {
    name: 'saxophone',
    unicode: '1f3b7',
  },
  guitar: {
    name: 'guitar',
    unicode: '1f3b8',
  },
  musical_keyboard: {
    name: 'musical_keyboard',
    unicode: '1f3b9',
  },
  trumpet: {
    name: 'trumpet',
    unicode: '1f3ba',
  },
  violin: {
    name: 'violin',
    unicode: '1f3bb',
  },
  musical_score: {
    name: 'musical_score',
    unicode: '1f3bc',
  },
  running_shirt_with_sash: {
    name: 'running_shirt_with_sash',
    unicode: '1f3bd',
  },
  tennis: {
    name: 'tennis',
    unicode: '1f3be',
  },
  ski: {
    name: 'ski',
    unicode: '1f3bf',
  },
  basketball: {
    name: 'basketball',
    unicode: '1f3c0',
  },
  checkered_flag: {
    name: 'checkered_flag',
    unicode: '1f3c1',
  },
  snowboarder: {
    name: 'snowboarder',
    unicode: '1f3c2',
    skinVariations: {
      '2': {
        name: 'snowboarder#skin-tone-2',
        unicode: '1f3c2-1f3fb',
      },
      '3': {
        name: 'snowboarder#skin-tone-3',
        unicode: '1f3c2-1f3fc',
      },
      '4': {
        name: 'snowboarder#skin-tone-4',
        unicode: '1f3c2-1f3fd',
      },
      '5': {
        name: 'snowboarder#skin-tone-5',
        unicode: '1f3c2-1f3fe',
      },
      '6': {
        name: 'snowboarder#skin-tone-6',
        unicode: '1f3c2-1f3ff',
      },
    },
  },
  'woman-running': {
    name: 'woman-running',
    unicode: '1f3c3-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-running#skin-tone-2',
        unicode: '1f3c3-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-running#skin-tone-3',
        unicode: '1f3c3-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-running#skin-tone-4',
        unicode: '1f3c3-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-running#skin-tone-5',
        unicode: '1f3c3-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-running#skin-tone-6',
        unicode: '1f3c3-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-running': {
    name: 'man-running',
    unicode: '1f3c3-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-running#skin-tone-2',
        unicode: '1f3c3-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-running#skin-tone-3',
        unicode: '1f3c3-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-running#skin-tone-4',
        unicode: '1f3c3-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-running#skin-tone-5',
        unicode: '1f3c3-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-running#skin-tone-6',
        unicode: '1f3c3-1f3ff-200d-2642-fe0f',
      },
    },
  },
  runner: {
    name: 'runner',
    unicode: '1f3c3',
    skinVariations: {
      '2': {
        name: 'runner#skin-tone-2',
        unicode: '1f3c3-1f3fb',
      },
      '3': {
        name: 'runner#skin-tone-3',
        unicode: '1f3c3-1f3fc',
      },
      '4': {
        name: 'runner#skin-tone-4',
        unicode: '1f3c3-1f3fd',
      },
      '5': {
        name: 'runner#skin-tone-5',
        unicode: '1f3c3-1f3fe',
      },
      '6': {
        name: 'runner#skin-tone-6',
        unicode: '1f3c3-1f3ff',
      },
    },
  },
  running: {
    name: 'running',
    unicode: '1f3c3',
    aliasOf: 'runner',
    skinVariations: {
      '2': {
        name: 'running#skin-tone-2',
        unicode: '1f3c3-1f3fb',
      },
      '3': {
        name: 'running#skin-tone-3',
        unicode: '1f3c3-1f3fc',
      },
      '4': {
        name: 'running#skin-tone-4',
        unicode: '1f3c3-1f3fd',
      },
      '5': {
        name: 'running#skin-tone-5',
        unicode: '1f3c3-1f3fe',
      },
      '6': {
        name: 'running#skin-tone-6',
        unicode: '1f3c3-1f3ff',
      },
    },
  },
  'woman-surfing': {
    name: 'woman-surfing',
    unicode: '1f3c4-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-surfing#skin-tone-2',
        unicode: '1f3c4-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-surfing#skin-tone-3',
        unicode: '1f3c4-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-surfing#skin-tone-4',
        unicode: '1f3c4-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-surfing#skin-tone-5',
        unicode: '1f3c4-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-surfing#skin-tone-6',
        unicode: '1f3c4-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-surfing': {
    name: 'man-surfing',
    unicode: '1f3c4-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-surfing#skin-tone-2',
        unicode: '1f3c4-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-surfing#skin-tone-3',
        unicode: '1f3c4-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-surfing#skin-tone-4',
        unicode: '1f3c4-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-surfing#skin-tone-5',
        unicode: '1f3c4-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-surfing#skin-tone-6',
        unicode: '1f3c4-1f3ff-200d-2642-fe0f',
      },
    },
  },
  surfer: {
    name: 'surfer',
    unicode: '1f3c4',
    skinVariations: {
      '2': {
        name: 'surfer#skin-tone-2',
        unicode: '1f3c4-1f3fb',
      },
      '3': {
        name: 'surfer#skin-tone-3',
        unicode: '1f3c4-1f3fc',
      },
      '4': {
        name: 'surfer#skin-tone-4',
        unicode: '1f3c4-1f3fd',
      },
      '5': {
        name: 'surfer#skin-tone-5',
        unicode: '1f3c4-1f3fe',
      },
      '6': {
        name: 'surfer#skin-tone-6',
        unicode: '1f3c4-1f3ff',
      },
    },
  },
  sports_medal: {
    name: 'sports_medal',
    unicode: '1f3c5',
  },
  trophy: {
    name: 'trophy',
    unicode: '1f3c6',
  },
  horse_racing: {
    name: 'horse_racing',
    unicode: '1f3c7',
    skinVariations: {
      '2': {
        name: 'horse_racing#skin-tone-2',
        unicode: '1f3c7-1f3fb',
      },
      '3': {
        name: 'horse_racing#skin-tone-3',
        unicode: '1f3c7-1f3fc',
      },
      '4': {
        name: 'horse_racing#skin-tone-4',
        unicode: '1f3c7-1f3fd',
      },
      '5': {
        name: 'horse_racing#skin-tone-5',
        unicode: '1f3c7-1f3fe',
      },
      '6': {
        name: 'horse_racing#skin-tone-6',
        unicode: '1f3c7-1f3ff',
      },
    },
  },
  football: {
    name: 'football',
    unicode: '1f3c8',
  },
  rugby_football: {
    name: 'rugby_football',
    unicode: '1f3c9',
  },
  'woman-swimming': {
    name: 'woman-swimming',
    unicode: '1f3ca-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-swimming#skin-tone-2',
        unicode: '1f3ca-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-swimming#skin-tone-3',
        unicode: '1f3ca-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-swimming#skin-tone-4',
        unicode: '1f3ca-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-swimming#skin-tone-5',
        unicode: '1f3ca-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-swimming#skin-tone-6',
        unicode: '1f3ca-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-swimming': {
    name: 'man-swimming',
    unicode: '1f3ca-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-swimming#skin-tone-2',
        unicode: '1f3ca-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-swimming#skin-tone-3',
        unicode: '1f3ca-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-swimming#skin-tone-4',
        unicode: '1f3ca-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-swimming#skin-tone-5',
        unicode: '1f3ca-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-swimming#skin-tone-6',
        unicode: '1f3ca-1f3ff-200d-2642-fe0f',
      },
    },
  },
  swimmer: {
    name: 'swimmer',
    unicode: '1f3ca',
    skinVariations: {
      '2': {
        name: 'swimmer#skin-tone-2',
        unicode: '1f3ca-1f3fb',
      },
      '3': {
        name: 'swimmer#skin-tone-3',
        unicode: '1f3ca-1f3fc',
      },
      '4': {
        name: 'swimmer#skin-tone-4',
        unicode: '1f3ca-1f3fd',
      },
      '5': {
        name: 'swimmer#skin-tone-5',
        unicode: '1f3ca-1f3fe',
      },
      '6': {
        name: 'swimmer#skin-tone-6',
        unicode: '1f3ca-1f3ff',
      },
    },
  },
  'woman-lifting-weights': {
    name: 'woman-lifting-weights',
    unicode: '1f3cb-fe0f-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-lifting-weights#skin-tone-2',
        unicode: '1f3cb-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-lifting-weights#skin-tone-3',
        unicode: '1f3cb-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-lifting-weights#skin-tone-4',
        unicode: '1f3cb-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-lifting-weights#skin-tone-5',
        unicode: '1f3cb-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-lifting-weights#skin-tone-6',
        unicode: '1f3cb-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-lifting-weights': {
    name: 'man-lifting-weights',
    unicode: '1f3cb-fe0f-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-lifting-weights#skin-tone-2',
        unicode: '1f3cb-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-lifting-weights#skin-tone-3',
        unicode: '1f3cb-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-lifting-weights#skin-tone-4',
        unicode: '1f3cb-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-lifting-weights#skin-tone-5',
        unicode: '1f3cb-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-lifting-weights#skin-tone-6',
        unicode: '1f3cb-1f3ff-200d-2642-fe0f',
      },
    },
  },
  weight_lifter: {
    name: 'weight_lifter',
    unicode: '1f3cb-fe0f',
    skinVariations: {
      '2': {
        name: 'weight_lifter#skin-tone-2',
        unicode: '1f3cb-1f3fb',
      },
      '3': {
        name: 'weight_lifter#skin-tone-3',
        unicode: '1f3cb-1f3fc',
      },
      '4': {
        name: 'weight_lifter#skin-tone-4',
        unicode: '1f3cb-1f3fd',
      },
      '5': {
        name: 'weight_lifter#skin-tone-5',
        unicode: '1f3cb-1f3fe',
      },
      '6': {
        name: 'weight_lifter#skin-tone-6',
        unicode: '1f3cb-1f3ff',
      },
    },
  },
  'woman-golfing': {
    name: 'woman-golfing',
    unicode: '1f3cc-fe0f-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-golfing#skin-tone-2',
        unicode: '1f3cc-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-golfing#skin-tone-3',
        unicode: '1f3cc-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-golfing#skin-tone-4',
        unicode: '1f3cc-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-golfing#skin-tone-5',
        unicode: '1f3cc-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-golfing#skin-tone-6',
        unicode: '1f3cc-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-golfing': {
    name: 'man-golfing',
    unicode: '1f3cc-fe0f-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-golfing#skin-tone-2',
        unicode: '1f3cc-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-golfing#skin-tone-3',
        unicode: '1f3cc-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-golfing#skin-tone-4',
        unicode: '1f3cc-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-golfing#skin-tone-5',
        unicode: '1f3cc-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-golfing#skin-tone-6',
        unicode: '1f3cc-1f3ff-200d-2642-fe0f',
      },
    },
  },
  golfer: {
    name: 'golfer',
    unicode: '1f3cc-fe0f',
    skinVariations: {
      '2': {
        name: 'golfer#skin-tone-2',
        unicode: '1f3cc-1f3fb',
      },
      '3': {
        name: 'golfer#skin-tone-3',
        unicode: '1f3cc-1f3fc',
      },
      '4': {
        name: 'golfer#skin-tone-4',
        unicode: '1f3cc-1f3fd',
      },
      '5': {
        name: 'golfer#skin-tone-5',
        unicode: '1f3cc-1f3fe',
      },
      '6': {
        name: 'golfer#skin-tone-6',
        unicode: '1f3cc-1f3ff',
      },
    },
  },
  racing_motorcycle: {
    name: 'racing_motorcycle',
    unicode: '1f3cd-fe0f',
  },
  racing_car: {
    name: 'racing_car',
    unicode: '1f3ce-fe0f',
  },
  cricket_bat_and_ball: {
    name: 'cricket_bat_and_ball',
    unicode: '1f3cf',
  },
  volleyball: {
    name: 'volleyball',
    unicode: '1f3d0',
  },
  field_hockey_stick_and_ball: {
    name: 'field_hockey_stick_and_ball',
    unicode: '1f3d1',
  },
  ice_hockey_stick_and_puck: {
    name: 'ice_hockey_stick_and_puck',
    unicode: '1f3d2',
  },
  table_tennis_paddle_and_ball: {
    name: 'table_tennis_paddle_and_ball',
    unicode: '1f3d3',
  },
  snow_capped_mountain: {
    name: 'snow_capped_mountain',
    unicode: '1f3d4-fe0f',
  },
  camping: {
    name: 'camping',
    unicode: '1f3d5-fe0f',
  },
  beach_with_umbrella: {
    name: 'beach_with_umbrella',
    unicode: '1f3d6-fe0f',
  },
  building_construction: {
    name: 'building_construction',
    unicode: '1f3d7-fe0f',
  },
  house_buildings: {
    name: 'house_buildings',
    unicode: '1f3d8-fe0f',
  },
  cityscape: {
    name: 'cityscape',
    unicode: '1f3d9-fe0f',
  },
  derelict_house_building: {
    name: 'derelict_house_building',
    unicode: '1f3da-fe0f',
  },
  classical_building: {
    name: 'classical_building',
    unicode: '1f3db-fe0f',
  },
  desert: {
    name: 'desert',
    unicode: '1f3dc-fe0f',
  },
  desert_island: {
    name: 'desert_island',
    unicode: '1f3dd-fe0f',
  },
  national_park: {
    name: 'national_park',
    unicode: '1f3de-fe0f',
  },
  stadium: {
    name: 'stadium',
    unicode: '1f3df-fe0f',
  },
  house: {
    name: 'house',
    unicode: '1f3e0',
  },
  house_with_garden: {
    name: 'house_with_garden',
    unicode: '1f3e1',
  },
  office: {
    name: 'office',
    unicode: '1f3e2',
  },
  post_office: {
    name: 'post_office',
    unicode: '1f3e3',
  },
  european_post_office: {
    name: 'european_post_office',
    unicode: '1f3e4',
  },
  hospital: {
    name: 'hospital',
    unicode: '1f3e5',
  },
  bank: {
    name: 'bank',
    unicode: '1f3e6',
  },
  atm: {
    name: 'atm',
    unicode: '1f3e7',
  },
  hotel: {
    name: 'hotel',
    unicode: '1f3e8',
  },
  love_hotel: {
    name: 'love_hotel',
    unicode: '1f3e9',
  },
  convenience_store: {
    name: 'convenience_store',
    unicode: '1f3ea',
  },
  school: {
    name: 'school',
    unicode: '1f3eb',
  },
  department_store: {
    name: 'department_store',
    unicode: '1f3ec',
  },
  factory: {
    name: 'factory',
    unicode: '1f3ed',
  },
  izakaya_lantern: {
    name: 'izakaya_lantern',
    unicode: '1f3ee',
  },
  lantern: {
    name: 'lantern',
    unicode: '1f3ee',
    aliasOf: 'izakaya_lantern',
  },
  japanese_castle: {
    name: 'japanese_castle',
    unicode: '1f3ef',
  },
  european_castle: {
    name: 'european_castle',
    unicode: '1f3f0',
  },
  'rainbow-flag': {
    name: 'rainbow-flag',
    unicode: '1f3f3-fe0f-200d-1f308',
  },
  transgender_flag: {
    name: 'transgender_flag',
    unicode: '1f3f3-fe0f-200d-26a7-fe0f',
  },
  waving_white_flag: {
    name: 'waving_white_flag',
    unicode: '1f3f3-fe0f',
  },
  pirate_flag: {
    name: 'pirate_flag',
    unicode: '1f3f4-200d-2620-fe0f',
  },
  'flag-england': {
    name: 'flag-england',
    unicode: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
  },
  'flag-scotland': {
    name: 'flag-scotland',
    unicode: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
  },
  'flag-wales': {
    name: 'flag-wales',
    unicode: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
  },
  waving_black_flag: {
    name: 'waving_black_flag',
    unicode: '1f3f4',
  },
  rosette: {
    name: 'rosette',
    unicode: '1f3f5-fe0f',
  },
  label: {
    name: 'label',
    unicode: '1f3f7-fe0f',
  },
  badminton_racquet_and_shuttlecock: {
    name: 'badminton_racquet_and_shuttlecock',
    unicode: '1f3f8',
  },
  bow_and_arrow: {
    name: 'bow_and_arrow',
    unicode: '1f3f9',
  },
  amphora: {
    name: 'amphora',
    unicode: '1f3fa',
  },
  'skin-tone-2': {
    name: 'skin-tone-2',
    unicode: '1f3fb',
  },
  'skin-tone-3': {
    name: 'skin-tone-3',
    unicode: '1f3fc',
  },
  'skin-tone-4': {
    name: 'skin-tone-4',
    unicode: '1f3fd',
  },
  'skin-tone-5': {
    name: 'skin-tone-5',
    unicode: '1f3fe',
  },
  'skin-tone-6': {
    name: 'skin-tone-6',
    unicode: '1f3ff',
  },
  rat: {
    name: 'rat',
    unicode: '1f400',
  },
  mouse2: {
    name: 'mouse2',
    unicode: '1f401',
  },
  ox: {
    name: 'ox',
    unicode: '1f402',
  },
  water_buffalo: {
    name: 'water_buffalo',
    unicode: '1f403',
  },
  cow2: {
    name: 'cow2',
    unicode: '1f404',
  },
  tiger2: {
    name: 'tiger2',
    unicode: '1f405',
  },
  leopard: {
    name: 'leopard',
    unicode: '1f406',
  },
  rabbit2: {
    name: 'rabbit2',
    unicode: '1f407',
  },
  black_cat: {
    name: 'black_cat',
    unicode: '1f408-200d-2b1b',
  },
  cat2: {
    name: 'cat2',
    unicode: '1f408',
  },
  dragon: {
    name: 'dragon',
    unicode: '1f409',
  },
  crocodile: {
    name: 'crocodile',
    unicode: '1f40a',
  },
  whale2: {
    name: 'whale2',
    unicode: '1f40b',
  },
  snail: {
    name: 'snail',
    unicode: '1f40c',
  },
  snake: {
    name: 'snake',
    unicode: '1f40d',
  },
  racehorse: {
    name: 'racehorse',
    unicode: '1f40e',
  },
  ram: {
    name: 'ram',
    unicode: '1f40f',
  },
  goat: {
    name: 'goat',
    unicode: '1f410',
  },
  sheep: {
    name: 'sheep',
    unicode: '1f411',
  },
  monkey: {
    name: 'monkey',
    unicode: '1f412',
  },
  rooster: {
    name: 'rooster',
    unicode: '1f413',
  },
  chicken: {
    name: 'chicken',
    unicode: '1f414',
  },
  service_dog: {
    name: 'service_dog',
    unicode: '1f415-200d-1f9ba',
  },
  dog2: {
    name: 'dog2',
    unicode: '1f415',
  },
  pig2: {
    name: 'pig2',
    unicode: '1f416',
  },
  boar: {
    name: 'boar',
    unicode: '1f417',
  },
  elephant: {
    name: 'elephant',
    unicode: '1f418',
  },
  octopus: {
    name: 'octopus',
    unicode: '1f419',
  },
  shell: {
    name: 'shell',
    unicode: '1f41a',
  },
  bug: {
    name: 'bug',
    unicode: '1f41b',
  },
  ant: {
    name: 'ant',
    unicode: '1f41c',
  },
  bee: {
    name: 'bee',
    unicode: '1f41d',
  },
  honeybee: {
    name: 'honeybee',
    unicode: '1f41d',
    aliasOf: 'bee',
  },
  ladybug: {
    name: 'ladybug',
    unicode: '1f41e',
  },
  lady_beetle: {
    name: 'lady_beetle',
    unicode: '1f41e',
    aliasOf: 'ladybug',
  },
  fish: {
    name: 'fish',
    unicode: '1f41f',
  },
  tropical_fish: {
    name: 'tropical_fish',
    unicode: '1f420',
  },
  blowfish: {
    name: 'blowfish',
    unicode: '1f421',
  },
  turtle: {
    name: 'turtle',
    unicode: '1f422',
  },
  hatching_chick: {
    name: 'hatching_chick',
    unicode: '1f423',
  },
  baby_chick: {
    name: 'baby_chick',
    unicode: '1f424',
  },
  hatched_chick: {
    name: 'hatched_chick',
    unicode: '1f425',
  },
  bird: {
    name: 'bird',
    unicode: '1f426',
  },
  penguin: {
    name: 'penguin',
    unicode: '1f427',
  },
  koala: {
    name: 'koala',
    unicode: '1f428',
  },
  poodle: {
    name: 'poodle',
    unicode: '1f429',
  },
  dromedary_camel: {
    name: 'dromedary_camel',
    unicode: '1f42a',
  },
  camel: {
    name: 'camel',
    unicode: '1f42b',
  },
  dolphin: {
    name: 'dolphin',
    unicode: '1f42c',
  },
  flipper: {
    name: 'flipper',
    unicode: '1f42c',
    aliasOf: 'dolphin',
  },
  mouse: {
    name: 'mouse',
    unicode: '1f42d',
  },
  cow: {
    name: 'cow',
    unicode: '1f42e',
  },
  tiger: {
    name: 'tiger',
    unicode: '1f42f',
  },
  rabbit: {
    name: 'rabbit',
    unicode: '1f430',
  },
  cat: {
    name: 'cat',
    unicode: '1f431',
  },
  dragon_face: {
    name: 'dragon_face',
    unicode: '1f432',
  },
  whale: {
    name: 'whale',
    unicode: '1f433',
  },
  horse: {
    name: 'horse',
    unicode: '1f434',
  },
  monkey_face: {
    name: 'monkey_face',
    unicode: '1f435',
  },
  dog: {
    name: 'dog',
    unicode: '1f436',
  },
  pig: {
    name: 'pig',
    unicode: '1f437',
  },
  frog: {
    name: 'frog',
    unicode: '1f438',
  },
  hamster: {
    name: 'hamster',
    unicode: '1f439',
  },
  wolf: {
    name: 'wolf',
    unicode: '1f43a',
  },
  polar_bear: {
    name: 'polar_bear',
    unicode: '1f43b-200d-2744-fe0f',
  },
  bear: {
    name: 'bear',
    unicode: '1f43b',
  },
  panda_face: {
    name: 'panda_face',
    unicode: '1f43c',
  },
  pig_nose: {
    name: 'pig_nose',
    unicode: '1f43d',
  },
  feet: {
    name: 'feet',
    unicode: '1f43e',
  },
  paw_prints: {
    name: 'paw_prints',
    unicode: '1f43e',
    aliasOf: 'feet',
  },
  chipmunk: {
    name: 'chipmunk',
    unicode: '1f43f-fe0f',
  },
  eyes: {
    name: 'eyes',
    unicode: '1f440',
  },
  'eye-in-speech-bubble': {
    name: 'eye-in-speech-bubble',
    unicode: '1f441-fe0f-200d-1f5e8-fe0f',
  },
  eye: {
    name: 'eye',
    unicode: '1f441-fe0f',
  },
  ear: {
    name: 'ear',
    unicode: '1f442',
    skinVariations: {
      '2': {
        name: 'ear#skin-tone-2',
        unicode: '1f442-1f3fb',
      },
      '3': {
        name: 'ear#skin-tone-3',
        unicode: '1f442-1f3fc',
      },
      '4': {
        name: 'ear#skin-tone-4',
        unicode: '1f442-1f3fd',
      },
      '5': {
        name: 'ear#skin-tone-5',
        unicode: '1f442-1f3fe',
      },
      '6': {
        name: 'ear#skin-tone-6',
        unicode: '1f442-1f3ff',
      },
    },
  },
  nose: {
    name: 'nose',
    unicode: '1f443',
    skinVariations: {
      '2': {
        name: 'nose#skin-tone-2',
        unicode: '1f443-1f3fb',
      },
      '3': {
        name: 'nose#skin-tone-3',
        unicode: '1f443-1f3fc',
      },
      '4': {
        name: 'nose#skin-tone-4',
        unicode: '1f443-1f3fd',
      },
      '5': {
        name: 'nose#skin-tone-5',
        unicode: '1f443-1f3fe',
      },
      '6': {
        name: 'nose#skin-tone-6',
        unicode: '1f443-1f3ff',
      },
    },
  },
  lips: {
    name: 'lips',
    unicode: '1f444',
  },
  tongue: {
    name: 'tongue',
    unicode: '1f445',
  },
  point_up_2: {
    name: 'point_up_2',
    unicode: '1f446',
    skinVariations: {
      '2': {
        name: 'point_up_2#skin-tone-2',
        unicode: '1f446-1f3fb',
      },
      '3': {
        name: 'point_up_2#skin-tone-3',
        unicode: '1f446-1f3fc',
      },
      '4': {
        name: 'point_up_2#skin-tone-4',
        unicode: '1f446-1f3fd',
      },
      '5': {
        name: 'point_up_2#skin-tone-5',
        unicode: '1f446-1f3fe',
      },
      '6': {
        name: 'point_up_2#skin-tone-6',
        unicode: '1f446-1f3ff',
      },
    },
  },
  point_down: {
    name: 'point_down',
    unicode: '1f447',
    skinVariations: {
      '2': {
        name: 'point_down#skin-tone-2',
        unicode: '1f447-1f3fb',
      },
      '3': {
        name: 'point_down#skin-tone-3',
        unicode: '1f447-1f3fc',
      },
      '4': {
        name: 'point_down#skin-tone-4',
        unicode: '1f447-1f3fd',
      },
      '5': {
        name: 'point_down#skin-tone-5',
        unicode: '1f447-1f3fe',
      },
      '6': {
        name: 'point_down#skin-tone-6',
        unicode: '1f447-1f3ff',
      },
    },
  },
  point_left: {
    name: 'point_left',
    unicode: '1f448',
    skinVariations: {
      '2': {
        name: 'point_left#skin-tone-2',
        unicode: '1f448-1f3fb',
      },
      '3': {
        name: 'point_left#skin-tone-3',
        unicode: '1f448-1f3fc',
      },
      '4': {
        name: 'point_left#skin-tone-4',
        unicode: '1f448-1f3fd',
      },
      '5': {
        name: 'point_left#skin-tone-5',
        unicode: '1f448-1f3fe',
      },
      '6': {
        name: 'point_left#skin-tone-6',
        unicode: '1f448-1f3ff',
      },
    },
  },
  point_right: {
    name: 'point_right',
    unicode: '1f449',
    skinVariations: {
      '2': {
        name: 'point_right#skin-tone-2',
        unicode: '1f449-1f3fb',
      },
      '3': {
        name: 'point_right#skin-tone-3',
        unicode: '1f449-1f3fc',
      },
      '4': {
        name: 'point_right#skin-tone-4',
        unicode: '1f449-1f3fd',
      },
      '5': {
        name: 'point_right#skin-tone-5',
        unicode: '1f449-1f3fe',
      },
      '6': {
        name: 'point_right#skin-tone-6',
        unicode: '1f449-1f3ff',
      },
    },
  },
  facepunch: {
    name: 'facepunch',
    unicode: '1f44a',
    skinVariations: {
      '2': {
        name: 'facepunch#skin-tone-2',
        unicode: '1f44a-1f3fb',
      },
      '3': {
        name: 'facepunch#skin-tone-3',
        unicode: '1f44a-1f3fc',
      },
      '4': {
        name: 'facepunch#skin-tone-4',
        unicode: '1f44a-1f3fd',
      },
      '5': {
        name: 'facepunch#skin-tone-5',
        unicode: '1f44a-1f3fe',
      },
      '6': {
        name: 'facepunch#skin-tone-6',
        unicode: '1f44a-1f3ff',
      },
    },
  },
  punch: {
    name: 'punch',
    unicode: '1f44a',
    aliasOf: 'facepunch',
    skinVariations: {
      '2': {
        name: 'punch#skin-tone-2',
        unicode: '1f44a-1f3fb',
      },
      '3': {
        name: 'punch#skin-tone-3',
        unicode: '1f44a-1f3fc',
      },
      '4': {
        name: 'punch#skin-tone-4',
        unicode: '1f44a-1f3fd',
      },
      '5': {
        name: 'punch#skin-tone-5',
        unicode: '1f44a-1f3fe',
      },
      '6': {
        name: 'punch#skin-tone-6',
        unicode: '1f44a-1f3ff',
      },
    },
  },
  wave: {
    name: 'wave',
    unicode: '1f44b',
    skinVariations: {
      '2': {
        name: 'wave#skin-tone-2',
        unicode: '1f44b-1f3fb',
      },
      '3': {
        name: 'wave#skin-tone-3',
        unicode: '1f44b-1f3fc',
      },
      '4': {
        name: 'wave#skin-tone-4',
        unicode: '1f44b-1f3fd',
      },
      '5': {
        name: 'wave#skin-tone-5',
        unicode: '1f44b-1f3fe',
      },
      '6': {
        name: 'wave#skin-tone-6',
        unicode: '1f44b-1f3ff',
      },
    },
  },
  ok_hand: {
    name: 'ok_hand',
    unicode: '1f44c',
    skinVariations: {
      '2': {
        name: 'ok_hand#skin-tone-2',
        unicode: '1f44c-1f3fb',
      },
      '3': {
        name: 'ok_hand#skin-tone-3',
        unicode: '1f44c-1f3fc',
      },
      '4': {
        name: 'ok_hand#skin-tone-4',
        unicode: '1f44c-1f3fd',
      },
      '5': {
        name: 'ok_hand#skin-tone-5',
        unicode: '1f44c-1f3fe',
      },
      '6': {
        name: 'ok_hand#skin-tone-6',
        unicode: '1f44c-1f3ff',
      },
    },
  },
  '+1': {
    name: '+1',
    unicode: '1f44d',
    skinVariations: {
      '2': {
        name: '+1#skin-tone-2',
        unicode: '1f44d-1f3fb',
      },
      '3': {
        name: '+1#skin-tone-3',
        unicode: '1f44d-1f3fc',
      },
      '4': {
        name: '+1#skin-tone-4',
        unicode: '1f44d-1f3fd',
      },
      '5': {
        name: '+1#skin-tone-5',
        unicode: '1f44d-1f3fe',
      },
      '6': {
        name: '+1#skin-tone-6',
        unicode: '1f44d-1f3ff',
      },
    },
  },
  thumbsup: {
    name: 'thumbsup',
    unicode: '1f44d',
    aliasOf: '+1',
    skinVariations: {
      '2': {
        name: 'thumbsup#skin-tone-2',
        unicode: '1f44d-1f3fb',
      },
      '3': {
        name: 'thumbsup#skin-tone-3',
        unicode: '1f44d-1f3fc',
      },
      '4': {
        name: 'thumbsup#skin-tone-4',
        unicode: '1f44d-1f3fd',
      },
      '5': {
        name: 'thumbsup#skin-tone-5',
        unicode: '1f44d-1f3fe',
      },
      '6': {
        name: 'thumbsup#skin-tone-6',
        unicode: '1f44d-1f3ff',
      },
    },
  },
  '-1': {
    name: '-1',
    unicode: '1f44e',
    skinVariations: {
      '2': {
        name: '-1#skin-tone-2',
        unicode: '1f44e-1f3fb',
      },
      '3': {
        name: '-1#skin-tone-3',
        unicode: '1f44e-1f3fc',
      },
      '4': {
        name: '-1#skin-tone-4',
        unicode: '1f44e-1f3fd',
      },
      '5': {
        name: '-1#skin-tone-5',
        unicode: '1f44e-1f3fe',
      },
      '6': {
        name: '-1#skin-tone-6',
        unicode: '1f44e-1f3ff',
      },
    },
  },
  thumbsdown: {
    name: 'thumbsdown',
    unicode: '1f44e',
    aliasOf: '-1',
    skinVariations: {
      '2': {
        name: 'thumbsdown#skin-tone-2',
        unicode: '1f44e-1f3fb',
      },
      '3': {
        name: 'thumbsdown#skin-tone-3',
        unicode: '1f44e-1f3fc',
      },
      '4': {
        name: 'thumbsdown#skin-tone-4',
        unicode: '1f44e-1f3fd',
      },
      '5': {
        name: 'thumbsdown#skin-tone-5',
        unicode: '1f44e-1f3fe',
      },
      '6': {
        name: 'thumbsdown#skin-tone-6',
        unicode: '1f44e-1f3ff',
      },
    },
  },
  clap: {
    name: 'clap',
    unicode: '1f44f',
    skinVariations: {
      '2': {
        name: 'clap#skin-tone-2',
        unicode: '1f44f-1f3fb',
      },
      '3': {
        name: 'clap#skin-tone-3',
        unicode: '1f44f-1f3fc',
      },
      '4': {
        name: 'clap#skin-tone-4',
        unicode: '1f44f-1f3fd',
      },
      '5': {
        name: 'clap#skin-tone-5',
        unicode: '1f44f-1f3fe',
      },
      '6': {
        name: 'clap#skin-tone-6',
        unicode: '1f44f-1f3ff',
      },
    },
  },
  open_hands: {
    name: 'open_hands',
    unicode: '1f450',
    skinVariations: {
      '2': {
        name: 'open_hands#skin-tone-2',
        unicode: '1f450-1f3fb',
      },
      '3': {
        name: 'open_hands#skin-tone-3',
        unicode: '1f450-1f3fc',
      },
      '4': {
        name: 'open_hands#skin-tone-4',
        unicode: '1f450-1f3fd',
      },
      '5': {
        name: 'open_hands#skin-tone-5',
        unicode: '1f450-1f3fe',
      },
      '6': {
        name: 'open_hands#skin-tone-6',
        unicode: '1f450-1f3ff',
      },
    },
  },
  crown: {
    name: 'crown',
    unicode: '1f451',
  },
  womans_hat: {
    name: 'womans_hat',
    unicode: '1f452',
  },
  eyeglasses: {
    name: 'eyeglasses',
    unicode: '1f453',
  },
  necktie: {
    name: 'necktie',
    unicode: '1f454',
  },
  shirt: {
    name: 'shirt',
    unicode: '1f455',
  },
  tshirt: {
    name: 'tshirt',
    unicode: '1f455',
    aliasOf: 'shirt',
  },
  jeans: {
    name: 'jeans',
    unicode: '1f456',
  },
  dress: {
    name: 'dress',
    unicode: '1f457',
  },
  kimono: {
    name: 'kimono',
    unicode: '1f458',
  },
  bikini: {
    name: 'bikini',
    unicode: '1f459',
  },
  womans_clothes: {
    name: 'womans_clothes',
    unicode: '1f45a',
  },
  purse: {
    name: 'purse',
    unicode: '1f45b',
  },
  handbag: {
    name: 'handbag',
    unicode: '1f45c',
  },
  pouch: {
    name: 'pouch',
    unicode: '1f45d',
  },
  mans_shoe: {
    name: 'mans_shoe',
    unicode: '1f45e',
  },
  shoe: {
    name: 'shoe',
    unicode: '1f45e',
    aliasOf: 'mans_shoe',
  },
  athletic_shoe: {
    name: 'athletic_shoe',
    unicode: '1f45f',
  },
  high_heel: {
    name: 'high_heel',
    unicode: '1f460',
  },
  sandal: {
    name: 'sandal',
    unicode: '1f461',
  },
  boot: {
    name: 'boot',
    unicode: '1f462',
  },
  footprints: {
    name: 'footprints',
    unicode: '1f463',
  },
  bust_in_silhouette: {
    name: 'bust_in_silhouette',
    unicode: '1f464',
  },
  busts_in_silhouette: {
    name: 'busts_in_silhouette',
    unicode: '1f465',
  },
  boy: {
    name: 'boy',
    unicode: '1f466',
    skinVariations: {
      '2': {
        name: 'boy#skin-tone-2',
        unicode: '1f466-1f3fb',
      },
      '3': {
        name: 'boy#skin-tone-3',
        unicode: '1f466-1f3fc',
      },
      '4': {
        name: 'boy#skin-tone-4',
        unicode: '1f466-1f3fd',
      },
      '5': {
        name: 'boy#skin-tone-5',
        unicode: '1f466-1f3fe',
      },
      '6': {
        name: 'boy#skin-tone-6',
        unicode: '1f466-1f3ff',
      },
    },
  },
  girl: {
    name: 'girl',
    unicode: '1f467',
    skinVariations: {
      '2': {
        name: 'girl#skin-tone-2',
        unicode: '1f467-1f3fb',
      },
      '3': {
        name: 'girl#skin-tone-3',
        unicode: '1f467-1f3fc',
      },
      '4': {
        name: 'girl#skin-tone-4',
        unicode: '1f467-1f3fd',
      },
      '5': {
        name: 'girl#skin-tone-5',
        unicode: '1f467-1f3fe',
      },
      '6': {
        name: 'girl#skin-tone-6',
        unicode: '1f467-1f3ff',
      },
    },
  },
  'male-farmer': {
    name: 'male-farmer',
    unicode: '1f468-200d-1f33e',
    skinVariations: {
      '2': {
        name: 'male-farmer#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f33e',
      },
      '3': {
        name: 'male-farmer#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f33e',
      },
      '4': {
        name: 'male-farmer#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f33e',
      },
      '5': {
        name: 'male-farmer#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f33e',
      },
      '6': {
        name: 'male-farmer#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f33e',
      },
    },
  },
  'male-cook': {
    name: 'male-cook',
    unicode: '1f468-200d-1f373',
    skinVariations: {
      '2': {
        name: 'male-cook#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f373',
      },
      '3': {
        name: 'male-cook#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f373',
      },
      '4': {
        name: 'male-cook#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f373',
      },
      '5': {
        name: 'male-cook#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f373',
      },
      '6': {
        name: 'male-cook#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f373',
      },
    },
  },
  man_feeding_baby: {
    name: 'man_feeding_baby',
    unicode: '1f468-200d-1f37c',
    skinVariations: {
      '2': {
        name: 'man_feeding_baby#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f37c',
      },
      '3': {
        name: 'man_feeding_baby#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f37c',
      },
      '4': {
        name: 'man_feeding_baby#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f37c',
      },
      '5': {
        name: 'man_feeding_baby#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f37c',
      },
      '6': {
        name: 'man_feeding_baby#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f37c',
      },
    },
  },
  'male-student': {
    name: 'male-student',
    unicode: '1f468-200d-1f393',
    skinVariations: {
      '2': {
        name: 'male-student#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f393',
      },
      '3': {
        name: 'male-student#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f393',
      },
      '4': {
        name: 'male-student#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f393',
      },
      '5': {
        name: 'male-student#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f393',
      },
      '6': {
        name: 'male-student#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f393',
      },
    },
  },
  'male-singer': {
    name: 'male-singer',
    unicode: '1f468-200d-1f3a4',
    skinVariations: {
      '2': {
        name: 'male-singer#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f3a4',
      },
      '3': {
        name: 'male-singer#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f3a4',
      },
      '4': {
        name: 'male-singer#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f3a4',
      },
      '5': {
        name: 'male-singer#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f3a4',
      },
      '6': {
        name: 'male-singer#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f3a4',
      },
    },
  },
  'male-artist': {
    name: 'male-artist',
    unicode: '1f468-200d-1f3a8',
    skinVariations: {
      '2': {
        name: 'male-artist#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f3a8',
      },
      '3': {
        name: 'male-artist#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f3a8',
      },
      '4': {
        name: 'male-artist#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f3a8',
      },
      '5': {
        name: 'male-artist#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f3a8',
      },
      '6': {
        name: 'male-artist#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f3a8',
      },
    },
  },
  'male-teacher': {
    name: 'male-teacher',
    unicode: '1f468-200d-1f3eb',
    skinVariations: {
      '2': {
        name: 'male-teacher#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f3eb',
      },
      '3': {
        name: 'male-teacher#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f3eb',
      },
      '4': {
        name: 'male-teacher#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f3eb',
      },
      '5': {
        name: 'male-teacher#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f3eb',
      },
      '6': {
        name: 'male-teacher#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f3eb',
      },
    },
  },
  'male-factory-worker': {
    name: 'male-factory-worker',
    unicode: '1f468-200d-1f3ed',
    skinVariations: {
      '2': {
        name: 'male-factory-worker#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f3ed',
      },
      '3': {
        name: 'male-factory-worker#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f3ed',
      },
      '4': {
        name: 'male-factory-worker#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f3ed',
      },
      '5': {
        name: 'male-factory-worker#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f3ed',
      },
      '6': {
        name: 'male-factory-worker#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f3ed',
      },
    },
  },
  'man-boy-boy': {
    name: 'man-boy-boy',
    unicode: '1f468-200d-1f466-200d-1f466',
  },
  'man-boy': {
    name: 'man-boy',
    unicode: '1f468-200d-1f466',
  },
  'man-girl-boy': {
    name: 'man-girl-boy',
    unicode: '1f468-200d-1f467-200d-1f466',
  },
  'man-girl-girl': {
    name: 'man-girl-girl',
    unicode: '1f468-200d-1f467-200d-1f467',
  },
  'man-girl': {
    name: 'man-girl',
    unicode: '1f468-200d-1f467',
  },
  'man-man-boy': {
    name: 'man-man-boy',
    unicode: '1f468-200d-1f468-200d-1f466',
  },
  'man-man-boy-boy': {
    name: 'man-man-boy-boy',
    unicode: '1f468-200d-1f468-200d-1f466-200d-1f466',
  },
  'man-man-girl': {
    name: 'man-man-girl',
    unicode: '1f468-200d-1f468-200d-1f467',
  },
  'man-man-girl-boy': {
    name: 'man-man-girl-boy',
    unicode: '1f468-200d-1f468-200d-1f467-200d-1f466',
  },
  'man-man-girl-girl': {
    name: 'man-man-girl-girl',
    unicode: '1f468-200d-1f468-200d-1f467-200d-1f467',
  },
  'man-woman-boy': {
    name: 'man-woman-boy',
    unicode: '1f468-200d-1f469-200d-1f466',
  },
  'man-woman-boy-boy': {
    name: 'man-woman-boy-boy',
    unicode: '1f468-200d-1f469-200d-1f466-200d-1f466',
  },
  'man-woman-girl': {
    name: 'man-woman-girl',
    unicode: '1f468-200d-1f469-200d-1f467',
  },
  'man-woman-girl-boy': {
    name: 'man-woman-girl-boy',
    unicode: '1f468-200d-1f469-200d-1f467-200d-1f466',
  },
  'man-woman-girl-girl': {
    name: 'man-woman-girl-girl',
    unicode: '1f468-200d-1f469-200d-1f467-200d-1f467',
  },
  'male-technologist': {
    name: 'male-technologist',
    unicode: '1f468-200d-1f4bb',
    skinVariations: {
      '2': {
        name: 'male-technologist#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f4bb',
      },
      '3': {
        name: 'male-technologist#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f4bb',
      },
      '4': {
        name: 'male-technologist#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f4bb',
      },
      '5': {
        name: 'male-technologist#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f4bb',
      },
      '6': {
        name: 'male-technologist#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f4bb',
      },
    },
  },
  'male-office-worker': {
    name: 'male-office-worker',
    unicode: '1f468-200d-1f4bc',
    skinVariations: {
      '2': {
        name: 'male-office-worker#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f4bc',
      },
      '3': {
        name: 'male-office-worker#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f4bc',
      },
      '4': {
        name: 'male-office-worker#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f4bc',
      },
      '5': {
        name: 'male-office-worker#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f4bc',
      },
      '6': {
        name: 'male-office-worker#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f4bc',
      },
    },
  },
  'male-mechanic': {
    name: 'male-mechanic',
    unicode: '1f468-200d-1f527',
    skinVariations: {
      '2': {
        name: 'male-mechanic#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f527',
      },
      '3': {
        name: 'male-mechanic#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f527',
      },
      '4': {
        name: 'male-mechanic#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f527',
      },
      '5': {
        name: 'male-mechanic#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f527',
      },
      '6': {
        name: 'male-mechanic#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f527',
      },
    },
  },
  'male-scientist': {
    name: 'male-scientist',
    unicode: '1f468-200d-1f52c',
    skinVariations: {
      '2': {
        name: 'male-scientist#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f52c',
      },
      '3': {
        name: 'male-scientist#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f52c',
      },
      '4': {
        name: 'male-scientist#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f52c',
      },
      '5': {
        name: 'male-scientist#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f52c',
      },
      '6': {
        name: 'male-scientist#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f52c',
      },
    },
  },
  'male-astronaut': {
    name: 'male-astronaut',
    unicode: '1f468-200d-1f680',
    skinVariations: {
      '2': {
        name: 'male-astronaut#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f680',
      },
      '3': {
        name: 'male-astronaut#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f680',
      },
      '4': {
        name: 'male-astronaut#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f680',
      },
      '5': {
        name: 'male-astronaut#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f680',
      },
      '6': {
        name: 'male-astronaut#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f680',
      },
    },
  },
  'male-firefighter': {
    name: 'male-firefighter',
    unicode: '1f468-200d-1f692',
    skinVariations: {
      '2': {
        name: 'male-firefighter#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f692',
      },
      '3': {
        name: 'male-firefighter#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f692',
      },
      '4': {
        name: 'male-firefighter#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f692',
      },
      '5': {
        name: 'male-firefighter#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f692',
      },
      '6': {
        name: 'male-firefighter#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f692',
      },
    },
  },
  man_with_probing_cane: {
    name: 'man_with_probing_cane',
    unicode: '1f468-200d-1f9af',
    skinVariations: {
      '2': {
        name: 'man_with_probing_cane#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f9af',
      },
      '3': {
        name: 'man_with_probing_cane#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f9af',
      },
      '4': {
        name: 'man_with_probing_cane#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f9af',
      },
      '5': {
        name: 'man_with_probing_cane#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f9af',
      },
      '6': {
        name: 'man_with_probing_cane#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f9af',
      },
    },
  },
  red_haired_man: {
    name: 'red_haired_man',
    unicode: '1f468-200d-1f9b0',
    skinVariations: {
      '2': {
        name: 'red_haired_man#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f9b0',
      },
      '3': {
        name: 'red_haired_man#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f9b0',
      },
      '4': {
        name: 'red_haired_man#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f9b0',
      },
      '5': {
        name: 'red_haired_man#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f9b0',
      },
      '6': {
        name: 'red_haired_man#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f9b0',
      },
    },
  },
  curly_haired_man: {
    name: 'curly_haired_man',
    unicode: '1f468-200d-1f9b1',
    skinVariations: {
      '2': {
        name: 'curly_haired_man#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f9b1',
      },
      '3': {
        name: 'curly_haired_man#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f9b1',
      },
      '4': {
        name: 'curly_haired_man#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f9b1',
      },
      '5': {
        name: 'curly_haired_man#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f9b1',
      },
      '6': {
        name: 'curly_haired_man#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f9b1',
      },
    },
  },
  bald_man: {
    name: 'bald_man',
    unicode: '1f468-200d-1f9b2',
    skinVariations: {
      '2': {
        name: 'bald_man#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f9b2',
      },
      '3': {
        name: 'bald_man#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f9b2',
      },
      '4': {
        name: 'bald_man#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f9b2',
      },
      '5': {
        name: 'bald_man#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f9b2',
      },
      '6': {
        name: 'bald_man#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f9b2',
      },
    },
  },
  white_haired_man: {
    name: 'white_haired_man',
    unicode: '1f468-200d-1f9b3',
    skinVariations: {
      '2': {
        name: 'white_haired_man#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f9b3',
      },
      '3': {
        name: 'white_haired_man#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f9b3',
      },
      '4': {
        name: 'white_haired_man#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f9b3',
      },
      '5': {
        name: 'white_haired_man#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f9b3',
      },
      '6': {
        name: 'white_haired_man#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f9b3',
      },
    },
  },
  man_in_motorized_wheelchair: {
    name: 'man_in_motorized_wheelchair',
    unicode: '1f468-200d-1f9bc',
    skinVariations: {
      '2': {
        name: 'man_in_motorized_wheelchair#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f9bc',
      },
      '3': {
        name: 'man_in_motorized_wheelchair#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f9bc',
      },
      '4': {
        name: 'man_in_motorized_wheelchair#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f9bc',
      },
      '5': {
        name: 'man_in_motorized_wheelchair#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f9bc',
      },
      '6': {
        name: 'man_in_motorized_wheelchair#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f9bc',
      },
    },
  },
  man_in_manual_wheelchair: {
    name: 'man_in_manual_wheelchair',
    unicode: '1f468-200d-1f9bd',
    skinVariations: {
      '2': {
        name: 'man_in_manual_wheelchair#skin-tone-2',
        unicode: '1f468-1f3fb-200d-1f9bd',
      },
      '3': {
        name: 'man_in_manual_wheelchair#skin-tone-3',
        unicode: '1f468-1f3fc-200d-1f9bd',
      },
      '4': {
        name: 'man_in_manual_wheelchair#skin-tone-4',
        unicode: '1f468-1f3fd-200d-1f9bd',
      },
      '5': {
        name: 'man_in_manual_wheelchair#skin-tone-5',
        unicode: '1f468-1f3fe-200d-1f9bd',
      },
      '6': {
        name: 'man_in_manual_wheelchair#skin-tone-6',
        unicode: '1f468-1f3ff-200d-1f9bd',
      },
    },
  },
  'male-doctor': {
    name: 'male-doctor',
    unicode: '1f468-200d-2695-fe0f',
    skinVariations: {
      '2': {
        name: 'male-doctor#skin-tone-2',
        unicode: '1f468-1f3fb-200d-2695-fe0f',
      },
      '3': {
        name: 'male-doctor#skin-tone-3',
        unicode: '1f468-1f3fc-200d-2695-fe0f',
      },
      '4': {
        name: 'male-doctor#skin-tone-4',
        unicode: '1f468-1f3fd-200d-2695-fe0f',
      },
      '5': {
        name: 'male-doctor#skin-tone-5',
        unicode: '1f468-1f3fe-200d-2695-fe0f',
      },
      '6': {
        name: 'male-doctor#skin-tone-6',
        unicode: '1f468-1f3ff-200d-2695-fe0f',
      },
    },
  },
  'male-judge': {
    name: 'male-judge',
    unicode: '1f468-200d-2696-fe0f',
    skinVariations: {
      '2': {
        name: 'male-judge#skin-tone-2',
        unicode: '1f468-1f3fb-200d-2696-fe0f',
      },
      '3': {
        name: 'male-judge#skin-tone-3',
        unicode: '1f468-1f3fc-200d-2696-fe0f',
      },
      '4': {
        name: 'male-judge#skin-tone-4',
        unicode: '1f468-1f3fd-200d-2696-fe0f',
      },
      '5': {
        name: 'male-judge#skin-tone-5',
        unicode: '1f468-1f3fe-200d-2696-fe0f',
      },
      '6': {
        name: 'male-judge#skin-tone-6',
        unicode: '1f468-1f3ff-200d-2696-fe0f',
      },
    },
  },
  'male-pilot': {
    name: 'male-pilot',
    unicode: '1f468-200d-2708-fe0f',
    skinVariations: {
      '2': {
        name: 'male-pilot#skin-tone-2',
        unicode: '1f468-1f3fb-200d-2708-fe0f',
      },
      '3': {
        name: 'male-pilot#skin-tone-3',
        unicode: '1f468-1f3fc-200d-2708-fe0f',
      },
      '4': {
        name: 'male-pilot#skin-tone-4',
        unicode: '1f468-1f3fd-200d-2708-fe0f',
      },
      '5': {
        name: 'male-pilot#skin-tone-5',
        unicode: '1f468-1f3fe-200d-2708-fe0f',
      },
      '6': {
        name: 'male-pilot#skin-tone-6',
        unicode: '1f468-1f3ff-200d-2708-fe0f',
      },
    },
  },
  'man-heart-man': {
    name: 'man-heart-man',
    unicode: '1f468-200d-2764-fe0f-200d-1f468',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'man-heart-man#skin-tone-2',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '3': {
        name: 'man-heart-man#skin-tone-3',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '4': {
        name: 'man-heart-man#skin-tone-4',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '5': {
        name: 'man-heart-man#skin-tone-5',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '6': {
        name: 'man-heart-man#skin-tone-6',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '2-3': {
        name: 'man-heart-man#skin-tone-2-3',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'man-heart-man#skin-tone-2-4',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'man-heart-man#skin-tone-2-5',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'man-heart-man#skin-tone-2-6',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'man-heart-man#skin-tone-3-2',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'man-heart-man#skin-tone-3-4',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'man-heart-man#skin-tone-3-5',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'man-heart-man#skin-tone-3-6',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'man-heart-man#skin-tone-4-2',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'man-heart-man#skin-tone-4-3',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'man-heart-man#skin-tone-4-5',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'man-heart-man#skin-tone-4-6',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'man-heart-man#skin-tone-5-2',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'man-heart-man#skin-tone-5-3',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'man-heart-man#skin-tone-5-4',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'man-heart-man#skin-tone-5-6',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'man-heart-man#skin-tone-6-2',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'man-heart-man#skin-tone-6-3',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'man-heart-man#skin-tone-6-4',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'man-heart-man#skin-tone-6-5',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe',
      },
    },
  },
  'man-kiss-man': {
    name: 'man-kiss-man',
    unicode: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'man-kiss-man#skin-tone-2',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '3': {
        name: 'man-kiss-man#skin-tone-3',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '4': {
        name: 'man-kiss-man#skin-tone-4',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '5': {
        name: 'man-kiss-man#skin-tone-5',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '6': {
        name: 'man-kiss-man#skin-tone-6',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '2-3': {
        name: 'man-kiss-man#skin-tone-2-3',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'man-kiss-man#skin-tone-2-4',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'man-kiss-man#skin-tone-2-5',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'man-kiss-man#skin-tone-2-6',
        unicode: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'man-kiss-man#skin-tone-3-2',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'man-kiss-man#skin-tone-3-4',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'man-kiss-man#skin-tone-3-5',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'man-kiss-man#skin-tone-3-6',
        unicode: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'man-kiss-man#skin-tone-4-2',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'man-kiss-man#skin-tone-4-3',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'man-kiss-man#skin-tone-4-5',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'man-kiss-man#skin-tone-4-6',
        unicode: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'man-kiss-man#skin-tone-5-2',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'man-kiss-man#skin-tone-5-3',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'man-kiss-man#skin-tone-5-4',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'man-kiss-man#skin-tone-5-6',
        unicode: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'man-kiss-man#skin-tone-6-2',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'man-kiss-man#skin-tone-6-3',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'man-kiss-man#skin-tone-6-4',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'man-kiss-man#skin-tone-6-5',
        unicode: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
    },
  },
  man: {
    name: 'man',
    unicode: '1f468',
    skinVariations: {
      '2': {
        name: 'man#skin-tone-2',
        unicode: '1f468-1f3fb',
      },
      '3': {
        name: 'man#skin-tone-3',
        unicode: '1f468-1f3fc',
      },
      '4': {
        name: 'man#skin-tone-4',
        unicode: '1f468-1f3fd',
      },
      '5': {
        name: 'man#skin-tone-5',
        unicode: '1f468-1f3fe',
      },
      '6': {
        name: 'man#skin-tone-6',
        unicode: '1f468-1f3ff',
      },
    },
  },
  'female-farmer': {
    name: 'female-farmer',
    unicode: '1f469-200d-1f33e',
    skinVariations: {
      '2': {
        name: 'female-farmer#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f33e',
      },
      '3': {
        name: 'female-farmer#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f33e',
      },
      '4': {
        name: 'female-farmer#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f33e',
      },
      '5': {
        name: 'female-farmer#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f33e',
      },
      '6': {
        name: 'female-farmer#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f33e',
      },
    },
  },
  'female-cook': {
    name: 'female-cook',
    unicode: '1f469-200d-1f373',
    skinVariations: {
      '2': {
        name: 'female-cook#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f373',
      },
      '3': {
        name: 'female-cook#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f373',
      },
      '4': {
        name: 'female-cook#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f373',
      },
      '5': {
        name: 'female-cook#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f373',
      },
      '6': {
        name: 'female-cook#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f373',
      },
    },
  },
  woman_feeding_baby: {
    name: 'woman_feeding_baby',
    unicode: '1f469-200d-1f37c',
    skinVariations: {
      '2': {
        name: 'woman_feeding_baby#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f37c',
      },
      '3': {
        name: 'woman_feeding_baby#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f37c',
      },
      '4': {
        name: 'woman_feeding_baby#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f37c',
      },
      '5': {
        name: 'woman_feeding_baby#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f37c',
      },
      '6': {
        name: 'woman_feeding_baby#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f37c',
      },
    },
  },
  'female-student': {
    name: 'female-student',
    unicode: '1f469-200d-1f393',
    skinVariations: {
      '2': {
        name: 'female-student#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f393',
      },
      '3': {
        name: 'female-student#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f393',
      },
      '4': {
        name: 'female-student#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f393',
      },
      '5': {
        name: 'female-student#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f393',
      },
      '6': {
        name: 'female-student#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f393',
      },
    },
  },
  'female-singer': {
    name: 'female-singer',
    unicode: '1f469-200d-1f3a4',
    skinVariations: {
      '2': {
        name: 'female-singer#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f3a4',
      },
      '3': {
        name: 'female-singer#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f3a4',
      },
      '4': {
        name: 'female-singer#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f3a4',
      },
      '5': {
        name: 'female-singer#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f3a4',
      },
      '6': {
        name: 'female-singer#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f3a4',
      },
    },
  },
  'female-artist': {
    name: 'female-artist',
    unicode: '1f469-200d-1f3a8',
    skinVariations: {
      '2': {
        name: 'female-artist#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f3a8',
      },
      '3': {
        name: 'female-artist#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f3a8',
      },
      '4': {
        name: 'female-artist#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f3a8',
      },
      '5': {
        name: 'female-artist#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f3a8',
      },
      '6': {
        name: 'female-artist#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f3a8',
      },
    },
  },
  'female-teacher': {
    name: 'female-teacher',
    unicode: '1f469-200d-1f3eb',
    skinVariations: {
      '2': {
        name: 'female-teacher#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f3eb',
      },
      '3': {
        name: 'female-teacher#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f3eb',
      },
      '4': {
        name: 'female-teacher#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f3eb',
      },
      '5': {
        name: 'female-teacher#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f3eb',
      },
      '6': {
        name: 'female-teacher#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f3eb',
      },
    },
  },
  'female-factory-worker': {
    name: 'female-factory-worker',
    unicode: '1f469-200d-1f3ed',
    skinVariations: {
      '2': {
        name: 'female-factory-worker#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f3ed',
      },
      '3': {
        name: 'female-factory-worker#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f3ed',
      },
      '4': {
        name: 'female-factory-worker#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f3ed',
      },
      '5': {
        name: 'female-factory-worker#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f3ed',
      },
      '6': {
        name: 'female-factory-worker#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f3ed',
      },
    },
  },
  'woman-boy-boy': {
    name: 'woman-boy-boy',
    unicode: '1f469-200d-1f466-200d-1f466',
  },
  'woman-boy': {
    name: 'woman-boy',
    unicode: '1f469-200d-1f466',
  },
  'woman-girl-boy': {
    name: 'woman-girl-boy',
    unicode: '1f469-200d-1f467-200d-1f466',
  },
  'woman-girl-girl': {
    name: 'woman-girl-girl',
    unicode: '1f469-200d-1f467-200d-1f467',
  },
  'woman-girl': {
    name: 'woman-girl',
    unicode: '1f469-200d-1f467',
  },
  'woman-woman-boy': {
    name: 'woman-woman-boy',
    unicode: '1f469-200d-1f469-200d-1f466',
  },
  'woman-woman-boy-boy': {
    name: 'woman-woman-boy-boy',
    unicode: '1f469-200d-1f469-200d-1f466-200d-1f466',
  },
  'woman-woman-girl': {
    name: 'woman-woman-girl',
    unicode: '1f469-200d-1f469-200d-1f467',
  },
  'woman-woman-girl-boy': {
    name: 'woman-woman-girl-boy',
    unicode: '1f469-200d-1f469-200d-1f467-200d-1f466',
  },
  'woman-woman-girl-girl': {
    name: 'woman-woman-girl-girl',
    unicode: '1f469-200d-1f469-200d-1f467-200d-1f467',
  },
  'female-technologist': {
    name: 'female-technologist',
    unicode: '1f469-200d-1f4bb',
    skinVariations: {
      '2': {
        name: 'female-technologist#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f4bb',
      },
      '3': {
        name: 'female-technologist#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f4bb',
      },
      '4': {
        name: 'female-technologist#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f4bb',
      },
      '5': {
        name: 'female-technologist#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f4bb',
      },
      '6': {
        name: 'female-technologist#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f4bb',
      },
    },
  },
  'female-office-worker': {
    name: 'female-office-worker',
    unicode: '1f469-200d-1f4bc',
    skinVariations: {
      '2': {
        name: 'female-office-worker#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f4bc',
      },
      '3': {
        name: 'female-office-worker#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f4bc',
      },
      '4': {
        name: 'female-office-worker#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f4bc',
      },
      '5': {
        name: 'female-office-worker#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f4bc',
      },
      '6': {
        name: 'female-office-worker#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f4bc',
      },
    },
  },
  'female-mechanic': {
    name: 'female-mechanic',
    unicode: '1f469-200d-1f527',
    skinVariations: {
      '2': {
        name: 'female-mechanic#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f527',
      },
      '3': {
        name: 'female-mechanic#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f527',
      },
      '4': {
        name: 'female-mechanic#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f527',
      },
      '5': {
        name: 'female-mechanic#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f527',
      },
      '6': {
        name: 'female-mechanic#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f527',
      },
    },
  },
  'female-scientist': {
    name: 'female-scientist',
    unicode: '1f469-200d-1f52c',
    skinVariations: {
      '2': {
        name: 'female-scientist#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f52c',
      },
      '3': {
        name: 'female-scientist#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f52c',
      },
      '4': {
        name: 'female-scientist#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f52c',
      },
      '5': {
        name: 'female-scientist#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f52c',
      },
      '6': {
        name: 'female-scientist#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f52c',
      },
    },
  },
  'female-astronaut': {
    name: 'female-astronaut',
    unicode: '1f469-200d-1f680',
    skinVariations: {
      '2': {
        name: 'female-astronaut#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f680',
      },
      '3': {
        name: 'female-astronaut#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f680',
      },
      '4': {
        name: 'female-astronaut#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f680',
      },
      '5': {
        name: 'female-astronaut#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f680',
      },
      '6': {
        name: 'female-astronaut#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f680',
      },
    },
  },
  'female-firefighter': {
    name: 'female-firefighter',
    unicode: '1f469-200d-1f692',
    skinVariations: {
      '2': {
        name: 'female-firefighter#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f692',
      },
      '3': {
        name: 'female-firefighter#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f692',
      },
      '4': {
        name: 'female-firefighter#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f692',
      },
      '5': {
        name: 'female-firefighter#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f692',
      },
      '6': {
        name: 'female-firefighter#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f692',
      },
    },
  },
  woman_with_probing_cane: {
    name: 'woman_with_probing_cane',
    unicode: '1f469-200d-1f9af',
    skinVariations: {
      '2': {
        name: 'woman_with_probing_cane#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f9af',
      },
      '3': {
        name: 'woman_with_probing_cane#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f9af',
      },
      '4': {
        name: 'woman_with_probing_cane#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f9af',
      },
      '5': {
        name: 'woman_with_probing_cane#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f9af',
      },
      '6': {
        name: 'woman_with_probing_cane#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f9af',
      },
    },
  },
  red_haired_woman: {
    name: 'red_haired_woman',
    unicode: '1f469-200d-1f9b0',
    skinVariations: {
      '2': {
        name: 'red_haired_woman#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f9b0',
      },
      '3': {
        name: 'red_haired_woman#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f9b0',
      },
      '4': {
        name: 'red_haired_woman#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f9b0',
      },
      '5': {
        name: 'red_haired_woman#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f9b0',
      },
      '6': {
        name: 'red_haired_woman#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f9b0',
      },
    },
  },
  curly_haired_woman: {
    name: 'curly_haired_woman',
    unicode: '1f469-200d-1f9b1',
    skinVariations: {
      '2': {
        name: 'curly_haired_woman#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f9b1',
      },
      '3': {
        name: 'curly_haired_woman#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f9b1',
      },
      '4': {
        name: 'curly_haired_woman#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f9b1',
      },
      '5': {
        name: 'curly_haired_woman#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f9b1',
      },
      '6': {
        name: 'curly_haired_woman#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f9b1',
      },
    },
  },
  bald_woman: {
    name: 'bald_woman',
    unicode: '1f469-200d-1f9b2',
    skinVariations: {
      '2': {
        name: 'bald_woman#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f9b2',
      },
      '3': {
        name: 'bald_woman#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f9b2',
      },
      '4': {
        name: 'bald_woman#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f9b2',
      },
      '5': {
        name: 'bald_woman#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f9b2',
      },
      '6': {
        name: 'bald_woman#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f9b2',
      },
    },
  },
  white_haired_woman: {
    name: 'white_haired_woman',
    unicode: '1f469-200d-1f9b3',
    skinVariations: {
      '2': {
        name: 'white_haired_woman#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f9b3',
      },
      '3': {
        name: 'white_haired_woman#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f9b3',
      },
      '4': {
        name: 'white_haired_woman#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f9b3',
      },
      '5': {
        name: 'white_haired_woman#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f9b3',
      },
      '6': {
        name: 'white_haired_woman#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f9b3',
      },
    },
  },
  woman_in_motorized_wheelchair: {
    name: 'woman_in_motorized_wheelchair',
    unicode: '1f469-200d-1f9bc',
    skinVariations: {
      '2': {
        name: 'woman_in_motorized_wheelchair#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f9bc',
      },
      '3': {
        name: 'woman_in_motorized_wheelchair#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f9bc',
      },
      '4': {
        name: 'woman_in_motorized_wheelchair#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f9bc',
      },
      '5': {
        name: 'woman_in_motorized_wheelchair#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f9bc',
      },
      '6': {
        name: 'woman_in_motorized_wheelchair#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f9bc',
      },
    },
  },
  woman_in_manual_wheelchair: {
    name: 'woman_in_manual_wheelchair',
    unicode: '1f469-200d-1f9bd',
    skinVariations: {
      '2': {
        name: 'woman_in_manual_wheelchair#skin-tone-2',
        unicode: '1f469-1f3fb-200d-1f9bd',
      },
      '3': {
        name: 'woman_in_manual_wheelchair#skin-tone-3',
        unicode: '1f469-1f3fc-200d-1f9bd',
      },
      '4': {
        name: 'woman_in_manual_wheelchair#skin-tone-4',
        unicode: '1f469-1f3fd-200d-1f9bd',
      },
      '5': {
        name: 'woman_in_manual_wheelchair#skin-tone-5',
        unicode: '1f469-1f3fe-200d-1f9bd',
      },
      '6': {
        name: 'woman_in_manual_wheelchair#skin-tone-6',
        unicode: '1f469-1f3ff-200d-1f9bd',
      },
    },
  },
  'female-doctor': {
    name: 'female-doctor',
    unicode: '1f469-200d-2695-fe0f',
    skinVariations: {
      '2': {
        name: 'female-doctor#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2695-fe0f',
      },
      '3': {
        name: 'female-doctor#skin-tone-3',
        unicode: '1f469-1f3fc-200d-2695-fe0f',
      },
      '4': {
        name: 'female-doctor#skin-tone-4',
        unicode: '1f469-1f3fd-200d-2695-fe0f',
      },
      '5': {
        name: 'female-doctor#skin-tone-5',
        unicode: '1f469-1f3fe-200d-2695-fe0f',
      },
      '6': {
        name: 'female-doctor#skin-tone-6',
        unicode: '1f469-1f3ff-200d-2695-fe0f',
      },
    },
  },
  'female-judge': {
    name: 'female-judge',
    unicode: '1f469-200d-2696-fe0f',
    skinVariations: {
      '2': {
        name: 'female-judge#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2696-fe0f',
      },
      '3': {
        name: 'female-judge#skin-tone-3',
        unicode: '1f469-1f3fc-200d-2696-fe0f',
      },
      '4': {
        name: 'female-judge#skin-tone-4',
        unicode: '1f469-1f3fd-200d-2696-fe0f',
      },
      '5': {
        name: 'female-judge#skin-tone-5',
        unicode: '1f469-1f3fe-200d-2696-fe0f',
      },
      '6': {
        name: 'female-judge#skin-tone-6',
        unicode: '1f469-1f3ff-200d-2696-fe0f',
      },
    },
  },
  'female-pilot': {
    name: 'female-pilot',
    unicode: '1f469-200d-2708-fe0f',
    skinVariations: {
      '2': {
        name: 'female-pilot#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2708-fe0f',
      },
      '3': {
        name: 'female-pilot#skin-tone-3',
        unicode: '1f469-1f3fc-200d-2708-fe0f',
      },
      '4': {
        name: 'female-pilot#skin-tone-4',
        unicode: '1f469-1f3fd-200d-2708-fe0f',
      },
      '5': {
        name: 'female-pilot#skin-tone-5',
        unicode: '1f469-1f3fe-200d-2708-fe0f',
      },
      '6': {
        name: 'female-pilot#skin-tone-6',
        unicode: '1f469-1f3ff-200d-2708-fe0f',
      },
    },
  },
  'woman-heart-man': {
    name: 'woman-heart-man',
    unicode: '1f469-200d-2764-fe0f-200d-1f468',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'woman-heart-man#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '3': {
        name: 'woman-heart-man#skin-tone-3',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '4': {
        name: 'woman-heart-man#skin-tone-4',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '5': {
        name: 'woman-heart-man#skin-tone-5',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '6': {
        name: 'woman-heart-man#skin-tone-6',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '2-3': {
        name: 'woman-heart-man#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'woman-heart-man#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'woman-heart-man#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'woman-heart-man#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'woman-heart-man#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'woman-heart-man#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'woman-heart-man#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'woman-heart-man#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'woman-heart-man#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'woman-heart-man#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'woman-heart-man#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'woman-heart-man#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'woman-heart-man#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'woman-heart-man#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'woman-heart-man#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'woman-heart-man#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'woman-heart-man#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'woman-heart-man#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'woman-heart-man#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'woman-heart-man#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe',
      },
    },
  },
  'woman-heart-woman': {
    name: 'woman-heart-woman',
    unicode: '1f469-200d-2764-fe0f-200d-1f469',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'woman-heart-woman#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb',
      },
      '3': {
        name: 'woman-heart-woman#skin-tone-3',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc',
      },
      '4': {
        name: 'woman-heart-woman#skin-tone-4',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd',
      },
      '5': {
        name: 'woman-heart-woman#skin-tone-5',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe',
      },
      '6': {
        name: 'woman-heart-woman#skin-tone-6',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff',
      },
      '2-3': {
        name: 'woman-heart-woman#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc',
      },
      '2-4': {
        name: 'woman-heart-woman#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd',
      },
      '2-5': {
        name: 'woman-heart-woman#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe',
      },
      '2-6': {
        name: 'woman-heart-woman#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff',
      },
      '3-2': {
        name: 'woman-heart-woman#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb',
      },
      '3-4': {
        name: 'woman-heart-woman#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd',
      },
      '3-5': {
        name: 'woman-heart-woman#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe',
      },
      '3-6': {
        name: 'woman-heart-woman#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff',
      },
      '4-2': {
        name: 'woman-heart-woman#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb',
      },
      '4-3': {
        name: 'woman-heart-woman#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc',
      },
      '4-5': {
        name: 'woman-heart-woman#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe',
      },
      '4-6': {
        name: 'woman-heart-woman#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff',
      },
      '5-2': {
        name: 'woman-heart-woman#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb',
      },
      '5-3': {
        name: 'woman-heart-woman#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc',
      },
      '5-4': {
        name: 'woman-heart-woman#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd',
      },
      '5-6': {
        name: 'woman-heart-woman#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff',
      },
      '6-2': {
        name: 'woman-heart-woman#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb',
      },
      '6-3': {
        name: 'woman-heart-woman#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc',
      },
      '6-4': {
        name: 'woman-heart-woman#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd',
      },
      '6-5': {
        name: 'woman-heart-woman#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe',
      },
    },
  },
  'woman-kiss-man': {
    name: 'woman-kiss-man',
    unicode: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'woman-kiss-man#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '3': {
        name: 'woman-kiss-man#skin-tone-3',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '4': {
        name: 'woman-kiss-man#skin-tone-4',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '5': {
        name: 'woman-kiss-man#skin-tone-5',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '6': {
        name: 'woman-kiss-man#skin-tone-6',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '2-3': {
        name: 'woman-kiss-man#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'woman-kiss-man#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'woman-kiss-man#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'woman-kiss-man#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'woman-kiss-man#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'woman-kiss-man#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'woman-kiss-man#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'woman-kiss-man#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'woman-kiss-man#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'woman-kiss-man#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'woman-kiss-man#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'woman-kiss-man#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'woman-kiss-man#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'woman-kiss-man#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'woman-kiss-man#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'woman-kiss-man#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'woman-kiss-man#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'woman-kiss-man#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'woman-kiss-man#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'woman-kiss-man#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
      },
    },
  },
  'woman-kiss-woman': {
    name: 'woman-kiss-woman',
    unicode: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'woman-kiss-woman#skin-tone-2',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
      },
      '3': {
        name: 'woman-kiss-woman#skin-tone-3',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
      },
      '4': {
        name: 'woman-kiss-woman#skin-tone-4',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
      },
      '5': {
        name: 'woman-kiss-woman#skin-tone-5',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
      },
      '6': {
        name: 'woman-kiss-woman#skin-tone-6',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
      },
      '2-3': {
        name: 'woman-kiss-woman#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
      },
      '2-4': {
        name: 'woman-kiss-woman#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
      },
      '2-5': {
        name: 'woman-kiss-woman#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
      },
      '2-6': {
        name: 'woman-kiss-woman#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
      },
      '3-2': {
        name: 'woman-kiss-woman#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
      },
      '3-4': {
        name: 'woman-kiss-woman#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
      },
      '3-5': {
        name: 'woman-kiss-woman#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
      },
      '3-6': {
        name: 'woman-kiss-woman#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
      },
      '4-2': {
        name: 'woman-kiss-woman#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
      },
      '4-3': {
        name: 'woman-kiss-woman#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
      },
      '4-5': {
        name: 'woman-kiss-woman#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
      },
      '4-6': {
        name: 'woman-kiss-woman#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
      },
      '5-2': {
        name: 'woman-kiss-woman#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
      },
      '5-3': {
        name: 'woman-kiss-woman#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
      },
      '5-4': {
        name: 'woman-kiss-woman#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
      },
      '5-6': {
        name: 'woman-kiss-woman#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
      },
      '6-2': {
        name: 'woman-kiss-woman#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
      },
      '6-3': {
        name: 'woman-kiss-woman#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
      },
      '6-4': {
        name: 'woman-kiss-woman#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
      },
      '6-5': {
        name: 'woman-kiss-woman#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
      },
    },
  },
  woman: {
    name: 'woman',
    unicode: '1f469',
    skinVariations: {
      '2': {
        name: 'woman#skin-tone-2',
        unicode: '1f469-1f3fb',
      },
      '3': {
        name: 'woman#skin-tone-3',
        unicode: '1f469-1f3fc',
      },
      '4': {
        name: 'woman#skin-tone-4',
        unicode: '1f469-1f3fd',
      },
      '5': {
        name: 'woman#skin-tone-5',
        unicode: '1f469-1f3fe',
      },
      '6': {
        name: 'woman#skin-tone-6',
        unicode: '1f469-1f3ff',
      },
    },
  },
  family: {
    name: 'family',
    unicode: '1f46a',
  },
  man_and_woman_holding_hands: {
    name: 'man_and_woman_holding_hands',
    unicode: '1f46b',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'man_and_woman_holding_hands#skin-tone-2',
        unicode: '1f46b-1f3fb',
      },
      '3': {
        name: 'man_and_woman_holding_hands#skin-tone-3',
        unicode: '1f46b-1f3fc',
      },
      '4': {
        name: 'man_and_woman_holding_hands#skin-tone-4',
        unicode: '1f46b-1f3fd',
      },
      '5': {
        name: 'man_and_woman_holding_hands#skin-tone-5',
        unicode: '1f46b-1f3fe',
      },
      '6': {
        name: 'man_and_woman_holding_hands#skin-tone-6',
        unicode: '1f46b-1f3ff',
      },
      '2-3': {
        name: 'man_and_woman_holding_hands#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'man_and_woman_holding_hands#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'man_and_woman_holding_hands#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'man_and_woman_holding_hands#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'man_and_woman_holding_hands#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'man_and_woman_holding_hands#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'man_and_woman_holding_hands#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'man_and_woman_holding_hands#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'man_and_woman_holding_hands#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'man_and_woman_holding_hands#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'man_and_woman_holding_hands#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'man_and_woman_holding_hands#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'man_and_woman_holding_hands#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'man_and_woman_holding_hands#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'man_and_woman_holding_hands#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'man_and_woman_holding_hands#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'man_and_woman_holding_hands#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'man_and_woman_holding_hands#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'man_and_woman_holding_hands#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'man_and_woman_holding_hands#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe',
      },
    },
  },
  woman_and_man_holding_hands: {
    name: 'woman_and_man_holding_hands',
    unicode: '1f46b',
    aliasOf: 'man_and_woman_holding_hands',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'woman_and_man_holding_hands#skin-tone-2',
        unicode: '1f46b-1f3fb',
      },
      '3': {
        name: 'woman_and_man_holding_hands#skin-tone-3',
        unicode: '1f46b-1f3fc',
      },
      '4': {
        name: 'woman_and_man_holding_hands#skin-tone-4',
        unicode: '1f46b-1f3fd',
      },
      '5': {
        name: 'woman_and_man_holding_hands#skin-tone-5',
        unicode: '1f46b-1f3fe',
      },
      '6': {
        name: 'woman_and_man_holding_hands#skin-tone-6',
        unicode: '1f46b-1f3ff',
      },
      '2-3': {
        name: 'woman_and_man_holding_hands#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'woman_and_man_holding_hands#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'woman_and_man_holding_hands#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'woman_and_man_holding_hands#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'woman_and_man_holding_hands#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'woman_and_man_holding_hands#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'woman_and_man_holding_hands#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'woman_and_man_holding_hands#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'woman_and_man_holding_hands#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'woman_and_man_holding_hands#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'woman_and_man_holding_hands#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'woman_and_man_holding_hands#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'woman_and_man_holding_hands#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'woman_and_man_holding_hands#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'woman_and_man_holding_hands#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'woman_and_man_holding_hands#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'woman_and_man_holding_hands#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'woman_and_man_holding_hands#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'woman_and_man_holding_hands#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'woman_and_man_holding_hands#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe',
      },
    },
  },
  couple: {
    name: 'couple',
    unicode: '1f46b',
    aliasOf: 'man_and_woman_holding_hands',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'couple#skin-tone-2',
        unicode: '1f46b-1f3fb',
      },
      '3': {
        name: 'couple#skin-tone-3',
        unicode: '1f46b-1f3fc',
      },
      '4': {
        name: 'couple#skin-tone-4',
        unicode: '1f46b-1f3fd',
      },
      '5': {
        name: 'couple#skin-tone-5',
        unicode: '1f46b-1f3fe',
      },
      '6': {
        name: 'couple#skin-tone-6',
        unicode: '1f46b-1f3ff',
      },
      '2-3': {
        name: 'couple#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'couple#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'couple#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'couple#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'couple#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'couple#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'couple#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'couple#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'couple#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'couple#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'couple#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'couple#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'couple#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'couple#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'couple#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'couple#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'couple#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'couple#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'couple#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'couple#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe',
      },
    },
  },
  two_men_holding_hands: {
    name: 'two_men_holding_hands',
    unicode: '1f46c',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'two_men_holding_hands#skin-tone-2',
        unicode: '1f46c-1f3fb',
      },
      '3': {
        name: 'two_men_holding_hands#skin-tone-3',
        unicode: '1f46c-1f3fc',
      },
      '4': {
        name: 'two_men_holding_hands#skin-tone-4',
        unicode: '1f46c-1f3fd',
      },
      '5': {
        name: 'two_men_holding_hands#skin-tone-5',
        unicode: '1f46c-1f3fe',
      },
      '6': {
        name: 'two_men_holding_hands#skin-tone-6',
        unicode: '1f46c-1f3ff',
      },
      '2-3': {
        name: 'two_men_holding_hands#skin-tone-2-3',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'two_men_holding_hands#skin-tone-2-4',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'two_men_holding_hands#skin-tone-2-5',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'two_men_holding_hands#skin-tone-2-6',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'two_men_holding_hands#skin-tone-3-2',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'two_men_holding_hands#skin-tone-3-4',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'two_men_holding_hands#skin-tone-3-5',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'two_men_holding_hands#skin-tone-3-6',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'two_men_holding_hands#skin-tone-4-2',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'two_men_holding_hands#skin-tone-4-3',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'two_men_holding_hands#skin-tone-4-5',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'two_men_holding_hands#skin-tone-4-6',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'two_men_holding_hands#skin-tone-5-2',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'two_men_holding_hands#skin-tone-5-3',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'two_men_holding_hands#skin-tone-5-4',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'two_men_holding_hands#skin-tone-5-6',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'two_men_holding_hands#skin-tone-6-2',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'two_men_holding_hands#skin-tone-6-3',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'two_men_holding_hands#skin-tone-6-4',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'two_men_holding_hands#skin-tone-6-5',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe',
      },
    },
  },
  men_holding_hands: {
    name: 'men_holding_hands',
    unicode: '1f46c',
    aliasOf: 'two_men_holding_hands',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'men_holding_hands#skin-tone-2',
        unicode: '1f46c-1f3fb',
      },
      '3': {
        name: 'men_holding_hands#skin-tone-3',
        unicode: '1f46c-1f3fc',
      },
      '4': {
        name: 'men_holding_hands#skin-tone-4',
        unicode: '1f46c-1f3fd',
      },
      '5': {
        name: 'men_holding_hands#skin-tone-5',
        unicode: '1f46c-1f3fe',
      },
      '6': {
        name: 'men_holding_hands#skin-tone-6',
        unicode: '1f46c-1f3ff',
      },
      '2-3': {
        name: 'men_holding_hands#skin-tone-2-3',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc',
      },
      '2-4': {
        name: 'men_holding_hands#skin-tone-2-4',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd',
      },
      '2-5': {
        name: 'men_holding_hands#skin-tone-2-5',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe',
      },
      '2-6': {
        name: 'men_holding_hands#skin-tone-2-6',
        unicode: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff',
      },
      '3-2': {
        name: 'men_holding_hands#skin-tone-3-2',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb',
      },
      '3-4': {
        name: 'men_holding_hands#skin-tone-3-4',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd',
      },
      '3-5': {
        name: 'men_holding_hands#skin-tone-3-5',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe',
      },
      '3-6': {
        name: 'men_holding_hands#skin-tone-3-6',
        unicode: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff',
      },
      '4-2': {
        name: 'men_holding_hands#skin-tone-4-2',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb',
      },
      '4-3': {
        name: 'men_holding_hands#skin-tone-4-3',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc',
      },
      '4-5': {
        name: 'men_holding_hands#skin-tone-4-5',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe',
      },
      '4-6': {
        name: 'men_holding_hands#skin-tone-4-6',
        unicode: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff',
      },
      '5-2': {
        name: 'men_holding_hands#skin-tone-5-2',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb',
      },
      '5-3': {
        name: 'men_holding_hands#skin-tone-5-3',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc',
      },
      '5-4': {
        name: 'men_holding_hands#skin-tone-5-4',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd',
      },
      '5-6': {
        name: 'men_holding_hands#skin-tone-5-6',
        unicode: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff',
      },
      '6-2': {
        name: 'men_holding_hands#skin-tone-6-2',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb',
      },
      '6-3': {
        name: 'men_holding_hands#skin-tone-6-3',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc',
      },
      '6-4': {
        name: 'men_holding_hands#skin-tone-6-4',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd',
      },
      '6-5': {
        name: 'men_holding_hands#skin-tone-6-5',
        unicode: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe',
      },
    },
  },
  two_women_holding_hands: {
    name: 'two_women_holding_hands',
    unicode: '1f46d',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'two_women_holding_hands#skin-tone-2',
        unicode: '1f46d-1f3fb',
      },
      '3': {
        name: 'two_women_holding_hands#skin-tone-3',
        unicode: '1f46d-1f3fc',
      },
      '4': {
        name: 'two_women_holding_hands#skin-tone-4',
        unicode: '1f46d-1f3fd',
      },
      '5': {
        name: 'two_women_holding_hands#skin-tone-5',
        unicode: '1f46d-1f3fe',
      },
      '6': {
        name: 'two_women_holding_hands#skin-tone-6',
        unicode: '1f46d-1f3ff',
      },
      '2-3': {
        name: 'two_women_holding_hands#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc',
      },
      '2-4': {
        name: 'two_women_holding_hands#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd',
      },
      '2-5': {
        name: 'two_women_holding_hands#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe',
      },
      '2-6': {
        name: 'two_women_holding_hands#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff',
      },
      '3-2': {
        name: 'two_women_holding_hands#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb',
      },
      '3-4': {
        name: 'two_women_holding_hands#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd',
      },
      '3-5': {
        name: 'two_women_holding_hands#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe',
      },
      '3-6': {
        name: 'two_women_holding_hands#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff',
      },
      '4-2': {
        name: 'two_women_holding_hands#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb',
      },
      '4-3': {
        name: 'two_women_holding_hands#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc',
      },
      '4-5': {
        name: 'two_women_holding_hands#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe',
      },
      '4-6': {
        name: 'two_women_holding_hands#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff',
      },
      '5-2': {
        name: 'two_women_holding_hands#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb',
      },
      '5-3': {
        name: 'two_women_holding_hands#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc',
      },
      '5-4': {
        name: 'two_women_holding_hands#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd',
      },
      '5-6': {
        name: 'two_women_holding_hands#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff',
      },
      '6-2': {
        name: 'two_women_holding_hands#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb',
      },
      '6-3': {
        name: 'two_women_holding_hands#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc',
      },
      '6-4': {
        name: 'two_women_holding_hands#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd',
      },
      '6-5': {
        name: 'two_women_holding_hands#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe',
      },
    },
  },
  women_holding_hands: {
    name: 'women_holding_hands',
    unicode: '1f46d',
    aliasOf: 'two_women_holding_hands',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'women_holding_hands#skin-tone-2',
        unicode: '1f46d-1f3fb',
      },
      '3': {
        name: 'women_holding_hands#skin-tone-3',
        unicode: '1f46d-1f3fc',
      },
      '4': {
        name: 'women_holding_hands#skin-tone-4',
        unicode: '1f46d-1f3fd',
      },
      '5': {
        name: 'women_holding_hands#skin-tone-5',
        unicode: '1f46d-1f3fe',
      },
      '6': {
        name: 'women_holding_hands#skin-tone-6',
        unicode: '1f46d-1f3ff',
      },
      '2-3': {
        name: 'women_holding_hands#skin-tone-2-3',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc',
      },
      '2-4': {
        name: 'women_holding_hands#skin-tone-2-4',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd',
      },
      '2-5': {
        name: 'women_holding_hands#skin-tone-2-5',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe',
      },
      '2-6': {
        name: 'women_holding_hands#skin-tone-2-6',
        unicode: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff',
      },
      '3-2': {
        name: 'women_holding_hands#skin-tone-3-2',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb',
      },
      '3-4': {
        name: 'women_holding_hands#skin-tone-3-4',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd',
      },
      '3-5': {
        name: 'women_holding_hands#skin-tone-3-5',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe',
      },
      '3-6': {
        name: 'women_holding_hands#skin-tone-3-6',
        unicode: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff',
      },
      '4-2': {
        name: 'women_holding_hands#skin-tone-4-2',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb',
      },
      '4-3': {
        name: 'women_holding_hands#skin-tone-4-3',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc',
      },
      '4-5': {
        name: 'women_holding_hands#skin-tone-4-5',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe',
      },
      '4-6': {
        name: 'women_holding_hands#skin-tone-4-6',
        unicode: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff',
      },
      '5-2': {
        name: 'women_holding_hands#skin-tone-5-2',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb',
      },
      '5-3': {
        name: 'women_holding_hands#skin-tone-5-3',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc',
      },
      '5-4': {
        name: 'women_holding_hands#skin-tone-5-4',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd',
      },
      '5-6': {
        name: 'women_holding_hands#skin-tone-5-6',
        unicode: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff',
      },
      '6-2': {
        name: 'women_holding_hands#skin-tone-6-2',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb',
      },
      '6-3': {
        name: 'women_holding_hands#skin-tone-6-3',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc',
      },
      '6-4': {
        name: 'women_holding_hands#skin-tone-6-4',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd',
      },
      '6-5': {
        name: 'women_holding_hands#skin-tone-6-5',
        unicode: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe',
      },
    },
  },
  'female-police-officer': {
    name: 'female-police-officer',
    unicode: '1f46e-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female-police-officer#skin-tone-2',
        unicode: '1f46e-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female-police-officer#skin-tone-3',
        unicode: '1f46e-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female-police-officer#skin-tone-4',
        unicode: '1f46e-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female-police-officer#skin-tone-5',
        unicode: '1f46e-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female-police-officer#skin-tone-6',
        unicode: '1f46e-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'male-police-officer': {
    name: 'male-police-officer',
    unicode: '1f46e-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male-police-officer#skin-tone-2',
        unicode: '1f46e-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male-police-officer#skin-tone-3',
        unicode: '1f46e-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male-police-officer#skin-tone-4',
        unicode: '1f46e-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male-police-officer#skin-tone-5',
        unicode: '1f46e-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male-police-officer#skin-tone-6',
        unicode: '1f46e-1f3ff-200d-2642-fe0f',
      },
    },
  },
  cop: {
    name: 'cop',
    unicode: '1f46e',
    skinVariations: {
      '2': {
        name: 'cop#skin-tone-2',
        unicode: '1f46e-1f3fb',
      },
      '3': {
        name: 'cop#skin-tone-3',
        unicode: '1f46e-1f3fc',
      },
      '4': {
        name: 'cop#skin-tone-4',
        unicode: '1f46e-1f3fd',
      },
      '5': {
        name: 'cop#skin-tone-5',
        unicode: '1f46e-1f3fe',
      },
      '6': {
        name: 'cop#skin-tone-6',
        unicode: '1f46e-1f3ff',
      },
    },
  },
  'women-with-bunny-ears-partying': {
    name: 'women-with-bunny-ears-partying',
    unicode: '1f46f-200d-2640-fe0f',
  },
  'woman-with-bunny-ears-partying': {
    name: 'woman-with-bunny-ears-partying',
    unicode: '1f46f-200d-2640-fe0f',
    aliasOf: 'women-with-bunny-ears-partying',
  },
  'men-with-bunny-ears-partying': {
    name: 'men-with-bunny-ears-partying',
    unicode: '1f46f-200d-2642-fe0f',
  },
  'man-with-bunny-ears-partying': {
    name: 'man-with-bunny-ears-partying',
    unicode: '1f46f-200d-2642-fe0f',
    aliasOf: 'men-with-bunny-ears-partying',
  },
  dancers: {
    name: 'dancers',
    unicode: '1f46f',
  },
  woman_with_veil: {
    name: 'woman_with_veil',
    unicode: '1f470-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_with_veil#skin-tone-2',
        unicode: '1f470-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_with_veil#skin-tone-3',
        unicode: '1f470-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_with_veil#skin-tone-4',
        unicode: '1f470-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_with_veil#skin-tone-5',
        unicode: '1f470-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_with_veil#skin-tone-6',
        unicode: '1f470-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_with_veil: {
    name: 'man_with_veil',
    unicode: '1f470-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_with_veil#skin-tone-2',
        unicode: '1f470-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_with_veil#skin-tone-3',
        unicode: '1f470-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_with_veil#skin-tone-4',
        unicode: '1f470-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_with_veil#skin-tone-5',
        unicode: '1f470-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_with_veil#skin-tone-6',
        unicode: '1f470-1f3ff-200d-2642-fe0f',
      },
    },
  },
  bride_with_veil: {
    name: 'bride_with_veil',
    unicode: '1f470',
    skinVariations: {
      '2': {
        name: 'bride_with_veil#skin-tone-2',
        unicode: '1f470-1f3fb',
      },
      '3': {
        name: 'bride_with_veil#skin-tone-3',
        unicode: '1f470-1f3fc',
      },
      '4': {
        name: 'bride_with_veil#skin-tone-4',
        unicode: '1f470-1f3fd',
      },
      '5': {
        name: 'bride_with_veil#skin-tone-5',
        unicode: '1f470-1f3fe',
      },
      '6': {
        name: 'bride_with_veil#skin-tone-6',
        unicode: '1f470-1f3ff',
      },
    },
  },
  'blond-haired-woman': {
    name: 'blond-haired-woman',
    unicode: '1f471-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'blond-haired-woman#skin-tone-2',
        unicode: '1f471-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'blond-haired-woman#skin-tone-3',
        unicode: '1f471-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'blond-haired-woman#skin-tone-4',
        unicode: '1f471-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'blond-haired-woman#skin-tone-5',
        unicode: '1f471-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'blond-haired-woman#skin-tone-6',
        unicode: '1f471-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'blond-haired-man': {
    name: 'blond-haired-man',
    unicode: '1f471-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'blond-haired-man#skin-tone-2',
        unicode: '1f471-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'blond-haired-man#skin-tone-3',
        unicode: '1f471-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'blond-haired-man#skin-tone-4',
        unicode: '1f471-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'blond-haired-man#skin-tone-5',
        unicode: '1f471-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'blond-haired-man#skin-tone-6',
        unicode: '1f471-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_with_blond_hair: {
    name: 'person_with_blond_hair',
    unicode: '1f471',
    skinVariations: {
      '2': {
        name: 'person_with_blond_hair#skin-tone-2',
        unicode: '1f471-1f3fb',
      },
      '3': {
        name: 'person_with_blond_hair#skin-tone-3',
        unicode: '1f471-1f3fc',
      },
      '4': {
        name: 'person_with_blond_hair#skin-tone-4',
        unicode: '1f471-1f3fd',
      },
      '5': {
        name: 'person_with_blond_hair#skin-tone-5',
        unicode: '1f471-1f3fe',
      },
      '6': {
        name: 'person_with_blond_hair#skin-tone-6',
        unicode: '1f471-1f3ff',
      },
    },
  },
  man_with_gua_pi_mao: {
    name: 'man_with_gua_pi_mao',
    unicode: '1f472',
    skinVariations: {
      '2': {
        name: 'man_with_gua_pi_mao#skin-tone-2',
        unicode: '1f472-1f3fb',
      },
      '3': {
        name: 'man_with_gua_pi_mao#skin-tone-3',
        unicode: '1f472-1f3fc',
      },
      '4': {
        name: 'man_with_gua_pi_mao#skin-tone-4',
        unicode: '1f472-1f3fd',
      },
      '5': {
        name: 'man_with_gua_pi_mao#skin-tone-5',
        unicode: '1f472-1f3fe',
      },
      '6': {
        name: 'man_with_gua_pi_mao#skin-tone-6',
        unicode: '1f472-1f3ff',
      },
    },
  },
  'woman-wearing-turban': {
    name: 'woman-wearing-turban',
    unicode: '1f473-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-wearing-turban#skin-tone-2',
        unicode: '1f473-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-wearing-turban#skin-tone-3',
        unicode: '1f473-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-wearing-turban#skin-tone-4',
        unicode: '1f473-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-wearing-turban#skin-tone-5',
        unicode: '1f473-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-wearing-turban#skin-tone-6',
        unicode: '1f473-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-wearing-turban': {
    name: 'man-wearing-turban',
    unicode: '1f473-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-wearing-turban#skin-tone-2',
        unicode: '1f473-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-wearing-turban#skin-tone-3',
        unicode: '1f473-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-wearing-turban#skin-tone-4',
        unicode: '1f473-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-wearing-turban#skin-tone-5',
        unicode: '1f473-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-wearing-turban#skin-tone-6',
        unicode: '1f473-1f3ff-200d-2642-fe0f',
      },
    },
  },
  man_with_turban: {
    name: 'man_with_turban',
    unicode: '1f473',
    skinVariations: {
      '2': {
        name: 'man_with_turban#skin-tone-2',
        unicode: '1f473-1f3fb',
      },
      '3': {
        name: 'man_with_turban#skin-tone-3',
        unicode: '1f473-1f3fc',
      },
      '4': {
        name: 'man_with_turban#skin-tone-4',
        unicode: '1f473-1f3fd',
      },
      '5': {
        name: 'man_with_turban#skin-tone-5',
        unicode: '1f473-1f3fe',
      },
      '6': {
        name: 'man_with_turban#skin-tone-6',
        unicode: '1f473-1f3ff',
      },
    },
  },
  older_man: {
    name: 'older_man',
    unicode: '1f474',
    skinVariations: {
      '2': {
        name: 'older_man#skin-tone-2',
        unicode: '1f474-1f3fb',
      },
      '3': {
        name: 'older_man#skin-tone-3',
        unicode: '1f474-1f3fc',
      },
      '4': {
        name: 'older_man#skin-tone-4',
        unicode: '1f474-1f3fd',
      },
      '5': {
        name: 'older_man#skin-tone-5',
        unicode: '1f474-1f3fe',
      },
      '6': {
        name: 'older_man#skin-tone-6',
        unicode: '1f474-1f3ff',
      },
    },
  },
  older_woman: {
    name: 'older_woman',
    unicode: '1f475',
    skinVariations: {
      '2': {
        name: 'older_woman#skin-tone-2',
        unicode: '1f475-1f3fb',
      },
      '3': {
        name: 'older_woman#skin-tone-3',
        unicode: '1f475-1f3fc',
      },
      '4': {
        name: 'older_woman#skin-tone-4',
        unicode: '1f475-1f3fd',
      },
      '5': {
        name: 'older_woman#skin-tone-5',
        unicode: '1f475-1f3fe',
      },
      '6': {
        name: 'older_woman#skin-tone-6',
        unicode: '1f475-1f3ff',
      },
    },
  },
  baby: {
    name: 'baby',
    unicode: '1f476',
    skinVariations: {
      '2': {
        name: 'baby#skin-tone-2',
        unicode: '1f476-1f3fb',
      },
      '3': {
        name: 'baby#skin-tone-3',
        unicode: '1f476-1f3fc',
      },
      '4': {
        name: 'baby#skin-tone-4',
        unicode: '1f476-1f3fd',
      },
      '5': {
        name: 'baby#skin-tone-5',
        unicode: '1f476-1f3fe',
      },
      '6': {
        name: 'baby#skin-tone-6',
        unicode: '1f476-1f3ff',
      },
    },
  },
  'female-construction-worker': {
    name: 'female-construction-worker',
    unicode: '1f477-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female-construction-worker#skin-tone-2',
        unicode: '1f477-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female-construction-worker#skin-tone-3',
        unicode: '1f477-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female-construction-worker#skin-tone-4',
        unicode: '1f477-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female-construction-worker#skin-tone-5',
        unicode: '1f477-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female-construction-worker#skin-tone-6',
        unicode: '1f477-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'male-construction-worker': {
    name: 'male-construction-worker',
    unicode: '1f477-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male-construction-worker#skin-tone-2',
        unicode: '1f477-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male-construction-worker#skin-tone-3',
        unicode: '1f477-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male-construction-worker#skin-tone-4',
        unicode: '1f477-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male-construction-worker#skin-tone-5',
        unicode: '1f477-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male-construction-worker#skin-tone-6',
        unicode: '1f477-1f3ff-200d-2642-fe0f',
      },
    },
  },
  construction_worker: {
    name: 'construction_worker',
    unicode: '1f477',
    skinVariations: {
      '2': {
        name: 'construction_worker#skin-tone-2',
        unicode: '1f477-1f3fb',
      },
      '3': {
        name: 'construction_worker#skin-tone-3',
        unicode: '1f477-1f3fc',
      },
      '4': {
        name: 'construction_worker#skin-tone-4',
        unicode: '1f477-1f3fd',
      },
      '5': {
        name: 'construction_worker#skin-tone-5',
        unicode: '1f477-1f3fe',
      },
      '6': {
        name: 'construction_worker#skin-tone-6',
        unicode: '1f477-1f3ff',
      },
    },
  },
  princess: {
    name: 'princess',
    unicode: '1f478',
    skinVariations: {
      '2': {
        name: 'princess#skin-tone-2',
        unicode: '1f478-1f3fb',
      },
      '3': {
        name: 'princess#skin-tone-3',
        unicode: '1f478-1f3fc',
      },
      '4': {
        name: 'princess#skin-tone-4',
        unicode: '1f478-1f3fd',
      },
      '5': {
        name: 'princess#skin-tone-5',
        unicode: '1f478-1f3fe',
      },
      '6': {
        name: 'princess#skin-tone-6',
        unicode: '1f478-1f3ff',
      },
    },
  },
  japanese_ogre: {
    name: 'japanese_ogre',
    unicode: '1f479',
  },
  japanese_goblin: {
    name: 'japanese_goblin',
    unicode: '1f47a',
  },
  ghost: {
    name: 'ghost',
    unicode: '1f47b',
  },
  angel: {
    name: 'angel',
    unicode: '1f47c',
    skinVariations: {
      '2': {
        name: 'angel#skin-tone-2',
        unicode: '1f47c-1f3fb',
      },
      '3': {
        name: 'angel#skin-tone-3',
        unicode: '1f47c-1f3fc',
      },
      '4': {
        name: 'angel#skin-tone-4',
        unicode: '1f47c-1f3fd',
      },
      '5': {
        name: 'angel#skin-tone-5',
        unicode: '1f47c-1f3fe',
      },
      '6': {
        name: 'angel#skin-tone-6',
        unicode: '1f47c-1f3ff',
      },
    },
  },
  alien: {
    name: 'alien',
    unicode: '1f47d',
  },
  space_invader: {
    name: 'space_invader',
    unicode: '1f47e',
  },
  imp: {
    name: 'imp',
    unicode: '1f47f',
  },
  skull: {
    name: 'skull',
    unicode: '1f480',
  },
  'woman-tipping-hand': {
    name: 'woman-tipping-hand',
    unicode: '1f481-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-tipping-hand#skin-tone-2',
        unicode: '1f481-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-tipping-hand#skin-tone-3',
        unicode: '1f481-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-tipping-hand#skin-tone-4',
        unicode: '1f481-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-tipping-hand#skin-tone-5',
        unicode: '1f481-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-tipping-hand#skin-tone-6',
        unicode: '1f481-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-tipping-hand': {
    name: 'man-tipping-hand',
    unicode: '1f481-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-tipping-hand#skin-tone-2',
        unicode: '1f481-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-tipping-hand#skin-tone-3',
        unicode: '1f481-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-tipping-hand#skin-tone-4',
        unicode: '1f481-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-tipping-hand#skin-tone-5',
        unicode: '1f481-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-tipping-hand#skin-tone-6',
        unicode: '1f481-1f3ff-200d-2642-fe0f',
      },
    },
  },
  information_desk_person: {
    name: 'information_desk_person',
    unicode: '1f481',
    skinVariations: {
      '2': {
        name: 'information_desk_person#skin-tone-2',
        unicode: '1f481-1f3fb',
      },
      '3': {
        name: 'information_desk_person#skin-tone-3',
        unicode: '1f481-1f3fc',
      },
      '4': {
        name: 'information_desk_person#skin-tone-4',
        unicode: '1f481-1f3fd',
      },
      '5': {
        name: 'information_desk_person#skin-tone-5',
        unicode: '1f481-1f3fe',
      },
      '6': {
        name: 'information_desk_person#skin-tone-6',
        unicode: '1f481-1f3ff',
      },
    },
  },
  'female-guard': {
    name: 'female-guard',
    unicode: '1f482-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female-guard#skin-tone-2',
        unicode: '1f482-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female-guard#skin-tone-3',
        unicode: '1f482-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female-guard#skin-tone-4',
        unicode: '1f482-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female-guard#skin-tone-5',
        unicode: '1f482-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female-guard#skin-tone-6',
        unicode: '1f482-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'male-guard': {
    name: 'male-guard',
    unicode: '1f482-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male-guard#skin-tone-2',
        unicode: '1f482-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male-guard#skin-tone-3',
        unicode: '1f482-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male-guard#skin-tone-4',
        unicode: '1f482-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male-guard#skin-tone-5',
        unicode: '1f482-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male-guard#skin-tone-6',
        unicode: '1f482-1f3ff-200d-2642-fe0f',
      },
    },
  },
  guardsman: {
    name: 'guardsman',
    unicode: '1f482',
    skinVariations: {
      '2': {
        name: 'guardsman#skin-tone-2',
        unicode: '1f482-1f3fb',
      },
      '3': {
        name: 'guardsman#skin-tone-3',
        unicode: '1f482-1f3fc',
      },
      '4': {
        name: 'guardsman#skin-tone-4',
        unicode: '1f482-1f3fd',
      },
      '5': {
        name: 'guardsman#skin-tone-5',
        unicode: '1f482-1f3fe',
      },
      '6': {
        name: 'guardsman#skin-tone-6',
        unicode: '1f482-1f3ff',
      },
    },
  },
  dancer: {
    name: 'dancer',
    unicode: '1f483',
    skinVariations: {
      '2': {
        name: 'dancer#skin-tone-2',
        unicode: '1f483-1f3fb',
      },
      '3': {
        name: 'dancer#skin-tone-3',
        unicode: '1f483-1f3fc',
      },
      '4': {
        name: 'dancer#skin-tone-4',
        unicode: '1f483-1f3fd',
      },
      '5': {
        name: 'dancer#skin-tone-5',
        unicode: '1f483-1f3fe',
      },
      '6': {
        name: 'dancer#skin-tone-6',
        unicode: '1f483-1f3ff',
      },
    },
  },
  lipstick: {
    name: 'lipstick',
    unicode: '1f484',
  },
  nail_care: {
    name: 'nail_care',
    unicode: '1f485',
    skinVariations: {
      '2': {
        name: 'nail_care#skin-tone-2',
        unicode: '1f485-1f3fb',
      },
      '3': {
        name: 'nail_care#skin-tone-3',
        unicode: '1f485-1f3fc',
      },
      '4': {
        name: 'nail_care#skin-tone-4',
        unicode: '1f485-1f3fd',
      },
      '5': {
        name: 'nail_care#skin-tone-5',
        unicode: '1f485-1f3fe',
      },
      '6': {
        name: 'nail_care#skin-tone-6',
        unicode: '1f485-1f3ff',
      },
    },
  },
  'woman-getting-massage': {
    name: 'woman-getting-massage',
    unicode: '1f486-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-getting-massage#skin-tone-2',
        unicode: '1f486-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-getting-massage#skin-tone-3',
        unicode: '1f486-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-getting-massage#skin-tone-4',
        unicode: '1f486-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-getting-massage#skin-tone-5',
        unicode: '1f486-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-getting-massage#skin-tone-6',
        unicode: '1f486-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-getting-massage': {
    name: 'man-getting-massage',
    unicode: '1f486-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-getting-massage#skin-tone-2',
        unicode: '1f486-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-getting-massage#skin-tone-3',
        unicode: '1f486-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-getting-massage#skin-tone-4',
        unicode: '1f486-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-getting-massage#skin-tone-5',
        unicode: '1f486-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-getting-massage#skin-tone-6',
        unicode: '1f486-1f3ff-200d-2642-fe0f',
      },
    },
  },
  massage: {
    name: 'massage',
    unicode: '1f486',
    skinVariations: {
      '2': {
        name: 'massage#skin-tone-2',
        unicode: '1f486-1f3fb',
      },
      '3': {
        name: 'massage#skin-tone-3',
        unicode: '1f486-1f3fc',
      },
      '4': {
        name: 'massage#skin-tone-4',
        unicode: '1f486-1f3fd',
      },
      '5': {
        name: 'massage#skin-tone-5',
        unicode: '1f486-1f3fe',
      },
      '6': {
        name: 'massage#skin-tone-6',
        unicode: '1f486-1f3ff',
      },
    },
  },
  'woman-getting-haircut': {
    name: 'woman-getting-haircut',
    unicode: '1f487-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-getting-haircut#skin-tone-2',
        unicode: '1f487-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-getting-haircut#skin-tone-3',
        unicode: '1f487-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-getting-haircut#skin-tone-4',
        unicode: '1f487-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-getting-haircut#skin-tone-5',
        unicode: '1f487-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-getting-haircut#skin-tone-6',
        unicode: '1f487-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-getting-haircut': {
    name: 'man-getting-haircut',
    unicode: '1f487-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-getting-haircut#skin-tone-2',
        unicode: '1f487-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-getting-haircut#skin-tone-3',
        unicode: '1f487-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-getting-haircut#skin-tone-4',
        unicode: '1f487-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-getting-haircut#skin-tone-5',
        unicode: '1f487-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-getting-haircut#skin-tone-6',
        unicode: '1f487-1f3ff-200d-2642-fe0f',
      },
    },
  },
  haircut: {
    name: 'haircut',
    unicode: '1f487',
    skinVariations: {
      '2': {
        name: 'haircut#skin-tone-2',
        unicode: '1f487-1f3fb',
      },
      '3': {
        name: 'haircut#skin-tone-3',
        unicode: '1f487-1f3fc',
      },
      '4': {
        name: 'haircut#skin-tone-4',
        unicode: '1f487-1f3fd',
      },
      '5': {
        name: 'haircut#skin-tone-5',
        unicode: '1f487-1f3fe',
      },
      '6': {
        name: 'haircut#skin-tone-6',
        unicode: '1f487-1f3ff',
      },
    },
  },
  barber: {
    name: 'barber',
    unicode: '1f488',
  },
  syringe: {
    name: 'syringe',
    unicode: '1f489',
  },
  pill: {
    name: 'pill',
    unicode: '1f48a',
  },
  kiss: {
    name: 'kiss',
    unicode: '1f48b',
  },
  love_letter: {
    name: 'love_letter',
    unicode: '1f48c',
  },
  ring: {
    name: 'ring',
    unicode: '1f48d',
  },
  gem: {
    name: 'gem',
    unicode: '1f48e',
  },
  couplekiss: {
    name: 'couplekiss',
    unicode: '1f48f',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'couplekiss#skin-tone-2',
        unicode: '1f48f-1f3fb',
      },
      '3': {
        name: 'couplekiss#skin-tone-3',
        unicode: '1f48f-1f3fc',
      },
      '4': {
        name: 'couplekiss#skin-tone-4',
        unicode: '1f48f-1f3fd',
      },
      '5': {
        name: 'couplekiss#skin-tone-5',
        unicode: '1f48f-1f3fe',
      },
      '6': {
        name: 'couplekiss#skin-tone-6',
        unicode: '1f48f-1f3ff',
      },
      '2-3': {
        name: 'couplekiss#skin-tone-2-3',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
      },
      '2-4': {
        name: 'couplekiss#skin-tone-2-4',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
      },
      '2-5': {
        name: 'couplekiss#skin-tone-2-5',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
      },
      '2-6': {
        name: 'couplekiss#skin-tone-2-6',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
      },
      '3-2': {
        name: 'couplekiss#skin-tone-3-2',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
      },
      '3-4': {
        name: 'couplekiss#skin-tone-3-4',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
      },
      '3-5': {
        name: 'couplekiss#skin-tone-3-5',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
      },
      '3-6': {
        name: 'couplekiss#skin-tone-3-6',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
      },
      '4-2': {
        name: 'couplekiss#skin-tone-4-2',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
      },
      '4-3': {
        name: 'couplekiss#skin-tone-4-3',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
      },
      '4-5': {
        name: 'couplekiss#skin-tone-4-5',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
      },
      '4-6': {
        name: 'couplekiss#skin-tone-4-6',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
      },
      '5-2': {
        name: 'couplekiss#skin-tone-5-2',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
      },
      '5-3': {
        name: 'couplekiss#skin-tone-5-3',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
      },
      '5-4': {
        name: 'couplekiss#skin-tone-5-4',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
      },
      '5-6': {
        name: 'couplekiss#skin-tone-5-6',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
      },
      '6-2': {
        name: 'couplekiss#skin-tone-6-2',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
      },
      '6-3': {
        name: 'couplekiss#skin-tone-6-3',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
      },
      '6-4': {
        name: 'couplekiss#skin-tone-6-4',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
      },
      '6-5': {
        name: 'couplekiss#skin-tone-6-5',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
      },
    },
  },
  bouquet: {
    name: 'bouquet',
    unicode: '1f490',
  },
  couple_with_heart: {
    name: 'couple_with_heart',
    unicode: '1f491',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'couple_with_heart#skin-tone-2',
        unicode: '1f491-1f3fb',
      },
      '3': {
        name: 'couple_with_heart#skin-tone-3',
        unicode: '1f491-1f3fc',
      },
      '4': {
        name: 'couple_with_heart#skin-tone-4',
        unicode: '1f491-1f3fd',
      },
      '5': {
        name: 'couple_with_heart#skin-tone-5',
        unicode: '1f491-1f3fe',
      },
      '6': {
        name: 'couple_with_heart#skin-tone-6',
        unicode: '1f491-1f3ff',
      },
      '2-3': {
        name: 'couple_with_heart#skin-tone-2-3',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc',
      },
      '2-4': {
        name: 'couple_with_heart#skin-tone-2-4',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd',
      },
      '2-5': {
        name: 'couple_with_heart#skin-tone-2-5',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe',
      },
      '2-6': {
        name: 'couple_with_heart#skin-tone-2-6',
        unicode: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff',
      },
      '3-2': {
        name: 'couple_with_heart#skin-tone-3-2',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb',
      },
      '3-4': {
        name: 'couple_with_heart#skin-tone-3-4',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd',
      },
      '3-5': {
        name: 'couple_with_heart#skin-tone-3-5',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe',
      },
      '3-6': {
        name: 'couple_with_heart#skin-tone-3-6',
        unicode: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff',
      },
      '4-2': {
        name: 'couple_with_heart#skin-tone-4-2',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb',
      },
      '4-3': {
        name: 'couple_with_heart#skin-tone-4-3',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc',
      },
      '4-5': {
        name: 'couple_with_heart#skin-tone-4-5',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe',
      },
      '4-6': {
        name: 'couple_with_heart#skin-tone-4-6',
        unicode: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff',
      },
      '5-2': {
        name: 'couple_with_heart#skin-tone-5-2',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb',
      },
      '5-3': {
        name: 'couple_with_heart#skin-tone-5-3',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc',
      },
      '5-4': {
        name: 'couple_with_heart#skin-tone-5-4',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd',
      },
      '5-6': {
        name: 'couple_with_heart#skin-tone-5-6',
        unicode: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff',
      },
      '6-2': {
        name: 'couple_with_heart#skin-tone-6-2',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb',
      },
      '6-3': {
        name: 'couple_with_heart#skin-tone-6-3',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc',
      },
      '6-4': {
        name: 'couple_with_heart#skin-tone-6-4',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd',
      },
      '6-5': {
        name: 'couple_with_heart#skin-tone-6-5',
        unicode: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe',
      },
    },
  },
  wedding: {
    name: 'wedding',
    unicode: '1f492',
  },
  heartbeat: {
    name: 'heartbeat',
    unicode: '1f493',
  },
  broken_heart: {
    name: 'broken_heart',
    unicode: '1f494',
  },
  two_hearts: {
    name: 'two_hearts',
    unicode: '1f495',
  },
  sparkling_heart: {
    name: 'sparkling_heart',
    unicode: '1f496',
  },
  heartpulse: {
    name: 'heartpulse',
    unicode: '1f497',
  },
  cupid: {
    name: 'cupid',
    unicode: '1f498',
  },
  blue_heart: {
    name: 'blue_heart',
    unicode: '1f499',
  },
  green_heart: {
    name: 'green_heart',
    unicode: '1f49a',
  },
  yellow_heart: {
    name: 'yellow_heart',
    unicode: '1f49b',
  },
  purple_heart: {
    name: 'purple_heart',
    unicode: '1f49c',
  },
  gift_heart: {
    name: 'gift_heart',
    unicode: '1f49d',
  },
  revolving_hearts: {
    name: 'revolving_hearts',
    unicode: '1f49e',
  },
  heart_decoration: {
    name: 'heart_decoration',
    unicode: '1f49f',
  },
  diamond_shape_with_a_dot_inside: {
    name: 'diamond_shape_with_a_dot_inside',
    unicode: '1f4a0',
  },
  bulb: {
    name: 'bulb',
    unicode: '1f4a1',
  },
  anger: {
    name: 'anger',
    unicode: '1f4a2',
  },
  bomb: {
    name: 'bomb',
    unicode: '1f4a3',
  },
  zzz: {
    name: 'zzz',
    unicode: '1f4a4',
  },
  boom: {
    name: 'boom',
    unicode: '1f4a5',
  },
  collision: {
    name: 'collision',
    unicode: '1f4a5',
    aliasOf: 'boom',
  },
  sweat_drops: {
    name: 'sweat_drops',
    unicode: '1f4a6',
  },
  droplet: {
    name: 'droplet',
    unicode: '1f4a7',
  },
  dash: {
    name: 'dash',
    unicode: '1f4a8',
  },
  hankey: {
    name: 'hankey',
    unicode: '1f4a9',
  },
  poop: {
    name: 'poop',
    unicode: '1f4a9',
    aliasOf: 'hankey',
  },
  shit: {
    name: 'shit',
    unicode: '1f4a9',
    aliasOf: 'hankey',
  },
  muscle: {
    name: 'muscle',
    unicode: '1f4aa',
    skinVariations: {
      '2': {
        name: 'muscle#skin-tone-2',
        unicode: '1f4aa-1f3fb',
      },
      '3': {
        name: 'muscle#skin-tone-3',
        unicode: '1f4aa-1f3fc',
      },
      '4': {
        name: 'muscle#skin-tone-4',
        unicode: '1f4aa-1f3fd',
      },
      '5': {
        name: 'muscle#skin-tone-5',
        unicode: '1f4aa-1f3fe',
      },
      '6': {
        name: 'muscle#skin-tone-6',
        unicode: '1f4aa-1f3ff',
      },
    },
  },
  dizzy: {
    name: 'dizzy',
    unicode: '1f4ab',
  },
  speech_balloon: {
    name: 'speech_balloon',
    unicode: '1f4ac',
  },
  thought_balloon: {
    name: 'thought_balloon',
    unicode: '1f4ad',
  },
  white_flower: {
    name: 'white_flower',
    unicode: '1f4ae',
  },
  moneybag: {
    name: 'moneybag',
    unicode: '1f4b0',
  },
  currency_exchange: {
    name: 'currency_exchange',
    unicode: '1f4b1',
  },
  heavy_dollar_sign: {
    name: 'heavy_dollar_sign',
    unicode: '1f4b2',
  },
  credit_card: {
    name: 'credit_card',
    unicode: '1f4b3',
  },
  yen: {
    name: 'yen',
    unicode: '1f4b4',
  },
  dollar: {
    name: 'dollar',
    unicode: '1f4b5',
  },
  euro: {
    name: 'euro',
    unicode: '1f4b6',
  },
  pound: {
    name: 'pound',
    unicode: '1f4b7',
  },
  money_with_wings: {
    name: 'money_with_wings',
    unicode: '1f4b8',
  },
  chart: {
    name: 'chart',
    unicode: '1f4b9',
  },
  seat: {
    name: 'seat',
    unicode: '1f4ba',
  },
  computer: {
    name: 'computer',
    unicode: '1f4bb',
  },
  briefcase: {
    name: 'briefcase',
    unicode: '1f4bc',
  },
  minidisc: {
    name: 'minidisc',
    unicode: '1f4bd',
  },
  floppy_disk: {
    name: 'floppy_disk',
    unicode: '1f4be',
  },
  cd: {
    name: 'cd',
    unicode: '1f4bf',
  },
  dvd: {
    name: 'dvd',
    unicode: '1f4c0',
  },
  file_folder: {
    name: 'file_folder',
    unicode: '1f4c1',
  },
  open_file_folder: {
    name: 'open_file_folder',
    unicode: '1f4c2',
  },
  page_with_curl: {
    name: 'page_with_curl',
    unicode: '1f4c3',
  },
  page_facing_up: {
    name: 'page_facing_up',
    unicode: '1f4c4',
  },
  date: {
    name: 'date',
    unicode: '1f4c5',
  },
  calendar: {
    name: 'calendar',
    unicode: '1f4c6',
  },
  card_index: {
    name: 'card_index',
    unicode: '1f4c7',
  },
  chart_with_upwards_trend: {
    name: 'chart_with_upwards_trend',
    unicode: '1f4c8',
  },
  chart_with_downwards_trend: {
    name: 'chart_with_downwards_trend',
    unicode: '1f4c9',
  },
  bar_chart: {
    name: 'bar_chart',
    unicode: '1f4ca',
  },
  clipboard: {
    name: 'clipboard',
    unicode: '1f4cb',
  },
  pushpin: {
    name: 'pushpin',
    unicode: '1f4cc',
  },
  round_pushpin: {
    name: 'round_pushpin',
    unicode: '1f4cd',
  },
  paperclip: {
    name: 'paperclip',
    unicode: '1f4ce',
  },
  straight_ruler: {
    name: 'straight_ruler',
    unicode: '1f4cf',
  },
  triangular_ruler: {
    name: 'triangular_ruler',
    unicode: '1f4d0',
  },
  bookmark_tabs: {
    name: 'bookmark_tabs',
    unicode: '1f4d1',
  },
  ledger: {
    name: 'ledger',
    unicode: '1f4d2',
  },
  notebook: {
    name: 'notebook',
    unicode: '1f4d3',
  },
  notebook_with_decorative_cover: {
    name: 'notebook_with_decorative_cover',
    unicode: '1f4d4',
  },
  closed_book: {
    name: 'closed_book',
    unicode: '1f4d5',
  },
  book: {
    name: 'book',
    unicode: '1f4d6',
  },
  open_book: {
    name: 'open_book',
    unicode: '1f4d6',
    aliasOf: 'book',
  },
  green_book: {
    name: 'green_book',
    unicode: '1f4d7',
  },
  blue_book: {
    name: 'blue_book',
    unicode: '1f4d8',
  },
  orange_book: {
    name: 'orange_book',
    unicode: '1f4d9',
  },
  books: {
    name: 'books',
    unicode: '1f4da',
  },
  name_badge: {
    name: 'name_badge',
    unicode: '1f4db',
  },
  scroll: {
    name: 'scroll',
    unicode: '1f4dc',
  },
  memo: {
    name: 'memo',
    unicode: '1f4dd',
  },
  pencil: {
    name: 'pencil',
    unicode: '1f4dd',
    aliasOf: 'memo',
  },
  telephone_receiver: {
    name: 'telephone_receiver',
    unicode: '1f4de',
  },
  pager: {
    name: 'pager',
    unicode: '1f4df',
  },
  fax: {
    name: 'fax',
    unicode: '1f4e0',
  },
  satellite_antenna: {
    name: 'satellite_antenna',
    unicode: '1f4e1',
  },
  loudspeaker: {
    name: 'loudspeaker',
    unicode: '1f4e2',
  },
  mega: {
    name: 'mega',
    unicode: '1f4e3',
  },
  outbox_tray: {
    name: 'outbox_tray',
    unicode: '1f4e4',
  },
  inbox_tray: {
    name: 'inbox_tray',
    unicode: '1f4e5',
  },
  package: {
    name: 'package',
    unicode: '1f4e6',
  },
  'e-mail': {
    name: 'e-mail',
    unicode: '1f4e7',
  },
  incoming_envelope: {
    name: 'incoming_envelope',
    unicode: '1f4e8',
  },
  envelope_with_arrow: {
    name: 'envelope_with_arrow',
    unicode: '1f4e9',
  },
  mailbox_closed: {
    name: 'mailbox_closed',
    unicode: '1f4ea',
  },
  mailbox: {
    name: 'mailbox',
    unicode: '1f4eb',
  },
  mailbox_with_mail: {
    name: 'mailbox_with_mail',
    unicode: '1f4ec',
  },
  mailbox_with_no_mail: {
    name: 'mailbox_with_no_mail',
    unicode: '1f4ed',
  },
  postbox: {
    name: 'postbox',
    unicode: '1f4ee',
  },
  postal_horn: {
    name: 'postal_horn',
    unicode: '1f4ef',
  },
  newspaper: {
    name: 'newspaper',
    unicode: '1f4f0',
  },
  iphone: {
    name: 'iphone',
    unicode: '1f4f1',
  },
  calling: {
    name: 'calling',
    unicode: '1f4f2',
  },
  vibration_mode: {
    name: 'vibration_mode',
    unicode: '1f4f3',
  },
  mobile_phone_off: {
    name: 'mobile_phone_off',
    unicode: '1f4f4',
  },
  no_mobile_phones: {
    name: 'no_mobile_phones',
    unicode: '1f4f5',
  },
  signal_strength: {
    name: 'signal_strength',
    unicode: '1f4f6',
  },
  camera: {
    name: 'camera',
    unicode: '1f4f7',
  },
  camera_with_flash: {
    name: 'camera_with_flash',
    unicode: '1f4f8',
  },
  video_camera: {
    name: 'video_camera',
    unicode: '1f4f9',
  },
  tv: {
    name: 'tv',
    unicode: '1f4fa',
  },
  radio: {
    name: 'radio',
    unicode: '1f4fb',
  },
  vhs: {
    name: 'vhs',
    unicode: '1f4fc',
  },
  film_projector: {
    name: 'film_projector',
    unicode: '1f4fd-fe0f',
  },
  prayer_beads: {
    name: 'prayer_beads',
    unicode: '1f4ff',
  },
  twisted_rightwards_arrows: {
    name: 'twisted_rightwards_arrows',
    unicode: '1f500',
  },
  repeat: {
    name: 'repeat',
    unicode: '1f501',
  },
  repeat_one: {
    name: 'repeat_one',
    unicode: '1f502',
  },
  arrows_clockwise: {
    name: 'arrows_clockwise',
    unicode: '1f503',
  },
  arrows_counterclockwise: {
    name: 'arrows_counterclockwise',
    unicode: '1f504',
  },
  low_brightness: {
    name: 'low_brightness',
    unicode: '1f505',
  },
  high_brightness: {
    name: 'high_brightness',
    unicode: '1f506',
  },
  mute: {
    name: 'mute',
    unicode: '1f507',
  },
  speaker: {
    name: 'speaker',
    unicode: '1f508',
  },
  sound: {
    name: 'sound',
    unicode: '1f509',
  },
  loud_sound: {
    name: 'loud_sound',
    unicode: '1f50a',
  },
  battery: {
    name: 'battery',
    unicode: '1f50b',
  },
  electric_plug: {
    name: 'electric_plug',
    unicode: '1f50c',
  },
  mag: {
    name: 'mag',
    unicode: '1f50d',
  },
  mag_right: {
    name: 'mag_right',
    unicode: '1f50e',
  },
  lock_with_ink_pen: {
    name: 'lock_with_ink_pen',
    unicode: '1f50f',
  },
  closed_lock_with_key: {
    name: 'closed_lock_with_key',
    unicode: '1f510',
  },
  key: {
    name: 'key',
    unicode: '1f511',
  },
  lock: {
    name: 'lock',
    unicode: '1f512',
  },
  unlock: {
    name: 'unlock',
    unicode: '1f513',
  },
  bell: {
    name: 'bell',
    unicode: '1f514',
  },
  no_bell: {
    name: 'no_bell',
    unicode: '1f515',
  },
  bookmark: {
    name: 'bookmark',
    unicode: '1f516',
  },
  link: {
    name: 'link',
    unicode: '1f517',
  },
  radio_button: {
    name: 'radio_button',
    unicode: '1f518',
  },
  back: {
    name: 'back',
    unicode: '1f519',
  },
  end: {
    name: 'end',
    unicode: '1f51a',
  },
  on: {
    name: 'on',
    unicode: '1f51b',
  },
  soon: {
    name: 'soon',
    unicode: '1f51c',
  },
  top: {
    name: 'top',
    unicode: '1f51d',
  },
  underage: {
    name: 'underage',
    unicode: '1f51e',
  },
  keycap_ten: {
    name: 'keycap_ten',
    unicode: '1f51f',
  },
  capital_abcd: {
    name: 'capital_abcd',
    unicode: '1f520',
  },
  abcd: {
    name: 'abcd',
    unicode: '1f521',
  },
  symbols: {
    name: 'symbols',
    unicode: '1f523',
  },
  abc: {
    name: 'abc',
    unicode: '1f524',
  },
  fire: {
    name: 'fire',
    unicode: '1f525',
  },
  flashlight: {
    name: 'flashlight',
    unicode: '1f526',
  },
  wrench: {
    name: 'wrench',
    unicode: '1f527',
  },
  hammer: {
    name: 'hammer',
    unicode: '1f528',
  },
  nut_and_bolt: {
    name: 'nut_and_bolt',
    unicode: '1f529',
  },
  hocho: {
    name: 'hocho',
    unicode: '1f52a',
  },
  knife: {
    name: 'knife',
    unicode: '1f52a',
    aliasOf: 'hocho',
  },
  gun: {
    name: 'gun',
    unicode: '1f52b',
  },
  microscope: {
    name: 'microscope',
    unicode: '1f52c',
  },
  telescope: {
    name: 'telescope',
    unicode: '1f52d',
  },
  crystal_ball: {
    name: 'crystal_ball',
    unicode: '1f52e',
  },
  six_pointed_star: {
    name: 'six_pointed_star',
    unicode: '1f52f',
  },
  beginner: {
    name: 'beginner',
    unicode: '1f530',
  },
  trident: {
    name: 'trident',
    unicode: '1f531',
  },
  black_square_button: {
    name: 'black_square_button',
    unicode: '1f532',
  },
  white_square_button: {
    name: 'white_square_button',
    unicode: '1f533',
  },
  red_circle: {
    name: 'red_circle',
    unicode: '1f534',
  },
  large_blue_circle: {
    name: 'large_blue_circle',
    unicode: '1f535',
  },
  large_orange_diamond: {
    name: 'large_orange_diamond',
    unicode: '1f536',
  },
  large_blue_diamond: {
    name: 'large_blue_diamond',
    unicode: '1f537',
  },
  small_orange_diamond: {
    name: 'small_orange_diamond',
    unicode: '1f538',
  },
  small_blue_diamond: {
    name: 'small_blue_diamond',
    unicode: '1f539',
  },
  small_red_triangle: {
    name: 'small_red_triangle',
    unicode: '1f53a',
  },
  small_red_triangle_down: {
    name: 'small_red_triangle_down',
    unicode: '1f53b',
  },
  arrow_up_small: {
    name: 'arrow_up_small',
    unicode: '1f53c',
  },
  arrow_down_small: {
    name: 'arrow_down_small',
    unicode: '1f53d',
  },
  om_symbol: {
    name: 'om_symbol',
    unicode: '1f549-fe0f',
  },
  dove_of_peace: {
    name: 'dove_of_peace',
    unicode: '1f54a-fe0f',
  },
  kaaba: {
    name: 'kaaba',
    unicode: '1f54b',
  },
  mosque: {
    name: 'mosque',
    unicode: '1f54c',
  },
  synagogue: {
    name: 'synagogue',
    unicode: '1f54d',
  },
  menorah_with_nine_branches: {
    name: 'menorah_with_nine_branches',
    unicode: '1f54e',
  },
  clock1: {
    name: 'clock1',
    unicode: '1f550',
  },
  clock2: {
    name: 'clock2',
    unicode: '1f551',
  },
  clock3: {
    name: 'clock3',
    unicode: '1f552',
  },
  clock4: {
    name: 'clock4',
    unicode: '1f553',
  },
  clock5: {
    name: 'clock5',
    unicode: '1f554',
  },
  clock6: {
    name: 'clock6',
    unicode: '1f555',
  },
  clock7: {
    name: 'clock7',
    unicode: '1f556',
  },
  clock8: {
    name: 'clock8',
    unicode: '1f557',
  },
  clock9: {
    name: 'clock9',
    unicode: '1f558',
  },
  clock10: {
    name: 'clock10',
    unicode: '1f559',
  },
  clock11: {
    name: 'clock11',
    unicode: '1f55a',
  },
  clock12: {
    name: 'clock12',
    unicode: '1f55b',
  },
  clock130: {
    name: 'clock130',
    unicode: '1f55c',
  },
  clock230: {
    name: 'clock230',
    unicode: '1f55d',
  },
  clock330: {
    name: 'clock330',
    unicode: '1f55e',
  },
  clock430: {
    name: 'clock430',
    unicode: '1f55f',
  },
  clock530: {
    name: 'clock530',
    unicode: '1f560',
  },
  clock630: {
    name: 'clock630',
    unicode: '1f561',
  },
  clock730: {
    name: 'clock730',
    unicode: '1f562',
  },
  clock830: {
    name: 'clock830',
    unicode: '1f563',
  },
  clock930: {
    name: 'clock930',
    unicode: '1f564',
  },
  clock1030: {
    name: 'clock1030',
    unicode: '1f565',
  },
  clock1130: {
    name: 'clock1130',
    unicode: '1f566',
  },
  clock1230: {
    name: 'clock1230',
    unicode: '1f567',
  },
  candle: {
    name: 'candle',
    unicode: '1f56f-fe0f',
  },
  mantelpiece_clock: {
    name: 'mantelpiece_clock',
    unicode: '1f570-fe0f',
  },
  hole: {
    name: 'hole',
    unicode: '1f573-fe0f',
  },
  man_in_business_suit_levitating: {
    name: 'man_in_business_suit_levitating',
    unicode: '1f574-fe0f',
    skinVariations: {
      '2': {
        name: 'man_in_business_suit_levitating#skin-tone-2',
        unicode: '1f574-1f3fb',
      },
      '3': {
        name: 'man_in_business_suit_levitating#skin-tone-3',
        unicode: '1f574-1f3fc',
      },
      '4': {
        name: 'man_in_business_suit_levitating#skin-tone-4',
        unicode: '1f574-1f3fd',
      },
      '5': {
        name: 'man_in_business_suit_levitating#skin-tone-5',
        unicode: '1f574-1f3fe',
      },
      '6': {
        name: 'man_in_business_suit_levitating#skin-tone-6',
        unicode: '1f574-1f3ff',
      },
    },
  },
  'female-detective': {
    name: 'female-detective',
    unicode: '1f575-fe0f-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female-detective#skin-tone-2',
        unicode: '1f575-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female-detective#skin-tone-3',
        unicode: '1f575-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female-detective#skin-tone-4',
        unicode: '1f575-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female-detective#skin-tone-5',
        unicode: '1f575-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female-detective#skin-tone-6',
        unicode: '1f575-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'male-detective': {
    name: 'male-detective',
    unicode: '1f575-fe0f-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male-detective#skin-tone-2',
        unicode: '1f575-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male-detective#skin-tone-3',
        unicode: '1f575-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male-detective#skin-tone-4',
        unicode: '1f575-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male-detective#skin-tone-5',
        unicode: '1f575-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male-detective#skin-tone-6',
        unicode: '1f575-1f3ff-200d-2642-fe0f',
      },
    },
  },
  sleuth_or_spy: {
    name: 'sleuth_or_spy',
    unicode: '1f575-fe0f',
    skinVariations: {
      '2': {
        name: 'sleuth_or_spy#skin-tone-2',
        unicode: '1f575-1f3fb',
      },
      '3': {
        name: 'sleuth_or_spy#skin-tone-3',
        unicode: '1f575-1f3fc',
      },
      '4': {
        name: 'sleuth_or_spy#skin-tone-4',
        unicode: '1f575-1f3fd',
      },
      '5': {
        name: 'sleuth_or_spy#skin-tone-5',
        unicode: '1f575-1f3fe',
      },
      '6': {
        name: 'sleuth_or_spy#skin-tone-6',
        unicode: '1f575-1f3ff',
      },
    },
  },
  dark_sunglasses: {
    name: 'dark_sunglasses',
    unicode: '1f576-fe0f',
  },
  spider: {
    name: 'spider',
    unicode: '1f577-fe0f',
  },
  spider_web: {
    name: 'spider_web',
    unicode: '1f578-fe0f',
  },
  joystick: {
    name: 'joystick',
    unicode: '1f579-fe0f',
  },
  man_dancing: {
    name: 'man_dancing',
    unicode: '1f57a',
    skinVariations: {
      '2': {
        name: 'man_dancing#skin-tone-2',
        unicode: '1f57a-1f3fb',
      },
      '3': {
        name: 'man_dancing#skin-tone-3',
        unicode: '1f57a-1f3fc',
      },
      '4': {
        name: 'man_dancing#skin-tone-4',
        unicode: '1f57a-1f3fd',
      },
      '5': {
        name: 'man_dancing#skin-tone-5',
        unicode: '1f57a-1f3fe',
      },
      '6': {
        name: 'man_dancing#skin-tone-6',
        unicode: '1f57a-1f3ff',
      },
    },
  },
  linked_paperclips: {
    name: 'linked_paperclips',
    unicode: '1f587-fe0f',
  },
  lower_left_ballpoint_pen: {
    name: 'lower_left_ballpoint_pen',
    unicode: '1f58a-fe0f',
  },
  lower_left_fountain_pen: {
    name: 'lower_left_fountain_pen',
    unicode: '1f58b-fe0f',
  },
  lower_left_paintbrush: {
    name: 'lower_left_paintbrush',
    unicode: '1f58c-fe0f',
  },
  lower_left_crayon: {
    name: 'lower_left_crayon',
    unicode: '1f58d-fe0f',
  },
  raised_hand_with_fingers_splayed: {
    name: 'raised_hand_with_fingers_splayed',
    unicode: '1f590-fe0f',
    skinVariations: {
      '2': {
        name: 'raised_hand_with_fingers_splayed#skin-tone-2',
        unicode: '1f590-1f3fb',
      },
      '3': {
        name: 'raised_hand_with_fingers_splayed#skin-tone-3',
        unicode: '1f590-1f3fc',
      },
      '4': {
        name: 'raised_hand_with_fingers_splayed#skin-tone-4',
        unicode: '1f590-1f3fd',
      },
      '5': {
        name: 'raised_hand_with_fingers_splayed#skin-tone-5',
        unicode: '1f590-1f3fe',
      },
      '6': {
        name: 'raised_hand_with_fingers_splayed#skin-tone-6',
        unicode: '1f590-1f3ff',
      },
    },
  },
  middle_finger: {
    name: 'middle_finger',
    unicode: '1f595',
    skinVariations: {
      '2': {
        name: 'middle_finger#skin-tone-2',
        unicode: '1f595-1f3fb',
      },
      '3': {
        name: 'middle_finger#skin-tone-3',
        unicode: '1f595-1f3fc',
      },
      '4': {
        name: 'middle_finger#skin-tone-4',
        unicode: '1f595-1f3fd',
      },
      '5': {
        name: 'middle_finger#skin-tone-5',
        unicode: '1f595-1f3fe',
      },
      '6': {
        name: 'middle_finger#skin-tone-6',
        unicode: '1f595-1f3ff',
      },
    },
  },
  reversed_hand_with_middle_finger_extended: {
    name: 'reversed_hand_with_middle_finger_extended',
    unicode: '1f595',
    aliasOf: 'middle_finger',
    skinVariations: {
      '2': {
        name: 'reversed_hand_with_middle_finger_extended#skin-tone-2',
        unicode: '1f595-1f3fb',
      },
      '3': {
        name: 'reversed_hand_with_middle_finger_extended#skin-tone-3',
        unicode: '1f595-1f3fc',
      },
      '4': {
        name: 'reversed_hand_with_middle_finger_extended#skin-tone-4',
        unicode: '1f595-1f3fd',
      },
      '5': {
        name: 'reversed_hand_with_middle_finger_extended#skin-tone-5',
        unicode: '1f595-1f3fe',
      },
      '6': {
        name: 'reversed_hand_with_middle_finger_extended#skin-tone-6',
        unicode: '1f595-1f3ff',
      },
    },
  },
  'spock-hand': {
    name: 'spock-hand',
    unicode: '1f596',
    skinVariations: {
      '2': {
        name: 'spock-hand#skin-tone-2',
        unicode: '1f596-1f3fb',
      },
      '3': {
        name: 'spock-hand#skin-tone-3',
        unicode: '1f596-1f3fc',
      },
      '4': {
        name: 'spock-hand#skin-tone-4',
        unicode: '1f596-1f3fd',
      },
      '5': {
        name: 'spock-hand#skin-tone-5',
        unicode: '1f596-1f3fe',
      },
      '6': {
        name: 'spock-hand#skin-tone-6',
        unicode: '1f596-1f3ff',
      },
    },
  },
  black_heart: {
    name: 'black_heart',
    unicode: '1f5a4',
  },
  desktop_computer: {
    name: 'desktop_computer',
    unicode: '1f5a5-fe0f',
  },
  printer: {
    name: 'printer',
    unicode: '1f5a8-fe0f',
  },
  three_button_mouse: {
    name: 'three_button_mouse',
    unicode: '1f5b1-fe0f',
  },
  trackball: {
    name: 'trackball',
    unicode: '1f5b2-fe0f',
  },
  frame_with_picture: {
    name: 'frame_with_picture',
    unicode: '1f5bc-fe0f',
  },
  card_index_dividers: {
    name: 'card_index_dividers',
    unicode: '1f5c2-fe0f',
  },
  card_file_box: {
    name: 'card_file_box',
    unicode: '1f5c3-fe0f',
  },
  file_cabinet: {
    name: 'file_cabinet',
    unicode: '1f5c4-fe0f',
  },
  wastebasket: {
    name: 'wastebasket',
    unicode: '1f5d1-fe0f',
  },
  spiral_note_pad: {
    name: 'spiral_note_pad',
    unicode: '1f5d2-fe0f',
  },
  spiral_calendar_pad: {
    name: 'spiral_calendar_pad',
    unicode: '1f5d3-fe0f',
  },
  compression: {
    name: 'compression',
    unicode: '1f5dc-fe0f',
  },
  old_key: {
    name: 'old_key',
    unicode: '1f5dd-fe0f',
  },
  rolled_up_newspaper: {
    name: 'rolled_up_newspaper',
    unicode: '1f5de-fe0f',
  },
  dagger_knife: {
    name: 'dagger_knife',
    unicode: '1f5e1-fe0f',
  },
  speaking_head_in_silhouette: {
    name: 'speaking_head_in_silhouette',
    unicode: '1f5e3-fe0f',
  },
  left_speech_bubble: {
    name: 'left_speech_bubble',
    unicode: '1f5e8-fe0f',
  },
  right_anger_bubble: {
    name: 'right_anger_bubble',
    unicode: '1f5ef-fe0f',
  },
  ballot_box_with_ballot: {
    name: 'ballot_box_with_ballot',
    unicode: '1f5f3-fe0f',
  },
  world_map: {
    name: 'world_map',
    unicode: '1f5fa-fe0f',
  },
  mount_fuji: {
    name: 'mount_fuji',
    unicode: '1f5fb',
  },
  tokyo_tower: {
    name: 'tokyo_tower',
    unicode: '1f5fc',
  },
  statue_of_liberty: {
    name: 'statue_of_liberty',
    unicode: '1f5fd',
  },
  japan: {
    name: 'japan',
    unicode: '1f5fe',
  },
  moyai: {
    name: 'moyai',
    unicode: '1f5ff',
  },
  grinning: {
    name: 'grinning',
    unicode: '1f600',
  },
  grin: {
    name: 'grin',
    unicode: '1f601',
  },
  joy: {
    name: 'joy',
    unicode: '1f602',
  },
  smiley: {
    name: 'smiley',
    unicode: '1f603',
  },
  smile: {
    name: 'smile',
    unicode: '1f604',
  },
  sweat_smile: {
    name: 'sweat_smile',
    unicode: '1f605',
  },
  laughing: {
    name: 'laughing',
    unicode: '1f606',
  },
  satisfied: {
    name: 'satisfied',
    unicode: '1f606',
    aliasOf: 'laughing',
  },
  innocent: {
    name: 'innocent',
    unicode: '1f607',
  },
  smiling_imp: {
    name: 'smiling_imp',
    unicode: '1f608',
  },
  wink: {
    name: 'wink',
    unicode: '1f609',
  },
  blush: {
    name: 'blush',
    unicode: '1f60a',
  },
  yum: {
    name: 'yum',
    unicode: '1f60b',
  },
  relieved: {
    name: 'relieved',
    unicode: '1f60c',
  },
  heart_eyes: {
    name: 'heart_eyes',
    unicode: '1f60d',
  },
  sunglasses: {
    name: 'sunglasses',
    unicode: '1f60e',
  },
  smirk: {
    name: 'smirk',
    unicode: '1f60f',
  },
  neutral_face: {
    name: 'neutral_face',
    unicode: '1f610',
  },
  expressionless: {
    name: 'expressionless',
    unicode: '1f611',
  },
  unamused: {
    name: 'unamused',
    unicode: '1f612',
  },
  sweat: {
    name: 'sweat',
    unicode: '1f613',
  },
  pensive: {
    name: 'pensive',
    unicode: '1f614',
  },
  confused: {
    name: 'confused',
    unicode: '1f615',
  },
  confounded: {
    name: 'confounded',
    unicode: '1f616',
  },
  kissing: {
    name: 'kissing',
    unicode: '1f617',
  },
  kissing_heart: {
    name: 'kissing_heart',
    unicode: '1f618',
  },
  kissing_smiling_eyes: {
    name: 'kissing_smiling_eyes',
    unicode: '1f619',
  },
  kissing_closed_eyes: {
    name: 'kissing_closed_eyes',
    unicode: '1f61a',
  },
  stuck_out_tongue: {
    name: 'stuck_out_tongue',
    unicode: '1f61b',
  },
  stuck_out_tongue_winking_eye: {
    name: 'stuck_out_tongue_winking_eye',
    unicode: '1f61c',
  },
  stuck_out_tongue_closed_eyes: {
    name: 'stuck_out_tongue_closed_eyes',
    unicode: '1f61d',
  },
  disappointed: {
    name: 'disappointed',
    unicode: '1f61e',
  },
  worried: {
    name: 'worried',
    unicode: '1f61f',
  },
  angry: {
    name: 'angry',
    unicode: '1f620',
  },
  rage: {
    name: 'rage',
    unicode: '1f621',
  },
  cry: {
    name: 'cry',
    unicode: '1f622',
  },
  persevere: {
    name: 'persevere',
    unicode: '1f623',
  },
  triumph: {
    name: 'triumph',
    unicode: '1f624',
  },
  disappointed_relieved: {
    name: 'disappointed_relieved',
    unicode: '1f625',
  },
  frowning: {
    name: 'frowning',
    unicode: '1f626',
  },
  anguished: {
    name: 'anguished',
    unicode: '1f627',
  },
  fearful: {
    name: 'fearful',
    unicode: '1f628',
  },
  weary: {
    name: 'weary',
    unicode: '1f629',
  },
  sleepy: {
    name: 'sleepy',
    unicode: '1f62a',
  },
  tired_face: {
    name: 'tired_face',
    unicode: '1f62b',
  },
  grimacing: {
    name: 'grimacing',
    unicode: '1f62c',
  },
  sob: {
    name: 'sob',
    unicode: '1f62d',
  },
  face_exhaling: {
    name: 'face_exhaling',
    unicode: '1f62e-200d-1f4a8',
  },
  open_mouth: {
    name: 'open_mouth',
    unicode: '1f62e',
  },
  hushed: {
    name: 'hushed',
    unicode: '1f62f',
  },
  cold_sweat: {
    name: 'cold_sweat',
    unicode: '1f630',
  },
  scream: {
    name: 'scream',
    unicode: '1f631',
  },
  astonished: {
    name: 'astonished',
    unicode: '1f632',
  },
  flushed: {
    name: 'flushed',
    unicode: '1f633',
  },
  sleeping: {
    name: 'sleeping',
    unicode: '1f634',
  },
  face_with_spiral_eyes: {
    name: 'face_with_spiral_eyes',
    unicode: '1f635-200d-1f4ab',
  },
  dizzy_face: {
    name: 'dizzy_face',
    unicode: '1f635',
  },
  face_in_clouds: {
    name: 'face_in_clouds',
    unicode: '1f636-200d-1f32b-fe0f',
  },
  no_mouth: {
    name: 'no_mouth',
    unicode: '1f636',
  },
  mask: {
    name: 'mask',
    unicode: '1f637',
  },
  smile_cat: {
    name: 'smile_cat',
    unicode: '1f638',
  },
  joy_cat: {
    name: 'joy_cat',
    unicode: '1f639',
  },
  smiley_cat: {
    name: 'smiley_cat',
    unicode: '1f63a',
  },
  heart_eyes_cat: {
    name: 'heart_eyes_cat',
    unicode: '1f63b',
  },
  smirk_cat: {
    name: 'smirk_cat',
    unicode: '1f63c',
  },
  kissing_cat: {
    name: 'kissing_cat',
    unicode: '1f63d',
  },
  pouting_cat: {
    name: 'pouting_cat',
    unicode: '1f63e',
  },
  crying_cat_face: {
    name: 'crying_cat_face',
    unicode: '1f63f',
  },
  scream_cat: {
    name: 'scream_cat',
    unicode: '1f640',
  },
  slightly_frowning_face: {
    name: 'slightly_frowning_face',
    unicode: '1f641',
  },
  slightly_smiling_face: {
    name: 'slightly_smiling_face',
    unicode: '1f642',
  },
  upside_down_face: {
    name: 'upside_down_face',
    unicode: '1f643',
  },
  face_with_rolling_eyes: {
    name: 'face_with_rolling_eyes',
    unicode: '1f644',
  },
  'woman-gesturing-no': {
    name: 'woman-gesturing-no',
    unicode: '1f645-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-gesturing-no#skin-tone-2',
        unicode: '1f645-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-gesturing-no#skin-tone-3',
        unicode: '1f645-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-gesturing-no#skin-tone-4',
        unicode: '1f645-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-gesturing-no#skin-tone-5',
        unicode: '1f645-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-gesturing-no#skin-tone-6',
        unicode: '1f645-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-gesturing-no': {
    name: 'man-gesturing-no',
    unicode: '1f645-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-gesturing-no#skin-tone-2',
        unicode: '1f645-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-gesturing-no#skin-tone-3',
        unicode: '1f645-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-gesturing-no#skin-tone-4',
        unicode: '1f645-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-gesturing-no#skin-tone-5',
        unicode: '1f645-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-gesturing-no#skin-tone-6',
        unicode: '1f645-1f3ff-200d-2642-fe0f',
      },
    },
  },
  no_good: {
    name: 'no_good',
    unicode: '1f645',
    skinVariations: {
      '2': {
        name: 'no_good#skin-tone-2',
        unicode: '1f645-1f3fb',
      },
      '3': {
        name: 'no_good#skin-tone-3',
        unicode: '1f645-1f3fc',
      },
      '4': {
        name: 'no_good#skin-tone-4',
        unicode: '1f645-1f3fd',
      },
      '5': {
        name: 'no_good#skin-tone-5',
        unicode: '1f645-1f3fe',
      },
      '6': {
        name: 'no_good#skin-tone-6',
        unicode: '1f645-1f3ff',
      },
    },
  },
  'woman-gesturing-ok': {
    name: 'woman-gesturing-ok',
    unicode: '1f646-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-gesturing-ok#skin-tone-2',
        unicode: '1f646-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-gesturing-ok#skin-tone-3',
        unicode: '1f646-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-gesturing-ok#skin-tone-4',
        unicode: '1f646-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-gesturing-ok#skin-tone-5',
        unicode: '1f646-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-gesturing-ok#skin-tone-6',
        unicode: '1f646-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-gesturing-ok': {
    name: 'man-gesturing-ok',
    unicode: '1f646-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-gesturing-ok#skin-tone-2',
        unicode: '1f646-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-gesturing-ok#skin-tone-3',
        unicode: '1f646-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-gesturing-ok#skin-tone-4',
        unicode: '1f646-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-gesturing-ok#skin-tone-5',
        unicode: '1f646-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-gesturing-ok#skin-tone-6',
        unicode: '1f646-1f3ff-200d-2642-fe0f',
      },
    },
  },
  ok_woman: {
    name: 'ok_woman',
    unicode: '1f646',
    skinVariations: {
      '2': {
        name: 'ok_woman#skin-tone-2',
        unicode: '1f646-1f3fb',
      },
      '3': {
        name: 'ok_woman#skin-tone-3',
        unicode: '1f646-1f3fc',
      },
      '4': {
        name: 'ok_woman#skin-tone-4',
        unicode: '1f646-1f3fd',
      },
      '5': {
        name: 'ok_woman#skin-tone-5',
        unicode: '1f646-1f3fe',
      },
      '6': {
        name: 'ok_woman#skin-tone-6',
        unicode: '1f646-1f3ff',
      },
    },
  },
  'woman-bowing': {
    name: 'woman-bowing',
    unicode: '1f647-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-bowing#skin-tone-2',
        unicode: '1f647-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-bowing#skin-tone-3',
        unicode: '1f647-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-bowing#skin-tone-4',
        unicode: '1f647-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-bowing#skin-tone-5',
        unicode: '1f647-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-bowing#skin-tone-6',
        unicode: '1f647-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-bowing': {
    name: 'man-bowing',
    unicode: '1f647-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-bowing#skin-tone-2',
        unicode: '1f647-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-bowing#skin-tone-3',
        unicode: '1f647-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-bowing#skin-tone-4',
        unicode: '1f647-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-bowing#skin-tone-5',
        unicode: '1f647-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-bowing#skin-tone-6',
        unicode: '1f647-1f3ff-200d-2642-fe0f',
      },
    },
  },
  bow: {
    name: 'bow',
    unicode: '1f647',
    skinVariations: {
      '2': {
        name: 'bow#skin-tone-2',
        unicode: '1f647-1f3fb',
      },
      '3': {
        name: 'bow#skin-tone-3',
        unicode: '1f647-1f3fc',
      },
      '4': {
        name: 'bow#skin-tone-4',
        unicode: '1f647-1f3fd',
      },
      '5': {
        name: 'bow#skin-tone-5',
        unicode: '1f647-1f3fe',
      },
      '6': {
        name: 'bow#skin-tone-6',
        unicode: '1f647-1f3ff',
      },
    },
  },
  see_no_evil: {
    name: 'see_no_evil',
    unicode: '1f648',
  },
  hear_no_evil: {
    name: 'hear_no_evil',
    unicode: '1f649',
  },
  speak_no_evil: {
    name: 'speak_no_evil',
    unicode: '1f64a',
  },
  'woman-raising-hand': {
    name: 'woman-raising-hand',
    unicode: '1f64b-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-raising-hand#skin-tone-2',
        unicode: '1f64b-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-raising-hand#skin-tone-3',
        unicode: '1f64b-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-raising-hand#skin-tone-4',
        unicode: '1f64b-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-raising-hand#skin-tone-5',
        unicode: '1f64b-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-raising-hand#skin-tone-6',
        unicode: '1f64b-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-raising-hand': {
    name: 'man-raising-hand',
    unicode: '1f64b-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-raising-hand#skin-tone-2',
        unicode: '1f64b-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-raising-hand#skin-tone-3',
        unicode: '1f64b-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-raising-hand#skin-tone-4',
        unicode: '1f64b-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-raising-hand#skin-tone-5',
        unicode: '1f64b-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-raising-hand#skin-tone-6',
        unicode: '1f64b-1f3ff-200d-2642-fe0f',
      },
    },
  },
  raising_hand: {
    name: 'raising_hand',
    unicode: '1f64b',
    skinVariations: {
      '2': {
        name: 'raising_hand#skin-tone-2',
        unicode: '1f64b-1f3fb',
      },
      '3': {
        name: 'raising_hand#skin-tone-3',
        unicode: '1f64b-1f3fc',
      },
      '4': {
        name: 'raising_hand#skin-tone-4',
        unicode: '1f64b-1f3fd',
      },
      '5': {
        name: 'raising_hand#skin-tone-5',
        unicode: '1f64b-1f3fe',
      },
      '6': {
        name: 'raising_hand#skin-tone-6',
        unicode: '1f64b-1f3ff',
      },
    },
  },
  raised_hands: {
    name: 'raised_hands',
    unicode: '1f64c',
    skinVariations: {
      '2': {
        name: 'raised_hands#skin-tone-2',
        unicode: '1f64c-1f3fb',
      },
      '3': {
        name: 'raised_hands#skin-tone-3',
        unicode: '1f64c-1f3fc',
      },
      '4': {
        name: 'raised_hands#skin-tone-4',
        unicode: '1f64c-1f3fd',
      },
      '5': {
        name: 'raised_hands#skin-tone-5',
        unicode: '1f64c-1f3fe',
      },
      '6': {
        name: 'raised_hands#skin-tone-6',
        unicode: '1f64c-1f3ff',
      },
    },
  },
  'woman-frowning': {
    name: 'woman-frowning',
    unicode: '1f64d-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-frowning#skin-tone-2',
        unicode: '1f64d-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-frowning#skin-tone-3',
        unicode: '1f64d-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-frowning#skin-tone-4',
        unicode: '1f64d-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-frowning#skin-tone-5',
        unicode: '1f64d-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-frowning#skin-tone-6',
        unicode: '1f64d-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-frowning': {
    name: 'man-frowning',
    unicode: '1f64d-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-frowning#skin-tone-2',
        unicode: '1f64d-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-frowning#skin-tone-3',
        unicode: '1f64d-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-frowning#skin-tone-4',
        unicode: '1f64d-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-frowning#skin-tone-5',
        unicode: '1f64d-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-frowning#skin-tone-6',
        unicode: '1f64d-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_frowning: {
    name: 'person_frowning',
    unicode: '1f64d',
    skinVariations: {
      '2': {
        name: 'person_frowning#skin-tone-2',
        unicode: '1f64d-1f3fb',
      },
      '3': {
        name: 'person_frowning#skin-tone-3',
        unicode: '1f64d-1f3fc',
      },
      '4': {
        name: 'person_frowning#skin-tone-4',
        unicode: '1f64d-1f3fd',
      },
      '5': {
        name: 'person_frowning#skin-tone-5',
        unicode: '1f64d-1f3fe',
      },
      '6': {
        name: 'person_frowning#skin-tone-6',
        unicode: '1f64d-1f3ff',
      },
    },
  },
  'woman-pouting': {
    name: 'woman-pouting',
    unicode: '1f64e-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-pouting#skin-tone-2',
        unicode: '1f64e-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-pouting#skin-tone-3',
        unicode: '1f64e-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-pouting#skin-tone-4',
        unicode: '1f64e-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-pouting#skin-tone-5',
        unicode: '1f64e-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-pouting#skin-tone-6',
        unicode: '1f64e-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-pouting': {
    name: 'man-pouting',
    unicode: '1f64e-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-pouting#skin-tone-2',
        unicode: '1f64e-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-pouting#skin-tone-3',
        unicode: '1f64e-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-pouting#skin-tone-4',
        unicode: '1f64e-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-pouting#skin-tone-5',
        unicode: '1f64e-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-pouting#skin-tone-6',
        unicode: '1f64e-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_with_pouting_face: {
    name: 'person_with_pouting_face',
    unicode: '1f64e',
    skinVariations: {
      '2': {
        name: 'person_with_pouting_face#skin-tone-2',
        unicode: '1f64e-1f3fb',
      },
      '3': {
        name: 'person_with_pouting_face#skin-tone-3',
        unicode: '1f64e-1f3fc',
      },
      '4': {
        name: 'person_with_pouting_face#skin-tone-4',
        unicode: '1f64e-1f3fd',
      },
      '5': {
        name: 'person_with_pouting_face#skin-tone-5',
        unicode: '1f64e-1f3fe',
      },
      '6': {
        name: 'person_with_pouting_face#skin-tone-6',
        unicode: '1f64e-1f3ff',
      },
    },
  },
  pray: {
    name: 'pray',
    unicode: '1f64f',
    skinVariations: {
      '2': {
        name: 'pray#skin-tone-2',
        unicode: '1f64f-1f3fb',
      },
      '3': {
        name: 'pray#skin-tone-3',
        unicode: '1f64f-1f3fc',
      },
      '4': {
        name: 'pray#skin-tone-4',
        unicode: '1f64f-1f3fd',
      },
      '5': {
        name: 'pray#skin-tone-5',
        unicode: '1f64f-1f3fe',
      },
      '6': {
        name: 'pray#skin-tone-6',
        unicode: '1f64f-1f3ff',
      },
    },
  },
  rocket: {
    name: 'rocket',
    unicode: '1f680',
  },
  helicopter: {
    name: 'helicopter',
    unicode: '1f681',
  },
  steam_locomotive: {
    name: 'steam_locomotive',
    unicode: '1f682',
  },
  railway_car: {
    name: 'railway_car',
    unicode: '1f683',
  },
  bullettrain_side: {
    name: 'bullettrain_side',
    unicode: '1f684',
  },
  bullettrain_front: {
    name: 'bullettrain_front',
    unicode: '1f685',
  },
  train2: {
    name: 'train2',
    unicode: '1f686',
  },
  metro: {
    name: 'metro',
    unicode: '1f687',
  },
  light_rail: {
    name: 'light_rail',
    unicode: '1f688',
  },
  station: {
    name: 'station',
    unicode: '1f689',
  },
  tram: {
    name: 'tram',
    unicode: '1f68a',
  },
  train: {
    name: 'train',
    unicode: '1f68b',
  },
  bus: {
    name: 'bus',
    unicode: '1f68c',
  },
  oncoming_bus: {
    name: 'oncoming_bus',
    unicode: '1f68d',
  },
  trolleybus: {
    name: 'trolleybus',
    unicode: '1f68e',
  },
  busstop: {
    name: 'busstop',
    unicode: '1f68f',
  },
  minibus: {
    name: 'minibus',
    unicode: '1f690',
  },
  ambulance: {
    name: 'ambulance',
    unicode: '1f691',
  },
  fire_engine: {
    name: 'fire_engine',
    unicode: '1f692',
  },
  police_car: {
    name: 'police_car',
    unicode: '1f693',
  },
  oncoming_police_car: {
    name: 'oncoming_police_car',
    unicode: '1f694',
  },
  taxi: {
    name: 'taxi',
    unicode: '1f695',
  },
  oncoming_taxi: {
    name: 'oncoming_taxi',
    unicode: '1f696',
  },
  car: {
    name: 'car',
    unicode: '1f697',
  },
  red_car: {
    name: 'red_car',
    unicode: '1f697',
    aliasOf: 'car',
  },
  oncoming_automobile: {
    name: 'oncoming_automobile',
    unicode: '1f698',
  },
  blue_car: {
    name: 'blue_car',
    unicode: '1f699',
  },
  truck: {
    name: 'truck',
    unicode: '1f69a',
  },
  articulated_lorry: {
    name: 'articulated_lorry',
    unicode: '1f69b',
  },
  tractor: {
    name: 'tractor',
    unicode: '1f69c',
  },
  monorail: {
    name: 'monorail',
    unicode: '1f69d',
  },
  mountain_railway: {
    name: 'mountain_railway',
    unicode: '1f69e',
  },
  suspension_railway: {
    name: 'suspension_railway',
    unicode: '1f69f',
  },
  mountain_cableway: {
    name: 'mountain_cableway',
    unicode: '1f6a0',
  },
  aerial_tramway: {
    name: 'aerial_tramway',
    unicode: '1f6a1',
  },
  ship: {
    name: 'ship',
    unicode: '1f6a2',
  },
  'woman-rowing-boat': {
    name: 'woman-rowing-boat',
    unicode: '1f6a3-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-rowing-boat#skin-tone-2',
        unicode: '1f6a3-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-rowing-boat#skin-tone-3',
        unicode: '1f6a3-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-rowing-boat#skin-tone-4',
        unicode: '1f6a3-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-rowing-boat#skin-tone-5',
        unicode: '1f6a3-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-rowing-boat#skin-tone-6',
        unicode: '1f6a3-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-rowing-boat': {
    name: 'man-rowing-boat',
    unicode: '1f6a3-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-rowing-boat#skin-tone-2',
        unicode: '1f6a3-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-rowing-boat#skin-tone-3',
        unicode: '1f6a3-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-rowing-boat#skin-tone-4',
        unicode: '1f6a3-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-rowing-boat#skin-tone-5',
        unicode: '1f6a3-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-rowing-boat#skin-tone-6',
        unicode: '1f6a3-1f3ff-200d-2642-fe0f',
      },
    },
  },
  rowboat: {
    name: 'rowboat',
    unicode: '1f6a3',
    skinVariations: {
      '2': {
        name: 'rowboat#skin-tone-2',
        unicode: '1f6a3-1f3fb',
      },
      '3': {
        name: 'rowboat#skin-tone-3',
        unicode: '1f6a3-1f3fc',
      },
      '4': {
        name: 'rowboat#skin-tone-4',
        unicode: '1f6a3-1f3fd',
      },
      '5': {
        name: 'rowboat#skin-tone-5',
        unicode: '1f6a3-1f3fe',
      },
      '6': {
        name: 'rowboat#skin-tone-6',
        unicode: '1f6a3-1f3ff',
      },
    },
  },
  speedboat: {
    name: 'speedboat',
    unicode: '1f6a4',
  },
  traffic_light: {
    name: 'traffic_light',
    unicode: '1f6a5',
  },
  vertical_traffic_light: {
    name: 'vertical_traffic_light',
    unicode: '1f6a6',
  },
  construction: {
    name: 'construction',
    unicode: '1f6a7',
  },
  rotating_light: {
    name: 'rotating_light',
    unicode: '1f6a8',
  },
  triangular_flag_on_post: {
    name: 'triangular_flag_on_post',
    unicode: '1f6a9',
  },
  door: {
    name: 'door',
    unicode: '1f6aa',
  },
  no_entry_sign: {
    name: 'no_entry_sign',
    unicode: '1f6ab',
  },
  smoking: {
    name: 'smoking',
    unicode: '1f6ac',
  },
  no_smoking: {
    name: 'no_smoking',
    unicode: '1f6ad',
  },
  put_litter_in_its_place: {
    name: 'put_litter_in_its_place',
    unicode: '1f6ae',
  },
  do_not_litter: {
    name: 'do_not_litter',
    unicode: '1f6af',
  },
  potable_water: {
    name: 'potable_water',
    unicode: '1f6b0',
  },
  'non-potable_water': {
    name: 'non-potable_water',
    unicode: '1f6b1',
  },
  bike: {
    name: 'bike',
    unicode: '1f6b2',
  },
  no_bicycles: {
    name: 'no_bicycles',
    unicode: '1f6b3',
  },
  'woman-biking': {
    name: 'woman-biking',
    unicode: '1f6b4-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-biking#skin-tone-2',
        unicode: '1f6b4-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-biking#skin-tone-3',
        unicode: '1f6b4-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-biking#skin-tone-4',
        unicode: '1f6b4-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-biking#skin-tone-5',
        unicode: '1f6b4-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-biking#skin-tone-6',
        unicode: '1f6b4-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-biking': {
    name: 'man-biking',
    unicode: '1f6b4-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-biking#skin-tone-2',
        unicode: '1f6b4-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-biking#skin-tone-3',
        unicode: '1f6b4-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-biking#skin-tone-4',
        unicode: '1f6b4-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-biking#skin-tone-5',
        unicode: '1f6b4-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-biking#skin-tone-6',
        unicode: '1f6b4-1f3ff-200d-2642-fe0f',
      },
    },
  },
  bicyclist: {
    name: 'bicyclist',
    unicode: '1f6b4',
    skinVariations: {
      '2': {
        name: 'bicyclist#skin-tone-2',
        unicode: '1f6b4-1f3fb',
      },
      '3': {
        name: 'bicyclist#skin-tone-3',
        unicode: '1f6b4-1f3fc',
      },
      '4': {
        name: 'bicyclist#skin-tone-4',
        unicode: '1f6b4-1f3fd',
      },
      '5': {
        name: 'bicyclist#skin-tone-5',
        unicode: '1f6b4-1f3fe',
      },
      '6': {
        name: 'bicyclist#skin-tone-6',
        unicode: '1f6b4-1f3ff',
      },
    },
  },
  'woman-mountain-biking': {
    name: 'woman-mountain-biking',
    unicode: '1f6b5-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-mountain-biking#skin-tone-2',
        unicode: '1f6b5-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-mountain-biking#skin-tone-3',
        unicode: '1f6b5-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-mountain-biking#skin-tone-4',
        unicode: '1f6b5-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-mountain-biking#skin-tone-5',
        unicode: '1f6b5-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-mountain-biking#skin-tone-6',
        unicode: '1f6b5-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-mountain-biking': {
    name: 'man-mountain-biking',
    unicode: '1f6b5-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-mountain-biking#skin-tone-2',
        unicode: '1f6b5-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-mountain-biking#skin-tone-3',
        unicode: '1f6b5-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-mountain-biking#skin-tone-4',
        unicode: '1f6b5-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-mountain-biking#skin-tone-5',
        unicode: '1f6b5-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-mountain-biking#skin-tone-6',
        unicode: '1f6b5-1f3ff-200d-2642-fe0f',
      },
    },
  },
  mountain_bicyclist: {
    name: 'mountain_bicyclist',
    unicode: '1f6b5',
    skinVariations: {
      '2': {
        name: 'mountain_bicyclist#skin-tone-2',
        unicode: '1f6b5-1f3fb',
      },
      '3': {
        name: 'mountain_bicyclist#skin-tone-3',
        unicode: '1f6b5-1f3fc',
      },
      '4': {
        name: 'mountain_bicyclist#skin-tone-4',
        unicode: '1f6b5-1f3fd',
      },
      '5': {
        name: 'mountain_bicyclist#skin-tone-5',
        unicode: '1f6b5-1f3fe',
      },
      '6': {
        name: 'mountain_bicyclist#skin-tone-6',
        unicode: '1f6b5-1f3ff',
      },
    },
  },
  'woman-walking': {
    name: 'woman-walking',
    unicode: '1f6b6-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-walking#skin-tone-2',
        unicode: '1f6b6-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-walking#skin-tone-3',
        unicode: '1f6b6-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-walking#skin-tone-4',
        unicode: '1f6b6-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-walking#skin-tone-5',
        unicode: '1f6b6-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-walking#skin-tone-6',
        unicode: '1f6b6-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-walking': {
    name: 'man-walking',
    unicode: '1f6b6-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-walking#skin-tone-2',
        unicode: '1f6b6-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-walking#skin-tone-3',
        unicode: '1f6b6-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-walking#skin-tone-4',
        unicode: '1f6b6-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-walking#skin-tone-5',
        unicode: '1f6b6-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-walking#skin-tone-6',
        unicode: '1f6b6-1f3ff-200d-2642-fe0f',
      },
    },
  },
  walking: {
    name: 'walking',
    unicode: '1f6b6',
    skinVariations: {
      '2': {
        name: 'walking#skin-tone-2',
        unicode: '1f6b6-1f3fb',
      },
      '3': {
        name: 'walking#skin-tone-3',
        unicode: '1f6b6-1f3fc',
      },
      '4': {
        name: 'walking#skin-tone-4',
        unicode: '1f6b6-1f3fd',
      },
      '5': {
        name: 'walking#skin-tone-5',
        unicode: '1f6b6-1f3fe',
      },
      '6': {
        name: 'walking#skin-tone-6',
        unicode: '1f6b6-1f3ff',
      },
    },
  },
  no_pedestrians: {
    name: 'no_pedestrians',
    unicode: '1f6b7',
  },
  children_crossing: {
    name: 'children_crossing',
    unicode: '1f6b8',
  },
  mens: {
    name: 'mens',
    unicode: '1f6b9',
  },
  womens: {
    name: 'womens',
    unicode: '1f6ba',
  },
  restroom: {
    name: 'restroom',
    unicode: '1f6bb',
  },
  baby_symbol: {
    name: 'baby_symbol',
    unicode: '1f6bc',
  },
  toilet: {
    name: 'toilet',
    unicode: '1f6bd',
  },
  wc: {
    name: 'wc',
    unicode: '1f6be',
  },
  shower: {
    name: 'shower',
    unicode: '1f6bf',
  },
  bath: {
    name: 'bath',
    unicode: '1f6c0',
    skinVariations: {
      '2': {
        name: 'bath#skin-tone-2',
        unicode: '1f6c0-1f3fb',
      },
      '3': {
        name: 'bath#skin-tone-3',
        unicode: '1f6c0-1f3fc',
      },
      '4': {
        name: 'bath#skin-tone-4',
        unicode: '1f6c0-1f3fd',
      },
      '5': {
        name: 'bath#skin-tone-5',
        unicode: '1f6c0-1f3fe',
      },
      '6': {
        name: 'bath#skin-tone-6',
        unicode: '1f6c0-1f3ff',
      },
    },
  },
  bathtub: {
    name: 'bathtub',
    unicode: '1f6c1',
  },
  passport_control: {
    name: 'passport_control',
    unicode: '1f6c2',
  },
  customs: {
    name: 'customs',
    unicode: '1f6c3',
  },
  baggage_claim: {
    name: 'baggage_claim',
    unicode: '1f6c4',
  },
  left_luggage: {
    name: 'left_luggage',
    unicode: '1f6c5',
  },
  couch_and_lamp: {
    name: 'couch_and_lamp',
    unicode: '1f6cb-fe0f',
  },
  sleeping_accommodation: {
    name: 'sleeping_accommodation',
    unicode: '1f6cc',
    skinVariations: {
      '2': {
        name: 'sleeping_accommodation#skin-tone-2',
        unicode: '1f6cc-1f3fb',
      },
      '3': {
        name: 'sleeping_accommodation#skin-tone-3',
        unicode: '1f6cc-1f3fc',
      },
      '4': {
        name: 'sleeping_accommodation#skin-tone-4',
        unicode: '1f6cc-1f3fd',
      },
      '5': {
        name: 'sleeping_accommodation#skin-tone-5',
        unicode: '1f6cc-1f3fe',
      },
      '6': {
        name: 'sleeping_accommodation#skin-tone-6',
        unicode: '1f6cc-1f3ff',
      },
    },
  },
  shopping_bags: {
    name: 'shopping_bags',
    unicode: '1f6cd-fe0f',
  },
  bellhop_bell: {
    name: 'bellhop_bell',
    unicode: '1f6ce-fe0f',
  },
  bed: {
    name: 'bed',
    unicode: '1f6cf-fe0f',
  },
  place_of_worship: {
    name: 'place_of_worship',
    unicode: '1f6d0',
  },
  octagonal_sign: {
    name: 'octagonal_sign',
    unicode: '1f6d1',
  },
  shopping_trolley: {
    name: 'shopping_trolley',
    unicode: '1f6d2',
  },
  hindu_temple: {
    name: 'hindu_temple',
    unicode: '1f6d5',
  },
  hut: {
    name: 'hut',
    unicode: '1f6d6',
  },
  elevator: {
    name: 'elevator',
    unicode: '1f6d7',
  },
  playground_slide: {
    name: 'playground_slide',
    unicode: '1f6dd',
  },
  wheel: {
    name: 'wheel',
    unicode: '1f6de',
  },
  ring_buoy: {
    name: 'ring_buoy',
    unicode: '1f6df',
  },
  hammer_and_wrench: {
    name: 'hammer_and_wrench',
    unicode: '1f6e0-fe0f',
  },
  shield: {
    name: 'shield',
    unicode: '1f6e1-fe0f',
  },
  oil_drum: {
    name: 'oil_drum',
    unicode: '1f6e2-fe0f',
  },
  motorway: {
    name: 'motorway',
    unicode: '1f6e3-fe0f',
  },
  railway_track: {
    name: 'railway_track',
    unicode: '1f6e4-fe0f',
  },
  motor_boat: {
    name: 'motor_boat',
    unicode: '1f6e5-fe0f',
  },
  small_airplane: {
    name: 'small_airplane',
    unicode: '1f6e9-fe0f',
  },
  airplane_departure: {
    name: 'airplane_departure',
    unicode: '1f6eb',
  },
  airplane_arriving: {
    name: 'airplane_arriving',
    unicode: '1f6ec',
  },
  satellite: {
    name: 'satellite',
    unicode: '1f6f0-fe0f',
  },
  passenger_ship: {
    name: 'passenger_ship',
    unicode: '1f6f3-fe0f',
  },
  scooter: {
    name: 'scooter',
    unicode: '1f6f4',
  },
  motor_scooter: {
    name: 'motor_scooter',
    unicode: '1f6f5',
  },
  canoe: {
    name: 'canoe',
    unicode: '1f6f6',
  },
  sled: {
    name: 'sled',
    unicode: '1f6f7',
  },
  flying_saucer: {
    name: 'flying_saucer',
    unicode: '1f6f8',
  },
  skateboard: {
    name: 'skateboard',
    unicode: '1f6f9',
  },
  auto_rickshaw: {
    name: 'auto_rickshaw',
    unicode: '1f6fa',
  },
  pickup_truck: {
    name: 'pickup_truck',
    unicode: '1f6fb',
  },
  roller_skate: {
    name: 'roller_skate',
    unicode: '1f6fc',
  },
  large_orange_circle: {
    name: 'large_orange_circle',
    unicode: '1f7e0',
  },
  large_yellow_circle: {
    name: 'large_yellow_circle',
    unicode: '1f7e1',
  },
  large_green_circle: {
    name: 'large_green_circle',
    unicode: '1f7e2',
  },
  large_purple_circle: {
    name: 'large_purple_circle',
    unicode: '1f7e3',
  },
  large_brown_circle: {
    name: 'large_brown_circle',
    unicode: '1f7e4',
  },
  large_red_square: {
    name: 'large_red_square',
    unicode: '1f7e5',
  },
  large_blue_square: {
    name: 'large_blue_square',
    unicode: '1f7e6',
  },
  large_orange_square: {
    name: 'large_orange_square',
    unicode: '1f7e7',
  },
  large_yellow_square: {
    name: 'large_yellow_square',
    unicode: '1f7e8',
  },
  large_green_square: {
    name: 'large_green_square',
    unicode: '1f7e9',
  },
  large_purple_square: {
    name: 'large_purple_square',
    unicode: '1f7ea',
  },
  large_brown_square: {
    name: 'large_brown_square',
    unicode: '1f7eb',
  },
  heavy_equals_sign: {
    name: 'heavy_equals_sign',
    unicode: '1f7f0',
  },
  pinched_fingers: {
    name: 'pinched_fingers',
    unicode: '1f90c',
    skinVariations: {
      '2': {
        name: 'pinched_fingers#skin-tone-2',
        unicode: '1f90c-1f3fb',
      },
      '3': {
        name: 'pinched_fingers#skin-tone-3',
        unicode: '1f90c-1f3fc',
      },
      '4': {
        name: 'pinched_fingers#skin-tone-4',
        unicode: '1f90c-1f3fd',
      },
      '5': {
        name: 'pinched_fingers#skin-tone-5',
        unicode: '1f90c-1f3fe',
      },
      '6': {
        name: 'pinched_fingers#skin-tone-6',
        unicode: '1f90c-1f3ff',
      },
    },
  },
  white_heart: {
    name: 'white_heart',
    unicode: '1f90d',
  },
  brown_heart: {
    name: 'brown_heart',
    unicode: '1f90e',
  },
  pinching_hand: {
    name: 'pinching_hand',
    unicode: '1f90f',
    skinVariations: {
      '2': {
        name: 'pinching_hand#skin-tone-2',
        unicode: '1f90f-1f3fb',
      },
      '3': {
        name: 'pinching_hand#skin-tone-3',
        unicode: '1f90f-1f3fc',
      },
      '4': {
        name: 'pinching_hand#skin-tone-4',
        unicode: '1f90f-1f3fd',
      },
      '5': {
        name: 'pinching_hand#skin-tone-5',
        unicode: '1f90f-1f3fe',
      },
      '6': {
        name: 'pinching_hand#skin-tone-6',
        unicode: '1f90f-1f3ff',
      },
    },
  },
  zipper_mouth_face: {
    name: 'zipper_mouth_face',
    unicode: '1f910',
  },
  money_mouth_face: {
    name: 'money_mouth_face',
    unicode: '1f911',
  },
  face_with_thermometer: {
    name: 'face_with_thermometer',
    unicode: '1f912',
  },
  nerd_face: {
    name: 'nerd_face',
    unicode: '1f913',
  },
  thinking_face: {
    name: 'thinking_face',
    unicode: '1f914',
  },
  face_with_head_bandage: {
    name: 'face_with_head_bandage',
    unicode: '1f915',
  },
  robot_face: {
    name: 'robot_face',
    unicode: '1f916',
  },
  hugging_face: {
    name: 'hugging_face',
    unicode: '1f917',
  },
  the_horns: {
    name: 'the_horns',
    unicode: '1f918',
    skinVariations: {
      '2': {
        name: 'the_horns#skin-tone-2',
        unicode: '1f918-1f3fb',
      },
      '3': {
        name: 'the_horns#skin-tone-3',
        unicode: '1f918-1f3fc',
      },
      '4': {
        name: 'the_horns#skin-tone-4',
        unicode: '1f918-1f3fd',
      },
      '5': {
        name: 'the_horns#skin-tone-5',
        unicode: '1f918-1f3fe',
      },
      '6': {
        name: 'the_horns#skin-tone-6',
        unicode: '1f918-1f3ff',
      },
    },
  },
  sign_of_the_horns: {
    name: 'sign_of_the_horns',
    unicode: '1f918',
    aliasOf: 'the_horns',
    skinVariations: {
      '2': {
        name: 'sign_of_the_horns#skin-tone-2',
        unicode: '1f918-1f3fb',
      },
      '3': {
        name: 'sign_of_the_horns#skin-tone-3',
        unicode: '1f918-1f3fc',
      },
      '4': {
        name: 'sign_of_the_horns#skin-tone-4',
        unicode: '1f918-1f3fd',
      },
      '5': {
        name: 'sign_of_the_horns#skin-tone-5',
        unicode: '1f918-1f3fe',
      },
      '6': {
        name: 'sign_of_the_horns#skin-tone-6',
        unicode: '1f918-1f3ff',
      },
    },
  },
  call_me_hand: {
    name: 'call_me_hand',
    unicode: '1f919',
    skinVariations: {
      '2': {
        name: 'call_me_hand#skin-tone-2',
        unicode: '1f919-1f3fb',
      },
      '3': {
        name: 'call_me_hand#skin-tone-3',
        unicode: '1f919-1f3fc',
      },
      '4': {
        name: 'call_me_hand#skin-tone-4',
        unicode: '1f919-1f3fd',
      },
      '5': {
        name: 'call_me_hand#skin-tone-5',
        unicode: '1f919-1f3fe',
      },
      '6': {
        name: 'call_me_hand#skin-tone-6',
        unicode: '1f919-1f3ff',
      },
    },
  },
  raised_back_of_hand: {
    name: 'raised_back_of_hand',
    unicode: '1f91a',
    skinVariations: {
      '2': {
        name: 'raised_back_of_hand#skin-tone-2',
        unicode: '1f91a-1f3fb',
      },
      '3': {
        name: 'raised_back_of_hand#skin-tone-3',
        unicode: '1f91a-1f3fc',
      },
      '4': {
        name: 'raised_back_of_hand#skin-tone-4',
        unicode: '1f91a-1f3fd',
      },
      '5': {
        name: 'raised_back_of_hand#skin-tone-5',
        unicode: '1f91a-1f3fe',
      },
      '6': {
        name: 'raised_back_of_hand#skin-tone-6',
        unicode: '1f91a-1f3ff',
      },
    },
  },
  'left-facing_fist': {
    name: 'left-facing_fist',
    unicode: '1f91b',
    skinVariations: {
      '2': {
        name: 'left-facing_fist#skin-tone-2',
        unicode: '1f91b-1f3fb',
      },
      '3': {
        name: 'left-facing_fist#skin-tone-3',
        unicode: '1f91b-1f3fc',
      },
      '4': {
        name: 'left-facing_fist#skin-tone-4',
        unicode: '1f91b-1f3fd',
      },
      '5': {
        name: 'left-facing_fist#skin-tone-5',
        unicode: '1f91b-1f3fe',
      },
      '6': {
        name: 'left-facing_fist#skin-tone-6',
        unicode: '1f91b-1f3ff',
      },
    },
  },
  'right-facing_fist': {
    name: 'right-facing_fist',
    unicode: '1f91c',
    skinVariations: {
      '2': {
        name: 'right-facing_fist#skin-tone-2',
        unicode: '1f91c-1f3fb',
      },
      '3': {
        name: 'right-facing_fist#skin-tone-3',
        unicode: '1f91c-1f3fc',
      },
      '4': {
        name: 'right-facing_fist#skin-tone-4',
        unicode: '1f91c-1f3fd',
      },
      '5': {
        name: 'right-facing_fist#skin-tone-5',
        unicode: '1f91c-1f3fe',
      },
      '6': {
        name: 'right-facing_fist#skin-tone-6',
        unicode: '1f91c-1f3ff',
      },
    },
  },
  handshake: {
    name: 'handshake',
    unicode: '1f91d',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'handshake#skin-tone-2',
        unicode: '1f91d-1f3fb',
      },
      '3': {
        name: 'handshake#skin-tone-3',
        unicode: '1f91d-1f3fc',
      },
      '4': {
        name: 'handshake#skin-tone-4',
        unicode: '1f91d-1f3fd',
      },
      '5': {
        name: 'handshake#skin-tone-5',
        unicode: '1f91d-1f3fe',
      },
      '6': {
        name: 'handshake#skin-tone-6',
        unicode: '1f91d-1f3ff',
      },
      '2-3': {
        name: 'handshake#skin-tone-2-3',
        unicode: '1faf1-1f3fb-200d-1faf2-1f3fc',
      },
      '2-4': {
        name: 'handshake#skin-tone-2-4',
        unicode: '1faf1-1f3fb-200d-1faf2-1f3fd',
      },
      '2-5': {
        name: 'handshake#skin-tone-2-5',
        unicode: '1faf1-1f3fb-200d-1faf2-1f3fe',
      },
      '2-6': {
        name: 'handshake#skin-tone-2-6',
        unicode: '1faf1-1f3fb-200d-1faf2-1f3ff',
      },
      '3-2': {
        name: 'handshake#skin-tone-3-2',
        unicode: '1faf1-1f3fc-200d-1faf2-1f3fb',
      },
      '3-4': {
        name: 'handshake#skin-tone-3-4',
        unicode: '1faf1-1f3fc-200d-1faf2-1f3fd',
      },
      '3-5': {
        name: 'handshake#skin-tone-3-5',
        unicode: '1faf1-1f3fc-200d-1faf2-1f3fe',
      },
      '3-6': {
        name: 'handshake#skin-tone-3-6',
        unicode: '1faf1-1f3fc-200d-1faf2-1f3ff',
      },
      '4-2': {
        name: 'handshake#skin-tone-4-2',
        unicode: '1faf1-1f3fd-200d-1faf2-1f3fb',
      },
      '4-3': {
        name: 'handshake#skin-tone-4-3',
        unicode: '1faf1-1f3fd-200d-1faf2-1f3fc',
      },
      '4-5': {
        name: 'handshake#skin-tone-4-5',
        unicode: '1faf1-1f3fd-200d-1faf2-1f3fe',
      },
      '4-6': {
        name: 'handshake#skin-tone-4-6',
        unicode: '1faf1-1f3fd-200d-1faf2-1f3ff',
      },
      '5-2': {
        name: 'handshake#skin-tone-5-2',
        unicode: '1faf1-1f3fe-200d-1faf2-1f3fb',
      },
      '5-3': {
        name: 'handshake#skin-tone-5-3',
        unicode: '1faf1-1f3fe-200d-1faf2-1f3fc',
      },
      '5-4': {
        name: 'handshake#skin-tone-5-4',
        unicode: '1faf1-1f3fe-200d-1faf2-1f3fd',
      },
      '5-6': {
        name: 'handshake#skin-tone-5-6',
        unicode: '1faf1-1f3fe-200d-1faf2-1f3ff',
      },
      '6-2': {
        name: 'handshake#skin-tone-6-2',
        unicode: '1faf1-1f3ff-200d-1faf2-1f3fb',
      },
      '6-3': {
        name: 'handshake#skin-tone-6-3',
        unicode: '1faf1-1f3ff-200d-1faf2-1f3fc',
      },
      '6-4': {
        name: 'handshake#skin-tone-6-4',
        unicode: '1faf1-1f3ff-200d-1faf2-1f3fd',
      },
      '6-5': {
        name: 'handshake#skin-tone-6-5',
        unicode: '1faf1-1f3ff-200d-1faf2-1f3fe',
      },
    },
  },
  crossed_fingers: {
    name: 'crossed_fingers',
    unicode: '1f91e',
    skinVariations: {
      '2': {
        name: 'crossed_fingers#skin-tone-2',
        unicode: '1f91e-1f3fb',
      },
      '3': {
        name: 'crossed_fingers#skin-tone-3',
        unicode: '1f91e-1f3fc',
      },
      '4': {
        name: 'crossed_fingers#skin-tone-4',
        unicode: '1f91e-1f3fd',
      },
      '5': {
        name: 'crossed_fingers#skin-tone-5',
        unicode: '1f91e-1f3fe',
      },
      '6': {
        name: 'crossed_fingers#skin-tone-6',
        unicode: '1f91e-1f3ff',
      },
    },
  },
  hand_with_index_and_middle_fingers_crossed: {
    name: 'hand_with_index_and_middle_fingers_crossed',
    unicode: '1f91e',
    aliasOf: 'crossed_fingers',
    skinVariations: {
      '2': {
        name: 'hand_with_index_and_middle_fingers_crossed#skin-tone-2',
        unicode: '1f91e-1f3fb',
      },
      '3': {
        name: 'hand_with_index_and_middle_fingers_crossed#skin-tone-3',
        unicode: '1f91e-1f3fc',
      },
      '4': {
        name: 'hand_with_index_and_middle_fingers_crossed#skin-tone-4',
        unicode: '1f91e-1f3fd',
      },
      '5': {
        name: 'hand_with_index_and_middle_fingers_crossed#skin-tone-5',
        unicode: '1f91e-1f3fe',
      },
      '6': {
        name: 'hand_with_index_and_middle_fingers_crossed#skin-tone-6',
        unicode: '1f91e-1f3ff',
      },
    },
  },
  i_love_you_hand_sign: {
    name: 'i_love_you_hand_sign',
    unicode: '1f91f',
    skinVariations: {
      '2': {
        name: 'i_love_you_hand_sign#skin-tone-2',
        unicode: '1f91f-1f3fb',
      },
      '3': {
        name: 'i_love_you_hand_sign#skin-tone-3',
        unicode: '1f91f-1f3fc',
      },
      '4': {
        name: 'i_love_you_hand_sign#skin-tone-4',
        unicode: '1f91f-1f3fd',
      },
      '5': {
        name: 'i_love_you_hand_sign#skin-tone-5',
        unicode: '1f91f-1f3fe',
      },
      '6': {
        name: 'i_love_you_hand_sign#skin-tone-6',
        unicode: '1f91f-1f3ff',
      },
    },
  },
  face_with_cowboy_hat: {
    name: 'face_with_cowboy_hat',
    unicode: '1f920',
  },
  clown_face: {
    name: 'clown_face',
    unicode: '1f921',
  },
  nauseated_face: {
    name: 'nauseated_face',
    unicode: '1f922',
  },
  rolling_on_the_floor_laughing: {
    name: 'rolling_on_the_floor_laughing',
    unicode: '1f923',
  },
  drooling_face: {
    name: 'drooling_face',
    unicode: '1f924',
  },
  lying_face: {
    name: 'lying_face',
    unicode: '1f925',
  },
  'woman-facepalming': {
    name: 'woman-facepalming',
    unicode: '1f926-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-facepalming#skin-tone-2',
        unicode: '1f926-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-facepalming#skin-tone-3',
        unicode: '1f926-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-facepalming#skin-tone-4',
        unicode: '1f926-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-facepalming#skin-tone-5',
        unicode: '1f926-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-facepalming#skin-tone-6',
        unicode: '1f926-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-facepalming': {
    name: 'man-facepalming',
    unicode: '1f926-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-facepalming#skin-tone-2',
        unicode: '1f926-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-facepalming#skin-tone-3',
        unicode: '1f926-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-facepalming#skin-tone-4',
        unicode: '1f926-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-facepalming#skin-tone-5',
        unicode: '1f926-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-facepalming#skin-tone-6',
        unicode: '1f926-1f3ff-200d-2642-fe0f',
      },
    },
  },
  face_palm: {
    name: 'face_palm',
    unicode: '1f926',
    skinVariations: {
      '2': {
        name: 'face_palm#skin-tone-2',
        unicode: '1f926-1f3fb',
      },
      '3': {
        name: 'face_palm#skin-tone-3',
        unicode: '1f926-1f3fc',
      },
      '4': {
        name: 'face_palm#skin-tone-4',
        unicode: '1f926-1f3fd',
      },
      '5': {
        name: 'face_palm#skin-tone-5',
        unicode: '1f926-1f3fe',
      },
      '6': {
        name: 'face_palm#skin-tone-6',
        unicode: '1f926-1f3ff',
      },
    },
  },
  sneezing_face: {
    name: 'sneezing_face',
    unicode: '1f927',
  },
  face_with_raised_eyebrow: {
    name: 'face_with_raised_eyebrow',
    unicode: '1f928',
  },
  face_with_one_eyebrow_raised: {
    name: 'face_with_one_eyebrow_raised',
    unicode: '1f928',
    aliasOf: 'face_with_raised_eyebrow',
  },
  'star-struck': {
    name: 'star-struck',
    unicode: '1f929',
  },
  grinning_face_with_star_eyes: {
    name: 'grinning_face_with_star_eyes',
    unicode: '1f929',
    aliasOf: 'star-struck',
  },
  zany_face: {
    name: 'zany_face',
    unicode: '1f92a',
  },
  grinning_face_with_one_large_and_one_small_eye: {
    name: 'grinning_face_with_one_large_and_one_small_eye',
    unicode: '1f92a',
    aliasOf: 'zany_face',
  },
  shushing_face: {
    name: 'shushing_face',
    unicode: '1f92b',
  },
  face_with_finger_covering_closed_lips: {
    name: 'face_with_finger_covering_closed_lips',
    unicode: '1f92b',
    aliasOf: 'shushing_face',
  },
  face_with_symbols_on_mouth: {
    name: 'face_with_symbols_on_mouth',
    unicode: '1f92c',
  },
  serious_face_with_symbols_covering_mouth: {
    name: 'serious_face_with_symbols_covering_mouth',
    unicode: '1f92c',
    aliasOf: 'face_with_symbols_on_mouth',
  },
  face_with_hand_over_mouth: {
    name: 'face_with_hand_over_mouth',
    unicode: '1f92d',
  },
  smiling_face_with_smiling_eyes_and_hand_covering_mouth: {
    name: 'smiling_face_with_smiling_eyes_and_hand_covering_mouth',
    unicode: '1f92d',
    aliasOf: 'face_with_hand_over_mouth',
  },
  face_vomiting: {
    name: 'face_vomiting',
    unicode: '1f92e',
  },
  face_with_open_mouth_vomiting: {
    name: 'face_with_open_mouth_vomiting',
    unicode: '1f92e',
    aliasOf: 'face_vomiting',
  },
  exploding_head: {
    name: 'exploding_head',
    unicode: '1f92f',
  },
  shocked_face_with_exploding_head: {
    name: 'shocked_face_with_exploding_head',
    unicode: '1f92f',
    aliasOf: 'exploding_head',
  },
  pregnant_woman: {
    name: 'pregnant_woman',
    unicode: '1f930',
    skinVariations: {
      '2': {
        name: 'pregnant_woman#skin-tone-2',
        unicode: '1f930-1f3fb',
      },
      '3': {
        name: 'pregnant_woman#skin-tone-3',
        unicode: '1f930-1f3fc',
      },
      '4': {
        name: 'pregnant_woman#skin-tone-4',
        unicode: '1f930-1f3fd',
      },
      '5': {
        name: 'pregnant_woman#skin-tone-5',
        unicode: '1f930-1f3fe',
      },
      '6': {
        name: 'pregnant_woman#skin-tone-6',
        unicode: '1f930-1f3ff',
      },
    },
  },
  'breast-feeding': {
    name: 'breast-feeding',
    unicode: '1f931',
    skinVariations: {
      '2': {
        name: 'breast-feeding#skin-tone-2',
        unicode: '1f931-1f3fb',
      },
      '3': {
        name: 'breast-feeding#skin-tone-3',
        unicode: '1f931-1f3fc',
      },
      '4': {
        name: 'breast-feeding#skin-tone-4',
        unicode: '1f931-1f3fd',
      },
      '5': {
        name: 'breast-feeding#skin-tone-5',
        unicode: '1f931-1f3fe',
      },
      '6': {
        name: 'breast-feeding#skin-tone-6',
        unicode: '1f931-1f3ff',
      },
    },
  },
  palms_up_together: {
    name: 'palms_up_together',
    unicode: '1f932',
    skinVariations: {
      '2': {
        name: 'palms_up_together#skin-tone-2',
        unicode: '1f932-1f3fb',
      },
      '3': {
        name: 'palms_up_together#skin-tone-3',
        unicode: '1f932-1f3fc',
      },
      '4': {
        name: 'palms_up_together#skin-tone-4',
        unicode: '1f932-1f3fd',
      },
      '5': {
        name: 'palms_up_together#skin-tone-5',
        unicode: '1f932-1f3fe',
      },
      '6': {
        name: 'palms_up_together#skin-tone-6',
        unicode: '1f932-1f3ff',
      },
    },
  },
  selfie: {
    name: 'selfie',
    unicode: '1f933',
    skinVariations: {
      '2': {
        name: 'selfie#skin-tone-2',
        unicode: '1f933-1f3fb',
      },
      '3': {
        name: 'selfie#skin-tone-3',
        unicode: '1f933-1f3fc',
      },
      '4': {
        name: 'selfie#skin-tone-4',
        unicode: '1f933-1f3fd',
      },
      '5': {
        name: 'selfie#skin-tone-5',
        unicode: '1f933-1f3fe',
      },
      '6': {
        name: 'selfie#skin-tone-6',
        unicode: '1f933-1f3ff',
      },
    },
  },
  prince: {
    name: 'prince',
    unicode: '1f934',
    skinVariations: {
      '2': {
        name: 'prince#skin-tone-2',
        unicode: '1f934-1f3fb',
      },
      '3': {
        name: 'prince#skin-tone-3',
        unicode: '1f934-1f3fc',
      },
      '4': {
        name: 'prince#skin-tone-4',
        unicode: '1f934-1f3fd',
      },
      '5': {
        name: 'prince#skin-tone-5',
        unicode: '1f934-1f3fe',
      },
      '6': {
        name: 'prince#skin-tone-6',
        unicode: '1f934-1f3ff',
      },
    },
  },
  woman_in_tuxedo: {
    name: 'woman_in_tuxedo',
    unicode: '1f935-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_in_tuxedo#skin-tone-2',
        unicode: '1f935-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_in_tuxedo#skin-tone-3',
        unicode: '1f935-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_in_tuxedo#skin-tone-4',
        unicode: '1f935-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_in_tuxedo#skin-tone-5',
        unicode: '1f935-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_in_tuxedo#skin-tone-6',
        unicode: '1f935-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_in_tuxedo: {
    name: 'man_in_tuxedo',
    unicode: '1f935-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_in_tuxedo#skin-tone-2',
        unicode: '1f935-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_in_tuxedo#skin-tone-3',
        unicode: '1f935-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_in_tuxedo#skin-tone-4',
        unicode: '1f935-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_in_tuxedo#skin-tone-5',
        unicode: '1f935-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_in_tuxedo#skin-tone-6',
        unicode: '1f935-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_in_tuxedo: {
    name: 'person_in_tuxedo',
    unicode: '1f935',
    skinVariations: {
      '2': {
        name: 'person_in_tuxedo#skin-tone-2',
        unicode: '1f935-1f3fb',
      },
      '3': {
        name: 'person_in_tuxedo#skin-tone-3',
        unicode: '1f935-1f3fc',
      },
      '4': {
        name: 'person_in_tuxedo#skin-tone-4',
        unicode: '1f935-1f3fd',
      },
      '5': {
        name: 'person_in_tuxedo#skin-tone-5',
        unicode: '1f935-1f3fe',
      },
      '6': {
        name: 'person_in_tuxedo#skin-tone-6',
        unicode: '1f935-1f3ff',
      },
    },
  },
  mrs_claus: {
    name: 'mrs_claus',
    unicode: '1f936',
    skinVariations: {
      '2': {
        name: 'mrs_claus#skin-tone-2',
        unicode: '1f936-1f3fb',
      },
      '3': {
        name: 'mrs_claus#skin-tone-3',
        unicode: '1f936-1f3fc',
      },
      '4': {
        name: 'mrs_claus#skin-tone-4',
        unicode: '1f936-1f3fd',
      },
      '5': {
        name: 'mrs_claus#skin-tone-5',
        unicode: '1f936-1f3fe',
      },
      '6': {
        name: 'mrs_claus#skin-tone-6',
        unicode: '1f936-1f3ff',
      },
    },
  },
  mother_christmas: {
    name: 'mother_christmas',
    unicode: '1f936',
    aliasOf: 'mrs_claus',
    skinVariations: {
      '2': {
        name: 'mother_christmas#skin-tone-2',
        unicode: '1f936-1f3fb',
      },
      '3': {
        name: 'mother_christmas#skin-tone-3',
        unicode: '1f936-1f3fc',
      },
      '4': {
        name: 'mother_christmas#skin-tone-4',
        unicode: '1f936-1f3fd',
      },
      '5': {
        name: 'mother_christmas#skin-tone-5',
        unicode: '1f936-1f3fe',
      },
      '6': {
        name: 'mother_christmas#skin-tone-6',
        unicode: '1f936-1f3ff',
      },
    },
  },
  'woman-shrugging': {
    name: 'woman-shrugging',
    unicode: '1f937-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-shrugging#skin-tone-2',
        unicode: '1f937-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-shrugging#skin-tone-3',
        unicode: '1f937-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-shrugging#skin-tone-4',
        unicode: '1f937-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-shrugging#skin-tone-5',
        unicode: '1f937-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-shrugging#skin-tone-6',
        unicode: '1f937-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-shrugging': {
    name: 'man-shrugging',
    unicode: '1f937-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-shrugging#skin-tone-2',
        unicode: '1f937-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-shrugging#skin-tone-3',
        unicode: '1f937-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-shrugging#skin-tone-4',
        unicode: '1f937-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-shrugging#skin-tone-5',
        unicode: '1f937-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-shrugging#skin-tone-6',
        unicode: '1f937-1f3ff-200d-2642-fe0f',
      },
    },
  },
  shrug: {
    name: 'shrug',
    unicode: '1f937',
    skinVariations: {
      '2': {
        name: 'shrug#skin-tone-2',
        unicode: '1f937-1f3fb',
      },
      '3': {
        name: 'shrug#skin-tone-3',
        unicode: '1f937-1f3fc',
      },
      '4': {
        name: 'shrug#skin-tone-4',
        unicode: '1f937-1f3fd',
      },
      '5': {
        name: 'shrug#skin-tone-5',
        unicode: '1f937-1f3fe',
      },
      '6': {
        name: 'shrug#skin-tone-6',
        unicode: '1f937-1f3ff',
      },
    },
  },
  'woman-cartwheeling': {
    name: 'woman-cartwheeling',
    unicode: '1f938-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-cartwheeling#skin-tone-2',
        unicode: '1f938-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-cartwheeling#skin-tone-3',
        unicode: '1f938-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-cartwheeling#skin-tone-4',
        unicode: '1f938-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-cartwheeling#skin-tone-5',
        unicode: '1f938-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-cartwheeling#skin-tone-6',
        unicode: '1f938-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-cartwheeling': {
    name: 'man-cartwheeling',
    unicode: '1f938-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-cartwheeling#skin-tone-2',
        unicode: '1f938-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-cartwheeling#skin-tone-3',
        unicode: '1f938-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-cartwheeling#skin-tone-4',
        unicode: '1f938-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-cartwheeling#skin-tone-5',
        unicode: '1f938-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-cartwheeling#skin-tone-6',
        unicode: '1f938-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_doing_cartwheel: {
    name: 'person_doing_cartwheel',
    unicode: '1f938',
    skinVariations: {
      '2': {
        name: 'person_doing_cartwheel#skin-tone-2',
        unicode: '1f938-1f3fb',
      },
      '3': {
        name: 'person_doing_cartwheel#skin-tone-3',
        unicode: '1f938-1f3fc',
      },
      '4': {
        name: 'person_doing_cartwheel#skin-tone-4',
        unicode: '1f938-1f3fd',
      },
      '5': {
        name: 'person_doing_cartwheel#skin-tone-5',
        unicode: '1f938-1f3fe',
      },
      '6': {
        name: 'person_doing_cartwheel#skin-tone-6',
        unicode: '1f938-1f3ff',
      },
    },
  },
  'woman-juggling': {
    name: 'woman-juggling',
    unicode: '1f939-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-juggling#skin-tone-2',
        unicode: '1f939-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-juggling#skin-tone-3',
        unicode: '1f939-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-juggling#skin-tone-4',
        unicode: '1f939-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-juggling#skin-tone-5',
        unicode: '1f939-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-juggling#skin-tone-6',
        unicode: '1f939-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-juggling': {
    name: 'man-juggling',
    unicode: '1f939-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-juggling#skin-tone-2',
        unicode: '1f939-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-juggling#skin-tone-3',
        unicode: '1f939-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-juggling#skin-tone-4',
        unicode: '1f939-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-juggling#skin-tone-5',
        unicode: '1f939-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-juggling#skin-tone-6',
        unicode: '1f939-1f3ff-200d-2642-fe0f',
      },
    },
  },
  juggling: {
    name: 'juggling',
    unicode: '1f939',
    skinVariations: {
      '2': {
        name: 'juggling#skin-tone-2',
        unicode: '1f939-1f3fb',
      },
      '3': {
        name: 'juggling#skin-tone-3',
        unicode: '1f939-1f3fc',
      },
      '4': {
        name: 'juggling#skin-tone-4',
        unicode: '1f939-1f3fd',
      },
      '5': {
        name: 'juggling#skin-tone-5',
        unicode: '1f939-1f3fe',
      },
      '6': {
        name: 'juggling#skin-tone-6',
        unicode: '1f939-1f3ff',
      },
    },
  },
  fencer: {
    name: 'fencer',
    unicode: '1f93a',
  },
  'woman-wrestling': {
    name: 'woman-wrestling',
    unicode: '1f93c-200d-2640-fe0f',
  },
  'man-wrestling': {
    name: 'man-wrestling',
    unicode: '1f93c-200d-2642-fe0f',
  },
  wrestlers: {
    name: 'wrestlers',
    unicode: '1f93c',
  },
  'woman-playing-water-polo': {
    name: 'woman-playing-water-polo',
    unicode: '1f93d-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-playing-water-polo#skin-tone-2',
        unicode: '1f93d-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-playing-water-polo#skin-tone-3',
        unicode: '1f93d-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-playing-water-polo#skin-tone-4',
        unicode: '1f93d-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-playing-water-polo#skin-tone-5',
        unicode: '1f93d-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-playing-water-polo#skin-tone-6',
        unicode: '1f93d-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-playing-water-polo': {
    name: 'man-playing-water-polo',
    unicode: '1f93d-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-playing-water-polo#skin-tone-2',
        unicode: '1f93d-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-playing-water-polo#skin-tone-3',
        unicode: '1f93d-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-playing-water-polo#skin-tone-4',
        unicode: '1f93d-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-playing-water-polo#skin-tone-5',
        unicode: '1f93d-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-playing-water-polo#skin-tone-6',
        unicode: '1f93d-1f3ff-200d-2642-fe0f',
      },
    },
  },
  water_polo: {
    name: 'water_polo',
    unicode: '1f93d',
    skinVariations: {
      '2': {
        name: 'water_polo#skin-tone-2',
        unicode: '1f93d-1f3fb',
      },
      '3': {
        name: 'water_polo#skin-tone-3',
        unicode: '1f93d-1f3fc',
      },
      '4': {
        name: 'water_polo#skin-tone-4',
        unicode: '1f93d-1f3fd',
      },
      '5': {
        name: 'water_polo#skin-tone-5',
        unicode: '1f93d-1f3fe',
      },
      '6': {
        name: 'water_polo#skin-tone-6',
        unicode: '1f93d-1f3ff',
      },
    },
  },
  'woman-playing-handball': {
    name: 'woman-playing-handball',
    unicode: '1f93e-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-playing-handball#skin-tone-2',
        unicode: '1f93e-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-playing-handball#skin-tone-3',
        unicode: '1f93e-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-playing-handball#skin-tone-4',
        unicode: '1f93e-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-playing-handball#skin-tone-5',
        unicode: '1f93e-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-playing-handball#skin-tone-6',
        unicode: '1f93e-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-playing-handball': {
    name: 'man-playing-handball',
    unicode: '1f93e-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-playing-handball#skin-tone-2',
        unicode: '1f93e-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-playing-handball#skin-tone-3',
        unicode: '1f93e-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-playing-handball#skin-tone-4',
        unicode: '1f93e-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-playing-handball#skin-tone-5',
        unicode: '1f93e-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-playing-handball#skin-tone-6',
        unicode: '1f93e-1f3ff-200d-2642-fe0f',
      },
    },
  },
  handball: {
    name: 'handball',
    unicode: '1f93e',
    skinVariations: {
      '2': {
        name: 'handball#skin-tone-2',
        unicode: '1f93e-1f3fb',
      },
      '3': {
        name: 'handball#skin-tone-3',
        unicode: '1f93e-1f3fc',
      },
      '4': {
        name: 'handball#skin-tone-4',
        unicode: '1f93e-1f3fd',
      },
      '5': {
        name: 'handball#skin-tone-5',
        unicode: '1f93e-1f3fe',
      },
      '6': {
        name: 'handball#skin-tone-6',
        unicode: '1f93e-1f3ff',
      },
    },
  },
  diving_mask: {
    name: 'diving_mask',
    unicode: '1f93f',
  },
  wilted_flower: {
    name: 'wilted_flower',
    unicode: '1f940',
  },
  drum_with_drumsticks: {
    name: 'drum_with_drumsticks',
    unicode: '1f941',
  },
  clinking_glasses: {
    name: 'clinking_glasses',
    unicode: '1f942',
  },
  tumbler_glass: {
    name: 'tumbler_glass',
    unicode: '1f943',
  },
  spoon: {
    name: 'spoon',
    unicode: '1f944',
  },
  goal_net: {
    name: 'goal_net',
    unicode: '1f945',
  },
  first_place_medal: {
    name: 'first_place_medal',
    unicode: '1f947',
  },
  second_place_medal: {
    name: 'second_place_medal',
    unicode: '1f948',
  },
  third_place_medal: {
    name: 'third_place_medal',
    unicode: '1f949',
  },
  boxing_glove: {
    name: 'boxing_glove',
    unicode: '1f94a',
  },
  martial_arts_uniform: {
    name: 'martial_arts_uniform',
    unicode: '1f94b',
  },
  curling_stone: {
    name: 'curling_stone',
    unicode: '1f94c',
  },
  lacrosse: {
    name: 'lacrosse',
    unicode: '1f94d',
  },
  softball: {
    name: 'softball',
    unicode: '1f94e',
  },
  flying_disc: {
    name: 'flying_disc',
    unicode: '1f94f',
  },
  croissant: {
    name: 'croissant',
    unicode: '1f950',
  },
  avocado: {
    name: 'avocado',
    unicode: '1f951',
  },
  cucumber: {
    name: 'cucumber',
    unicode: '1f952',
  },
  bacon: {
    name: 'bacon',
    unicode: '1f953',
  },
  potato: {
    name: 'potato',
    unicode: '1f954',
  },
  carrot: {
    name: 'carrot',
    unicode: '1f955',
  },
  baguette_bread: {
    name: 'baguette_bread',
    unicode: '1f956',
  },
  green_salad: {
    name: 'green_salad',
    unicode: '1f957',
  },
  shallow_pan_of_food: {
    name: 'shallow_pan_of_food',
    unicode: '1f958',
  },
  stuffed_flatbread: {
    name: 'stuffed_flatbread',
    unicode: '1f959',
  },
  egg: {
    name: 'egg',
    unicode: '1f95a',
  },
  glass_of_milk: {
    name: 'glass_of_milk',
    unicode: '1f95b',
  },
  peanuts: {
    name: 'peanuts',
    unicode: '1f95c',
  },
  kiwifruit: {
    name: 'kiwifruit',
    unicode: '1f95d',
  },
  pancakes: {
    name: 'pancakes',
    unicode: '1f95e',
  },
  dumpling: {
    name: 'dumpling',
    unicode: '1f95f',
  },
  fortune_cookie: {
    name: 'fortune_cookie',
    unicode: '1f960',
  },
  takeout_box: {
    name: 'takeout_box',
    unicode: '1f961',
  },
  chopsticks: {
    name: 'chopsticks',
    unicode: '1f962',
  },
  bowl_with_spoon: {
    name: 'bowl_with_spoon',
    unicode: '1f963',
  },
  cup_with_straw: {
    name: 'cup_with_straw',
    unicode: '1f964',
  },
  coconut: {
    name: 'coconut',
    unicode: '1f965',
  },
  broccoli: {
    name: 'broccoli',
    unicode: '1f966',
  },
  pie: {
    name: 'pie',
    unicode: '1f967',
  },
  pretzel: {
    name: 'pretzel',
    unicode: '1f968',
  },
  cut_of_meat: {
    name: 'cut_of_meat',
    unicode: '1f969',
  },
  sandwich: {
    name: 'sandwich',
    unicode: '1f96a',
  },
  canned_food: {
    name: 'canned_food',
    unicode: '1f96b',
  },
  leafy_green: {
    name: 'leafy_green',
    unicode: '1f96c',
  },
  mango: {
    name: 'mango',
    unicode: '1f96d',
  },
  moon_cake: {
    name: 'moon_cake',
    unicode: '1f96e',
  },
  bagel: {
    name: 'bagel',
    unicode: '1f96f',
  },
  smiling_face_with_3_hearts: {
    name: 'smiling_face_with_3_hearts',
    unicode: '1f970',
  },
  yawning_face: {
    name: 'yawning_face',
    unicode: '1f971',
  },
  smiling_face_with_tear: {
    name: 'smiling_face_with_tear',
    unicode: '1f972',
  },
  partying_face: {
    name: 'partying_face',
    unicode: '1f973',
  },
  woozy_face: {
    name: 'woozy_face',
    unicode: '1f974',
  },
  hot_face: {
    name: 'hot_face',
    unicode: '1f975',
  },
  cold_face: {
    name: 'cold_face',
    unicode: '1f976',
  },
  ninja: {
    name: 'ninja',
    unicode: '1f977',
    skinVariations: {
      '2': {
        name: 'ninja#skin-tone-2',
        unicode: '1f977-1f3fb',
      },
      '3': {
        name: 'ninja#skin-tone-3',
        unicode: '1f977-1f3fc',
      },
      '4': {
        name: 'ninja#skin-tone-4',
        unicode: '1f977-1f3fd',
      },
      '5': {
        name: 'ninja#skin-tone-5',
        unicode: '1f977-1f3fe',
      },
      '6': {
        name: 'ninja#skin-tone-6',
        unicode: '1f977-1f3ff',
      },
    },
  },
  disguised_face: {
    name: 'disguised_face',
    unicode: '1f978',
  },
  face_holding_back_tears: {
    name: 'face_holding_back_tears',
    unicode: '1f979',
  },
  pleading_face: {
    name: 'pleading_face',
    unicode: '1f97a',
  },
  sari: {
    name: 'sari',
    unicode: '1f97b',
  },
  lab_coat: {
    name: 'lab_coat',
    unicode: '1f97c',
  },
  goggles: {
    name: 'goggles',
    unicode: '1f97d',
  },
  hiking_boot: {
    name: 'hiking_boot',
    unicode: '1f97e',
  },
  womans_flat_shoe: {
    name: 'womans_flat_shoe',
    unicode: '1f97f',
  },
  crab: {
    name: 'crab',
    unicode: '1f980',
  },
  lion_face: {
    name: 'lion_face',
    unicode: '1f981',
  },
  scorpion: {
    name: 'scorpion',
    unicode: '1f982',
  },
  turkey: {
    name: 'turkey',
    unicode: '1f983',
  },
  unicorn_face: {
    name: 'unicorn_face',
    unicode: '1f984',
  },
  eagle: {
    name: 'eagle',
    unicode: '1f985',
  },
  duck: {
    name: 'duck',
    unicode: '1f986',
  },
  bat: {
    name: 'bat',
    unicode: '1f987',
  },
  shark: {
    name: 'shark',
    unicode: '1f988',
  },
  owl: {
    name: 'owl',
    unicode: '1f989',
  },
  fox_face: {
    name: 'fox_face',
    unicode: '1f98a',
  },
  butterfly: {
    name: 'butterfly',
    unicode: '1f98b',
  },
  deer: {
    name: 'deer',
    unicode: '1f98c',
  },
  gorilla: {
    name: 'gorilla',
    unicode: '1f98d',
  },
  lizard: {
    name: 'lizard',
    unicode: '1f98e',
  },
  rhinoceros: {
    name: 'rhinoceros',
    unicode: '1f98f',
  },
  shrimp: {
    name: 'shrimp',
    unicode: '1f990',
  },
  squid: {
    name: 'squid',
    unicode: '1f991',
  },
  giraffe_face: {
    name: 'giraffe_face',
    unicode: '1f992',
  },
  zebra_face: {
    name: 'zebra_face',
    unicode: '1f993',
  },
  hedgehog: {
    name: 'hedgehog',
    unicode: '1f994',
  },
  sauropod: {
    name: 'sauropod',
    unicode: '1f995',
  },
  't-rex': {
    name: 't-rex',
    unicode: '1f996',
  },
  cricket: {
    name: 'cricket',
    unicode: '1f997',
  },
  kangaroo: {
    name: 'kangaroo',
    unicode: '1f998',
  },
  llama: {
    name: 'llama',
    unicode: '1f999',
  },
  peacock: {
    name: 'peacock',
    unicode: '1f99a',
  },
  hippopotamus: {
    name: 'hippopotamus',
    unicode: '1f99b',
  },
  parrot: {
    name: 'parrot',
    unicode: '1f99c',
  },
  raccoon: {
    name: 'raccoon',
    unicode: '1f99d',
  },
  lobster: {
    name: 'lobster',
    unicode: '1f99e',
  },
  mosquito: {
    name: 'mosquito',
    unicode: '1f99f',
  },
  microbe: {
    name: 'microbe',
    unicode: '1f9a0',
  },
  badger: {
    name: 'badger',
    unicode: '1f9a1',
  },
  swan: {
    name: 'swan',
    unicode: '1f9a2',
  },
  mammoth: {
    name: 'mammoth',
    unicode: '1f9a3',
  },
  dodo: {
    name: 'dodo',
    unicode: '1f9a4',
  },
  sloth: {
    name: 'sloth',
    unicode: '1f9a5',
  },
  otter: {
    name: 'otter',
    unicode: '1f9a6',
  },
  orangutan: {
    name: 'orangutan',
    unicode: '1f9a7',
  },
  skunk: {
    name: 'skunk',
    unicode: '1f9a8',
  },
  flamingo: {
    name: 'flamingo',
    unicode: '1f9a9',
  },
  oyster: {
    name: 'oyster',
    unicode: '1f9aa',
  },
  beaver: {
    name: 'beaver',
    unicode: '1f9ab',
  },
  bison: {
    name: 'bison',
    unicode: '1f9ac',
  },
  seal: {
    name: 'seal',
    unicode: '1f9ad',
  },
  guide_dog: {
    name: 'guide_dog',
    unicode: '1f9ae',
  },
  probing_cane: {
    name: 'probing_cane',
    unicode: '1f9af',
  },
  bone: {
    name: 'bone',
    unicode: '1f9b4',
  },
  leg: {
    name: 'leg',
    unicode: '1f9b5',
    skinVariations: {
      '2': {
        name: 'leg#skin-tone-2',
        unicode: '1f9b5-1f3fb',
      },
      '3': {
        name: 'leg#skin-tone-3',
        unicode: '1f9b5-1f3fc',
      },
      '4': {
        name: 'leg#skin-tone-4',
        unicode: '1f9b5-1f3fd',
      },
      '5': {
        name: 'leg#skin-tone-5',
        unicode: '1f9b5-1f3fe',
      },
      '6': {
        name: 'leg#skin-tone-6',
        unicode: '1f9b5-1f3ff',
      },
    },
  },
  foot: {
    name: 'foot',
    unicode: '1f9b6',
    skinVariations: {
      '2': {
        name: 'foot#skin-tone-2',
        unicode: '1f9b6-1f3fb',
      },
      '3': {
        name: 'foot#skin-tone-3',
        unicode: '1f9b6-1f3fc',
      },
      '4': {
        name: 'foot#skin-tone-4',
        unicode: '1f9b6-1f3fd',
      },
      '5': {
        name: 'foot#skin-tone-5',
        unicode: '1f9b6-1f3fe',
      },
      '6': {
        name: 'foot#skin-tone-6',
        unicode: '1f9b6-1f3ff',
      },
    },
  },
  tooth: {
    name: 'tooth',
    unicode: '1f9b7',
  },
  female_superhero: {
    name: 'female_superhero',
    unicode: '1f9b8-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female_superhero#skin-tone-2',
        unicode: '1f9b8-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female_superhero#skin-tone-3',
        unicode: '1f9b8-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female_superhero#skin-tone-4',
        unicode: '1f9b8-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female_superhero#skin-tone-5',
        unicode: '1f9b8-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female_superhero#skin-tone-6',
        unicode: '1f9b8-1f3ff-200d-2640-fe0f',
      },
    },
  },
  male_superhero: {
    name: 'male_superhero',
    unicode: '1f9b8-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male_superhero#skin-tone-2',
        unicode: '1f9b8-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male_superhero#skin-tone-3',
        unicode: '1f9b8-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male_superhero#skin-tone-4',
        unicode: '1f9b8-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male_superhero#skin-tone-5',
        unicode: '1f9b8-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male_superhero#skin-tone-6',
        unicode: '1f9b8-1f3ff-200d-2642-fe0f',
      },
    },
  },
  superhero: {
    name: 'superhero',
    unicode: '1f9b8',
    skinVariations: {
      '2': {
        name: 'superhero#skin-tone-2',
        unicode: '1f9b8-1f3fb',
      },
      '3': {
        name: 'superhero#skin-tone-3',
        unicode: '1f9b8-1f3fc',
      },
      '4': {
        name: 'superhero#skin-tone-4',
        unicode: '1f9b8-1f3fd',
      },
      '5': {
        name: 'superhero#skin-tone-5',
        unicode: '1f9b8-1f3fe',
      },
      '6': {
        name: 'superhero#skin-tone-6',
        unicode: '1f9b8-1f3ff',
      },
    },
  },
  female_supervillain: {
    name: 'female_supervillain',
    unicode: '1f9b9-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female_supervillain#skin-tone-2',
        unicode: '1f9b9-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female_supervillain#skin-tone-3',
        unicode: '1f9b9-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female_supervillain#skin-tone-4',
        unicode: '1f9b9-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female_supervillain#skin-tone-5',
        unicode: '1f9b9-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female_supervillain#skin-tone-6',
        unicode: '1f9b9-1f3ff-200d-2640-fe0f',
      },
    },
  },
  male_supervillain: {
    name: 'male_supervillain',
    unicode: '1f9b9-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male_supervillain#skin-tone-2',
        unicode: '1f9b9-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male_supervillain#skin-tone-3',
        unicode: '1f9b9-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male_supervillain#skin-tone-4',
        unicode: '1f9b9-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male_supervillain#skin-tone-5',
        unicode: '1f9b9-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male_supervillain#skin-tone-6',
        unicode: '1f9b9-1f3ff-200d-2642-fe0f',
      },
    },
  },
  supervillain: {
    name: 'supervillain',
    unicode: '1f9b9',
    skinVariations: {
      '2': {
        name: 'supervillain#skin-tone-2',
        unicode: '1f9b9-1f3fb',
      },
      '3': {
        name: 'supervillain#skin-tone-3',
        unicode: '1f9b9-1f3fc',
      },
      '4': {
        name: 'supervillain#skin-tone-4',
        unicode: '1f9b9-1f3fd',
      },
      '5': {
        name: 'supervillain#skin-tone-5',
        unicode: '1f9b9-1f3fe',
      },
      '6': {
        name: 'supervillain#skin-tone-6',
        unicode: '1f9b9-1f3ff',
      },
    },
  },
  safety_vest: {
    name: 'safety_vest',
    unicode: '1f9ba',
  },
  ear_with_hearing_aid: {
    name: 'ear_with_hearing_aid',
    unicode: '1f9bb',
    skinVariations: {
      '2': {
        name: 'ear_with_hearing_aid#skin-tone-2',
        unicode: '1f9bb-1f3fb',
      },
      '3': {
        name: 'ear_with_hearing_aid#skin-tone-3',
        unicode: '1f9bb-1f3fc',
      },
      '4': {
        name: 'ear_with_hearing_aid#skin-tone-4',
        unicode: '1f9bb-1f3fd',
      },
      '5': {
        name: 'ear_with_hearing_aid#skin-tone-5',
        unicode: '1f9bb-1f3fe',
      },
      '6': {
        name: 'ear_with_hearing_aid#skin-tone-6',
        unicode: '1f9bb-1f3ff',
      },
    },
  },
  motorized_wheelchair: {
    name: 'motorized_wheelchair',
    unicode: '1f9bc',
  },
  manual_wheelchair: {
    name: 'manual_wheelchair',
    unicode: '1f9bd',
  },
  mechanical_arm: {
    name: 'mechanical_arm',
    unicode: '1f9be',
  },
  mechanical_leg: {
    name: 'mechanical_leg',
    unicode: '1f9bf',
  },
  cheese_wedge: {
    name: 'cheese_wedge',
    unicode: '1f9c0',
  },
  cupcake: {
    name: 'cupcake',
    unicode: '1f9c1',
  },
  salt: {
    name: 'salt',
    unicode: '1f9c2',
  },
  beverage_box: {
    name: 'beverage_box',
    unicode: '1f9c3',
  },
  garlic: {
    name: 'garlic',
    unicode: '1f9c4',
  },
  onion: {
    name: 'onion',
    unicode: '1f9c5',
  },
  falafel: {
    name: 'falafel',
    unicode: '1f9c6',
  },
  waffle: {
    name: 'waffle',
    unicode: '1f9c7',
  },
  butter: {
    name: 'butter',
    unicode: '1f9c8',
  },
  mate_drink: {
    name: 'mate_drink',
    unicode: '1f9c9',
  },
  ice_cube: {
    name: 'ice_cube',
    unicode: '1f9ca',
  },
  bubble_tea: {
    name: 'bubble_tea',
    unicode: '1f9cb',
  },
  troll: {
    name: 'troll',
    unicode: '1f9cc',
  },
  woman_standing: {
    name: 'woman_standing',
    unicode: '1f9cd-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_standing#skin-tone-2',
        unicode: '1f9cd-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_standing#skin-tone-3',
        unicode: '1f9cd-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_standing#skin-tone-4',
        unicode: '1f9cd-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_standing#skin-tone-5',
        unicode: '1f9cd-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_standing#skin-tone-6',
        unicode: '1f9cd-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_standing: {
    name: 'man_standing',
    unicode: '1f9cd-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_standing#skin-tone-2',
        unicode: '1f9cd-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_standing#skin-tone-3',
        unicode: '1f9cd-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_standing#skin-tone-4',
        unicode: '1f9cd-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_standing#skin-tone-5',
        unicode: '1f9cd-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_standing#skin-tone-6',
        unicode: '1f9cd-1f3ff-200d-2642-fe0f',
      },
    },
  },
  standing_person: {
    name: 'standing_person',
    unicode: '1f9cd',
    skinVariations: {
      '2': {
        name: 'standing_person#skin-tone-2',
        unicode: '1f9cd-1f3fb',
      },
      '3': {
        name: 'standing_person#skin-tone-3',
        unicode: '1f9cd-1f3fc',
      },
      '4': {
        name: 'standing_person#skin-tone-4',
        unicode: '1f9cd-1f3fd',
      },
      '5': {
        name: 'standing_person#skin-tone-5',
        unicode: '1f9cd-1f3fe',
      },
      '6': {
        name: 'standing_person#skin-tone-6',
        unicode: '1f9cd-1f3ff',
      },
    },
  },
  woman_kneeling: {
    name: 'woman_kneeling',
    unicode: '1f9ce-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_kneeling#skin-tone-2',
        unicode: '1f9ce-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_kneeling#skin-tone-3',
        unicode: '1f9ce-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_kneeling#skin-tone-4',
        unicode: '1f9ce-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_kneeling#skin-tone-5',
        unicode: '1f9ce-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_kneeling#skin-tone-6',
        unicode: '1f9ce-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_kneeling: {
    name: 'man_kneeling',
    unicode: '1f9ce-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_kneeling#skin-tone-2',
        unicode: '1f9ce-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_kneeling#skin-tone-3',
        unicode: '1f9ce-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_kneeling#skin-tone-4',
        unicode: '1f9ce-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_kneeling#skin-tone-5',
        unicode: '1f9ce-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_kneeling#skin-tone-6',
        unicode: '1f9ce-1f3ff-200d-2642-fe0f',
      },
    },
  },
  kneeling_person: {
    name: 'kneeling_person',
    unicode: '1f9ce',
    skinVariations: {
      '2': {
        name: 'kneeling_person#skin-tone-2',
        unicode: '1f9ce-1f3fb',
      },
      '3': {
        name: 'kneeling_person#skin-tone-3',
        unicode: '1f9ce-1f3fc',
      },
      '4': {
        name: 'kneeling_person#skin-tone-4',
        unicode: '1f9ce-1f3fd',
      },
      '5': {
        name: 'kneeling_person#skin-tone-5',
        unicode: '1f9ce-1f3fe',
      },
      '6': {
        name: 'kneeling_person#skin-tone-6',
        unicode: '1f9ce-1f3ff',
      },
    },
  },
  deaf_woman: {
    name: 'deaf_woman',
    unicode: '1f9cf-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'deaf_woman#skin-tone-2',
        unicode: '1f9cf-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'deaf_woman#skin-tone-3',
        unicode: '1f9cf-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'deaf_woman#skin-tone-4',
        unicode: '1f9cf-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'deaf_woman#skin-tone-5',
        unicode: '1f9cf-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'deaf_woman#skin-tone-6',
        unicode: '1f9cf-1f3ff-200d-2640-fe0f',
      },
    },
  },
  deaf_man: {
    name: 'deaf_man',
    unicode: '1f9cf-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'deaf_man#skin-tone-2',
        unicode: '1f9cf-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'deaf_man#skin-tone-3',
        unicode: '1f9cf-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'deaf_man#skin-tone-4',
        unicode: '1f9cf-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'deaf_man#skin-tone-5',
        unicode: '1f9cf-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'deaf_man#skin-tone-6',
        unicode: '1f9cf-1f3ff-200d-2642-fe0f',
      },
    },
  },
  deaf_person: {
    name: 'deaf_person',
    unicode: '1f9cf',
    skinVariations: {
      '2': {
        name: 'deaf_person#skin-tone-2',
        unicode: '1f9cf-1f3fb',
      },
      '3': {
        name: 'deaf_person#skin-tone-3',
        unicode: '1f9cf-1f3fc',
      },
      '4': {
        name: 'deaf_person#skin-tone-4',
        unicode: '1f9cf-1f3fd',
      },
      '5': {
        name: 'deaf_person#skin-tone-5',
        unicode: '1f9cf-1f3fe',
      },
      '6': {
        name: 'deaf_person#skin-tone-6',
        unicode: '1f9cf-1f3ff',
      },
    },
  },
  face_with_monocle: {
    name: 'face_with_monocle',
    unicode: '1f9d0',
  },
  farmer: {
    name: 'farmer',
    unicode: '1f9d1-200d-1f33e',
    skinVariations: {
      '2': {
        name: 'farmer#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f33e',
      },
      '3': {
        name: 'farmer#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f33e',
      },
      '4': {
        name: 'farmer#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f33e',
      },
      '5': {
        name: 'farmer#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f33e',
      },
      '6': {
        name: 'farmer#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f33e',
      },
    },
  },
  cook: {
    name: 'cook',
    unicode: '1f9d1-200d-1f373',
    skinVariations: {
      '2': {
        name: 'cook#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f373',
      },
      '3': {
        name: 'cook#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f373',
      },
      '4': {
        name: 'cook#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f373',
      },
      '5': {
        name: 'cook#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f373',
      },
      '6': {
        name: 'cook#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f373',
      },
    },
  },
  person_feeding_baby: {
    name: 'person_feeding_baby',
    unicode: '1f9d1-200d-1f37c',
    skinVariations: {
      '2': {
        name: 'person_feeding_baby#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f37c',
      },
      '3': {
        name: 'person_feeding_baby#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f37c',
      },
      '4': {
        name: 'person_feeding_baby#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f37c',
      },
      '5': {
        name: 'person_feeding_baby#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f37c',
      },
      '6': {
        name: 'person_feeding_baby#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f37c',
      },
    },
  },
  mx_claus: {
    name: 'mx_claus',
    unicode: '1f9d1-200d-1f384',
    skinVariations: {
      '2': {
        name: 'mx_claus#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f384',
      },
      '3': {
        name: 'mx_claus#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f384',
      },
      '4': {
        name: 'mx_claus#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f384',
      },
      '5': {
        name: 'mx_claus#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f384',
      },
      '6': {
        name: 'mx_claus#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f384',
      },
    },
  },
  student: {
    name: 'student',
    unicode: '1f9d1-200d-1f393',
    skinVariations: {
      '2': {
        name: 'student#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f393',
      },
      '3': {
        name: 'student#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f393',
      },
      '4': {
        name: 'student#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f393',
      },
      '5': {
        name: 'student#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f393',
      },
      '6': {
        name: 'student#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f393',
      },
    },
  },
  singer: {
    name: 'singer',
    unicode: '1f9d1-200d-1f3a4',
    skinVariations: {
      '2': {
        name: 'singer#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f3a4',
      },
      '3': {
        name: 'singer#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f3a4',
      },
      '4': {
        name: 'singer#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f3a4',
      },
      '5': {
        name: 'singer#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f3a4',
      },
      '6': {
        name: 'singer#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f3a4',
      },
    },
  },
  artist: {
    name: 'artist',
    unicode: '1f9d1-200d-1f3a8',
    skinVariations: {
      '2': {
        name: 'artist#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f3a8',
      },
      '3': {
        name: 'artist#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f3a8',
      },
      '4': {
        name: 'artist#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f3a8',
      },
      '5': {
        name: 'artist#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f3a8',
      },
      '6': {
        name: 'artist#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f3a8',
      },
    },
  },
  teacher: {
    name: 'teacher',
    unicode: '1f9d1-200d-1f3eb',
    skinVariations: {
      '2': {
        name: 'teacher#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f3eb',
      },
      '3': {
        name: 'teacher#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f3eb',
      },
      '4': {
        name: 'teacher#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f3eb',
      },
      '5': {
        name: 'teacher#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f3eb',
      },
      '6': {
        name: 'teacher#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f3eb',
      },
    },
  },
  factory_worker: {
    name: 'factory_worker',
    unicode: '1f9d1-200d-1f3ed',
    skinVariations: {
      '2': {
        name: 'factory_worker#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f3ed',
      },
      '3': {
        name: 'factory_worker#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f3ed',
      },
      '4': {
        name: 'factory_worker#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f3ed',
      },
      '5': {
        name: 'factory_worker#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f3ed',
      },
      '6': {
        name: 'factory_worker#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f3ed',
      },
    },
  },
  technologist: {
    name: 'technologist',
    unicode: '1f9d1-200d-1f4bb',
    skinVariations: {
      '2': {
        name: 'technologist#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f4bb',
      },
      '3': {
        name: 'technologist#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f4bb',
      },
      '4': {
        name: 'technologist#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f4bb',
      },
      '5': {
        name: 'technologist#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f4bb',
      },
      '6': {
        name: 'technologist#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f4bb',
      },
    },
  },
  office_worker: {
    name: 'office_worker',
    unicode: '1f9d1-200d-1f4bc',
    skinVariations: {
      '2': {
        name: 'office_worker#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f4bc',
      },
      '3': {
        name: 'office_worker#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f4bc',
      },
      '4': {
        name: 'office_worker#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f4bc',
      },
      '5': {
        name: 'office_worker#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f4bc',
      },
      '6': {
        name: 'office_worker#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f4bc',
      },
    },
  },
  mechanic: {
    name: 'mechanic',
    unicode: '1f9d1-200d-1f527',
    skinVariations: {
      '2': {
        name: 'mechanic#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f527',
      },
      '3': {
        name: 'mechanic#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f527',
      },
      '4': {
        name: 'mechanic#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f527',
      },
      '5': {
        name: 'mechanic#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f527',
      },
      '6': {
        name: 'mechanic#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f527',
      },
    },
  },
  scientist: {
    name: 'scientist',
    unicode: '1f9d1-200d-1f52c',
    skinVariations: {
      '2': {
        name: 'scientist#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f52c',
      },
      '3': {
        name: 'scientist#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f52c',
      },
      '4': {
        name: 'scientist#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f52c',
      },
      '5': {
        name: 'scientist#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f52c',
      },
      '6': {
        name: 'scientist#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f52c',
      },
    },
  },
  astronaut: {
    name: 'astronaut',
    unicode: '1f9d1-200d-1f680',
    skinVariations: {
      '2': {
        name: 'astronaut#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f680',
      },
      '3': {
        name: 'astronaut#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f680',
      },
      '4': {
        name: 'astronaut#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f680',
      },
      '5': {
        name: 'astronaut#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f680',
      },
      '6': {
        name: 'astronaut#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f680',
      },
    },
  },
  firefighter: {
    name: 'firefighter',
    unicode: '1f9d1-200d-1f692',
    skinVariations: {
      '2': {
        name: 'firefighter#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f692',
      },
      '3': {
        name: 'firefighter#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f692',
      },
      '4': {
        name: 'firefighter#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f692',
      },
      '5': {
        name: 'firefighter#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f692',
      },
      '6': {
        name: 'firefighter#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f692',
      },
    },
  },
  people_holding_hands: {
    name: 'people_holding_hands',
    unicode: '1f9d1-200d-1f91d-200d-1f9d1',
    multiSkinTone: true,
    skinVariations: {
      '2': {
        name: 'people_holding_hands#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb',
      },
      '3': {
        name: 'people_holding_hands#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc',
      },
      '4': {
        name: 'people_holding_hands#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd',
      },
      '5': {
        name: 'people_holding_hands#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe',
      },
      '6': {
        name: 'people_holding_hands#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff',
      },
      '2-3': {
        name: 'people_holding_hands#skin-tone-2-3',
        unicode: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc',
      },
      '2-4': {
        name: 'people_holding_hands#skin-tone-2-4',
        unicode: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd',
      },
      '2-5': {
        name: 'people_holding_hands#skin-tone-2-5',
        unicode: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe',
      },
      '2-6': {
        name: 'people_holding_hands#skin-tone-2-6',
        unicode: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff',
      },
      '3-2': {
        name: 'people_holding_hands#skin-tone-3-2',
        unicode: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb',
      },
      '3-4': {
        name: 'people_holding_hands#skin-tone-3-4',
        unicode: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd',
      },
      '3-5': {
        name: 'people_holding_hands#skin-tone-3-5',
        unicode: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe',
      },
      '3-6': {
        name: 'people_holding_hands#skin-tone-3-6',
        unicode: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff',
      },
      '4-2': {
        name: 'people_holding_hands#skin-tone-4-2',
        unicode: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb',
      },
      '4-3': {
        name: 'people_holding_hands#skin-tone-4-3',
        unicode: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc',
      },
      '4-5': {
        name: 'people_holding_hands#skin-tone-4-5',
        unicode: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe',
      },
      '4-6': {
        name: 'people_holding_hands#skin-tone-4-6',
        unicode: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff',
      },
      '5-2': {
        name: 'people_holding_hands#skin-tone-5-2',
        unicode: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb',
      },
      '5-3': {
        name: 'people_holding_hands#skin-tone-5-3',
        unicode: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc',
      },
      '5-4': {
        name: 'people_holding_hands#skin-tone-5-4',
        unicode: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd',
      },
      '5-6': {
        name: 'people_holding_hands#skin-tone-5-6',
        unicode: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff',
      },
      '6-2': {
        name: 'people_holding_hands#skin-tone-6-2',
        unicode: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb',
      },
      '6-3': {
        name: 'people_holding_hands#skin-tone-6-3',
        unicode: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc',
      },
      '6-4': {
        name: 'people_holding_hands#skin-tone-6-4',
        unicode: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd',
      },
      '6-5': {
        name: 'people_holding_hands#skin-tone-6-5',
        unicode: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe',
      },
    },
  },
  person_with_probing_cane: {
    name: 'person_with_probing_cane',
    unicode: '1f9d1-200d-1f9af',
    skinVariations: {
      '2': {
        name: 'person_with_probing_cane#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f9af',
      },
      '3': {
        name: 'person_with_probing_cane#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f9af',
      },
      '4': {
        name: 'person_with_probing_cane#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f9af',
      },
      '5': {
        name: 'person_with_probing_cane#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f9af',
      },
      '6': {
        name: 'person_with_probing_cane#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f9af',
      },
    },
  },
  red_haired_person: {
    name: 'red_haired_person',
    unicode: '1f9d1-200d-1f9b0',
    skinVariations: {
      '2': {
        name: 'red_haired_person#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f9b0',
      },
      '3': {
        name: 'red_haired_person#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f9b0',
      },
      '4': {
        name: 'red_haired_person#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f9b0',
      },
      '5': {
        name: 'red_haired_person#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f9b0',
      },
      '6': {
        name: 'red_haired_person#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f9b0',
      },
    },
  },
  curly_haired_person: {
    name: 'curly_haired_person',
    unicode: '1f9d1-200d-1f9b1',
    skinVariations: {
      '2': {
        name: 'curly_haired_person#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f9b1',
      },
      '3': {
        name: 'curly_haired_person#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f9b1',
      },
      '4': {
        name: 'curly_haired_person#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f9b1',
      },
      '5': {
        name: 'curly_haired_person#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f9b1',
      },
      '6': {
        name: 'curly_haired_person#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f9b1',
      },
    },
  },
  bald_person: {
    name: 'bald_person',
    unicode: '1f9d1-200d-1f9b2',
    skinVariations: {
      '2': {
        name: 'bald_person#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f9b2',
      },
      '3': {
        name: 'bald_person#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f9b2',
      },
      '4': {
        name: 'bald_person#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f9b2',
      },
      '5': {
        name: 'bald_person#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f9b2',
      },
      '6': {
        name: 'bald_person#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f9b2',
      },
    },
  },
  white_haired_person: {
    name: 'white_haired_person',
    unicode: '1f9d1-200d-1f9b3',
    skinVariations: {
      '2': {
        name: 'white_haired_person#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f9b3',
      },
      '3': {
        name: 'white_haired_person#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f9b3',
      },
      '4': {
        name: 'white_haired_person#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f9b3',
      },
      '5': {
        name: 'white_haired_person#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f9b3',
      },
      '6': {
        name: 'white_haired_person#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f9b3',
      },
    },
  },
  person_in_motorized_wheelchair: {
    name: 'person_in_motorized_wheelchair',
    unicode: '1f9d1-200d-1f9bc',
    skinVariations: {
      '2': {
        name: 'person_in_motorized_wheelchair#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f9bc',
      },
      '3': {
        name: 'person_in_motorized_wheelchair#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f9bc',
      },
      '4': {
        name: 'person_in_motorized_wheelchair#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f9bc',
      },
      '5': {
        name: 'person_in_motorized_wheelchair#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f9bc',
      },
      '6': {
        name: 'person_in_motorized_wheelchair#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f9bc',
      },
    },
  },
  person_in_manual_wheelchair: {
    name: 'person_in_manual_wheelchair',
    unicode: '1f9d1-200d-1f9bd',
    skinVariations: {
      '2': {
        name: 'person_in_manual_wheelchair#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-1f9bd',
      },
      '3': {
        name: 'person_in_manual_wheelchair#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-1f9bd',
      },
      '4': {
        name: 'person_in_manual_wheelchair#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-1f9bd',
      },
      '5': {
        name: 'person_in_manual_wheelchair#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-1f9bd',
      },
      '6': {
        name: 'person_in_manual_wheelchair#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-1f9bd',
      },
    },
  },
  health_worker: {
    name: 'health_worker',
    unicode: '1f9d1-200d-2695-fe0f',
    skinVariations: {
      '2': {
        name: 'health_worker#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-2695-fe0f',
      },
      '3': {
        name: 'health_worker#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-2695-fe0f',
      },
      '4': {
        name: 'health_worker#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-2695-fe0f',
      },
      '5': {
        name: 'health_worker#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-2695-fe0f',
      },
      '6': {
        name: 'health_worker#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-2695-fe0f',
      },
    },
  },
  judge: {
    name: 'judge',
    unicode: '1f9d1-200d-2696-fe0f',
    skinVariations: {
      '2': {
        name: 'judge#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-2696-fe0f',
      },
      '3': {
        name: 'judge#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-2696-fe0f',
      },
      '4': {
        name: 'judge#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-2696-fe0f',
      },
      '5': {
        name: 'judge#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-2696-fe0f',
      },
      '6': {
        name: 'judge#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-2696-fe0f',
      },
    },
  },
  pilot: {
    name: 'pilot',
    unicode: '1f9d1-200d-2708-fe0f',
    skinVariations: {
      '2': {
        name: 'pilot#skin-tone-2',
        unicode: '1f9d1-1f3fb-200d-2708-fe0f',
      },
      '3': {
        name: 'pilot#skin-tone-3',
        unicode: '1f9d1-1f3fc-200d-2708-fe0f',
      },
      '4': {
        name: 'pilot#skin-tone-4',
        unicode: '1f9d1-1f3fd-200d-2708-fe0f',
      },
      '5': {
        name: 'pilot#skin-tone-5',
        unicode: '1f9d1-1f3fe-200d-2708-fe0f',
      },
      '6': {
        name: 'pilot#skin-tone-6',
        unicode: '1f9d1-1f3ff-200d-2708-fe0f',
      },
    },
  },
  adult: {
    name: 'adult',
    unicode: '1f9d1',
    skinVariations: {
      '2': {
        name: 'adult#skin-tone-2',
        unicode: '1f9d1-1f3fb',
      },
      '3': {
        name: 'adult#skin-tone-3',
        unicode: '1f9d1-1f3fc',
      },
      '4': {
        name: 'adult#skin-tone-4',
        unicode: '1f9d1-1f3fd',
      },
      '5': {
        name: 'adult#skin-tone-5',
        unicode: '1f9d1-1f3fe',
      },
      '6': {
        name: 'adult#skin-tone-6',
        unicode: '1f9d1-1f3ff',
      },
    },
  },
  child: {
    name: 'child',
    unicode: '1f9d2',
    skinVariations: {
      '2': {
        name: 'child#skin-tone-2',
        unicode: '1f9d2-1f3fb',
      },
      '3': {
        name: 'child#skin-tone-3',
        unicode: '1f9d2-1f3fc',
      },
      '4': {
        name: 'child#skin-tone-4',
        unicode: '1f9d2-1f3fd',
      },
      '5': {
        name: 'child#skin-tone-5',
        unicode: '1f9d2-1f3fe',
      },
      '6': {
        name: 'child#skin-tone-6',
        unicode: '1f9d2-1f3ff',
      },
    },
  },
  older_adult: {
    name: 'older_adult',
    unicode: '1f9d3',
    skinVariations: {
      '2': {
        name: 'older_adult#skin-tone-2',
        unicode: '1f9d3-1f3fb',
      },
      '3': {
        name: 'older_adult#skin-tone-3',
        unicode: '1f9d3-1f3fc',
      },
      '4': {
        name: 'older_adult#skin-tone-4',
        unicode: '1f9d3-1f3fd',
      },
      '5': {
        name: 'older_adult#skin-tone-5',
        unicode: '1f9d3-1f3fe',
      },
      '6': {
        name: 'older_adult#skin-tone-6',
        unicode: '1f9d3-1f3ff',
      },
    },
  },
  woman_with_beard: {
    name: 'woman_with_beard',
    unicode: '1f9d4-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_with_beard#skin-tone-2',
        unicode: '1f9d4-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_with_beard#skin-tone-3',
        unicode: '1f9d4-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_with_beard#skin-tone-4',
        unicode: '1f9d4-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_with_beard#skin-tone-5',
        unicode: '1f9d4-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_with_beard#skin-tone-6',
        unicode: '1f9d4-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_with_beard: {
    name: 'man_with_beard',
    unicode: '1f9d4-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_with_beard#skin-tone-2',
        unicode: '1f9d4-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_with_beard#skin-tone-3',
        unicode: '1f9d4-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_with_beard#skin-tone-4',
        unicode: '1f9d4-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_with_beard#skin-tone-5',
        unicode: '1f9d4-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_with_beard#skin-tone-6',
        unicode: '1f9d4-1f3ff-200d-2642-fe0f',
      },
    },
  },
  bearded_person: {
    name: 'bearded_person',
    unicode: '1f9d4',
    skinVariations: {
      '2': {
        name: 'bearded_person#skin-tone-2',
        unicode: '1f9d4-1f3fb',
      },
      '3': {
        name: 'bearded_person#skin-tone-3',
        unicode: '1f9d4-1f3fc',
      },
      '4': {
        name: 'bearded_person#skin-tone-4',
        unicode: '1f9d4-1f3fd',
      },
      '5': {
        name: 'bearded_person#skin-tone-5',
        unicode: '1f9d4-1f3fe',
      },
      '6': {
        name: 'bearded_person#skin-tone-6',
        unicode: '1f9d4-1f3ff',
      },
    },
  },
  person_with_headscarf: {
    name: 'person_with_headscarf',
    unicode: '1f9d5',
    skinVariations: {
      '2': {
        name: 'person_with_headscarf#skin-tone-2',
        unicode: '1f9d5-1f3fb',
      },
      '3': {
        name: 'person_with_headscarf#skin-tone-3',
        unicode: '1f9d5-1f3fc',
      },
      '4': {
        name: 'person_with_headscarf#skin-tone-4',
        unicode: '1f9d5-1f3fd',
      },
      '5': {
        name: 'person_with_headscarf#skin-tone-5',
        unicode: '1f9d5-1f3fe',
      },
      '6': {
        name: 'person_with_headscarf#skin-tone-6',
        unicode: '1f9d5-1f3ff',
      },
    },
  },
  woman_in_steamy_room: {
    name: 'woman_in_steamy_room',
    unicode: '1f9d6-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_in_steamy_room#skin-tone-2',
        unicode: '1f9d6-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_in_steamy_room#skin-tone-3',
        unicode: '1f9d6-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_in_steamy_room#skin-tone-4',
        unicode: '1f9d6-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_in_steamy_room#skin-tone-5',
        unicode: '1f9d6-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_in_steamy_room#skin-tone-6',
        unicode: '1f9d6-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_in_steamy_room: {
    name: 'man_in_steamy_room',
    unicode: '1f9d6-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_in_steamy_room#skin-tone-2',
        unicode: '1f9d6-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_in_steamy_room#skin-tone-3',
        unicode: '1f9d6-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_in_steamy_room#skin-tone-4',
        unicode: '1f9d6-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_in_steamy_room#skin-tone-5',
        unicode: '1f9d6-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_in_steamy_room#skin-tone-6',
        unicode: '1f9d6-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_in_steamy_room: {
    name: 'person_in_steamy_room',
    unicode: '1f9d6',
    skinVariations: {
      '2': {
        name: 'person_in_steamy_room#skin-tone-2',
        unicode: '1f9d6-1f3fb',
      },
      '3': {
        name: 'person_in_steamy_room#skin-tone-3',
        unicode: '1f9d6-1f3fc',
      },
      '4': {
        name: 'person_in_steamy_room#skin-tone-4',
        unicode: '1f9d6-1f3fd',
      },
      '5': {
        name: 'person_in_steamy_room#skin-tone-5',
        unicode: '1f9d6-1f3fe',
      },
      '6': {
        name: 'person_in_steamy_room#skin-tone-6',
        unicode: '1f9d6-1f3ff',
      },
    },
  },
  woman_climbing: {
    name: 'woman_climbing',
    unicode: '1f9d7-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_climbing#skin-tone-2',
        unicode: '1f9d7-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_climbing#skin-tone-3',
        unicode: '1f9d7-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_climbing#skin-tone-4',
        unicode: '1f9d7-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_climbing#skin-tone-5',
        unicode: '1f9d7-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_climbing#skin-tone-6',
        unicode: '1f9d7-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_climbing: {
    name: 'man_climbing',
    unicode: '1f9d7-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_climbing#skin-tone-2',
        unicode: '1f9d7-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_climbing#skin-tone-3',
        unicode: '1f9d7-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_climbing#skin-tone-4',
        unicode: '1f9d7-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_climbing#skin-tone-5',
        unicode: '1f9d7-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_climbing#skin-tone-6',
        unicode: '1f9d7-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_climbing: {
    name: 'person_climbing',
    unicode: '1f9d7',
    skinVariations: {
      '2': {
        name: 'person_climbing#skin-tone-2',
        unicode: '1f9d7-1f3fb',
      },
      '3': {
        name: 'person_climbing#skin-tone-3',
        unicode: '1f9d7-1f3fc',
      },
      '4': {
        name: 'person_climbing#skin-tone-4',
        unicode: '1f9d7-1f3fd',
      },
      '5': {
        name: 'person_climbing#skin-tone-5',
        unicode: '1f9d7-1f3fe',
      },
      '6': {
        name: 'person_climbing#skin-tone-6',
        unicode: '1f9d7-1f3ff',
      },
    },
  },
  woman_in_lotus_position: {
    name: 'woman_in_lotus_position',
    unicode: '1f9d8-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman_in_lotus_position#skin-tone-2',
        unicode: '1f9d8-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman_in_lotus_position#skin-tone-3',
        unicode: '1f9d8-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman_in_lotus_position#skin-tone-4',
        unicode: '1f9d8-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman_in_lotus_position#skin-tone-5',
        unicode: '1f9d8-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman_in_lotus_position#skin-tone-6',
        unicode: '1f9d8-1f3ff-200d-2640-fe0f',
      },
    },
  },
  man_in_lotus_position: {
    name: 'man_in_lotus_position',
    unicode: '1f9d8-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man_in_lotus_position#skin-tone-2',
        unicode: '1f9d8-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man_in_lotus_position#skin-tone-3',
        unicode: '1f9d8-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man_in_lotus_position#skin-tone-4',
        unicode: '1f9d8-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man_in_lotus_position#skin-tone-5',
        unicode: '1f9d8-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man_in_lotus_position#skin-tone-6',
        unicode: '1f9d8-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_in_lotus_position: {
    name: 'person_in_lotus_position',
    unicode: '1f9d8',
    skinVariations: {
      '2': {
        name: 'person_in_lotus_position#skin-tone-2',
        unicode: '1f9d8-1f3fb',
      },
      '3': {
        name: 'person_in_lotus_position#skin-tone-3',
        unicode: '1f9d8-1f3fc',
      },
      '4': {
        name: 'person_in_lotus_position#skin-tone-4',
        unicode: '1f9d8-1f3fd',
      },
      '5': {
        name: 'person_in_lotus_position#skin-tone-5',
        unicode: '1f9d8-1f3fe',
      },
      '6': {
        name: 'person_in_lotus_position#skin-tone-6',
        unicode: '1f9d8-1f3ff',
      },
    },
  },
  female_mage: {
    name: 'female_mage',
    unicode: '1f9d9-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female_mage#skin-tone-2',
        unicode: '1f9d9-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female_mage#skin-tone-3',
        unicode: '1f9d9-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female_mage#skin-tone-4',
        unicode: '1f9d9-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female_mage#skin-tone-5',
        unicode: '1f9d9-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female_mage#skin-tone-6',
        unicode: '1f9d9-1f3ff-200d-2640-fe0f',
      },
    },
  },
  male_mage: {
    name: 'male_mage',
    unicode: '1f9d9-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male_mage#skin-tone-2',
        unicode: '1f9d9-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male_mage#skin-tone-3',
        unicode: '1f9d9-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male_mage#skin-tone-4',
        unicode: '1f9d9-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male_mage#skin-tone-5',
        unicode: '1f9d9-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male_mage#skin-tone-6',
        unicode: '1f9d9-1f3ff-200d-2642-fe0f',
      },
    },
  },
  mage: {
    name: 'mage',
    unicode: '1f9d9',
    skinVariations: {
      '2': {
        name: 'mage#skin-tone-2',
        unicode: '1f9d9-1f3fb',
      },
      '3': {
        name: 'mage#skin-tone-3',
        unicode: '1f9d9-1f3fc',
      },
      '4': {
        name: 'mage#skin-tone-4',
        unicode: '1f9d9-1f3fd',
      },
      '5': {
        name: 'mage#skin-tone-5',
        unicode: '1f9d9-1f3fe',
      },
      '6': {
        name: 'mage#skin-tone-6',
        unicode: '1f9d9-1f3ff',
      },
    },
  },
  female_fairy: {
    name: 'female_fairy',
    unicode: '1f9da-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female_fairy#skin-tone-2',
        unicode: '1f9da-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female_fairy#skin-tone-3',
        unicode: '1f9da-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female_fairy#skin-tone-4',
        unicode: '1f9da-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female_fairy#skin-tone-5',
        unicode: '1f9da-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female_fairy#skin-tone-6',
        unicode: '1f9da-1f3ff-200d-2640-fe0f',
      },
    },
  },
  male_fairy: {
    name: 'male_fairy',
    unicode: '1f9da-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male_fairy#skin-tone-2',
        unicode: '1f9da-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male_fairy#skin-tone-3',
        unicode: '1f9da-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male_fairy#skin-tone-4',
        unicode: '1f9da-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male_fairy#skin-tone-5',
        unicode: '1f9da-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male_fairy#skin-tone-6',
        unicode: '1f9da-1f3ff-200d-2642-fe0f',
      },
    },
  },
  fairy: {
    name: 'fairy',
    unicode: '1f9da',
    skinVariations: {
      '2': {
        name: 'fairy#skin-tone-2',
        unicode: '1f9da-1f3fb',
      },
      '3': {
        name: 'fairy#skin-tone-3',
        unicode: '1f9da-1f3fc',
      },
      '4': {
        name: 'fairy#skin-tone-4',
        unicode: '1f9da-1f3fd',
      },
      '5': {
        name: 'fairy#skin-tone-5',
        unicode: '1f9da-1f3fe',
      },
      '6': {
        name: 'fairy#skin-tone-6',
        unicode: '1f9da-1f3ff',
      },
    },
  },
  female_vampire: {
    name: 'female_vampire',
    unicode: '1f9db-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female_vampire#skin-tone-2',
        unicode: '1f9db-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female_vampire#skin-tone-3',
        unicode: '1f9db-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female_vampire#skin-tone-4',
        unicode: '1f9db-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female_vampire#skin-tone-5',
        unicode: '1f9db-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female_vampire#skin-tone-6',
        unicode: '1f9db-1f3ff-200d-2640-fe0f',
      },
    },
  },
  male_vampire: {
    name: 'male_vampire',
    unicode: '1f9db-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male_vampire#skin-tone-2',
        unicode: '1f9db-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male_vampire#skin-tone-3',
        unicode: '1f9db-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male_vampire#skin-tone-4',
        unicode: '1f9db-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male_vampire#skin-tone-5',
        unicode: '1f9db-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male_vampire#skin-tone-6',
        unicode: '1f9db-1f3ff-200d-2642-fe0f',
      },
    },
  },
  vampire: {
    name: 'vampire',
    unicode: '1f9db',
    skinVariations: {
      '2': {
        name: 'vampire#skin-tone-2',
        unicode: '1f9db-1f3fb',
      },
      '3': {
        name: 'vampire#skin-tone-3',
        unicode: '1f9db-1f3fc',
      },
      '4': {
        name: 'vampire#skin-tone-4',
        unicode: '1f9db-1f3fd',
      },
      '5': {
        name: 'vampire#skin-tone-5',
        unicode: '1f9db-1f3fe',
      },
      '6': {
        name: 'vampire#skin-tone-6',
        unicode: '1f9db-1f3ff',
      },
    },
  },
  mermaid: {
    name: 'mermaid',
    unicode: '1f9dc-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'mermaid#skin-tone-2',
        unicode: '1f9dc-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'mermaid#skin-tone-3',
        unicode: '1f9dc-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'mermaid#skin-tone-4',
        unicode: '1f9dc-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'mermaid#skin-tone-5',
        unicode: '1f9dc-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'mermaid#skin-tone-6',
        unicode: '1f9dc-1f3ff-200d-2640-fe0f',
      },
    },
  },
  merman: {
    name: 'merman',
    unicode: '1f9dc-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'merman#skin-tone-2',
        unicode: '1f9dc-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'merman#skin-tone-3',
        unicode: '1f9dc-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'merman#skin-tone-4',
        unicode: '1f9dc-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'merman#skin-tone-5',
        unicode: '1f9dc-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'merman#skin-tone-6',
        unicode: '1f9dc-1f3ff-200d-2642-fe0f',
      },
    },
  },
  merperson: {
    name: 'merperson',
    unicode: '1f9dc',
    skinVariations: {
      '2': {
        name: 'merperson#skin-tone-2',
        unicode: '1f9dc-1f3fb',
      },
      '3': {
        name: 'merperson#skin-tone-3',
        unicode: '1f9dc-1f3fc',
      },
      '4': {
        name: 'merperson#skin-tone-4',
        unicode: '1f9dc-1f3fd',
      },
      '5': {
        name: 'merperson#skin-tone-5',
        unicode: '1f9dc-1f3fe',
      },
      '6': {
        name: 'merperson#skin-tone-6',
        unicode: '1f9dc-1f3ff',
      },
    },
  },
  female_elf: {
    name: 'female_elf',
    unicode: '1f9dd-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'female_elf#skin-tone-2',
        unicode: '1f9dd-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'female_elf#skin-tone-3',
        unicode: '1f9dd-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'female_elf#skin-tone-4',
        unicode: '1f9dd-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'female_elf#skin-tone-5',
        unicode: '1f9dd-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'female_elf#skin-tone-6',
        unicode: '1f9dd-1f3ff-200d-2640-fe0f',
      },
    },
  },
  male_elf: {
    name: 'male_elf',
    unicode: '1f9dd-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'male_elf#skin-tone-2',
        unicode: '1f9dd-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'male_elf#skin-tone-3',
        unicode: '1f9dd-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'male_elf#skin-tone-4',
        unicode: '1f9dd-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'male_elf#skin-tone-5',
        unicode: '1f9dd-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'male_elf#skin-tone-6',
        unicode: '1f9dd-1f3ff-200d-2642-fe0f',
      },
    },
  },
  elf: {
    name: 'elf',
    unicode: '1f9dd',
    skinVariations: {
      '2': {
        name: 'elf#skin-tone-2',
        unicode: '1f9dd-1f3fb',
      },
      '3': {
        name: 'elf#skin-tone-3',
        unicode: '1f9dd-1f3fc',
      },
      '4': {
        name: 'elf#skin-tone-4',
        unicode: '1f9dd-1f3fd',
      },
      '5': {
        name: 'elf#skin-tone-5',
        unicode: '1f9dd-1f3fe',
      },
      '6': {
        name: 'elf#skin-tone-6',
        unicode: '1f9dd-1f3ff',
      },
    },
  },
  female_genie: {
    name: 'female_genie',
    unicode: '1f9de-200d-2640-fe0f',
  },
  male_genie: {
    name: 'male_genie',
    unicode: '1f9de-200d-2642-fe0f',
  },
  genie: {
    name: 'genie',
    unicode: '1f9de',
  },
  female_zombie: {
    name: 'female_zombie',
    unicode: '1f9df-200d-2640-fe0f',
  },
  male_zombie: {
    name: 'male_zombie',
    unicode: '1f9df-200d-2642-fe0f',
  },
  zombie: {
    name: 'zombie',
    unicode: '1f9df',
  },
  brain: {
    name: 'brain',
    unicode: '1f9e0',
  },
  orange_heart: {
    name: 'orange_heart',
    unicode: '1f9e1',
  },
  billed_cap: {
    name: 'billed_cap',
    unicode: '1f9e2',
  },
  scarf: {
    name: 'scarf',
    unicode: '1f9e3',
  },
  gloves: {
    name: 'gloves',
    unicode: '1f9e4',
  },
  coat: {
    name: 'coat',
    unicode: '1f9e5',
  },
  socks: {
    name: 'socks',
    unicode: '1f9e6',
  },
  red_envelope: {
    name: 'red_envelope',
    unicode: '1f9e7',
  },
  firecracker: {
    name: 'firecracker',
    unicode: '1f9e8',
  },
  jigsaw: {
    name: 'jigsaw',
    unicode: '1f9e9',
  },
  test_tube: {
    name: 'test_tube',
    unicode: '1f9ea',
  },
  petri_dish: {
    name: 'petri_dish',
    unicode: '1f9eb',
  },
  dna: {
    name: 'dna',
    unicode: '1f9ec',
  },
  compass: {
    name: 'compass',
    unicode: '1f9ed',
  },
  abacus: {
    name: 'abacus',
    unicode: '1f9ee',
  },
  fire_extinguisher: {
    name: 'fire_extinguisher',
    unicode: '1f9ef',
  },
  toolbox: {
    name: 'toolbox',
    unicode: '1f9f0',
  },
  bricks: {
    name: 'bricks',
    unicode: '1f9f1',
  },
  magnet: {
    name: 'magnet',
    unicode: '1f9f2',
  },
  luggage: {
    name: 'luggage',
    unicode: '1f9f3',
  },
  lotion_bottle: {
    name: 'lotion_bottle',
    unicode: '1f9f4',
  },
  thread: {
    name: 'thread',
    unicode: '1f9f5',
  },
  yarn: {
    name: 'yarn',
    unicode: '1f9f6',
  },
  safety_pin: {
    name: 'safety_pin',
    unicode: '1f9f7',
  },
  teddy_bear: {
    name: 'teddy_bear',
    unicode: '1f9f8',
  },
  broom: {
    name: 'broom',
    unicode: '1f9f9',
  },
  basket: {
    name: 'basket',
    unicode: '1f9fa',
  },
  roll_of_paper: {
    name: 'roll_of_paper',
    unicode: '1f9fb',
  },
  soap: {
    name: 'soap',
    unicode: '1f9fc',
  },
  sponge: {
    name: 'sponge',
    unicode: '1f9fd',
  },
  receipt: {
    name: 'receipt',
    unicode: '1f9fe',
  },
  nazar_amulet: {
    name: 'nazar_amulet',
    unicode: '1f9ff',
  },
  ballet_shoes: {
    name: 'ballet_shoes',
    unicode: '1fa70',
  },
  'one-piece_swimsuit': {
    name: 'one-piece_swimsuit',
    unicode: '1fa71',
  },
  briefs: {
    name: 'briefs',
    unicode: '1fa72',
  },
  shorts: {
    name: 'shorts',
    unicode: '1fa73',
  },
  thong_sandal: {
    name: 'thong_sandal',
    unicode: '1fa74',
  },
  drop_of_blood: {
    name: 'drop_of_blood',
    unicode: '1fa78',
  },
  adhesive_bandage: {
    name: 'adhesive_bandage',
    unicode: '1fa79',
  },
  stethoscope: {
    name: 'stethoscope',
    unicode: '1fa7a',
  },
  'x-ray': {
    name: 'x-ray',
    unicode: '1fa7b',
  },
  crutch: {
    name: 'crutch',
    unicode: '1fa7c',
  },
  'yo-yo': {
    name: 'yo-yo',
    unicode: '1fa80',
  },
  kite: {
    name: 'kite',
    unicode: '1fa81',
  },
  parachute: {
    name: 'parachute',
    unicode: '1fa82',
  },
  boomerang: {
    name: 'boomerang',
    unicode: '1fa83',
  },
  magic_wand: {
    name: 'magic_wand',
    unicode: '1fa84',
  },
  pinata: {
    name: 'pinata',
    unicode: '1fa85',
  },
  nesting_dolls: {
    name: 'nesting_dolls',
    unicode: '1fa86',
  },
  ringed_planet: {
    name: 'ringed_planet',
    unicode: '1fa90',
  },
  chair: {
    name: 'chair',
    unicode: '1fa91',
  },
  razor: {
    name: 'razor',
    unicode: '1fa92',
  },
  axe: {
    name: 'axe',
    unicode: '1fa93',
  },
  diya_lamp: {
    name: 'diya_lamp',
    unicode: '1fa94',
  },
  banjo: {
    name: 'banjo',
    unicode: '1fa95',
  },
  military_helmet: {
    name: 'military_helmet',
    unicode: '1fa96',
  },
  accordion: {
    name: 'accordion',
    unicode: '1fa97',
  },
  long_drum: {
    name: 'long_drum',
    unicode: '1fa98',
  },
  coin: {
    name: 'coin',
    unicode: '1fa99',
  },
  carpentry_saw: {
    name: 'carpentry_saw',
    unicode: '1fa9a',
  },
  screwdriver: {
    name: 'screwdriver',
    unicode: '1fa9b',
  },
  ladder: {
    name: 'ladder',
    unicode: '1fa9c',
  },
  hook: {
    name: 'hook',
    unicode: '1fa9d',
  },
  mirror: {
    name: 'mirror',
    unicode: '1fa9e',
  },
  window: {
    name: 'window',
    unicode: '1fa9f',
  },
  plunger: {
    name: 'plunger',
    unicode: '1faa0',
  },
  sewing_needle: {
    name: 'sewing_needle',
    unicode: '1faa1',
  },
  knot: {
    name: 'knot',
    unicode: '1faa2',
  },
  bucket: {
    name: 'bucket',
    unicode: '1faa3',
  },
  mouse_trap: {
    name: 'mouse_trap',
    unicode: '1faa4',
  },
  toothbrush: {
    name: 'toothbrush',
    unicode: '1faa5',
  },
  headstone: {
    name: 'headstone',
    unicode: '1faa6',
  },
  placard: {
    name: 'placard',
    unicode: '1faa7',
  },
  rock: {
    name: 'rock',
    unicode: '1faa8',
  },
  mirror_ball: {
    name: 'mirror_ball',
    unicode: '1faa9',
  },
  identification_card: {
    name: 'identification_card',
    unicode: '1faaa',
  },
  low_battery: {
    name: 'low_battery',
    unicode: '1faab',
  },
  hamsa: {
    name: 'hamsa',
    unicode: '1faac',
  },
  fly: {
    name: 'fly',
    unicode: '1fab0',
  },
  worm: {
    name: 'worm',
    unicode: '1fab1',
  },
  beetle: {
    name: 'beetle',
    unicode: '1fab2',
  },
  cockroach: {
    name: 'cockroach',
    unicode: '1fab3',
  },
  potted_plant: {
    name: 'potted_plant',
    unicode: '1fab4',
  },
  wood: {
    name: 'wood',
    unicode: '1fab5',
  },
  feather: {
    name: 'feather',
    unicode: '1fab6',
  },
  lotus: {
    name: 'lotus',
    unicode: '1fab7',
  },
  coral: {
    name: 'coral',
    unicode: '1fab8',
  },
  empty_nest: {
    name: 'empty_nest',
    unicode: '1fab9',
  },
  nest_with_eggs: {
    name: 'nest_with_eggs',
    unicode: '1faba',
  },
  anatomical_heart: {
    name: 'anatomical_heart',
    unicode: '1fac0',
  },
  lungs: {
    name: 'lungs',
    unicode: '1fac1',
  },
  people_hugging: {
    name: 'people_hugging',
    unicode: '1fac2',
  },
  pregnant_man: {
    name: 'pregnant_man',
    unicode: '1fac3',
    skinVariations: {
      '2': {
        name: 'pregnant_man#skin-tone-2',
        unicode: '1fac3-1f3fb',
      },
      '3': {
        name: 'pregnant_man#skin-tone-3',
        unicode: '1fac3-1f3fc',
      },
      '4': {
        name: 'pregnant_man#skin-tone-4',
        unicode: '1fac3-1f3fd',
      },
      '5': {
        name: 'pregnant_man#skin-tone-5',
        unicode: '1fac3-1f3fe',
      },
      '6': {
        name: 'pregnant_man#skin-tone-6',
        unicode: '1fac3-1f3ff',
      },
    },
  },
  pregnant_person: {
    name: 'pregnant_person',
    unicode: '1fac4',
    skinVariations: {
      '2': {
        name: 'pregnant_person#skin-tone-2',
        unicode: '1fac4-1f3fb',
      },
      '3': {
        name: 'pregnant_person#skin-tone-3',
        unicode: '1fac4-1f3fc',
      },
      '4': {
        name: 'pregnant_person#skin-tone-4',
        unicode: '1fac4-1f3fd',
      },
      '5': {
        name: 'pregnant_person#skin-tone-5',
        unicode: '1fac4-1f3fe',
      },
      '6': {
        name: 'pregnant_person#skin-tone-6',
        unicode: '1fac4-1f3ff',
      },
    },
  },
  person_with_crown: {
    name: 'person_with_crown',
    unicode: '1fac5',
    skinVariations: {
      '2': {
        name: 'person_with_crown#skin-tone-2',
        unicode: '1fac5-1f3fb',
      },
      '3': {
        name: 'person_with_crown#skin-tone-3',
        unicode: '1fac5-1f3fc',
      },
      '4': {
        name: 'person_with_crown#skin-tone-4',
        unicode: '1fac5-1f3fd',
      },
      '5': {
        name: 'person_with_crown#skin-tone-5',
        unicode: '1fac5-1f3fe',
      },
      '6': {
        name: 'person_with_crown#skin-tone-6',
        unicode: '1fac5-1f3ff',
      },
    },
  },
  blueberries: {
    name: 'blueberries',
    unicode: '1fad0',
  },
  bell_pepper: {
    name: 'bell_pepper',
    unicode: '1fad1',
  },
  olive: {
    name: 'olive',
    unicode: '1fad2',
  },
  flatbread: {
    name: 'flatbread',
    unicode: '1fad3',
  },
  tamale: {
    name: 'tamale',
    unicode: '1fad4',
  },
  fondue: {
    name: 'fondue',
    unicode: '1fad5',
  },
  teapot: {
    name: 'teapot',
    unicode: '1fad6',
  },
  pouring_liquid: {
    name: 'pouring_liquid',
    unicode: '1fad7',
  },
  beans: {
    name: 'beans',
    unicode: '1fad8',
  },
  jar: {
    name: 'jar',
    unicode: '1fad9',
  },
  melting_face: {
    name: 'melting_face',
    unicode: '1fae0',
  },
  saluting_face: {
    name: 'saluting_face',
    unicode: '1fae1',
  },
  face_with_open_eyes_and_hand_over_mouth: {
    name: 'face_with_open_eyes_and_hand_over_mouth',
    unicode: '1fae2',
  },
  face_with_peeking_eye: {
    name: 'face_with_peeking_eye',
    unicode: '1fae3',
  },
  face_with_diagonal_mouth: {
    name: 'face_with_diagonal_mouth',
    unicode: '1fae4',
  },
  dotted_line_face: {
    name: 'dotted_line_face',
    unicode: '1fae5',
  },
  biting_lip: {
    name: 'biting_lip',
    unicode: '1fae6',
  },
  bubbles: {
    name: 'bubbles',
    unicode: '1fae7',
  },
  hand_with_index_finger_and_thumb_crossed: {
    name: 'hand_with_index_finger_and_thumb_crossed',
    unicode: '1faf0',
    skinVariations: {
      '2': {
        name: 'hand_with_index_finger_and_thumb_crossed#skin-tone-2',
        unicode: '1faf0-1f3fb',
      },
      '3': {
        name: 'hand_with_index_finger_and_thumb_crossed#skin-tone-3',
        unicode: '1faf0-1f3fc',
      },
      '4': {
        name: 'hand_with_index_finger_and_thumb_crossed#skin-tone-4',
        unicode: '1faf0-1f3fd',
      },
      '5': {
        name: 'hand_with_index_finger_and_thumb_crossed#skin-tone-5',
        unicode: '1faf0-1f3fe',
      },
      '6': {
        name: 'hand_with_index_finger_and_thumb_crossed#skin-tone-6',
        unicode: '1faf0-1f3ff',
      },
    },
  },
  rightwards_hand: {
    name: 'rightwards_hand',
    unicode: '1faf1',
    skinVariations: {
      '2': {
        name: 'rightwards_hand#skin-tone-2',
        unicode: '1faf1-1f3fb',
      },
      '3': {
        name: 'rightwards_hand#skin-tone-3',
        unicode: '1faf1-1f3fc',
      },
      '4': {
        name: 'rightwards_hand#skin-tone-4',
        unicode: '1faf1-1f3fd',
      },
      '5': {
        name: 'rightwards_hand#skin-tone-5',
        unicode: '1faf1-1f3fe',
      },
      '6': {
        name: 'rightwards_hand#skin-tone-6',
        unicode: '1faf1-1f3ff',
      },
    },
  },
  leftwards_hand: {
    name: 'leftwards_hand',
    unicode: '1faf2',
    skinVariations: {
      '2': {
        name: 'leftwards_hand#skin-tone-2',
        unicode: '1faf2-1f3fb',
      },
      '3': {
        name: 'leftwards_hand#skin-tone-3',
        unicode: '1faf2-1f3fc',
      },
      '4': {
        name: 'leftwards_hand#skin-tone-4',
        unicode: '1faf2-1f3fd',
      },
      '5': {
        name: 'leftwards_hand#skin-tone-5',
        unicode: '1faf2-1f3fe',
      },
      '6': {
        name: 'leftwards_hand#skin-tone-6',
        unicode: '1faf2-1f3ff',
      },
    },
  },
  palm_down_hand: {
    name: 'palm_down_hand',
    unicode: '1faf3',
    skinVariations: {
      '2': {
        name: 'palm_down_hand#skin-tone-2',
        unicode: '1faf3-1f3fb',
      },
      '3': {
        name: 'palm_down_hand#skin-tone-3',
        unicode: '1faf3-1f3fc',
      },
      '4': {
        name: 'palm_down_hand#skin-tone-4',
        unicode: '1faf3-1f3fd',
      },
      '5': {
        name: 'palm_down_hand#skin-tone-5',
        unicode: '1faf3-1f3fe',
      },
      '6': {
        name: 'palm_down_hand#skin-tone-6',
        unicode: '1faf3-1f3ff',
      },
    },
  },
  palm_up_hand: {
    name: 'palm_up_hand',
    unicode: '1faf4',
    skinVariations: {
      '2': {
        name: 'palm_up_hand#skin-tone-2',
        unicode: '1faf4-1f3fb',
      },
      '3': {
        name: 'palm_up_hand#skin-tone-3',
        unicode: '1faf4-1f3fc',
      },
      '4': {
        name: 'palm_up_hand#skin-tone-4',
        unicode: '1faf4-1f3fd',
      },
      '5': {
        name: 'palm_up_hand#skin-tone-5',
        unicode: '1faf4-1f3fe',
      },
      '6': {
        name: 'palm_up_hand#skin-tone-6',
        unicode: '1faf4-1f3ff',
      },
    },
  },
  index_pointing_at_the_viewer: {
    name: 'index_pointing_at_the_viewer',
    unicode: '1faf5',
    skinVariations: {
      '2': {
        name: 'index_pointing_at_the_viewer#skin-tone-2',
        unicode: '1faf5-1f3fb',
      },
      '3': {
        name: 'index_pointing_at_the_viewer#skin-tone-3',
        unicode: '1faf5-1f3fc',
      },
      '4': {
        name: 'index_pointing_at_the_viewer#skin-tone-4',
        unicode: '1faf5-1f3fd',
      },
      '5': {
        name: 'index_pointing_at_the_viewer#skin-tone-5',
        unicode: '1faf5-1f3fe',
      },
      '6': {
        name: 'index_pointing_at_the_viewer#skin-tone-6',
        unicode: '1faf5-1f3ff',
      },
    },
  },
  heart_hands: {
    name: 'heart_hands',
    unicode: '1faf6',
    skinVariations: {
      '2': {
        name: 'heart_hands#skin-tone-2',
        unicode: '1faf6-1f3fb',
      },
      '3': {
        name: 'heart_hands#skin-tone-3',
        unicode: '1faf6-1f3fc',
      },
      '4': {
        name: 'heart_hands#skin-tone-4',
        unicode: '1faf6-1f3fd',
      },
      '5': {
        name: 'heart_hands#skin-tone-5',
        unicode: '1faf6-1f3fe',
      },
      '6': {
        name: 'heart_hands#skin-tone-6',
        unicode: '1faf6-1f3ff',
      },
    },
  },
  bangbang: {
    name: 'bangbang',
    unicode: '203c-fe0f',
  },
  interrobang: {
    name: 'interrobang',
    unicode: '2049-fe0f',
  },
  tm: {
    name: 'tm',
    unicode: '2122-fe0f',
  },
  information_source: {
    name: 'information_source',
    unicode: '2139-fe0f',
  },
  left_right_arrow: {
    name: 'left_right_arrow',
    unicode: '2194-fe0f',
  },
  arrow_up_down: {
    name: 'arrow_up_down',
    unicode: '2195-fe0f',
  },
  arrow_upper_left: {
    name: 'arrow_upper_left',
    unicode: '2196-fe0f',
  },
  arrow_upper_right: {
    name: 'arrow_upper_right',
    unicode: '2197-fe0f',
  },
  arrow_lower_right: {
    name: 'arrow_lower_right',
    unicode: '2198-fe0f',
  },
  arrow_lower_left: {
    name: 'arrow_lower_left',
    unicode: '2199-fe0f',
  },
  leftwards_arrow_with_hook: {
    name: 'leftwards_arrow_with_hook',
    unicode: '21a9-fe0f',
  },
  arrow_right_hook: {
    name: 'arrow_right_hook',
    unicode: '21aa-fe0f',
  },
  watch: {
    name: 'watch',
    unicode: '231a',
  },
  hourglass: {
    name: 'hourglass',
    unicode: '231b',
  },
  keyboard: {
    name: 'keyboard',
    unicode: '2328-fe0f',
  },
  eject: {
    name: 'eject',
    unicode: '23cf-fe0f',
  },
  fast_forward: {
    name: 'fast_forward',
    unicode: '23e9',
  },
  rewind: {
    name: 'rewind',
    unicode: '23ea',
  },
  arrow_double_up: {
    name: 'arrow_double_up',
    unicode: '23eb',
  },
  arrow_double_down: {
    name: 'arrow_double_down',
    unicode: '23ec',
  },
  black_right_pointing_double_triangle_with_vertical_bar: {
    name: 'black_right_pointing_double_triangle_with_vertical_bar',
    unicode: '23ed-fe0f',
  },
  black_left_pointing_double_triangle_with_vertical_bar: {
    name: 'black_left_pointing_double_triangle_with_vertical_bar',
    unicode: '23ee-fe0f',
  },
  black_right_pointing_triangle_with_double_vertical_bar: {
    name: 'black_right_pointing_triangle_with_double_vertical_bar',
    unicode: '23ef-fe0f',
  },
  alarm_clock: {
    name: 'alarm_clock',
    unicode: '23f0',
  },
  stopwatch: {
    name: 'stopwatch',
    unicode: '23f1-fe0f',
  },
  timer_clock: {
    name: 'timer_clock',
    unicode: '23f2-fe0f',
  },
  hourglass_flowing_sand: {
    name: 'hourglass_flowing_sand',
    unicode: '23f3',
  },
  double_vertical_bar: {
    name: 'double_vertical_bar',
    unicode: '23f8-fe0f',
  },
  black_square_for_stop: {
    name: 'black_square_for_stop',
    unicode: '23f9-fe0f',
  },
  black_circle_for_record: {
    name: 'black_circle_for_record',
    unicode: '23fa-fe0f',
  },
  m: {
    name: 'm',
    unicode: '24c2-fe0f',
  },
  black_small_square: {
    name: 'black_small_square',
    unicode: '25aa-fe0f',
  },
  white_small_square: {
    name: 'white_small_square',
    unicode: '25ab-fe0f',
  },
  arrow_forward: {
    name: 'arrow_forward',
    unicode: '25b6-fe0f',
  },
  arrow_backward: {
    name: 'arrow_backward',
    unicode: '25c0-fe0f',
  },
  white_medium_square: {
    name: 'white_medium_square',
    unicode: '25fb-fe0f',
  },
  black_medium_square: {
    name: 'black_medium_square',
    unicode: '25fc-fe0f',
  },
  white_medium_small_square: {
    name: 'white_medium_small_square',
    unicode: '25fd',
  },
  black_medium_small_square: {
    name: 'black_medium_small_square',
    unicode: '25fe',
  },
  sunny: {
    name: 'sunny',
    unicode: '2600-fe0f',
  },
  cloud: {
    name: 'cloud',
    unicode: '2601-fe0f',
  },
  umbrella: {
    name: 'umbrella',
    unicode: '2602-fe0f',
  },
  snowman: {
    name: 'snowman',
    unicode: '2603-fe0f',
  },
  comet: {
    name: 'comet',
    unicode: '2604-fe0f',
  },
  phone: {
    name: 'phone',
    unicode: '260e-fe0f',
  },
  telephone: {
    name: 'telephone',
    unicode: '260e-fe0f',
    aliasOf: 'phone',
  },
  ballot_box_with_check: {
    name: 'ballot_box_with_check',
    unicode: '2611-fe0f',
  },
  umbrella_with_rain_drops: {
    name: 'umbrella_with_rain_drops',
    unicode: '2614',
  },
  coffee: {
    name: 'coffee',
    unicode: '2615',
  },
  shamrock: {
    name: 'shamrock',
    unicode: '2618-fe0f',
  },
  point_up: {
    name: 'point_up',
    unicode: '261d-fe0f',
    skinVariations: {
      '2': {
        name: 'point_up#skin-tone-2',
        unicode: '261d-1f3fb',
      },
      '3': {
        name: 'point_up#skin-tone-3',
        unicode: '261d-1f3fc',
      },
      '4': {
        name: 'point_up#skin-tone-4',
        unicode: '261d-1f3fd',
      },
      '5': {
        name: 'point_up#skin-tone-5',
        unicode: '261d-1f3fe',
      },
      '6': {
        name: 'point_up#skin-tone-6',
        unicode: '261d-1f3ff',
      },
    },
  },
  skull_and_crossbones: {
    name: 'skull_and_crossbones',
    unicode: '2620-fe0f',
  },
  radioactive_sign: {
    name: 'radioactive_sign',
    unicode: '2622-fe0f',
  },
  biohazard_sign: {
    name: 'biohazard_sign',
    unicode: '2623-fe0f',
  },
  orthodox_cross: {
    name: 'orthodox_cross',
    unicode: '2626-fe0f',
  },
  star_and_crescent: {
    name: 'star_and_crescent',
    unicode: '262a-fe0f',
  },
  peace_symbol: {
    name: 'peace_symbol',
    unicode: '262e-fe0f',
  },
  yin_yang: {
    name: 'yin_yang',
    unicode: '262f-fe0f',
  },
  wheel_of_dharma: {
    name: 'wheel_of_dharma',
    unicode: '2638-fe0f',
  },
  white_frowning_face: {
    name: 'white_frowning_face',
    unicode: '2639-fe0f',
  },
  relaxed: {
    name: 'relaxed',
    unicode: '263a-fe0f',
  },
  female_sign: {
    name: 'female_sign',
    unicode: '2640-fe0f',
  },
  male_sign: {
    name: 'male_sign',
    unicode: '2642-fe0f',
  },
  aries: {
    name: 'aries',
    unicode: '2648',
  },
  taurus: {
    name: 'taurus',
    unicode: '2649',
  },
  gemini: {
    name: 'gemini',
    unicode: '264a',
  },
  cancer: {
    name: 'cancer',
    unicode: '264b',
  },
  leo: {
    name: 'leo',
    unicode: '264c',
  },
  virgo: {
    name: 'virgo',
    unicode: '264d',
  },
  libra: {
    name: 'libra',
    unicode: '264e',
  },
  scorpius: {
    name: 'scorpius',
    unicode: '264f',
  },
  sagittarius: {
    name: 'sagittarius',
    unicode: '2650',
  },
  capricorn: {
    name: 'capricorn',
    unicode: '2651',
  },
  aquarius: {
    name: 'aquarius',
    unicode: '2652',
  },
  pisces: {
    name: 'pisces',
    unicode: '2653',
  },
  chess_pawn: {
    name: 'chess_pawn',
    unicode: '265f-fe0f',
  },
  spades: {
    name: 'spades',
    unicode: '2660-fe0f',
  },
  clubs: {
    name: 'clubs',
    unicode: '2663-fe0f',
  },
  hearts: {
    name: 'hearts',
    unicode: '2665-fe0f',
  },
  diamonds: {
    name: 'diamonds',
    unicode: '2666-fe0f',
  },
  hotsprings: {
    name: 'hotsprings',
    unicode: '2668-fe0f',
  },
  recycle: {
    name: 'recycle',
    unicode: '267b-fe0f',
  },
  infinity: {
    name: 'infinity',
    unicode: '267e-fe0f',
  },
  wheelchair: {
    name: 'wheelchair',
    unicode: '267f',
  },
  hammer_and_pick: {
    name: 'hammer_and_pick',
    unicode: '2692-fe0f',
  },
  anchor: {
    name: 'anchor',
    unicode: '2693',
  },
  crossed_swords: {
    name: 'crossed_swords',
    unicode: '2694-fe0f',
  },
  medical_symbol: {
    name: 'medical_symbol',
    unicode: '2695-fe0f',
  },
  staff_of_aesculapius: {
    name: 'staff_of_aesculapius',
    unicode: '2695-fe0f',
    aliasOf: 'medical_symbol',
  },
  scales: {
    name: 'scales',
    unicode: '2696-fe0f',
  },
  alembic: {
    name: 'alembic',
    unicode: '2697-fe0f',
  },
  gear: {
    name: 'gear',
    unicode: '2699-fe0f',
  },
  atom_symbol: {
    name: 'atom_symbol',
    unicode: '269b-fe0f',
  },
  fleur_de_lis: {
    name: 'fleur_de_lis',
    unicode: '269c-fe0f',
  },
  warning: {
    name: 'warning',
    unicode: '26a0-fe0f',
  },
  zap: {
    name: 'zap',
    unicode: '26a1',
  },
  transgender_symbol: {
    name: 'transgender_symbol',
    unicode: '26a7-fe0f',
  },
  white_circle: {
    name: 'white_circle',
    unicode: '26aa',
  },
  black_circle: {
    name: 'black_circle',
    unicode: '26ab',
  },
  coffin: {
    name: 'coffin',
    unicode: '26b0-fe0f',
  },
  funeral_urn: {
    name: 'funeral_urn',
    unicode: '26b1-fe0f',
  },
  soccer: {
    name: 'soccer',
    unicode: '26bd',
  },
  baseball: {
    name: 'baseball',
    unicode: '26be',
  },
  snowman_without_snow: {
    name: 'snowman_without_snow',
    unicode: '26c4',
  },
  partly_sunny: {
    name: 'partly_sunny',
    unicode: '26c5',
  },
  thunder_cloud_and_rain: {
    name: 'thunder_cloud_and_rain',
    unicode: '26c8-fe0f',
  },
  ophiuchus: {
    name: 'ophiuchus',
    unicode: '26ce',
  },
  pick: {
    name: 'pick',
    unicode: '26cf-fe0f',
  },
  helmet_with_white_cross: {
    name: 'helmet_with_white_cross',
    unicode: '26d1-fe0f',
  },
  chains: {
    name: 'chains',
    unicode: '26d3-fe0f',
  },
  no_entry: {
    name: 'no_entry',
    unicode: '26d4',
  },
  shinto_shrine: {
    name: 'shinto_shrine',
    unicode: '26e9-fe0f',
  },
  church: {
    name: 'church',
    unicode: '26ea',
  },
  mountain: {
    name: 'mountain',
    unicode: '26f0-fe0f',
  },
  umbrella_on_ground: {
    name: 'umbrella_on_ground',
    unicode: '26f1-fe0f',
  },
  fountain: {
    name: 'fountain',
    unicode: '26f2',
  },
  golf: {
    name: 'golf',
    unicode: '26f3',
  },
  ferry: {
    name: 'ferry',
    unicode: '26f4-fe0f',
  },
  boat: {
    name: 'boat',
    unicode: '26f5',
  },
  sailboat: {
    name: 'sailboat',
    unicode: '26f5',
    aliasOf: 'boat',
  },
  skier: {
    name: 'skier',
    unicode: '26f7-fe0f',
  },
  ice_skate: {
    name: 'ice_skate',
    unicode: '26f8-fe0f',
  },
  'woman-bouncing-ball': {
    name: 'woman-bouncing-ball',
    unicode: '26f9-fe0f-200d-2640-fe0f',
    skinVariations: {
      '2': {
        name: 'woman-bouncing-ball#skin-tone-2',
        unicode: '26f9-1f3fb-200d-2640-fe0f',
      },
      '3': {
        name: 'woman-bouncing-ball#skin-tone-3',
        unicode: '26f9-1f3fc-200d-2640-fe0f',
      },
      '4': {
        name: 'woman-bouncing-ball#skin-tone-4',
        unicode: '26f9-1f3fd-200d-2640-fe0f',
      },
      '5': {
        name: 'woman-bouncing-ball#skin-tone-5',
        unicode: '26f9-1f3fe-200d-2640-fe0f',
      },
      '6': {
        name: 'woman-bouncing-ball#skin-tone-6',
        unicode: '26f9-1f3ff-200d-2640-fe0f',
      },
    },
  },
  'man-bouncing-ball': {
    name: 'man-bouncing-ball',
    unicode: '26f9-fe0f-200d-2642-fe0f',
    skinVariations: {
      '2': {
        name: 'man-bouncing-ball#skin-tone-2',
        unicode: '26f9-1f3fb-200d-2642-fe0f',
      },
      '3': {
        name: 'man-bouncing-ball#skin-tone-3',
        unicode: '26f9-1f3fc-200d-2642-fe0f',
      },
      '4': {
        name: 'man-bouncing-ball#skin-tone-4',
        unicode: '26f9-1f3fd-200d-2642-fe0f',
      },
      '5': {
        name: 'man-bouncing-ball#skin-tone-5',
        unicode: '26f9-1f3fe-200d-2642-fe0f',
      },
      '6': {
        name: 'man-bouncing-ball#skin-tone-6',
        unicode: '26f9-1f3ff-200d-2642-fe0f',
      },
    },
  },
  person_with_ball: {
    name: 'person_with_ball',
    unicode: '26f9-fe0f',
    skinVariations: {
      '2': {
        name: 'person_with_ball#skin-tone-2',
        unicode: '26f9-1f3fb',
      },
      '3': {
        name: 'person_with_ball#skin-tone-3',
        unicode: '26f9-1f3fc',
      },
      '4': {
        name: 'person_with_ball#skin-tone-4',
        unicode: '26f9-1f3fd',
      },
      '5': {
        name: 'person_with_ball#skin-tone-5',
        unicode: '26f9-1f3fe',
      },
      '6': {
        name: 'person_with_ball#skin-tone-6',
        unicode: '26f9-1f3ff',
      },
    },
  },
  tent: {
    name: 'tent',
    unicode: '26fa',
  },
  fuelpump: {
    name: 'fuelpump',
    unicode: '26fd',
  },
  scissors: {
    name: 'scissors',
    unicode: '2702-fe0f',
  },
  white_check_mark: {
    name: 'white_check_mark',
    unicode: '2705',
  },
  airplane: {
    name: 'airplane',
    unicode: '2708-fe0f',
  },
  email: {
    name: 'email',
    unicode: '2709-fe0f',
  },
  envelope: {
    name: 'envelope',
    unicode: '2709-fe0f',
    aliasOf: 'email',
  },
  fist: {
    name: 'fist',
    unicode: '270a',
    skinVariations: {
      '2': {
        name: 'fist#skin-tone-2',
        unicode: '270a-1f3fb',
      },
      '3': {
        name: 'fist#skin-tone-3',
        unicode: '270a-1f3fc',
      },
      '4': {
        name: 'fist#skin-tone-4',
        unicode: '270a-1f3fd',
      },
      '5': {
        name: 'fist#skin-tone-5',
        unicode: '270a-1f3fe',
      },
      '6': {
        name: 'fist#skin-tone-6',
        unicode: '270a-1f3ff',
      },
    },
  },
  hand: {
    name: 'hand',
    unicode: '270b',
    skinVariations: {
      '2': {
        name: 'hand#skin-tone-2',
        unicode: '270b-1f3fb',
      },
      '3': {
        name: 'hand#skin-tone-3',
        unicode: '270b-1f3fc',
      },
      '4': {
        name: 'hand#skin-tone-4',
        unicode: '270b-1f3fd',
      },
      '5': {
        name: 'hand#skin-tone-5',
        unicode: '270b-1f3fe',
      },
      '6': {
        name: 'hand#skin-tone-6',
        unicode: '270b-1f3ff',
      },
    },
  },
  raised_hand: {
    name: 'raised_hand',
    unicode: '270b',
    aliasOf: 'hand',
    skinVariations: {
      '2': {
        name: 'raised_hand#skin-tone-2',
        unicode: '270b-1f3fb',
      },
      '3': {
        name: 'raised_hand#skin-tone-3',
        unicode: '270b-1f3fc',
      },
      '4': {
        name: 'raised_hand#skin-tone-4',
        unicode: '270b-1f3fd',
      },
      '5': {
        name: 'raised_hand#skin-tone-5',
        unicode: '270b-1f3fe',
      },
      '6': {
        name: 'raised_hand#skin-tone-6',
        unicode: '270b-1f3ff',
      },
    },
  },
  v: {
    name: 'v',
    unicode: '270c-fe0f',
    skinVariations: {
      '2': {
        name: 'v#skin-tone-2',
        unicode: '270c-1f3fb',
      },
      '3': {
        name: 'v#skin-tone-3',
        unicode: '270c-1f3fc',
      },
      '4': {
        name: 'v#skin-tone-4',
        unicode: '270c-1f3fd',
      },
      '5': {
        name: 'v#skin-tone-5',
        unicode: '270c-1f3fe',
      },
      '6': {
        name: 'v#skin-tone-6',
        unicode: '270c-1f3ff',
      },
    },
  },
  writing_hand: {
    name: 'writing_hand',
    unicode: '270d-fe0f',
    skinVariations: {
      '2': {
        name: 'writing_hand#skin-tone-2',
        unicode: '270d-1f3fb',
      },
      '3': {
        name: 'writing_hand#skin-tone-3',
        unicode: '270d-1f3fc',
      },
      '4': {
        name: 'writing_hand#skin-tone-4',
        unicode: '270d-1f3fd',
      },
      '5': {
        name: 'writing_hand#skin-tone-5',
        unicode: '270d-1f3fe',
      },
      '6': {
        name: 'writing_hand#skin-tone-6',
        unicode: '270d-1f3ff',
      },
    },
  },
  pencil2: {
    name: 'pencil2',
    unicode: '270f-fe0f',
  },
  black_nib: {
    name: 'black_nib',
    unicode: '2712-fe0f',
  },
  heavy_check_mark: {
    name: 'heavy_check_mark',
    unicode: '2714-fe0f',
  },
  heavy_multiplication_x: {
    name: 'heavy_multiplication_x',
    unicode: '2716-fe0f',
  },
  latin_cross: {
    name: 'latin_cross',
    unicode: '271d-fe0f',
  },
  star_of_david: {
    name: 'star_of_david',
    unicode: '2721-fe0f',
  },
  sparkles: {
    name: 'sparkles',
    unicode: '2728',
  },
  eight_spoked_asterisk: {
    name: 'eight_spoked_asterisk',
    unicode: '2733-fe0f',
  },
  eight_pointed_black_star: {
    name: 'eight_pointed_black_star',
    unicode: '2734-fe0f',
  },
  snowflake: {
    name: 'snowflake',
    unicode: '2744-fe0f',
  },
  sparkle: {
    name: 'sparkle',
    unicode: '2747-fe0f',
  },
  x: {
    name: 'x',
    unicode: '274c',
  },
  negative_squared_cross_mark: {
    name: 'negative_squared_cross_mark',
    unicode: '274e',
  },
  question: {
    name: 'question',
    unicode: '2753',
  },
  grey_question: {
    name: 'grey_question',
    unicode: '2754',
  },
  grey_exclamation: {
    name: 'grey_exclamation',
    unicode: '2755',
  },
  exclamation: {
    name: 'exclamation',
    unicode: '2757',
  },
  heavy_exclamation_mark: {
    name: 'heavy_exclamation_mark',
    unicode: '2757',
    aliasOf: 'exclamation',
  },
  heavy_heart_exclamation_mark_ornament: {
    name: 'heavy_heart_exclamation_mark_ornament',
    unicode: '2763-fe0f',
  },
  heart_on_fire: {
    name: 'heart_on_fire',
    unicode: '2764-fe0f-200d-1f525',
  },
  mending_heart: {
    name: 'mending_heart',
    unicode: '2764-fe0f-200d-1fa79',
  },
  heart: {
    name: 'heart',
    unicode: '2764-fe0f',
  },
  heavy_plus_sign: {
    name: 'heavy_plus_sign',
    unicode: '2795',
  },
  heavy_minus_sign: {
    name: 'heavy_minus_sign',
    unicode: '2796',
  },
  heavy_division_sign: {
    name: 'heavy_division_sign',
    unicode: '2797',
  },
  arrow_right: {
    name: 'arrow_right',
    unicode: '27a1-fe0f',
  },
  curly_loop: {
    name: 'curly_loop',
    unicode: '27b0',
  },
  loop: {
    name: 'loop',
    unicode: '27bf',
  },
  arrow_heading_up: {
    name: 'arrow_heading_up',
    unicode: '2934-fe0f',
  },
  arrow_heading_down: {
    name: 'arrow_heading_down',
    unicode: '2935-fe0f',
  },
  arrow_left: {
    name: 'arrow_left',
    unicode: '2b05-fe0f',
  },
  arrow_up: {
    name: 'arrow_up',
    unicode: '2b06-fe0f',
  },
  arrow_down: {
    name: 'arrow_down',
    unicode: '2b07-fe0f',
  },
  black_large_square: {
    name: 'black_large_square',
    unicode: '2b1b',
  },
  white_large_square: {
    name: 'white_large_square',
    unicode: '2b1c',
  },
  star: {
    name: 'star',
    unicode: '2b50',
  },
  o: {
    name: 'o',
    unicode: '2b55',
  },
  wavy_dash: {
    name: 'wavy_dash',
    unicode: '3030-fe0f',
  },
  part_alternation_mark: {
    name: 'part_alternation_mark',
    unicode: '303d-fe0f',
  },
  congratulations: {
    name: 'congratulations',
    unicode: '3297-fe0f',
  },
  secret: {
    name: 'secret',
    unicode: '3299-fe0f',
  },
};
