import { TGraphqlIdentifier } from "@graphql/schema";

export function getContent<T> (key: string, content: TGraphqlIdentifier[] | undefined): T | undefined {
    return content?.find(({ __typename }) => __typename === key) as T | undefined
}