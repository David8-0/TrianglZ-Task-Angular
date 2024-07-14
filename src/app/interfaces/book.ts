export interface Book {
      id:string;
      title: string;
      category: string;
      author: string;
      ISBN: number,
      price: number,
      version: number,
      edition: string;
      image?: string;
      releaseDate: string;
      brief: string;
      pages: number;
      toRead: number;
      olderVersion?: number;
      pdf:string;
}
