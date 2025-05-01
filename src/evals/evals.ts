//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const test_requestEval: EvalFunction = {
    name: 'test_request Evaluation',
    description: 'Evaluates the functionality of the test_request tool',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please use the 'test_request' tool to perform a GET request to '/api/test-endpoint' and return the status code, headers, body, and any validation messages.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [test_requestEval]
};
  
export default config;
  
export const evals = [test_requestEval];