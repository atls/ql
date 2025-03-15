export type ExcludeFunctions<
  ObjectType,
  Key extends keyof ObjectType,
> = ObjectType[Key] extends Function ? never : Key extends symbol ? never : Key
