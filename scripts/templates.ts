import {
  getParamTypeName,
  getResponseTypeName,
  getFunctionName,
} from "./convert";

export type Property = {
  name?: string;
  description?: string;
  types: string;
  enums?: string[];
  children?: Property[];
  arrayProp?: Property;
  required?: boolean;
};

function getParamsFromUri(uri: string) {
  return uri
    .split("/")
    .filter((str) => str.match(/^\$\{.*\}$/))
    .map((str) => str.replace("${", "").replace("}", ""));
}

export function getHeader() {
  return `
    // This file was automatically generated.
    import axios from 'axios';
    import { stringify } from 'qs';

    export const CHATWORK_URL = 'https://api.chatwork.com/v2';

    export type RateLimits = {
      /** 次に制限がリセットされる時間（Unix time） */
      'x-ratelimit-reset': string
      /** 残りコール回数 */
      'x-ratelimit-remaining': string
      /** 最大コール回数 */
      'x-ratelimit-limit': string
    }
  `;
}

export function getClass(functions: string) {
  return `
    /**
     * Chatwork API V2
     */
    export default class ChatworkApi {
      private readonly headers: any;

      private _rateLimits?: RateLimits;

      /**
       * API制限情報
       * APIが呼び出されるとレスポンスヘッダの情報を基に更新される
       */
      get rateLimits() {
        return this._rateLimits;
      }

      constructor(private api_token: string) {
        this.headers = {
          "X-ChatWorkToken": this.api_token,
        }
      }

      private saveRateLimits(headers: any) {
        const rateLimits = Object.entries(headers)
          .filter(([key, value]) => key.startsWith('x-ratelimit'));
        this._rateLimits = Object.fromEntries(rateLimits) as RateLimits;
      }

      private async get<T>(uri: string, params: any = {}) {
        const { data, headers } = await axios.get(
          CHATWORK_URL + uri,
          {
            headers: this.headers,
            params,
          }
        );

        this.saveRateLimits(headers);

        return data as T;
      }

      private async post<T>(uri: string, params: any = {}) {
        const { data, headers } = await axios.post(
          CHATWORK_URL + uri,
          stringify(params),
          {
            headers: {
              ...this.headers,
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );

        this.saveRateLimits(headers);

        return data as T;
      }

      private async delete<T>(uri: string, params: any = {}) {
        const { data, headers } = await axios.delete(
          CHATWORK_URL + uri,
          {
            headers: this.headers,
            params,
          }
        );

        this.saveRateLimits(headers);

        return data as T;
      }

      private async put<T>(uri: string, params: any = {}) {
        const { data, headers } = await axios.put(
          CHATWORK_URL + uri,
          stringify(params),
          {
            headers: {
              ...this.headers,
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        );

        this.saveRateLimits(headers);

        return data as T;
      }

      ${functions}
    }
    `;
}

export function getFunction(endPoint: any) {
  const functionName = getFunctionName(endPoint);
  const uri = endPoint.uri;
  const description = endPoint.info.description;
  const paramType = getParamTypeName(endPoint);
  const returnType = getResponseTypeName(endPoint);
  const method = endPoint.method;
  const extraParams = getParamsFromUri(uri)
    .map((p) => `${p}: string | number, `)
    .join("");
  const paramRequired = endPoint.paramRequired;

  const params = `params${paramRequired ? "" : "?"}: ${paramType}`;

  return `

    /**
     * ${description}
     */
    async ${functionName} (${extraParams}${params}) {
      return (await this.${method.toLowerCase()}<${returnType}>(\`${uri}\`, params));
    }
    `;
}

export function getTypeString({ types, enums, children, arrayProp }: Property) {
  if (enums) {
    const enumStr = enums.map((e) => `"${e}"`).join(" | ");
    return `${enumStr}`;
  }

  if (types === "object") {
    return children
      ? `{
          ${children.map(propToType).join("\n")}
        }`
      : "any";
  }

  if (types === "array") {
    return arrayProp ? `${getTypeString(arrayProp)}[]` : "any";
  }

  return `${types}`;
}

function propToType(prop: Property) {
  return `
  /** ${prop.description || ""} */
  ${prop.name}${prop.required ? "" : "?"}: ${getTypeString(prop)}
  `;
}

export function getType(typeName: string, props: Property | Property[]) {
  if (Array.isArray(props)) {
    return `
    export type ${typeName} = {
      ${props.map(propToType).join("\n")}
    }
    `;
  }

  return `export type ${typeName} = ${getTypeString(props)}`;
}
