
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model VisitorLog
 * 
 */
export type VisitorLog = $Result.DefaultSelection<Prisma.$VisitorLogPayload>
/**
 * Model Floor
 * 
 */
export type Floor = $Result.DefaultSelection<Prisma.$FloorPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model SMSNotification
 * 
 */
export type SMSNotification = $Result.DefaultSelection<Prisma.$SMSNotificationPayload>
/**
 * Model EmailNotification
 * 
 */
export type EmailNotification = $Result.DefaultSelection<Prisma.$EmailNotificationPayload>
/**
 * Model ArchiveNotification
 * 
 */
export type ArchiveNotification = $Result.DefaultSelection<Prisma.$ArchiveNotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  Staff: 'Staff'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitorLog`: Exposes CRUD operations for the **VisitorLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitorLogs
    * const visitorLogs = await prisma.visitorLog.findMany()
    * ```
    */
  get visitorLog(): Prisma.VisitorLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.floor`: Exposes CRUD operations for the **Floor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Floors
    * const floors = await prisma.floor.findMany()
    * ```
    */
  get floor(): Prisma.FloorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sMSNotification`: Exposes CRUD operations for the **SMSNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SMSNotifications
    * const sMSNotifications = await prisma.sMSNotification.findMany()
    * ```
    */
  get sMSNotification(): Prisma.SMSNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailNotification`: Exposes CRUD operations for the **EmailNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailNotifications
    * const emailNotifications = await prisma.emailNotification.findMany()
    * ```
    */
  get emailNotification(): Prisma.EmailNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archiveNotification`: Exposes CRUD operations for the **ArchiveNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArchiveNotifications
    * const archiveNotifications = await prisma.archiveNotification.findMany()
    * ```
    */
  get archiveNotification(): Prisma.ArchiveNotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Visitor: 'Visitor',
    Company: 'Company',
    VisitorLog: 'VisitorLog',
    Floor: 'Floor',
    Department: 'Department',
    Appointment: 'Appointment',
    SMSNotification: 'SMSNotification',
    EmailNotification: 'EmailNotification',
    ArchiveNotification: 'ArchiveNotification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "visitor" | "company" | "visitorLog" | "floor" | "department" | "appointment" | "sMSNotification" | "emailNotification" | "archiveNotification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      VisitorLog: {
        payload: Prisma.$VisitorLogPayload<ExtArgs>
        fields: Prisma.VisitorLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>
          }
          findFirst: {
            args: Prisma.VisitorLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>
          }
          findMany: {
            args: Prisma.VisitorLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>[]
          }
          create: {
            args: Prisma.VisitorLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>
          }
          createMany: {
            args: Prisma.VisitorLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>[]
          }
          delete: {
            args: Prisma.VisitorLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>
          }
          update: {
            args: Prisma.VisitorLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>
          }
          deleteMany: {
            args: Prisma.VisitorLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>[]
          }
          upsert: {
            args: Prisma.VisitorLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorLogPayload>
          }
          aggregate: {
            args: Prisma.VisitorLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitorLog>
          }
          groupBy: {
            args: Prisma.VisitorLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorLogCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorLogCountAggregateOutputType> | number
          }
        }
      }
      Floor: {
        payload: Prisma.$FloorPayload<ExtArgs>
        fields: Prisma.FloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findFirst: {
            args: Prisma.FloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findMany: {
            args: Prisma.FloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          create: {
            args: Prisma.FloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          createMany: {
            args: Prisma.FloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          delete: {
            args: Prisma.FloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          update: {
            args: Prisma.FloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          deleteMany: {
            args: Prisma.FloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          upsert: {
            args: Prisma.FloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          aggregate: {
            args: Prisma.FloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloor>
          }
          groupBy: {
            args: Prisma.FloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorCountArgs<ExtArgs>
            result: $Utils.Optional<FloorCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      SMSNotification: {
        payload: Prisma.$SMSNotificationPayload<ExtArgs>
        fields: Prisma.SMSNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SMSNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SMSNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>
          }
          findFirst: {
            args: Prisma.SMSNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SMSNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>
          }
          findMany: {
            args: Prisma.SMSNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>[]
          }
          create: {
            args: Prisma.SMSNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>
          }
          createMany: {
            args: Prisma.SMSNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SMSNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>[]
          }
          delete: {
            args: Prisma.SMSNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>
          }
          update: {
            args: Prisma.SMSNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>
          }
          deleteMany: {
            args: Prisma.SMSNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SMSNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SMSNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>[]
          }
          upsert: {
            args: Prisma.SMSNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SMSNotificationPayload>
          }
          aggregate: {
            args: Prisma.SMSNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSMSNotification>
          }
          groupBy: {
            args: Prisma.SMSNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SMSNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SMSNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<SMSNotificationCountAggregateOutputType> | number
          }
        }
      }
      EmailNotification: {
        payload: Prisma.$EmailNotificationPayload<ExtArgs>
        fields: Prisma.EmailNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findFirst: {
            args: Prisma.EmailNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findMany: {
            args: Prisma.EmailNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          create: {
            args: Prisma.EmailNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          createMany: {
            args: Prisma.EmailNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          delete: {
            args: Prisma.EmailNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          update: {
            args: Prisma.EmailNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          aggregate: {
            args: Prisma.EmailNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailNotification>
          }
          groupBy: {
            args: Prisma.EmailNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationCountAggregateOutputType> | number
          }
        }
      }
      ArchiveNotification: {
        payload: Prisma.$ArchiveNotificationPayload<ExtArgs>
        fields: Prisma.ArchiveNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchiveNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchiveNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>
          }
          findFirst: {
            args: Prisma.ArchiveNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchiveNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>
          }
          findMany: {
            args: Prisma.ArchiveNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>[]
          }
          create: {
            args: Prisma.ArchiveNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>
          }
          createMany: {
            args: Prisma.ArchiveNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchiveNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>[]
          }
          delete: {
            args: Prisma.ArchiveNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>
          }
          update: {
            args: Prisma.ArchiveNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>
          }
          deleteMany: {
            args: Prisma.ArchiveNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchiveNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArchiveNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>[]
          }
          upsert: {
            args: Prisma.ArchiveNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchiveNotificationPayload>
          }
          aggregate: {
            args: Prisma.ArchiveNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchiveNotification>
          }
          groupBy: {
            args: Prisma.ArchiveNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchiveNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchiveNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<ArchiveNotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    visitor?: VisitorOmit
    company?: CompanyOmit
    visitorLog?: VisitorLogOmit
    floor?: FloorOmit
    department?: DepartmentOmit
    appointment?: AppointmentOmit
    sMSNotification?: SMSNotificationOmit
    emailNotification?: EmailNotificationOmit
    archiveNotification?: ArchiveNotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    VisitorLogs: number
    Appointments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VisitorLogs?: boolean | UserCountOutputTypeCountVisitorLogsArgs
    Appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type VisitorCountOutputType
   */

  export type VisitorCountOutputType = {
    History: number
    Appointments: number
  }

  export type VisitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    History?: boolean | VisitorCountOutputTypeCountHistoryArgs
    Appointments?: boolean | VisitorCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorCountOutputType
     */
    select?: VisitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorLogWhereInput
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    Staffs: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staffs?: boolean | CompanyCountOutputTypeCountStaffsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountStaffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
  }


  /**
   * Count Type FloorCountOutputType
   */

  export type FloorCountOutputType = {
    User: number
  }

  export type FloorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | FloorCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorCountOutputType
     */
    select?: FloorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    User: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | DepartmentCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    Id: string | null
    FirstName: string | null
    LastName: string | null
    Email: string | null
    Role: $Enums.Role | null
    Password: string | null
    StaffID: string | null
    DepartmentId: string | null
    FloorId: string | null
  }

  export type UserMaxAggregateOutputType = {
    Id: string | null
    FirstName: string | null
    LastName: string | null
    Email: string | null
    Role: $Enums.Role | null
    Password: string | null
    StaffID: string | null
    DepartmentId: string | null
    FloorId: string | null
  }

  export type UserCountAggregateOutputType = {
    Id: number
    FirstName: number
    LastName: number
    Email: number
    Role: number
    Password: number
    StaffID: number
    DepartmentId: number
    FloorId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    Id?: true
    FirstName?: true
    LastName?: true
    Email?: true
    Role?: true
    Password?: true
    StaffID?: true
    DepartmentId?: true
    FloorId?: true
  }

  export type UserMaxAggregateInputType = {
    Id?: true
    FirstName?: true
    LastName?: true
    Email?: true
    Role?: true
    Password?: true
    StaffID?: true
    DepartmentId?: true
    FloorId?: true
  }

  export type UserCountAggregateInputType = {
    Id?: true
    FirstName?: true
    LastName?: true
    Email?: true
    Role?: true
    Password?: true
    StaffID?: true
    DepartmentId?: true
    FloorId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    Id: string
    FirstName: string
    LastName: string
    Email: string
    Role: $Enums.Role
    Password: string
    StaffID: string | null
    DepartmentId: string
    FloorId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
    StaffID?: boolean
    DepartmentId?: boolean
    FloorId?: boolean
    VisitorLogs?: boolean | User$VisitorLogsArgs<ExtArgs>
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Floor?: boolean | FloorDefaultArgs<ExtArgs>
    Appointments?: boolean | User$AppointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
    StaffID?: boolean
    DepartmentId?: boolean
    FloorId?: boolean
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
    StaffID?: boolean
    DepartmentId?: boolean
    FloorId?: boolean
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    Id?: boolean
    FirstName?: boolean
    LastName?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
    StaffID?: boolean
    DepartmentId?: boolean
    FloorId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "FirstName" | "LastName" | "Email" | "Role" | "Password" | "StaffID" | "DepartmentId" | "FloorId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VisitorLogs?: boolean | User$VisitorLogsArgs<ExtArgs>
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Floor?: boolean | FloorDefaultArgs<ExtArgs>
    Appointments?: boolean | User$AppointmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Floor?: boolean | FloorDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | DepartmentDefaultArgs<ExtArgs>
    Floor?: boolean | FloorDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      VisitorLogs: Prisma.$VisitorLogPayload<ExtArgs>[]
      Department: Prisma.$DepartmentPayload<ExtArgs>
      Floor: Prisma.$FloorPayload<ExtArgs>
      Appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      FirstName: string
      LastName: string
      Email: string
      Role: $Enums.Role
      Password: string
      StaffID: string | null
      DepartmentId: string
      FloorId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `Id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `Id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VisitorLogs<T extends User$VisitorLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$VisitorLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Appointments<T extends User$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly Id: FieldRef<"User", 'String'>
    readonly FirstName: FieldRef<"User", 'String'>
    readonly LastName: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'Role'>
    readonly Password: FieldRef<"User", 'String'>
    readonly StaffID: FieldRef<"User", 'String'>
    readonly DepartmentId: FieldRef<"User", 'String'>
    readonly FloorId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.VisitorLogs
   */
  export type User$VisitorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    where?: VisitorLogWhereInput
    orderBy?: VisitorLogOrderByWithRelationInput | VisitorLogOrderByWithRelationInput[]
    cursor?: VisitorLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorLogScalarFieldEnum | VisitorLogScalarFieldEnum[]
  }

  /**
   * User.Appointments
   */
  export type User$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    Phone: string | null
    Email: string | null
    Address: string | null
    Photo: string | null
    CompanyId: string | null
  }

  export type VisitorMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    Phone: string | null
    Email: string | null
    Address: string | null
    Photo: string | null
    CompanyId: string | null
  }

  export type VisitorCountAggregateOutputType = {
    Id: number
    Name: number
    Phone: number
    Email: number
    Address: number
    Photo: number
    CompanyId: number
    _all: number
  }


  export type VisitorMinAggregateInputType = {
    Id?: true
    Name?: true
    Phone?: true
    Email?: true
    Address?: true
    Photo?: true
    CompanyId?: true
  }

  export type VisitorMaxAggregateInputType = {
    Id?: true
    Name?: true
    Phone?: true
    Email?: true
    Address?: true
    Photo?: true
    CompanyId?: true
  }

  export type VisitorCountAggregateInputType = {
    Id?: true
    Name?: true
    Phone?: true
    Email?: true
    Address?: true
    Photo?: true
    CompanyId?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    Id: string
    Name: string
    Phone: string
    Email: string | null
    Address: string | null
    Photo: string
    CompanyId: string | null
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Phone?: boolean
    Email?: boolean
    Address?: boolean
    Photo?: boolean
    CompanyId?: boolean
    Company?: boolean | Visitor$CompanyArgs<ExtArgs>
    History?: boolean | Visitor$HistoryArgs<ExtArgs>
    Appointments?: boolean | Visitor$AppointmentsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Phone?: boolean
    Email?: boolean
    Address?: boolean
    Photo?: boolean
    CompanyId?: boolean
    Company?: boolean | Visitor$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Phone?: boolean
    Email?: boolean
    Address?: boolean
    Photo?: boolean
    CompanyId?: boolean
    Company?: boolean | Visitor$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    Id?: boolean
    Name?: boolean
    Phone?: boolean
    Email?: boolean
    Address?: boolean
    Photo?: boolean
    CompanyId?: boolean
  }

  export type VisitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Phone" | "Email" | "Address" | "Photo" | "CompanyId", ExtArgs["result"]["visitor"]>
  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | Visitor$CompanyArgs<ExtArgs>
    History?: boolean | Visitor$HistoryArgs<ExtArgs>
    Appointments?: boolean | Visitor$AppointmentsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | Visitor$CompanyArgs<ExtArgs>
  }
  export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | Visitor$CompanyArgs<ExtArgs>
  }

  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      Company: Prisma.$CompanyPayload<ExtArgs> | null
      History: Prisma.$VisitorLogPayload<ExtArgs>[]
      Appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      Phone: string
      Email: string | null
      Address: string | null
      Photo: string
      CompanyId: string | null
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFindUniqueArgs>(args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFindFirstArgs>(args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends VisitorFindManyArgs>(args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends VisitorCreateArgs>(args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorCreateManyArgs>(args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `Id`
     * const visitorWithIdOnly = await prisma.visitor.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends VisitorDeleteArgs>(args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorUpdateArgs>(args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorDeleteManyArgs>(args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorUpdateManyArgs>(args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `Id`
     * const visitorWithIdOnly = await prisma.visitor.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends VisitorUpsertArgs>(args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Company<T extends Visitor$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    History<T extends Visitor$HistoryArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appointments<T extends Visitor$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visitor model
   */
  interface VisitorFieldRefs {
    readonly Id: FieldRef<"Visitor", 'String'>
    readonly Name: FieldRef<"Visitor", 'String'>
    readonly Phone: FieldRef<"Visitor", 'String'>
    readonly Email: FieldRef<"Visitor", 'String'>
    readonly Address: FieldRef<"Visitor", 'String'>
    readonly Photo: FieldRef<"Visitor", 'String'>
    readonly CompanyId: FieldRef<"Visitor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }

  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor createManyAndReturn
   */
  export type VisitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor updateManyAndReturn
   */
  export type VisitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }

  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitor.Company
   */
  export type Visitor$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Visitor.History
   */
  export type Visitor$HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    where?: VisitorLogWhereInput
    orderBy?: VisitorLogOrderByWithRelationInput | VisitorLogOrderByWithRelationInput[]
    cursor?: VisitorLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorLogScalarFieldEnum | VisitorLogScalarFieldEnum[]
  }

  /**
   * Visitor.Appointments
   */
  export type Visitor$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    Id: string | null
    Name: string | null
    Address: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
    Address: string | null
  }

  export type CompanyCountAggregateOutputType = {
    Id: number
    Name: number
    Address: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    Id?: true
    Name?: true
    Address?: true
  }

  export type CompanyMaxAggregateInputType = {
    Id?: true
    Name?: true
    Address?: true
  }

  export type CompanyCountAggregateInputType = {
    Id?: true
    Name?: true
    Address?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    Id: string
    Name: string
    Address: string | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Address?: boolean
    Staffs?: boolean | Company$StaffsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Address?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    Address?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    Id?: boolean
    Name?: boolean
    Address?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name" | "Address", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staffs?: boolean | Company$StaffsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      Staffs: Prisma.$VisitorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
      Address: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `Id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `Id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Staffs<T extends Company$StaffsArgs<ExtArgs> = {}>(args?: Subset<T, Company$StaffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly Id: FieldRef<"Company", 'String'>
    readonly Name: FieldRef<"Company", 'String'>
    readonly Address: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.Staffs
   */
  export type Company$StaffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    cursor?: VisitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model VisitorLog
   */

  export type AggregateVisitorLog = {
    _count: VisitorLogCountAggregateOutputType | null
    _avg: VisitorLogAvgAggregateOutputType | null
    _sum: VisitorLogSumAggregateOutputType | null
    _min: VisitorLogMinAggregateOutputType | null
    _max: VisitorLogMaxAggregateOutputType | null
  }

  export type VisitorLogAvgAggregateOutputType = {
    NoOfVistiors: number | null
  }

  export type VisitorLogSumAggregateOutputType = {
    NoOfVistiors: number | null
  }

  export type VisitorLogMinAggregateOutputType = {
    Id: string | null
    VisitorId: string | null
    StaffId: string | null
    PurposeOfVisit: string | null
    TagNo: string | null
    NoOfVistiors: number | null
    CheckInTime: string | null
    CheckOutTime: string | null
    CreatedAt: Date | null
  }

  export type VisitorLogMaxAggregateOutputType = {
    Id: string | null
    VisitorId: string | null
    StaffId: string | null
    PurposeOfVisit: string | null
    TagNo: string | null
    NoOfVistiors: number | null
    CheckInTime: string | null
    CheckOutTime: string | null
    CreatedAt: Date | null
  }

  export type VisitorLogCountAggregateOutputType = {
    Id: number
    VisitorId: number
    StaffId: number
    PurposeOfVisit: number
    TagNo: number
    NoOfVistiors: number
    CheckInTime: number
    CheckOutTime: number
    CreatedAt: number
    _all: number
  }


  export type VisitorLogAvgAggregateInputType = {
    NoOfVistiors?: true
  }

  export type VisitorLogSumAggregateInputType = {
    NoOfVistiors?: true
  }

  export type VisitorLogMinAggregateInputType = {
    Id?: true
    VisitorId?: true
    StaffId?: true
    PurposeOfVisit?: true
    TagNo?: true
    NoOfVistiors?: true
    CheckInTime?: true
    CheckOutTime?: true
    CreatedAt?: true
  }

  export type VisitorLogMaxAggregateInputType = {
    Id?: true
    VisitorId?: true
    StaffId?: true
    PurposeOfVisit?: true
    TagNo?: true
    NoOfVistiors?: true
    CheckInTime?: true
    CheckOutTime?: true
    CreatedAt?: true
  }

  export type VisitorLogCountAggregateInputType = {
    Id?: true
    VisitorId?: true
    StaffId?: true
    PurposeOfVisit?: true
    TagNo?: true
    NoOfVistiors?: true
    CheckInTime?: true
    CheckOutTime?: true
    CreatedAt?: true
    _all?: true
  }

  export type VisitorLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorLog to aggregate.
     */
    where?: VisitorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorLogs to fetch.
     */
    orderBy?: VisitorLogOrderByWithRelationInput | VisitorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitorLogs
    **/
    _count?: true | VisitorLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorLogMaxAggregateInputType
  }

  export type GetVisitorLogAggregateType<T extends VisitorLogAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitorLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitorLog[P]>
      : GetScalarType<T[P], AggregateVisitorLog[P]>
  }




  export type VisitorLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorLogWhereInput
    orderBy?: VisitorLogOrderByWithAggregationInput | VisitorLogOrderByWithAggregationInput[]
    by: VisitorLogScalarFieldEnum[] | VisitorLogScalarFieldEnum
    having?: VisitorLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorLogCountAggregateInputType | true
    _avg?: VisitorLogAvgAggregateInputType
    _sum?: VisitorLogSumAggregateInputType
    _min?: VisitorLogMinAggregateInputType
    _max?: VisitorLogMaxAggregateInputType
  }

  export type VisitorLogGroupByOutputType = {
    Id: string
    VisitorId: string
    StaffId: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime: string | null
    CreatedAt: Date
    _count: VisitorLogCountAggregateOutputType | null
    _avg: VisitorLogAvgAggregateOutputType | null
    _sum: VisitorLogSumAggregateOutputType | null
    _min: VisitorLogMinAggregateOutputType | null
    _max: VisitorLogMaxAggregateOutputType | null
  }

  type GetVisitorLogGroupByPayload<T extends VisitorLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorLogGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorLogGroupByOutputType[P]>
        }
      >
    >


  export type VisitorLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VisitorId?: boolean
    StaffId?: boolean
    PurposeOfVisit?: boolean
    TagNo?: boolean
    NoOfVistiors?: boolean
    CheckInTime?: boolean
    CheckOutTime?: boolean
    CreatedAt?: boolean
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    Staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorLog"]>

  export type VisitorLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VisitorId?: boolean
    StaffId?: boolean
    PurposeOfVisit?: boolean
    TagNo?: boolean
    NoOfVistiors?: boolean
    CheckInTime?: boolean
    CheckOutTime?: boolean
    CreatedAt?: boolean
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    Staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorLog"]>

  export type VisitorLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    VisitorId?: boolean
    StaffId?: boolean
    PurposeOfVisit?: boolean
    TagNo?: boolean
    NoOfVistiors?: boolean
    CheckInTime?: boolean
    CheckOutTime?: boolean
    CreatedAt?: boolean
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    Staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorLog"]>

  export type VisitorLogSelectScalar = {
    Id?: boolean
    VisitorId?: boolean
    StaffId?: boolean
    PurposeOfVisit?: boolean
    TagNo?: boolean
    NoOfVistiors?: boolean
    CheckInTime?: boolean
    CheckOutTime?: boolean
    CreatedAt?: boolean
  }

  export type VisitorLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "VisitorId" | "StaffId" | "PurposeOfVisit" | "TagNo" | "NoOfVistiors" | "CheckInTime" | "CheckOutTime" | "CreatedAt", ExtArgs["result"]["visitorLog"]>
  export type VisitorLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    Staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VisitorLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    Staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VisitorLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
    Staff?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VisitorLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitorLog"
    objects: {
      Visitor: Prisma.$VisitorPayload<ExtArgs>
      Staff: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      VisitorId: string
      StaffId: string
      PurposeOfVisit: string
      TagNo: string
      NoOfVistiors: number
      CheckInTime: string
      CheckOutTime: string | null
      CreatedAt: Date
    }, ExtArgs["result"]["visitorLog"]>
    composites: {}
  }

  type VisitorLogGetPayload<S extends boolean | null | undefined | VisitorLogDefaultArgs> = $Result.GetResult<Prisma.$VisitorLogPayload, S>

  type VisitorLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorLogCountAggregateInputType | true
    }

  export interface VisitorLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitorLog'], meta: { name: 'VisitorLog' } }
    /**
     * Find zero or one VisitorLog that matches the filter.
     * @param {VisitorLogFindUniqueArgs} args - Arguments to find a VisitorLog
     * @example
     * // Get one VisitorLog
     * const visitorLog = await prisma.visitorLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorLogFindUniqueArgs>(args: SelectSubset<T, VisitorLogFindUniqueArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitorLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorLogFindUniqueOrThrowArgs} args - Arguments to find a VisitorLog
     * @example
     * // Get one VisitorLog
     * const visitorLog = await prisma.visitorLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorLogFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorLogFindFirstArgs} args - Arguments to find a VisitorLog
     * @example
     * // Get one VisitorLog
     * const visitorLog = await prisma.visitorLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorLogFindFirstArgs>(args?: SelectSubset<T, VisitorLogFindFirstArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorLogFindFirstOrThrowArgs} args - Arguments to find a VisitorLog
     * @example
     * // Get one VisitorLog
     * const visitorLog = await prisma.visitorLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorLogFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitorLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitorLogs
     * const visitorLogs = await prisma.visitorLog.findMany()
     * 
     * // Get first 10 VisitorLogs
     * const visitorLogs = await prisma.visitorLog.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const visitorLogWithIdOnly = await prisma.visitorLog.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends VisitorLogFindManyArgs>(args?: SelectSubset<T, VisitorLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitorLog.
     * @param {VisitorLogCreateArgs} args - Arguments to create a VisitorLog.
     * @example
     * // Create one VisitorLog
     * const VisitorLog = await prisma.visitorLog.create({
     *   data: {
     *     // ... data to create a VisitorLog
     *   }
     * })
     * 
     */
    create<T extends VisitorLogCreateArgs>(args: SelectSubset<T, VisitorLogCreateArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitorLogs.
     * @param {VisitorLogCreateManyArgs} args - Arguments to create many VisitorLogs.
     * @example
     * // Create many VisitorLogs
     * const visitorLog = await prisma.visitorLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorLogCreateManyArgs>(args?: SelectSubset<T, VisitorLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitorLogs and returns the data saved in the database.
     * @param {VisitorLogCreateManyAndReturnArgs} args - Arguments to create many VisitorLogs.
     * @example
     * // Create many VisitorLogs
     * const visitorLog = await prisma.visitorLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitorLogs and only return the `Id`
     * const visitorLogWithIdOnly = await prisma.visitorLog.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorLogCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitorLog.
     * @param {VisitorLogDeleteArgs} args - Arguments to delete one VisitorLog.
     * @example
     * // Delete one VisitorLog
     * const VisitorLog = await prisma.visitorLog.delete({
     *   where: {
     *     // ... filter to delete one VisitorLog
     *   }
     * })
     * 
     */
    delete<T extends VisitorLogDeleteArgs>(args: SelectSubset<T, VisitorLogDeleteArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitorLog.
     * @param {VisitorLogUpdateArgs} args - Arguments to update one VisitorLog.
     * @example
     * // Update one VisitorLog
     * const visitorLog = await prisma.visitorLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorLogUpdateArgs>(args: SelectSubset<T, VisitorLogUpdateArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitorLogs.
     * @param {VisitorLogDeleteManyArgs} args - Arguments to filter VisitorLogs to delete.
     * @example
     * // Delete a few VisitorLogs
     * const { count } = await prisma.visitorLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorLogDeleteManyArgs>(args?: SelectSubset<T, VisitorLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitorLogs
     * const visitorLog = await prisma.visitorLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorLogUpdateManyArgs>(args: SelectSubset<T, VisitorLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorLogs and returns the data updated in the database.
     * @param {VisitorLogUpdateManyAndReturnArgs} args - Arguments to update many VisitorLogs.
     * @example
     * // Update many VisitorLogs
     * const visitorLog = await prisma.visitorLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitorLogs and only return the `Id`
     * const visitorLogWithIdOnly = await prisma.visitorLog.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitorLogUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitorLog.
     * @param {VisitorLogUpsertArgs} args - Arguments to update or create a VisitorLog.
     * @example
     * // Update or create a VisitorLog
     * const visitorLog = await prisma.visitorLog.upsert({
     *   create: {
     *     // ... data to create a VisitorLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitorLog we want to update
     *   }
     * })
     */
    upsert<T extends VisitorLogUpsertArgs>(args: SelectSubset<T, VisitorLogUpsertArgs<ExtArgs>>): Prisma__VisitorLogClient<$Result.GetResult<Prisma.$VisitorLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorLogCountArgs} args - Arguments to filter VisitorLogs to count.
     * @example
     * // Count the number of VisitorLogs
     * const count = await prisma.visitorLog.count({
     *   where: {
     *     // ... the filter for the VisitorLogs we want to count
     *   }
     * })
    **/
    count<T extends VisitorLogCountArgs>(
      args?: Subset<T, VisitorLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitorLogAggregateArgs>(args: Subset<T, VisitorLogAggregateArgs>): Prisma.PrismaPromise<GetVisitorLogAggregateType<T>>

    /**
     * Group by VisitorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitorLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorLogGroupByArgs['orderBy'] }
        : { orderBy?: VisitorLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitorLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitorLog model
   */
  readonly fields: VisitorLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitorLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisitorLog model
   */
  interface VisitorLogFieldRefs {
    readonly Id: FieldRef<"VisitorLog", 'String'>
    readonly VisitorId: FieldRef<"VisitorLog", 'String'>
    readonly StaffId: FieldRef<"VisitorLog", 'String'>
    readonly PurposeOfVisit: FieldRef<"VisitorLog", 'String'>
    readonly TagNo: FieldRef<"VisitorLog", 'String'>
    readonly NoOfVistiors: FieldRef<"VisitorLog", 'Int'>
    readonly CheckInTime: FieldRef<"VisitorLog", 'String'>
    readonly CheckOutTime: FieldRef<"VisitorLog", 'String'>
    readonly CreatedAt: FieldRef<"VisitorLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisitorLog findUnique
   */
  export type VisitorLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitorLog to fetch.
     */
    where: VisitorLogWhereUniqueInput
  }

  /**
   * VisitorLog findUniqueOrThrow
   */
  export type VisitorLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitorLog to fetch.
     */
    where: VisitorLogWhereUniqueInput
  }

  /**
   * VisitorLog findFirst
   */
  export type VisitorLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitorLog to fetch.
     */
    where?: VisitorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorLogs to fetch.
     */
    orderBy?: VisitorLogOrderByWithRelationInput | VisitorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorLogs.
     */
    cursor?: VisitorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorLogs.
     */
    distinct?: VisitorLogScalarFieldEnum | VisitorLogScalarFieldEnum[]
  }

  /**
   * VisitorLog findFirstOrThrow
   */
  export type VisitorLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitorLog to fetch.
     */
    where?: VisitorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorLogs to fetch.
     */
    orderBy?: VisitorLogOrderByWithRelationInput | VisitorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorLogs.
     */
    cursor?: VisitorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorLogs.
     */
    distinct?: VisitorLogScalarFieldEnum | VisitorLogScalarFieldEnum[]
  }

  /**
   * VisitorLog findMany
   */
  export type VisitorLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * Filter, which VisitorLogs to fetch.
     */
    where?: VisitorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorLogs to fetch.
     */
    orderBy?: VisitorLogOrderByWithRelationInput | VisitorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitorLogs.
     */
    cursor?: VisitorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorLogs.
     */
    skip?: number
    distinct?: VisitorLogScalarFieldEnum | VisitorLogScalarFieldEnum[]
  }

  /**
   * VisitorLog create
   */
  export type VisitorLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitorLog.
     */
    data: XOR<VisitorLogCreateInput, VisitorLogUncheckedCreateInput>
  }

  /**
   * VisitorLog createMany
   */
  export type VisitorLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitorLogs.
     */
    data: VisitorLogCreateManyInput | VisitorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorLog createManyAndReturn
   */
  export type VisitorLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * The data used to create many VisitorLogs.
     */
    data: VisitorLogCreateManyInput | VisitorLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitorLog update
   */
  export type VisitorLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitorLog.
     */
    data: XOR<VisitorLogUpdateInput, VisitorLogUncheckedUpdateInput>
    /**
     * Choose, which VisitorLog to update.
     */
    where: VisitorLogWhereUniqueInput
  }

  /**
   * VisitorLog updateMany
   */
  export type VisitorLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitorLogs.
     */
    data: XOR<VisitorLogUpdateManyMutationInput, VisitorLogUncheckedUpdateManyInput>
    /**
     * Filter which VisitorLogs to update
     */
    where?: VisitorLogWhereInput
    /**
     * Limit how many VisitorLogs to update.
     */
    limit?: number
  }

  /**
   * VisitorLog updateManyAndReturn
   */
  export type VisitorLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * The data used to update VisitorLogs.
     */
    data: XOR<VisitorLogUpdateManyMutationInput, VisitorLogUncheckedUpdateManyInput>
    /**
     * Filter which VisitorLogs to update
     */
    where?: VisitorLogWhereInput
    /**
     * Limit how many VisitorLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitorLog upsert
   */
  export type VisitorLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitorLog to update in case it exists.
     */
    where: VisitorLogWhereUniqueInput
    /**
     * In case the VisitorLog found by the `where` argument doesn't exist, create a new VisitorLog with this data.
     */
    create: XOR<VisitorLogCreateInput, VisitorLogUncheckedCreateInput>
    /**
     * In case the VisitorLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorLogUpdateInput, VisitorLogUncheckedUpdateInput>
  }

  /**
   * VisitorLog delete
   */
  export type VisitorLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
    /**
     * Filter which VisitorLog to delete.
     */
    where: VisitorLogWhereUniqueInput
  }

  /**
   * VisitorLog deleteMany
   */
  export type VisitorLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorLogs to delete
     */
    where?: VisitorLogWhereInput
    /**
     * Limit how many VisitorLogs to delete.
     */
    limit?: number
  }

  /**
   * VisitorLog without action
   */
  export type VisitorLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorLog
     */
    select?: VisitorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorLog
     */
    omit?: VisitorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorLogInclude<ExtArgs> | null
  }


  /**
   * Model Floor
   */

  export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  export type FloorMinAggregateOutputType = {
    Id: string | null
    Name: string | null
  }

  export type FloorMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
  }

  export type FloorCountAggregateOutputType = {
    Id: number
    Name: number
    _all: number
  }


  export type FloorMinAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type FloorMaxAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type FloorCountAggregateInputType = {
    Id?: true
    Name?: true
    _all?: true
  }

  export type FloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floor to aggregate.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Floors
    **/
    _count?: true | FloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorMaxAggregateInputType
  }

  export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
        [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloor[P]>
      : GetScalarType<T[P], AggregateFloor[P]>
  }




  export type FloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithAggregationInput | FloorOrderByWithAggregationInput[]
    by: FloorScalarFieldEnum[] | FloorScalarFieldEnum
    having?: FloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorCountAggregateInputType | true
    _min?: FloorMinAggregateInputType
    _max?: FloorMaxAggregateInputType
  }

  export type FloorGroupByOutputType = {
    Id: string
    Name: string
    _count: FloorCountAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorGroupByOutputType[P]>
            : GetScalarType<T[P], FloorGroupByOutputType[P]>
        }
      >
    >


  export type FloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    User?: boolean | Floor$UserArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectScalar = {
    Id?: boolean
    Name?: boolean
  }

  export type FloorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name", ExtArgs["result"]["floor"]>
  export type FloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Floor$UserArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FloorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FloorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Floor"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
    }, ExtArgs["result"]["floor"]>
    composites: {}
  }

  type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = $Result.GetResult<Prisma.$FloorPayload, S>

  type FloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorCountAggregateInputType | true
    }

  export interface FloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Floor'], meta: { name: 'Floor' } }
    /**
     * Find zero or one Floor that matches the filter.
     * @param {FloorFindUniqueArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorFindUniqueArgs>(args: SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Floor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorFindUniqueOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorFindFirstArgs>(args?: SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Floors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Floors
     * const floors = await prisma.floor.findMany()
     * 
     * // Get first 10 Floors
     * const floors = await prisma.floor.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const floorWithIdOnly = await prisma.floor.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends FloorFindManyArgs>(args?: SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Floor.
     * @param {FloorCreateArgs} args - Arguments to create a Floor.
     * @example
     * // Create one Floor
     * const Floor = await prisma.floor.create({
     *   data: {
     *     // ... data to create a Floor
     *   }
     * })
     * 
     */
    create<T extends FloorCreateArgs>(args: SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Floors.
     * @param {FloorCreateManyArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorCreateManyArgs>(args?: SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Floors and returns the data saved in the database.
     * @param {FloorCreateManyAndReturnArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Floors and only return the `Id`
     * const floorWithIdOnly = await prisma.floor.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloorCreateManyAndReturnArgs>(args?: SelectSubset<T, FloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Floor.
     * @param {FloorDeleteArgs} args - Arguments to delete one Floor.
     * @example
     * // Delete one Floor
     * const Floor = await prisma.floor.delete({
     *   where: {
     *     // ... filter to delete one Floor
     *   }
     * })
     * 
     */
    delete<T extends FloorDeleteArgs>(args: SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Floor.
     * @param {FloorUpdateArgs} args - Arguments to update one Floor.
     * @example
     * // Update one Floor
     * const floor = await prisma.floor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorUpdateArgs>(args: SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Floors.
     * @param {FloorDeleteManyArgs} args - Arguments to filter Floors to delete.
     * @example
     * // Delete a few Floors
     * const { count } = await prisma.floor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorDeleteManyArgs>(args?: SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorUpdateManyArgs>(args: SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors and returns the data updated in the database.
     * @param {FloorUpdateManyAndReturnArgs} args - Arguments to update many Floors.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Floors and only return the `Id`
     * const floorWithIdOnly = await prisma.floor.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FloorUpdateManyAndReturnArgs>(args: SelectSubset<T, FloorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Floor.
     * @param {FloorUpsertArgs} args - Arguments to update or create a Floor.
     * @example
     * // Update or create a Floor
     * const floor = await prisma.floor.upsert({
     *   create: {
     *     // ... data to create a Floor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Floor we want to update
     *   }
     * })
     */
    upsert<T extends FloorUpsertArgs>(args: SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorCountArgs} args - Arguments to filter Floors to count.
     * @example
     * // Count the number of Floors
     * const count = await prisma.floor.count({
     *   where: {
     *     // ... the filter for the Floors we want to count
     *   }
     * })
    **/
    count<T extends FloorCountArgs>(
      args?: Subset<T, FloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FloorAggregateArgs>(args: Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>

    /**
     * Group by Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorGroupByArgs['orderBy'] }
        : { orderBy?: FloorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Floor model
   */
  readonly fields: FloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Floor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Floor$UserArgs<ExtArgs> = {}>(args?: Subset<T, Floor$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Floor model
   */
  interface FloorFieldRefs {
    readonly Id: FieldRef<"Floor", 'String'>
    readonly Name: FieldRef<"Floor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Floor findUnique
   */
  export type FloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findUniqueOrThrow
   */
  export type FloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findFirst
   */
  export type FloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findFirstOrThrow
   */
  export type FloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findMany
   */
  export type FloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floors to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor create
   */
  export type FloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to create a Floor.
     */
    data: XOR<FloorCreateInput, FloorUncheckedCreateInput>
  }

  /**
   * Floor createMany
   */
  export type FloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Floor createManyAndReturn
   */
  export type FloorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Floor update
   */
  export type FloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to update a Floor.
     */
    data: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
    /**
     * Choose, which Floor to update.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor updateMany
   */
  export type FloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor updateManyAndReturn
   */
  export type FloorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor upsert
   */
  export type FloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The filter to search for the Floor to update in case it exists.
     */
    where: FloorWhereUniqueInput
    /**
     * In case the Floor found by the `where` argument doesn't exist, create a new Floor with this data.
     */
    create: XOR<FloorCreateInput, FloorUncheckedCreateInput>
    /**
     * In case the Floor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
  }

  /**
   * Floor delete
   */
  export type FloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter which Floor to delete.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor deleteMany
   */
  export type FloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floors to delete
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to delete.
     */
    limit?: number
  }

  /**
   * Floor.User
   */
  export type Floor$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Floor without action
   */
  export type FloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    Id: string | null
    Name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    Id: string | null
    Name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    Id: number
    Name: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    Id?: true
    Name?: true
  }

  export type DepartmentCountAggregateInputType = {
    Id?: true
    Name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    Id: string
    Name: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
    User?: boolean | Department$UserArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    Id?: boolean
    Name?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Name", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Department$UserArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `Id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `Id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Department$UserArgs<ExtArgs> = {}>(args?: Subset<T, Department$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly Id: FieldRef<"Department", 'String'>
    readonly Name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.User
   */
  export type Department$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    NoVisitors: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    NoVisitors: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    Id: string | null
    StaffId: string | null
    VisitorId: string | null
    Purpose: string | null
    Message: string | null
    NoVisitors: number | null
    InvitationCode: string | null
    Status: string | null
    CreatedAt: Date | null
    AppointmentDate: Date | null
    RescheduleDate: Date | null
    CancellationReason: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    Id: string | null
    StaffId: string | null
    VisitorId: string | null
    Purpose: string | null
    Message: string | null
    NoVisitors: number | null
    InvitationCode: string | null
    Status: string | null
    CreatedAt: Date | null
    AppointmentDate: Date | null
    RescheduleDate: Date | null
    CancellationReason: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    Id: number
    StaffId: number
    VisitorId: number
    Purpose: number
    Message: number
    NoVisitors: number
    InvitationCode: number
    Status: number
    CreatedAt: number
    AppointmentDate: number
    RescheduleDate: number
    CancellationReason: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    NoVisitors?: true
  }

  export type AppointmentSumAggregateInputType = {
    NoVisitors?: true
  }

  export type AppointmentMinAggregateInputType = {
    Id?: true
    StaffId?: true
    VisitorId?: true
    Purpose?: true
    Message?: true
    NoVisitors?: true
    InvitationCode?: true
    Status?: true
    CreatedAt?: true
    AppointmentDate?: true
    RescheduleDate?: true
    CancellationReason?: true
  }

  export type AppointmentMaxAggregateInputType = {
    Id?: true
    StaffId?: true
    VisitorId?: true
    Purpose?: true
    Message?: true
    NoVisitors?: true
    InvitationCode?: true
    Status?: true
    CreatedAt?: true
    AppointmentDate?: true
    RescheduleDate?: true
    CancellationReason?: true
  }

  export type AppointmentCountAggregateInputType = {
    Id?: true
    StaffId?: true
    VisitorId?: true
    Purpose?: true
    Message?: true
    NoVisitors?: true
    InvitationCode?: true
    Status?: true
    CreatedAt?: true
    AppointmentDate?: true
    RescheduleDate?: true
    CancellationReason?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    Id: string
    StaffId: string
    VisitorId: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status: string
    CreatedAt: Date
    AppointmentDate: Date
    RescheduleDate: Date | null
    CancellationReason: string | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    StaffId?: boolean
    VisitorId?: boolean
    Purpose?: boolean
    Message?: boolean
    NoVisitors?: boolean
    InvitationCode?: boolean
    Status?: boolean
    CreatedAt?: boolean
    AppointmentDate?: boolean
    RescheduleDate?: boolean
    CancellationReason?: boolean
    Staff?: boolean | UserDefaultArgs<ExtArgs>
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    StaffId?: boolean
    VisitorId?: boolean
    Purpose?: boolean
    Message?: boolean
    NoVisitors?: boolean
    InvitationCode?: boolean
    Status?: boolean
    CreatedAt?: boolean
    AppointmentDate?: boolean
    RescheduleDate?: boolean
    CancellationReason?: boolean
    Staff?: boolean | UserDefaultArgs<ExtArgs>
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    StaffId?: boolean
    VisitorId?: boolean
    Purpose?: boolean
    Message?: boolean
    NoVisitors?: boolean
    InvitationCode?: boolean
    Status?: boolean
    CreatedAt?: boolean
    AppointmentDate?: boolean
    RescheduleDate?: boolean
    CancellationReason?: boolean
    Staff?: boolean | UserDefaultArgs<ExtArgs>
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    Id?: boolean
    StaffId?: boolean
    VisitorId?: boolean
    Purpose?: boolean
    Message?: boolean
    NoVisitors?: boolean
    InvitationCode?: boolean
    Status?: boolean
    CreatedAt?: boolean
    AppointmentDate?: boolean
    RescheduleDate?: boolean
    CancellationReason?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "StaffId" | "VisitorId" | "Purpose" | "Message" | "NoVisitors" | "InvitationCode" | "Status" | "CreatedAt" | "AppointmentDate" | "RescheduleDate" | "CancellationReason", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | UserDefaultArgs<ExtArgs>
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | UserDefaultArgs<ExtArgs>
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Staff?: boolean | UserDefaultArgs<ExtArgs>
    Visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      Staff: Prisma.$UserPayload<ExtArgs>
      Visitor: Prisma.$VisitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      StaffId: string
      VisitorId: string
      Purpose: string
      Message: string
      NoVisitors: number
      InvitationCode: string
      Status: string
      CreatedAt: Date
      AppointmentDate: Date
      RescheduleDate: Date | null
      CancellationReason: string | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `Id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `Id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly Id: FieldRef<"Appointment", 'String'>
    readonly StaffId: FieldRef<"Appointment", 'String'>
    readonly VisitorId: FieldRef<"Appointment", 'String'>
    readonly Purpose: FieldRef<"Appointment", 'String'>
    readonly Message: FieldRef<"Appointment", 'String'>
    readonly NoVisitors: FieldRef<"Appointment", 'Int'>
    readonly InvitationCode: FieldRef<"Appointment", 'String'>
    readonly Status: FieldRef<"Appointment", 'String'>
    readonly CreatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly AppointmentDate: FieldRef<"Appointment", 'DateTime'>
    readonly RescheduleDate: FieldRef<"Appointment", 'DateTime'>
    readonly CancellationReason: FieldRef<"Appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model SMSNotification
   */

  export type AggregateSMSNotification = {
    _count: SMSNotificationCountAggregateOutputType | null
    _avg: SMSNotificationAvgAggregateOutputType | null
    _sum: SMSNotificationSumAggregateOutputType | null
    _min: SMSNotificationMinAggregateOutputType | null
    _max: SMSNotificationMaxAggregateOutputType | null
  }

  export type SMSNotificationAvgAggregateOutputType = {
    RetryCount: number | null
    Status: number | null
  }

  export type SMSNotificationSumAggregateOutputType = {
    RetryCount: number | null
    Status: number | null
  }

  export type SMSNotificationMinAggregateOutputType = {
    Id: string | null
    RecipientPhone: string | null
    RecipientName: string | null
    Message: string | null
    RetryCount: number | null
    Status: number | null
    LastRetryDate: Date | null
    ErrorMessage: string | null
    CreatedAt: Date | null
  }

  export type SMSNotificationMaxAggregateOutputType = {
    Id: string | null
    RecipientPhone: string | null
    RecipientName: string | null
    Message: string | null
    RetryCount: number | null
    Status: number | null
    LastRetryDate: Date | null
    ErrorMessage: string | null
    CreatedAt: Date | null
  }

  export type SMSNotificationCountAggregateOutputType = {
    Id: number
    RecipientPhone: number
    RecipientName: number
    Message: number
    RetryCount: number
    Status: number
    LastRetryDate: number
    ErrorMessage: number
    CreatedAt: number
    _all: number
  }


  export type SMSNotificationAvgAggregateInputType = {
    RetryCount?: true
    Status?: true
  }

  export type SMSNotificationSumAggregateInputType = {
    RetryCount?: true
    Status?: true
  }

  export type SMSNotificationMinAggregateInputType = {
    Id?: true
    RecipientPhone?: true
    RecipientName?: true
    Message?: true
    RetryCount?: true
    Status?: true
    LastRetryDate?: true
    ErrorMessage?: true
    CreatedAt?: true
  }

  export type SMSNotificationMaxAggregateInputType = {
    Id?: true
    RecipientPhone?: true
    RecipientName?: true
    Message?: true
    RetryCount?: true
    Status?: true
    LastRetryDate?: true
    ErrorMessage?: true
    CreatedAt?: true
  }

  export type SMSNotificationCountAggregateInputType = {
    Id?: true
    RecipientPhone?: true
    RecipientName?: true
    Message?: true
    RetryCount?: true
    Status?: true
    LastRetryDate?: true
    ErrorMessage?: true
    CreatedAt?: true
    _all?: true
  }

  export type SMSNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSNotification to aggregate.
     */
    where?: SMSNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSNotifications to fetch.
     */
    orderBy?: SMSNotificationOrderByWithRelationInput | SMSNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SMSNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SMSNotifications
    **/
    _count?: true | SMSNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SMSNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SMSNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SMSNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SMSNotificationMaxAggregateInputType
  }

  export type GetSMSNotificationAggregateType<T extends SMSNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateSMSNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSMSNotification[P]>
      : GetScalarType<T[P], AggregateSMSNotification[P]>
  }




  export type SMSNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SMSNotificationWhereInput
    orderBy?: SMSNotificationOrderByWithAggregationInput | SMSNotificationOrderByWithAggregationInput[]
    by: SMSNotificationScalarFieldEnum[] | SMSNotificationScalarFieldEnum
    having?: SMSNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SMSNotificationCountAggregateInputType | true
    _avg?: SMSNotificationAvgAggregateInputType
    _sum?: SMSNotificationSumAggregateInputType
    _min?: SMSNotificationMinAggregateInputType
    _max?: SMSNotificationMaxAggregateInputType
  }

  export type SMSNotificationGroupByOutputType = {
    Id: string
    RecipientPhone: string
    RecipientName: string
    Message: string
    RetryCount: number
    Status: number
    LastRetryDate: Date
    ErrorMessage: string
    CreatedAt: Date
    _count: SMSNotificationCountAggregateOutputType | null
    _avg: SMSNotificationAvgAggregateOutputType | null
    _sum: SMSNotificationSumAggregateOutputType | null
    _min: SMSNotificationMinAggregateOutputType | null
    _max: SMSNotificationMaxAggregateOutputType | null
  }

  type GetSMSNotificationGroupByPayload<T extends SMSNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SMSNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SMSNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SMSNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], SMSNotificationGroupByOutputType[P]>
        }
      >
    >


  export type SMSNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RecipientPhone?: boolean
    RecipientName?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["sMSNotification"]>

  export type SMSNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RecipientPhone?: boolean
    RecipientName?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["sMSNotification"]>

  export type SMSNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RecipientPhone?: boolean
    RecipientName?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["sMSNotification"]>

  export type SMSNotificationSelectScalar = {
    Id?: boolean
    RecipientPhone?: boolean
    RecipientName?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }

  export type SMSNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "RecipientPhone" | "RecipientName" | "Message" | "RetryCount" | "Status" | "LastRetryDate" | "ErrorMessage" | "CreatedAt", ExtArgs["result"]["sMSNotification"]>

  export type $SMSNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SMSNotification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      RecipientPhone: string
      RecipientName: string
      Message: string
      RetryCount: number
      Status: number
      LastRetryDate: Date
      ErrorMessage: string
      CreatedAt: Date
    }, ExtArgs["result"]["sMSNotification"]>
    composites: {}
  }

  type SMSNotificationGetPayload<S extends boolean | null | undefined | SMSNotificationDefaultArgs> = $Result.GetResult<Prisma.$SMSNotificationPayload, S>

  type SMSNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SMSNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SMSNotificationCountAggregateInputType | true
    }

  export interface SMSNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SMSNotification'], meta: { name: 'SMSNotification' } }
    /**
     * Find zero or one SMSNotification that matches the filter.
     * @param {SMSNotificationFindUniqueArgs} args - Arguments to find a SMSNotification
     * @example
     * // Get one SMSNotification
     * const sMSNotification = await prisma.sMSNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SMSNotificationFindUniqueArgs>(args: SelectSubset<T, SMSNotificationFindUniqueArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SMSNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SMSNotificationFindUniqueOrThrowArgs} args - Arguments to find a SMSNotification
     * @example
     * // Get one SMSNotification
     * const sMSNotification = await prisma.sMSNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SMSNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, SMSNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSNotificationFindFirstArgs} args - Arguments to find a SMSNotification
     * @example
     * // Get one SMSNotification
     * const sMSNotification = await prisma.sMSNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SMSNotificationFindFirstArgs>(args?: SelectSubset<T, SMSNotificationFindFirstArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SMSNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSNotificationFindFirstOrThrowArgs} args - Arguments to find a SMSNotification
     * @example
     * // Get one SMSNotification
     * const sMSNotification = await prisma.sMSNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SMSNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, SMSNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SMSNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SMSNotifications
     * const sMSNotifications = await prisma.sMSNotification.findMany()
     * 
     * // Get first 10 SMSNotifications
     * const sMSNotifications = await prisma.sMSNotification.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const sMSNotificationWithIdOnly = await prisma.sMSNotification.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends SMSNotificationFindManyArgs>(args?: SelectSubset<T, SMSNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SMSNotification.
     * @param {SMSNotificationCreateArgs} args - Arguments to create a SMSNotification.
     * @example
     * // Create one SMSNotification
     * const SMSNotification = await prisma.sMSNotification.create({
     *   data: {
     *     // ... data to create a SMSNotification
     *   }
     * })
     * 
     */
    create<T extends SMSNotificationCreateArgs>(args: SelectSubset<T, SMSNotificationCreateArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SMSNotifications.
     * @param {SMSNotificationCreateManyArgs} args - Arguments to create many SMSNotifications.
     * @example
     * // Create many SMSNotifications
     * const sMSNotification = await prisma.sMSNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SMSNotificationCreateManyArgs>(args?: SelectSubset<T, SMSNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SMSNotifications and returns the data saved in the database.
     * @param {SMSNotificationCreateManyAndReturnArgs} args - Arguments to create many SMSNotifications.
     * @example
     * // Create many SMSNotifications
     * const sMSNotification = await prisma.sMSNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SMSNotifications and only return the `Id`
     * const sMSNotificationWithIdOnly = await prisma.sMSNotification.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SMSNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, SMSNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SMSNotification.
     * @param {SMSNotificationDeleteArgs} args - Arguments to delete one SMSNotification.
     * @example
     * // Delete one SMSNotification
     * const SMSNotification = await prisma.sMSNotification.delete({
     *   where: {
     *     // ... filter to delete one SMSNotification
     *   }
     * })
     * 
     */
    delete<T extends SMSNotificationDeleteArgs>(args: SelectSubset<T, SMSNotificationDeleteArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SMSNotification.
     * @param {SMSNotificationUpdateArgs} args - Arguments to update one SMSNotification.
     * @example
     * // Update one SMSNotification
     * const sMSNotification = await prisma.sMSNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SMSNotificationUpdateArgs>(args: SelectSubset<T, SMSNotificationUpdateArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SMSNotifications.
     * @param {SMSNotificationDeleteManyArgs} args - Arguments to filter SMSNotifications to delete.
     * @example
     * // Delete a few SMSNotifications
     * const { count } = await prisma.sMSNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SMSNotificationDeleteManyArgs>(args?: SelectSubset<T, SMSNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SMSNotifications
     * const sMSNotification = await prisma.sMSNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SMSNotificationUpdateManyArgs>(args: SelectSubset<T, SMSNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SMSNotifications and returns the data updated in the database.
     * @param {SMSNotificationUpdateManyAndReturnArgs} args - Arguments to update many SMSNotifications.
     * @example
     * // Update many SMSNotifications
     * const sMSNotification = await prisma.sMSNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SMSNotifications and only return the `Id`
     * const sMSNotificationWithIdOnly = await prisma.sMSNotification.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SMSNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, SMSNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SMSNotification.
     * @param {SMSNotificationUpsertArgs} args - Arguments to update or create a SMSNotification.
     * @example
     * // Update or create a SMSNotification
     * const sMSNotification = await prisma.sMSNotification.upsert({
     *   create: {
     *     // ... data to create a SMSNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SMSNotification we want to update
     *   }
     * })
     */
    upsert<T extends SMSNotificationUpsertArgs>(args: SelectSubset<T, SMSNotificationUpsertArgs<ExtArgs>>): Prisma__SMSNotificationClient<$Result.GetResult<Prisma.$SMSNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SMSNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSNotificationCountArgs} args - Arguments to filter SMSNotifications to count.
     * @example
     * // Count the number of SMSNotifications
     * const count = await prisma.sMSNotification.count({
     *   where: {
     *     // ... the filter for the SMSNotifications we want to count
     *   }
     * })
    **/
    count<T extends SMSNotificationCountArgs>(
      args?: Subset<T, SMSNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SMSNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SMSNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SMSNotificationAggregateArgs>(args: Subset<T, SMSNotificationAggregateArgs>): Prisma.PrismaPromise<GetSMSNotificationAggregateType<T>>

    /**
     * Group by SMSNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SMSNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SMSNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SMSNotificationGroupByArgs['orderBy'] }
        : { orderBy?: SMSNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SMSNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSMSNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SMSNotification model
   */
  readonly fields: SMSNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SMSNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SMSNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SMSNotification model
   */
  interface SMSNotificationFieldRefs {
    readonly Id: FieldRef<"SMSNotification", 'String'>
    readonly RecipientPhone: FieldRef<"SMSNotification", 'String'>
    readonly RecipientName: FieldRef<"SMSNotification", 'String'>
    readonly Message: FieldRef<"SMSNotification", 'String'>
    readonly RetryCount: FieldRef<"SMSNotification", 'Int'>
    readonly Status: FieldRef<"SMSNotification", 'Int'>
    readonly LastRetryDate: FieldRef<"SMSNotification", 'DateTime'>
    readonly ErrorMessage: FieldRef<"SMSNotification", 'String'>
    readonly CreatedAt: FieldRef<"SMSNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SMSNotification findUnique
   */
  export type SMSNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SMSNotification to fetch.
     */
    where: SMSNotificationWhereUniqueInput
  }

  /**
   * SMSNotification findUniqueOrThrow
   */
  export type SMSNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SMSNotification to fetch.
     */
    where: SMSNotificationWhereUniqueInput
  }

  /**
   * SMSNotification findFirst
   */
  export type SMSNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SMSNotification to fetch.
     */
    where?: SMSNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSNotifications to fetch.
     */
    orderBy?: SMSNotificationOrderByWithRelationInput | SMSNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSNotifications.
     */
    cursor?: SMSNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSNotifications.
     */
    distinct?: SMSNotificationScalarFieldEnum | SMSNotificationScalarFieldEnum[]
  }

  /**
   * SMSNotification findFirstOrThrow
   */
  export type SMSNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SMSNotification to fetch.
     */
    where?: SMSNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSNotifications to fetch.
     */
    orderBy?: SMSNotificationOrderByWithRelationInput | SMSNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SMSNotifications.
     */
    cursor?: SMSNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SMSNotifications.
     */
    distinct?: SMSNotificationScalarFieldEnum | SMSNotificationScalarFieldEnum[]
  }

  /**
   * SMSNotification findMany
   */
  export type SMSNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * Filter, which SMSNotifications to fetch.
     */
    where?: SMSNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SMSNotifications to fetch.
     */
    orderBy?: SMSNotificationOrderByWithRelationInput | SMSNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SMSNotifications.
     */
    cursor?: SMSNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SMSNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SMSNotifications.
     */
    skip?: number
    distinct?: SMSNotificationScalarFieldEnum | SMSNotificationScalarFieldEnum[]
  }

  /**
   * SMSNotification create
   */
  export type SMSNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a SMSNotification.
     */
    data: XOR<SMSNotificationCreateInput, SMSNotificationUncheckedCreateInput>
  }

  /**
   * SMSNotification createMany
   */
  export type SMSNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SMSNotifications.
     */
    data: SMSNotificationCreateManyInput | SMSNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SMSNotification createManyAndReturn
   */
  export type SMSNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many SMSNotifications.
     */
    data: SMSNotificationCreateManyInput | SMSNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SMSNotification update
   */
  export type SMSNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a SMSNotification.
     */
    data: XOR<SMSNotificationUpdateInput, SMSNotificationUncheckedUpdateInput>
    /**
     * Choose, which SMSNotification to update.
     */
    where: SMSNotificationWhereUniqueInput
  }

  /**
   * SMSNotification updateMany
   */
  export type SMSNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SMSNotifications.
     */
    data: XOR<SMSNotificationUpdateManyMutationInput, SMSNotificationUncheckedUpdateManyInput>
    /**
     * Filter which SMSNotifications to update
     */
    where?: SMSNotificationWhereInput
    /**
     * Limit how many SMSNotifications to update.
     */
    limit?: number
  }

  /**
   * SMSNotification updateManyAndReturn
   */
  export type SMSNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * The data used to update SMSNotifications.
     */
    data: XOR<SMSNotificationUpdateManyMutationInput, SMSNotificationUncheckedUpdateManyInput>
    /**
     * Filter which SMSNotifications to update
     */
    where?: SMSNotificationWhereInput
    /**
     * Limit how many SMSNotifications to update.
     */
    limit?: number
  }

  /**
   * SMSNotification upsert
   */
  export type SMSNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the SMSNotification to update in case it exists.
     */
    where: SMSNotificationWhereUniqueInput
    /**
     * In case the SMSNotification found by the `where` argument doesn't exist, create a new SMSNotification with this data.
     */
    create: XOR<SMSNotificationCreateInput, SMSNotificationUncheckedCreateInput>
    /**
     * In case the SMSNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SMSNotificationUpdateInput, SMSNotificationUncheckedUpdateInput>
  }

  /**
   * SMSNotification delete
   */
  export type SMSNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
    /**
     * Filter which SMSNotification to delete.
     */
    where: SMSNotificationWhereUniqueInput
  }

  /**
   * SMSNotification deleteMany
   */
  export type SMSNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SMSNotifications to delete
     */
    where?: SMSNotificationWhereInput
    /**
     * Limit how many SMSNotifications to delete.
     */
    limit?: number
  }

  /**
   * SMSNotification without action
   */
  export type SMSNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SMSNotification
     */
    select?: SMSNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SMSNotification
     */
    omit?: SMSNotificationOmit<ExtArgs> | null
  }


  /**
   * Model EmailNotification
   */

  export type AggregateEmailNotification = {
    _count: EmailNotificationCountAggregateOutputType | null
    _avg: EmailNotificationAvgAggregateOutputType | null
    _sum: EmailNotificationSumAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  export type EmailNotificationAvgAggregateOutputType = {
    RetryCount: number | null
    Status: number | null
  }

  export type EmailNotificationSumAggregateOutputType = {
    RetryCount: number | null
    Status: number | null
  }

  export type EmailNotificationMinAggregateOutputType = {
    Id: string | null
    RecipientEmail: string | null
    RecipientName: string | null
    Subject: string | null
    Message: string | null
    RetryCount: number | null
    Status: number | null
    LastRetryDate: Date | null
    ErrorMessage: string | null
    CreatedAt: Date | null
  }

  export type EmailNotificationMaxAggregateOutputType = {
    Id: string | null
    RecipientEmail: string | null
    RecipientName: string | null
    Subject: string | null
    Message: string | null
    RetryCount: number | null
    Status: number | null
    LastRetryDate: Date | null
    ErrorMessage: string | null
    CreatedAt: Date | null
  }

  export type EmailNotificationCountAggregateOutputType = {
    Id: number
    RecipientEmail: number
    RecipientName: number
    Subject: number
    Message: number
    RetryCount: number
    Status: number
    LastRetryDate: number
    ErrorMessage: number
    CreatedAt: number
    _all: number
  }


  export type EmailNotificationAvgAggregateInputType = {
    RetryCount?: true
    Status?: true
  }

  export type EmailNotificationSumAggregateInputType = {
    RetryCount?: true
    Status?: true
  }

  export type EmailNotificationMinAggregateInputType = {
    Id?: true
    RecipientEmail?: true
    RecipientName?: true
    Subject?: true
    Message?: true
    RetryCount?: true
    Status?: true
    LastRetryDate?: true
    ErrorMessage?: true
    CreatedAt?: true
  }

  export type EmailNotificationMaxAggregateInputType = {
    Id?: true
    RecipientEmail?: true
    RecipientName?: true
    Subject?: true
    Message?: true
    RetryCount?: true
    Status?: true
    LastRetryDate?: true
    ErrorMessage?: true
    CreatedAt?: true
  }

  export type EmailNotificationCountAggregateInputType = {
    Id?: true
    RecipientEmail?: true
    RecipientName?: true
    Subject?: true
    Message?: true
    RetryCount?: true
    Status?: true
    LastRetryDate?: true
    ErrorMessage?: true
    CreatedAt?: true
    _all?: true
  }

  export type EmailNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotification to aggregate.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailNotifications
    **/
    _count?: true | EmailNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type GetEmailNotificationAggregateType<T extends EmailNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailNotification[P]>
      : GetScalarType<T[P], AggregateEmailNotification[P]>
  }




  export type EmailNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithAggregationInput | EmailNotificationOrderByWithAggregationInput[]
    by: EmailNotificationScalarFieldEnum[] | EmailNotificationScalarFieldEnum
    having?: EmailNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailNotificationCountAggregateInputType | true
    _avg?: EmailNotificationAvgAggregateInputType
    _sum?: EmailNotificationSumAggregateInputType
    _min?: EmailNotificationMinAggregateInputType
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type EmailNotificationGroupByOutputType = {
    Id: string
    RecipientEmail: string
    RecipientName: string
    Subject: string
    Message: string
    RetryCount: number
    Status: number
    LastRetryDate: Date
    ErrorMessage: string
    CreatedAt: Date
    _count: EmailNotificationCountAggregateOutputType | null
    _avg: EmailNotificationAvgAggregateOutputType | null
    _sum: EmailNotificationSumAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  type GetEmailNotificationGroupByPayload<T extends EmailNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RecipientEmail?: boolean
    RecipientName?: boolean
    Subject?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RecipientEmail?: boolean
    RecipientName?: boolean
    Subject?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    RecipientEmail?: boolean
    RecipientName?: boolean
    Subject?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectScalar = {
    Id?: boolean
    RecipientEmail?: boolean
    RecipientName?: boolean
    Subject?: boolean
    Message?: boolean
    RetryCount?: boolean
    Status?: boolean
    LastRetryDate?: boolean
    ErrorMessage?: boolean
    CreatedAt?: boolean
  }

  export type EmailNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "RecipientEmail" | "RecipientName" | "Subject" | "Message" | "RetryCount" | "Status" | "LastRetryDate" | "ErrorMessage" | "CreatedAt", ExtArgs["result"]["emailNotification"]>

  export type $EmailNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailNotification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      RecipientEmail: string
      RecipientName: string
      Subject: string
      Message: string
      RetryCount: number
      Status: number
      LastRetryDate: Date
      ErrorMessage: string
      CreatedAt: Date
    }, ExtArgs["result"]["emailNotification"]>
    composites: {}
  }

  type EmailNotificationGetPayload<S extends boolean | null | undefined | EmailNotificationDefaultArgs> = $Result.GetResult<Prisma.$EmailNotificationPayload, S>

  type EmailNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailNotificationCountAggregateInputType | true
    }

  export interface EmailNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailNotification'], meta: { name: 'EmailNotification' } }
    /**
     * Find zero or one EmailNotification that matches the filter.
     * @param {EmailNotificationFindUniqueArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailNotificationFindUniqueArgs>(args: SelectSubset<T, EmailNotificationFindUniqueArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailNotificationFindUniqueOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailNotificationFindFirstArgs>(args?: SelectSubset<T, EmailNotificationFindFirstArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany()
     * 
     * // Get first 10 EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends EmailNotificationFindManyArgs>(args?: SelectSubset<T, EmailNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailNotification.
     * @param {EmailNotificationCreateArgs} args - Arguments to create a EmailNotification.
     * @example
     * // Create one EmailNotification
     * const EmailNotification = await prisma.emailNotification.create({
     *   data: {
     *     // ... data to create a EmailNotification
     *   }
     * })
     * 
     */
    create<T extends EmailNotificationCreateArgs>(args: SelectSubset<T, EmailNotificationCreateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailNotifications.
     * @param {EmailNotificationCreateManyArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailNotificationCreateManyArgs>(args?: SelectSubset<T, EmailNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailNotifications and returns the data saved in the database.
     * @param {EmailNotificationCreateManyAndReturnArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailNotifications and only return the `Id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailNotification.
     * @param {EmailNotificationDeleteArgs} args - Arguments to delete one EmailNotification.
     * @example
     * // Delete one EmailNotification
     * const EmailNotification = await prisma.emailNotification.delete({
     *   where: {
     *     // ... filter to delete one EmailNotification
     *   }
     * })
     * 
     */
    delete<T extends EmailNotificationDeleteArgs>(args: SelectSubset<T, EmailNotificationDeleteArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailNotification.
     * @param {EmailNotificationUpdateArgs} args - Arguments to update one EmailNotification.
     * @example
     * // Update one EmailNotification
     * const emailNotification = await prisma.emailNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailNotificationUpdateArgs>(args: SelectSubset<T, EmailNotificationUpdateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailNotifications.
     * @param {EmailNotificationDeleteManyArgs} args - Arguments to filter EmailNotifications to delete.
     * @example
     * // Delete a few EmailNotifications
     * const { count } = await prisma.emailNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailNotificationDeleteManyArgs>(args?: SelectSubset<T, EmailNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailNotificationUpdateManyArgs>(args: SelectSubset<T, EmailNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications and returns the data updated in the database.
     * @param {EmailNotificationUpdateManyAndReturnArgs} args - Arguments to update many EmailNotifications.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailNotifications and only return the `Id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailNotification.
     * @param {EmailNotificationUpsertArgs} args - Arguments to update or create a EmailNotification.
     * @example
     * // Update or create a EmailNotification
     * const emailNotification = await prisma.emailNotification.upsert({
     *   create: {
     *     // ... data to create a EmailNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailNotification we want to update
     *   }
     * })
     */
    upsert<T extends EmailNotificationUpsertArgs>(args: SelectSubset<T, EmailNotificationUpsertArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationCountArgs} args - Arguments to filter EmailNotifications to count.
     * @example
     * // Count the number of EmailNotifications
     * const count = await prisma.emailNotification.count({
     *   where: {
     *     // ... the filter for the EmailNotifications we want to count
     *   }
     * })
    **/
    count<T extends EmailNotificationCountArgs>(
      args?: Subset<T, EmailNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailNotificationAggregateArgs>(args: Subset<T, EmailNotificationAggregateArgs>): Prisma.PrismaPromise<GetEmailNotificationAggregateType<T>>

    /**
     * Group by EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailNotificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailNotification model
   */
  readonly fields: EmailNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailNotification model
   */
  interface EmailNotificationFieldRefs {
    readonly Id: FieldRef<"EmailNotification", 'String'>
    readonly RecipientEmail: FieldRef<"EmailNotification", 'String'>
    readonly RecipientName: FieldRef<"EmailNotification", 'String'>
    readonly Subject: FieldRef<"EmailNotification", 'String'>
    readonly Message: FieldRef<"EmailNotification", 'String'>
    readonly RetryCount: FieldRef<"EmailNotification", 'Int'>
    readonly Status: FieldRef<"EmailNotification", 'Int'>
    readonly LastRetryDate: FieldRef<"EmailNotification", 'DateTime'>
    readonly ErrorMessage: FieldRef<"EmailNotification", 'String'>
    readonly CreatedAt: FieldRef<"EmailNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailNotification findUnique
   */
  export type EmailNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findUniqueOrThrow
   */
  export type EmailNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findFirst
   */
  export type EmailNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findFirstOrThrow
   */
  export type EmailNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findMany
   */
  export type EmailNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailNotifications to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification create
   */
  export type EmailNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailNotification.
     */
    data: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
  }

  /**
   * EmailNotification createMany
   */
  export type EmailNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailNotification createManyAndReturn
   */
  export type EmailNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailNotification update
   */
  export type EmailNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailNotification.
     */
    data: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
    /**
     * Choose, which EmailNotification to update.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification updateMany
   */
  export type EmailNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
  }

  /**
   * EmailNotification updateManyAndReturn
   */
  export type EmailNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
  }

  /**
   * EmailNotification upsert
   */
  export type EmailNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailNotification to update in case it exists.
     */
    where: EmailNotificationWhereUniqueInput
    /**
     * In case the EmailNotification found by the `where` argument doesn't exist, create a new EmailNotification with this data.
     */
    create: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
    /**
     * In case the EmailNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
  }

  /**
   * EmailNotification delete
   */
  export type EmailNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Filter which EmailNotification to delete.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification deleteMany
   */
  export type EmailNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotifications to delete
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to delete.
     */
    limit?: number
  }

  /**
   * EmailNotification without action
   */
  export type EmailNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
  }


  /**
   * Model ArchiveNotification
   */

  export type AggregateArchiveNotification = {
    _count: ArchiveNotificationCountAggregateOutputType | null
    _min: ArchiveNotificationMinAggregateOutputType | null
    _max: ArchiveNotificationMaxAggregateOutputType | null
  }

  export type ArchiveNotificationMinAggregateOutputType = {
    Id: string | null
    Type: string | null
    Recipient: string | null
    Subject: string | null
    Message: string | null
    DeliveryDate: Date | null
    CreatedAt: Date | null
  }

  export type ArchiveNotificationMaxAggregateOutputType = {
    Id: string | null
    Type: string | null
    Recipient: string | null
    Subject: string | null
    Message: string | null
    DeliveryDate: Date | null
    CreatedAt: Date | null
  }

  export type ArchiveNotificationCountAggregateOutputType = {
    Id: number
    Type: number
    Recipient: number
    Subject: number
    Message: number
    DeliveryDate: number
    CreatedAt: number
    _all: number
  }


  export type ArchiveNotificationMinAggregateInputType = {
    Id?: true
    Type?: true
    Recipient?: true
    Subject?: true
    Message?: true
    DeliveryDate?: true
    CreatedAt?: true
  }

  export type ArchiveNotificationMaxAggregateInputType = {
    Id?: true
    Type?: true
    Recipient?: true
    Subject?: true
    Message?: true
    DeliveryDate?: true
    CreatedAt?: true
  }

  export type ArchiveNotificationCountAggregateInputType = {
    Id?: true
    Type?: true
    Recipient?: true
    Subject?: true
    Message?: true
    DeliveryDate?: true
    CreatedAt?: true
    _all?: true
  }

  export type ArchiveNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchiveNotification to aggregate.
     */
    where?: ArchiveNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchiveNotifications to fetch.
     */
    orderBy?: ArchiveNotificationOrderByWithRelationInput | ArchiveNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchiveNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchiveNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchiveNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArchiveNotifications
    **/
    _count?: true | ArchiveNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchiveNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchiveNotificationMaxAggregateInputType
  }

  export type GetArchiveNotificationAggregateType<T extends ArchiveNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateArchiveNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchiveNotification[P]>
      : GetScalarType<T[P], AggregateArchiveNotification[P]>
  }




  export type ArchiveNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchiveNotificationWhereInput
    orderBy?: ArchiveNotificationOrderByWithAggregationInput | ArchiveNotificationOrderByWithAggregationInput[]
    by: ArchiveNotificationScalarFieldEnum[] | ArchiveNotificationScalarFieldEnum
    having?: ArchiveNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchiveNotificationCountAggregateInputType | true
    _min?: ArchiveNotificationMinAggregateInputType
    _max?: ArchiveNotificationMaxAggregateInputType
  }

  export type ArchiveNotificationGroupByOutputType = {
    Id: string
    Type: string
    Recipient: string
    Subject: string | null
    Message: string
    DeliveryDate: Date
    CreatedAt: Date
    _count: ArchiveNotificationCountAggregateOutputType | null
    _min: ArchiveNotificationMinAggregateOutputType | null
    _max: ArchiveNotificationMaxAggregateOutputType | null
  }

  type GetArchiveNotificationGroupByPayload<T extends ArchiveNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchiveNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchiveNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchiveNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], ArchiveNotificationGroupByOutputType[P]>
        }
      >
    >


  export type ArchiveNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Type?: boolean
    Recipient?: boolean
    Subject?: boolean
    Message?: boolean
    DeliveryDate?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["archiveNotification"]>

  export type ArchiveNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Type?: boolean
    Recipient?: boolean
    Subject?: boolean
    Message?: boolean
    DeliveryDate?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["archiveNotification"]>

  export type ArchiveNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Type?: boolean
    Recipient?: boolean
    Subject?: boolean
    Message?: boolean
    DeliveryDate?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["archiveNotification"]>

  export type ArchiveNotificationSelectScalar = {
    Id?: boolean
    Type?: boolean
    Recipient?: boolean
    Subject?: boolean
    Message?: boolean
    DeliveryDate?: boolean
    CreatedAt?: boolean
  }

  export type ArchiveNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Type" | "Recipient" | "Subject" | "Message" | "DeliveryDate" | "CreatedAt", ExtArgs["result"]["archiveNotification"]>

  export type $ArchiveNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArchiveNotification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Type: string
      Recipient: string
      Subject: string | null
      Message: string
      DeliveryDate: Date
      CreatedAt: Date
    }, ExtArgs["result"]["archiveNotification"]>
    composites: {}
  }

  type ArchiveNotificationGetPayload<S extends boolean | null | undefined | ArchiveNotificationDefaultArgs> = $Result.GetResult<Prisma.$ArchiveNotificationPayload, S>

  type ArchiveNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchiveNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchiveNotificationCountAggregateInputType | true
    }

  export interface ArchiveNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArchiveNotification'], meta: { name: 'ArchiveNotification' } }
    /**
     * Find zero or one ArchiveNotification that matches the filter.
     * @param {ArchiveNotificationFindUniqueArgs} args - Arguments to find a ArchiveNotification
     * @example
     * // Get one ArchiveNotification
     * const archiveNotification = await prisma.archiveNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchiveNotificationFindUniqueArgs>(args: SelectSubset<T, ArchiveNotificationFindUniqueArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArchiveNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchiveNotificationFindUniqueOrThrowArgs} args - Arguments to find a ArchiveNotification
     * @example
     * // Get one ArchiveNotification
     * const archiveNotification = await prisma.archiveNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchiveNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchiveNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchiveNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveNotificationFindFirstArgs} args - Arguments to find a ArchiveNotification
     * @example
     * // Get one ArchiveNotification
     * const archiveNotification = await prisma.archiveNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchiveNotificationFindFirstArgs>(args?: SelectSubset<T, ArchiveNotificationFindFirstArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchiveNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveNotificationFindFirstOrThrowArgs} args - Arguments to find a ArchiveNotification
     * @example
     * // Get one ArchiveNotification
     * const archiveNotification = await prisma.archiveNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchiveNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchiveNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArchiveNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArchiveNotifications
     * const archiveNotifications = await prisma.archiveNotification.findMany()
     * 
     * // Get first 10 ArchiveNotifications
     * const archiveNotifications = await prisma.archiveNotification.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const archiveNotificationWithIdOnly = await prisma.archiveNotification.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ArchiveNotificationFindManyArgs>(args?: SelectSubset<T, ArchiveNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArchiveNotification.
     * @param {ArchiveNotificationCreateArgs} args - Arguments to create a ArchiveNotification.
     * @example
     * // Create one ArchiveNotification
     * const ArchiveNotification = await prisma.archiveNotification.create({
     *   data: {
     *     // ... data to create a ArchiveNotification
     *   }
     * })
     * 
     */
    create<T extends ArchiveNotificationCreateArgs>(args: SelectSubset<T, ArchiveNotificationCreateArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArchiveNotifications.
     * @param {ArchiveNotificationCreateManyArgs} args - Arguments to create many ArchiveNotifications.
     * @example
     * // Create many ArchiveNotifications
     * const archiveNotification = await prisma.archiveNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchiveNotificationCreateManyArgs>(args?: SelectSubset<T, ArchiveNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArchiveNotifications and returns the data saved in the database.
     * @param {ArchiveNotificationCreateManyAndReturnArgs} args - Arguments to create many ArchiveNotifications.
     * @example
     * // Create many ArchiveNotifications
     * const archiveNotification = await prisma.archiveNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArchiveNotifications and only return the `Id`
     * const archiveNotificationWithIdOnly = await prisma.archiveNotification.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchiveNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchiveNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArchiveNotification.
     * @param {ArchiveNotificationDeleteArgs} args - Arguments to delete one ArchiveNotification.
     * @example
     * // Delete one ArchiveNotification
     * const ArchiveNotification = await prisma.archiveNotification.delete({
     *   where: {
     *     // ... filter to delete one ArchiveNotification
     *   }
     * })
     * 
     */
    delete<T extends ArchiveNotificationDeleteArgs>(args: SelectSubset<T, ArchiveNotificationDeleteArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArchiveNotification.
     * @param {ArchiveNotificationUpdateArgs} args - Arguments to update one ArchiveNotification.
     * @example
     * // Update one ArchiveNotification
     * const archiveNotification = await prisma.archiveNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchiveNotificationUpdateArgs>(args: SelectSubset<T, ArchiveNotificationUpdateArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArchiveNotifications.
     * @param {ArchiveNotificationDeleteManyArgs} args - Arguments to filter ArchiveNotifications to delete.
     * @example
     * // Delete a few ArchiveNotifications
     * const { count } = await prisma.archiveNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchiveNotificationDeleteManyArgs>(args?: SelectSubset<T, ArchiveNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchiveNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArchiveNotifications
     * const archiveNotification = await prisma.archiveNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchiveNotificationUpdateManyArgs>(args: SelectSubset<T, ArchiveNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchiveNotifications and returns the data updated in the database.
     * @param {ArchiveNotificationUpdateManyAndReturnArgs} args - Arguments to update many ArchiveNotifications.
     * @example
     * // Update many ArchiveNotifications
     * const archiveNotification = await prisma.archiveNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArchiveNotifications and only return the `Id`
     * const archiveNotificationWithIdOnly = await prisma.archiveNotification.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArchiveNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ArchiveNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArchiveNotification.
     * @param {ArchiveNotificationUpsertArgs} args - Arguments to update or create a ArchiveNotification.
     * @example
     * // Update or create a ArchiveNotification
     * const archiveNotification = await prisma.archiveNotification.upsert({
     *   create: {
     *     // ... data to create a ArchiveNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArchiveNotification we want to update
     *   }
     * })
     */
    upsert<T extends ArchiveNotificationUpsertArgs>(args: SelectSubset<T, ArchiveNotificationUpsertArgs<ExtArgs>>): Prisma__ArchiveNotificationClient<$Result.GetResult<Prisma.$ArchiveNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArchiveNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveNotificationCountArgs} args - Arguments to filter ArchiveNotifications to count.
     * @example
     * // Count the number of ArchiveNotifications
     * const count = await prisma.archiveNotification.count({
     *   where: {
     *     // ... the filter for the ArchiveNotifications we want to count
     *   }
     * })
    **/
    count<T extends ArchiveNotificationCountArgs>(
      args?: Subset<T, ArchiveNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchiveNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArchiveNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchiveNotificationAggregateArgs>(args: Subset<T, ArchiveNotificationAggregateArgs>): Prisma.PrismaPromise<GetArchiveNotificationAggregateType<T>>

    /**
     * Group by ArchiveNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArchiveNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchiveNotificationGroupByArgs['orderBy'] }
        : { orderBy?: ArchiveNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArchiveNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchiveNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArchiveNotification model
   */
  readonly fields: ArchiveNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArchiveNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchiveNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArchiveNotification model
   */
  interface ArchiveNotificationFieldRefs {
    readonly Id: FieldRef<"ArchiveNotification", 'String'>
    readonly Type: FieldRef<"ArchiveNotification", 'String'>
    readonly Recipient: FieldRef<"ArchiveNotification", 'String'>
    readonly Subject: FieldRef<"ArchiveNotification", 'String'>
    readonly Message: FieldRef<"ArchiveNotification", 'String'>
    readonly DeliveryDate: FieldRef<"ArchiveNotification", 'DateTime'>
    readonly CreatedAt: FieldRef<"ArchiveNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArchiveNotification findUnique
   */
  export type ArchiveNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * Filter, which ArchiveNotification to fetch.
     */
    where: ArchiveNotificationWhereUniqueInput
  }

  /**
   * ArchiveNotification findUniqueOrThrow
   */
  export type ArchiveNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * Filter, which ArchiveNotification to fetch.
     */
    where: ArchiveNotificationWhereUniqueInput
  }

  /**
   * ArchiveNotification findFirst
   */
  export type ArchiveNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * Filter, which ArchiveNotification to fetch.
     */
    where?: ArchiveNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchiveNotifications to fetch.
     */
    orderBy?: ArchiveNotificationOrderByWithRelationInput | ArchiveNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchiveNotifications.
     */
    cursor?: ArchiveNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchiveNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchiveNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchiveNotifications.
     */
    distinct?: ArchiveNotificationScalarFieldEnum | ArchiveNotificationScalarFieldEnum[]
  }

  /**
   * ArchiveNotification findFirstOrThrow
   */
  export type ArchiveNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * Filter, which ArchiveNotification to fetch.
     */
    where?: ArchiveNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchiveNotifications to fetch.
     */
    orderBy?: ArchiveNotificationOrderByWithRelationInput | ArchiveNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchiveNotifications.
     */
    cursor?: ArchiveNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchiveNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchiveNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchiveNotifications.
     */
    distinct?: ArchiveNotificationScalarFieldEnum | ArchiveNotificationScalarFieldEnum[]
  }

  /**
   * ArchiveNotification findMany
   */
  export type ArchiveNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * Filter, which ArchiveNotifications to fetch.
     */
    where?: ArchiveNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchiveNotifications to fetch.
     */
    orderBy?: ArchiveNotificationOrderByWithRelationInput | ArchiveNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArchiveNotifications.
     */
    cursor?: ArchiveNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchiveNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchiveNotifications.
     */
    skip?: number
    distinct?: ArchiveNotificationScalarFieldEnum | ArchiveNotificationScalarFieldEnum[]
  }

  /**
   * ArchiveNotification create
   */
  export type ArchiveNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a ArchiveNotification.
     */
    data: XOR<ArchiveNotificationCreateInput, ArchiveNotificationUncheckedCreateInput>
  }

  /**
   * ArchiveNotification createMany
   */
  export type ArchiveNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArchiveNotifications.
     */
    data: ArchiveNotificationCreateManyInput | ArchiveNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArchiveNotification createManyAndReturn
   */
  export type ArchiveNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many ArchiveNotifications.
     */
    data: ArchiveNotificationCreateManyInput | ArchiveNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArchiveNotification update
   */
  export type ArchiveNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a ArchiveNotification.
     */
    data: XOR<ArchiveNotificationUpdateInput, ArchiveNotificationUncheckedUpdateInput>
    /**
     * Choose, which ArchiveNotification to update.
     */
    where: ArchiveNotificationWhereUniqueInput
  }

  /**
   * ArchiveNotification updateMany
   */
  export type ArchiveNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArchiveNotifications.
     */
    data: XOR<ArchiveNotificationUpdateManyMutationInput, ArchiveNotificationUncheckedUpdateManyInput>
    /**
     * Filter which ArchiveNotifications to update
     */
    where?: ArchiveNotificationWhereInput
    /**
     * Limit how many ArchiveNotifications to update.
     */
    limit?: number
  }

  /**
   * ArchiveNotification updateManyAndReturn
   */
  export type ArchiveNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * The data used to update ArchiveNotifications.
     */
    data: XOR<ArchiveNotificationUpdateManyMutationInput, ArchiveNotificationUncheckedUpdateManyInput>
    /**
     * Filter which ArchiveNotifications to update
     */
    where?: ArchiveNotificationWhereInput
    /**
     * Limit how many ArchiveNotifications to update.
     */
    limit?: number
  }

  /**
   * ArchiveNotification upsert
   */
  export type ArchiveNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the ArchiveNotification to update in case it exists.
     */
    where: ArchiveNotificationWhereUniqueInput
    /**
     * In case the ArchiveNotification found by the `where` argument doesn't exist, create a new ArchiveNotification with this data.
     */
    create: XOR<ArchiveNotificationCreateInput, ArchiveNotificationUncheckedCreateInput>
    /**
     * In case the ArchiveNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchiveNotificationUpdateInput, ArchiveNotificationUncheckedUpdateInput>
  }

  /**
   * ArchiveNotification delete
   */
  export type ArchiveNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
    /**
     * Filter which ArchiveNotification to delete.
     */
    where: ArchiveNotificationWhereUniqueInput
  }

  /**
   * ArchiveNotification deleteMany
   */
  export type ArchiveNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchiveNotifications to delete
     */
    where?: ArchiveNotificationWhereInput
    /**
     * Limit how many ArchiveNotifications to delete.
     */
    limit?: number
  }

  /**
   * ArchiveNotification without action
   */
  export type ArchiveNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchiveNotification
     */
    select?: ArchiveNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchiveNotification
     */
    omit?: ArchiveNotificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    Id: 'Id',
    FirstName: 'FirstName',
    LastName: 'LastName',
    Email: 'Email',
    Role: 'Role',
    Password: 'Password',
    StaffID: 'StaffID',
    DepartmentId: 'DepartmentId',
    FloorId: 'FloorId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Phone: 'Phone',
    Email: 'Email',
    Address: 'Address',
    Photo: 'Photo',
    CompanyId: 'CompanyId'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Address: 'Address'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const VisitorLogScalarFieldEnum: {
    Id: 'Id',
    VisitorId: 'VisitorId',
    StaffId: 'StaffId',
    PurposeOfVisit: 'PurposeOfVisit',
    TagNo: 'TagNo',
    NoOfVistiors: 'NoOfVistiors',
    CheckInTime: 'CheckInTime',
    CheckOutTime: 'CheckOutTime',
    CreatedAt: 'CreatedAt'
  };

  export type VisitorLogScalarFieldEnum = (typeof VisitorLogScalarFieldEnum)[keyof typeof VisitorLogScalarFieldEnum]


  export const FloorScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name'
  };

  export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    Id: 'Id',
    StaffId: 'StaffId',
    VisitorId: 'VisitorId',
    Purpose: 'Purpose',
    Message: 'Message',
    NoVisitors: 'NoVisitors',
    InvitationCode: 'InvitationCode',
    Status: 'Status',
    CreatedAt: 'CreatedAt',
    AppointmentDate: 'AppointmentDate',
    RescheduleDate: 'RescheduleDate',
    CancellationReason: 'CancellationReason'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const SMSNotificationScalarFieldEnum: {
    Id: 'Id',
    RecipientPhone: 'RecipientPhone',
    RecipientName: 'RecipientName',
    Message: 'Message',
    RetryCount: 'RetryCount',
    Status: 'Status',
    LastRetryDate: 'LastRetryDate',
    ErrorMessage: 'ErrorMessage',
    CreatedAt: 'CreatedAt'
  };

  export type SMSNotificationScalarFieldEnum = (typeof SMSNotificationScalarFieldEnum)[keyof typeof SMSNotificationScalarFieldEnum]


  export const EmailNotificationScalarFieldEnum: {
    Id: 'Id',
    RecipientEmail: 'RecipientEmail',
    RecipientName: 'RecipientName',
    Subject: 'Subject',
    Message: 'Message',
    RetryCount: 'RetryCount',
    Status: 'Status',
    LastRetryDate: 'LastRetryDate',
    ErrorMessage: 'ErrorMessage',
    CreatedAt: 'CreatedAt'
  };

  export type EmailNotificationScalarFieldEnum = (typeof EmailNotificationScalarFieldEnum)[keyof typeof EmailNotificationScalarFieldEnum]


  export const ArchiveNotificationScalarFieldEnum: {
    Id: 'Id',
    Type: 'Type',
    Recipient: 'Recipient',
    Subject: 'Subject',
    Message: 'Message',
    DeliveryDate: 'DeliveryDate',
    CreatedAt: 'CreatedAt'
  };

  export type ArchiveNotificationScalarFieldEnum = (typeof ArchiveNotificationScalarFieldEnum)[keyof typeof ArchiveNotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Id?: StringFilter<"User"> | string
    FirstName?: StringFilter<"User"> | string
    LastName?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    Role?: EnumRoleFilter<"User"> | $Enums.Role
    Password?: StringFilter<"User"> | string
    StaffID?: StringNullableFilter<"User"> | string | null
    DepartmentId?: StringFilter<"User"> | string
    FloorId?: StringFilter<"User"> | string
    VisitorLogs?: VisitorLogListRelationFilter
    Department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    Floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    Appointments?: AppointmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    Id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
    StaffID?: SortOrderInput | SortOrder
    DepartmentId?: SortOrder
    FloorId?: SortOrder
    VisitorLogs?: VisitorLogOrderByRelationAggregateInput
    Department?: DepartmentOrderByWithRelationInput
    Floor?: FloorOrderByWithRelationInput
    Appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    FirstName?: StringFilter<"User"> | string
    LastName?: StringFilter<"User"> | string
    Role?: EnumRoleFilter<"User"> | $Enums.Role
    Password?: StringFilter<"User"> | string
    StaffID?: StringNullableFilter<"User"> | string | null
    DepartmentId?: StringFilter<"User"> | string
    FloorId?: StringFilter<"User"> | string
    VisitorLogs?: VisitorLogListRelationFilter
    Department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    Floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
    Appointments?: AppointmentListRelationFilter
  }, "Id" | "Email">

  export type UserOrderByWithAggregationInput = {
    Id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
    StaffID?: SortOrderInput | SortOrder
    DepartmentId?: SortOrder
    FloorId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"User"> | string
    FirstName?: StringWithAggregatesFilter<"User"> | string
    LastName?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    Role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    Password?: StringWithAggregatesFilter<"User"> | string
    StaffID?: StringNullableWithAggregatesFilter<"User"> | string | null
    DepartmentId?: StringWithAggregatesFilter<"User"> | string
    FloorId?: StringWithAggregatesFilter<"User"> | string
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    Id?: StringFilter<"Visitor"> | string
    Name?: StringFilter<"Visitor"> | string
    Phone?: StringFilter<"Visitor"> | string
    Email?: StringNullableFilter<"Visitor"> | string | null
    Address?: StringNullableFilter<"Visitor"> | string | null
    Photo?: StringFilter<"Visitor"> | string
    CompanyId?: StringNullableFilter<"Visitor"> | string | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    History?: VisitorLogListRelationFilter
    Appointments?: AppointmentListRelationFilter
  }

  export type VisitorOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Phone?: SortOrder
    Email?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    Photo?: SortOrder
    CompanyId?: SortOrderInput | SortOrder
    Company?: CompanyOrderByWithRelationInput
    History?: VisitorLogOrderByRelationAggregateInput
    Appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    Name?: StringFilter<"Visitor"> | string
    Phone?: StringFilter<"Visitor"> | string
    Email?: StringNullableFilter<"Visitor"> | string | null
    Address?: StringNullableFilter<"Visitor"> | string | null
    Photo?: StringFilter<"Visitor"> | string
    CompanyId?: StringNullableFilter<"Visitor"> | string | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    History?: VisitorLogListRelationFilter
    Appointments?: AppointmentListRelationFilter
  }, "Id">

  export type VisitorOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Phone?: SortOrder
    Email?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    Photo?: SortOrder
    CompanyId?: SortOrderInput | SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Visitor"> | string
    Name?: StringWithAggregatesFilter<"Visitor"> | string
    Phone?: StringWithAggregatesFilter<"Visitor"> | string
    Email?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    Address?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    Photo?: StringWithAggregatesFilter<"Visitor"> | string
    CompanyId?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    Id?: StringFilter<"Company"> | string
    Name?: StringFilter<"Company"> | string
    Address?: StringNullableFilter<"Company"> | string | null
    Staffs?: VisitorListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrderInput | SortOrder
    Staffs?: VisitorOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    Name?: StringFilter<"Company"> | string
    Address?: StringNullableFilter<"Company"> | string | null
    Staffs?: VisitorListRelationFilter
  }, "Id">

  export type CompanyOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Company"> | string
    Name?: StringWithAggregatesFilter<"Company"> | string
    Address?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type VisitorLogWhereInput = {
    AND?: VisitorLogWhereInput | VisitorLogWhereInput[]
    OR?: VisitorLogWhereInput[]
    NOT?: VisitorLogWhereInput | VisitorLogWhereInput[]
    Id?: StringFilter<"VisitorLog"> | string
    VisitorId?: StringFilter<"VisitorLog"> | string
    StaffId?: StringFilter<"VisitorLog"> | string
    PurposeOfVisit?: StringFilter<"VisitorLog"> | string
    TagNo?: StringFilter<"VisitorLog"> | string
    NoOfVistiors?: IntFilter<"VisitorLog"> | number
    CheckInTime?: StringFilter<"VisitorLog"> | string
    CheckOutTime?: StringNullableFilter<"VisitorLog"> | string | null
    CreatedAt?: DateTimeFilter<"VisitorLog"> | Date | string
    Visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
    Staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VisitorLogOrderByWithRelationInput = {
    Id?: SortOrder
    VisitorId?: SortOrder
    StaffId?: SortOrder
    PurposeOfVisit?: SortOrder
    TagNo?: SortOrder
    NoOfVistiors?: SortOrder
    CheckInTime?: SortOrder
    CheckOutTime?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    Visitor?: VisitorOrderByWithRelationInput
    Staff?: UserOrderByWithRelationInput
  }

  export type VisitorLogWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: VisitorLogWhereInput | VisitorLogWhereInput[]
    OR?: VisitorLogWhereInput[]
    NOT?: VisitorLogWhereInput | VisitorLogWhereInput[]
    VisitorId?: StringFilter<"VisitorLog"> | string
    StaffId?: StringFilter<"VisitorLog"> | string
    PurposeOfVisit?: StringFilter<"VisitorLog"> | string
    TagNo?: StringFilter<"VisitorLog"> | string
    NoOfVistiors?: IntFilter<"VisitorLog"> | number
    CheckInTime?: StringFilter<"VisitorLog"> | string
    CheckOutTime?: StringNullableFilter<"VisitorLog"> | string | null
    CreatedAt?: DateTimeFilter<"VisitorLog"> | Date | string
    Visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
    Staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "Id">

  export type VisitorLogOrderByWithAggregationInput = {
    Id?: SortOrder
    VisitorId?: SortOrder
    StaffId?: SortOrder
    PurposeOfVisit?: SortOrder
    TagNo?: SortOrder
    NoOfVistiors?: SortOrder
    CheckInTime?: SortOrder
    CheckOutTime?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    _count?: VisitorLogCountOrderByAggregateInput
    _avg?: VisitorLogAvgOrderByAggregateInput
    _max?: VisitorLogMaxOrderByAggregateInput
    _min?: VisitorLogMinOrderByAggregateInput
    _sum?: VisitorLogSumOrderByAggregateInput
  }

  export type VisitorLogScalarWhereWithAggregatesInput = {
    AND?: VisitorLogScalarWhereWithAggregatesInput | VisitorLogScalarWhereWithAggregatesInput[]
    OR?: VisitorLogScalarWhereWithAggregatesInput[]
    NOT?: VisitorLogScalarWhereWithAggregatesInput | VisitorLogScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"VisitorLog"> | string
    VisitorId?: StringWithAggregatesFilter<"VisitorLog"> | string
    StaffId?: StringWithAggregatesFilter<"VisitorLog"> | string
    PurposeOfVisit?: StringWithAggregatesFilter<"VisitorLog"> | string
    TagNo?: StringWithAggregatesFilter<"VisitorLog"> | string
    NoOfVistiors?: IntWithAggregatesFilter<"VisitorLog"> | number
    CheckInTime?: StringWithAggregatesFilter<"VisitorLog"> | string
    CheckOutTime?: StringNullableWithAggregatesFilter<"VisitorLog"> | string | null
    CreatedAt?: DateTimeWithAggregatesFilter<"VisitorLog"> | Date | string
  }

  export type FloorWhereInput = {
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    Id?: StringFilter<"Floor"> | string
    Name?: StringFilter<"Floor"> | string
    User?: UserListRelationFilter
  }

  export type FloorOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type FloorWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    Name?: StringFilter<"Floor"> | string
    User?: UserListRelationFilter
  }, "Id">

  export type FloorOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    _count?: FloorCountOrderByAggregateInput
    _max?: FloorMaxOrderByAggregateInput
    _min?: FloorMinOrderByAggregateInput
  }

  export type FloorScalarWhereWithAggregatesInput = {
    AND?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    OR?: FloorScalarWhereWithAggregatesInput[]
    NOT?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Floor"> | string
    Name?: StringWithAggregatesFilter<"Floor"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    Id?: StringFilter<"Department"> | string
    Name?: StringFilter<"Department"> | string
    User?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    Name?: StringFilter<"Department"> | string
    User?: UserListRelationFilter
  }, "Id">

  export type DepartmentOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Department"> | string
    Name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    Id?: StringFilter<"Appointment"> | string
    StaffId?: StringFilter<"Appointment"> | string
    VisitorId?: StringFilter<"Appointment"> | string
    Purpose?: StringFilter<"Appointment"> | string
    Message?: StringFilter<"Appointment"> | string
    NoVisitors?: IntFilter<"Appointment"> | number
    InvitationCode?: StringFilter<"Appointment"> | string
    Status?: StringFilter<"Appointment"> | string
    CreatedAt?: DateTimeFilter<"Appointment"> | Date | string
    AppointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    RescheduleDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    CancellationReason?: StringNullableFilter<"Appointment"> | string | null
    Staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    Visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    Id?: SortOrder
    StaffId?: SortOrder
    VisitorId?: SortOrder
    Purpose?: SortOrder
    Message?: SortOrder
    NoVisitors?: SortOrder
    InvitationCode?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    AppointmentDate?: SortOrder
    RescheduleDate?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    Staff?: UserOrderByWithRelationInput
    Visitor?: VisitorOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    StaffId?: StringFilter<"Appointment"> | string
    VisitorId?: StringFilter<"Appointment"> | string
    Purpose?: StringFilter<"Appointment"> | string
    Message?: StringFilter<"Appointment"> | string
    NoVisitors?: IntFilter<"Appointment"> | number
    InvitationCode?: StringFilter<"Appointment"> | string
    Status?: StringFilter<"Appointment"> | string
    CreatedAt?: DateTimeFilter<"Appointment"> | Date | string
    AppointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    RescheduleDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    CancellationReason?: StringNullableFilter<"Appointment"> | string | null
    Staff?: XOR<UserScalarRelationFilter, UserWhereInput>
    Visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }, "Id">

  export type AppointmentOrderByWithAggregationInput = {
    Id?: SortOrder
    StaffId?: SortOrder
    VisitorId?: SortOrder
    Purpose?: SortOrder
    Message?: SortOrder
    NoVisitors?: SortOrder
    InvitationCode?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    AppointmentDate?: SortOrder
    RescheduleDate?: SortOrderInput | SortOrder
    CancellationReason?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Appointment"> | string
    StaffId?: StringWithAggregatesFilter<"Appointment"> | string
    VisitorId?: StringWithAggregatesFilter<"Appointment"> | string
    Purpose?: StringWithAggregatesFilter<"Appointment"> | string
    Message?: StringWithAggregatesFilter<"Appointment"> | string
    NoVisitors?: IntWithAggregatesFilter<"Appointment"> | number
    InvitationCode?: StringWithAggregatesFilter<"Appointment"> | string
    Status?: StringWithAggregatesFilter<"Appointment"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    AppointmentDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    RescheduleDate?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    CancellationReason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
  }

  export type SMSNotificationWhereInput = {
    AND?: SMSNotificationWhereInput | SMSNotificationWhereInput[]
    OR?: SMSNotificationWhereInput[]
    NOT?: SMSNotificationWhereInput | SMSNotificationWhereInput[]
    Id?: StringFilter<"SMSNotification"> | string
    RecipientPhone?: StringFilter<"SMSNotification"> | string
    RecipientName?: StringFilter<"SMSNotification"> | string
    Message?: StringFilter<"SMSNotification"> | string
    RetryCount?: IntFilter<"SMSNotification"> | number
    Status?: IntFilter<"SMSNotification"> | number
    LastRetryDate?: DateTimeFilter<"SMSNotification"> | Date | string
    ErrorMessage?: StringFilter<"SMSNotification"> | string
    CreatedAt?: DateTimeFilter<"SMSNotification"> | Date | string
  }

  export type SMSNotificationOrderByWithRelationInput = {
    Id?: SortOrder
    RecipientPhone?: SortOrder
    RecipientName?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type SMSNotificationWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: SMSNotificationWhereInput | SMSNotificationWhereInput[]
    OR?: SMSNotificationWhereInput[]
    NOT?: SMSNotificationWhereInput | SMSNotificationWhereInput[]
    RecipientPhone?: StringFilter<"SMSNotification"> | string
    RecipientName?: StringFilter<"SMSNotification"> | string
    Message?: StringFilter<"SMSNotification"> | string
    RetryCount?: IntFilter<"SMSNotification"> | number
    Status?: IntFilter<"SMSNotification"> | number
    LastRetryDate?: DateTimeFilter<"SMSNotification"> | Date | string
    ErrorMessage?: StringFilter<"SMSNotification"> | string
    CreatedAt?: DateTimeFilter<"SMSNotification"> | Date | string
  }, "Id">

  export type SMSNotificationOrderByWithAggregationInput = {
    Id?: SortOrder
    RecipientPhone?: SortOrder
    RecipientName?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
    _count?: SMSNotificationCountOrderByAggregateInput
    _avg?: SMSNotificationAvgOrderByAggregateInput
    _max?: SMSNotificationMaxOrderByAggregateInput
    _min?: SMSNotificationMinOrderByAggregateInput
    _sum?: SMSNotificationSumOrderByAggregateInput
  }

  export type SMSNotificationScalarWhereWithAggregatesInput = {
    AND?: SMSNotificationScalarWhereWithAggregatesInput | SMSNotificationScalarWhereWithAggregatesInput[]
    OR?: SMSNotificationScalarWhereWithAggregatesInput[]
    NOT?: SMSNotificationScalarWhereWithAggregatesInput | SMSNotificationScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"SMSNotification"> | string
    RecipientPhone?: StringWithAggregatesFilter<"SMSNotification"> | string
    RecipientName?: StringWithAggregatesFilter<"SMSNotification"> | string
    Message?: StringWithAggregatesFilter<"SMSNotification"> | string
    RetryCount?: IntWithAggregatesFilter<"SMSNotification"> | number
    Status?: IntWithAggregatesFilter<"SMSNotification"> | number
    LastRetryDate?: DateTimeWithAggregatesFilter<"SMSNotification"> | Date | string
    ErrorMessage?: StringWithAggregatesFilter<"SMSNotification"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"SMSNotification"> | Date | string
  }

  export type EmailNotificationWhereInput = {
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    Id?: StringFilter<"EmailNotification"> | string
    RecipientEmail?: StringFilter<"EmailNotification"> | string
    RecipientName?: StringFilter<"EmailNotification"> | string
    Subject?: StringFilter<"EmailNotification"> | string
    Message?: StringFilter<"EmailNotification"> | string
    RetryCount?: IntFilter<"EmailNotification"> | number
    Status?: IntFilter<"EmailNotification"> | number
    LastRetryDate?: DateTimeFilter<"EmailNotification"> | Date | string
    ErrorMessage?: StringFilter<"EmailNotification"> | string
    CreatedAt?: DateTimeFilter<"EmailNotification"> | Date | string
  }

  export type EmailNotificationOrderByWithRelationInput = {
    Id?: SortOrder
    RecipientEmail?: SortOrder
    RecipientName?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type EmailNotificationWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    RecipientEmail?: StringFilter<"EmailNotification"> | string
    RecipientName?: StringFilter<"EmailNotification"> | string
    Subject?: StringFilter<"EmailNotification"> | string
    Message?: StringFilter<"EmailNotification"> | string
    RetryCount?: IntFilter<"EmailNotification"> | number
    Status?: IntFilter<"EmailNotification"> | number
    LastRetryDate?: DateTimeFilter<"EmailNotification"> | Date | string
    ErrorMessage?: StringFilter<"EmailNotification"> | string
    CreatedAt?: DateTimeFilter<"EmailNotification"> | Date | string
  }, "Id">

  export type EmailNotificationOrderByWithAggregationInput = {
    Id?: SortOrder
    RecipientEmail?: SortOrder
    RecipientName?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
    _count?: EmailNotificationCountOrderByAggregateInput
    _avg?: EmailNotificationAvgOrderByAggregateInput
    _max?: EmailNotificationMaxOrderByAggregateInput
    _min?: EmailNotificationMinOrderByAggregateInput
    _sum?: EmailNotificationSumOrderByAggregateInput
  }

  export type EmailNotificationScalarWhereWithAggregatesInput = {
    AND?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    OR?: EmailNotificationScalarWhereWithAggregatesInput[]
    NOT?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"EmailNotification"> | string
    RecipientEmail?: StringWithAggregatesFilter<"EmailNotification"> | string
    RecipientName?: StringWithAggregatesFilter<"EmailNotification"> | string
    Subject?: StringWithAggregatesFilter<"EmailNotification"> | string
    Message?: StringWithAggregatesFilter<"EmailNotification"> | string
    RetryCount?: IntWithAggregatesFilter<"EmailNotification"> | number
    Status?: IntWithAggregatesFilter<"EmailNotification"> | number
    LastRetryDate?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
    ErrorMessage?: StringWithAggregatesFilter<"EmailNotification"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
  }

  export type ArchiveNotificationWhereInput = {
    AND?: ArchiveNotificationWhereInput | ArchiveNotificationWhereInput[]
    OR?: ArchiveNotificationWhereInput[]
    NOT?: ArchiveNotificationWhereInput | ArchiveNotificationWhereInput[]
    Id?: StringFilter<"ArchiveNotification"> | string
    Type?: StringFilter<"ArchiveNotification"> | string
    Recipient?: StringFilter<"ArchiveNotification"> | string
    Subject?: StringNullableFilter<"ArchiveNotification"> | string | null
    Message?: StringFilter<"ArchiveNotification"> | string
    DeliveryDate?: DateTimeFilter<"ArchiveNotification"> | Date | string
    CreatedAt?: DateTimeFilter<"ArchiveNotification"> | Date | string
  }

  export type ArchiveNotificationOrderByWithRelationInput = {
    Id?: SortOrder
    Type?: SortOrder
    Recipient?: SortOrder
    Subject?: SortOrderInput | SortOrder
    Message?: SortOrder
    DeliveryDate?: SortOrder
    CreatedAt?: SortOrder
  }

  export type ArchiveNotificationWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: ArchiveNotificationWhereInput | ArchiveNotificationWhereInput[]
    OR?: ArchiveNotificationWhereInput[]
    NOT?: ArchiveNotificationWhereInput | ArchiveNotificationWhereInput[]
    Type?: StringFilter<"ArchiveNotification"> | string
    Recipient?: StringFilter<"ArchiveNotification"> | string
    Subject?: StringNullableFilter<"ArchiveNotification"> | string | null
    Message?: StringFilter<"ArchiveNotification"> | string
    DeliveryDate?: DateTimeFilter<"ArchiveNotification"> | Date | string
    CreatedAt?: DateTimeFilter<"ArchiveNotification"> | Date | string
  }, "Id">

  export type ArchiveNotificationOrderByWithAggregationInput = {
    Id?: SortOrder
    Type?: SortOrder
    Recipient?: SortOrder
    Subject?: SortOrderInput | SortOrder
    Message?: SortOrder
    DeliveryDate?: SortOrder
    CreatedAt?: SortOrder
    _count?: ArchiveNotificationCountOrderByAggregateInput
    _max?: ArchiveNotificationMaxOrderByAggregateInput
    _min?: ArchiveNotificationMinOrderByAggregateInput
  }

  export type ArchiveNotificationScalarWhereWithAggregatesInput = {
    AND?: ArchiveNotificationScalarWhereWithAggregatesInput | ArchiveNotificationScalarWhereWithAggregatesInput[]
    OR?: ArchiveNotificationScalarWhereWithAggregatesInput[]
    NOT?: ArchiveNotificationScalarWhereWithAggregatesInput | ArchiveNotificationScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"ArchiveNotification"> | string
    Type?: StringWithAggregatesFilter<"ArchiveNotification"> | string
    Recipient?: StringWithAggregatesFilter<"ArchiveNotification"> | string
    Subject?: StringNullableWithAggregatesFilter<"ArchiveNotification"> | string | null
    Message?: StringWithAggregatesFilter<"ArchiveNotification"> | string
    DeliveryDate?: DateTimeWithAggregatesFilter<"ArchiveNotification"> | Date | string
    CreatedAt?: DateTimeWithAggregatesFilter<"ArchiveNotification"> | Date | string
  }

  export type UserCreateInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    VisitorLogs?: VisitorLogCreateNestedManyWithoutStaffInput
    Department: DepartmentCreateNestedOneWithoutUserInput
    Floor: FloorCreateNestedOneWithoutUserInput
    Appointments?: AppointmentCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    DepartmentId: string
    FloorId: string
    VisitorLogs?: VisitorLogUncheckedCreateNestedManyWithoutStaffInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    VisitorLogs?: VisitorLogUpdateManyWithoutStaffNestedInput
    Department?: DepartmentUpdateOneRequiredWithoutUserNestedInput
    Floor?: FloorUpdateOneRequiredWithoutUserNestedInput
    Appointments?: AppointmentUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: StringFieldUpdateOperationsInput | string
    FloorId?: StringFieldUpdateOperationsInput | string
    VisitorLogs?: VisitorLogUncheckedUpdateManyWithoutStaffNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserCreateManyInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    DepartmentId: string
    FloorId: string
  }

  export type UserUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: StringFieldUpdateOperationsInput | string
    FloorId?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorCreateInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    Company?: CompanyCreateNestedOneWithoutStaffsInput
    History?: VisitorLogCreateNestedManyWithoutVisitorInput
    Appointments?: AppointmentCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    CompanyId?: string | null
    History?: VisitorLogUncheckedCreateNestedManyWithoutVisitorInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    Company?: CompanyUpdateOneWithoutStaffsNestedInput
    History?: VisitorLogUpdateManyWithoutVisitorNestedInput
    Appointments?: AppointmentUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    History?: VisitorLogUncheckedUpdateManyWithoutVisitorNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateManyInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    CompanyId?: string | null
  }

  export type VisitorUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateInput = {
    Id?: string
    Name: string
    Address?: string | null
    Staffs?: VisitorCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    Id?: string
    Name: string
    Address?: string | null
    Staffs?: VisitorUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Staffs?: VisitorUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Staffs?: VisitorUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    Id?: string
    Name: string
    Address?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitorLogCreateInput = {
    Id?: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
    Visitor: VisitorCreateNestedOneWithoutHistoryInput
    Staff: UserCreateNestedOneWithoutVisitorLogsInput
  }

  export type VisitorLogUncheckedCreateInput = {
    Id?: string
    VisitorId: string
    StaffId: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
  }

  export type VisitorLogUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Visitor?: VisitorUpdateOneRequiredWithoutHistoryNestedInput
    Staff?: UserUpdateOneRequiredWithoutVisitorLogsNestedInput
  }

  export type VisitorLogUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorLogCreateManyInput = {
    Id?: string
    VisitorId: string
    StaffId: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
  }

  export type VisitorLogUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorLogUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorCreateInput = {
    Id?: string
    Name: string
    User?: UserCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateInput = {
    Id?: string
    Name: string
    User?: UserUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorCreateManyInput = {
    Id?: string
    Name: string
  }

  export type FloorUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type FloorUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    Id?: string
    Name: string
    User?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    Id?: string
    Name: string
    User?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    Id?: string
    Name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    Id?: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
    Staff: UserCreateNestedOneWithoutAppointmentsInput
    Visitor: VisitorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    Id?: string
    StaffId: string
    VisitorId: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
  }

  export type AppointmentUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    Staff?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    Visitor?: VisitorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyInput = {
    Id?: string
    StaffId: string
    VisitorId: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SMSNotificationCreateInput = {
    Id?: string
    RecipientPhone: string
    RecipientName: string
    Message: string
    RetryCount?: number
    Status: number
    LastRetryDate: Date | string
    ErrorMessage: string
    CreatedAt: Date | string
  }

  export type SMSNotificationUncheckedCreateInput = {
    Id?: string
    RecipientPhone: string
    RecipientName: string
    Message: string
    RetryCount?: number
    Status: number
    LastRetryDate: Date | string
    ErrorMessage: string
    CreatedAt: Date | string
  }

  export type SMSNotificationUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientPhone?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSNotificationUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientPhone?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSNotificationCreateManyInput = {
    Id?: string
    RecipientPhone: string
    RecipientName: string
    Message: string
    RetryCount?: number
    Status: number
    LastRetryDate: Date | string
    ErrorMessage: string
    CreatedAt: Date | string
  }

  export type SMSNotificationUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientPhone?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SMSNotificationUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientPhone?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationCreateInput = {
    Id?: string
    RecipientEmail: string
    RecipientName: string
    Subject: string
    Message: string
    RetryCount?: number
    Status: number
    LastRetryDate: Date | string
    ErrorMessage: string
    CreatedAt: Date | string
  }

  export type EmailNotificationUncheckedCreateInput = {
    Id?: string
    RecipientEmail: string
    RecipientName: string
    Subject: string
    Message: string
    RetryCount?: number
    Status: number
    LastRetryDate: Date | string
    ErrorMessage: string
    CreatedAt: Date | string
  }

  export type EmailNotificationUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientEmail?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Subject?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientEmail?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Subject?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationCreateManyInput = {
    Id?: string
    RecipientEmail: string
    RecipientName: string
    Subject: string
    Message: string
    RetryCount?: number
    Status: number
    LastRetryDate: Date | string
    ErrorMessage: string
    CreatedAt: Date | string
  }

  export type EmailNotificationUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientEmail?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Subject?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    RecipientEmail?: StringFieldUpdateOperationsInput | string
    RecipientName?: StringFieldUpdateOperationsInput | string
    Subject?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    RetryCount?: IntFieldUpdateOperationsInput | number
    Status?: IntFieldUpdateOperationsInput | number
    LastRetryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ErrorMessage?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveNotificationCreateInput = {
    Id?: string
    Type: string
    Recipient: string
    Subject?: string | null
    Message: string
    DeliveryDate: Date | string
    CreatedAt: Date | string
  }

  export type ArchiveNotificationUncheckedCreateInput = {
    Id?: string
    Type: string
    Recipient: string
    Subject?: string | null
    Message: string
    DeliveryDate: Date | string
    CreatedAt: Date | string
  }

  export type ArchiveNotificationUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    Recipient?: StringFieldUpdateOperationsInput | string
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveNotificationUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    Recipient?: StringFieldUpdateOperationsInput | string
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveNotificationCreateManyInput = {
    Id?: string
    Type: string
    Recipient: string
    Subject?: string | null
    Message: string
    DeliveryDate: Date | string
    CreatedAt: Date | string
  }

  export type ArchiveNotificationUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    Recipient?: StringFieldUpdateOperationsInput | string
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveNotificationUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Type?: StringFieldUpdateOperationsInput | string
    Recipient?: StringFieldUpdateOperationsInput | string
    Subject?: NullableStringFieldUpdateOperationsInput | string | null
    Message?: StringFieldUpdateOperationsInput | string
    DeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VisitorLogListRelationFilter = {
    every?: VisitorLogWhereInput
    some?: VisitorLogWhereInput
    none?: VisitorLogWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type FloorScalarRelationFilter = {
    is?: FloorWhereInput
    isNot?: FloorWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VisitorLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    Id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
    StaffID?: SortOrder
    DepartmentId?: SortOrder
    FloorId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    Id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
    StaffID?: SortOrder
    DepartmentId?: SortOrder
    FloorId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    Id?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
    StaffID?: SortOrder
    DepartmentId?: SortOrder
    FloorId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type VisitorCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Address?: SortOrder
    Photo?: SortOrder
    CompanyId?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Address?: SortOrder
    Photo?: SortOrder
    CompanyId?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Address?: SortOrder
    Photo?: SortOrder
    CompanyId?: SortOrder
  }

  export type VisitorListRelationFilter = {
    every?: VisitorWhereInput
    some?: VisitorWhereInput
    none?: VisitorWhereInput
  }

  export type VisitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Address?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VisitorScalarRelationFilter = {
    is?: VisitorWhereInput
    isNot?: VisitorWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VisitorLogCountOrderByAggregateInput = {
    Id?: SortOrder
    VisitorId?: SortOrder
    StaffId?: SortOrder
    PurposeOfVisit?: SortOrder
    TagNo?: SortOrder
    NoOfVistiors?: SortOrder
    CheckInTime?: SortOrder
    CheckOutTime?: SortOrder
    CreatedAt?: SortOrder
  }

  export type VisitorLogAvgOrderByAggregateInput = {
    NoOfVistiors?: SortOrder
  }

  export type VisitorLogMaxOrderByAggregateInput = {
    Id?: SortOrder
    VisitorId?: SortOrder
    StaffId?: SortOrder
    PurposeOfVisit?: SortOrder
    TagNo?: SortOrder
    NoOfVistiors?: SortOrder
    CheckInTime?: SortOrder
    CheckOutTime?: SortOrder
    CreatedAt?: SortOrder
  }

  export type VisitorLogMinOrderByAggregateInput = {
    Id?: SortOrder
    VisitorId?: SortOrder
    StaffId?: SortOrder
    PurposeOfVisit?: SortOrder
    TagNo?: SortOrder
    NoOfVistiors?: SortOrder
    CheckInTime?: SortOrder
    CheckOutTime?: SortOrder
    CreatedAt?: SortOrder
  }

  export type VisitorLogSumOrderByAggregateInput = {
    NoOfVistiors?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FloorCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type FloorMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type FloorMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    Id?: SortOrder
    StaffId?: SortOrder
    VisitorId?: SortOrder
    Purpose?: SortOrder
    Message?: SortOrder
    NoVisitors?: SortOrder
    InvitationCode?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    AppointmentDate?: SortOrder
    RescheduleDate?: SortOrder
    CancellationReason?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    NoVisitors?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    Id?: SortOrder
    StaffId?: SortOrder
    VisitorId?: SortOrder
    Purpose?: SortOrder
    Message?: SortOrder
    NoVisitors?: SortOrder
    InvitationCode?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    AppointmentDate?: SortOrder
    RescheduleDate?: SortOrder
    CancellationReason?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    Id?: SortOrder
    StaffId?: SortOrder
    VisitorId?: SortOrder
    Purpose?: SortOrder
    Message?: SortOrder
    NoVisitors?: SortOrder
    InvitationCode?: SortOrder
    Status?: SortOrder
    CreatedAt?: SortOrder
    AppointmentDate?: SortOrder
    RescheduleDate?: SortOrder
    CancellationReason?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    NoVisitors?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SMSNotificationCountOrderByAggregateInput = {
    Id?: SortOrder
    RecipientPhone?: SortOrder
    RecipientName?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type SMSNotificationAvgOrderByAggregateInput = {
    RetryCount?: SortOrder
    Status?: SortOrder
  }

  export type SMSNotificationMaxOrderByAggregateInput = {
    Id?: SortOrder
    RecipientPhone?: SortOrder
    RecipientName?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type SMSNotificationMinOrderByAggregateInput = {
    Id?: SortOrder
    RecipientPhone?: SortOrder
    RecipientName?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type SMSNotificationSumOrderByAggregateInput = {
    RetryCount?: SortOrder
    Status?: SortOrder
  }

  export type EmailNotificationCountOrderByAggregateInput = {
    Id?: SortOrder
    RecipientEmail?: SortOrder
    RecipientName?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type EmailNotificationAvgOrderByAggregateInput = {
    RetryCount?: SortOrder
    Status?: SortOrder
  }

  export type EmailNotificationMaxOrderByAggregateInput = {
    Id?: SortOrder
    RecipientEmail?: SortOrder
    RecipientName?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type EmailNotificationMinOrderByAggregateInput = {
    Id?: SortOrder
    RecipientEmail?: SortOrder
    RecipientName?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    RetryCount?: SortOrder
    Status?: SortOrder
    LastRetryDate?: SortOrder
    ErrorMessage?: SortOrder
    CreatedAt?: SortOrder
  }

  export type EmailNotificationSumOrderByAggregateInput = {
    RetryCount?: SortOrder
    Status?: SortOrder
  }

  export type ArchiveNotificationCountOrderByAggregateInput = {
    Id?: SortOrder
    Type?: SortOrder
    Recipient?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    DeliveryDate?: SortOrder
    CreatedAt?: SortOrder
  }

  export type ArchiveNotificationMaxOrderByAggregateInput = {
    Id?: SortOrder
    Type?: SortOrder
    Recipient?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    DeliveryDate?: SortOrder
    CreatedAt?: SortOrder
  }

  export type ArchiveNotificationMinOrderByAggregateInput = {
    Id?: SortOrder
    Type?: SortOrder
    Recipient?: SortOrder
    Subject?: SortOrder
    Message?: SortOrder
    DeliveryDate?: SortOrder
    CreatedAt?: SortOrder
  }

  export type VisitorLogCreateNestedManyWithoutStaffInput = {
    create?: XOR<VisitorLogCreateWithoutStaffInput, VisitorLogUncheckedCreateWithoutStaffInput> | VisitorLogCreateWithoutStaffInput[] | VisitorLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutStaffInput | VisitorLogCreateOrConnectWithoutStaffInput[]
    createMany?: VisitorLogCreateManyStaffInputEnvelope
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
  }

  export type DepartmentCreateNestedOneWithoutUserInput = {
    create?: XOR<DepartmentCreateWithoutUserInput, DepartmentUncheckedCreateWithoutUserInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUserInput
    connect?: DepartmentWhereUniqueInput
  }

  export type FloorCreateNestedOneWithoutUserInput = {
    create?: XOR<FloorCreateWithoutUserInput, FloorUncheckedCreateWithoutUserInput>
    connectOrCreate?: FloorCreateOrConnectWithoutUserInput
    connect?: FloorWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutStaffInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VisitorLogUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<VisitorLogCreateWithoutStaffInput, VisitorLogUncheckedCreateWithoutStaffInput> | VisitorLogCreateWithoutStaffInput[] | VisitorLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutStaffInput | VisitorLogCreateOrConnectWithoutStaffInput[]
    createMany?: VisitorLogCreateManyStaffInputEnvelope
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VisitorLogUpdateManyWithoutStaffNestedInput = {
    create?: XOR<VisitorLogCreateWithoutStaffInput, VisitorLogUncheckedCreateWithoutStaffInput> | VisitorLogCreateWithoutStaffInput[] | VisitorLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutStaffInput | VisitorLogCreateOrConnectWithoutStaffInput[]
    upsert?: VisitorLogUpsertWithWhereUniqueWithoutStaffInput | VisitorLogUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: VisitorLogCreateManyStaffInputEnvelope
    set?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    disconnect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    delete?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    update?: VisitorLogUpdateWithWhereUniqueWithoutStaffInput | VisitorLogUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: VisitorLogUpdateManyWithWhereWithoutStaffInput | VisitorLogUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: VisitorLogScalarWhereInput | VisitorLogScalarWhereInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<DepartmentCreateWithoutUserInput, DepartmentUncheckedCreateWithoutUserInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUserInput
    upsert?: DepartmentUpsertWithoutUserInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUserInput, DepartmentUpdateWithoutUserInput>, DepartmentUncheckedUpdateWithoutUserInput>
  }

  export type FloorUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<FloorCreateWithoutUserInput, FloorUncheckedCreateWithoutUserInput>
    connectOrCreate?: FloorCreateOrConnectWithoutUserInput
    upsert?: FloorUpsertWithoutUserInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutUserInput, FloorUpdateWithoutUserInput>, FloorUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutStaffInput | AppointmentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutStaffInput | AppointmentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutStaffInput | AppointmentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VisitorLogUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<VisitorLogCreateWithoutStaffInput, VisitorLogUncheckedCreateWithoutStaffInput> | VisitorLogCreateWithoutStaffInput[] | VisitorLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutStaffInput | VisitorLogCreateOrConnectWithoutStaffInput[]
    upsert?: VisitorLogUpsertWithWhereUniqueWithoutStaffInput | VisitorLogUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: VisitorLogCreateManyStaffInputEnvelope
    set?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    disconnect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    delete?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    update?: VisitorLogUpdateWithWhereUniqueWithoutStaffInput | VisitorLogUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: VisitorLogUpdateManyWithWhereWithoutStaffInput | VisitorLogUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: VisitorLogScalarWhereInput | VisitorLogScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput> | AppointmentCreateWithoutStaffInput[] | AppointmentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStaffInput | AppointmentCreateOrConnectWithoutStaffInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutStaffInput | AppointmentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AppointmentCreateManyStaffInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutStaffInput | AppointmentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutStaffInput | AppointmentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutStaffsInput = {
    create?: XOR<CompanyCreateWithoutStaffsInput, CompanyUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutStaffsInput
    connect?: CompanyWhereUniqueInput
  }

  export type VisitorLogCreateNestedManyWithoutVisitorInput = {
    create?: XOR<VisitorLogCreateWithoutVisitorInput, VisitorLogUncheckedCreateWithoutVisitorInput> | VisitorLogCreateWithoutVisitorInput[] | VisitorLogUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutVisitorInput | VisitorLogCreateOrConnectWithoutVisitorInput[]
    createMany?: VisitorLogCreateManyVisitorInputEnvelope
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutVisitorInput = {
    create?: XOR<AppointmentCreateWithoutVisitorInput, AppointmentUncheckedCreateWithoutVisitorInput> | AppointmentCreateWithoutVisitorInput[] | AppointmentUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVisitorInput | AppointmentCreateOrConnectWithoutVisitorInput[]
    createMany?: AppointmentCreateManyVisitorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VisitorLogUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<VisitorLogCreateWithoutVisitorInput, VisitorLogUncheckedCreateWithoutVisitorInput> | VisitorLogCreateWithoutVisitorInput[] | VisitorLogUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutVisitorInput | VisitorLogCreateOrConnectWithoutVisitorInput[]
    createMany?: VisitorLogCreateManyVisitorInputEnvelope
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<AppointmentCreateWithoutVisitorInput, AppointmentUncheckedCreateWithoutVisitorInput> | AppointmentCreateWithoutVisitorInput[] | AppointmentUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVisitorInput | AppointmentCreateOrConnectWithoutVisitorInput[]
    createMany?: AppointmentCreateManyVisitorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CompanyUpdateOneWithoutStaffsNestedInput = {
    create?: XOR<CompanyCreateWithoutStaffsInput, CompanyUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutStaffsInput
    upsert?: CompanyUpsertWithoutStaffsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutStaffsInput, CompanyUpdateWithoutStaffsInput>, CompanyUncheckedUpdateWithoutStaffsInput>
  }

  export type VisitorLogUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<VisitorLogCreateWithoutVisitorInput, VisitorLogUncheckedCreateWithoutVisitorInput> | VisitorLogCreateWithoutVisitorInput[] | VisitorLogUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutVisitorInput | VisitorLogCreateOrConnectWithoutVisitorInput[]
    upsert?: VisitorLogUpsertWithWhereUniqueWithoutVisitorInput | VisitorLogUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: VisitorLogCreateManyVisitorInputEnvelope
    set?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    disconnect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    delete?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    update?: VisitorLogUpdateWithWhereUniqueWithoutVisitorInput | VisitorLogUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: VisitorLogUpdateManyWithWhereWithoutVisitorInput | VisitorLogUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: VisitorLogScalarWhereInput | VisitorLogScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<AppointmentCreateWithoutVisitorInput, AppointmentUncheckedCreateWithoutVisitorInput> | AppointmentCreateWithoutVisitorInput[] | AppointmentUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVisitorInput | AppointmentCreateOrConnectWithoutVisitorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutVisitorInput | AppointmentUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: AppointmentCreateManyVisitorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutVisitorInput | AppointmentUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutVisitorInput | AppointmentUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VisitorLogUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<VisitorLogCreateWithoutVisitorInput, VisitorLogUncheckedCreateWithoutVisitorInput> | VisitorLogCreateWithoutVisitorInput[] | VisitorLogUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorLogCreateOrConnectWithoutVisitorInput | VisitorLogCreateOrConnectWithoutVisitorInput[]
    upsert?: VisitorLogUpsertWithWhereUniqueWithoutVisitorInput | VisitorLogUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: VisitorLogCreateManyVisitorInputEnvelope
    set?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    disconnect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    delete?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    connect?: VisitorLogWhereUniqueInput | VisitorLogWhereUniqueInput[]
    update?: VisitorLogUpdateWithWhereUniqueWithoutVisitorInput | VisitorLogUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: VisitorLogUpdateManyWithWhereWithoutVisitorInput | VisitorLogUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: VisitorLogScalarWhereInput | VisitorLogScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<AppointmentCreateWithoutVisitorInput, AppointmentUncheckedCreateWithoutVisitorInput> | AppointmentCreateWithoutVisitorInput[] | AppointmentUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutVisitorInput | AppointmentCreateOrConnectWithoutVisitorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutVisitorInput | AppointmentUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: AppointmentCreateManyVisitorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutVisitorInput | AppointmentUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutVisitorInput | AppointmentUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VisitorCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VisitorCreateWithoutCompanyInput, VisitorUncheckedCreateWithoutCompanyInput> | VisitorCreateWithoutCompanyInput[] | VisitorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutCompanyInput | VisitorCreateOrConnectWithoutCompanyInput[]
    createMany?: VisitorCreateManyCompanyInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type VisitorUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VisitorCreateWithoutCompanyInput, VisitorUncheckedCreateWithoutCompanyInput> | VisitorCreateWithoutCompanyInput[] | VisitorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutCompanyInput | VisitorCreateOrConnectWithoutCompanyInput[]
    createMany?: VisitorCreateManyCompanyInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type VisitorUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VisitorCreateWithoutCompanyInput, VisitorUncheckedCreateWithoutCompanyInput> | VisitorCreateWithoutCompanyInput[] | VisitorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutCompanyInput | VisitorCreateOrConnectWithoutCompanyInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutCompanyInput | VisitorUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VisitorCreateManyCompanyInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutCompanyInput | VisitorUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutCompanyInput | VisitorUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type VisitorUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VisitorCreateWithoutCompanyInput, VisitorUncheckedCreateWithoutCompanyInput> | VisitorCreateWithoutCompanyInput[] | VisitorUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutCompanyInput | VisitorCreateOrConnectWithoutCompanyInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutCompanyInput | VisitorUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VisitorCreateManyCompanyInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutCompanyInput | VisitorUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutCompanyInput | VisitorUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type VisitorCreateNestedOneWithoutHistoryInput = {
    create?: XOR<VisitorCreateWithoutHistoryInput, VisitorUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutHistoryInput
    connect?: VisitorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVisitorLogsInput = {
    create?: XOR<UserCreateWithoutVisitorLogsInput, UserUncheckedCreateWithoutVisitorLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitorLogsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VisitorUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<VisitorCreateWithoutHistoryInput, VisitorUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutHistoryInput
    upsert?: VisitorUpsertWithoutHistoryInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutHistoryInput, VisitorUpdateWithoutHistoryInput>, VisitorUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutVisitorLogsNestedInput = {
    create?: XOR<UserCreateWithoutVisitorLogsInput, UserUncheckedCreateWithoutVisitorLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitorLogsInput
    upsert?: UserUpsertWithoutVisitorLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitorLogsInput, UserUpdateWithoutVisitorLogsInput>, UserUncheckedUpdateWithoutVisitorLogsInput>
  }

  export type UserCreateNestedManyWithoutFloorInput = {
    create?: XOR<UserCreateWithoutFloorInput, UserUncheckedCreateWithoutFloorInput> | UserCreateWithoutFloorInput[] | UserUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFloorInput | UserCreateOrConnectWithoutFloorInput[]
    createMany?: UserCreateManyFloorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<UserCreateWithoutFloorInput, UserUncheckedCreateWithoutFloorInput> | UserCreateWithoutFloorInput[] | UserUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFloorInput | UserCreateOrConnectWithoutFloorInput[]
    createMany?: UserCreateManyFloorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutFloorNestedInput = {
    create?: XOR<UserCreateWithoutFloorInput, UserUncheckedCreateWithoutFloorInput> | UserCreateWithoutFloorInput[] | UserUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFloorInput | UserCreateOrConnectWithoutFloorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFloorInput | UserUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: UserCreateManyFloorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFloorInput | UserUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFloorInput | UserUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<UserCreateWithoutFloorInput, UserUncheckedCreateWithoutFloorInput> | UserCreateWithoutFloorInput[] | UserUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFloorInput | UserCreateOrConnectWithoutFloorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFloorInput | UserUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: UserCreateManyFloorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFloorInput | UserUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFloorInput | UserUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type VisitorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<VisitorCreateWithoutAppointmentsInput, VisitorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutAppointmentsInput
    connect?: VisitorWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type VisitorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<VisitorCreateWithoutAppointmentsInput, VisitorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutAppointmentsInput
    upsert?: VisitorUpsertWithoutAppointmentsInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutAppointmentsInput, VisitorUpdateWithoutAppointmentsInput>, VisitorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VisitorLogCreateWithoutStaffInput = {
    Id?: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
    Visitor: VisitorCreateNestedOneWithoutHistoryInput
  }

  export type VisitorLogUncheckedCreateWithoutStaffInput = {
    Id?: string
    VisitorId: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
  }

  export type VisitorLogCreateOrConnectWithoutStaffInput = {
    where: VisitorLogWhereUniqueInput
    create: XOR<VisitorLogCreateWithoutStaffInput, VisitorLogUncheckedCreateWithoutStaffInput>
  }

  export type VisitorLogCreateManyStaffInputEnvelope = {
    data: VisitorLogCreateManyStaffInput | VisitorLogCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutUserInput = {
    Id?: string
    Name: string
  }

  export type DepartmentUncheckedCreateWithoutUserInput = {
    Id?: string
    Name: string
  }

  export type DepartmentCreateOrConnectWithoutUserInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUserInput, DepartmentUncheckedCreateWithoutUserInput>
  }

  export type FloorCreateWithoutUserInput = {
    Id?: string
    Name: string
  }

  export type FloorUncheckedCreateWithoutUserInput = {
    Id?: string
    Name: string
  }

  export type FloorCreateOrConnectWithoutUserInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutUserInput, FloorUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateWithoutStaffInput = {
    Id?: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
    Visitor: VisitorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutStaffInput = {
    Id?: string
    VisitorId: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
  }

  export type AppointmentCreateOrConnectWithoutStaffInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput>
  }

  export type AppointmentCreateManyStaffInputEnvelope = {
    data: AppointmentCreateManyStaffInput | AppointmentCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type VisitorLogUpsertWithWhereUniqueWithoutStaffInput = {
    where: VisitorLogWhereUniqueInput
    update: XOR<VisitorLogUpdateWithoutStaffInput, VisitorLogUncheckedUpdateWithoutStaffInput>
    create: XOR<VisitorLogCreateWithoutStaffInput, VisitorLogUncheckedCreateWithoutStaffInput>
  }

  export type VisitorLogUpdateWithWhereUniqueWithoutStaffInput = {
    where: VisitorLogWhereUniqueInput
    data: XOR<VisitorLogUpdateWithoutStaffInput, VisitorLogUncheckedUpdateWithoutStaffInput>
  }

  export type VisitorLogUpdateManyWithWhereWithoutStaffInput = {
    where: VisitorLogScalarWhereInput
    data: XOR<VisitorLogUpdateManyMutationInput, VisitorLogUncheckedUpdateManyWithoutStaffInput>
  }

  export type VisitorLogScalarWhereInput = {
    AND?: VisitorLogScalarWhereInput | VisitorLogScalarWhereInput[]
    OR?: VisitorLogScalarWhereInput[]
    NOT?: VisitorLogScalarWhereInput | VisitorLogScalarWhereInput[]
    Id?: StringFilter<"VisitorLog"> | string
    VisitorId?: StringFilter<"VisitorLog"> | string
    StaffId?: StringFilter<"VisitorLog"> | string
    PurposeOfVisit?: StringFilter<"VisitorLog"> | string
    TagNo?: StringFilter<"VisitorLog"> | string
    NoOfVistiors?: IntFilter<"VisitorLog"> | number
    CheckInTime?: StringFilter<"VisitorLog"> | string
    CheckOutTime?: StringNullableFilter<"VisitorLog"> | string | null
    CreatedAt?: DateTimeFilter<"VisitorLog"> | Date | string
  }

  export type DepartmentUpsertWithoutUserInput = {
    update: XOR<DepartmentUpdateWithoutUserInput, DepartmentUncheckedUpdateWithoutUserInput>
    create: XOR<DepartmentCreateWithoutUserInput, DepartmentUncheckedCreateWithoutUserInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUserInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUserInput, DepartmentUncheckedUpdateWithoutUserInput>
  }

  export type DepartmentUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type FloorUpsertWithoutUserInput = {
    update: XOR<FloorUpdateWithoutUserInput, FloorUncheckedUpdateWithoutUserInput>
    create: XOR<FloorCreateWithoutUserInput, FloorUncheckedCreateWithoutUserInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutUserInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutUserInput, FloorUncheckedUpdateWithoutUserInput>
  }

  export type FloorUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type FloorUncheckedUpdateWithoutUserInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutStaffInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutStaffInput, AppointmentUncheckedUpdateWithoutStaffInput>
    create: XOR<AppointmentCreateWithoutStaffInput, AppointmentUncheckedCreateWithoutStaffInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutStaffInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutStaffInput, AppointmentUncheckedUpdateWithoutStaffInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutStaffInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutStaffInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    Id?: StringFilter<"Appointment"> | string
    StaffId?: StringFilter<"Appointment"> | string
    VisitorId?: StringFilter<"Appointment"> | string
    Purpose?: StringFilter<"Appointment"> | string
    Message?: StringFilter<"Appointment"> | string
    NoVisitors?: IntFilter<"Appointment"> | number
    InvitationCode?: StringFilter<"Appointment"> | string
    Status?: StringFilter<"Appointment"> | string
    CreatedAt?: DateTimeFilter<"Appointment"> | Date | string
    AppointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    RescheduleDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    CancellationReason?: StringNullableFilter<"Appointment"> | string | null
  }

  export type CompanyCreateWithoutStaffsInput = {
    Id?: string
    Name: string
    Address?: string | null
  }

  export type CompanyUncheckedCreateWithoutStaffsInput = {
    Id?: string
    Name: string
    Address?: string | null
  }

  export type CompanyCreateOrConnectWithoutStaffsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutStaffsInput, CompanyUncheckedCreateWithoutStaffsInput>
  }

  export type VisitorLogCreateWithoutVisitorInput = {
    Id?: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
    Staff: UserCreateNestedOneWithoutVisitorLogsInput
  }

  export type VisitorLogUncheckedCreateWithoutVisitorInput = {
    Id?: string
    StaffId: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
  }

  export type VisitorLogCreateOrConnectWithoutVisitorInput = {
    where: VisitorLogWhereUniqueInput
    create: XOR<VisitorLogCreateWithoutVisitorInput, VisitorLogUncheckedCreateWithoutVisitorInput>
  }

  export type VisitorLogCreateManyVisitorInputEnvelope = {
    data: VisitorLogCreateManyVisitorInput | VisitorLogCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutVisitorInput = {
    Id?: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
    Staff: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutVisitorInput = {
    Id?: string
    StaffId: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
  }

  export type AppointmentCreateOrConnectWithoutVisitorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutVisitorInput, AppointmentUncheckedCreateWithoutVisitorInput>
  }

  export type AppointmentCreateManyVisitorInputEnvelope = {
    data: AppointmentCreateManyVisitorInput | AppointmentCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutStaffsInput = {
    update: XOR<CompanyUpdateWithoutStaffsInput, CompanyUncheckedUpdateWithoutStaffsInput>
    create: XOR<CompanyCreateWithoutStaffsInput, CompanyUncheckedCreateWithoutStaffsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutStaffsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutStaffsInput, CompanyUncheckedUpdateWithoutStaffsInput>
  }

  export type CompanyUpdateWithoutStaffsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUncheckedUpdateWithoutStaffsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitorLogUpsertWithWhereUniqueWithoutVisitorInput = {
    where: VisitorLogWhereUniqueInput
    update: XOR<VisitorLogUpdateWithoutVisitorInput, VisitorLogUncheckedUpdateWithoutVisitorInput>
    create: XOR<VisitorLogCreateWithoutVisitorInput, VisitorLogUncheckedCreateWithoutVisitorInput>
  }

  export type VisitorLogUpdateWithWhereUniqueWithoutVisitorInput = {
    where: VisitorLogWhereUniqueInput
    data: XOR<VisitorLogUpdateWithoutVisitorInput, VisitorLogUncheckedUpdateWithoutVisitorInput>
  }

  export type VisitorLogUpdateManyWithWhereWithoutVisitorInput = {
    where: VisitorLogScalarWhereInput
    data: XOR<VisitorLogUpdateManyMutationInput, VisitorLogUncheckedUpdateManyWithoutVisitorInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutVisitorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutVisitorInput, AppointmentUncheckedUpdateWithoutVisitorInput>
    create: XOR<AppointmentCreateWithoutVisitorInput, AppointmentUncheckedCreateWithoutVisitorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutVisitorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutVisitorInput, AppointmentUncheckedUpdateWithoutVisitorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutVisitorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutVisitorInput>
  }

  export type VisitorCreateWithoutCompanyInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    History?: VisitorLogCreateNestedManyWithoutVisitorInput
    Appointments?: AppointmentCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutCompanyInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    History?: VisitorLogUncheckedCreateNestedManyWithoutVisitorInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutCompanyInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutCompanyInput, VisitorUncheckedCreateWithoutCompanyInput>
  }

  export type VisitorCreateManyCompanyInputEnvelope = {
    data: VisitorCreateManyCompanyInput | VisitorCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type VisitorUpsertWithWhereUniqueWithoutCompanyInput = {
    where: VisitorWhereUniqueInput
    update: XOR<VisitorUpdateWithoutCompanyInput, VisitorUncheckedUpdateWithoutCompanyInput>
    create: XOR<VisitorCreateWithoutCompanyInput, VisitorUncheckedCreateWithoutCompanyInput>
  }

  export type VisitorUpdateWithWhereUniqueWithoutCompanyInput = {
    where: VisitorWhereUniqueInput
    data: XOR<VisitorUpdateWithoutCompanyInput, VisitorUncheckedUpdateWithoutCompanyInput>
  }

  export type VisitorUpdateManyWithWhereWithoutCompanyInput = {
    where: VisitorScalarWhereInput
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyWithoutCompanyInput>
  }

  export type VisitorScalarWhereInput = {
    AND?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    OR?: VisitorScalarWhereInput[]
    NOT?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    Id?: StringFilter<"Visitor"> | string
    Name?: StringFilter<"Visitor"> | string
    Phone?: StringFilter<"Visitor"> | string
    Email?: StringNullableFilter<"Visitor"> | string | null
    Address?: StringNullableFilter<"Visitor"> | string | null
    Photo?: StringFilter<"Visitor"> | string
    CompanyId?: StringNullableFilter<"Visitor"> | string | null
  }

  export type VisitorCreateWithoutHistoryInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    Company?: CompanyCreateNestedOneWithoutStaffsInput
    Appointments?: AppointmentCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutHistoryInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    CompanyId?: string | null
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutHistoryInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutHistoryInput, VisitorUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutVisitorLogsInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    Department: DepartmentCreateNestedOneWithoutUserInput
    Floor: FloorCreateNestedOneWithoutUserInput
    Appointments?: AppointmentCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutVisitorLogsInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    DepartmentId: string
    FloorId: string
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutVisitorLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitorLogsInput, UserUncheckedCreateWithoutVisitorLogsInput>
  }

  export type VisitorUpsertWithoutHistoryInput = {
    update: XOR<VisitorUpdateWithoutHistoryInput, VisitorUncheckedUpdateWithoutHistoryInput>
    create: XOR<VisitorCreateWithoutHistoryInput, VisitorUncheckedCreateWithoutHistoryInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutHistoryInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutHistoryInput, VisitorUncheckedUpdateWithoutHistoryInput>
  }

  export type VisitorUpdateWithoutHistoryInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    Company?: CompanyUpdateOneWithoutStaffsNestedInput
    Appointments?: AppointmentUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutHistoryInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type UserUpsertWithoutVisitorLogsInput = {
    update: XOR<UserUpdateWithoutVisitorLogsInput, UserUncheckedUpdateWithoutVisitorLogsInput>
    create: XOR<UserCreateWithoutVisitorLogsInput, UserUncheckedCreateWithoutVisitorLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitorLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitorLogsInput, UserUncheckedUpdateWithoutVisitorLogsInput>
  }

  export type UserUpdateWithoutVisitorLogsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneRequiredWithoutUserNestedInput
    Floor?: FloorUpdateOneRequiredWithoutUserNestedInput
    Appointments?: AppointmentUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitorLogsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: StringFieldUpdateOperationsInput | string
    FloorId?: StringFieldUpdateOperationsInput | string
    Appointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserCreateWithoutFloorInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    VisitorLogs?: VisitorLogCreateNestedManyWithoutStaffInput
    Department: DepartmentCreateNestedOneWithoutUserInput
    Appointments?: AppointmentCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutFloorInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    DepartmentId: string
    VisitorLogs?: VisitorLogUncheckedCreateNestedManyWithoutStaffInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutFloorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFloorInput, UserUncheckedCreateWithoutFloorInput>
  }

  export type UserCreateManyFloorInputEnvelope = {
    data: UserCreateManyFloorInput | UserCreateManyFloorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutFloorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFloorInput, UserUncheckedUpdateWithoutFloorInput>
    create: XOR<UserCreateWithoutFloorInput, UserUncheckedCreateWithoutFloorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFloorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFloorInput, UserUncheckedUpdateWithoutFloorInput>
  }

  export type UserUpdateManyWithWhereWithoutFloorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFloorInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    Id?: StringFilter<"User"> | string
    FirstName?: StringFilter<"User"> | string
    LastName?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    Role?: EnumRoleFilter<"User"> | $Enums.Role
    Password?: StringFilter<"User"> | string
    StaffID?: StringNullableFilter<"User"> | string | null
    DepartmentId?: StringFilter<"User"> | string
    FloorId?: StringFilter<"User"> | string
  }

  export type UserCreateWithoutDepartmentInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    VisitorLogs?: VisitorLogCreateNestedManyWithoutStaffInput
    Floor: FloorCreateNestedOneWithoutUserInput
    Appointments?: AppointmentCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    FloorId: string
    VisitorLogs?: VisitorLogUncheckedCreateNestedManyWithoutStaffInput
    Appointments?: AppointmentUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    VisitorLogs?: VisitorLogCreateNestedManyWithoutStaffInput
    Department: DepartmentCreateNestedOneWithoutUserInput
    Floor: FloorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    DepartmentId: string
    FloorId: string
    VisitorLogs?: VisitorLogUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type VisitorCreateWithoutAppointmentsInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    Company?: CompanyCreateNestedOneWithoutStaffsInput
    History?: VisitorLogCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutAppointmentsInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
    CompanyId?: string | null
    History?: VisitorLogUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutAppointmentsInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutAppointmentsInput, VisitorUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    VisitorLogs?: VisitorLogUpdateManyWithoutStaffNestedInput
    Department?: DepartmentUpdateOneRequiredWithoutUserNestedInput
    Floor?: FloorUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: StringFieldUpdateOperationsInput | string
    FloorId?: StringFieldUpdateOperationsInput | string
    VisitorLogs?: VisitorLogUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type VisitorUpsertWithoutAppointmentsInput = {
    update: XOR<VisitorUpdateWithoutAppointmentsInput, VisitorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<VisitorCreateWithoutAppointmentsInput, VisitorUncheckedCreateWithoutAppointmentsInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutAppointmentsInput, VisitorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type VisitorUpdateWithoutAppointmentsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    Company?: CompanyUpdateOneWithoutStaffsNestedInput
    History?: VisitorLogUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutAppointmentsInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    CompanyId?: NullableStringFieldUpdateOperationsInput | string | null
    History?: VisitorLogUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorLogCreateManyStaffInput = {
    Id?: string
    VisitorId: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
  }

  export type AppointmentCreateManyStaffInput = {
    Id?: string
    VisitorId: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
  }

  export type VisitorLogUpdateWithoutStaffInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Visitor?: VisitorUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type VisitorLogUncheckedUpdateWithoutStaffInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorLogUncheckedUpdateManyWithoutStaffInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutStaffInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    Visitor?: VisitorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutStaffInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutStaffInput = {
    Id?: StringFieldUpdateOperationsInput | string
    VisitorId?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitorLogCreateManyVisitorInput = {
    Id?: string
    StaffId: string
    PurposeOfVisit: string
    TagNo: string
    NoOfVistiors: number
    CheckInTime: string
    CheckOutTime?: string | null
    CreatedAt: Date | string
  }

  export type AppointmentCreateManyVisitorInput = {
    Id?: string
    StaffId: string
    Purpose: string
    Message: string
    NoVisitors: number
    InvitationCode: string
    Status?: string
    CreatedAt: Date | string
    AppointmentDate: Date | string
    RescheduleDate?: Date | string | null
    CancellationReason?: string | null
  }

  export type VisitorLogUpdateWithoutVisitorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Staff?: UserUpdateOneRequiredWithoutVisitorLogsNestedInput
  }

  export type VisitorLogUncheckedUpdateWithoutVisitorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorLogUncheckedUpdateManyWithoutVisitorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    PurposeOfVisit?: StringFieldUpdateOperationsInput | string
    TagNo?: StringFieldUpdateOperationsInput | string
    NoOfVistiors?: IntFieldUpdateOperationsInput | number
    CheckInTime?: StringFieldUpdateOperationsInput | string
    CheckOutTime?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutVisitorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    Staff?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutVisitorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutVisitorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    StaffId?: StringFieldUpdateOperationsInput | string
    Purpose?: StringFieldUpdateOperationsInput | string
    Message?: StringFieldUpdateOperationsInput | string
    NoVisitors?: IntFieldUpdateOperationsInput | number
    InvitationCode?: StringFieldUpdateOperationsInput | string
    Status?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    RescheduleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitorCreateManyCompanyInput = {
    Id?: string
    Name: string
    Phone: string
    Email?: string | null
    Address?: string | null
    Photo: string
  }

  export type VisitorUpdateWithoutCompanyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    History?: VisitorLogUpdateManyWithoutVisitorNestedInput
    Appointments?: AppointmentUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutCompanyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
    History?: VisitorLogUncheckedUpdateManyWithoutVisitorNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateManyWithoutCompanyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    Photo?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyFloorInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    DepartmentId: string
  }

  export type UserUpdateWithoutFloorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    VisitorLogs?: VisitorLogUpdateManyWithoutStaffNestedInput
    Department?: DepartmentUpdateOneRequiredWithoutUserNestedInput
    Appointments?: AppointmentUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutFloorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: StringFieldUpdateOperationsInput | string
    VisitorLogs?: VisitorLogUncheckedUpdateManyWithoutStaffNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFloorInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyDepartmentInput = {
    Id?: string
    FirstName: string
    LastName: string
    Email: string
    Role?: $Enums.Role
    Password: string
    StaffID?: string | null
    FloorId: string
  }

  export type UserUpdateWithoutDepartmentInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    VisitorLogs?: VisitorLogUpdateManyWithoutStaffNestedInput
    Floor?: FloorUpdateOneRequiredWithoutUserNestedInput
    Appointments?: AppointmentUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    FloorId?: StringFieldUpdateOperationsInput | string
    VisitorLogs?: VisitorLogUncheckedUpdateManyWithoutStaffNestedInput
    Appointments?: AppointmentUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    Id?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Password?: StringFieldUpdateOperationsInput | string
    StaffID?: NullableStringFieldUpdateOperationsInput | string | null
    FloorId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}