import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateEvent, UpdateResult } from 'typeorm';
import { Contact } from './contact.entity';
import { CONTACT_REPOSITORY } from '../common/constants';

@Injectable()
export class ContactService {
  constructor(
    @Inject(CONTACT_REPOSITORY)
    private contactRepository: Repository<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  async findById(id: number): Promise<Contact | undefined> {
    return this.contactRepository.findOne({ where: { id: id } });
  }

  async create(contact: Contact): Promise<Contact> {
    const result = await this.contactRepository.save(contact);
    return result;
    
  }

  async update(contact: Contact): Promise<Contact> {
    const result = await this.contactRepository.save(contact);
    return result;
  }

  async delete(id: number): Promise<DeleteResult | undefined> {
    const result = await this.contactRepository.delete(id);
    return result;
  }
}
