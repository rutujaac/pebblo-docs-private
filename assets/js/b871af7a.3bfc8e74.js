"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[168],{3164:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=o(7624),t=o(2172);const r={},i="Pebblo Safe DataLoader for Langchain",d={id:"rag",title:"Pebblo Safe DataLoader for Langchain",description:"This document describes how to augment your existing Langchain DocumentLoader with Pebblo Safe DataLoader to get deep data visibility on the types of Topics and Entities ingested into the Gen-AI Langchain application. For details on Pebblo Daemon see this pebblo daemon document.",source:"@site/docs/rag.md",sourceDirName:".",slug:"/rag",permalink:"/pebblo-docs-private/rag",draft:!1,unlisted:!1,editUrl:"https://github.com/daxa-ai/pebblo/docs/rag.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Pebblo Daemon",permalink:"/pebblo-docs-private/daemon"},next:{title:"Pebblo Data Reports",permalink:"/pebblo-docs-private/reports"}},l={},s=[{value:"How to Pebblo enable Document Loading?",id:"how-to-pebblo-enable-document-loading",level:2},{value:"Supported Document Loaders",id:"supported-document-loaders",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"pebblo-safe-dataloader-for-langchain",children:"Pebblo Safe DataLoader for Langchain"}),"\n",(0,a.jsxs)(n.p,{children:["This document describes how to augment your existing Langchain DocumentLoader with Pebblo Safe DataLoader to get deep data visibility on the types of Topics and Entities ingested into the Gen-AI Langchain application. For details on ",(0,a.jsx)(n.code,{children:"Pebblo Daemon"})," see this ",(0,a.jsx)(n.a,{href:"/pebblo-docs-private/daemon",children:"pebblo daemon"})," document."]}),"\n",(0,a.jsxs)(n.p,{children:["Pebblo Safeloader enables safe data ingestion for Langchain document loader",(0,a.jsx)("sup",{children:"1"}),". This is done by wrapping the document loader call with ",(0,a.jsx)(n.code,{children:"Pebblo Safe DataLoader"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-pebblo-enable-document-loading",children:"How to Pebblo enable Document Loading?"}),"\n",(0,a.jsxs)(n.p,{children:["Assume a Langchain RAG application snippet using ",(0,a.jsx)(n.code,{children:"CSVLoader"})," to read a CSV document for inference."]}),"\n",(0,a.jsxs)(n.p,{children:["Here is the snippet of Lanchain RAG application using ",(0,a.jsx)(n.code,{children:"CSVLoader"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"    from langchain.document_loaders.csv_loader import CSVLoader\n\n    loader = CSVLoader(file_path)\n    documents = loader.load()\n    vectordb = Chroma.from_documents(documents, OpenAIEmbeddings())\n"})}),"\n",(0,a.jsx)(n.p,{children:"The Pebblo SafeLoader can be enabled with few lines of code change to the above snippet."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'    from langchain.document_loaders.csv_loader import CSVLoader\n    from pebblo_langchain.langchain_community.document_loaders.pebblo import PebbloSafeLoader\n\n    loader = PebbloSafeLoader(\n                CSVLoader(file_path),\n                name="RAG app 1", # App name (Mandatory)\n                owner="Joe Smith", # Owner (Optional)\n                description="Support productivity RAG application", # Description (Optional)\n    )\n    documents = loader.load()\n    vectordb = Chroma.from_documents(documents, OpenAIEmbeddings())\n'})}),"\n",(0,a.jsxs)(n.p,{children:["A data report with all the findings, both Topics and Entities, will be generated and available for inspection in the ",(0,a.jsx)(n.code,{children:"Pebblo Daemon"}),". See this ",(0,a.jsx)(n.a,{href:"/pebblo-docs-private/daemon",children:"pebblo daemon"})," for further details."]}),"\n",(0,a.jsx)(n.h2,{id:"supported-document-loaders",children:"Supported Document Loaders"}),"\n",(0,a.jsx)(n.p,{children:"The following Langchain DocumentLoaders are currently supported."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"DirectoryLoader"}),"\n",(0,a.jsx)(n.li,{children:"JSONLoader"}),"\n",(0,a.jsx)(n.li,{children:"CSVLoader"}),"\n",(0,a.jsx)(n.li,{children:"DataFrameLoader"}),"\n",(0,a.jsx)(n.li,{children:"S3FileLoader"}),"\n",(0,a.jsx)(n.li,{children:"S3DirLoader"}),"\n",(0,a.jsx)(n.li,{children:"UnstructuredMarkdownLoader"}),"\n",(0,a.jsx)(n.li,{children:"UnstructuredPDFLoader"}),"\n",(0,a.jsx)(n.li,{children:"UnstructuredFileLoader"}),"\n",(0,a.jsx)(n.li,{children:"UnstructuredAPIFileLoader"}),"\n",(0,a.jsx)(n.li,{children:"UnstructuredExcelLoader"}),"\n",(0,a.jsx)(n.li,{children:"AmazonTextractPDFLoader"}),"\n",(0,a.jsx)(n.li,{children:"GCSFileLoader"}),"\n",(0,a.jsx)(n.li,{children:"PyPDFDirectoryLoader"}),"\n",(0,a.jsx)(n.li,{children:"PyPDFLoader"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note ",(0,a.jsx)("sup",{children:"1"}),": ",(0,a.jsx)(n.em,{children:"Most other Langchain document loaders that implement load() and lazy_load() methods should work. The above list indicates the ones that are explicity tested. If you have successfully tested a particular DocumentLoader other than this list above, please consider raising an PR."})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>d,M:()=>i});var a=o(1504);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);