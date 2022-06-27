import { TGraphqlIdentifier } from "@graphql/schema";

export function getContent<T> (key: string, content: TGraphqlIdentifier[] | undefined): any | undefined {
    const filtered = content?.filter(({ __typename }) => __typename === key) as T[] | undefined

    if (filtered) {
        if (filtered.length > 1) {
            return filtered
        }

        return filtered[0]
    }

    return 
}