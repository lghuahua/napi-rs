/* auto-generated by NAPI-RS */
/* eslint-disable */


export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
/**
 * `constructor` option for `struct` requires all fields to be public,
 * otherwise tag impl fn as constructor
 * #[napi(constructor)]
 */
export class Animal {
  /** Kind of animal */
  readonly kind: Kind
  /** This is the constructor */
  constructor(kind: Kind, name: string)
  /** This is a factory method */
  static withKind(kind: Kind): Animal
  get name(): string
  set name(name: string)
  get type(): Kind
  set type(kind: Kind)
  /**
   * This is a
   * multi-line comment
   * with an emoji 🚀
   */
  whoami(): string
  /** This is static... */
  static getDogKind(): Kind
  /**
   * Here are some characters and character sequences
   * that should be escaped correctly:
   * \[]{}/\:""{
   * }
   */
  returnOtherClass(): Dog
  returnOtherClassWithCustomConstructor(): Bird
  overrideIndividualArgOnMethod(normalTy: string, overriddenTy: {n: string}): Bird
}

export class AnimalWithDefaultConstructor {
  name: string
  kind: number
  constructor(name: string, kind: number)
}

export class AnotherClassForEither {
  constructor()
}

export class AnotherCssStyleSheet {
  get rules(): CssRuleList
}
export type AnotherCSSStyleSheet = AnotherCssStyleSheet

export class Asset {
  constructor()
  get filePath(): number
}
export type JsAsset = Asset

export class Assets {
  constructor()
  get(id: number): JsAsset | null
}
export type JsAssets = Assets

export class Bird {
  name: string
  constructor(name: string)
  getCount(): number
  getNameAsync(): Promise<string>
  acceptSliceMethod(slice: Uint8Array): number
}

/** Smoking test for type generation */
export class Blake2BHasher {
  static withKey(key: Blake2bKey): Blake2BHasher
  update(data: Buffer): void
}
export type Blake2bHasher = Blake2BHasher

export class Blake2BKey {

}
export type Blake2bKey = Blake2BKey

export class CatchOnConstructor {
  constructor()
}

export class CatchOnConstructor2 {
  constructor()
}

export class ClassWithFactory {
  name: string
  static withName(name: string): ClassWithFactory
  static with4Name(name: string): Promise<ClassWithFactory>
  static with4NameResult(name: string): Promise<ClassWithFactory>
  setName(name: string): this
}

export class Context {
  maybeNeed?: boolean
  buffer: Uint8Array
  constructor()
  static withData(data: string): Context
  static withBuffer(buf: Uint8Array): Context
  method(): string
}

export class CssRuleList {
  getRules(): Array<string>
  get parentStyleSheet(): CSSStyleSheet
  get name(): string | null
}
export type CSSRuleList = CssRuleList

export class CssStyleSheet {
  constructor(name: string, rules: Array<string>)
  get rules(): CssRuleList
  anotherCssStyleSheet(): AnotherCssStyleSheet
}
export type CSSStyleSheet = CssStyleSheet

export class CustomFinalize {
  constructor(width: number, height: number)
}

export class DefaultUseNullableClass {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
  constructor(requiredNumberField: number, requiredStringField: string, optionalNumberField?: number, optionalStringField?: string)
}

export class Dog {
  name: string
  constructor(name: string)
}

export class Fib {
  [Symbol.iterator](): Iterator<number, void, number>
  constructor()
}

export class Fib2 {
  [Symbol.iterator](): Iterator<number, void, number>
  static create(seed: number): Fib2
}

export class Fib3 {
  current: number
  next: number
  constructor(current: number, next: number)
  [Symbol.iterator](): Iterator<number, void, number>
}

export class GetterSetterWithClosures {
  constructor()
}

export class JsClassForEither {
  constructor()
}

export class JsRemote {
  constructor(repo: JsRepo)
  name(): string
}

export class JsRepo {
  constructor(dir: string)
  remote(): JsRemote
}

export class NinjaTurtle {
  name: string
  static isInstanceOf(value: unknown): boolean
  /** Create your ninja turtle! 🐢 */
  static newRaph(): NinjaTurtle
  getMaskColor(): string
  getName(): string
  returnThis(this: this): this
}

export class NotUseNullableClass {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
  constructor(requiredNumberField: number, requiredStringField: string, optionalNumberField?: number, optionalStringField?: string)
}

export class NotWritableClass {
  name: string
  constructor(name: string)
  setName(name: string): void
}

export class Optional {
  static optionEnd(required: string, optional?: string | undefined | null): string
  static optionStart(optional: string | undefined | null, required: string): string
  static optionStartEnd(optional1: string | undefined | null, required: string, optional2?: string | undefined | null): string
  static optionOnly(optional?: string | undefined | null): string
}

