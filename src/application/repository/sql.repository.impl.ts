import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class SqlRepositoryImpl<Entity> {
  protected repository: Repository<Entity>;

  async findAll(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return this.repository.find(options);
  }

  async findOne(options?: FindOneOptions<Entity>): Promise<Entity> {
    return this.repository.findOne(options);
  }

  async insert(entity: QueryDeepPartialEntity<Entity>): Promise<Entity> {
    return this.repository.insert(entity).then((result) => {
      return result.generatedMaps[0] as Entity;
    });
  }

  async update(
    id: number,
    entity: QueryDeepPartialEntity<Entity>,
  ): Promise<UpdateResult> {
    return this.repository.update(id, entity);
  }

  async count(options?: FindManyOptions<Entity>): Promise<number> {
    return this.repository.count(options);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
