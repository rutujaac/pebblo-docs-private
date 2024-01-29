# PebbloSafeLoader for Langchain

## PebbloSafeLoader

Pebblo Safeloader converts any Langchain `DocumentLoader` into a `SafeLoader`. This is done by wrapping the document loader call with `PebbloSafeLoader`

### Before

Here is the snippet of Lanchain RAG application using `CSVLoader`.


```python
        self.loader = CSVLoader(self.file_path)
```

### After

```python
        self.loader = PebbloSafeLoader(
             CSVLoader(self.file_path),
             "RAG app 1", # App nane (Mandatory)
             "Joe Smith", # Owner (Optional)
             "Joe Smith RAG application", # Descriptio (Optional)
        )
```



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

> Note: Most other DocumentLoader types would work but they are not testing. If you have successfully tested a particular DocumentLoader other than this list above, please consider raising an PR