export class Selector {
  orderBy: Array<string>
  select: Array<string>
  struct: string
  where?: string
  constructor(orderBy: Array<string>, select: Array<string>, struct: string, where?: string)
}

export class UseNullableClass {
  requiredNumberField: number
  requiredStringField: string
  nullableNumberField: number | null
  nullableStringField: string | null
  constructor(requiredNumberField: number, requiredStringField: string, nullableNumberField: number | null, nullableStringField: string | null)
}

export class Width {
  value: number
  constructor(value: number)
}

export interface A {
  foo: number
}

export function acceptSlice(fixture: Uint8Array): bigint

export function acceptThreadsafeFunction(func: (err: Error | null, arg: number) => any): void

export function acceptThreadsafeFunctionFatal(func: (arg: number) => any): void

export function acceptThreadsafeFunctionTupleArgs(func: (err: Error | null, arg0: number, arg1: boolean, arg2: string) => any): void

export function acceptUint8ClampedSlice(input: Uint8ClampedArray): bigint

export function acceptUint8ClampedSliceAndBufferSlice(a: Buffer, b: Uint8ClampedArray): bigint

export function add(a: number, b: number): number

export const enum ALIAS {
  A = 0,
  B = 1
}

export interface AliasedStruct {
  a: ALIAS
  b: number
}

export interface AllOptionalObject {
  name?: string
  age?: number
}

export function appendBuffer(buf: Buffer): Buffer

export function apply0(ctx: Animal, callback: (...args: any[]) => any): void

export function apply1(ctx: Animal, callback: (...args: any[]) => any, name: string): void

export function arrayBufferPassThrough(buf: Uint8Array): Promise<Uint8Array>

export function asyncBufferToArray(buf: ArrayBuffer): Array<number>

export function asyncMultiTwo(arg: number): Promise<number>

export function asyncPlus100(p: Promise<number>): Promise<number>

export function asyncReduceBuffer(buf: Buffer): Promise<number>

export function asyncTaskOptionalReturn(): Promise<number | null>

export function asyncTaskVoidReturn(): Promise<void>

export interface B {
  bar: number
}

export function bigintAdd(a: bigint, b: bigint): bigint

export function bigintFromI128(): bigint

export function bigintFromI64(): bigint

export function bigintGetU64AsString(bi: bigint): string

export function bufferPassThrough(buf: Buffer): Promise<Buffer>

export interface C {
  baz: number
}

export function call0(callback: (...args: any[]) => any): number

export function call1(callback: (...args: any[]) => any, arg: number): number

export function call2(callback: (...args: any[]) => any, arg1: number, arg2: number): number

export function callbackReturnPromise<T>(functionInput: () => T | Promise<T>, callback: (err: Error | null, result: T) => void): T | Promise<T>

export function callbackReturnPromiseAndSpawn(jsFunc: (arg0: string) => Promise<string>): Promise<string>

export function callFunction(cb: () => number): number

export function callFunctionWithArg(cb: (arg0: number, arg1: number) => number, arg0: number, arg1: number): number

export function callFunctionWithArgAndCtx(ctx: Animal, cb: (arg: string) => void, name: string): void

export function callLongThreadsafeFunction(callback: (...args: any[]) => any): void

export function callThreadsafeFunction(callback: (...args: any[]) => any): void

export function captureErrorInCallback(cb1: () => void, cb2: (arg0: Error) => void): void

export function chronoDateAdd1Minute(input: Date): Date

export function chronoDateToMillis(input: Date): number

export function chronoNativeDateTime(date: Date): number

export function chronoNativeDateTimeReturn(): Date | null

export function concatLatin1(s: string): string

export function concatStr(s: string): string

export function concatUtf16(s: string): string

export function contains(source: string, target: string): boolean

export function convertU32Array(input: Uint32Array): Array<number>

export function createBigInt(): bigint

export function createBigIntI64(): bigint

export function createExternal(size: number): ExternalObject<number>

export function createExternalString(content: string): ExternalObject<string>

export function createExternalTypedArray(): Uint32Array

export function createObj(): object

export function createObjectWithClassField(): ObjectFieldClassInstance

export function createObjWithProperty(): { value: ArrayBuffer, get getter(): number }

export function createReferenceOnFunction(cb: () => void): Promise<void>

export function createSymbol(): symbol

export function createSymbolFor(desc: string): symbol

/** You could break the step and for an new continuous value. */
export const enum CustomNumEnum {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Six = 6,
  Eight = 8,
  Nine = 9,
  Ten = 10
}

