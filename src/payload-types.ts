/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    tenants: Tenant;
    pages: Page;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  roles: ('super-admin' | 'user')[];
  tenants?:
    | {
        tenant: number | Tenant;
        roles: ('admin' | 'user')[];
        id?: string | null;
      }[]
    | null;
  lastLoggedInTenant?: (number | null) | Tenant;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants".
 */
export interface Tenant {
  id: number;
  name: string;
  domains?:
    | {
        domain: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  slug?: string | null;
  tenant?: (number | null) | Tenant;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  blocks?:
    | (
        | {
            title: string;
            subtitle: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'page-header';
          }
        | SiteHero
        | {
            content?:
              | (
                  | {
                      content: {
                        root: {
                          type: string;
                          children: {
                            type: string;
                            version: number;
                            [k: string]: unknown;
                          }[];
                          direction: ('ltr' | 'rtl') | null;
                          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                          indent: number;
                          version: number;
                        };
                        [k: string]: unknown;
                      };
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'richtext';
                    }
                  | {
                      image: number | Media;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'mediaBlock';
                    }
                )[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            title: string;
            statistics?:
              | {
                  name: string;
                  value: string;
                  description: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  };
                  icon?: number | Media | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'statistics';
          }
        | {
            steps?:
              | (
                  | {
                      title: string;
                      hint?: {
                        root: {
                          type: string;
                          children: {
                            type: string;
                            version: number;
                            [k: string]: unknown;
                          }[];
                          direction: ('ltr' | 'rtl') | null;
                          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                          indent: number;
                          version: number;
                        };
                        [k: string]: unknown;
                      } | null;
                      defaultFetchExistingRobots?: boolean | null;
                      existingRobotsTxt: string;
                      placeholder: string;
                      urlValidationError: string;
                      fetch: string;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'existing-robots-txt';
                    }
                  | {
                      title: string;
                      hint?: {
                        root: {
                          type: string;
                          children: {
                            type: string;
                            version: number;
                            [k: string]: unknown;
                          }[];
                          direction: ('ltr' | 'rtl') | null;
                          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                          indent: number;
                          version: number;
                        };
                        [k: string]: unknown;
                      } | null;
                      crawlDelay: {
                        label: string;
                        title: string;
                      };
                      cacheDelay: {
                        label: string;
                        title: string;
                      };
                      visitTime: {
                        label: string;
                        title: string;
                      };
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'delays';
                    }
                  | {
                      title: string;
                      hint?: {
                        root: {
                          type: string;
                          children: {
                            type: string;
                            version: number;
                            [k: string]: unknown;
                          }[];
                          direction: ('ltr' | 'rtl') | null;
                          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                          indent: number;
                          version: number;
                        };
                        [k: string]: unknown;
                      } | null;
                      selectPlatform: {
                        label: string;
                        title: string;
                      };
                      disallowedPaths: {
                        label: string;
                        title: string;
                      };
                      allowedPaths: {
                        label: string;
                        title: string;
                      };
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'paths';
                    }
                  | {
                      title: string;
                      hint?: {
                        root: {
                          type: string;
                          children: {
                            type: string;
                            version: number;
                            [k: string]: unknown;
                          }[];
                          direction: ('ltr' | 'rtl') | null;
                          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                          indent: number;
                          version: number;
                        };
                        [k: string]: unknown;
                      } | null;
                      aiWebCrawlers: {
                        label: string;
                        title: string;
                      };
                      searchEngineCrawlers: {
                        label: string;
                        title: string;
                      };
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'block-bots';
                    }
                  | {
                      title: string;
                      hint?: {
                        root: {
                          type: string;
                          children: {
                            type: string;
                            version: number;
                            [k: string]: unknown;
                          }[];
                          direction: ('ltr' | 'rtl') | null;
                          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                          indent: number;
                          version: number;
                        };
                        [k: string]: unknown;
                      } | null;
                      placeholder: string;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'site-maps';
                    }
                  | {
                      title: string;
                      hint?: {
                        root: {
                          type: string;
                          children: {
                            type: string;
                            version: number;
                            [k: string]: unknown;
                          }[];
                          direction: ('ltr' | 'rtl') | null;
                          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                          indent: number;
                          version: number;
                        };
                        [k: string]: unknown;
                      } | null;
                      placeholder: string;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'finish';
                    }
                )[]
              | null;
            actions: {
              showRobotsTxt: string;
              continue: string;
              back: string;
              reset: string;
              download: string;
              copyToClipboard: string;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'robots-txt-generator';
          }
      )[]
    | null;
  meta?: {
    title?: string | null;
    image?: number | Media | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SiteHero".
 */
export interface SiteHero {
  heroHeaders?:
    | {
        headingType?: ('largeHeading' | 'subHeading' | 'rotatingText') | null;
        title?: string | null;
        id?: string | null;
      }[]
    | null;
  heroDescription: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  heroCallToAction?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'page-hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}