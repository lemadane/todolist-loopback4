import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    required: true
  })
  title!: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'boolean',
  })
  completed?: boolean;

  @property({
    type: 'any',
  })
  tag?: unknown;



  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
