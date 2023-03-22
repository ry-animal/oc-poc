import React /*,{ useEffect, useState }*/ from "react";

interface EmbeddedContentProps {
  url: string;
}

const EmbeddedContent: React.FC<EmbeddedContentProps> = ({ url }) => {
  //   const [embedHtml, setEmbedHtml] = useState<string>("");

  //   useEffect(() => {
  //     void (async function fetchEmbedHtml() {
  //       try {
  //         const response = await fetch(
  //           `/api/fetchEmbed?url=${encodeURIComponent(url)}`
  //         );
  //         // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //         const data = await response.json();
  //         // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  //         setEmbedHtml(data.html);
  //       } catch (error) {
  //         console.error("Error fetching embed HTML:", error);
  //       }
  //     })();
  //   }, [url]);

  //   return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
  return (
    <iframe
      src={url}
      title="Embedded Content"
      className="h-96 w-screen px-8 md:px-12"
    />
  );
};

export default EmbeddedContent;
