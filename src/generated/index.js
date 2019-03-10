"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Exam",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "CoverNode",
    embedded: false
  },
  {
    name: "Choice",
    embedded: false
  },
  {
    name: "QuestionNode",
    embedded: false
  },
  {
    name: "ExplanationNode",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();