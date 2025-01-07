const GET_DATA = `
   query {
      splashImageCollection (limit: 1) {
            items {
                splashMedia {
                    url
                    title
                    description
                    contentType
                    fileName
                    size
                    width
                    height
                        }
                }
        }
   }
`;

const fetchContentfulData = async (query) => {
  const SPACE_ID = "g1y0n24a1rp6";
  const ACCESS_TOKEN = "pwnsUNysXMToX9rqmoFRCdyzZHQjsvx7dqcXoaPWv-0";

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const { data, errors } = await response.json();

  if (errors) {
    console.error(errors);
    throw new Error("Failed to fetch data");
  }

  return data;
};

export const fetchData = () => fetchContentfulData(GET_DATA);
