import { UTApi } from 'uploadthing/server';
import { createUploadthing, type FileRouter } from 'uploadthing/next-legacy';
import { getAuth } from '@clerk/nextjs/server';
import { z } from 'zod';

export const uploadthing = new UTApi();

const f = createUploadthing();

export const fileRouter = {
  imagePost: f({ image: { maxFileSize: '1MB' } })
    .input(z.object({ content: z.string() }))
    .middleware(({ req, input }) => {
      const session = getAuth(req);
      const userId = session.userId;

      if (!userId) throw new Error('Unauthorized');

      return { userId, content: input.content };
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log('Upload complete for userId:', metadata.userId);

      console.log('file url', file.url);
    }),
  customEmoji: f({ image: { maxFileSize: '64KB' } })
    .input(z.object({ name: z.string() }))
    .middleware(({ req, input }) => {
      const session = getAuth(req);
      const userId = session.userId;

      if (!userId) throw new Error('Unauthorized');

      return { userId, name: input.name };
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log('emoji:', file.name, metadata.name);
      console.log('file url', file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof fileRouter;
