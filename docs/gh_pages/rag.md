# Safe DocumentLoader for Langchain

Pebblo has two components.

1. Pebblo Daemon
1. Pebblo Safe DocumentLoader for Langchain

This document describes how to augment your existing Langchain DocumentLoader with Pebblo Safe DocumentLoader to get deep data visibility on the types of Topics and Entities ingested into the Gen-AI Langchain application. For details on `Pebblo Daemon` see this [pebblo daemon](/pebblo-docs/daemon.html) document.

Pebblo Safeloader enables safe data ingestion for _any_ Langchain `DocumentLoader`. This is done by wrapping the document loader call with `Pebblo Safe DocumentLoader`.

## How to Pebblo enable Document Loading?

Assume a Langchain RAG application snippet using `CSVLoader` to read a CSV document for inference.

Here is the snippet of Lanchain RAG application using `CSVLoader`.


```python
    from langchain.document_loaders.csv_loader import CSVLoader

    loader = CSVLoader(file_path)
    documents = loader.load()
    vectordb = Chroma.from_documents(documents, OpenAIEmbeddings())
```

The Pebblo SafeLoader can be enabled with few lines of code change to the above snippet.

```python
    from langchain.document_loaders.csv_loader import CSVLoader
    from pebblo_langchain.langchain_community.document_loaders.pebblo import PebbloSafeLoader

    loader = CSVLoader(file_path)
    loader = PebbloSafeLoader(
                CSVLoader(file_path),
                name="RAG app 1", # App name (Mandatory)
                owner="Joe Smith", # Owner (Optional)
                description="Support productivity RAG application", # Description (Optional)
    )
    documents = loader.load()
    vectordb = Chroma.from_documents(documents, OpenAIEmbeddings())
```

A data report with all the findings, both Topics and Entities, will be generated and available for inspection in the `Pebblo Daemon`. See this [pebblo daemon](/pebblo-docs/daemon.html) for further details.

## Supported Document Loaders

The following Langchain DocumentLoaders are currently supported.

1. DirectoryLoader
1. JSONLoader
1. CSVLoader
1. DataFrameLoader
1. S3FileLoader
1. S3DirLoader
1. UnstructuredMarkdownLoader
1. UnstructuredPDFLoader
1. UnstructuredFileLoader
1. UnstructuredAPIFileLoader
1. UnstructuredExcelLoader
1. AmazonTextractPDFLoader
1. GCSFileLoader
1. PyPDFDirectoryLoader
1. PyPDFLoader

> Note: Most other DocumentLoader types would work. The above list indicates the list that are explicity tested. If you have successfully tested a particular DocumentLoader other than this list above, please consider raising an PR
