# TODO: Fix Http 413 Error for Large Video Uploads

## Tasks
- [x] Update video compression MAX_SIZE from 10MB to 4MB to fit Vercel serverless limits
- [x] Lower image quality from 0.7 to 0.5 for smaller file sizes
- [x] Add final file size check in handleSubmit before sending to prevent oversized requests
- [x] Test the changes to ensure videos under 4MB and images are compressed adequately

## Notes
- Vercel serverless functions have a 5MB request body limit; targeting 4MB for safety.
- Compression logic already handles videos; images need quality adjustment.
- If file still too large after compression, alert user and clear media.
