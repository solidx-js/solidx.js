import { randomID } from './randomID';

export type IUriData = {
  href: string;
  protocol: string;
  host: string;
  pathname: string;
  search: string;
  query: Record<string, string>;
};

export const URIUtil = {
  parse(href: string): IUriData {
    const protocol = href.match(/^([a-z]+:)\/\//)?.[1] ?? '';
    if (!protocol) return { href, protocol, host: '', pathname: '', search: '', query: {} };

    let host = '';
    let pathname = '';
    let search = '';

    const _hashReplace = randomID();
    const _uri = protocol ? href.replace(protocol, 'http:').replace(/\#/g, _hashReplace) : href; // URL 构造函数要求必须是标准协议，所以这里先替换成 http

    try {
      const _parsed = new URL(_uri);
      host = _parsed.host;
      pathname = _parsed.pathname;
      search = _parsed.search;
    } catch (e) {
      // skip
    }

    search = search.replace(new RegExp(_hashReplace, 'g'), '#'); // 还原 hash

    const query = Object.fromEntries(new URLSearchParams(search));

    return { href, protocol, host, pathname, search, query };
  },

  stringify(data: Partial<IUriData>): string {
    if (data.href) return data.href;

    const { protocol, host, pathname, query } = data;
    const search = new URLSearchParams(query).toString();

    let uri = '';

    if (protocol) uri += protocol + '//';
    if (host) uri += host;
    if (pathname) uri += pathname;
    if (search) uri += '?' + search;

    return uri;
  },
};