export function customStatusCode(): void

export interface Dates {
  start: Date
  end?: Date
}

export function dateToNumber(input: Date): number

/** This is a const */
export const DEFAULT_COST: number

export interface DefaultUseNullableStruct {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
}

export function derefUint8Array(a: Uint8Array, b: Uint8ClampedArray): number

export function either3(input: string | number | boolean): number

export function either4(input: string | number | boolean | Obj): number

export function eitherBoolOrFunction(input: boolean | ((...args: any[]) => any)): void

export function eitherFromObjects(input: A | B | C): string

export function eitherFromOption(): JsClassForEither | undefined

export function eitherStringOrNumber(input: string | number): number

export const enum Empty {

}

export function enumToI32(e: CustomNumEnum): number

export function f32ArrayToArray(input: Float32Array): Array<number>

export function f64ArrayToArray(input: Float64Array): Array<number>

export function fibonacci(n: number): number

export function fnReceivedAliased(s: AliasedStruct, e: ALIAS): void

export function getBtreeMapping(): Record<string, number>

export function getBuffer(): Buffer

export function getCwd(callback: (arg0: string) => void): void

export function getEmptyBuffer(): Buffer

export function getExternal(external: ExternalObject<number>): number

export function getGlobal(): typeof global

export function getIndexMapping(): Record<string, number>

export function getMapping(): Record<string, number>

export function getModuleFileName(): string

export function getNestedNumArr(): number[][][]

export function getNull(): null

export function getNumArr(): number[]

/** Gets some numbers */
export function getNums(): Array<number>

export function getPackageJsonName(packageJson: PackageJson): string

export function getStrFromObject(): void

export function getterFromObj(): number

export function getUndefined(): void

export function getWords(): Array<string>

export function i16ArrayToArray(input: Int16Array): Array<number>

export function i32ArrayToArray(input: Int32Array): Array<number>

export function i64ArrayToArray(input: BigInt64Array): Array<number>

export function i8ArrayToArray(input: Int8Array): Array<number>

export function indexmapPassthrough(fixture: Record<string, number>): Record<string, number>

/** default enum values are continuos i32s start from 0 */
export const enum Kind {
  /** Barks */
  Dog = 0,
  /** Kills birds */
  Cat = 1,
  /** Tasty */
  Duck = 2
}

export function listObjKeys(obj: object): Array<string>

export function mapOption(val?: number | undefined | null): number | null

export function mutateExternal(external: ExternalObject<number>, newVal: number): void

export function mutateTypedArray(input: Float32Array): void

export interface NotUseNullableStruct {
  requiredNumberField: number
  requiredStringField: string
  optionalNumberField?: number
  optionalStringField?: string
}

export interface Obj {
  v: string | number
}

export interface ObjectFieldClassInstance {
  bird: Bird
}

export function objectGetNamedPropertyShouldPerformTypecheck(obj: { foo: number; bar: string; }): void

export interface ObjectOnlyFromJs {
  count: number
  callback: (err: Error | null, arg: number) => any
}

export function optionEnd(callback: (arg0: string, arg1?: string | undefined | null) => void): void

export function optionOnly(callback: (arg0?: string | undefined | null) => void): void

export function optionStart(callback: (arg0: string | undefined | null, arg1: string) => void): void

export function optionStartEnd(callback: (arg0: string | undefined | null, arg1: string, arg2?: string | undefined | null) => void): void

export function overrideIndividualArgOnFunction(notOverridden: string, f: () => string, notOverridden2: number): string

export function overrideIndividualArgOnFunctionWithCbArg(callback: (town: string, name?: string | undefined | null) => string, notOverridden: number): object

/** This is an interface for package.json */
export interface PackageJson {
  name: string
  /** The version of the package */
  version: string
  dependencies?: Record<string, any>
  devDependencies?: Record<string, any>
}

export function panic(): void

export function plusOne(this: Width): number

export function promiseInEither(input: number | Promise<number>): Promise<boolean>

/** napi = { version = 2, features = ["serde-json"] } */
export function readFile(callback: (arg0: Error | undefined, arg1?: string | undefined | null) => void): void

export function readFileAsync(path: string): Promise<Buffer>

export function readPackageJson(): PackageJson

export function receiveAllOptionalObject(obj?: AllOptionalObject | undefined | null): void

export function receiveClassOrNumber(either: number | JsClassForEither): number

export function receiveDifferentClass(either: JsClassForEither | AnotherClassForEither): number

export function receiveMutClassOrNumber(either: number | JsClassForEither): number

export function receiveObjectOnlyFromJs(obj: { count: number, callback: (err: Error | null, count: number) => void }): void

