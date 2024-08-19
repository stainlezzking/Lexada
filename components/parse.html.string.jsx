"use client";
import parse, { attributesToProps } from "html-react-parser";

export default function ParseString({ data, yt = false }) {
  return (
    <>
      {parse(data, {
        replace(domNode) {
          if (domNode && domNode.attribs && domNode.name == "iframe" && (domNode.attribs["width"] || domNode.attribs["height"])) {
            delete domNode.attribs.width;
            delete domNode.attribs.height;
            return (
              <iframe {...attributesToProps(domNode.attribs)} className={`w-full ${yt ? "h-[400px] md:aspect-video" : "aspect-video"}`}>
                {domNode.children}
              </iframe>
            );
          }
        },
      })}
    </>
  );
}
