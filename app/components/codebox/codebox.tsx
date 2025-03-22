"use client";

import { Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps {
  code: string;
  language?: string;
}

export default function CodeBox({ code, language = "tsx"}: CodeProps) {
  return (
    <SyntaxHighlighter
    language={language}
    style={oneDark} PreTag="div"
    customStyle={{ margin: 0, padding: 0 }}>
      {code}
    </SyntaxHighlighter>
  );
}