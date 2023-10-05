import { generateComponents } from '@uploadthing/react';

import type { OurFileRouter } from '~/server/storage/uploadthing';

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
