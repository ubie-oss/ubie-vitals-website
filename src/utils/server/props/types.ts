import type { Documentation } from 'react-docgen';

export type ExtractRecordValueType<T> = T extends Record<string, infer P> ? P : never;

export type PropDescriptor = ExtractRecordValueType<Documentation['props']>;

export type TsTypeDescriptor = NonNullable<PropDescriptor['tsType']>;
