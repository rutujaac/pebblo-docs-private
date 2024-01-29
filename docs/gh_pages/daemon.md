# Pebblo Daemon


Pebblo has two components.

1. Pebblo Daemon
1. Pebblo Safe DocumentLoader for Langchain

This document describes how to `Pebblo Daemon` works to enable any Langchain Gen-AI application with deep data visibility on the types of Topics and Entities ingested through Document Loaders. For more details on how Pebblo enabled your Langchain RAG application see this [Pebblo SafeLoader](/pebblo-docs/rag.html) document.

## Pebblo Daemon

Pebblo Daemon is a `FastAPI` application that exposes a locally hosted REST API endpoint for various Pebblo SafeLoader enabled Langchain application to connect.

By default `Pebblo Daemon` runs at `localhost:8000`. The `Pebblo SafeLoader` by default connects to hostname and port. If the daemon is running in a different port or a different hostname, the SafeLoader env variable `PEBBLI_CLASSIFIER_URL` need to set to the correct URL.

## Report Generation

A separate `Data Report` will be generated for every complete document load operation. A subsequent document loader, either done periodically (say everyday, every week, etc) or on-demand will not overwrite a previous load's `Data Report`.

## Report Location

By default all the reports will be stored in a `.pebblo` in the home directory of the system running `Pebblo Daemon`. Separate subdirectories named with the RAG application name is used when multiple RAG applications uses the same `Pebblo Daemon`. 

```bash

$ cd $HOME/.pebblo
$ tree
├── acme-corp-rag-1
│   ├── pebblo_report.pdf
│   ├── bfd46d34-42c7-4819-846c-f54b3620f540
│   │   ├── metadata
│   │   │   └── metadata.json
│   │   └── report.json
```