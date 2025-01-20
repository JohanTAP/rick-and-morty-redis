export interface BibliaResponse {
  [key: string]: Biblia;
}

export interface Biblia {
  name?: string;
  version?: string;
  testament?: {
    [key: string]: {
      books?: {
        [key: string]: {
          chapters?: {
            [key: string]: {
              verses?: {
                [key: string]: string;
              };
            };
          };
        };
      };
    };
  };
  books?: {
    [key: string]: {
      chapters?: {
        [key: string]: {
          verses?: {
            [key: string]: string;
          };
        };
      };
    };
  };
  chapters?: {
    [key: string]: {
      verses?: {
        [key: string]: string;
      };
    };
  };
  verses?: {
    [key: string]: string;
  };
  text?: string;
}
