// Copyright 2012 Traceur Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export {System} from './runtime/System';

// Used by unit tests only
import './util/MutedErrorReporter';

export {ModuleStore} from '@traceur/src/runtime/ModuleStore';
export {WebPageTranscoder} from './WebPageTranscoder';
export {options} from './Options';
import {addOptions, CommandOptions, Options} from './Options';

import {ModuleStore} from '@traceur/src/runtime/ModuleStore';

export function get(name) {
  return ModuleStore.get(ModuleStore.normalize('./' + name, __moduleName));
}

export {Compiler} from './Compiler';

import {ErrorReporter} from './util/ErrorReporter';
import {CollectingErrorReporter} from './util/CollectingErrorReporter';

export var util = {
  addOptions,
  CommandOptions,
  CollectingErrorReporter,
  ErrorReporter,
  Options
};

import {Parser} from './syntax/Parser';
import {Scanner} from './syntax/Scanner';
import {Script} from './syntax/trees/ParseTrees';
import {SourceFile} from './syntax/SourceFile';
import {CONSTRUCTOR, FROM} from './syntax/PredefinedName';
import {Token} from './syntax/Token';
import {EQUAL_EQUAL_EQUAL, OPEN_PAREN, CLOSE_PAREN, IMPORT, SEMI_COLON, STAR, OPEN_CURLY, CLOSE_CURLY, COMMA, AT} from './syntax/TokenType';
import {PROPERTY_METHOD_ASSIGNMENT, MEMBER_EXPRESSION, THIS_EXPRESSION} from './syntax/trees/ParseTreeType';
import {ParseTree} from './syntax/trees/ParseTree';

export var syntax = {
  PredefinedName: {
    CONSTRUCTOR,
    FROM
  },
  Token,
  TokenType: {
    EQUAL_EQUAL_EQUAL,
    OPEN_PAREN,
    CLOSE_PAREN,
    IMPORT,
    SEMI_COLON,
    STAR,
    OPEN_CURLY,
    CLOSE_CURLY,
    COMMA,
    AT
  },
  Parser,
  Scanner,
  SourceFile,
  trees: {
    ParseTree,
    Script,
    ParseTreeType: {
      PROPERTY_METHOD_ASSIGNMENT: PROPERTY_METHOD_ASSIGNMENT,
      MEMBER_EXPRESSION: MEMBER_EXPRESSION,
      THIS_EXPRESSION: THIS_EXPRESSION
    },
  }
};

import {ParseTreeMapWriter} from './outputgeneration/ParseTreeMapWriter';
import {ParseTreeWriter} from './outputgeneration/ParseTreeWriter';
import {regexpuRewritePattern} from './outputgeneration/regexpuRewritePattern';
import {SourceMapConsumer} from './outputgeneration/SourceMapIntegration';
import {SourceMapGenerator} from './outputgeneration/SourceMapIntegration';
import {TreeWriter} from './outputgeneration/TreeWriter';

export var outputgeneration = {
  ParseTreeMapWriter,
  ParseTreeWriter,
  regexpuRewritePattern,
  SourceMapConsumer,
  SourceMapGenerator,
  TreeWriter
};

import {AttachModuleNameTransformer} from './codegeneration/module/AttachModuleNameTransformer';
import {CloneTreeTransformer} from './codegeneration/CloneTreeTransformer';
import {FromOptionsTransformer} from './codegeneration/FromOptionsTransformer';
import {PureES6Transformer} from './codegeneration/PureES6Transformer';
import {createModuleEvaluationStatement} from './codegeneration/module/createModuleEvaluationStatement';
import {parseExpression, parseModule, parseScript, parseStatement} from './codegeneration/PlaceholderParser';
import {ParseTreeTransformer} from './codegeneration/ParseTreeTransformer';
import {createVariableStatement, createCallExpression, createIdentifierExpression, createArgumentList} from './codegeneration/ParseTreeFactory';
import {MultiTransformer} from './codegeneration/MultiTransformer';

export var codegeneration = {
  ParseTreeTransformer,
  ParseTreeFactory: {
    createVariableStatement: createVariableStatement,
    createCallExpression: createCallExpression,
    createIdentifierExpression: createIdentifierExpression,
    createArgumentList: createArgumentList
  },
  MultiTransformer,
  CloneTreeTransformer,
  FromOptionsTransformer,
  PureES6Transformer,
  parseExpression,
  parseModule,
  parseScript,
  parseStatement,
  module: {
    AttachModuleNameTransformer,
    createModuleEvaluationStatement
  }
};

import {Loader} from './runtime/Loader';
import {LoaderCompiler} from './runtime/LoaderCompiler';
import {InlineLoaderCompiler} from './runtime/InlineLoaderCompiler';
import {TraceurLoader} from './runtime/TraceurLoader';

export var runtime = {
  InlineLoaderCompiler,
  Loader,
  LoaderCompiler,
  TraceurLoader
};

import {propName} from './staticsemantics/PropName';

export var staticsemantics = {
  propName
};