export function receiveObjectWithClassField(object: ObjectFieldClassInstance): Bird

export function receiveStrictObject(strictObject: StrictObject): void

export function receiveString(s: string): string

export function referenceAsCallback(callback: (arg0: number, arg1: number) => number, arg0: number, arg1: number): number

export function returnEither(input: number): string | number

export function returnEitherClass(input: number): number | JsClassForEither

export function returnFromSharedCrate(): Shared

export function returnJsFunction(): (...args: any[]) => any

export function returnNull(): null

export function returnUndefined(): void

export function returnUndefinedIfInvalid(input: boolean): boolean

export function returnUndefinedIfInvalidPromise(input: Promise<boolean>): Promise<boolean>

export function roundtripStr(s: string): string

export function runScript(script: string): unknown

export function setSymbolInObj(symbol: symbol): object

export interface Shared {
  value: number
}

export const enum Status {
  Pristine = 'Pristine',
  Loading = 'Loading',
  Ready = 'Ready'
}

export interface StrictObject {
  name: string
}

export function sumBtreeMapping(nums: Record<string, number>): number

export function sumIndexMapping(nums: Record<string, number>): number

export function sumMapping(nums: Record<string, number>): number

export function sumNums(nums: Array<number>): number

export function testSerdeBigNumberPrecision(number: string): any

export function testSerdeRoundtrip(data: any): any

export function threadsafeFunctionClosureCapture(func: (...args: any[]) => any): void

export function threadsafeFunctionFatalMode(cb: (...args: any[]) => any): void

export function threadsafeFunctionFatalModeError(cb: (...args: any[]) => any): void

export function threadsafeFunctionThrowError(cb: (...args: any[]) => any): void

export function throwAsyncError(): Promise<void>

export function throwError(): void

export function throwSyntaxError(error: string, code?: string | undefined | null): void

export function toJsObj(): object

export function tsfnAsyncCall(func: (...args: any[]) => any): Promise<void>

export function tsfnCallWithCallback(func: (...args: any[]) => any): void

export function tsfnReturnPromise(func: (err: Error | null, arg: number) => any): Promise<number>

export function tsfnReturnPromiseTimeout(func: (err: Error | null, arg: number) => any): Promise<number>

export function tsfnThrowFromJs(tsfn: (err: Error | null, arg: number) => any): Promise<number>

export function tsRename(a: { foo: number }): string[]

export interface TsTypeChanged {
  typeOverride: object
  typeOverrideOptional?: object
}

export function u16ArrayToArray(input: Uint16Array): Array<number>

export function u32ArrayToArray(input: Uint32Array): Array<number>

export function u64ArrayToArray(input: BigUint64Array): Array<bigint>

export function u8ArrayToArray(input: Uint8Array): Array<number>

export interface UseNullableStruct {
  requiredNumberField: number
  requiredStringField: string
  nullableNumberField: number | null
  nullableStringField: string | null
}

export function validateArray(arr: Array<number>): number

export function validateBigint(input: bigint): bigint

export function validateBoolean(i: boolean): boolean

export function validateBuffer(b: Buffer): number

export function validateBufferSlice(input: Buffer): number

export function validateDate(d: Date): number

export function validateDateTime(d: Date): number

export function validateExternal(e: ExternalObject<number>): number

export function validateFunction(cb: () => number): number

export function validateHashMap(input: Record<string, number>): number

export function validateNull(i: null): boolean

export function validateNumber(i: number): number

export function validateOptional(input1?: string | undefined | null, input2?: boolean | undefined | null): boolean

export function validatePromise(p: Promise<number>): Promise<number>

export function validateString(s: string): string

export function validateSymbol(s: symbol): boolean

export function validateTypedArray(input: Uint8Array): number

export function validateTypedArraySlice(input: Uint8Array): number

export function validateUint8ClampedSlice(input: Uint8ClampedArray): number

export function validateUndefined(i: undefined): boolean

export function withAbortController(a: number, b: number, signal: AbortSignal): Promise<number>

export function withoutAbortController(a: number, b: number): Promise<number>

export function xxh64Alias(input: Buffer): bigint

export namespace xxh2 {
  export function xxh2Plus(a: number, b: number): number
  export function xxh3Xxh64Alias(input: Buffer): bigint
}

export namespace xxh3 {
  /** Xxh3 class */
  export class Xxh3 {
    constructor()
    /** update */
    update(input: Buffer): void
    digest(): bigint
  }
  export const ALIGNMENT: number
  /** xxh128 function */
  export function xxh128(input: Buffer): bigint
  export function xxh3_64(input: Buffer): bigint
}

