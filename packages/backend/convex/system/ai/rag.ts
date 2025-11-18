import { RAG } from "@convex-dev/rag";
import { components } from "../../_generated/api";
import { openai } from "@ai-sdk/openai";
import { embed, embedMany } from "ai";

// Create a V2-compatible embedding model wrapper
const textEmbeddingModel = {
  specificationVersion: "v2" as const,
  modelId: "text-embedding-3-small",
  provider: "openai",
  maxEmbeddingsPerCall: 2048,
  supportsParallelCalls: true,
  
  async doEmbed(options: { values: string[] }) {
    const { embedding } = await embed({
      model: openai.embedding("text-embedding-3-small"),
      value: options.values[0],
    });
    return {
      embeddings: [embedding],
    };
  },
  
  async doEmbedMany(options: { values: string[] }) {
    const { embeddings } = await embedMany({
      model: openai.embedding("text-embedding-3-small"),
      values: options.values,
    });
    return {
      embeddings,
    };
  },
};

const rag = new RAG(components.rag, {
  textEmbeddingModel,
  embeddingDimension: 1536,
});

export default rag;
