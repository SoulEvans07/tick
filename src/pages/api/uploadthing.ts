import { createNextPageApiHandler } from 'uploadthing/next-legacy';

import { fileRouter } from '~/server/storage/uploadthing';

// export API handler
export default createNextPageApiHandler({
  router: fileRouter,
});
