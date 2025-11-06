declare module 'react-native-video-compressor' {
  export interface CompressOptions {
    compressionMethod: 'auto' | 'manual';
    options?: {
      width?: number;
      height?: number;
      bitrate?: number;
      fps?: number;
    };
  }

  export const compress: (uri: string, options: CompressOptions) => Promise<string>;
}
